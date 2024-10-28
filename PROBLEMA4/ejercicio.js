//Escriba una función que muestre los números de 1 a n, teniendo n como parámetro.

function numeros(n){
   for(let contador = 1; contador <= n; contador++){
    console.log(contador);
   }
}

let n = parseInt(prompt("Ingrese número al que desea llegar: "));

numeros(n);