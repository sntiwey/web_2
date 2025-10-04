let tareas = []; //iniciamos un arregol vacio para almacenar las tareas

//crear menu con todo lo que queramos


//funcion para crear el menu de opciones
function mostrarMenu(){{
    return parseInt(prompt(`
        Opciones disponibles:
        1.- Agregar tarea
        2.- Ver todas las tareas
        3.- Marcar tarea como completada
        4.- Eliminar tarea
        5.- Salir
        "Elegir una ocpcion"
        `));
    }
}

function agregarTarea(){
    let nombre = prompt("Ingrese la tarea");
    if(nombre){
        //agregar tarea
        let tarea = {
            nombre: nombre,
            completado: false
        };
        tareas.push(tarea);
        alert("Tarea agregada exitosamente");
    }else{
        alert("Debes ingresar una tarea ya que no puedes dejarla en blanco");
    }
}

function verTodasLasTareas(){
    if(tareas.length === 0){
        console.log("No hay tareas en la lista");
    }else{
        let mensaje ="Lista de tareas: \n";
        tareas.forEach((tarea, index) => {
            mensaje += `${index+1}.- ${tarea.nombre} [${tarea.completado ? "Completada" : "Pendiente"}]\n`;
    });
    alert(mensaje);
    }
}

function marcarTareaComoCompletada() {
    let numero = parseInt(prompt("Número de la tarea a completar:"), 10);
    if (numero >= 1 && numero <= tareas.length) {
        tareas[numero - 1].completado = true;
        alert(`La tarea número ${numero} ha sido marcada como completada.`);
    } else {
        alert("Número inválido.");
    }
}

function manejarFlujoPrograma(){
    let continuar = true;
    while(continuar){    
        let opcion = mostrarMenu();
        switch(opcion){
            case 1:
                agregarTarea();
                break;
            case 2:
                verTodasLasTareas();
                break;
            case 3:
                marcarTareaComoCompletada();
                break;
            case 4:
                eliminarTarea();
                break;
            case 5:
                continuar = false;
                break;
            default:
                alert("Opción inválida");
                break;
        }
    }
    alert("Programa finalizado");   
}

//iniciar programa
manejarFlujoPrograma();

function eliminarTarea() {
    let numero = parseInt(prompt("Número de la tarea a eliminar:"), 10);
    if (numero >= 1 && numero <= tareas.length) {
        let tareaEliminada = tareas.splice(numero - 1, 1); // elimina la tarea
        alert(`La tarea "${tareaEliminada[0].nombre}" ha sido eliminada.`);
    } else {
        alert("Número inválido.");
    }
}



