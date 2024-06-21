/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/
console.log(">>>>>>>>>>ESERZIO 1<<<<<<<<<")
/* SCRIVI QUI LA TUA RISPOSTA */
function area(l1, l2) {
    return l1 * l2;
}

console.log("L' area del triangolo misura " + area(3, 5) + "cm");

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/
console.log(">>>>>>>>>>ESERZIO 2<<<<<<<<<")
/* SCRIVI QUI LA TUA RISPOSTA */
crazySum = (a, b) => {
    if (a === b) {
        return a * 6;
    } else {
        return a + b;
    }
};

console.log(crazySum(2, 75));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/
console.log(">>>>>>>>>>ESERZIO 3<<<<<<<<<")
/* SCRIVI QUI LA TUA RISPOSTA */
let crazydiff;
crazyDiff(5);

function crazyDiff(a1) {
    if (a1 > 19) {
        console.log(Math.abs(a1 - 19));
        crazydiff = Math.abs(a1 - 19) * 3;
        console.log(crazydiff);
    } else {
        console.log(Math.abs(a1 - 19));
    }
}

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/
console.log(">>>>>>>>>>ESERZIO 4<<<<<<<<<")

/* SCRIVI QUI LA TUA RISPOSTA */
boundary = () => {
    n = Math.floor(Math.random() * 600) + 1;
    console.log(n);
    if ((n > 20 && n < 100) || (n === 400)) {
        return true;
    } else {
        return false;
    }
}

console.log(boundary())
/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/
console.log(">>>>>>>>>>ESERZIO 5<<<<<<<<<")

/* SCRIVI QUI LA TUA RISPOSTA */
let string = "giovanii cacchio ne so";
let Epicode = "EPICODE"
verify = string.indexOf("EPICODE");

epify()


function epify() {
    if (verify === 0) {
        console.log(string);
    } else {
        string = Epicode + " " + string;
        console.log(string);
    }
}

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/
console.log(">>>>>>>>>>ESERZIO 6<<<<<<<<<")

/* SCRIVI QUI LA TUA RISPOSTA */

function check3and7(p) {
    p = Math.abs(p);
    if (p % 3 === 0 || p % 7 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(check3and7(20));
/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/
console.log(">>>>>>>>>>ESERZIO 7<<<<<<<<<")

/* SCRIVI QUI LA TUA RISPOSTA */
reverseString("zokkk ammok a mmmt");

function reverseString(strinG) {
    let revers = strinG.split("");
    revers.reverse("");
    revers = revers.join("");
    console.log(revers);
}


/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/
console.log(">>>>>>>>>>ESERZIO 8<<<<<<<<<")
/* SCRIVI QUI LA TUA RISPOSTA */

function upperFirst(string) {
    let words = string.split(" ");
    let final = [];
    for (let i = 0; i < words.length; i++) {
        first = words[i].charAt(0);
        first = first.toUpperCase();
        let cut = words[i].substring(1);
        let newWord = first + cut;
        final.push(newWord);
    }
    console.log(final.join(' '));
}

upperFirst("ciao sono mario");
/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/
console.log(">>>>>>>>>>ESERZIO 9<<<<<<<<<")
/* SCRIVI QUI LA TUA RISPOSTA */
function cutString(string) {
    let words = string.split(" ");
    let final = [];
    for (let i = 0; i < words.length; i++) {
        let wordl = words[i].length -1;
        let newords = words[i].slice(1,wordl);
        final.push(newords);
    }
    console.log(final.join(' '));
}

cutString("vengo dalla luna vengo dalla lunas");

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/
console.log(">>>>>>>>>>ESERZIO 10<<<<<<<<<")

/* SCRIVI QUI LA TUA RISPOSTA */
function giveMeRandom(n){
    let arrEy = [];
    if(n % 1 === 0){
        for(let i=0; i < n; i++){
            arrEy.push(Math.floor(Math.random() * 10) + 1);
        }
    console.log(arrEy);
    } else {
        console.log("n deve essere naturale")
    }
}

giveMeRandom(65);