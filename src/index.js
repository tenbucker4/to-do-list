import "./style.css";

let myTasks = [];

class Task {
    constructor(title, details, date) {
        this.title = title;
        this.details = details;
        this.date = date;
    }
}

const buttonToggles = (() => {
    const menuBtn = document.getElementById("menu-btn");
    const navBar = document.getElementById("nav");
    let navDisplay = true;
    menuBtn.addEventListener("click", function() {
        if (navDisplay == true) {
            navBar.style.display = "none";
            document.querySelector("main").style.width = "100vw";
            navDisplay = false;
        } else {
            navBar.style.display = "block";
            document.querySelector("main").style.width = "auto";
            navDisplay = true;
        }
    })

    const newTaskBtn = document.getElementById("add-task");
    let formDisplay = false;
    newTaskBtn.addEventListener("click", function() {
        if (formDisplay == false) {
            document.getElementById("form-container").style.display = "flex";
            formDisplay = true;
        } else {
            return;
        }
    })

    const cancelFormBtn = document.getElementById("hide-form");
    cancelFormBtn.addEventListener("click", function() {
        if (formDisplay == true) {
            document.getElementById("form-container").style.display = "none";
            formDisplay = false;
        }
    })
})();

const addTaskToArray = (() => {
    const form = document.getElementById("form");
    const submitTaskBtn = document.getElementById("submit-task");

    submitTaskBtn.addEventListener("click", function(e) {
        e.preventDefault();
        const title = document.getElementById("task-title").value;
        const details = document.getElementById("task-details").value;
        const date = document.getElementById("task-date").value;
    
        let newTask = new Task(title, details, date);
        myTasks.push(newTask);
        form.reset();
        console.log(myTasks);
    })
})();

const renderTasks = (() => {
    let index = 0;
    const submitTaskBtn = document.getElementById("submit-task");

    submitTaskBtn.addEventListener("click", function() {
        const taskList = document.getElementById("task-list");
        const allTasks = document.querySelectorAll(".task-item");
        for (let i = 0; i < allTasks.length; i++) {
            allTasks[i].remove();
        }

        myTasks.forEach((task) => {
            const taskItem = document.createElement("div");
            taskItem.classList.add("task-item");
            taskList.appendChild(taskItem);

            const displayTitle = document.createElement("h4");
            displayTitle.classList.add("displayTitle");
            displayTitle.textContent = task.title;
            taskItem.appendChild(displayTitle);

            const displayDetails = document.createElement("p");
            displayDetails.classList.add("displayDetails");
            displayDetails.textContent = task.details;
            taskItem.appendChild(displayDetails);

            const displayDate = document.createElement("p");
            displayDate.classList.add("displayDate");
            displayDate.textContent = task.date;
            taskItem.appendChild(displayDate);

            const editButton = document.createElement("button");
            editButton.textContent = "Edit";
            taskItem.appendChild(editButton);

            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            taskItem.appendChild(deleteButton);
        })
    })
})();