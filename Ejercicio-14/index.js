const btn = document.querySelector("#btn-1")

btn.addEventListener("click", () =>{
    alert("Haz click en el boton")
})

$("#btn-jquery").click(() =>{
    console.log("Hola estoy utilizando Jquery")
    alert("Hola estoy utilizando JQuery")
})