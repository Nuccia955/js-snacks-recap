/* 
JSnack2
Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una
lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati. */

const nomi = ['Marco', 'Matteo', 'Lorenzo'];
const cognomi = ['Rossi', 'Bianchi', 'De Martino'];
const invitati = [];
for (let i = 0; i < 3; i++) {
    let index1 = Math.floor(Math.random() * 3);
    console.log(index1);
    let index2 = Math.floor(Math.random() * 3);
    console.log(index2);
    const nomeCognome = `${nomi[index1]} ${cognomi[index2]}`;
    invitati.push(nomeCognome);
}
console.log(invitati);