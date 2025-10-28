let inventario = [];
function mostrarMenu() {
    return parseInt(prompt(
        `Opciones disponibles:
        1.- Agregar producto
        2.- Mostrar todos los productos
        3.- Buscar produsctor por nombre
        4.- Salir
        Elige una opcion: 
        `));
}

function agregarProducto() {
    let nombre = prompt("Ingrese el nombre del producto: ");
    let precio = parseFloat(prompt("Ingrese el precio del producto: "));
    let cantidad = parseInt(prompt("Ingrese el cantidad del producto: "));
    

    if (cantidad > 0 && precio > 0) {
        let producto = {
            nombre: nombre,
            precio: precio,
            cantidad: cantidad
        };
        inventario.push(producto);
        alert("Producto agregado con exito");
    } else {
            alert("Cantidad y precio deben ser numero positivo...")
    }
}

function mostrarProductos() {
    if (inventario.length === 0) {
        alert("No hay productos en el inventario");
    } else {
        let mensaje = "Productos en el inventario: \n";
        for (let i = 0; i < inventario.length; i++) {
            mensaje += `Producto ${i+1}\n ` +
                `Nombre: ${inventario[i].nombre}\n` +
                `Cantidad: ${inventario[i].cantidad}\n` +
                `Precio: ${inventario[i].precio}\n` +
                `-------------------------\n`;
        }
        alert(mensaje);
    }
}

function buscarProducto(){
    let nombre = prompt("Ingrese el nombre del producto a buscar: ");
    let producto = inventario.find(producto => producto.nombre === nombre + producto.precio + producto.cantidad);   
    if(producto){
        alert(`Producto encontrado: ${producto.nombre}`);
    }else{
        alert(`Producto no encontrado: ${nombre}`);
    }               
}

function manejoProgramaInventario(){
    let continuar = true;
    while(continuar){
        let opcion = mostrarMenu();
        switch(opcion){
            case 1:
                agregarProducto();
                break;
            case 2:
                mostrarProductos();
                break;
            case 3:
                buscarProducto();
                break;
            case 4:
                continuar = false;
                break;
            default:
                alert("Opcion invalida");
        }
    }
}

//inciar programa
manejoProgramaInventario();
