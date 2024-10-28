// Escriba una función que tenga como parámetro un nombre y retorne la cadena “Hola Juan”, por ejemplo si el nombre pasado es Juan.

let nombre =  prompt("Ingrese su nombre: ");

const escribirSaludo = (nombre) => `Hola ${ nombre }`;

console.log(escribirSaludo(nombre));