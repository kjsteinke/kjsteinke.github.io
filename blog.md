---
layout: page
title: Blog
subtitle: Notes, ideas and experiments.
permalink: /blog/
---

<div class="post-list">
  {%- for post in site.posts %}
    {% include post-card.html post=post %}
  {%- endfor %}
</div>
