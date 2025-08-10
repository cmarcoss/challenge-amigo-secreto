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
    mostrarLista()
}
//limpiar el campo/caja
function limpiarCaja()
{
    document.querySelector('#amigo').value = '';
}
//mostrar lista de amigos
function mostrarLista() {
    // elemento UL donde mostraremos la lista
    let lista = document.getElementById("listaAmigos");

    // limpiar la lista para evitar duplicados
    lista.innerHTML = "";

    //Recorrer el array amigos 
    for (let i = 0; i < amigos.length; i++) {
        // Crear un nuevo elemento <li> por cada amigo
        let li = document.createElement("li");
        li.textContent = amigos[i]; // Asignar el nombre como texto

        //Agregar el <li> dentro del <ul>
        lista.appendChild(li);
    }
}