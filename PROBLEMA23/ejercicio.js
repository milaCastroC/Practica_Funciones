// Escriba un programa que genere una contraseña segura a partir de una palabra
// base y una serie de reglas. Usa dos funciones:
// ● generarContraseña(palabraBase): genera una contraseña agregando números y
// caracteres especiales.
// ● imprimirContraseña(contraseña): muestra la contraseña generada.

let palabraBase = prompt("Ingrese la palabra base para generar la contraseña: ");

function generarContrasena(palabraBase){
    const caracteresEspeciales = "!@#$%^&*()_+[]{}|;:',.<>?";
    const numeros = "0123456789"; 
    let contrasena = "";

    contrasena += palabraBase;

    const numeroAleatorio = numeros[parseInt(Math.random()*numeros.length)];
    contrasena += numeroAleatorio;

    const caracterAleatorio = caracteresEspeciales[parseInt(Math.random()*caracteresEspeciales.length)];
    contrasena += caracterAleatorio;

    return contrasena;
}

function imprimirContrasena(contrasena){
    console.log(`La contraseña generada es: ${ contrasena }`);
}

let contrasenaGenerada = generarContrasena(palabraBase);
imprimirContrasena(contrasenaGenerada);