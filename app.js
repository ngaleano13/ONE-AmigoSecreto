let mostrarLista = document.getElementById('listaAmigos');
let mostrarResultado = document.getElementById('resultado');
let listaDeNombres = [];
let textoNombre;


function agregarAmigo() {
    textoNombre = document.getElementById('amigo');
    mostrarResultado.innerHTML = '';
    if (textoNombre.value.trim() !== '') {
        listaDeNombres.push(textoNombre.value.trim());
        textoNombre.value = '';
        mostrarLista.innerHTML = 'Nombres: ' + listaDeNombres;
    } else {
        alert("El campo esta vacio");
    }
}

function sortearAmigo() {
    if (listaDeNombres.length === 0) {
        alert("La lista esta vacia");
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * listaDeNombres.length);
    let amigoElegido = listaDeNombres[indiceAleatorio];

    mostrarLista.innerHTML = ' ';
    mostrarResultado.innerHTML = 'El amigo sorteado es: ' + amigoElegido;
    listaDeNombres = [];
}