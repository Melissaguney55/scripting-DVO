
let teller = 0;

while (teller < 10){
    const p = document.createElement('p');
    p.innerText = teller;
    document.body.appendChild(p);
    teller++; // teller = teller + 1; || teller += 1;
}

do{
    const p = document.createElement('p');
    p.innerText = 'do while';
    document.body.appendChild(p);
    teller++; // teller = teller + 1; || teller += 1;
}while (teller < 12);