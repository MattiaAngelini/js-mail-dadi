//Mail
//Chiedi all’utente la sua email,
//controlla che sia nella lista di chi può accedere,
//stampa un messaggio appropriato sull’esito del controllo.

//START
//Creo array con selezioni disponibili
const mails = ['mario@gmail.com', 'luca@gmail.com', 'mattia@gmail.com', 'andre@gmail.com', 'sara@gmail.com', 'luciana@gmail.com','sabrina@gmail.com','andrea@gmail.com'];

//Faccio scegliere all'utente la mail con un prompt e il valore del prompt lo inserisco in una costante
let userChoice = prompt("Scrivi la mail corretta")
const userMail = userChoice;

//Creo variabile con un valore 'falso'
let mailFound = false;

//Creo loop for per scorrere l'elenco delle mail
for(let i = 0; i < mails.length; i++) {
    const thisMail = mails[i];

//Se la scelta dell'utente (userMail) è presente nell'array,
//variabile false cambia valore in true.
    if(thisMail === userMail) {
        mailFound = true;
    }
}

//Infine se la scelta è quindi vera stampo in un alert mail corretta
//altrimenti stampo mail non presente
if(mailFound === true) {
    alert('Mail corretta');
} else {
    alert('Mail non presente');
}