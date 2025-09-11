//agregar una fruta al carrito emprimir la lista de compras
//promp que salga para agregar una nueva con promp

let frutas = []; 
let continuar = true;

while (continuar) {
  let fruta = prompt("¿Qué fruta quieres agregar al carrito?");
  if (fruta) {
    frutas.push(fruta);
  }

  continuar = confirm("¿Quieres agregar otra fruta?");
}

frutas.shift();

for (let fruta of frutas) {
  console.log(fruta);
}
