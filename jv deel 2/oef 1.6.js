// Vraag de gebruiker om een willekeurige zin in te voeren
let zin = prompt("Voer een willekeurige zin in:");

// Controleer of er een invoer is gegeven
if (zin) {
    // Zoek de locatie van de eerste spatie
    let positieEersteSpatie = zin.indexOf(" ");

    // Controleer of er een spatie is gevonden
    if (positieEersteSpatie !== -1) {
        // Verhoog de positie met 1, zodat deze vanaf positie 1 telt
        positieEersteSpatie += 1;

        // Toon het resultaat in een alert-venster
        alert("De eerste spatie bevindt zich op positie " + positieEersteSpatie + ".");
    } else {
        // Als er geen spatie is gevonden, geef een melding
        alert("Er is geen spatie gevonden in de ingevoerde zin.");
    }
} else {
    // Als de gebruiker niets heeft ingevoerd, geef een melding
    alert("Je hebt geen zin ingevoerd.");
}
