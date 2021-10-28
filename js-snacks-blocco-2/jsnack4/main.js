/* 
JSnack 4 
Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi casuali all’array che ha meno elementi,
fino a quando ne avrà tanti quanti l’altro.*/

const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const array2 = [1, 2, 3];
console.log(array1);
console.log(array2);
let randomNum;
while (array2.length < array1.length) {
    randomNum = Math.floor(Math.random() * 100 + 4);
    console.log("numero random da aggiungere all'array2", randomNum);
    array2.push(randomNum);
}
console.log(array2);