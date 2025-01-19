function grootsteGetal() {
    let grootsteGetal = null;
    let invoer;

    while (true) {
        invoer = prompt("Geef een getal in (typ 'stop' om te stoppen):");

        if (invoer.toLowerCase() === 'stop') {
            break;
        }

        const getal = Number(invoer);

        if (!isNaN(getal)) {
            if (grootsteGetal === null || getal > grootsteGetal) {
                grootsteGetal = getal;
            }
        } else {
            alert("Ongeldige invoer. Geef een getal in of typ 'stop'.");
        }
    }

    if (grootsteGetal !== null) {
        console.log("Het grootste getal is:", grootsteGetal);
    } else {
        console.log("Er zijn geen getallen ingevoerd.");
    }
}

grootsteGetal();