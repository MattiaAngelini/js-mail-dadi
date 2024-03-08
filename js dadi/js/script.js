
//START
// Gioco dei dadi:
//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
//Stabilire il vincitore, in base a chi fa il punteggio più alto.

//Creo una variabile con la funzione di creare numero random da 1 a 6.
let randomNumberCpu = Math.round(Math.random()*5)+1;
let randomNumberPlayer = Math.round(Math.random()*5)+1;

// Stabilisco vincitore in base alla scelta
let result;
if (randomNumberCpu > randomNumberPlayer) {
    result = "cpuWin"
}

else if (randomNumberCpu < randomNumberPlayer){
    result = "playerWin"
}


else {
    result = "draw"

}
console.log(randomNumberCpu);
console.log(randomNumberPlayer);
console.log(result);