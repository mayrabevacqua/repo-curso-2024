"use strict";
/*Encontrar el elemento más grande del arreglo
Dado el siguiente arreglo [4,7,9,3,1,45,67,23,29,78,11,16]
Crear un programa que encuentre cuál es el númeromás grande del arreglo e imprimirlo por consola
Almacenar el número más grande en una variable global y pasarlo a una función para determinar si el número es par o impar
*/
Object.defineProperty(exports, "__esModule", { value: true });
var arregloNumero = new Array(4, 7, 9, 3, 1, 45, 67, 23, 29, 78, 11, 16);
var numeroMayor;
function encontrarMayor() {
    numeroMayor = arregloNumero[0];
    for (var i = 1; i < arregloNumero.length; i++) {
        if (arregloNumero[i] > numeroMayor) {
            numeroMayor = arregloNumero[i];
        }
    }
    console.log("El n\u00FAmero m\u00E1s grande del arreglo es: ".concat(numeroMayor));
    determinarParOImpar(numeroMayor);
}
function determinarParOImpar(num) {
    if (num % 2 === 0) {
        console.log("".concat(num, " es par."));
    }
    else {
        console.log("".concat(num, " es impar."));
    }
}
encontrarMayor();
