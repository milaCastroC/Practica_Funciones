// Escriba un programa que calcule el área y el perímetro de un rectángulo. Usa dos
// funciones:
// ● calcularArea(largo, ancho): calcula el área del rectángulo.
// ● calcularPerimetro(largo, ancho): calcula el perímetro.

let largo = parseFloat(prompt("Ingrese el largo: "));
let ancho = parseFloat(prompt("Ingrese el ancho: "));

const calcularArea = (largo, ancho) => largo * ancho;

const calcularPerimetro = (largo, ancho) => 2 * (largo + ancho)

console.log(`El área del rectángulo es: ${ calcularArea(largo, ancho)}`);
console.log(`El perímetro del rectángulo es: ${ calcularPerimetro(largo, ancho)}`);