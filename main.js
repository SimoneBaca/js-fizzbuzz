alert("lets go!!")

/*
-Scrivi un programma che stampi i numeri da 1 a 100
-per i multipli di 3 stampi Fizz al posto del numero
-per i multipli di 5 stampi Buzz.
-Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
Prima di partire a scrivere codice poniamoci qualche domanda
Come faccio a sapere se un numero è divisibile per ?
    Abbiamo visto qualcosa di particolare che possiamo usare ?
        Consigli del giorno:
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
BONUS:
Provare a stampare la lista in pagina invece che in console.
*/

// #1 - Scrivere un programma che stampi i numeri da 1 a 100
// #2 - Creare una variabile d'appoggio dove stampare i numeri
// #3 SE multiplo di 3 > Stampo Fizz al posto del numero
// #5 SE multiplo di 5 > Stampo Buzz al posto del numero
// #6 SE multiplo di 3 e 5 > Stampo FizzBuzz al posto del numero

let printNumbers = document.getElementById('result');

let numbers = ''; // Variabile d'appoggio
for (let i = 1; i <= 100; i++) {
    console.log(i);
    numbers = numbers + i;
    if (i % 3 == 0) {
        console.log("Fizz");
    }

    if (i % 5 == 0) {
        console.log("Buzz");
    }
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");
    }

}
printNumbers.innerHTML = numbers;