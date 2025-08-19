//declaracion de array para almacenar los nombres
let amigos=[];
let amigosSorteados = []

//funcion agregar amigos
function agregarAmigo()
{
    let nombre = document.getElementById("amigo").value.trim();
    console.log(nombre);
    if (nombre === "") 
    {
        alert("Por favor incerte un nombre.");
        return;
    } else if (amigos.includes(nombre)) {
        alert("Ese nombre ya fue agregado.");
        limpiarCaja();
        return;
    }
    amigos.push(nombre);
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

        // Si el amigo ya fue sorteado, mostrar tachado
        if (amigosSorteados.includes(amigos[i])) {
            li.innerHTML = `<s>${amigos[i]}</s>`;
        } else {
            li.textContent = amigos[i];
        }

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

    // Filtrar amigos que no han sido sorteados
    let amigosNoSorteados = amigos.filter(amigo => !amigosSorteados.includes(amigo));

    if (amigosNoSorteados.length === 0) {
        alert("Todos los amigos ya han sido sorteados.");
        return;
    }

    // Generar un índice aleatorio entre los no sorteados
    let indiceAleatorio = Math.floor(Math.random() * amigosNoSorteados.length);
    let amigoSorteado = amigosNoSorteados[indiceAleatorio];

    // Agregar el amigo sorteado a la lista de sorteados
    amigosSorteados.push(amigoSorteado);

    // Mostrar el resultado
    document.getElementById("resultado").innerHTML = "El amigo sorteado es: <strong>" + amigoSorteado + "</strong>";

    mostrarLista(); // Actualizar la lista para tachar el nombre
}