//Escriba una función que al llamarla retorne un número entero aleatorio entre 1 y 20.

function numeroAleatorio() {
    return Math.floor(Math.random() * 20) + 1;
}

console.log(numeroAleatorio());