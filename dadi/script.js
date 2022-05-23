//Generare un numero casuale da 1 a 6

const primoNumeroCasuale = Math.floor(Math.random() * 6) + 1 ;
const secondoNumeroCasuale = Math.floor(Math.random() * 6) + 1 ;

//condizione vincitore

if(primoNumeroCasuale > secondoNumeroCasuale){
    document.querySelector ('h1').innerHTML = 'giocatore uno vince';

}else if(primoNumeroCasuale < secondoNumeroCasuale){
    document.querySelector ('h1').innerHTML = 'giocatore due vince';

}else{
    document.querySelector ('h1').innerHTML = 'Pareggio!'

}

console.log(primoNumeroCasuale + 'giocatore uno',secondoNumeroCasuale + 'giocatore due');





