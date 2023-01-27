/** 
document.getElementById('boton').onclick = function () {
    console.log("Capturamos el evento click");
    document.getElementById("demo").innerHTML = "estamos probando nuestro primer evento en js";
}


document.addEventListener('click', function() {
    console.log("hola mundo desde EventListener");
    document.getElementById("demo").innerHTML = "estamos probando nuestro primer evento en js";
}
*/

document.getElementById('boton').addEventListener('click', function() {
    console.log("hola mundo desde EventListener");
    document.getElementById("demo").innerHTML = "estamos probando nuestro primer evento en js";
});

document.getElementById('boton_color').addEventListener('click', function() {
    document.body.style.backgroundColor = "red";
});

document.getElementById('boton_default').addEventListener('click', function() {
    document.body.style.backgroundColor = "aqua";
});

document.getElementById('boton_ocultar').addEventListener('click', function() {
    document.getElementById('demo').style.display = 'none'
});

const collection = document.getElementsByClassName("prueba");
for (let i = 0; i < collection.length; i++) {
  collection[i].style.backgroundColor = "red";
}