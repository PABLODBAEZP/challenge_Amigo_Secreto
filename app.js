// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];
let nombreAmigo = document.getElementById("amigo");
function agregarAmigo(){
    let amigo = nombreAmigo.value;
    if (amigo === "") {
        alert("Por favor, ingresa el nombre de un amigo.");}
        else{
        listaAmigos.push(amigo);
        let li = document.createElement("li");
        li.textContent = amigo;
        document.getElementById("listaAmigos").appendChild(li);
        nombreAmigo.value = "";

        }
        nombreAmigo.focus();
    }
function sortearAmigo() {
    if (listaAmigos.length < 2) {
        alert("Por favor, ingresa al menos 2 amigos.");        
    }
    else {
    let amigoSorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
    let li = document.createElement("li");
    li.textContent = `El ganador es: ${amigoSorteado}`;
    listaAmigos = [];
    document.getElementById("listaAmigos").innerHTML = '';
    document.getElementById("resultado").appendChild(li);
    }
}