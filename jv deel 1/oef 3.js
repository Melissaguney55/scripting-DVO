/*const number =prompt('kies een getal tussen de 1 en de 5')
const number1 = parseInt(number)
console.log(number1)*/

let getal = prompt('vul een getal in tussen 1 en 5');
if (getal >= 1 && getal <= 5)
{    let text = 'De getal dat u heeft ingevoerd was: ' + getal;
    document.getElementById('getal').innerText = text;
    console.log(getal);}
else {    alert('Ongeldig getal! Vul een getal in tussen 1 en 5.');}