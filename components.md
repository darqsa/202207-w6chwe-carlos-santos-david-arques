# Lista de componentes

### App

-Recibe: Nada

-Estado: Nada

-Muestra: Las cards de los robots y el formulario de crear

-Acciones del usuario: Ninguna

### Robot list

-Recibe: Array de robots

-Estado: Ninguno

-Muestra: Una card por cada robot

-Acciones del usuario: Ninguna

### Robot card

-Recibe: Un objeto de robot

-Estado: Ninguno

-Muestra: El nombre, la imagen y las estadisticas del robot. Tambien los botones de modificar y eliminar

-Acciones del usuario: Modificar o eliminar el robot

### Form

-Recibe: Puede recibir un objeto, si lo recibe el formulario es de modificar y sino de crear

-Estado: Cambios en los inputs del usuario

-Muestra: Varios inputs por cada propiedad del robot

-Acciones del usuario: Crear o modificar un robot mediante el boton de submit

### Button

-Recibe: Un texto y una funcion a realizar

-Estado: Nada

-Muestra: Un boton con un texto dentro

-Acciones del usuario: Clickar el boton para realizar cierta funcion

### Modal

-Recibe: Si es de success o error

-Estado: Ninguno

-Muestra: Un feedback al usuario de error o success

-Acciones del usuario: Ninguna

# Capa de datos

### Array de robots

### Modificador

- Cargar un robot - Card List
- Eliminar un robot - Card
- Crear un robot - Fornm
- Editar un robot - Form
