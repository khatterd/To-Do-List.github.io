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
        window.alert("Task Added");
        console.log(task);
        displayTasks();
    }
}
function displayTasks()
{
    var list = document.querySelector('.listBox')
    
    if (task.length == 0)
    {   
        {
            list.innerHTML = "No Tasks Added";
        }
    }
    else
    {
        list.innerHTML = ""
        for (let [index, value] of task.entries())
        {
            list.innerHTML += `<li>${index} ${value}</li>`;
        }
    }
}

