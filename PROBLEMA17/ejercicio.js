// Escriba una función la cual reciba como parámetro 2 números enteros y 1 cadena,
// La idea es que los números recibidos se puedan operar según la operación que
// hallamos recibido en la cadena, ejemplo miFuncion(2, 5, ”suma”).

let num1 = parseInt(prompt("Ingrese el primer número: "));
let num2 = parseInt(prompt("Ingrese el segundo número: "));
let operacion = prompt("Ingrese la operación a realizar: ");

function operaciones(num1, num2, operacion){
    operacion = operacion.toLowerCase();
    let resultado;

    if(operacion === "suma"){
        resultado = num1 + num2;
    }else if(operacion === "resta"){
        resultado = num1 - num2;
    }else if(operacion == "multiplicacion"){
        resultado = num1 * num2;
    }else if(operacion === "division"){
        if(num2 === 0){
            return "No se puede hacer división por 0";
        }else{
            resultado = num1 / num2;
        }
    }else{
        return "Operacion no válida. Por favor ingrese suma, resta, multiplicación o división";
    }
    return resultado;
}

console.log(`El resultado de la operación: ${ operacion } es: `, operaciones(num1, num2, operacion));