import * as rls from 'readline-sync';

let arregloA:number[]=new Array (3);
//arregloA=[1, 2, 3, 4, 5, 6];
//let arregloB: number [] = [7, 8, 9, 10, 11, 12];
let arregloB:number[]=new Array (3);
let arregloSuma: number []= new Array (3);
//let suma: number=0;

//arregloA[0]=rls.questionInt("Ingrese un valor");

for (let i = 0; i < arregloA.length; i++) {
    arregloA[i]=rls.questionInt("Ingrese un valor para A ");
    arregloB[i]=rls.questionInt("Ingrese un valor B ");
    arregloSuma[i]=arregloA[i]+arregloB[i];
}

for (let i = 0; i < arregloA.length; i++) {
    console.log(arregloSuma[i]);
}
