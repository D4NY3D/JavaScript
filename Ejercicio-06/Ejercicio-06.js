const lista_compra = ["Pan", "Leche", "Yogurt", "Verduras", "Frutas"]
// Modifica la lista de la compra y añádele "Aceite de Girasol"
lista_compra.unshift("Aceite de Girasol")
console.log(lista_compra)
//Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
lista_compra.shift()
console.log(lista_compra)
//Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)

const lista_peliculas =[
    {titulo : "spiderman", director: "michael", fecha: new Date(2012, 8,12)},
    {titulo: "superman", director: "osckar", fecha:new Date(2008, 7, 25)},
    {titulo: "batman", director: "dany", fecha: new Date(2020, 0, 15)}
    
]
console.log(lista_peliculas)

//- Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
const pelis_ordenadas= lista_peliculas.filter(pelis => pelis.fecha > new Date(2010,0,1))
console.log(pelis_ordenadas)

//- Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const lista_directores = lista_peliculas.map(pelis => {
    return lista_peliculas.director;
    
})
console.log(lista_directores)
//Una nueva lista que contenga los títulos de la lista de películas original (utilizando map) 
const lista_titulo= lista_peliculas.map(pelis => {
    return lista_peliculas.titulo;
})
console.log(lista_titulo)

//Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
const directores_titulos = lista_directores.concat(lista_titulo);
const list_director_titulo = [...lista_directores, ...lista_titulo]

