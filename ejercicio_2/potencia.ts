import * as readlineSync from 'readline-sync';

let base: number = readlineSync.questionInt("Ingrese un numero: ");
let exponente: number = readlineSync.questionInt("Ingrese su exponente: ");

//función 
function calcularPotencia(base: number, exponente: number): number | string {
   //evalúa si el exponente es cero
    if (exponente == 0) {
        return 1;
    }
     let resultado = 1;
     
    // evalúa si el exponente es menor a cero
    if (exponente < 0) {
        return "No es posible ingresar ese exponente";
    }
         
    // utiliza la iteración para multiplicar la base 
    for (let i = 0; i < exponente; i++) {
        resultado = resultado * base;
    }
    return resultado;
}

// llama a la función para calcular el resultado de la potencia
const resultado = calcularPotencia(base, exponente);

// evalúa si el resultado es mensaje (que sería si el exponente es menor a cero) o si es número (resultado)
if (typeof resultado == 'string') {
    console.log(resultado);
} else {
    console.log(`El resultado de ${base} elevado a la ${exponente} es: ${resultado}`);
}
