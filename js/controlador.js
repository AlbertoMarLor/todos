const filterByPriority = (pList, pPriority) => pList.filter(task => task.priority.includes(pPriority));

function searchByName(pList, pWord) {
    return pList.filter(task => task.title.toLowerCase().includes(pWord.toLowerCase()));
}

function removeTask(pList, pId) {


    let posicion = pList.findIndex(task => task.idTask === pId);
    pList.splice(posicion, 1);
    localStorage.setItem('localTasks', JSON.stringify(taskList));

}
/* 
function anadirTarea(pTask) {
    const tasks = JSON.parse(localStorage.getItem('localTasks'));
    tasks.push(pTask);
    localStorage.setItem('localTasks', JSON.stringify(tasks));
    return true;
} */