/* Il software deve chiedere per 5 volte all’utente di inserire un numero.
 Il programma stampa la somma di tutti i numeri inseriti con for
 e opzionalmente con while (edited) */

const numbers = [];
let count = 0;
while (count < 5) {
    const num = parseInt(prompt('inserisci un numero'));
    numbers.push(num);
    count++;
}

//variante for
let sum = 0;
for (let i=0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log(`${sum}`);

//variante while
/* while (count < 5) {
    sum += numbers[i];
    count++;
}
console.log(`${sum}`); */
