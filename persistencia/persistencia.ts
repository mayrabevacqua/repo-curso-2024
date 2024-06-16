/* Guarda la información de los arrays en un archivo “precios.txt” y “productos.txt” respectivamente.
Luego recupera la información en forma de array nuevamente y mostrala por consola. */

import * as fs from 'fs';

const precios: number[] = [525, 3500, 400, 1999];
const productos: string[] = ["Leche", "Galletitas", "Harina", "Queso"];


//defino la variable para acumular el contenido del arreglo
let contenidoPrecios : string = "";
let contenidoProductos : string = "";

//Recorro los arreglos para acumular el contenido de ellos en la variabla
for (let i = 0; i < precios.length; i++) {
    contenidoPrecios += precios[i]+" ";
    contenidoProductos += productos[i]+" ";
}

//Creo los txt con cada uno de los datos del arreglo
fs.writeFileSync('./precios.txt', contenidoPrecios);
fs.writeFileSync('./productos.txt', contenidoProductos);


contenidoPrecios = fs.readFileSync('./precios.txt', 'utf8');
const preciosTemporal: string = contenidoPrecios.trim(); 
const  preciosFinal : string[] = preciosTemporal.split(" ");

contenidoProductos = fs.readFileSync('./productos.txt', 'utf8');
const productosTemporal: string = contenidoProductos.trim(); 
const  productosFinal : string[] = productosTemporal.split(" ");

console.log(preciosFinal);
console.log(productosFinal);