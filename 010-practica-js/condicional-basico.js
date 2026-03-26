//let num = 7;
//if (num > 7){
//console.log("El numero es mayor que 7");
//} else if (num == 7){
//console.log("El numero es igual a 7");
//}else{
//console.log("El numero es menor de 7");
//}

//let age = 34;

//if (age >= 30 && age <= 40){
//console.log("La persona tiene entre 30 y 40 años (tiene " + age + " años) ");
//}

//let count = 0;
//console.log(count);

//count++;
//console.log(count);

//++count;
//console.log(count);
const MAX_LOOP = 100;
let contadorIteraciones = 0;

for (let iter = 1; iter <= MAX_LOOP; iter++) {
    if (iter % 7 === 0) {
        console.log("Iteracion numero: " + iter);

        contadorIteraciones = contadorIteraciones + 1;
    
    }
}
console.log("numero total de iteraciones = " + contadorIteraciones);

