function searchByName(pList, pWord) {
    return pList.filter(task => task.title.toLowerCase().includes(pWord.toLowerCase()));
}