//Una cadena de texto con tu Nombre
let nombre="Daniel";
console.log(nombre);
//Otra cadena de texto con tu Apellido
let apellidos="Espinosa"
console.log(apellidos);
//Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
let estudiante=nombre.concat(" ").concat(apellidos) ;
console.log(estudiante);
//Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
let estudianteMayus= estudiante.toUpperCase();
console.log(estudianteMayus);
//Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
let estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMinus);
//Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
let numletras=estudiante.length;
console.log(numletras);
//Una variable que contenga la primera letra del Nombre
let letraprim = nombre.charAt(0);
console.log(letraprim);
//Otra variable que contenga la última letra del Apellido
let letrault  = apellidos[apellidos.length-1];;
console.log(letrault);
//Una cadena de texto que elimine los espacios de la variable "estudiante"
console.log(estudiante.replace(/ /g, ""))
//Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
let contenido = estudiante.includes(nombre);
console.log(contenido);








