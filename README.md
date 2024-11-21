# React Contador Interactivo

Este proyecto es una aplicación de contador interactivo desarrollada con React, utilizando Bootstrap para estilos y SweetAlert2 para las alertas. El contador permite incrementar, decrementar y reiniciar el valor mostrado en pantalla, además de mostrar una alerta cuando se alcanza el valor máximo permitido (10).

## Características
- Visualiza el contador.
- Botones para incrementar, decrementar y reiniciar.
- Límite en el que no permite que el contador baje de 0
- Mensaje de advertencia al alcanzar el máximo permitido.

## Tecnologías utilizadas
- React: Para la creación de componentes y el manejo del estado.
- Bootstrap: Para estilos.
- Bootstrap Icons: Para añadir iconos a los botones.
- SweetAlert2: Para mostrar la alerta


## Instalación
Se requiere tener Node.js y npm instalado previamente
Clonar este repositorio para probar la aplicacion a través del comando git clone
Para instalar las dependencias necesarias, ejecutar el comando npm install en el terminal.
Por ultimo, para iniciar el servidor de desarrollo usar el comando npm start

## Posibles mejoras
Funcionalidad en la que el contador se incrementa o decrementa automáticamente cada cierto tiempo implementando un setInterval
Configuración dinámica del límite de forma que el usuario pueda determinar el máximo que él quiera
Guardar el estado del contador en el localStorage para que no se reinicie al recargar la página.
Ir cambiando los colores según el número en el que se encuentre el contador.
Implementar funcionalidad para que por un lado salga el contador y por otro, cuanto queda para que llegue al límite establecido previamente.
Funcionalidad en la que se controla el contador con el teclado.
