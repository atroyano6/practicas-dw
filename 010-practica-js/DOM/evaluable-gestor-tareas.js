// Array donde guardamos las tareas
let tareas = [];

// Función obtener el id máximo
function getMaxId() {
    if (tareas.length === 0) return 0;

    let max = tareas[0].id;
    for (let tarea of tareas) {
        if (tarea.id > max) {
            max = tarea.id;
        }
    }
    return max;
}

// Crear una tarea

function createTask(title, priority) {

    // Validar prioridad

    if (priority < 1 || priority > 5) {
        console.log("La prioridad debe estar entre 1 y 5");
        return;
    }

    let nuevaTarea = {
        id: getMaxId() + 1, 
        title: title,
        priority: priority,
        done: false
    };

    tareas.push(nuevaTarea);
}

// Mostrar tareas

function showTasks(priority) {
    if (priority === undefined) {
        console.log("Todas las tareas:");
        console.log(tareas);
    } else {
        if (priority < 1 || priority > 5) {
            console.log("Prioridad inválida");
            return;
        }

        let filtradas = tareas.filter(t => t.priority === priority);
        console.log(`Tareas con prioridad ${priority}:`);
        console.log(filtradas);
    }
}

// --------------------
// PRUEBAS
// --------------------

createTask("Estudiar JavaScript", 4);
createTask("Hacer ejercicio", 2);
createTask("Leer un libro", 4);

showTasks();      // Todas
showTasks(4);     // Solo prioridad 4