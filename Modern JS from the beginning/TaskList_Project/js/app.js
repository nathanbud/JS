const taskForm = document.querySelector('#task-form');
const taskInput = document.querySelector('#task');
const tasklist = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');

loadEventListeners();

function loadEventListeners() {
    taskForm.addEventListener('submit', addTask);
    tasklist.addEventListener('click', removeTask);
    clearBtn.addEventListener('click', clearTasks);
    filter.addEventListener('keyup', filterTasks);

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

    taskInput.value = '';

    e.preventDefault();
}

function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        if (confirm("Are you sure?")) {
            e
                .target
                .parentElement
                .parentElement
                .remove();
        }
    }
}

function clearTasks() {
    //taskList.innerHTML = ''; faster
    while (tasklist.firstChild) {
        tasklist.removeChild(tasklist.firstChild);
    }
}

function filterTasks(e) {
    const text = e
        .target
        .value
        .toLowerCase();

    document
        .querySelectorAll('.collection-item')
        .forEach(function (task) {
            const item = task.firstChild.textContent;
            if (item.toLowerCase().indexOf(text) != -1) {
                task.getElementsByClassName.display = 'block';
            } else {
                task.style.display = 'none';
            }
        });

}
