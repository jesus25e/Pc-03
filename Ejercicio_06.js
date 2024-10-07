/*
Simulación de lanzamientos de dados y cálculo de probabilidades
Escribe una función que simule el lanzamiento de dos dados y calcule la probabilidad de obtener cada suma posible entre 2 y 12.
*/

function simularLanzamientosDados(numLanzamientos) {

    const sumasCount = {};

    
    for (let i = 2; i <= 12; i++) {
        sumasCount[i] = 0;
    }

    for (let i = 0; i < numLanzamientos; i++) {
        const dado1 = Math.floor(Math.random() * 6) + 1; 
        const dado2 = Math.floor(Math.random() * 6) + 1; 
        const suma = dado1 + dado2;
        sumasCount[suma]++;
    }

   
    const probabilidades = {};
    for (const suma in sumasCount) {
        probabilidades[suma] = sumasCount[suma] / numLanzamientos;
    }

    return probabilidades;
}


const numLanzamientos = 100000;
const probabilidades = simularLanzamientosDados(numLanzamientos);

for (const suma in probabilidades) {
    console.log(`Suma ${suma}: Probabilidad ${probabilidades[suma].toFixed(4)}`);
}
