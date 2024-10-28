//Escriba una función que reciba el lado de un cubo y retorne su volumen.
function volumenCubo(lado){
    let volumen = lado ** 3;
    return volumen;
}

let lado = parseFloat(prompt("Ingrese el lado del cubo: "));
console.log("El volumen del cubo es: ",volumenCubo(lado));

console.log("------------------------");

const volCubo = (lado) => lado**3;
console.log("El volumen del cubo es: ",volCubo(lado));

