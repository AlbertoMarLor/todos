const taskDiv = document.querySelector('#task')
const addTask = document.querySelector('#newTask')
const filterDiv = document.querySelector('#filter')
const search = document.querySelector('#search')
const priority = document.querySelector('#priority')
const button = document.querySelector('#button')
const h3 = document.querySelector('h3')

function printAllTask(pSection) {
    const tasks = JSON.parse(localStorage.getItem('localTasks'));
    if (tasks.length !== 0) {

        tasks.forEach(task => printOneTask(task, pSection));
    } else {
        pSection.innerHTML = '<h2>NO TASK LEFT</h2>'
    }
}

function printOneTask(pTaskList, pDom) {

    const article = document.createElement('article')
    const h3 = document.createElement('h3')
    const button = document.createElement('button')

    article.id = pTaskList.priority
    h3.textContent = pTaskList.title
    button.textContent = 'Remove'
    button.dataset.id = pTaskList.idTask
    button.addEventListener('click', getRemove)



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

    let results = anadirTarea(newTask)
    if (results) {
        printOneTask(newTask, taskDiv);

    }
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


function getRemove(event) {
    let id = parseInt(event.target.dataset.id);

    let result = removeTask(taskList, id, h3)
    event.target.parentNode.remove();

}




function init() {
    if (localStorage.getItem('localTasks') === null) {
        localStorage.setItem('localTasks', JSON.stringify(taskList))
    }
    printAllTask(taskDiv);
}

init();

/* printAllTask(taskList, taskDiv) */







