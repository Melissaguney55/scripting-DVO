// Array met minstens 10 hondenrassen
const hondenrassen = [
    "Golden Retriever",
    "Duitse Herder",
    "Labrador Retriever",
    "Beagle",
    "Bulldog",
    "Poodle",
    "Husky",
    "Chihuahua",
    "Boxer",
    "Border Collie"
];

// Functie om een hondenras te tonen of een foutmelding
function toonHondenras() {
    // Haal de invoer op
    const input = parseInt(document.getElementById("inputNumber").value);
    const resultaat = document.getElementById("resultaat");

    // Controleer of de invoer geldig is
    if (input >= 1 && input <= 10) {
        // Toon het juiste hondenras
        const index = input - 1; // Array begint bij 0
        resultaat.innerHTML = `Je hebt gekozen voor: <strong>${hondenrassen[index]}</strong>`;
    } else {
        // Toon de foutmelding
        resultaat.innerHTML = "Sorry, katten niet toegelaten!";
    }
}