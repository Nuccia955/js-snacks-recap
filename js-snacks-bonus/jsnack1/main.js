/*
JSnack1
Ogni volta che si clicca un bottone, il nostro programma chiederà un numero di 4 cifre all’utente.
Se l’utente ha inserito un numero corretto, allora il programma calcolerà la somma e le media di tutte le cifre che lo compongono stampandola nel DOM, altrimenti ripeterà la richiesta di inserimento finché non avrà inserito un numero corretto. */
const btn = document.getElementById('btn');
let digit;
let sum;
let mediaDate;
btn.addEventListener('click', function() {
    sum = 0;
    const title = document.getElementById('title')
    let userNumber = prompt('Inserisci un numero a 4 cifre');
    while (userNumber.length < 4 || userNumber.length > 4) {
        alert('Il numero che hai inserito non è valido. Riprova!');
        userNumber = prompt('Inserisci un numero a 4 cifre');
    }
    title.innerHTML = `Il numero che hai scelto è ${userNumber}`;
    console.log(userNumber);
    
    for (let i = 0; i < userNumber.length; i++) {
        digit= parseInt(userNumber[i]);
        sum += digit;
    }
    mediaDate = sum / userNumber.length;
    const somma = document.getElementById('somma')
    somma.innerHTML = `la somma delle cifre è ${sum}`;
    const media = document.getElementById('media');
    media.innerHTML = `la media delle cifre è ${mediaDate}`;
})