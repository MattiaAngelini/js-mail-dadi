
//Mail
//Chiedi all’utente la sua email,
//controlla che sia nella lista di chi può accedere,
//stampa un messaggio appropriato sull’esito del controllo.
//Per la soluzione di questo esercizio NON è consentito utilizzare .includes di js!
//Prima di partire a scrivere codice poniamoci qualche domanda:
//Che ci sia un array da qualche parte?
//Se dobbiamo confrontare qualcosa che "cosa" ci serve?



//1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
//2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
//3. si ma noi cosa vogliamo fare?
//4. torniamo a scrivere in italiano
//5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"

//START
// Gioco dei dadi:
//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
//Stabilire il vincitore, in base a chi fa il punteggio più alto.

//Creo una variabile con la funzione di creare numero random da 1 a 6.
let randomNumberCpu = Math.round(Math.random()*5)+1;
let randomNumberPlayer = Math.round(Math.random()*5)+1;


//Creo 2 variabili per le scelte dei giocatori.
console.log(randomNumberCpu);
console.log(randomNumberPlayer);




