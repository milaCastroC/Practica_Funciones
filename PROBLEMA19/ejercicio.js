// Escriba un programa que convierta entre grados Celsius y Fahrenheit utilizando dos
// funciones:
// ● celsiusToFahrenheit(celsius): convierte grados Celsius a Fahrenheit.
// ● fahrenheitToCelsius(fahrenheit): convierte grados Fahrenheit a Celsius.

let celsius = parseFloat(prompt("Ingrese la temperatura en grados Celsius: "));
let fahrenheit = parseFloat(prompt("Ingrese la temperatura en grados Fahrenheit: "));

const celsiusToFahrenheit = (celsius) => (celsius * 9/5)+32;

const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * 5/9;

console.log(`${ celsius }°C es igual a ${ celsiusToFahrenheit(celsius)}°F`);
console.log(`${ fahrenheit }°F es igual a ${ fahrenheitToCelsius(fahrenheit)}°C`);