const nombre = "Daniel"
const apellido = "Espinosa"
const datos ={
    nombre,
    apellido
}

//localStorage.setItem("nombre", "apellido")
//localStorage.setItem("datos.nombre", "datos.apellido")
//sessionStorage.setItem(datos.nombre, datos.apellido)

localStorage.setItem("Datos",  JSON.stringify(datos))
sessionStorage.setItem("Datos", JSON.stringify(datos))
const now = new Date()
document.cookie = `datos=${JSON.stringify(datos)};expires=${new Date(now.getTime() + 2 * 60000)}`

