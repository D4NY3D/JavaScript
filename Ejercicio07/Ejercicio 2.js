//Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)

const datos_personales ={
    nombre: "Dani",
    apellido: "Espinosa Delgado",
    edad: 39,
    altura: 170,
    eresDesarrollador: true,
}
//- Una variable que obtenga tu edad a partir del objeto anterior
const dato_edad=datos_personales.edad;
console.log(dato_edad)

//- Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
const lista_amigo =[
{
    ...datos_personales
},
{
    nombre: "oscar",
    apellido: "Garcia Gutierrez",
    edad: 40,
    altura: 172,
    eresDesarrollador: false,
},
{
    nombre: "Angel",
    apellido: "Peña Neira",
    edad: 41,
    altura: 180,
    eresDesarrollador: false,
}
]
//- Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
const lista_ordenada= lista_amigo.sort((a, b) => a.edad - b.edad)
console.log(lista_ordenada);
