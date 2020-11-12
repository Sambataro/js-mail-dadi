
function rollthedice() {

// numero random computer
  var dadoComputer = Math.floor((Math.random() * 6) + 1);
  console.log(dadoComputer);

  // numero random utente
  var dadoUtente = Math.floor((Math.random() * 6) + 1);
  console.log(dadoUtente);

  if (dadoComputer > dadoUtente) {
    // numero computer maggiore utente
    console.log("You lose..");
    document.getElementById("risultato").innerHTML = "You lose..  " + "Computer:" + dadoComputer + "  Player:" + dadoUtente ;

  } else if (dadoComputer < dadoUtente) {
    // numero computer minore dell'utente
    console.log("You win!");
    document.getElementById("risultato").innerHTML = "You win!  " + "Computer:" + dadoComputer + "  Player:" + dadoUtente ;
  } else {
    // in caso di pareggio
    console.log("draw");
    document.getElementById("risultato").innerHTML = "Draw  " + "Computer:" + dadoComputer + "  Player:" + dadoUtente ;
  }
}
