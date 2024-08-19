// async function buscarPersonaje(id){
//     try {
//         let respuesta = await fetch (`https://thronesapi.com/api/v2/Characters/${id}`);
//         if (!respuesta.ok){
//             throw new Error('Error',respuesta.status)
//         }
//         let personaje = await respuesta.json();
//         console.log(personaje);
//     }catch (error){
//         console.log(error);
//     }
// }
// buscarPersonaje(6);

// async function buscarPersonajes(){
//     try {
//         let respuesta = await fetch (`https://thronesapi.com/api/v2/Characters`);
//         if (!respuesta.ok){
//             throw new Error('Error',respuesta.status)
//         }
//         const fs = require('fs');
//         let datos = await respuesta.json();
//         respuesta = JSON.stringify(datos);
//         fs.writeFileSync('./PersonajesdeGameofThrones.json', respuesta);
//         console.log(respuesta);
//     }catch (error){
//         console.log(error);
//     }
// }
// buscarPersonajes();

// function familiaStark(param){
//     const fs = require('fs');
//     let personajes = fs.readFileSync('./PersonajesdeGameofThrones.json', 'utf-8')
//     let data = JSON.parse(personajes);
//     let resultadoFamily = data.filter(element => element['family'] == param);
//     return console.log(resultadoFamily);
// }
// familiaStark('House Stark');


function agregarPersonaje() {
    const fs = require('fs');
    let personajes = fs.readFileSync('./PersonajesdeGameofThrones.json', 'utf-8')
    let data = JSON.parse(personajes);
    console.log(data);
    let valorID = (data.length)++
    const nuevoPersonaje = {
        id: valorID,
        firstName: 'Ruben',
        lastName: 'Almiron',
        fullName: 'Almiron Ruben',
        title: 'Lord of Winterfell',
        family: 'House Stark',
        image: 'ruben-almiron.jpg',
        imageUrl: 'https://thronesapi.com/assets/images/sam.jpg'
    }

    data.push(nuevoPersonaje);
    console.log(data);
        
    data = JSON.stringify


}

agregarPersonaje();