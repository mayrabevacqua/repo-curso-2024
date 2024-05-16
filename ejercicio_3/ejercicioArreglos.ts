/*Encontrar el elemento más grande del arreglo
Dado el siguiente arreglo [4,7,9,3,1,45,67,23,29,78,11,16]
Crear un programa que encuentre cuál es el número más grande del arreglo e imprimirlo por consola 
Almacenar el número más grande en una variable global y pasarlo a una función para determinar si el número es par o impar
*/
let arregloNumero : number [] = new Array (4, 7, 9, 3, 1, 45, 67, 23, 29, 78, 11, 16);
let numeroMayor : number;

//Función para encontrar el número más grande
function encontrarMayor () : void {
    numeroMayor = arregloNumero[0];
    for (let i = 1; i < arregloNumero.length; i++) {
        if (arregloNumero[i] > numeroMayor) {
            numeroMayor= arregloNumero[i];
        }
    }
    console.log(`El número más grande del arreglo es: ${numeroMayor}`); // Muestra el número más grande
    determinarParOImpar(numeroMayor); // Llama a la función para determinar si el número mayor es par o impar
}

//Función para saber si el número más grande es par o impar
function determinarParOImpar(num: number): void {
    if (num % 2 === 0) {
        console.log(`${num} es par.`);
    } else {
        console.log(`${num} es impar.`);
    }
}
 encontrarMayor(); //Llama a la función
