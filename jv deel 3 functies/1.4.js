function startMetHallo() {
    // Vraag de gebruiker om een zin in te voeren
    const zin = prompt("Geef een zin in:");

    // Controleer of de zin begint met "Hallo" (ongevoelig voor hoofdletters)
    if (zin.toLowerCase().startsWith("hallo")) {
        console.log(zin); // Geef de oorspronkelijke zin terug
    } else {
        // Voeg "Hallo, " toe aan het begin en maak het eerste lettertje klein
        const nieuweZin = "Hallo, " + zin.charAt(0).toLowerCase() + zin.slice(1);
        console.log(nieuweZin);
    }
}

startMetHallo();