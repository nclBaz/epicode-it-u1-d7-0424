// ********************************* ARRAYS *******************************
const numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const nomiStudenti = ["Angelo", "Arianna", "Brian", "Chems", "Christian"]
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
