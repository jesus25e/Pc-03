/*
Escribe una función en JavaScript que calcule la media, mediana y 
moda de un array de números. La función debe devolver un objeto con los tres valores.
*/

function calcularEstadisticas(numeros) {
    if (numeros.length === 0) return null;
  
    const suma = numeros.reduce((acum, num) => acum + num, 0);
    const media = suma / numeros.length;
  
    const numerosOrdenados = [...numeros].sort((a, b) => a - b);
    const mitad = Math.floor(numerosOrdenados.length / 2);
    let mediana;
    
    if (numerosOrdenados.length % 2 === 0) {
      mediana = (numerosOrdenados[mitad - 1] + numerosOrdenados[mitad]) / 2;
    } else {
      mediana = numerosOrdenados[mitad];
    }
  
    const frecuencias = {};
    numeros.forEach(num => {
      frecuencias[num] = (frecuencias[num] || 0) + 1;
    });
  
    let maxFrecuencia = 0;
    let moda = [];
  
    for (let num in frecuencias) {
      if (frecuencias[num] > maxFrecuencia) {
        maxFrecuencia = frecuencias[num];
        moda = [Number(num)];
      } else if (frecuencias[num] === maxFrecuencia) {
        moda.push(Number(num));
      }
    }
  
    if (moda.length === numeros.length) moda = [];
  
    return {
      media,
      mediana,
      moda
    };
  }
  
  // Ejemplo de uso
  const numeros = [1, 2, 2, 3, 4, 5, 5, 5, 6];
  const estadisticas = calcularEstadisticas(numeros);
  console.log(estadisticas); 
  // { media: 3.6666666666666665, mediana: 4, moda: [5] }
  