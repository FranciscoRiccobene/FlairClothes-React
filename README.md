# Proyecto Final ReactJS - FlairClothes

## Descripción 
El proyecto es un e-commerce de venta de indumentaria. Contiene un componente `NavBar` con los respectivos links a las distintas secciones del sitio, dentro de éste hay un componente `CartWidget` linkeado al carrito que enumera la cantidad de productos en el mismo. Luego pasamos al contenido 
principal `ItemList`, que contiene todos los productos en venta. Ya en el carrito nos encontramos dentro del componente `CartList`, que muestra los productos a comprar, con varios botones con distintas funcionalidades y uno para ir a comprar, llevándonos al `CheckOut`.
En éste podremos ver el resumen de compra, podremos ingresar los datos del usuario en un `form` y finalizar enviándole una orden de compra a una base de datos en Firebase. 

## Cómo levantar el proyecto

### Para levantar el proyecto debemos ejecutar los siguientes comandos en consola:
```
npm install
npm start
```
### Para el correcto funcionamiento del mismo, se necesita tener seteadas las variables de entorno en el archivo `.env`. Las cuáles son:
- `VITE_FIRESTORE_API_KEY` = La API key de Firebase.
- `VITE_FIRESTORE_AUTH_DOMAIN` = El dominio de autenticación de Firebase.
- `VITE_FIRESTORE_PROJECT_ID` = El ID del proyecto de Firebase.
- `VITE_FIRESTORE_STORAGE_BUCKET` = El bucket de almacenamiento de Firebase.
- `VITE_FIRESTORE_MESSAGING_SENDER_ID` = El ID del sender de Firebase.
- `VITE_FIRESTORE_APP_ID` = El ID de la aplicación de Firebase.

## Link al sitio web desplegado en Vercel

### - [FlairClothes](https://flairclothes.vercel.app)

## Demo


https://github.com/FranciscoRiccobene/ProyectoFinalReactJS-RiccobeneFrancisco/assets/126524049/c4464733-c7e5-45a0-83eb-4b3e3dd9ead3


## Lenguajes y tecnologías
### Lenguajes:
HTML - CSS - JS
### Frameworks, librerías y herramientas:
NodeJs - ReactJS - ViteJs - Bootstrap
### Sistema de control de versiones:
GIT - GitHub
