import "./style.css";

// Tasks array that will be used to populate DOM
let myTasks = [];

// Task creation
class Task {
    constructor(title, details, date, completed) {
        this.title = title;
        this.details = details;
        this.date = date;
        this.completed = completed;
    }
}

// Toggle nav bar display, show/hide task form
const buttonToggles = (() => {
    const menuBtn = document.getElementById("menu-btn");
    const navBar = document.getElementById("nav");

    // Hide/show nav bar when hamburger button is clicked
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

    // Show add task form when button is clicked
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

    // Hide task form when button is clicked
    const cancelFormBtn = document.getElementById("hide-form");
    cancelFormBtn.addEventListener("click", function() {
        if (formDisplay == true) {
            document.getElementById("form-container").style.display = "none";
            formDisplay = false;
        }
    })
})();

// Add task to array when form is submitted
const form = document.getElementById("form");
const submitTaskBtn = document.getElementById("submit-task");
submitTaskBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const title = document.getElementById("task-title").value;
    const details = document.getElementById("task-details").value;
    const date = document.getElementById("task-date").value;

    let newTask = new Task(title, details, date);
    myTasks.push(newTask);
    renderTasks();
    form.reset();
})


// Display current tasks on screen
function renderTasks() {
    // First clear all tasks to avoid duplication
    const taskList = document.getElementById("task-list");
    const allTasks = document.querySelectorAll(".task-item");
    for (let i = 0; i < allTasks.length; i++) {
        allTasks[i].remove();
    }

    // For each entry in myTasks, create a DOM element
    let index = 0;
    myTasks.forEach((task) => {
        const taskItem = document.createElement("div");
        taskItem.classList.add("task-item");
        taskList.appendChild(taskItem);

        const checkbox = document.createElement("div");
        checkbox.classList.add("checkbox");
        checkbox.setAttribute("id", "checkbox");
        taskItem.appendChild(checkbox);

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

        // Edit button and functionality - more on this later
        const editButton = document.createElement("button");
        editButton.setAttribute("id", "edit");
        editButton.textContent = "Edit";
        editButton.dataset.linkedArray = index;
        taskItem.appendChild(editButton);
        editButton.addEventListener("click", () => {
            console.log("edit");
            task.title = "Edited";
            renderTasks();
        })

        // Link the index to the delete button and increment per task element.
        // Pressing delete button removes the parent dom element at the index corrresponding to myTasks.
        const deleteButton = document.createElement("button");
        deleteButton.setAttribute("id", "delete");
        deleteButton.textContent = "Delete";
        deleteButton.dataset.linkedArray = index;
        index++;
        taskItem.appendChild(deleteButton);
        let taskToRemove = deleteButton.dataset.linkedArray;
        deleteButton.addEventListener("click", () => {
            taskItem.remove();
            myTasks.splice(taskToRemove, 1);
            renderTasks;
        });

        // Highlight checkbox and strikethrough task items when clicked
        checkbox.addEventListener("click", () => {
            if (checkbox.classList.contains("completed")) {
                task.completed = false;
                checkbox.classList.remove("completed");
                displayTitle.classList.remove("strikethrough");
                displayDetails.classList.remove("strikethrough");
            } else {
                checkbox.classList.add("completed");
                task.completed = true;
                displayTitle.classList.add("strikethrough");
                displayDetails.classList.add("strikethrough");
            }
        });
    })
}

// EVENT DELEGATION - SEEMS VERY USEFUL
// document.addEventListener('click',function(e) {
//     if (e.target && e.target.id == 'checkbox') {

//     }
//  });

// ADD CATEGORY CHECKBOX TO OBJECT, SORT TASKS ACCORDING TO CATEGORY