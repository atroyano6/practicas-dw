//Crear un array llamado estudiantes que contenga varios objetos de estudiantes.
//Crear una función agregarEstudiante(nombre, edad, notas (dentro de esto un array de 3 notas)) que añada un nuevo estudiante al array.
//Crear una función calcularPromedio(estudiante) que devuelva el promedio de sus notas.

let estudiantes = [];

function agregarEstudiante(nombre, edad, notas) {
  let estudiante = {
    nombre: nombre,
    edad: edad,
    notas: notas
  };

  estudiantes.push(estudiante);
}

function calcularPromedio(estudiante) {
  let suma = estudiante.notas.reduce((acc, nota) => acc + nota, 0);
  return suma / estudiante.notas.length;
}

console.log(estudiantes); 

agregarEstudiante("Juan", 20, [85, 90, 78]);
agregarEstudiante("María", 22, [92, 88, 95]);
console.log(estudiantes); 
let promedioJuan = calcularPromedio(estudiantes[0]);
let promedioMaria = calcularPromedio(estudiantes[1]);
console.log(`El promedio de Juan es: ${promedioJuan}`);
console.log(`El promedio de María es: ${promedioMaria}`);

