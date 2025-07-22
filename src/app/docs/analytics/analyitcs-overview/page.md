---
title: Analtics Overview
nextjs:
  metadata:
    title: Analtics Overview |Droplet.io Valuation Growth Project
    description: Overview of the analytics architecture and its role in the Droplet.io valuation growth project.
---

# Analytics Overview

When engaging a marketing consultant, consolidating and migrating client-side analytics scripts to a server-side architecture may not be the first thing that comes to mind. But the inescapable truth is that content-led growth means you are leaning heavily on Google to recommend your website over others. Website performance is reliably a neglected area because invariably we delegate the service of the website to an outside vendor mostly justifyibly trusting that they will not do anything obviously harmful but getting the nuacses on a case-by-case basis doesn't scale bc of the design choice, third-party vendors being used as part of the webist elike Hubspot forms, tracking scripts, etc.

The following areas of focus are recommendations based on an audit I have already completed. As is true with the totality of this proposal, nothing below is diagnostic in  nature though the specific implentation details of this section is not a diagnostic. I'm making recommedand


## Server-side Analytics Architecture
The server-side analytics architecture is designed to provide a robust and scalable framework for tracking user interactions and
performance metrics across all platforms that Droplet.io uses to understand acquidition unit economics, the sources that drive revenue, and what pathways are most succeful at leading to a free trial or lead form submission. Analytics data originates in the client browser and it is important to offload that to a server as a quickly as possible for reasons enumerated [here](/docs/server-side-analytics). I include a [dev resources section](/docs/dev-resources) to layout what implementaiton involves for any recommendations that require technical changes.

 ## Round-trip Attribution
Once we have an analytics architecture in place that doesn't work cross-wise with ultimate business goals, we can turn our focus to the ultimate goal of an analytics architecture: attribution. The importance of round-trip attribution is universally understood as important then why doesn't attribution so quickly and univesally devolve into a disparate mess?

It might be worthwhile to take a step back and consider the purpose of attribution for Droplet.io. This gives me the opportunity to lay out my understanding of the business model and make any corrections before any acutal work is underway. My understanding is that we are driving sign ups and lead form fills ffrom the site, capture that information in Hubspot that are then fed to the a sales team to be tracked and manged inside Salesforce.

There are various approaches to data analytics. Google Analytics Universal Analytics (GA4) was page-based which served website owners well before rich web applications that offered a more dynamic user experience that went far people moving from page to page. GA4 is a vast improvement in that it allows for integration of multiple data streams across web, mobile and other platforms. It also allows for event-based tracking that is so important for sophisticated single page apps, tracking advanced funciotionality like tracking sorting, searches, interatcing with media etc. when it was more of a bolted-on functionality in Universal Analytics.

But GA4 falls short today in the same way that UA used to in the sense that it prmiarly organizes events by marketing channel. User ID can be turned on as an davanced feature but where where events capture the multiple entry points into a conversion funnel it fails to account for the fact that user bounce to and from the site. Users aren't just multi facested but also non-linear so where you may have someone come to the site from one channel it ignores previous visits outside the window of attirubtion(default 90 days). Multi-attirbution models are cumbersome to implmenet and how they are executed on the backend seems to me suspect because they are subjec tto many business internal to Google Analytics which  requires an advanced understanding of google Analytics and reliable recall of minutieate in your day-o-day.



Additioally multi-channel attribution doesn't provide insights into the underlying common patterns in what is driving user behaviour beyond just giving it a static partial credit for a conversion event. This is problematic so we have beaten the short coming of channel attributino to death and leads me to the conculsion that we have to understand attribution in a more holistic way: at the user level. The tools avalible to us outside any one analytics platform is an embarrasment of riches and we do violence to our fiduciary duty to our investors and customers if we don't take advantage of them.

Some analytics platforms like HEap do deafult to user but that can pose a chellenge in the oppoosite direction. Gathering them together in a meaningful way. Part of that challenge is that the usefulness of the reporting dashbaords are beholden to the user properties (transitory) and user events (immutable) that paying platform clients decide to track. This often leads to being stingy in some important ways. For example, lead form fills aren't truly binary in the same way a button click are but are a continum and are better approximated reporting native client events ommited like on focus, off focus of input fields, keyup and keydown (complete with async posting to cpature useful information like email), scroll depth, and even heatmaps. Collective past experieince of a team may dictate that those nuacenes don't provide useful data but I'm of the oinion that making prima facia assumptions about what is useful or not useful injects bias into the data that is already riddled with problems due to the unreliable nature of javascript in every instance, multiple devices, and different shareholers at the same company. The more data we have the more we can understand the user journey and the more we can optimize it.

I call this approach "declarative analytics" because we aren't telling the analyitcs program how to do the analytics (what events to track, what user properties to capture) but rather we are declaring what we are trying to accomplish overall and having the program determine how to best determine that value. This is a more flexible approach that allows us to adapt to changing business needs and user behaviors without having to constantly reconfigure our analytics setup. By focusing on the outcomes we want to achieve, we can ensure that our analytics framework is aligned with our business goals and can evolve as those goals change.

It is already applied for over a decade to data processing challelnges like data lakes and big data analytics but to my knowledge isn't being adopted by any big players in analytics and I don't know of any analytivcs startups trying to answer the problem of how to best capture user data in a way that is flexible and adaptable to changing business needs. This approach allows us to focus on the outcomes we want to achieve rather than getting bogged down in the details of how to implement them. By declaring our goals and objectives, we can let the analytics platform determine the best way to capture and analyze the data, ensuring that we are always aligned with our business needs.

This approach is particularly useful in the context of content-led growth, where we need to be able to adapt quickly to changing user behaviors and market conditions. By focusing on the outcomes we want to achieve, we can ensure that our analytics framework is aligned with our business goals and can evolve as those goals change.
This approach is particularly useful in the context of content-led growth, where we need to be able
to adapt quickly to changing user behaviors and market conditions. By focusing on the outcomes we want to achieve, we can ensure that our analytics framework is aligned with our business goals and can evolve as those goals change.
This approach is particularly useful in the context of content-led growth, where we need to be able
to adapt quickly to changing user behaviors and market conditions. By focusing on the outcomes we want to achieve, we can ensure that our analytics framework is aligned with our business goals and can evolve as those      goals change.
This approach is particularly useful in the context of content-led growth, where we need to be able
to adapt quickly to changing user behaviors and market conditions. By focusing on the outcomes we want to achieve, we can ensure that our analytics framework is aligned with our business goals and can evolve as those


 the events and user properties that we want to capture. This allows us to be more flexible and adaptive in our approach, ensuring that we can capture the data that is most relevant to our business goals.




 have grown increasing sophsitcated not just on the website but in the way they  However, GA4 is still primarily page-based and event-based tracking, which means it can struggle to provide a complete view of the customer journey, especially in complex scenarios where users interact with multiple touchpoints before converting.


 event-based which is a step in the right direction, but it still has limitations when it comes to understanding the full customer journey.

It would be important to understand exactly where things are at currently are breaking down in the current process.
Some common issues that I have seen in the past include:
- Having a clean way to pass information from the client browser into Hubspot and finally into Salesforce that serves both the marketing needs of robust user data capture and the sales need for lead management without cluttering the sales team with unnecessary information.
- Ensuring that the data captured is accurately and timely tieed back to the correct user.
-

 in the context of a content-led growth strategy. Attribution is not just about tracking clicks or page views; it is about understanding the entire customer journey from initial awareness to conversion. This means capturing data at every touchpoint, whether it be through organic search, social media, email campaigns, or direct traffic.


a method of tracking user interactions from the initial touchpoint through to conversion, allowing us to understand the full customer journey. This approach ensures that we can accurately attribute revenue to specific marketing efforts, providing insights into which channels and campaigns are most effective.
accurate tracking requires a performant experience
It's critical to have a robust analytics architecture that supports our growth initiatives. This document provides an overview of the analytics framework that will underpin our demand generation strategy, ensuring we can measure, analyze, and optimize our marketing efforts effectively.


