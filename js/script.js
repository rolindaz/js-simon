/*

Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
NOTA: non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.

*/

// Visualizzare in pagina 5 numeri casuali
// I 5 numeri casuali vanno fatti apparire come li della lista numbers, posso farlo con i seguenti passaggi:

// comincio prendendo tutti gli elementi della DOM che mi servono: 

// prendo la ul dalla DOM
const numbersUlEl = document.getElementById('numbers-list');

// prendo il form dalla DOM
const formEl = document.getElementById('answers-form');

// prendo il bottone conferma dalla DOM
const confirmButtonEl = document.querySelector('.btn');

// prendo gli input del form dalla DOM
const userNumber1 = document.getElementById('number1').value;
const userNumber2 = document.getElementById('number2').value;
const userNumber3 = document.getElementById('number3').value;
const userNumber4 = document.getElementById('number4').value;
const userNumber5 = document.getElementById('number5').value;

// aggiungo alla lista 5 li contenenti un math random, facendo apparire numeri interi per comodità

// come posso fare? Potrei creare 5 variabili ognuna con un math random e appenderli alla lista. Questo metodo non mi piace molto perché è ripetitivo.
let li, li2, li3, li4, li5; 

li = document.createElement('li');
li2 = document.createElement('li');
li3 = document.createElement('li');
li4 = document.createElement('li');
li5 = document.createElement('li');

li.append(Math.floor(Math.random() * 101));
li2.append(Math.floor(Math.random() * 101));
li3.append(Math.floor(Math.random() * 101));
li4.append(Math.floor(Math.random() * 101));
li5.append(Math.floor(Math.random() * 101));

console.log(li, li2, li3, li4, li5);

numbersUlEl.append(li, li2, li3, li4, li5);

// Da lì parte un timer di 30 secondi

// Dichiaro la funzione del time out:
setTimeout(simonGame, 30000);
function simonGame() {
    // Dopo 30 secondi i numeri scompaiono
    numbersUlEl.remove();

    // appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce
    formEl.classList.remove('d-none');
};

// il timer è triggerato dall'inizio stampa in pagina

numbersUlEl.addEventListener('afterprint', (e)=>{
    simonGame()
});

// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati

// intanto devo salvare i numeri inseriti in un array, partendo quindi dalla creazione delle variabili corrispondenti ai value degli input

let userNumbers = [];

// dovrò poi creare una variabile counter per contare i numeri indovinati, che partirà quindi da 0

let counter = 0;

// poi mi servirà un array vuoto in cui inserire i numeri indovinati mano a mano che il programma verifica la loro correttezza

let correctNumbers = [];

// adesso dovrò far eseguire la verifica al programma, che deve cioè stabilire se ognuno dei numeri inseriti dall'utente (input value) equivale ad uno qualunque dei random li (perché l'ordine di inserimento non conta). Questa verifica è triggerata dal click su conferma




