const MAX_LOOP = 100;
let contadorIteraciones = 0;

for (let iter = 1; iter <= MAX_LOOP; iter++) {
    if (iter % 7 === 0) {
        console.log("Iteracion numero: " + iter);

        contadorIteraciones = contadorIteraciones + 1;
    
    }
}
console.log("numero total de iteraciones = " + contadorIteraciones);