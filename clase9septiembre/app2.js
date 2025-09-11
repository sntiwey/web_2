
const frutas = ["manzana"];
frutas.push("banana"); //este  lo agrega al final del array
frutas.unshift("kiwi"); //esto lo agrega al array al principio
frutas.push("melon");
frutas.unshift("papaya");
frutas.push("coco");
console.log(frutas); //este esta haciendo un array nuevo y no modifica el anterior, solo lo suma


//ARRAY COMPELTO
for (let fruta of frutas){ //imprime el array en orden del array
    console.log(fruta);
}

console.log("----------------------------");

//eliminar algo al final
frutas.pop(); //elimina el ultimo elemento
for (let fruta of frutas){ //imprime el array en orden del array
    console.log(fruta);
}

console.log("----------------------------");

//eliminar algo al principio
frutas.shift(); //elimina el primer elemento
for (let fruta of frutas){ //imprime el array en orden del array
    console.log(fruta);
}   


// const puerto = 3306;
// puerto = 3307;
// console.log(puerto); //esto es porque ya hay una variable y nos da el error


