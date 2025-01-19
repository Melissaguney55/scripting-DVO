function bereken() {
    // Haal de waarden van de invoervelden op
    let getal1 = parseInt(document.getElementById("getal1").value);
    let getal2 = parseInt(document.getElementById("getal2").value);

    // Controleer of de invoer geldig is
    if (isNaN(getal1) || isNaN(getal2)) {
        document.getElementById("resultaat").innerHTML = "Voer alstublieft geldige gehele getallen in.";
        return;
    }

    // Voer de rekenkundige bewerkingen uit
    let vermenigvuldiging = getal1 * getal2;
    let optelling = getal1 + getal2;
    let aftrekking = getal1 - getal2;
    let deling = getal2 !== 0 ? (getal1 / getal2).toFixed(2) : "Kan niet delen door nul";

    // Toon de resultaten op de webpagina
    document.getElementById("resultaat").innerHTML = `
                <p>Vermenigvuldiging: ${getal1} × ${getal2} = ${vermenigvuldiging}</p>
                <p>Optelling: ${getal1} + ${getal2} = ${optelling}</p>
                <p>Aftrekking: ${getal1} - ${getal2} = ${aftrekking}</p>
                <p>Deling: ${getal1} ÷ ${getal2} = ${deling}</p>
            `;
}