const zin1 = 'Mijn naam is Melissa';
const zin2 = 'ik ben 20 jaar oud';
const zin3 = 'en ik woon in heusden-zolder';

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