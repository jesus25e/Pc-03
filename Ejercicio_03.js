//Determina si una palabra o frase es un palíndromo
//Desarrolla una funcion que reciba una cadena y determine si es un palindromo.
//Debe ignorar los espacios y mayusculas. Puedes usar un bucle para comparar los caracteres desde el principio y el final, acercandote hacia el centro de la cadena.


const cadena = prompt('Ingrese la palabra');

function esPalindromo(cadena){
    const cadenaLimpia= cadena.replace(/[^a-z0-9]/gi, '').toLowerCase();

    //Bucle
    let inicio = 0;
    let fin = cadenaLimpia.length - 1;

    while(inicio < fin){
        if (cadenaLimpia[inicio] != cadenaLimpia[fin]){
            alert('false')
            return false;
        }
        inicio++;
        fin--;
    }
    alert('true')
    return true;
}

esPalindromo(cadena)
