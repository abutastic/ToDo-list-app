function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== '') {
        var newTask = document.createElement('li');
        newTask.innerHTML = taskInput.value + ' <button onclick="completeTask(this)">Complete</button>';
        taskList.appendChild(newTask);
        taskInput.value = '';
    }
}

function completeTask(button) {
    var task = button.parentNode;
    task.classList.toggle('complete');
}
