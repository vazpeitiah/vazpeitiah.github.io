---
layout: page
title: Acerca de
permalink: /about/
weight: 3
---

# **Acerca de mí**

Hola, mi nombre es **{{ site.author.name }}** :wave:,<br>
Soy desarrollador de software y entusiasta de la tecnología. Me apasiona escribir, la lectura y salir a caminar al aire libre. Me considero una persona responsable y sé que soy capaz de alcanzar mis objetivos con mucha dedicación y compromiso. Creo firmemente que la disciplina y constancia supera con creces a la inteligencia.

# **Educación y experiencia**

<div class="row">
{% include about/timeline.html %}
</div>

<div class="row">
{% include about/skills.html title="Habilidades de programación" source=site.data.programming-skills %}
{% include about/skills.html title="Otras herramientas" source=site.data.other-skills %}
</div>