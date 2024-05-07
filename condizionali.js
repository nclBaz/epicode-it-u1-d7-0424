const user = {
  name: "Giorgio",
  examResult: 30,
}

// if (user.name === "Mario" || user.examResult >= 18) {
//   console.log("Complimenti!")
// } // Non è obbligatorio avere un ramo 'else'

if (user.name === "Mario" || user.examResult >= 18) {
  console.log("Complimenti!")
  if (user.examResult > 29) {
    console.log("Apperò che votone!")
  }
} else {
  console.log("Mi dispiace tanto, hai fatto schifo e soprattutto non ti chiami Mario")
}

const num = 70

if (num < 10) {
  console.log("Il numero è minore di 10")
} else if (num < 50) {
  console.log("Il numero è minore di 50 ma maggiore o uguale a 10")
} else if (num < 100) {
  console.log("Il numero è minore di 100 ma maggiore o uguale a 50")
} else {
  console.log("Nessuna delle precedenti")
}

// ******************** TRUTHY/FALSY ************************
if (user) {
  // user è un oggetto che ha un valore pertanto viene considerato come fosse un true
  // se invece ad esempio lo user fosse undefined oppure null allora sarebbe considerato come false
  console.log("Ciao ", user.name)
} else {
  console.log("Mi dispiace l'utente non è stato trovato")
}

if (user.email) {
  // Controllo se l'email esiste prima di utilizzarla. E' sempre buona pratica controllare se una determinata cosa è definita e non è undefined se devo usarla
  console.log("L'email dell'utente è ", user.email)
} else {
  console.log("L'utente non ci ha fornito un indirizzo email")
}
