import "./style.css";

// Tasks array that will be used to populate DOM
let businessTasks = [];
let schoolTasks = [];
let personalTasks = [];

// Task creation
class Task {
    constructor(title, details, date, category, completed) {
        this.title = title;
        this.details = details;
        this.date = date;
        this.category = category;
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
            navBar.style.display = "flex";
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

// Navigate to selected folder from nav bar
const folders = document.querySelectorAll(".folder");
const currentFolderTitle = document.getElementById("current-directory");

// Open business directory by default on window open
let currentDirectory = "businessFolder";
window.onload = (setCurrentDirectory(currentDirectory));

// Toggle directory title from nav bar
function setCurrentDirectory(directory) {
    if (directory == "businessFolder") {
        currentFolderTitle.textContent = "Business";
    } else if (directory == "schoolFolder") {
        currentFolderTitle.textContent = "School";
    } else if (directory == "personalFolder"){
        currentFolderTitle.textContent = "Personal";
    }
}

folders.forEach((folder) => {
    folder.addEventListener('click', () => {
        currentDirectory = folder.id;
        setCurrentDirectory(currentDirectory);
        if (currentDirectory == "businessFolder") {
            renderTasks(businessTasks);
        } else if (currentDirectory == "schoolFolder") {
            renderTasks(schoolTasks);
        } else if (currentDirectory == "personalFolder") {
            renderTasks(personalTasks);
        }
    })
})


// Add task to array when form is submitted
const form = document.getElementById("form");
const submitTaskBtn = document.getElementById("submit-task");
submitTaskBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const title = document.getElementById("task-title").value;
    const details = document.getElementById("task-details").value;
    const date = document.getElementById("task-date").value;
    let completed = false;
    let category;
    // Check which category is checked off
    if (document.getElementById("business").checked == true) {
        category = "business";
    } else if (document.getElementById("school").checked == true) {
        category = "school"; 
    } else {
        category = "personal";
    }

    // Add task to array corresponding to selected category
    let newTask = new Task(title, details, date, category, completed);
    if (newTask.category == "business") {
        businessTasks.push(newTask);
    } else if (newTask.category == "school") {
        schoolTasks.push(newTask);
    } else {
        personalTasks.push(newTask);
    }

    // If creating a task within the currently selected directory, display the updated list
    if (newTask.category == "business" && currentDirectory == "businessFolder") {
        renderTasks(businessTasks);
    } else if (newTask.category == "school" && currentDirectory == "schoolFolder") {
        renderTasks(schoolTasks);
    } else if (newTask.category == "personal" && currentDirectory == "personalFolder") {
        renderTasks(personalTasks);
    }

    form.reset();
})


// Display current tasks on screen
function renderTasks(list) {
    // First clear all tasks to avoid duplication
    const taskList = document.getElementById("task-list");
    const allTasks = document.querySelectorAll(".task-item");
    for (let i = 0; i < allTasks.length; i++) {
        allTasks[i].remove();
    }

    // For each entry in myTasks, create a DOM element
    list.forEach((task) => {
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
        taskItem.appendChild(editButton);
        // TODO: implement edit task functionality

        // Link the index to the delete button and increment per task element.
        // Pressing delete button removes the parent dom element at the index corrresponding to myTasks.
        const deleteButton = document.createElement("button");
        deleteButton.setAttribute("id", "delete");
        deleteButton.textContent = "Delete";
        taskItem.appendChild(deleteButton);

        function checkCompleted() {
            if (task.completed == true) {
                checkbox.classList.add("completed");
                displayTitle.classList.add("strikethrough");
                displayDetails.classList.add("strikethrough");
            }
        }
        checkCompleted();

        // Highlight checkbox and strikethrough task items when clicked
        checkbox.addEventListener("click", () => {
            console.log('click');
            if (task.completed == false) {
                checkbox.classList.add("completed");
                displayTitle.classList.add("strikethrough");
                displayDetails.classList.add("strikethrough");
                task.completed = true;
            } else {
                checkbox.classList.remove("completed");
                displayTitle.classList.remove("strikethrough");
                displayDetails.classList.remove("strikethrough");
                task.completed = false;
            }
        });
    })
}

document.addEventListener('click',function(e) {
    if (e.target && e.target.id == 'delete') {
        deleteTask(e);
    }
 });

function deleteTask(e) {
    let taskDiv = e.target.parentElement;
    console.log(taskDiv);
}


// EVENT DELEGATION - SEEMS VERY USEFUL
// document.addEventListener('click',function(e) {
//     if (e.target && e.target.id == 'checkbox') {

//     }
//  });

// ADD CATEGORY CHECKBOX TO OBJECT, SORT TASKS ACCORDING TO CATEGORY