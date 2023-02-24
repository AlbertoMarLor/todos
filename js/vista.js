const taskDiv = document.querySelector('#task')

console.log(taskDiv)
function printAllTask(pTaskList, pDom) {
    
pTaskList.forEach(task => printOneTask(task, pDom));


}


/* <article>
  <h3>Study</h3>
  <button>Remove</button>
 </article> */





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


printAllTask(taskList, taskDiv)