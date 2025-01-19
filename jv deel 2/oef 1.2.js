const zin1 = 'Mijn naam is Melissa';
const zin2 = 'ik ben 20 jaar oud';
const zin3 = 'en ik woon in heusden-zolder';

const totaleZin = zin1 + ' ' + zin2 + ' ' + zin3;

const p = document.createElement('p');
p.innerText = totaleZin;
document.body.appendChild(p);