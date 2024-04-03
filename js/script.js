// Array degli elementi della lista della spesa
const groceryList = ["Carne", "Patate", "iPad", "Glucosio", "Nigiri al tonno", "Salamini", "Sonnifero"];

// Seleziono l'elemento UL dove inserire gli elementi della lista
const ul = document.getElementById("grocery-list");

// Inizializzo l'indice
let i = 0;

// Ciclo while per aggiungere gli elementi della lista alla pagina
while (i < groceryList.length) {
  // Creo un nuovo elemento LI
  const li = document.createElement("li");

  // Assegno il testo all'elemento LI
  li.textContent = groceryList[i];

  // Aggiungo l'elemento LI alla lista UL
  ul.appendChild(li);

  // Incremento l'indice
  i++;
}