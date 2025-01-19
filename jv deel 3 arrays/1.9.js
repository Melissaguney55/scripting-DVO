// Arrays voor dagen per maand en weekdagen
const dagenPerMaand = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const weekdagen = ["maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag", "zondag"];

// Huidige datum
const vandaag = new Date();
const huidigeMaand = vandaag.getMonth();
const huidigJaar = vandaag.getFullYear();
const eersteDagVanDeMaand = new Date(huidigJaar, huidigeMaand, 1);
const eersteDagWeekdag = eersteDagVanDeMaand.getDay(); // 0 = zondag, 1 = maandag, ...

// Aantal dagen in de huidige maand (zonder schrikkeljaar)
const aantalDagen = dagenPerMaand[huidigeMaand];

// Lus om alle dagen van de maand te tonen met weekdag
let output = "";
let huidigeWeekdag = eersteDagWeekdag;
for (let dag = 1; dag <= aantalDagen; dag++) {
    output += `${weekdagen[huidigeWeekdag]}, ${String(dag).padStart(2, '0')}/${String(huidigeMaand + 1).padStart(2, '0')}/${huidigJaar}<br>`;
    huidigeWeekdag = (huidigeWeekdag + 1) % 7;
}

// Toon de output op de webpagina
document.body.innerHTML = `
    <h1>Alle dagen van de huidige maand (zonder schrikkeljaar)</h1>
    <p>${output}</p>
`;