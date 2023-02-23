---
layout: home
title: Welcome to Lightastic!
subtitle: Pure Holiday lighting delight!
permalink: /
---

Lighttastic is a set of projects specifically designed for the do-it-yourself'er hobbyist. It is comprised of a mix of software and hardware that is easy to work with, fun, inexpensive, and highly impacting. Our aim is to help you get your Holiday lighting (or any other lighting projects) up and running as easily as possible.

<div class="columns has-text-centered">
  <div class="column">
    <i class="fas fa-lightbulb is-size-1"></i>
    <a>
      <p class="title is-4 py-3">See Lightastic in action!</p>
      <p class="subtitle is-6">Click here for a curated list of our projects in action, plus links to social media shared content.</p>
    </a>
  </div>
  <div class="column">
    <i class="fa-solid fa-list-check is-size-1"></i>
    <p class="title is-4 py-3">Browse our projects</p>
    <p class="subtitle is-6">Click here to browse our amazing projects. There is a little bit of everything: hardware, software, etc.</p>
  </div>
  <div class="column">
    <i class="fas fa-lightbulb is-size-1"></i>
    <p class="title is-4 py-3">See Lightastic in action!</p>
    <p class="subtitle is-6">As well as our example site, there’s a growing number of projects using Docsy for their doc sites.</p>
  </div>
</div>

{%- assign projects = site.pages | where: "layout", "project" | sort -%}
{% for p in projects %}
* [{{ p.title }}]({{ p.url }}): {{ p.description }}.
{% endfor %}