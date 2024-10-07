/*
Crea una función que genere los primeros n números 
de la sucesión de Fibonacci. Debes evitar la 
recursividad para mejorar el rendimiento cuando n e
s grande.
*/

function generarFibonacci(n) {
    if (n <= 0) return []; // Si n es 0 o negativo, devolver una lista vacía
    if (n === 1) return [0]; // Si n es 1, devolver solo el primer número de Fibonacci
  
    let fibonacci = [0, 1]; // Inicializar la serie con los dos primeros números
  
    // Generar los siguientes números de la serie
    for (let i = 2; i < n; i++) {
      fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    }
  
    return fibonacci;
  }
  
  // Ejemplo de uso
  const cantidad = 10;
  console.log(generarFibonacci(cantidad)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
  