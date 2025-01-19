// Array met aantal dagen per maand
const dagenPerMaand = [
    31, // Januari
    28, // Februari (kan 29 zijn in schrikkeljaren)
    31, // Maart
    30, // April
    31, // Mei
    30, // Juni
    31, // Juli
    31, // Augustus
    30, // September
    31, // Oktober
    30, // November
    31  // December
];

// Huidige datum
const vandaag = new Date();
const huidigeMaand = vandaag.getMonth(); // Maand (0-gebaseerd index: 0 = januari)
const huidigJaar = vandaag.getFullYear();

// Aantal dagen in de huidige maand
const aantalDagen = dagenPerMaand[huidigeMaand];

// Lus om alle dagen van de maand te tonen
let output = "";
for (let dag = 1; dag <= aantalDagen; dag++){
    const formattedDate = `${String(dag).padStart(2, '0')}/${String(huidigeMaand + 1).padStart(2, '0')}/${huidigJaar}`;
output += formattedDate + "<br>"; // Formatteer de datum en voeg een regelbreuk toe
}

// Toon de output op de webpagina
document.body.innerHTML = `
    <h1>Alle dagen van de maand</h1>
    <p>${output}</p>
`;