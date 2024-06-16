"use strict";
/* Guarda la información de los arrays en un archivo “precios.txt” y “productos.txt” respectivamente.
Luego recupera la información en forma de array nuevamente y mostrala por consola. */
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var precios = [525, 3500, 400, 1999];
var productos = ["Leche", "Galletitas", "Harina", "Queso"];
//defino la variable para acumular el contenido del arreglo
var contenidoPrecios = "";
var contenidoProductos = "";
//Recorro los arreglos para acumular el contenido de ellos en la variabla
for (var index = 0; index < precios.length; index++) {
    contenidoPrecios += precios[index] + " ";
    contenidoProductos += productos[index] + " ";
}
//Creo los txt con cada uno de los datos del arreglo
fs.writeFileSync('./precios.txt', contenidoPrecios);
fs.writeFileSync('./productos.txt', contenidoProductos);
contenidoPrecios = fs.readFileSync('./precios.txt', 'utf8');
var preciosTemporal = contenidoPrecios.trim();
var preciosFinal = preciosTemporal.split(" ");
contenidoProductos = fs.readFileSync('./productos.txt', 'utf8');
var productosTemporal = contenidoProductos.trim();
var productosFinal = productosTemporal.split(" ");
console.log(preciosFinal);
console.log(productosFinal);
//console.log(precios)
//console.log(productos);
