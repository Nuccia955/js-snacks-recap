/* 
JSnack 3
Crea un array di numeri interi
e fai la somma di tutti gli elementi che sono in posizione dispari */

const arrayInt = [1, 28, 36, 89, 70, 55, 28, 47];
console.log(arrayInt);
let sum = 0;
for (let i = 0; i < arrayInt.length; i++) {
    if (i % 2 !== 0) {
        sum += arrayInt[i];
    }
}
console.log("la somma dei numeri dell'array in posizione dispari è", sum);