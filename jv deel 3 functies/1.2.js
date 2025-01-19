function verschil() {
    // Vraag de gebruiker om een getal in te voeren
    const ingevoerdGetal = parseInt(prompt("Geef een getal in:"));

    // Bereken het verschil tussen het ingevoerde getal en 100
    const verschil = ingevoerdGetal - 100;

    // Log het resultaat naar de console
    console.log("Het verschil tussen jouw getal en 100 is:", verschil);
}

// Roep de functie aan om het verschil te berekenen
verschil();