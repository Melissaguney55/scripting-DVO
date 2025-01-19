let y = 3;
let h3;
for (let i = 0; i < 5; i++) {
    h3 = document.createElement('h3');
    h3.innerText = i;
    document.body.appendChild(h3);
}


const fruit = ['aardbei', 'banaan', 'kiwi'];

for (let teller = 0; teller < fruit.length; teller++) {
    const fruitElement = fruit[teller];

    const h2 = document.createElement('h2');
    h2.innerText = fruitElement;
    document.body.appendChild(h2);
}

let tekst = '';
for (let i = 2; i < 5; i++) {
    if (i === 2){
        tekst += 'if';
    }
    tekst += i;
}

// '01if234'






