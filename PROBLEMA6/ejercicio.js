//Escriba una función con el nombre de esVocal() que tome un carácter , devuelva True si es vocal (no importa si es mayúscula o minúscula), y devuelva False en caso contrario.
let caracter = prompt("Ingrese un caracter: ");

function esVocal(caracter){
   if(caracter == "a" || caracter == "e" || caracter == "i" || caracter == "o" || caracter == "u"){
      return true;
   }else if(caracter == "A" || caracter == "E" || caracter == "I" || caracter == "O" || caracter == "U"){
      return true;
   }else{
      return false;
   }
}

esVocal(caracter);