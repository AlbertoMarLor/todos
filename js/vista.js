const taskDiv = document.querySelector('#task')
const addTask = document.querySelector('#newTask')
const filterDiv = document.querySelector('#filter')

function printAllTask(pTaskList, pDom) {
    
pTaskList.forEach(task => printOneTask(task, pDom));
}


function printOneTask(pTaskList, pDom) {
    
    const article = document.createElement('article')
    const h3 = document.createElement('h3')
    const button = document.createElement('button')

    h3.textContent = pTaskList.title
    button.textContent ='Remove'
    //button.addEventListener('click', removeTask)

    article.appendChild(h3)
    article.appendChild(button)
    pDom.appendChild(article)

}

addTask.addEventListener('submit', getNewTaskData)
function getNewTaskData(event) {
    event.preventDefault();
    let taskTitle = event.target.task.value
    let taskPriority = event.target.priority.value
    const newTask = {
        idTask: GlobalId,
        title: taskTitle,
        priority: taskPriority
    }
    GlobalId++
    
    let task = taskList.push(newTask)
    printOneTask(newTask, taskDiv)

}

filterDiv.addEventListener('submit', getFilterData)
function getFilterData(event) {
    event.preventDefault();
    let priority = event.target.priority.value
    let search = event.target.search.value


}











printAllTask(taskList, taskDiv)