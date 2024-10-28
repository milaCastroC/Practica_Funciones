//Escriba una función que tenga cómo parámetros la base y altura de un rectángulo y retorne su área

const areaRectangulo = (base, altura) =>{
    let area = base * altura;
    return area;
}

let base = parseFloat(prompt("Ingrese la base del rectángulo: "));
let altura = parseFloat(prompt("Ingrese la altura del rectángulo: "));


console.log("El área del rectángulo es: ", areaRectangulo(base, altura));