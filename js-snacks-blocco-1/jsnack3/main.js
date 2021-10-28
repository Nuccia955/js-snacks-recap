/* Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array */

const numbersDispari = [];
let num; 
//variante for
for (let i=0; i < 6; i++) {
    num = parseInt(prompt('Inserisci un numero'));
    if (num % 2 !== 0) {
        numbersDispari.push(num);
    }
}
console.log(numbersDispari);

//variante while
/* let count = 0;
while (count < 6) {
    num = parseInt(prompt('Inserisci un numero'));
    if (num % 2 !== 0) {
        numbersDispari.push(num);
    }
    count++;
}
console.log(numbersDispari); */