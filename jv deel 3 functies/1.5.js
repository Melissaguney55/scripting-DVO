function zinSplitsen() {
    // Vraag de gebruiker om een zin in te voeren
    const zin = prompt("Geef een zin in:");

    // Vraag de gebruiker om een random getal (index)
    let index = parseInt(prompt("Geef een getal op om de zin te splitsen (tussen 0 en " + (zin.length - 1) + "):"));

    // Valideer de ingevoerde index
    while (isNaN(index) || index < 0 || index >= zin.length) {
        alert("Ongeldige invoer! Geef een geheel getal tussen 0 en " + (zin.length - 1) + " in.");
        index = parseInt(prompt("Geef een getal op om de zin te splitsen:"));
    }

    // Splits de zin op de opgegeven index
    const deel1 = zin.slice(0, index);
    const deel2 = zin.slice(index);

    // Toon het resultaat in een alert-venster
    alert("Deel 1: " + deel1 + "\nDeel 2: " + deel2);
}

zinSplitsen();