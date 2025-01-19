// Controleer de leeftijd van de gebruiker
function controleerLeeftijd() {
    let leeftijd = prompt("Ben je 18 jaar of ouder? Voer je leeftijd in:");

    if (leeftijd === null || leeftijd === "") {
        // Als de gebruiker de prompt annuleert of niets invoert
        alert("Geen geldige invoer. Toegang geweigerd.");
        return;
    }

    leeftijd = parseInt(leeftijd);

    if (isNaN(leeftijd)) {
        alert("Voer een geldig getal in voor je leeftijd.");
        return;
    }

    if (leeftijd < 18) {
        alert("Helaas… Je bent te jong!");
    } else {
        // Laat de rekenmachine zien als de gebruiker 18 jaar of ouder is
        document.getElementById("rekenmachine").style.display = "block";
    }
}

// Voer de controle uit wanneer de pagina is geladen
window.onload = controleerLeeftijd;

// Functie om de rekenkundige bewerkingen uit te voeren
function bereken() {
    let getal1 = parseFloat(document.getElementById("getal1").value);
    let getal2 = parseFloat(document.getElementById("getal2").value);

    if (isNaN(getal1) || isNaN(getal2)) {
        document.getElementById("resultaat").innerHTML = "Voer alstublieft geldige getallen in.";
        return;
    }

    let vermenigvuldiging = getal1 * getal2;
    let optelling = getal1 + getal2;
    let aftrekking = getal1 - getal2;
    let deling = getal2 !== 0 ? (getal1 / getal2).toFixed(2) : "Kan niet delen door nul";

    document.getElementById("resultaat").innerHTML = `
                <p>Vermenigvuldiging: ${getal1} × ${getal2} = ${vermenigvuldiging}</p>
                <p>Optelling: ${getal1} + ${getal2} = ${optelling}</p>
                <p>Aftrekking: ${getal1} - ${getal2} = ${aftrekking}</p>
                <p>Deling: ${getal1} ÷ ${getal2} = ${deling}</p>
            `;
}