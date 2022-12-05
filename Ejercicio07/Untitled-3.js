//- La fecha de hoy
const fecha_hoy= new Date()
console.log(fecha_hoy)

//- La fecha de tu nacimiento
const fecha_nacimiento= new Date(1982, 11, 19)
console.log(fecha_nacimiento)

//- Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento

const fecha=fecha_hoy > fecha_nacimiento;
console.log(fecha)

//- Una variable que contenga el día de tu nacimiento
const dia_nacimiento=fecha_nacimiento.getDate();
console.log(dia_nacimiento)

//- Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
const mes_nacimiento = fecha_nacimiento.getMonth() + 1;
console.log(mes_nacimiento)

// Una variable que contenga el año de tu nacimiento (con 4 dígitos)
const anyo_nacimiento = fecha_nacimiento.getFullYear();
console.log(anyo_nacimiento)