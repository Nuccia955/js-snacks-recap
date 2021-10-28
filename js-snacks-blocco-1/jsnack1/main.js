/* JSnack 1
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga. */

const word1 = prompt('Inserisci una parola');
const word2 = prompt("Inseriscine un'altra");

if (word1.length > word2.length) {
    console.log(`${word1} è più lunga di ${word2}`);
} else if (word1.length < word2.length) {
    console.log(`${word2} è più lunga di ${word1}`);
} else {
    console.log('Le due parole hanno lunghezza uguale');
}