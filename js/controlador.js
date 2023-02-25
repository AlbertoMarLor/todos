const filterByPriority = (pList, pPriority) => pList.filter(task => task.priority.includes(pPriority));

function searchByName(pList, pWord) {
    return pList.filter(task => task.title.toLowerCase().includes(pWord.toLowerCase()));
}

