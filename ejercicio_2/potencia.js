"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
// Leer la base desde el teclado
var base = readlineSync.questionInt("Ingrese un numero: ");
// Leer el exponente desde el teclado
var exponente = readlineSync.questionInt("Ingrese su exponente: ");
// Función para calcular la potencia de un número
function calcularPotencia(base, exponente) {
    // Caso base: si el exponente es 0, el resultado es 1
    if (exponente == 0) {
        return 1;
    }
    var resultado = 1;
    // Si el exponente es menor o igual a cero, retornar un mensaje
    if (exponente <= 0) {
        return "No es posible ingresar ese exponente";
    }
    // Iteramos exponente veces para multiplicar la base
    for (var i = 0; i < exponente; i++) {
        resultado = resultado * base;
    }
    return resultado;
}
// Calcular la potencia utilizando la función definida anteriormente
var resultado = calcularPotencia(base, exponente);
// Si el resultado es un mensaje, imprimirlo, de lo contrario, mostrar el resultado
if (typeof resultado == 'string') {
    console.log(resultado);
}
else {
    console.log("El resultado de ".concat(base, " elevado a la ").concat(exponente, " es: ").concat(resultado));
}
