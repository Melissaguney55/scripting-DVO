/*let tekst = "geen een getal in";

//const voornaam = prompt("Geef je voornaam")

console.log(tekst);*/

// Een nieuw element aanmaken
const p = document.createElement("p");
p.innerText = "De tekst van \\ \"mijn paragraaf\"";
    p.innerText = 'Een andere tekst'
document.body.appendChild(p);
console.log(p);

//alert("De tekst van  \t mijn paragraaf")
const code = 'BE-3500';


//1. een h2-element aanmaken
const streepjeH2 = document.createElement("h2");

//2. streepje uit de code-string halen
let streepje = code.charAt(2);

//3. streepje als tekst instellen
streepjeH2.innerText = streepje;

//4. Toevoegen aan de pagina
document.body.appendChild(streepjeH2)

const lengte = p.innerText.length

p.innerText = code.substring(0,2);
const beginIndex = code.length - 4;
streepjeH2.innerText = code.substring(3);
