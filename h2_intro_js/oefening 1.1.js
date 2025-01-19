// Oefening 1

// 1.3 string variabelen declarern
// 2. print ze in console
// 3. toon ze op de pagina
// 3.1 p-element aanmaken
// 3.2 p-element van tekst voorzien
// 3.3 render p op de pagina

const zin1 = 'Dit is de "eerste" zin';
const zin2 = "Dit is de tweede zin";
const zin3 = "Dit is de derde zin";

console.log(zin1);
console.log(zin2);
console.log(zin3);

const p = document.createElement('p');
p.innerText = zin1;
document.body.appendChild(p);

const p2 = document.createElement('p');
p2.innerText = zin2;
document.body.appendChild(p2);

const p3 = document.createElement('p');
p3.innerText = zin3;
document.body.appendChild(p3);


