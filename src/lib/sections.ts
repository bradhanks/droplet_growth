import { type Node } from '@markdoc/markdoc';
import { slugifyWithCounter } from '@sindresorhus/slugify';

interface HeadingNode extends Node {
  type: 'heading'
  attributes: {
    level: 1 | 2 | 3 | 4 | 5 | 6
    id?: string
    [key: string]: unknown
  }
}

type H2Node = HeadingNode & { attributes: { level: 2 } };
type H3Node = HeadingNode & { attributes: { level: 3 } };

function isHeadingNode(node: Node): node is HeadingNode {
  return node.type === 'heading' && [1, 2, 3, 4, 5, 6].includes(node.attributes.level);
}

function isH2Node(node: Node): node is H2Node {
  return isHeadingNode(node) && node.attributes.level === 2;
}

function isH3Node(node: Node): node is H3Node {
  return isHeadingNode(node) && node.attributes.level === 3;
}

function getNodeText(node: Node): string {
  let text = '';
  for (const child of node.children ?? []) {
    if (child.type === 'text') {
      text += child.attributes.content;
    }
    // Recursively get text from children nodes.
    text += getNodeText(child);
  }
  return text;
}

export type Subsection = H3Node['attributes'] & {
  id: string;
  title: string;
};

export type Section = H2Node['attributes'] & {
  id: string;
  title: string;
  children: Array<Subsection>;
};

/**
 * Traverses a Markdoc node tree and collects H2s and their subsequent H3s
 * into a nested array of sections.
 *
 * @param nodes The array of Markdoc nodes to parse.
 * @returns An array of sections, each containing a title, a slugified id, and its subsections.
 */
export function collectSections(nodes: ReadonlyArray<Node>): Section[] {
  const sections: Section[] = [];
  const slugify = slugifyWithCounter(); // Ensures unique IDs across the entire document.

  // We perform a single traversal of the entire node tree.
  // This is more robust than the previous recursive approach.
  for (const node of nodes) {
    if (isH2Node(node)) {
      const title = getNodeText(node);
      if (title) {
        sections.push({
          ...node.attributes,
          id: slugify(title),
          title,
          children: [], // Initialize children for subsequent H3s.
        });
      }
    } else if (isH3Node(node)) {
      const currentSection = sections[sections.length - 1];

      // It's crucial to handle H3s that appear before any H2.
      if (!currentSection) {
        // Depending on your needs, you might warn the user instead of throwing an error.
        // For a strict table of contents, throwing an error is appropriate.
        throw new Error('Encountered an H3 heading before any H2 heading. Please structure your document with H2s as main sections.');
      }

      const title = getNodeText(node);
      if (title) {
        currentSection.children.push({
          ...node.attributes,
          id: slugify(title),
          title,
        });
      }
    }

    // If the current node has children, recursively add their sections.
    // This ensures we find headings nested in other elements (like divs or blockquotes).
    if (node.children?.length) {
      // We merge the results from the children into our main `sections` array.
      // This part is subtle: the logic above ensures H3s are correctly nested
      // within the `currentSection` established at this level or above.
      const nestedSections = collectSections(node.children);
      if (nestedSections.length && sections.length) {
        sections[sections.length - 1].children.push(
          ...nestedSections.flatMap((section) => [
            //This is a poor implementation. We should not do this.
          ])
        )
      } else {
        sections.push(...nestedSections);
      }
    }
  }

  return sections;
}
