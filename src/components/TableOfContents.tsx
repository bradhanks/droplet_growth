'use client';

import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { type Section, type Subsection } from '@/lib/sections';

export function TableOfContents({ tableOfContents }: { tableOfContents: Array<Section> }) {
  const [currentSection, setCurrentSection] = useState(tableOfContents[0]?.id);
  // Store heading elements in state to avoid repeated DOM queries
  const [headings, setHeadings] = useState<Array<{ id: string; top: number }>>([]);

  // Use useCallback to memoize this function
  const getHeadings = useCallback(() => {
    // Flatten the sections and subsections into a single array of IDs
    const headingIds = tableOfContents.flatMap((node) => [
      node.id,
      ...node.children.map((child) => child.id),
    ]);

    const newHeadings = headingIds
      .map((id) => {
        const el = document.getElementById(id);
        if (!el) return null;

        const style = window.getComputedStyle(el);
        const scrollMt = parseFloat(style.scrollMarginTop);
        // Calculate the absolute top position relative to the document
        const top = window.scrollY + el.getBoundingClientRect().top - scrollMt;
        return { id, top };
      })
      .filter((x): x is { id: string; top: number } => x !== null);

    setHeadings(newHeadings);
  }, [tableOfContents]);

  // Effect to calculate positions on mount and resize
  useEffect(() => {
    if (tableOfContents.length === 0) return;

    // Initial calculation
    getHeadings();

    // Debounce the resize handler to improve performance
    let timeoutId: NodeJS.Timeout;
    function debouncedGetHeadings() {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(getHeadings, 100);
    }

    window.addEventListener('resize', debouncedGetHeadings);
    return () => {
      window.removeEventListener('resize', debouncedGetHeadings);
    };
  }, [getHeadings, tableOfContents.length]);

  // Effect to handle scroll events
  useEffect(() => {
    if (headings.length === 0) return;

    function onScroll() {
      const top = window.scrollY;
      let currentId = headings[0]?.id;

      for (const heading of headings) {
        // Add a small top offset (e.g., 10px) for better UX
        if (top >= heading.top - 10) {
          currentId = heading.id;
        } else {
          break; // Headings are sorted, so we can break early
        }
      }
      setCurrentSection(currentId);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    // Run on mount to set the initial active section
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [headings]);

  function isActive(section: Section | Subsection) {
    if (section.id === currentSection) {
      return true;
    }
    return Array.isArray(section.children) ? section.children.some(isActive) : false;
  }

  return (
    <div className="hidden xl:sticky xl:top-19 xl:-mr-6 xl:block xl:h-[calc(100vh-4.75rem)] xl:flex-none xl:overflow-y-auto xl:py-16 xl:pr-6">
      <nav aria-labelledby="on-this-page-title" className="w-56">
        {tableOfContents.length > 0 && (
          <>
            <h2
              id="on-this-page-title"
              className="font-display text-sm font-medium text-slate-900 dark:text-white"
            >
              On this page
            </h2>
            <ol role="list" className="mt-4 space-y-3 text-sm">
              {tableOfContents.map((section) => (
                <li key={section.id}>
                  <h3>
                    <Link
                      href={`#${section.id}`}
                      className={clsx(
                        isActive(section)
                          ? 'text-sky-500'
                          : 'font-normal text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300',
                      )}
                    >
                      {section.title}
                    </Link>
                  </h3>
                  {section.children.length > 0 && (
                    <ol
                      role="list"
                      className="mt-2 space-y-3 pl-5 text-slate-500 dark:text-slate-400"
                    >
                      {section.children.map((subSection) => (
                        <li key={subSection.id}>
                          <Link
                            href={`#${subSection.id}`}
                            className={clsx(
                              isActive(subSection)
                                ? 'text-sky-500'
                                : 'hover:text-slate-600 dark:hover:text-slate-300',
                            )}
                          >
                            {subSection.title}
                          </Link>
                        </li>
                      ))}
                    </ol>
                  )}
                </li>
              ))}
            </ol>
          </>
        )}
      </nav>
    </div>
  );
}
