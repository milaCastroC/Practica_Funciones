// Escriba una función que reciba un número n como parámetro y genere su factorial.

let n = parseInt(prompt("Ingrese el número al que desea sacar factorial: "));

function factorial(n){
    let fact = 1;

    if(n < 0){
        return("El factorial para número negativos no está definido");
        
    }else if(n === 0 || n === 1){
       return fact;
    }else{
        for(let i = 2; i <= n; i++){
            fact *= i;
        }
        return fact;
    }
}

console.log(`El factorial del número ${ n } es: `, factorial(n));