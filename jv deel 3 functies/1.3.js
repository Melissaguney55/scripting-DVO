function isVijftig() {
    // Vraag de gebruiker om twee getallen in te voeren
    const getal1 = parseInt(prompt("Geef het eerste getal in (tussen 0 en 100):"));
    const getal2 = parseInt(prompt("Geef het tweede getal in (tussen 0 en 100):"));

    // Controleer of een van de getallen 50 is, of de som 50 is
    if (getal1 === 50 || getal2 === 50 || getal1 + getal2 === 50) {
        document.body.innerHTML += "<h1>Hoera, VIJFTIG!</h1>";
    } else {
        document.body.innerHTML += "<p>Helaas, geen 50 gevonden.</p>";
    }
}

// Roep de functie aan
isVijftig();