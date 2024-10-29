//Escriba una función la cual permita o no la entrada a un parque de atracciones,
// dicha función recibe la edad, estatura y permiso parental como parámetros. Para
// permitir el acceso el usuario deberá de ser mayor de edad y medir más de 150 cm,
// en caso de ser menor de edad debe contar con un permiso parental para que sea
// concedido el acceso.

const edad = parseInt(prompt("Ingrese la edad: "));
const estatura = parseInt(prompt("Ingrese la estatura en cm: "));

function accederParque(edad, estatura) {
    if (edad < 18) {
        const permisoParental = prompt("El menor tiene permiso parental (S/N): ").toUpperCase();
        if (permisoParental !== "S" && permisoParental !== "N") {
            console.log("Por favor, ingrese un valor válido (S o N)");
        }else if(permisoParental === "S" && estatura > 150){
            console.log("Acceso concedido");
        }else {
            console.log("Acceso denegado");
        }
    }else {
        if (estatura > 150) {
            console.log("Acceso concedido");
        } else {
            console.log("Acceso denegado");
        }
    }
}

accederParque(edad, estatura);