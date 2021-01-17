function getEle(id) {
    return document.getElementById(id);
}

var taskList = new TaskList();
var validator = new Validator();
getLocalStorage();

getEle("addItem").addEventListener("click", function () {
    if (!validator.inputValidate()) {
        alert("Please enter task");
        return;
    } else {
        addTask();
    }
})
function addTask() {
    var name = getEle("newTask").value;
    var task = new Task(name);
    do {
        task.makeID();
    }
    while (taskList.findIndex(task.id) != -1);
    if (validator.validateTask(task.name, taskList)) {
        taskList.addTask(task);
        createTable(taskList.arr);
        setLocalStorage();
        alert("Task successfully created");
    } else {
        alert("Task name not unique - please try again");
    }
    getEle("newTask").value = "";
}
function deleteTask(id) {
    taskList.removeTask(id);
    createTable(taskList.arr);
    setLocalStorage();
    alert("Task successfully deleted")
}

function changeStatus(id) {
    taskList.updateTask(id);
    createTable(taskList.arr);
    setLocalStorage();
    alert("Successfully changed task's status")
}

function createTable(arr) {
    var todoOutput = "";
    var completedOutput = "";
    for (var i = 0; i < arr.length; i++) {
        var status = (arr[i]).status;
        //draw todo tasks;
        if (status == "todo") {
            todoOutput += `<li>
            <span>${arr[i].name}</span>
            <div class="buttons">
              <button class="remove" onclick="deleteTask(${arr[i].id})"> <i class="fa fa-trash-alt"></i></button>
              <button class="complete" onclick="changeStatus(${arr[i].id})"><i class="far fa-check-circle"></i> </button>
            </div>
          </li>`
        }

        //draw completed tasks;
        else if (status == "completed") {
            completedOutput += `<li>
            <span>${arr[i].name}</span>
            <div class="buttons">
              <button class="remove" onclick="deleteTask(${arr[i].id})"> <i class="fa fa-trash-alt"></i></button>
              <button class="complete" onclick="changeStatus(${arr[i].id})"><i class="fas fa-check-circle"></i> </button>
            </div>
          </li>`
        }


    }
    getEle("todo").innerHTML = todoOutput;
    getEle("completed").innerHTML = completedOutput;
}


function setLocalStorage() {
    var arrString = JSON.stringify(taskList.arr);
    localStorage.setItem("task_list", arrString);
}

function getLocalStorage() {

    parsed = JSON.parse(localStorage.getItem("task_list"));
    if (parsed !== null) {
        taskList.arr = parsed;
        createTable(taskList.arr);
    }
}
