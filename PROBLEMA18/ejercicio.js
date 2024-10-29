// Escriba una función que tenga una cadena de ADN como parámetro y retorne un
// string con el número de bases en ella, por ejemplo, si la cadena es “AACAGT”
// entonces debe retornar “Cantidad de A: 3, Cantidad de C: 1, Cantidad de G: 1,
// Cantidad de T: 1”

let cadenaADN = prompt("Ingrese la cadena de ADN: ");

function contarBasesADN(cadenaADN){
    let cantidadA = 0;
    let cantidadC = 0;
    let cantidadG = 0;
    let cantidadT = 0;

    cadenaADN = cadenaADN.toUpperCase();

    for(let i = 0; i < cadenaADN.length; i++){
        base = cadenaADN[i];
        if(base === "A"){
            cantidadA ++;
        }else if(base === "C"){
            cantidadC ++;
        }else if(base === "G"){
            cantidadG ++;
        }else if(base === "T"){
            cantidadT ++;
        }
    }
    return `Cantidad de A: ${ cantidadA }, Cantidad de C: ${ cantidadC }, Cantidad de G: ${ cantidadG }, Cantidad de T: ${ cantidadT}`
}

console.log(contarBasesADN(cadenaADN));