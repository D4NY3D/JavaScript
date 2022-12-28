class Estudiante{
    nombre= "Dany"
    asignatura=["Javascrip", "Html", "CSS"]
      
    obtenDatos(){
        return {
        nombre: this.nombre,
        asignatura: this.asignatura   
        }
    }
}

const estudiante = new Estudiante ()
console.log(estudiante.obtenDatos())