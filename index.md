---
layout: home
title: Welcome to Lightastic!
subtitle: Pure Holiday lighting delight!
permalink: /
---

Feel free to browse our projects.

{%- assign projects = site.pages | where: "layout", "project" | sort -%}
{% for p in projects %}
* [{{ p.title }}]({{ p.url }}): {{ p.description }}.
{% endfor %}