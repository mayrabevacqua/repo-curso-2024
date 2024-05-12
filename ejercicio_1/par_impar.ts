import * as readlineSync from 'readline-sync';

let numero : number = readlineSync.questionInt("Ingrese un numero: ");
let resto = numero % 2; // calcula el resto del número dividido por 2

if (numero==0) { //compara si el numero es igual a cero
  console.log ("El número ingresado es 0 (cero)");
} else {
  if (resto==0) { //compara si el resto de la division es igual a cero
    console.log("El número ingresado es par "); 
} else {
  if (resto!=0) { //compara si el resto de la división es diferente a cero (no es necesario colocarlo)
    console.log ("El número ingresado es impar");
    }
  }
}
