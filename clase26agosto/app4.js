// -- prorgrama que haga suma, resta, multiplicacion, division y modeulole


let numero1 = parseFloat(prompt(" Ingresa un numero: "));
let numero2 = parseFloat(prompt(" Ingresa un numero: "));
console.log(typeof numero1)

let resultado = (numero1 + numero2);
let resultado1 = (numero1 - numero2);
let resultado2 = (numero1 * numero2);
let resultado3 = (numero1 / numero2);
let resultado4 = (numero1 % numero2);

console.log("suma ",resultado, "resta ", resultado1, "multiplicacion ", resultado2, "division ",resultado3, "modulo ",resultado4);