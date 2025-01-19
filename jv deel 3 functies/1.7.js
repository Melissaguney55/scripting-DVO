function alleWoordenStartenMetHoofdletter(zin) {
    // Splits de zin op in woorden
    const woorden = zin.split(" ");

    // Maak een nieuwe array om de woorden met hoofdletters op te slaan
    const woordenMetHoofdletter = [];

    // Loop door alle woorden
    for (let i = 0; i < woorden.length; i++) {
        // Maak het eerste karakter van het woord een hoofdletter
        const woordMetHoofdletter = woorden[i].charAt(0).toUpperCase() + woorden[i].slice(1);
        // Voeg het aangepaste woord toe aan de nieuwe array
        woordenMetHoofdletter.push(woordMetHoofdletter);
    }

    // Voeg de woorden met hoofdletters weer samen tot een zin
    const nieuweZin = woordenMetHoofdletter.join(" ");

    // Toon de nieuwe zin op de webpagina
    document.body.innerHTML += `<p>${nieuweZin}</p>`;
}

// Voorbeeld met de gegeven zin
const zin = "Deze oefeningen zijn héél leuk.";
alleWoordenStartenMetHoofdletter(zin);