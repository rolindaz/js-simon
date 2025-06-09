/*

Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
NOTA: non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.

*/

// Visualizzare in pagina 5 numeri casuali
// I 5 numeri casuali vanno fatti apparire come li della lista numbers, posso farlo con i seguenti passaggi:

// prendo la ul dalla DOM
const numbersUlEl = document.getElementById('numbers-list');

// prendo il form dalla DOM
const formEl = document.getElementById('answers-form');

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
numbersUlEl.addEventListener('afterprint', setTimeout(()=> {
    // Dopo 30 secondi i numeri scompaiono
    numbersUlEl.remove();

    // appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce
    formEl.classList.remove('d-none');

}, 30000)
);

// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati
