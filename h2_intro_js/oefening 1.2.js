// Oefening 2

// 1.3 string variabelen declarern
// 2. print ze in console
// 3. toon ze op de pagina
// 3.1 p-element aanmaken
// 3.2 p-element van tekst voorzien
// 3.3 render p op de pagina

const zin1 = 'Dit is de "eerste" zin';
const zin2 = "Dit is de tweede zin";
const zin3 = "Dit is de derde zin";

const totaleZin = zin1 + ' ' + zin2 + ' ' + zin3;

const p = document.createElement("p");
p.innerText = totaleZin;
document.body.appendChild(p);



