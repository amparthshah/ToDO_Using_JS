// Function to add a new task
let form = document.getElementById('myForm');
form.addEventListener('submit', function (event) {
    event.preventDefault();

    let value = document.getElementById('todoInput').value;
    let tasks = getTasksFromLocalStorage();

    tasks.push(value);
    saveTasksToLocalStorage(tasks);

    form.reset();
    display();
});

// Function to delete a task
let TaskDelete = (index) => {
    let tasks = getTasksFromLocalStorage();

    if (index >= 0 && index < tasks.length) {
        tasks.splice(index, 1);
        saveTasksToLocalStorage(tasks);
        display();
    }
};

// Function to retrieve tasks from localStorage
function getTasksFromLocalStorage() {
    let tasksString = localStorage.getItem('tasks');
    return tasksString ? JSON.parse(tasksString) : [];
}

// Function to save tasks to localStorage
function saveTasksToLocalStorage(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to display tasks
let display = () => {
    let todoList = document.getElementById('todoList');
    todoList.innerHTML = '';

    let tasks = getTasksFromLocalStorage();

    for (let i = 0; i < tasks.length; i++) {
        let listItem = document.createElement('li');
        listItem.textContent = tasks[i];

        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('btn', 'btn-danger');
        deleteButton.addEventListener('click', function () {
            TaskDelete(i);
        });

        listItem.appendChild(deleteButton);
        todoList.appendChild(listItem);
    }
};

// Call the display function to show the initial tasks from localStorage
display();
