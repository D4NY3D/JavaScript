//Este archivo debe calcular el factorial de 10 utilizando un solo bucle for
//Cuando tú factorizas un número, tú estás multiplicando ese número por cada  número consecutivo menos uno.
let factor=10;
for (let i= factor ; i > 0; i--){
    factor *= i;
}
console.log(factor);
