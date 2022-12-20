/*
Crea un archivo JS que contenga las siguientes líneas

- Una función sin parámetros que devuelva siempre "true"

- Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado

- Una función generadora de índices pares automáticos*/

function sinparametro() {
return true;

}
sinparametro();


function asincrona() {
    console.log("Hola soy una promesa");
}
setTimeout (asincrona, 5000);

function setTimeoutpromises(ms){
    return new Promise ((resolve, reject) => {
        setTimeout(resolve, ms)
    })
}


function* pares(){
    for (let id =2; id <= 100; id += 2)
   yield id;
}

const gen = pares();

console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)