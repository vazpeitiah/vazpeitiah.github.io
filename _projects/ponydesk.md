---
name: Ponydesk
tools: [Java, Java Swing, MySQL, Hibernate]
image: /assets/img/PONYDESK.png
description: Aplicación para el control de inventarios de una veterinaria.
---

# Ponydesk

{% include elements/button.html link="https://github.com/vazpeitiah/ponydesk" text="GitHub" style="primary" size="sm" %}

---

Ponyvet es un sistema, implementado en java, para administrar tu veterinaria. Te permite tener un mejor control de tu información para brindar un servicio más eficiente a tus clientes. 

{% capture carousel_images %}
https://i.imgur.com/DpSiCyT.png
https://i.imgur.com/QAtFRdi.png
https://i.imgur.com/1GpTfeH.png
{% endcapture %}
{% include elements/carousel.html %}

### Características del sistema

- Este sistema se especializa en veterinarias del ámbito rural.
- Tiene un inventario de medicamentos y material de curación.
- Puedes gestionar el créditos de tus clientes
- Cuenta con una agenda para citas o consultas a domicilio.
- Se usa de manera local, y toda la información se almacena en la computadora donde se instalé el sistema
- Es ideal, si en la ubicación de tu clínica no se cuenta con servicio a internet o simplemente no quieres usarlo.

<!-- ### Diseño

#### Modelo de la base de datos

**Diagrama del modelo relacional versión 2.0**

![Vetarinari%2049677/diagrama_v2.0.png](Vetarinari%2049677/diagrama_v2.0.png) -->

### Módulos del sistema

##### 1. Módulo de inventarios

**Operaciones básicas**

- Registro de Veterinarios
- Registro de Proveedores
- Inventario General
- Registro de salidas
- Realizar nuevo pedido
- Registro de entradas o compras

**Historial y consultas**

- Historial de salidas
- Historial de entradas o compras
- Pedidos

**Extras y configuraciones**

- Información de la empresa
- Crear una empresa
- Splash Screen

##### 2. Módulo de Clientes y créditos

- Registro de clientes
- Balance de clientes

##### 3. Módulo de Citas y/o consultas a domicilio

- Agenda de consultas
- Registro de tratamientos

### Problemas por solucionar
> Lista de problemas o bugs detectados.

* [x]  Añadir crear artículo desde le menú de compras
* [x]  agregar campo de proveedor e IdPedido, para saber si fue pedido
* [x]  Error al cargar un registro a la lista del pedido??
* [x]  Validación de campos
* [x]  Evitar botones que no ejecuten ninguna acción al ser presionados.
* [x]  Problema con las cantidades  → Por ejemplo: Muestra Caja 100pz y se vende por unidad
* [x]  Implementar búsqueda con código de barras en Compras de medicamentos y Pedidos

### Ideas
> Algunas cosas que serían interesantes de agregar.

* [ ]  ~~Agregar el número total de artículos a las salidas, entradas y los pedidos.~~
* [ ]  Cuando busques una unidad de compra o de salida y no hay resultados, sugerir el crear una nueva con el nombre que acaba de ingresar el usuario
* [x]  Al asignar una unidad de entrada nueva, asignar la misma a la salida
* [x]  Hacer mas responsiva la aplicación
* [ ]  Cuando se actualize mostrar en verde el registro actualizado
* [ ]  Implementar botón de salir en cada submenu