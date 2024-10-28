// Escriba una función la cual reciba como parámetro una cadena y genere como retorno la misma cadena pero con todos su contenido en mayúscula.

let palabra = prompt("Ingrese una palabra: ");

const devolverMinuscula = (palabra) => palabra.toUpperCase();

console.log("La palabra en mayúscula es: ", devolverMinuscula(palabra));