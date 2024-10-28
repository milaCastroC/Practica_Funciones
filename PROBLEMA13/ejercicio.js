//Escriba una función que reciba un número entero y dicha función pueda determinar si el número enviado es positivo o negativo.

const numero = parseInt(prompt("Ingrese un número: "));

function validarNumero(numero){
    if(numero > 0){
        return "es positivo";
    }else if(numero < 0){
        return "es negativo";
    }else{
        return " es cero";
    }
}

console.log(`El número ${ numero } `, validarNumero(numero));