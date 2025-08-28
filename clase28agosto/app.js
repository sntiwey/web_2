// comparacion de numeros cual es mayor, menor y si son iguales:
//IF´S

let num1 = parseInt(prompt("Ingresa el primer número"));
let num2 = parseInt(prompt("Ingresa el segundo número"));
let num3 = parseInt(prompt("Ingresa el tercer número"));

// Verificar si los tres son iguales
if (num1 === num2 && num2 === num3) {
    console.log("Los 3 números son iguales: " + num1);
} else {
    // Encontrar el número mayor
    let mayor = num1;
    if (num2 > mayor) mayor = num2;
    if (num3 > mayor) mayor = num3;
    console.log("El número mayor es: " + mayor);

    // Encontrar el número menor
    let menor = num1;
    if (num2 < menor) menor = num2;
    if (num3 < menor) menor = num3;
    console.log("El número menor es: " + menor);

    // Verificar si hay dos números iguales
    if (num1 === num2 || num1 === num3 || num2 === num3) {
        console.log("Al menos dos números son iguales");
    }
}
