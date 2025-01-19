// Vraag de gebruiker om het eerste gehele getal
let getal1 = parseInt(prompt("Voer het eerste gehele getal in:"));

// Vraag de gebruiker om het tweede gehele getal
let getal2 = parseInt(prompt("Voer het tweede gehele getal in:"));

// Controleer of beide invoeren geldige getallen zijn
if (!isNaN(getal1) && !isNaN(getal2)) {
    // Bereken het product van de twee getallen
    let resultaat = getal1 * getal2;

    // Toon het resultaat op de webpagina
    document.getElementById("resultaat").innerText =
        "De vermenigvuldiging van " + getal1 + " en " + getal2 + " is " + resultaat + ".";
} else {
    // Als een of beide invoeren ongeldig zijn, geef een foutmelding
    document.getElementById("resultaat").innerText =
        "Ongeldige invoer. Voer alstublieft twee gehele getallen in.";
}