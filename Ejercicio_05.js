//Calcula la media, mediana y moda de una lista de numeros
//Escribe una función en JS que calcule la media, mediana y moda de un array de numeros. La funcion debe devolver un objeto con los tres valores.

const valores = prompt('Ingrese los numeros mediante comas');


function media(valores){
    const numeros = valores.split(',').map(Number); //Convierte la cadena en un array de numeros
    let suma = 0;

    for (let i = 0; i<numeros.length; i++){
        suma += numeros[i];
    }

    const media = suma/numeros.length;
    alert(`La media es ${media}`);
}

function mediana(valores){
    const numeros = valores.split(',').map(Number); //Convierte la cadena en un array de numeros
    numeros.sort(function(a,b){
        return a-b;
    });
    
    const mitad = Math.floor((numeros.length/2));
    if(numeros.length % 2 !==0){
        alert(`La mediana es ${numeros[mitad]}`)
    } else {
        alert(`La mediana es ${(numeros[mitad-1] + numeros[mitad])/2}`)
    };
}

function moda(valores){
    const numeros = valores.split(',').map(Number);
    contador = {}; //almacenamos en un diccionario clave:valor
    let maxFrecuencia =0;
    let modas = [];

    numeros.forEach(function(item){
        if (contador[item]){
            contador[item]++;
        } else{
            contador[item] = 1;
        }
        if (contador[item] > maxFrecuencia){
            maxFrecuencia = contador[item];
        }
    });

    //Buscamos el o los numeros que tienen la mayor frecuencia
    for(let item in contador){
        if(contador[item] === maxFrecuencia){
            modas.push(Number(item));//Si la frecuencia coincide con la mayor frecuencia, lo añadimos a las modas
        }
    }

    if (modas.length === Object.keys(contador).length) {
        alert('No hay moda');
    } else {
        alert(`La(s) moda(s) es/son: ${modas.join(', ')}`);
    }
};

media(valores);
mediana(valores);
moda(valores);