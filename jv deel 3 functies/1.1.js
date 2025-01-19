function vermenigvuldig() {
    // Kies hier de getallen die je wilt vermenigvuldigen
    const getal1 = 5;
    const getal2 = 10;

    // Vermenigvuldig de getallen
    const product = getal1 * getal2;

    // Toon het resultaat op de webpagina
    document.body.innerHTML += `<p>Het product van ${getal1} en ${getal2} is: ${product}</p>`;
}

// Roep de functie aan om het resultaat te tonen
vermenigvuldig();