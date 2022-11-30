//Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break

let num = 10; 
let factor = num; 
while (num > 0){ //mientras
    factor *= num; 
    num--;
        if (num < 0)
            break;
    
}
console.log(factor)