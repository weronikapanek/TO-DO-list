const form = document.querySelector('form');
const input = document.querySelector('input');
const button = document.querySelector('.addnew');
const list = document.querySelector('ul');
const taskButton = document.querySelector('.taskButton')
const clearButton = document.querySelector('.clear');
const taskList = document.querySelector('.tasklist');


const doneTask = (e) => {
    e.target.classList.toggle('line-through')
}

const deleteTasks = () => {
list.textContent = "";
}

const addTask = (e) => {
e.preventDefault()
const titleTask = input.value;
if (titleTask === "") return;
const task = document.createElement('li');
task.className = 'task';
task.innerHTML = "<button> X </button>" + titleTask; 
const taskButton = task.querySelector('button');
task.querySelectorAll('li');
list.appendChild(task);
input.value = "";
task.addEventListener('click', doneTask);
taskButton.addEventListener('click', removeTask = (e) => {

    e.target.parentNode.remove();
    e.target.parentNode.style.textDecoration = 'none';
});

clearButton.addEventListener('click', deleteTasks)
}

button.addEventListener('click', addTask)