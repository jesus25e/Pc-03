/*Escribe una función en JavaScript que determine si un número entero positivo
es primo. Un número es primo si solo es divisible entre 1 y sí mismo, y mayor
que 1. La función debe recibir un número y devolver true si es primo y false en
caso contrario. Asegúrate de optimizar el código para evitar iteraciones
innecesarias.*/

function esPrimo(n){
    for(let i = 2 ; i < n ; i++){
        if(n % i == 0) return false;
    }
    return true;
}

console.log(Primo(5))