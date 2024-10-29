// Escriba un programa que calcule si un estudiante aprueba o reprueba con base en
// tres notas. Usa tres funciones:
// ● calcularPromedio(notas): calcula el promedio de las tres notas.
// ● esAprobado(promedio): determina si el estudiante aprueba o no (promedio >= 6).
// ● mostrarResultado(aprobado): imprime si el estudiante aprueba o reprueba.

let nota1 = parseFloat(prompt("Ingrese la nota 1:"));
let nota2 = parseFloat(prompt("Ingrese la nota 2:"));
let nota3 = parseFloat(prompt("Ingrese la nota 3:"));
let notas = [nota1, nota2, nota3];

function calcularPromedio(notas){
    let sumatoria = 0;
    for(let i = 0; i < notas.length; i++){
        sumatoria = sumatoria + notas[i];
    }
    return sumatoria / 3; 
}

const esAprobado = (promedio) => promedio >= 6;

function mostrarResultado(aprobado){
    if(aprobado){
        console.log("El estudiante aprueba");
    }else{
        console.log("El estudiante desaprueba");
    }
}

let promedio = calcularPromedio(notas);
let aprobado = esAprobado(promedio);

mostrarResultado(aprobado);

