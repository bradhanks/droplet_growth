#!/bin/bash

# This script populates the page.md files with relevant boilerplate content.
# It uses a case statement to write specific content based on the file's path.
# WARNING: This script will overwrite existing content in the page.md files.

# --- Configuration ---
# This array should match the one in the creation script to ensure all files are targeted.
readonly HREFS=(
  "/docs/executive-summary"
  "/docs/engagement-scope"
  "/docs/expected-outcomes"
  "/docs/mobile-performance"
  "/docs/server-side-analytics"
  "/docs/core-seo-fixes"
  "/docs/analytics-architecture"
  "/docs/data-warehousing"
  "/docs/reporting-dashboards"
  "/docs/asymmetric-content-strategy"
  "/docs/programmatic-content-creation"
  "/docs/leverage-rich-results"
  "/docs/intl-seo-growth-hack"
  "/docs/high-velocity-link-building"
  "/docs/seo-forward-product-strategy"
  "/docs/phase1"
  "/docs/phase2"
  "/docs/phase3"
  "/docs/timeline"
)

# --- Main Logic ---
echo "Starting to populate documentation files..."
echo "========================================="

# Loop through each href in the HREFS array.
for href in "${HREFS[@]}"; do
  # Construct the full file path from the href.
  file_path="${href:1}/page.md"

  # Check if the directory exists before trying to write to it.
  if [ -d "${href:1}" ]; then
    echo "-> Writing content to: '$file_path'"

    # Use a case statement to determine which content to write.
    # The 'EOF' here-document syntax is used for multi-line content.
    # Using single quotes around 'EOF' prevents shell expansion inside the block.
    case "$href" in
      "/docs/executive-summary")
        cat > "$file_path" << 'EOF'
# Executive Summary

This document outlines a strategic initiative to drive significant growth by enhancing our digital presence and data capabilities. Our core focus is on three pillars: **Quick Wins** to immediately improve performance, building out **Actionable Analytics** to inform strategy, and launching a **Crushing Content** program to dominate search and engage our audience.

We project that this engagement will lead to a substantial increase in qualified leads, improved conversion rates, and a measurable return on investment within 12 months.
EOF
        ;;
      "/docs/engagement-scope")
        cat > "$file_path" << 'EOF'
# Engagement Scope

## In Scope

* Technical SEO audit and implementation.
* Analytics infrastructure setup and data warehousing.
* Content strategy development and initial campaign execution.
* Development of reporting dashboards for key stakeholders.
* Fixes for mobile performance and Core Web Vitals.

## Out of Scope

* Paid media management (PPC, Social Ads).
* Website redesign or rebranding.
* Direct management of social media channels.
* PR and offline marketing activities.
EOF
        ;;
      "/docs/expected-outcomes")
        cat > "$file_path" << 'EOF'
# Expected Outcomes & KPIs

Our success will be measured by the following key performance indicators (KPIs):

* **Organic Traffic:** Increase by 40% year-over-year.
* **Lead-to-Customer Conversion Rate:** Improve by 15%.
* **Domain Authority:** Increase by 10 points.
* **Search Rankings:** Achieve top 3 rankings for 20 target keywords.
* **Mobile PageSpeed Insights Score:** Achieve a score of 90+ for key landing pages.
EOF
        ;;
      "/docs/mobile-performance")
        cat > "$file_path" << 'EOF'
# Fix Mobile Performance

Mobile experience is critical for user engagement and SEO. Our focus will be on:

1.  **Optimizing Core Web Vitals (CWV):** Reducing LCP, FID, and CLS.
2.  **Image Optimization:** Implementing next-gen formats (WebP), lazy loading, and proper sizing.
3.  **Reducing JavaScript Execution Time:** Auditing and deferring non-critical scripts.
4.  **Leveraging Browser Caching:** Ensuring assets are cached effectively to speed up repeat visits.
EOF
        ;;
      "/docs/server-side-analytics")
        cat > "$file_path" << 'EOF'
# SSR Analytics Upgrade

To combat data loss from ad-blockers and improve accuracy, we will implement a server-to-server analytics tracking system.

## Benefits

* **Increased Accuracy:** Capture user interactions that client-side tracking misses.
* **Improved Page Performance:** Shifting tracking logic from the client's browser to the server reduces page load.
* **Enhanced Security & Control:** Greater control over what data is sent to third-party analytics platforms.
EOF
        ;;
      "/docs/core-seo-fixes")
        cat > "$file_path" << 'EOF'
# Fix Webflow SEO Quirks

We will perform a foundational SEO sweep to address common issues and establish a strong technical base.

* **Sitemap Optimization:** Ensure the `sitemap.xml` is clean, complete, and submitted to search engines.
* **Robots.txt Review:** Verify that `robots.txt` is not blocking important resources.
* **Schema Markup:** Implement structured data (e.g., Organization, Article, FAQ) to enhance SERP appearance.
* **Meta Tag Audit:** Systematically review and optimize title tags and meta descriptions.
EOF
        ;;
      "/docs/analytics-architecture")
        cat > "$file_path" << 'EOF'
# Comprehensive Round-trip Attribution

We will design and implement a modern analytics architecture to track the full customer journey.

## Key Components

* **Event-Based Tracking:** Using a tool like Segment or Snowplow to create a unified event stream.
* **Customer Data Platform (CDP):** Centralizing user data from all touchpoints (web, mobile, CRM).
* **Multi-Touch Attribution Modeling:** Moving beyond last-click to understand the impact of every channel.
EOF
        ;;
      "/docs/data-warehousing")
        cat > "$file_path" << 'EOF'
# Data Warehousing

All analytics, marketing, and sales data will be consolidated into a central data warehouse (e.g., Google BigQuery or Snowflake).

## Advantages

* **Single Source of Truth:** Eliminates data silos and discrepancies.
* **Deep Analysis:** Enables complex queries and analysis that are impossible with standard analytics tools.
* **Data Ownership:** Full ownership and control over raw, event-level data.
EOF
        ;;
      "/docs/reporting-dashboards")
        cat > "$file_path" << 'EOF'
# Reporting Dashboards

We will create a suite of dashboards in a tool like Looker Studio or Tableau to provide actionable insights to different teams.

## Dashboard Types

1.  **Executive Overview:** High-level KPIs and business impact.
2.  **Marketing Performance:** Channel-specific metrics, campaign ROI.
3.  **Content & SEO Insights:** Keyword rankings, organic traffic trends, page performance.
EOF
        ;;
      "/docs/asymmetric-content-strategy")
        cat > "$file_path" << 'EOF'
# Asymmetric Content Strategy

We will focus on creating content that our competitors cannot easily replicate. This involves leveraging our unique data, expertise, and customer insights.

## Core Ideas

* **Proprietary Data Reports:** Publish industry reports based on our internal data.
* **Expert-Driven Guides:** Create definitive guides authored by our in-house experts.
* **Tool-Based Content:** Develop free tools or calculators that solve a real user problem and naturally attract links and traffic.
EOF
        ;;
      "/docs/programmatic-content-creation")
        cat > "$file_path" << 'EOF'
# Programmatic Content Creation

To achieve scale, we will develop a programmatic SEO strategy. This involves using structured data and templates to generate thousands of high-quality, targeted pages.

## Potential Use Cases

* Landing pages for every city/region we serve.
* Comparison pages for our products vs. alternatives.
* Glossary pages for key industry terms.
EOF
        ;;
      "/docs/leverage-rich-results")
        cat > "$file_path" << 'EOF'
# Leverage Rich Results

We will use structured data (Schema.org) to win more SERP real estate and improve click-through rates.

## Target Rich Results

* **FAQ Snippets:** Answer common questions directly on the search results page.
* **How-to Guides:** Provide step-by-step instructions for relevant tasks.
* **Review Snippets:** Display star ratings for products or services.
* **Video Carousels:** Optimize video content to appear in search.
EOF
        ;;
      "/docs/intl-seo-growth-hack")
        cat > "$file_path" << 'EOF'
# International SEO Growth Hack

To effectively target international markets, we will implement a robust `hreflang` strategy.

## Key Steps

1.  **Market & Keyword Research:** Identify target countries and localize keywords.
2.  **URL Structure:** Decide between ccTLDs, subdomains, or subdirectories.
3.  **`hreflang` Implementation:** Correctly map translated page versions to ensure search engines serve the right page to the right user.
4.  **Content Localization:** Go beyond translation to culturally adapt content.
EOF
        ;;
      "/docs/high-velocity-link-building")
        cat > "$file_path" << 'EOF'
# High-Velocity Link Building

We will build a systematic, scalable process for acquiring high-quality backlinks.

## Tactics

* **Digital PR:** Create link-worthy content and pitch it to relevant journalists and publications.
* **Guest Posting:** Contribute expert articles to authoritative industry blogs.
* **Unlinked Brand Mentions:** Find mentions of our brand that don't link back to us and request a link.
* **Resource Page Link Building:** Get our best content featured on curated resource pages.
EOF
        ;;
      "/docs/seo-forward-product-strategy")
        cat > "$file_path" << 'EOF'
# SEO-Forward Product Strategy

We will use SEO data not just for marketing, but to inform the product roadmap itself.

## Process

1.  **Keyword Research as Market Research:** Analyze search queries to identify user pain points, desired features, and product gaps.
2.  **Competitor Analysis:** Use SEO tools to see what features competitors are building and how users are responding.
3.  **Build SEO-Friendly Features:** Create product features that naturally generate user-generated content or have high search demand.
EOF
        ;;
      "/docs/phase1")
        cat > "$file_path" << 'EOF'
# Phase 1: Technical Foundation (Months 1-2)

The goal of Phase 1 is to fix all foundational issues and set up the necessary infrastructure for growth.

* [ ] Complete technical SEO audit.
* [ ] Implement all critical SEO fixes.
* [ ] Deploy server-side analytics.
* [ ] Set up data warehouse and connect data sources.
* [ ] Finalize content and link-building strategy.
EOF
        ;;
      "/docs/phase2")
        cat > "$file_path" << 'EOF'
# Phase 2: Implementation & Content Execution (Months 3-6)

The goal of Phase 2 is to execute on our strategies and begin building momentum.

* [ ] Launch first Digital PR campaign.
* [ ] Publish first 5 cornerstone content pieces.
* [ ] Build and launch initial reporting dashboards.
* [ ] Begin programmatic SEO page generation.
EOF
        ;;
      "/docs/phase3")
        cat > "$file_path" << 'EOF'
# Phase 3: Optimization & Scaling (Months 7-12)

The goal of Phase 3 is to analyze results, optimize our approach, and scale what's working.

* [ ] A/B test landing page headlines and CTAs.
* [ ] Analyze dashboard data to double down on successful channels.
* [ ] Scale link-building efforts based on what tactics are most effective.
* [ ] Refresh and expand existing content pieces.
EOF
        ;;
      "/docs/timeline")
        cat > "$file_path" << 'EOF'
# Milestone Timeline

| Phase   | Key Milestones                                | Target Date |
|---------|-----------------------------------------------|-------------|
| Phase 1 | Technical Audit Complete, Analytics Deployed  | Month 2     |
| Phase 2 | First Content Campaign Live, Dashboards Built | Month 4     |
| Phase 2 | 10 High-Authority Backlinks Acquired          | Month 6     |
| Phase 3 | First A/B Test Concluded                      | Month 8     |
| Phase 3 | 20% Increase in Organic Traffic Achieved      | Month 12    |
EOF
        ;;
      *)
        # This is a fallback for any hrefs that might not be in the case list.
        echo "   -> No content template for '$file_path'. Creating a blank file."
        touch "$file_path"
        ;;
    esac
  else
    echo "-> Directory not found for '$file_path'. Skipping."
  fi
done

echo "========================================="
echo "Script finished. All files have been populated with content."

