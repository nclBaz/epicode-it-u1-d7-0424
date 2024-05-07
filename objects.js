// ************************************ OBJECTS *****************************************

/*
Un oggetto in JS è una struttura che ci consente di modellare entità del mondo reale.
Ovvero in tutte quelle situazioni in cui non ci bastano stringhe, booleani e numeri, e abbiamo quindi 
bisogno di aggregare più informazioni dentro un'unica variabile/costante.
L'oggetto è una struttura composta da PROPRIETA' e racchiuso in parentesi GRAFFE. Una proprietà è una coppia chiave:valore, e tutte le proprietà sono separate da virgole.
*/

const emptyObj = {}

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
}
console.log("USER:", user)

// *************************************** ACCEDERE ALLE PROPRIETA' DEGLI OGGETTI ********************

console.log("Nome dello user:", user.firstName) // Tramite la DOT NOTATION posso accedere e leggere il valore di una proprietà
console.log("Indirizzo dello user:", user.address)
console.log("Via dello user: ", user.address.street)

// Alternativa alla dot notation è la SQUARE BRACKETS NOTATION
console.log("Nome dello user:", user["firstName"]) // è da preferire la dot notation in quasi tutti i casi. La situazione dove non possiamo utilizzare la dot notation è quella in cui il nome di una proprietà è composta da due parole separate da spazio

console.log("Email dello user:", user.email) // Se provo ad accedere ad una proprietà non definita, non è che mi becco un errore ma mi verrà restituito UNDEFINED

user.age = 30 // Posso sovrascrivere i valori delle proprietà con l'assegnazione
console.log("USER:", user)
user.email = "aldo@gmail.com" // Aggiungo una nuova proprietà

delete user.isActor // Cancello la proprietà
console.log("USER:", user)
console.log("USER is actor:", user.isActor)

// **************************************************** COPIA DI OGGETTI ****************************
// const user2 = user // NON SI COPIANO GLI OGGETTI CON L'UGUALE!
// // Questo perché alla riga 47 JS non mi crea una nuova locazione di memoria contenente i dati di user2,
// // bensì punta alla stessa locazione di user e pertanto andando a modificare uno dei due andrò a modificare anche l'altro (e molto probabilmente questo NON è il comportamento che voglio)
// console.log("USER 2: ", user2)
// user2.firstName = "Giovanni"
// console.log("USER 2: ", user2)
// console.log("USER : ", user)

// Per copiare tutti i valori di un oggetto in un altro ci sono 2 metodi:
// 1) Object.assign()
// 2) Spread Operator
const user2 = Object.assign({}, user) // 1) Così sto copiando tutte le proprietà da user ad un oggetto nuovo e vuoto {} che verrà poi trasferito in user2
const user3 = { ...user } // 2) Stesso discorso di sopra ma più sintetico
user2.firstName = "Giovanni"
console.log("USER 2: ", user2)
console.log("USER : ", user)
