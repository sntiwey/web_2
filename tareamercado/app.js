var productos = [
    { nombre: 'audifonos', precio: 1200 },
    { nombre: 'mouse gamer', precio: 850 },
    { nombre: 'teclado mecanico', precio: 1500 },
    { nombre: 'monitor', precio: 3200 }
];

var carrito = [];

function mostrarMenu() {
    var menu = "menu de tecnologia\nelige una opcion:\n";
    for (var i = 0; i < productos.length; i++) {
        menu += (i + 1) + ". comprar " + productos[i].nombre + " - $" + productos[i].precio + "\n";
    }
    menu += (productos.length + 1) + ". ver carrito y total\n";
    menu += (productos.length + 2) + ". quitar algo del carrito\n";
    menu += (productos.length + 3) + ". admin agregar producto nuevo\n";
    menu += (productos.length + 4) + ". salir\n";
    return menu;
}

function agregarAlCarrito(index) {
    var productoSeleccionado = productos[index];
    carrito.push(productoSeleccionado);
    console.log('se agrego "' + productoSeleccionado.nombre + '" al carrito');
}

function mostrarCarritoYTotal() {
    if (carrito.length === 0) {
        console.log("el carrito esta vacio");
    } else {
        var mensajeCarrito = "carrito de compras:\n";
        var total = 0;
        for (var i = 0; i < carrito.length; i++) {
            mensajeCarrito += (i + 1) + ". " + carrito[i].nombre + " - $" + carrito[i].precio + "\n";
            total += carrito[i].precio;
        }
        mensajeCarrito += "\ntotal: $" + total;
        console.log(mensajeCarrito);
    }
}

function eliminarDelCarrito() {
    if (carrito.length === 0) {
        console.log("no hay nada que borrar");
        return;
    }

    var menuEliminar = "elige el numero del producto pa borrar:\n";
    for (var i = 0; i < carrito.length; i++) {
        menuEliminar += (i + 1) + ". " + carrito[i].nombre + " - $" + carrito[i].precio + "\n";
    }

    var opcionEliminar = Number(prompt(menuEliminar));

    if (!isNaN(opcionEliminar) && opcionEliminar >= 1 && opcionEliminar <= carrito.length) {
        var productoEliminado = carrito.splice(opcionEliminar - 1, 1)[0];
        console.log('se borro "' + productoEliminado.nombre + '" del carrito');
    } else {
        console.log("opcion invalida");
    }
}

function agregarProductoNuevo() {
    var nombreNuevo = prompt("pon el nombre del nuevo gadget:");
    var precioNuevo = Number(prompt("cuanto cuesta:"));

    if (nombreNuevo && !isNaN(precioNuevo) && precioNuevo > 0) {
        productos.push({ nombre: nombreNuevo, precio: precioNuevo });
        console.log('se agrego "' + nombreNuevo + '" a la tienda');
    } else {
        console.log("datos mal puestos, no se agrego");
    }
}

var opcion;
do {
    opcion = prompt(mostrarMenu());
    opcion = Number(opcion);

    if (isNaN(opcion) || opcion < 1 || opcion > productos.length + 4) {
        console.log("opcion no valida");
    } else if (opcion >= 1 && opcion <= productos.length) {
        agregarAlCarrito(opcion - 1);
    } else if (opcion === productos.length + 1) {
        mostrarCarritoYTotal();
    } else if (opcion === productos.length + 2) {
        eliminarDelCarrito();
    } else if (opcion === productos.length + 3) {
        agregarProductoNuevo();
    }
} while (opcion !== productos.length + 4);

console.log("gracias por venir ala tiendita");
