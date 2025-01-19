// Maak een object met persoonlijke gegevens
const persoon = {
    voornaam: "Jan",
    achternaam: "Jansen",
    telefoonnummer: "0612345678",
    geboortedatum: "1990-01-01",
    email: "jan.jansen@example.com"
};

// Toon het volledige object in de console
console.log(persoon);

// Functie om een tabel te maken en op de pagina te zetten
function maakTabel(object) {
    // Maak een tabel element aan
    const tabel = document.createElement('table');

    // Maak een thead (tabel header)
    const thead = document.createElement('thead');
    const tr = document.createElement('tr');
    const th1 = document.createElement('th');
    th1.textContent = 'Eigenschap';
    const th2 = document.createElement('th');
    th2.textContent = 'Waarde';
    tr.appendChild(th1);
    tr.appendChild(th2);
    thead.appendChild(tr);
    tabel.appendChild(thead);

    // Maak een tbody (tabel body)
    const tbody = document.createElement('tbody');
    for (const eigenschap in object) {
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        td1.textContent = eigenschap;
        const td2 = document.createElement('td');
        td2.textContent = object[eigenschap];
        tr.appendChild(td1);
        tr.appendChild(td2);
        tbody.appendChild(tr);
    }
    tabel.appendChild(tbody);

    // Voeg de tabel toe aan het document (bijvoorbeeld aan het body)
    document.body.appendChild(tabel);
}

// Roep de functie aan om de tabel te maken
maakTabel(persoon);