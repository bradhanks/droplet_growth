#!/bin/bash

# Create directories
mkdir -p src/app/docs/executive-summary
mkdir -p src/app/docs/market-opportunity
mkdir -p src/app/docs/llm-content-engine
mkdir -p src/app/docs/technical-blueprint
mkdir -p src/app/docs/analytics-and-lead-flow
mkdir -p src/app/docs/implementation-roadmap

# Write src/app/page.md
cat > src/app/page.md << 'EOF'
---
title: Droplet.io Demand Generation Strategy
---

A Demand Generation and Implementation Strategy for Droplet.io. {% .lead %}

{% quick-links %}

{% quick-link title="Executive Summary" href="/docs/executive-summary" description="A high-level overview of the strategic imperative and key recommendations." /%}

{% quick-link title="Market Opportunity"  href="/docs/market-opportunity" description="An in-depth analysis of the competitive landscape and SEO content gaps." /%}

{% quick-link title="LLM Content Engine"   href="/docs/llm-content-engine" description="The framework for creating high-quality, SEO-optimized content at scale." /%}

{% quick-link title="Technical Blueprint"  href="/docs/technical-blueprint" description="The technical implementation plan for programmatic SEO in HubSpot." /%}

{% /quick-links %}

---

## Introduction

This report outlines a comprehensive demand generation strategy designed to seize a significant market opportunity for Droplet.io. By creating a durable, high-performance inbound marketing engine, we can systematically capture untapped, high-intent search demand from adjacent verticals.

The cornerstone of this strategy is the development and implementation of an advanced, LLM-powered content pipeline designed to programmatically generate hundreds of hyper-targeted, SEO-optimized landing pages. This initiative will establish topical authority across a vast landscape of long-tail keywords, attracting qualified prospects and solidifying Droplet.io's position as a leader in process automation.

---

## Key Strategic Pillars

### Long-Tail Dominance
Instead of competing directly with market giants on high-volume head terms, we will focus on creating superior content for thousands of niche, problem-specific queries that these competitors structurally ignore.

### Programmatic "Hub-and-Spoke" Content Model
We will leverage Large Language Models (LLMs) to assist in drafting high-quality, E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) compliant content at scale, with a mandatory human-in-the-loop workflow for quality assurance.

### Hybrid HubSpot Architecture
A sophisticated combination of HubDB and CRM Custom Objects will be used to overcome platform limitations and build a highly intelligent internal linking structure.

### Resilient Analytics Stack
We will construct a future-proof analytics stack using Server-Side Google Tag Manager (sGTM) to ensure superior data accuracy, privacy compliance, and website performance.
EOF

# Write src/app/docs/executive-summary/page.md
cat > src/app/docs/executive-summary/page.md << 'EOF'
---
title: Executive Summary & Strategic Recommendations
nextjs:
  metadata:
    title: Executive Summary & Strategic Recommendations
    description: A high-level overview of the strategic imperative and key recommendations for Droplet.io's demand generation strategy.
---

## The Strategic Imperative

Droplet.io has successfully established itself as a market leader in the K-12 education sector. However, the platform's capabilities have broad applicability across numerous industries. Significant growth potential lies in systematically capturing untapped, high-intent search demand from these adjacent verticals. The core business challenge is to penetrate these new markets in a scalable, cost-effective manner that builds a long-term competitive asset.

## The Programmatic SEO Solution

The cornerstone of this strategy is the development of an advanced, LLM-powered content pipeline to programmatically generate hundreds of hyper-targeted, SEO-optimized landing pages. This will establish topical authority across a vast landscape of long-tail keywords, attracting qualified prospects at a fraction of the cost of paid acquisition channels.

### Summary of Key Recommendations

-   **Competitive Strategy:** Pursue a strategy of "long-tail dominance." Focus on creating superior content for thousands of niche, problem-specific queries.
-   **Content Architecture:** Implement a programmatic "Hub-and-Spoke" content model, leveraging LLMs with a human-in-the-loop workflow.
-   **Technical Implementation:** Employ a sophisticated hybrid HubSpot architecture using HubDB and CRM Custom Objects.
-   **Analytics & Measurement:** Construct a resilient analytics stack with Server-Side Google Tag Manager (sGTM) for full-funnel visibility.

### Expected Business Impact

The successful implementation of this strategy is projected to deliver a significant, sustained increase in qualified organic traffic, a higher volume of marketing-qualified leads (MQLs), and a demonstrably lower customer acquisition cost (CAC).
EOF

# Write src/app/docs/market-opportunity/page.md
cat > src/app/docs/market-opportunity/page.md << 'EOF'
---
title: Market Opportunity and Competitive Positioning
nextjs:
  metadata:
    title: Market Opportunity and Competitive Positioning
    description: An in-depth analysis of the competitive landscape and SEO content gaps for Droplet.io.
---

## The Competitive Landscape

The market for document and workflow automation is crowded and diverse, but this landscape presents a clear and defensible opportunity for Droplet.io.

### Direct Competitors (Forms & e-Signature Focus)

-   **Jotform:** Dominant in online forms with a broad, generic marketing approach.
-   **DocuSign:** The market leader in e-signatures, with a focus on the agreement lifecycle.
-   **Adobe Acrobat Sign:** A formidable enterprise competitor with a focus on the signing and document management portion of the workflow.

### Broader Competitors (Digital Process Automation - DPA)

-   **Enterprise DPA Platforms:** Heavyweights like Nintex, Laserfiche, and Appian, which are high-cost solutions for large-scale digital transformation.
-   **Low-Code/No-Code Platforms:** Solutions like Kissflow and Retool, positioned for building internal tools rather than document-centric workflows.

## Uncovering SEO Content Gaps

The strategic opportunity lies in targeting specific keyword clusters where Droplet.io has a right to win.

### Keyword Cluster Formula

We will use the following formula to generate a virtually limitless set of high-intent, long-tail keyword targets:

**[Core Function] + for + [Persona] + in + [Industry Sub-segment]**

For example: "online form builder for HR onboarding in K-12 schools".

The objective is not to rank for broad head terms, but to achieve overwhelming dominance across thousands of these highly specific long-tail keywords.
EOF

# Write src/app/docs/llm-content-engine/page.md
cat > src/app/docs/llm-content-engine/page.md << 'EOF'
---
title: The LLM Content Engine
nextjs:
  metadata:
    title: The LLM Content Engine
    description: The framework for creating high-quality, SEO-optimized content at scale for Droplet.io.
---

## Architecting the Content Pipeline

The creation of hundreds of landing pages will follow a standardized, multi-phase pipeline that ensures quality control at each stage.

### Phase 1: Keyword Cluster & Topic Identification
The process begins with the strategic selection of a keyword cluster to target.

### Phase 2: Outline Generation (LLM-Assisted)
An LLM is used to accelerate the creation of a comprehensive "hub-and-spoke" content plan.

### Phase 3: Prompt Engineering & AI-Drafting
For each topic, a pre-defined, role-based prompt is used to generate the initial draft of the landing page content.

### Phase 4: Human Review & Enhancement (The E-E-A-T Layer)
This is the most critical step. The AI-generated draft is passed to a human subject matter expert for verification and enhancement.

### Phase 5: Data Formatting & Staging
The finalized content is structured into a standardized format (e.g., a CSV file).

### Phase 6: Programmatic Publishing
The structured data file is uploaded to HubDB in HubSpot, triggering the automatic creation of the new landing pages.
EOF

# Write src/app/docs/technical-blueprint/page.md
cat > src/app/docs/technical-blueprint/page.md << 'EOF'
---
title: Technical Blueprint for Programmatic SEO
nextjs:
  metadata:
    title: Technical Blueprint for Programmatic SEO
    description: The technical implementation plan for programmatic SEO in HubSpot for Droplet.io.
---

## HubDB vs. CRM Objects

HubSpot offers two primary mechanisms for creating data-driven dynamic pages: HubDB and CRM Objects. A hybrid approach is required to overcome platform limitations.

### Proposed Architecture: The Hybrid Model

-   **HubDB for Content Storage:** A master HubDB table will serve as the "single source of truth" for all programmatic landing page content.
-   **HubDB Multi-Level Structure for Scalability:** To circumvent the 10-page-listing limit, we will employ HubSpot's multi-level dynamic page functionality.
-   **CRM Custom Objects for Advanced Linking & Automation:** A CRM Custom Object named "Programmatic Page" will be created for sophisticated internal linking and integration with HubSpot's automation tools.

## Engineering a Scalable Internal Linking Architecture

A robust internal linking structure is critical for signaling topical authority to search engines.

### Technique 1: Basic Dynamic Linking (HubL)
The foundation of the linking structure will be built directly into the dynamic page template using HubL.

### Technique 2: Multi-Level Linking (Child Tables)
The multi-level architecture using parent and child tables naturally creates a hierarchical linking structure.

### Technique 3: Advanced Related-Content Linking (Foreign ID / CRM Object)
The most powerful and flexible method utilizes the "Programmatic Page" custom object.
EOF

# Write src/app/docs/analytics-and-lead-flow/page.md
cat > src/app/docs/analytics-and-lead-flow/page.md << 'EOF'
---
title: Analytics and Lead Flow Orchestration
nextjs:
  metadata:
    title: Analytics and Lead Flow Orchestration
    description: The measurement and integration framework for Droplet.io's demand generation strategy.
---

## Resilient Analytics Foundation with Server-Side GTM

Implementing Server-Side Google Tag Manager (sGTM) is a strategic necessity for improved data accuracy, enhanced data control, and better website performance.

### High-Level Implementation Overview

1.  Provision Tagging Server
2.  Map Custom Domain
3.  Configure GA4 Client
4.  Update Client-Side GTM
5.  Configure Server-Side Tags

## HubSpot-to-Salesforce Lead Handoff

A seamless and automated lead handoff process from HubSpot to Salesforce is essential.

### Step-by-Step Process

1.  Create Custom Properties & Forms in HubSpot
2.  Connect HubSpot and Salesforce
3.  Map Fields Between Systems
4.  Define Synchronization Rules
5.  Trigger the Synchronization

## Fortifying Performance and Security with Cloudflare

Cloudflare provides an essential performance and security layer in front of the HubSpot-hosted pages.
EOF

# Write src/app/docs/implementation-roadmap/page.md
cat > src/app/docs/implementation-roadmap/page.md << 'EOF'
---
title: Phased Implementation Roadmap
nextjs:
  metadata:
    title: Phased Implementation Roadmap
    description: The phased implementation roadmap for Droplet.io's demand generation strategy.
---

## Immediate Impact: Mobile UX Audit and Analytics "Quick Wins"

Before embarking on the larger build, several high-impact, low-effort improvements can be made.

### Mobile UX Audit

-   **Navigation:** Simplify the main navigation menu for mobile screens.
-   **Readability:** Ensure a minimum font size of 16px for body text.
-   **Forms:** Keep lead capture forms simple and ask only for essential information.

## Phase 1: Foundational Setup and Pilot Program (First 30 Days)

The first month is dedicated to building and validating the complete technical infrastructure on a small, manageable scale.

## Phase 2: Scaling the Content Engine (Days 31-90)

With the foundation validated, the focus shifts to scaling content production and launching a significant volume of pages.

## Phase 3: Continuous Optimization and Expansion (Beyond 90 Days)

The final phase transitions the project to a continuous cycle of data-driven optimization and strategic expansion.
EOF

# Write src/lib/navigation.ts
cat > src/lib/navigation.ts << 'EOF'
export const navigation = [
  {
    title: 'Strategy Overview',
    links: [
      { title: 'Getting started', href: '/' },
      { title: 'Executive Summary', href: '/docs/executive-summary' },
    ],
  },
  {
    title: 'Core Strategy',
    links: [
      { title: 'Market Opportunity', href: '/docs/market-opportunity' },
      {
        title: 'LLM Content Engine',
        href: '/docs/llm-content-engine',
      },
      { title: 'Technical Blueprint', href: '/docs/technical-blueprint' },
      {
        title: 'Analytics & Lead Flow',
        href: '/docs/analytics-and-lead-flow',
      },
    ],
  },
  {
    title: 'Implementation',
    links: [
      {
        title: 'Implementation Roadmap',
        href: '/docs/implementation-roadmap',
      },
    ],
  },
];
EOF

echo "Project files updated successfully!"
