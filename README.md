## Template Blog
Esta construido con Bulma, Un framework de CSS parecido a Bootstrap. Puedes checkear la documentacion, esta muy buena https://bulma.io/documentation.

Es un template sencillo, En forma de articulos.
La forma correcta seria para el titulo principal usar un **H1** con las clases correspondientes. Le puse de Background una imagen, Lo cual se supone que debe cambiar con respecto a cada articulo (se debe modificar). Me refiero a que cuando la persona vaya a construir un articulo ya sea en el HTML o en el mismo CSS debe cambiar el url respectivo al articulo.

La fuente es la default por Bulma. Aunque si quieres cambiarla solo debes ir ahttps://fonts.google.com e incluir el CSS.

Dentro del articulo, para los titulos principales se usa la etiqueta **H3** y titulos secundarios **h4**. De nuevo deben estar con sus respectivas clases. La **imagenes** dentro de Wrapper al igual que los **Iframe** estan centrados por default. Toda la tipografia es responsive y se adapta muy bien a pantallas pequeñas.

Si deseas usar diferentes tipos de Botones, Diferentes tamaños e incluso otros componentes puedes visitar la [documentacion]( https://bulma.io/documentation/elements/button/)

---
### Desarrollo
Para el desarrollo use como *Postprocesador* PostCSS, Junto con Gulp. Para instalarlo debes tener [Node.js](https://nodejs.org) en tu computadora. Luego vas a la terminal y corres:

`npm install -g gulp`

Luego de la instalacion te vas a la carpeta del proyecto

`cd directorio del proyecto`

e instalas todas las dependencias y corremos Gulp

```
npm install
gulp

```

Esto te creara un servidor local que vigilara todos los cambios y recargara el navegador.
Una vez hecho esto, Ya puedes editar los archivos que estan en **SRC**

---

#### Cualquier duda o sugerencia puedes contactarme a traves de mi [sitio web](https:jesussandrea.com)
