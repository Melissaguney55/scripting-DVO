// Array met alle huidige opleidingen van PXL-DIGITAL
const opleidingenPXL = [
    "Toegepaste Informatica",
    "Elektronica-ICT",
    "Applicatieontwikkeling",
    "AI & Robotics",
    "Cybersecurity",
    "Web & User Experience",
    "IT Business Management",
    "Digital Innovation",
    "Bachelor Multimedia-en Communicatietechnologie"
];

// Zet de array om naar een string met een linebreak tussen iedere opleiding
const opleidingenString = opleidingenPXL.join("<br>");

// Toon de string op de webpagina
document.body.innerHTML = opleidingenString;