// Escriba una función generarContraseña la cual reciba n como parámetro y esta cree
// una contraseña de n caracteres aleatorios. (Los caracteres pueden ser números,
// letras o signos).
const n = parseInt(prompt("Ingrese la longitud de la contraseña: "));

function crearContrasena(n){
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?';
    let contrasena = '';

    if(n < 1){
        console.log("Por favor ingrese un valor válido");
        contrasena = "No se ha podido crear una contrasena";
    }else{
        for(let i = 0; i < n; i++){
            const indexAleatorio = Math.floor(Math.random()*caracteres.length);
            contrasena += caracteres[indexAleatorio];
        }
    }
    return contrasena;
}


console.log("Contraseña generada: ", crearContrasena(n));