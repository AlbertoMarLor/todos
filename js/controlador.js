const filterByPriority = (pList, pPriority) => pList.filter(task => task.priority.includes(pPriority));

function searchByName(pList, pWord) {
    return pList.filter(task => task.title.toLowerCase().includes(pWord.toLowerCase()));
}

function removeTask(pList, pId) {
    
    let posicion = pList.findIndex(task => task.idTask === pId);
    if (posicion !== -1) {
        pList.splice(posicion, 1);
        return { status: true, msg: 'Empleado borrado correctamente' }
    }
    return { status: false, msg: 'No se ha podido borrar el empleado' }
}