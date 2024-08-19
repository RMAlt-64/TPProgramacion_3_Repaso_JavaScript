const fs = require('fs');
    let personajes = fs.readFileSync('./PersonajesdeGameofThrones.json', 'utf-8')
    let data = JSON.parse(personajes);
    let valorID = data.length++
    console.log(valorID);

// function randomId(min,max){
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }
// console.log(randomId(53,101));
