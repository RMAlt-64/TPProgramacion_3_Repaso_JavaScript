//Ejercicio 1 
//Thrones API (https://thronesapi.com/)


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
//     let newArray = JSON.stringify(data);
//     escribirNuevoJson = fs.writeFile('./PersonajesdeGameofThrones.json',newArray, err => {
//       if (err) {
//         console.error(err);
//       } else {
//         console.log("file written successfully");
//       }
//     });
//     console.log(newArray);
// }
// agregarPersonaje();


// function  personajesCuyoID(param) {
//     const fs = require('fs');
//     let personajes = fs.readFileSync('./PersonajesdeGameofThrones.json', 'utf-8')
//     let data = JSON.parse(personajes);
//     let resultadoDeFiltrado = data.filter(element => element['id'] > param)
    
//     let newArray = JSON.stringify(resultadoDeFiltrado)
//     personajes = fs.writeFile('./PersonajesdeGameofThrones.json',newArray, err => {
//         if (err) {
//           console.error(err);
//         } else {
//           console.log("Archivo sobreescribido exitosamente")
//         }
//     });
//     console.log(resultadoDeFiltrado);
// }
// personajesCuyoID(25);


//Ejercicio 2
//FakeStore API ( https://fakestoreapi.com/ )

// async function allProduct() {
//   let url = "https://fakestoreapi.com/products"
//   try {
//     const respuesta = await fetch(url);
    
//     if (!respuesta.ok){
//       throw new Error(`Response status: ${response.status}`)
//     }
//     const json = await respuesta.json();
//     console.log(json);
//   } catch (error) {
//     console.error('error.messaje');
//   }
// }
// allProduct();


// async function limitadoDeProductos() {
//   let url = "https://fakestoreapi.com/products?limit=2"
//   try {
//     const respuesta = await fetch(url);
    
//     if (!respuesta.ok){
//       throw new Error(`Response status: ${response.status}`)
//     }
//     const json = await respuesta.json();
//     console.log(json);
//   } catch (error) {
//     console.error('error.messaje');
//   }
// }
// limitadoDeProductos();


async function agregarProducts() {
  let url =('https://fakestoreapi.com/products')
  try {
    fetch(url)
    .then(res=> res.json())
    .then(json => {
      let productos = json;
      let idDeUltimo = (productos[productos.length-1].id)+1;
      let newProduct = {
        id: idDeUltimo,
        title: 'Taladro atornillador inalámbrico',
        price: 10.5,
        description: '13mm DeWalt DCD771C2 20V + accesorio 220V',
        image: 'https://www.shutterstock.com/image-photo/hands-caucasian-worker-drilling-wooden-detail-2304268621',
        category: 'electronic',
        rating: { rate: 4.3, count: 450 }
      };
      productos.push(newProduct);
      console.log(productos);
    });

  } catch (error) {
    console.error('error.messaje');
  }
}
agregarProducts();


// async function productoPorId(params) {
//   let url = 'https://fakestoreapi.com/products';
//   try {
//     fetch(url)
//     .then(res=>res.json())
//     .then(json=> {
//       let todosLosProductos = json
//       let newArray = todosLosProductos.filter((element) => element['id'] == params )
//       console.log(newArray);
//     })
//   } catch (error) {
//     console.log("Error al tratar de obtener los datos de la API")
//   }
// }
// productoPorId(1);


// async function eliminarUnProducto() {
//   let url = 'https://fakestoreapi.com/products/6'
//   try {
//     fetch(url,{method:"DELETE"})
//     .then(res=>res.json())
//     .then(json => console.log(json))
//   } catch (error) {
//     console.log("Error al tratar de obtener los datos de la API")
//   }
// }
// eliminarUnProducto();