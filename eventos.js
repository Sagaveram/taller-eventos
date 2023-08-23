const divs=document.getElementById("div1");
const boton=document.getElementById("boton");
function saludoDiv(){
    alert("Hola! Soy el div");
}

function saludoBoton(event){
    event.stopPropagation();
    alert("Hola!");

}
divs.addEventListener("click", saludoDiv);

boton.addEventListener("click",saludoBoton);