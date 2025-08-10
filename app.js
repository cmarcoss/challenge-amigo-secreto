//declaracion de array para almacenar los nombres
let amigos=[];

//funcion agregar amigos
function agregarAmigo()
{
    let nombre = document.getElementById("amigo").value.trim();
    console.log(nombre);
    if (nombre === "") 
    {
        alert("Por favor incerte un nombre.");
        return;
    } else (amigos.push(nombre))
    console.log(amigos)
    limpiarCaja()
}
//limpiar el campo/caja
function limpiarCaja()
{
    document.querySelector('#amigo').value = '';  
}
