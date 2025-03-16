// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Variables
let amigoSecreto= [];

function agregar_amigo() {
    let nombre = document.getElementById("amigo");
    let nombre_amigo = nombre.value;

    if (!nombre_amigo){
        const message = document.getElementById("message");
        message.textContent = "*Debes ingresar un Nombre";
        return;
    }else{
        message.style.display = "none";
        amigoSecreto.push(nombre_amigo);
        nombre.value = "";
        nombre.focus();
        mostrar_amigos();
    }    
}

function mostrar_amigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for(let i = 0; i < amigoSecreto.length; i++){
        let save = document.createElement("li");
        save.textContent = amigoSecreto[i];
        listaAmigos.appendChild(save);
    }
}

function sortear_amigos(){
    if(amigoSecreto.length === 0){
        const message = document.getElementById("div_mensage_sorteo");
        message.classList.toggle("hidden");
        const messageDescription = document.getElementById("message-description");
        messageDescription.textContent = "*No hay ningun amigo para Sortear";
        return;
    }
    let amigo_sorteado = amigoSecreto[Math.floor(Math.random() * amigoSecreto.length )];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML =`El amigo sorteado es: ${amigo_sorteado}`;

    let limpiarLista = document.getElementById("listaAmigos")
    limpiarLista.innerHTML = "";
}

function closeMessage() {
    const message = document.getElementById("div_mensage_sorteo");
    message.classList.toggle("hidden");
}
