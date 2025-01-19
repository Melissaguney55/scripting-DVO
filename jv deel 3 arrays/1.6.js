// Oorspronkelijke array met hondenrassen
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
    "Border Collie",
    "Akita",
    "Shiba Inu",
    "Dalmatian",
    "Newfoundland",
    "Samoyed"
];

// Verwijder een hondenras aan het begin
const verwijderdBegin = hondenrassen.shift(); // Shift verwijdert het eerste element

// Verwijder een hondenras aan het einde
const verwijderdEinde = hondenrassen.pop(); // Pop verwijdert het laatste element

// Toon de bijgewerkte array in de console
console.log("Bijgewerkte array:", hondenrassen);

// Toon de bijgewerkte array en de verwijderde elementen op de webpagina
document.getElementById("output").innerHTML = `
            <p>De bijgewerkte lijst van hondenrassen is:</p>
            <ul>
                ${hondenrassen.map(ras => `<li>${ras}</li>`).join('')}
            </ul>`