// Escriba un programa que verifique si un número es primo utilizando dos funciones:
// ● esPrimo(numero): determina si un número es primo.
// ● imprimirResultado(numero): imprime si el número es primo o no, llamando a la
// función esPrimo.

let numero = parseInt(prompt("Ingrese un número: "));

function esPrimo(numero){
    if(numero <= 1 || numero === 0 || numero === 1 || numero === 4){
        return false;
    }

    for(let i = 2; i < numero / 2; i++){
        if(numero % i === 0){
            return false;
        }
    }
    return true;
}

function imprimirResultado(numero){
    if(esPrimo(numero)){
        console.log(`El número ${ numero } es primo`);
    }else{
        console.log(`El número ${ numero } no es primo`);
    }
}

imprimirResultado(numero);