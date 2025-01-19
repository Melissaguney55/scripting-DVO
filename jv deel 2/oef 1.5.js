// Vraag de gebruiker om een willekeurig woord in te voeren
let woord = prompt("Voer een willekeurig woord in:");

// Controleer of er een invoer is gegeven
if (woord) {
    // Bereken het aantal karakters in het woord
    let aantalKarakters = woord.length;

    // Toon het resultaat in een alert-venster
    alert("Het woord \"" + woord + "\" bevat " + aantalKarakters + " karakters.");
} else {
    // Als de gebruiker niets heeft ingevoerd, geef een melding
    alert("Je hebt geen woord ingevoerd.");
}
