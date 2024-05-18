"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var arregloA = new Array(3);
//arregloA=[1, 2, 3, 4, 5, 6];
//let arregloB: number [] = [7, 8, 9, 10, 11, 12];
var arregloB = new Array(3);
var arregloSuma = new Array(3);
//let suma: number=0;
//arregloA[0]=rls.questionInt("Ingrese un valor");
for (var i = 0; i < arregloA.length; i++) {
    arregloA[i] = rls.questionInt("Ingrese un valor para A");
    arregloB[i] = rls.questionInt("Ingrese un valor b");
    arregloSuma[i] = arregloA[i] + arregloB[i];
}
for (var i = 0; i < arregloA.length; i++) {
    console.log(arregloSuma[i]);
}
