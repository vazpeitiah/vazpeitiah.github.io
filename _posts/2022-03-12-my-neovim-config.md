---
title: Mi configuración de Neovim
tags: [vim]
style: border
color: 
comments: true
description:
---

# Mi configuración de Neovim

Estos son todos los parámetros, plugins y paletas de colores que utilizo en mi configuración de Neovim. Es una configuración muy básica. No soy un experto en Vim/Neovim, pero es una buena configuración para comenzar a utilizar Vim.

Si nunca has utilizado o apenas estas comenzado a usar Vim o Neovim te recomiendo el siguiente [**curso gratuito de Udemy**](https://www.udemy.com/course/vim-aumenta-tu-velocidad-de-desarrollo/).

## Windows 10

Se puede instalar Neovim en Windows 10, y funciona de manera correcta. Hasta ahora no he tenido problemas de compatibilidad o errores. Por lo tanto, considero que es una buena opción si no contamos con una distribución de Linux.

### Scoop:

### **Windows Terminal**

Es recomendable utilizar [**Windows Terminal**](https://www.microsoft.com/en-us/p/windows-terminal/9n0dx20hk701). Además puede mejorar el aspecto de la misma utilizando la [**documentación oficial**](https://docs.microsoft.com/es-es/windows/terminal/),  y también puedes personalizar el prompt con [**oh my posh**](https://ohmyposh.dev/). 

### **Como instalar Neovim en Windows 10**

Con **[Scoop](https://scoop.sh/)**:

```powershell
scoop install neovim
```

### Cómo usar

Desde una ventana de PowerShell o CMD, ejecutamos el comando `nvim` .  Si al abrirlo te aparece algún error puedes visitar el siguiente **[enlace](https://jdhao.github.io/2018/11/15/neovim_configuration_windows/#issues)**.

### **Archivo de configuración de Neovim en Windows 10**

De acuerdo con la [**documentación oficial de neo-vim**](https://neovim.io/doc/user/starting.html#base-directories), el archivo de configuración `init.vim` debe ubicarse en `~/AppData/Local/nvim`. Para conocer exactamente la ubicación del directorio, utiliza el comando `:echo stdpath('config')` , dentro de Neovim .

## Distribuciones Linux

### Instalar **Neovim**  en Linux

Según la [**página oficial**](https://github.com/neovim/neovim/wiki/Installing-Neovim) ,para instalar neovim en Arch Linux se utiliza el siguiente comando:

```bash
sudo pacman -S neovim
```

Y para distribuciones basadas en Debian, como Ubuntu, sería:

```bash
sudo apt-get install neovim
```

### **Archivo de configuración de Neovim en Linux**

De acuerdo con la [**documentación oficial de neo-vim**](https://neovim.io/doc/user/starting.html#base-directories), el archivo de configuración `init.vim` debe ubicarse en `~/.config/nvim`. Para conocer exactamente la ubicación del directorio, utiliza el comando `:echo stdpath('config')` , dentro de neo-vim.

## Mi archivo init.vim

{%- gist 73c196eca1138cdc7cb7a00d5ec0a261 %}


## Plugins

- [**vim-plug**](https://github.com/junegunn/vim-plug) - Es un gestor de plugins
- [**coc.nvim**](https://github.com/neoclide/coc.nvim) - Es una herramienta de auto complementado
- [**lightline**](https://github.com/itchyny/lightline.vim) - Para hacer más elegante la barra de estados
- [**NerdTree**](https://github.com/preservim/nerdtree) - Es un explorador de archivos para vim
- [**vim-coloresque**](https://github.com/gko/vim-coloresque) - Ver una vista previa, desde el código, de los colores hexadecimales, RGB y RGBA.

## Paleta de colores

Utilizo la paleta de colores de *ayu*, en particular la variante *mirage.* Puedes visitar este repositorio para hallar la paleta de colores en este [**enlace**](https://github.com/ayu-theme/ayu-colors).

## Referencias

[https://jdhao.github.io/2018/11/15/neovim_configuration_windows/](https://jdhao.github.io/2018/11/15/neovim_configuration_windows/)

[https://www.udemy.com/course/vim-aumenta-tu-velocidad-de-desarrollo/](https://www.udemy.com/course/vim-aumenta-tu-velocidad-de-desarrollo/)