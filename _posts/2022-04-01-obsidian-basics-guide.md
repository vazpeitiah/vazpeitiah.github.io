---
title: Guía básica de Obsidian
tags: [notes, obsidian]
style: border
color: 
comments: true
description: Una breve y rápida introducción a la edición de texto en Obsidian.
---

# Formatear texto
1. **Texto en negritas**
```markdown
**Bold text**
```
2. *Texto en italicas*
```markdown
*Texto en italicas*
```
3. ~~Texto tachado~~
```markdown
~~Texto tachado~~
```
4. ==Texto subrrayado==
```markdown
==Texto subrrayado==
```
Las Block Quotes (comillas en bloque), pueden ser de utilidad para indicar que estás citando a algo o llamar la atención a un texto específico.

> Esto es una Block Quote 🐶

```markdown
> Esto es una Block Quote 🐶
```

# Encabezados y separadores horizontales
En obsidian puedes agregar encabezados de la siguiente manera:
```markdown
# Este es un encabezado h1
## Este es un encabezado h2
### Este es un encabezado h3
#### Este es un encabezado h4
##### Este es un encabezado h5
###### Este es un encabezado h6
```
Puedes agregar tantos sub encabezados como creas conveniente. 

**Separador horizontal**
Otra herramienta de edición de texto es el separador horizontal. Para usarla, simplemente escribe 3 guiones: ` --- `. Además, si colocas texto encima del separador, obsidian automáticamente lo convertirá a un encabezado de tipo h1.

``` md
Esto se convertira en un encabezado h1
---
```

# Listas y ToDo
En Obsidian puedes crear listas ordenadas, desordenadas y checklists.
## Listas ordenadas
Esto es una lista ordenada.
1. Primer elemento
2. Segundo elemento
3. Tercer elemento

```markdown
1. Primer elemento
2. Segundo elemento
3. Tercer elemento
```

## Listas desordenadas
- Apple
- Pineapple
- Peach
- Orange

```markdown
- Apple
- Pineapple
- Peach
- Orange
```

## ToDo o Checklist
- [ ] Realizar tarea de matemáticas
- [x] Sacar a pasear al perro
- [ ] Limpiar habitación

```markdown 
- [ ] Realizar tarea de matemáticas
- [x] Sacar a pasear al perro
- [ ] Limpiar habitación
```

# Bloques de código
Los bloques de código son bastante útiles por dos razones: el editor no compilará este bloque y tendrá resaltado de sintaxis. Para hacerlo necesitaras encerrar el código dentro de los símbolos " ``` "

``` html
<h1> Codigo </h1>
<P> Este codigo no se compilara y se mostrara tal cual lo escribas </p>
```

# Tablas
Esta es una tabla:

| Encabezado | Descripción | Calificación |
|:----------:|:-----------:|:------------:|
|    Some    |    Text     |    10/10     |
|   Second   |     row     |      0       |

```markdown
| Encabezado | Descripción | Calificación |
|:----------:|:-----------:|:------------:|
|    Some    |    Text     |    10/10     |
|   Second   |     row     |      0       |
```

**Consejo:** Las tablas pueden ser un poco difíciles de manejar. Es recomendable instalar el plugin de la comunidad llamado [Advanced Tables](https://github.com/tgrosinger/advanced-tables-obsidian). Esto te ayudará a dar formato a las tablas. 

# Footnotes
Las footnotes son excelentes si deseas agregar algo a tus notas sin interrumpir el flujo de su escritura. 

```markdown
Text with foot note[^1] 
[^1]: Footnote
```

# Enlaces
## Linking y back linking
La forma más básica de crear un enlace en obsidian es el vínculo de estilo wiki. Este es un enlace, en el texto, a otra página en su bóveda de obsidian. Puede lograr esto usando corchetes como este: `**[[Enlace de página]]**`

También se puede vincular a bloques específicos utilizando el símbolo "^" después del nombre de la página `**[[Enlace de página^bloque para vincular a]]**`. Puede hacer lo mismo, pero para enlazar a un encabezado de la página con en símbolo "#".

## Enlaces a ubicaciones externas
Para poner un enlace a algún sitio ubicado en internet, puedes utilizar la siguiente estructura:

``` md
[Enlace a GitHub](https://github.com/)
```

Y el resultado sería el siguiente: [Enlace a GitHub](https://github.com/)

##  Páginas embebidas
Podemos incrustar contenido de otras páginas de nuestra bóveda de Obsidian. Para ello usamos la siguiente estructura.

```markdown
![[Enlace de página]] [//]: # "Página completa"
![[Enlace de página^parrafo]] [//]: # "Parrafo de una página"
![[Enlace de página#encabezado]] [//]: # "Encabezado de una página"
```

## Imágenes y archivos multimedia
Puede incrustar archivos en sus documentos de Obsidian. Primero deberá asegurarse de que los medios existan en la carpeta de la bóveda. 

```markdown

[//]: # "Insertar una imagen con HTML"
<img title="a title" alt="Alt text" src="https://raw.githubusercontent.com/dracula/wallpaper/master/base.png">

[//]: # "Insertar una imagen con md"
![Alt text](https://raw.githubusercontent.com/dracula/wallpaper/master/base.png "a title")

[//]: # "Insertar una imagen local"
![[imagen.png]]
```

**Consejo:** Es recomendable crear una carpeta para almacenar los archivos ahí. O usar enlaces externos.

# Etiquetado
Puedes etiquetar tus notas utilizando la sintaxis: `#tag`

# Consultas y búsqueda
Las consultas te permiten encontrar varias notas en su bóveda que coincidan con un criterio en específico. Esto es útil si desea crear un centro de notas específicas. Por ejemplo, puede etiquetar todos su apuntes con  `#notas` y luego consultar su bóveda para que solo se muestren los apuntes de un tema en específico:

``` query
#notes Grafos
```

# Comentarios en el código demarkdown
Para insertar un comentario, podemos utilizar cualquiera de las siguientes sintaxis: `[//]: # "Comentario"` o `[//]: # (Comentario)`.

[//]: # "Este es un comentario enmarkdown y no aparecerá en la página"