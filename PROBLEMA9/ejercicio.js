//Escriba una función la cual reciba una cadena como parámetro y retorne la cantidad de vocales que contiene la cadena.
let cadena = prompt("Ingrese una cadena de texto: ");

function cantidadVocales(cadena){
    let contador = 0;
    for(let i = 0; i <= cadena.length; i++){
        let letra = cadena[i];
        if(letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u"){
            contador += 1;
         }else if(letra == "A" || letra == "E" || letra == "I" || letra == "O" || letra == "U"){
            contador += 1;
         }
    }
    return contador;
}

console.log(`La palabra ${ cadena } tiene: `, cantidadVocales(cadena), "vocales");


