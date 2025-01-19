function telDeKlinkers() {
    // Vraag de gebruiker om een zin in te voeren
    const zin = prompt("Geef een zin in:");

    // Definieer een string met alle klinkers
    const klinkers = "aeiouAEIOU";

    // Initialiseer een teller voor het aantal klinkers
    let aantalKlinkers = 0;

    // Loop door elk karakter in de zin
    for (let i = 0; i < zin.length; i++) {
        // Controleer of het huidige karakter een klinker is
        if (klinkers.includes(zin[i])) {
            aantalKlinkers++;
        }
    }

    // Toon het resultaat in een alert-venster
    alert("De zin bevat " + aantalKlinkers + " klinkers.");
}

telDeKlinkers();