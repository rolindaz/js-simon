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
const userNumber1El = document.getElementById('number1');
const userNumber2El = document.getElementById('number2');
const userNumber3El = document.getElementById('number3');
const userNumber4El = document.getElementById('number4');
const userNumber5El = document.getElementById('number5');

// prendo il messaggio dalla DOM
const messageEl = document.getElementById('message');

// aggiungo alla lista 5 li contenenti un math random, facendo apparire numeri interi per comodità

// come posso fare? Potrei creare 5 variabili ognuna con un math random e appenderli alla lista. Questo metodo non mi piace molto perché è ripetitivo.

let li, li2, li3, li4, li5; 

li1 = document.createElement('li');
li2 = document.createElement('li');
li3 = document.createElement('li');
li4 = document.createElement('li');
li5 = document.createElement('li');

function getRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 51)
    return randomNumber;
};

let randomNumber1, randomNumber2, randomNumber3, randomNumber4, randomNumber5;

randomNumber1 = li1.append(getRandomNumber());
randomNumber2 = li2.append(getRandomNumber());
randomNumber3 = li3.append(getRandomNumber());
randomNumber4 = li4.append(getRandomNumber());
randomNumber5 = li5.append(getRandomNumber());

numbersUlEl.append(li1, li2, li3, li4, li5);

// creo un array vuoto in cui salvo i numeri random generati, così da poterli usare dopo

let randomNumbers = [];

randomNumbers.push(parseInt(li1.innerText), parseInt(li2.innerText), parseInt(li3.innerText), parseInt(li4.innerText), parseInt(li5.innerText));

console.log(randomNumbers);

// Da lì parte un timer di 30 secondi

// Dichiaro la funzione del time out:
setTimeout(simonGame, 5000);
function simonGame() {
    // Dopo 30 secondi i numeri scompaiono
    numbersUlEl.classList.add('d-none');

    // appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce
    formEl.classList.remove('d-none');
};

// il timer è triggerato dall'inizio stampa in pagina

numbersUlEl.addEventListener('afterprint', (e)=>{
    simonGame();
});

// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati

// adesso dovrò far eseguire la verifica al programma, che deve cioè stabilire se ognuno dei numeri inseriti dall'utente (input value) equivale ad uno qualunque dei random li (perché l'ordine di inserimento non conta), ciclando un array in cui ho annoverato i numeri inseriti dall'utente. Questa verifica è triggerata dal click su conferma

formEl.addEventListener('submit', (e)=> {

    e.preventDefault();

    // intanto salvo i numeri inseriti in un array vuoto, partendo dalle variabili con i valori degli input che ho già creato
    
    let userNumbers = [];

    userNumbers.push(parseInt(userNumber1El.value), parseInt(userNumber2El.value), parseInt(userNumber3El.value), parseInt(userNumber4El.value), parseInt(userNumber5El.value));
    
    //loggo per conferma

    console.log(userNumbers);

    // poi creo una variabile counter per contare i numeri indovinati, che partirà quindi da 0
    
    let counter = 0;
    
    // poi mi servirà un array vuoto in cui inserire i numeri indovinati mano a mano che il programma verifica la loro correttezza
    
    let correctNumbers = [];
    
    // ora creo una funzione che verifichi la corrispondenza tra gli elementi dei due array

    function arraysEqual(userNumbers, randomNumbers) {
        for (let i = 0; i < userNumbers.length; i++) {
            let thisNumber = userNumbers[i];
            if (randomNumbers.includes(thisNumber) === true) {
                correctNumbers.push(thisNumber);
                counter++;
            };
        };
        messageEl.innerText = `Ti sei ricordato ${counter} numeri su 5, complimenti! Questi sono i numeri che hai indovinato: ${correctNumbers.join(', ')}.`
    };

    // loggo tutto per verifica:

    console.log(arraysEqual(userNumbers, randomNumbers));
    console.log(counter, correctNumbers);
});




