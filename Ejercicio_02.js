//Invierte una cadena sin usar reverse()
//Debes iterar sobre la cadena de caracterres manualmente para construir una nueva en orden inverso

const palabra = prompt("Ingrese una palabra")

function cadena(palabra) {
    let palabraInvertida = "";

    for (let i = palabra.length-1;i>=0; i--){
        palabraInvertida = palabraInvertida + palabra[i];
    }
    alert(palabraInvertida);
    return palabraInvertida;
}

cadena(palabra)
