var addNewTask = document.getElementById('addNewTask');
var toDoContainer = document.getElementById('toDoContainer');
var addToDo = document.getElementById('addToDo');

addToDo.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    toDoContainer.appendChild(paragraph);
    paragraph.innerText = addNewTask.value;
    addNewTask.value = "";   
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function(){
        paragraph.remove(paragraph);
    })
})