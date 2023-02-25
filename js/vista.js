const taskDiv = document.querySelector('#task')
const addTask = document.querySelector('#newTask')
const filterDiv = document.querySelector('#filter')
const search = document.querySelector('#search')
const priority = document.querySelector('#priority')

function printAllTask(pTaskList, pDom) {
pDom.innerHTML = "";
pTaskList.forEach(task => printOneTask(task, pDom));
}


function printOneTask(pTaskList, pDom) {
   
    const article = document.createElement('article')
    const h3 = document.createElement('h3')
    const button = document.createElement('button')

    h3.textContent = pTaskList.title
    button.textContent ='Remove'
    

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



filterDiv.addEventListener('change', priorityFilter)
function priorityFilter(event) {
    let priority = event.target.value;
    let filterList = filterByPriority(taskList, priority)
    printAllTask(filterList, taskDiv);
}  



search.addEventListener('input', getSearch)
function getSearch(event) {
    
    let word = event.target.value;
    let filterList = searchByName(taskList, word);
    printAllTask(filterList, taskDiv);
}








printAllTask(taskList, taskDiv)