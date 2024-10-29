//Escriba una función la cual reciba una cadena como parámetro y ésta retorne la misma cadena pero sin sus vocales.

let cadena = prompt("Ingrese una palabra: ");

function quitarVocales(cadena){
    const vocales = '"a", "e", "i", "o", "u", "A", "E", "I", "O", "U"';
    let resultado = '';

    for(let i = 0; i < cadena.length; i++){
        if(!vocales.includes(cadena[i])){
            resultado += cadena[i];
        }
    }
    return resultado;
}

console.log(`La palabra ${ cadena } sin vocales es: `, quitarVocales(cadena));