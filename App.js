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


// function agregarPersonaje() {
//     const fs = require('fs');
//     let personajes = fs.readFileSync('./PersonajesdeGameofThrones.json', 'utf-8')
//     let data = JSON.parse(personajes);
//     let idDeUltimo = (data[data.length-1].id);
//     console.log(idDeUltimo);
//     const nuevoPersonaje = {
//         id: idDeUltimo+1 ,
//         firstName: 'Ruben',
//         lastName: 'Almiron',
//         fullName: 'Almiron Ruben',
//         title: 'Lord of Winterfell',
//         family: 'House Stark',
//         image: 'ruben-almiron.jpg',
//         imageUrl: 'https://thronesapi.com/assets/images/sam.jpg'
//     }
//     data.push(nuevoPersonaje);
//     console.log(nuevoPersonaje);
//     let newArray = JSON.stringify(data)
//     escribirNuevoJson = fs.writeFile('./PersonajesdeGameofThrones.json',newArray, err => {
//         if (err) {
//           console.error(err);
//         } else {
//           console.log("file written successfully")
//         }
//     });
// }
// agregarPersonaje();

function  personajesCuyoID(param) {
    const fs = require('fs');
    let personajes = fs.readFileSync('./PersonajesdeGameofThrones.json', 'utf-8')
    let data = JSON.parse(personajes);
    let resultadoDeFiltrado = data.filter(element => element['id'] > param)
    
    let newArray = JSON.stringify(resultadoDeFiltrado)
    personajes = fs.writeFile('./PersonajesdeGameofThrones.json',newArray, err => {
        if (err) {
          console.error(err);
        } else {
          console.log("file written successfully")
        }
    });
    console.log(resultadoDeFiltrado);
}
personajesCuyoID(25);
