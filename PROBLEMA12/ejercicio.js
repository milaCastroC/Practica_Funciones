//Escriba una función la cual reciba 5 notas de un estudiante y genere un mensaje informando si el estudiante aprobó o no la materia, para que la materia se de como aprobada el promedio del estudiante debe ser mayor o igual a 3,0.

let nota1 = parseFloat(prompt("Ingrese la nota 1:"));
let nota2 = parseFloat(prompt("Ingrese la nota 2:"));
let nota3 = parseFloat(prompt("Ingrese la nota 3:"));
let nota4 = parseFloat(prompt("Ingrese la nota 4:"));
let nota5 = parseFloat(prompt("Ingrese la nota 5:"));

function verificarAprobacion(nota1, nota2, nota3, nota4, nota5){
    const promedio = (nota1 + nota2 + nota3 + nota4 + nota5)/5;

    if(promedio >= 3.0){
        return `El estudiante ha aprobado con un promedio de ${ promedio }`;
    }else{
        return `El estudiante ha desaprobado con un promedio de ${ promedio }`;
    }
}

console.log(verificarAprobacion(nota1, nota2, nota3, nota4, nota5));