

/*const h1 = document.createElement('h1');
h1.innerText = 'Hello world';
document.body.appendChild(h1);

const div = document.createElement('div');
const p = document.createElement('p');
p.innerText = 'dummytext'

div.appendChild(p)
document.body.appendChild(div);*/

/*let bedrag = 2;
// minimale inzet = 5 euro
const spelerHeeftMinstens5Euro = bedrag >= 5 // true || false;
const userInput = prompt('Geef je leetijd in:');
const leeftijd = parseInt(userInput);
const h3 = document.createElement('h3');

if(spelerHeeftMinstens5Euro && leeftijd >= 18){
    h3.innerText = 'Veel succes!';
}else{
    h3.innerText = 'Stort nog wat geld!';
}

document.body.appendChild(h3);*/

/*

const x = 20;
const y = 20;
const oudGenoeg = false

if (x > y && oudGenoeg){
    console.log("x is groter dan y");
}else if(x < y){
    console.log("x is niet groter dan y")
}else{
    console.log("x is gelijk aan y")
}
*/

/*
const dagVanDeWeek = parseInt(
    prompt('Geef de dag van de week in')
); // maandag

const h1 = document.createElement('h1'); // h1-element maken
if (dagVanDeWeek === 0){ // "0"
    h1.innerText = 'Zondag';
}else if(dagVanDeWeek === 1){
    h1.innerText = 'Maandag';
}else if(dagVanDeWeek === 2){
    h1.innerText = 'Dinsdag';
} // ... en zo verder
*/

const h1 = document.createElement('h1'); // h1-element maken

const nu = new Date();
const dag = nu.getDay();
let dagVoluit;
switch (dag) {
    case 0:
        dagVoluit = 'zondag';
        break;
    case 1:
        dagVoluit = 'maandag';
        break;
    case 2:
        dagVoluit = 'dinsdag';
        break;
    case 3:
        dagVoluit = 'woensdag';
        break;
    case 4:
        dagVoluit = 'donderdag';
        break;
    case 5:
        dagVoluit = 'vrijdag';
        break;
    case 6:
        dagVoluit = 'zaterdag';
        break;
    default:
        dagVoluit = 'Je hebt geen geldige index meegegeven';
}

h1.innerText = dagVoluit;
document.body.appendChild(h1);


console.log()









