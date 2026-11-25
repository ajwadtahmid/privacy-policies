---
title: Privacy Policies
description: Privacy policies for apps developed by Ajwad Tahmid.
---

<section class="hero">
  <h1>Privacy Policies</h1>
  <p>Plain-language privacy policies for apps developed by Ajwad Tahmid. Pick an app to see exactly what it does with your data.</p>
</section>

<ul class="cards">
{% assign policies = site.pages | where: "policy", true | sort: "app" %}
{% for p in policies %}
  <li class="card">
    <a href="{{ p.url | relative_url }}">
      <h2>{{ p.app }}</h2>
      <p>{{ p.summary }}</p>
      <div class="meta"><span class="badge">{{ p.platforms }}</span><span>Updated {{ p.updated }}</span></div>
      <span class="go">Read policy <span aria-hidden="true">&rarr;</span></span>
    </a>
  </li>
{% endfor %}
</ul>
