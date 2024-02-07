// Funktion som loggar "Hej Hej"
function logHejHej() {
  console.log("Hej Hej");
}

// Hitta knappen med ID 'linusKnapp'
const linusKnapp = document.getElementById("linusKnapp");

// Kontrollera att knappen faktiskt finns
if (linusKnapp) {
  // Lägg till en 'click' eventListener
  linusKnapp.addEventListener("click", logHejHej);
} else {
  console.log('Knappen med ID "linusKnapp" hittades inte.');
}
