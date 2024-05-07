// ********************************* ARRAYS *******************************
const numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const nomiStudenti = ["Angelo", "Arianna", "Brian", "Chems", "Christian"]
const booleani = [true, false, true]
const mixed = [20, "adojoaisjd", true] // Fare un mix di tipi non ha solitamente molto senso
// Gli array sono delle liste di elementi raggruppati secondo un'unica etichetta
// Le liste possono contenere qualsiasi tipo di elemento vogliamo, solo stringhe, solo numeri, stringhe e numeri, booleani...qualsiasi cosa. Sarebbe sempre bene però memorizzare all'interno di un array solo elementi dello stesso tipo se possibile.

// *************** ACCEDERE AGLI ELEMENTI **********************
// Per accedere ai singoli elementi di un array servono gli INDICI. Gli indici sono dei numeri che vanno da 0 (NON DA 1!!!!) a lunghezza dell'array - 1.
// ES: Se ho un array di 3 elementi, il primo avrà indice 0, il secondo indice 1, il terzo indice 2. Se provo ad accedere con indice 3 otterrò UNDEFINED!
console.log(nomiStudenti[0]) // Angelo
console.log(nomiStudenti[1]) // Arianna
console.log(nomiStudenti[4]) // Christian
console.log(nomiStudenti[5]) // Undefined
console.log(nomiStudenti)
console.log("Numero elementi dell'array:", nomiStudenti.length) // Esiste una proprietà speciale degli array che si chiama length che mi ritorna il numero elementi dell'array stesso
console.log(nomiStudenti[nomiStudenti.length - 1]) // Mi dà sempre l'ultimo elemento

// *************************** ARRAY DI OGGETTI *******************************
const users = [
  { firstName: "Aldo", lastName: "Baglio" },
  { firstName: "Giovanni", lastName: "Storti" },
  { firstName: "Giacomo", lastName: "Poretti" },
]

const aldo = users[0]
const giovanni = users[1]
const giacomo = users[2]
aldo.firstName = "Ajeje"

console.log(users.firstName) // NON POSSO FARE UNA COSA DEL GENERE IN QUANTO L'ARRAY NON HA UNA PROPRIETA' CHE SI CHIAMA FIRSTNAME. SONO GLI OGGETTI ALL'INTERNO DELL'ARRAY A POSSEDERE QUELLA PROPRIETA'
console.log(users[0].firstName) // Questo è il modo per accedere al nome proprio del primo elemento dell'array

const user = {
  firstName: "Aldo",
  lastName: "Baglio",
  age: 20,
  gender: "Male",
  isActor: true,
  address: {
    street: "Corso Italia",
    number: 1,
    city: "Milano",
    zipCode: "12345",
  },
  professions: ["Actor", "Comedian"],
}

console.log("Il primo lavoro di Aldo è: ", user.professions[0])
console.log("Il secondo lavoro di Aldo è: ", user.professions[1])

// const user2 = {
//   firstName: "Giovanni",
//   lastName: "Storti",
//   age: 30,
//   gender: "Male",
//   isActor: true,
//   address: {
//     street: "Corso Italia",
//     number: 1,
//     city: "Milano",
//     zipCode: "12345",
//   },
// }

// const users2 = [user, user2] // Posso anche aggiungere degli elementi all'array provenienti da oggetti creati in precedenza

const stringhe = ["C", "A", "B", "Z", "F"]
console.log(stringhe)
stringhe.sort()
console.log(stringhe) // Stringhe ora sarà una lista ordinata alfabeticamente

stringhe.push("W") // Aggiunge un elemento in coda all'array
console.log(stringhe)
stringhe.pop() // Fa saltare l'ultimo elemento in coda all'array
console.log(stringhe)
