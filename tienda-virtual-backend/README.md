# Tienda Virtual Backend

Este proyecto contiene el backend de una tienda virtual. Proporciona una API para manejar las operaciones relacionadas con los productos, usuarios y pedidos de la tienda.

## Estructura de carpetas

El proyecto tiene la siguiente estructura de carpetas:

- `src`: Esta carpeta contiene el código fuente de la aplicación.
  - `app.js`: Punto de entrada de la aplicación. Crea una instancia de la aplicación Express y configura los middlewares y las rutas.
  - `controllers`: Esta carpeta contiene los controladores de la aplicación.
    - `productController.js`: Controlador para manejar las operaciones relacionadas con los productos de la tienda virtual.
    - `userController.js`: Controlador para manejar las operaciones relacionadas con los usuarios de la tienda virtual.
    - `orderController.js`: Controlador para manejar las operaciones relacionadas con los pedidos de la tienda virtual.
  - `models`: Esta carpeta contiene los modelos de la aplicación.
    - `productModel.js`: Modelo para interactuar con la colección de productos en la base de datos.
    - `userModel.js`: Modelo para interactuar con la colección de usuarios en la base de datos.
    - `orderModel.js`: Modelo para interactuar con la colección de pedidos en la base de datos.
  - `routes`: Esta carpeta contiene los enrutadores de la aplicación.
    - `productRoutes.js`: Enrutador para manejar las rutas relacionadas con los productos de la tienda virtual.
    - `userRoutes.js`: Enrutador para manejar las rutas relacionadas con los usuarios de la tienda virtual.
    - `orderRoutes.js`: Enrutador para manejar las rutas relacionadas con los pedidos de la tienda virtual.
  - `middleware`: Esta carpeta contiene los middlewares de la aplicación.
    - `authMiddleware.js`: Middleware para verificar la autenticación del usuario antes de permitir el acceso a ciertas rutas.

- `tests`: Esta carpeta contiene los archivos de prueba para el backend de la tienda virtual.

- `package.json`: Archivo de configuración de npm. Lista las dependencias y los scripts para el proyecto.

- `README.md`: Este archivo contiene la documentación del proyecto.

## Instalación

1. Clona este repositorio en tu máquina local.
2. Navega hasta la carpeta del proyecto: `cd tienda-virtual-backend`.
3. Instala las dependencias: `npm install`.
4. Inicia el servidor: `npm start`.

¡La tienda virtual backend está lista para ser utilizada!