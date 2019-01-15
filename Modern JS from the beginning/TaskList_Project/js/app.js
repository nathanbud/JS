const taskForm = document.querySelector('#task-form');
const taskInput = document.querySelector('#task');
const tasklist = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');

loadEventListeners();

function loadEventListeners() {
    taskForm.addEventListener('submit', addTask);
}
function addTask(e) {
    if (taskInput.value === '') {
        alert('Add a Task');
    }

    //Create li element
    const li = document.createElement('li');
    //add Class
    li.className = 'collection-item';
    //Create text node and append to li

    li.appendChild(document.createTextNode(taskInput.value));

    // create new link element
    const link = document.createElement('a');

    link.className = 'delete-item secondary-content';

    link.innerHTML = '<i class="fa fa-remove">X</i>';

    li.appendChild(link);

    tasklist.appendChild(li);

    e.preventDefault();
}
