
function accessoemail() {
  // controlla che sia nella lista di chi può accedere,
  var mailingList= ["s.fortunato90@gmail.com", "pincopallo0@gmail.com", "boolean@gmail.com"];
  console.log(mailingList);
  // Chiedi all’utente la sua email,
  var emailUtente = prompt("inserisci la tua email");
  console.log(emailUtente);

  var result = false;
  for (var i = 0; i < mailingList.length; i = i + 1) {
    if (emailUtente == mailingList[i]) {
      result = true;
    }
  }

  if (result === true) {
    document.getElementById("accesso").innerHTML = "Benvenuto: " + emailUtente;
  } else {
    alert("accesso non consentito");
    document.getElementById("accesso").innerHTML = "Utente non registrato";
  }
}
