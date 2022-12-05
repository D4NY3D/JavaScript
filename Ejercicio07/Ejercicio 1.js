//- Un nuevo Set con los nombres de tu familia
const nombre_familia = ["Daniel", "Irene", "Mario"]
const nombres_set = new Set(nombre_familia)

//- Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
nombres_set.add("Daniel");
console.log(nombres_set)

//- Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)
nombres_set.add("javascript");
console.log(nombres_set)