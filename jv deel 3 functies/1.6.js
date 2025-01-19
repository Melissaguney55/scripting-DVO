function verwijderTeken() {
    // Vraag de gebruiker om een zin in te voeren
    const zin = prompt("Geef een zin in:");

    // Vraag de gebruiker om een index op te geven
    let index = parseInt(prompt("Geef een index op om het teken te verwijderen (tussen 0 en " + (zin.length - 1) + "):"));

    // Valideer de ingevoerde index
    while (isNaN(index) || index < 0 || index >= zin.length) {
        alert("Ongeldige invoer! Geef een geheel getal tussen 0 en " + (zin.length - 1) + " in.");
        index = parseInt(prompt("Geef een index op om het teken te verwijderen:"));
    }

    // Verwijder het teken op de opgegeven index
    const deel1 = zin.slice(0, index);
    const deel2 = zin.slice(index + 1);
    const nieuweZin = deel1 + deel2;

    // Toon het resultaat in de console
    console.log("Nieuwe zin:", nieuweZin);
}

verwijderTeken();