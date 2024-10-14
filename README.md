# RockTheCodeProyecto9

Este proyecto, lo podéis hacer extrayendo datos de la página que queráis, siempre y cuando se cojan muchos datos y se pueda paginar.

Los criterios de evaluación son MÍNIMOS, siempre os invitamos a dar un paso más.

IMPORTANTE! Recuerda también entregar tu .env para que podamos corregirlo con mayor facilidad (en caso de que lo haya)

Una vez recogidos los datos en el scrapping, podréis subirlo a una BBDD y hacer un CRUD de manera adicional.

Web scrapping con puppeteer a una página que tenga paginación de datos.
Se deben quitar siempre los modales que van apareciendo y nos molestan
El scrapper debe seleccionar todos los productos de cada página
El scrapper debe pasar a la siguiente página hasta llegar al final y recoger todos los datos de todas las páginas
Debemos guardar el precio, el nombre y la imagen del producto
Cuando se hayan recogido todos los datos de todas las páginas, se generará un archivo llamado products.json que aloje todos los datos recogidos
En el package.json existirá un script que nos permita ejecutar el scrapper de manera sencilla

## instructions

Run `npm run test` to scrape the data from the website.
later run `npm run start` to prepare to upload the data mongodb.
use postman, insominia or other posting programe to do:
`POST http://localhost:3000/api/v1/components/uploadComponents`

no params or body needed.
Confirm that it is uploaded on your atlas database.
