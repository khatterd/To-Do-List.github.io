var task = [];
function LoadApp()
{
    displayTasks();
}

// Add Button Icon Hover effect
const addTaskButton = document.getElementById("addTaskButton");

addTaskButton.addEventListener("mouseover", function() {
    addTaskButton.style.height = "2rem";
});
addTaskButton.addEventListener("mouseout", function() {
    addTaskButton.style.height = "1.7rem";
});

//Adds the task to list
function addtoList()
{
    const inputBox = document.getElementById('inputbox');
    const taskInput = inputBox.elements.task;
    const taskValue = taskInput.value;
    
    if (taskValue === "")
    {
        window.alert("Enter A Value");
    }
    else
    {
        task.push(taskValue);
        localStorage.setItem("task", JSON.stringify(task))
        displayTasks();
    }
}

//To Display the Array 
function displayTasks()
{
    tasklist = JSON.parse(localStorage.getItem("task"));
    var list = document.querySelector('#listBox')
    
    if (tasklist.length == 0)
    {   
        {
            list.innerHTML = "No Tasks Added";
            document.getElementById('clearbox').innerHTML ="" 
        }
    }
    else
    {
        document.getElementById('clearbox').innerHTML = 
        `<button class="btn btn-danger" onclick="clearTask()">Clear All</button>`

        list.innerHTML = ""
        for (let [index, value] of tasklist.entries())
        {
            list.innerHTML += `<li class="list-group-item ">${value} <img onclick = "editTask(${index})" src = "src/assets/icons/pencil-square.svg"> <img onclick = "deleteTask(${index})" src = "src/assets/icons/x-square.svg"></li>`;
        }
    }
}

function editTask (index)
{
    let currentValue = task[index];
    var newValue = prompt("Edit Task", currentValue);
    task[index] = newValue;
    localStorage.setItem("task", JSON.stringify(task))
    displayTasks()
}
function deleteTask (index)
{
    task.splice(index, 1);
    localStorage.setItem("task", JSON.stringify(task))
    displayTasks()
}
function clearTask()
{
    task.splice(0, task.length)
    localStorage.setItem("task", JSON.stringify(task))
    displayTasks()
}


  
