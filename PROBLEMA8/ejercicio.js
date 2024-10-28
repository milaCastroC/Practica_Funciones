// Escriba una función llamada obtenerPrimeraLetra() que reciba un nombre y devuelva la primera letra del nombre.

let nombre = prompt("Ingrese el nombre: ");

function obtenerPrimeraLetra(nombre){
    return nombre[0];
}

console.log(`La primer letra del nombre ${ nombre } es: `, obtenerPrimeraLetra(nombre));