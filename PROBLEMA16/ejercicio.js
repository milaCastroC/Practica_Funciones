// Escriba una función que se llame facturacion() La función tiene que recibir como
// parámetro el monto de un producto , y el medio de pago : C (tarjeta de crédito), E
// (efectivo) y D (tarjeta de débito). Si el monto del producto es menor a $200 no se
// aplicará ningún descuento. Si el monto a pagar es entre $200 y $400 se aplicará un
// descuento del 30% si el medio de pago es efectivo, 20% si se realiza con débito y
// 10% con tarjeta de crédito. Para montos mayores a $400, el descuento es del 40%
// sin importar el medio de pago La función deberá retornar el monto final a pagar.
let monto = parseFloat(prompt("Ingrese el monto: "));
let medioPago = prompt("Ingrese el medio de pago C (tarjeta de crédito), E(efectivo) y D (tarjeta de débito): ");

function facturacion(monto, medioPago){
    medioPago = medioPago.toUpperCase();
    let totalPago = monto;
    if(medioPago !== "C" && medioPago !== "E" && medioPago !== "D"){
        console.log("Ingrese un medio de pago válido");
        return null;
    }else{
        if(monto >= 200 && monto <= 400){
            if(medioPago === "E"){
                totalPago = monto - monto*0.3;
            }else if(medioPago === "D"){
                totalPago = monto - monto*0.2;
            }else if(medioPago === "C"){
                totalPago = monto - monto*0.1;
            }
        }else if(monto > 400){
            totalPago = monto - monto*0.4;
        }
    }
    return totalPago;
}

console.log("El total a pagar es: ", facturacion(monto, medioPago));

