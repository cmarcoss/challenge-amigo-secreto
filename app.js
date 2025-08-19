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
function sortearAmigo() 
{
    // Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }
    // Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    // Obtener el nombre sorteado
    let amigoSorteado = amigos[indiceAleatorio];
    // Mostrar el resultado
    document.getElementById("resultado").innerHTML = "El amigo sorteado es: <strong>" + amigoSorteado + "</strong>";
    
}