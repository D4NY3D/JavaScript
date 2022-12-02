//Una variable que contenga tu altura en centímetros (entero)

let altura_cm = 170;

//Una variable que contenga tu altura en metros (número de coma flotante)
let altura_m = 1.70;

//Una variable que contenga tu peso en kilogramos (número de coma flotante)
let peso_kg = 59.200;

//Una variable que contenga tu altura en metros redondeada hacia arriba
let alt_rendon = altura_m.toFixed();
console.log(alt_rendon)

//Una variable que contenga tu peso en kilogramos redondeado hacia abajo
let peso_rendon= Math.floor(peso_kg);
console.log(peso_rendon)

//Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript
let sonIguales = Number.MAX_VALUE + 1 === Number.MAX_VALUE
console.log(sonIguales)


