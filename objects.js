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
