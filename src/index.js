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
    const formContainer = document.getElementById("form-container");
    newTaskBtn.addEventListener("click", function() {
        formContainer.style.display = "flex";
        formContainer.classList.add("new-box");
        newTaskBtn.style.display = "none";
    })

    // Hide task form when button is clicked
    const hideFormBtn = document.getElementById("hide-form");
    hideFormBtn.addEventListener("click", function() {
        document.getElementById("form-container").style.display = "none";
        newTaskBtn.style.display = "inline-block";
    })
})();



// Navigate to selected folder from nav bar
const folders = document.querySelectorAll(".folder");
const currentFolderTitle = document.getElementById("current-directory");

// Open business directory by default on window open
let currentDirectory = "businessFolder";
window.onload = (displayCurrentDirectory(currentDirectory));

// Toggle directory title from nav bar
function displayCurrentDirectory(directory) {
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
        displayCurrentDirectory(currentDirectory);
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

    document.getElementById("form-container").style.display = "none";
    document.getElementById("add-task").style.display = "inline-block";

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
    saveData();

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

        // Link the index to the delete button and increment per task element.
        // Pressing delete button removes the parent dom element at the index corrresponding to myTasks.
        const deleteButton = document.createElement("button");
        deleteButton.setAttribute("id", "delete");
        deleteButton.textContent = "Delete";
        taskItem.appendChild(deleteButton);

        // if task is already completed, highlight the checkbox and add a strikethrough to the text
        function checkCompleted() {
            if (task.completed == true) {
                checkbox.classList.add("completed");
                displayTitle.classList.add("strikethrough");
                displayDetails.classList.add("strikethrough");
            }
        }
        checkCompleted();

        // Toggle completed tasks
        checkbox.addEventListener("click", () => {
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
            saveData();
        });
    })
}

// Listen for click on a delete task button, run delete task function
document.addEventListener('click', function(e) {
    if (e.target && e.target.id == 'delete') {
        deleteTask(e);
    }
 });

// Delete task from list
function deleteTask(e) {
    let taskDiv = e.target.parentElement;
    let titleDiv = taskDiv.querySelector(".displayTitle").textContent;
    if (currentDirectory == "businessFolder") {
        let remainingArray = businessTasks.filter(task => task.title != titleDiv);
        businessTasks = remainingArray;
        renderTasks(businessTasks);
    } else if (currentDirectory == "schoolFolder") {
        let remainingArray = schoolTasks.filter(task => task.title != titleDiv);
        schoolTasks = remainingArray;
        renderTasks(schoolTasks);
    } else if (currentDirectory == "personalFolder") {
        let remainingArray = personalTasks.filter(task => task.title != titleDiv);
        personalTasks = remainingArray;
        renderTasks(personalTasks);
    }
    saveData();
}

// Onclick on an edit button, execute editTask function
document.addEventListener('click', function(e) {
    if (e.target && e.target.id == 'edit') {
        editTask(e);
    }
 });

function editTask(e) {
    document.getElementById("edit-container").style.display = "flex";
    document.getElementById("edit-container").classList.add("new-box");
    const taskDiv = e.target.parentElement;
    taskDiv.style.border = "2px solid lightgreen"
    const titleDiv = taskDiv.querySelector(".displayTitle");
    const detailsDiv = taskDiv.querySelector(".displayDetails");
    const dateDiv = taskDiv.querySelector(".displayDate");

    const editForm = document.getElementById("edit-form");
    const taskTitle = document.getElementById("edit-task-title");
    const taskDetails = document.getElementById("edit-task-details");
    const taskDate = document.getElementById("edit-task-date");
    const isCompleted = document.getElementById("checkbox");

    let completed;
    let category;
    
    if (isCompleted.classList.contains("completed")) {
        completed = true;
    } else {
        completed = false;
    }

    taskTitle.value = titleDiv.textContent;
    taskDetails.textContent = detailsDiv.textContent;
    taskDate.textContent = dateDiv.textContent;

    document.addEventListener('click', function(e) {
        if (e.target && e.target.id == "submit-task-edit") {
            e.preventDefault();
            let arrayToEdit;
            if (currentDirectory == "businessFolder") {
                arrayToEdit = businessTasks;
                category = "business";
            } else if (currentDirectory == "schoolFolder") {
                arrayToEdit = schoolTasks;
                category = "school";
            } else if (currentDirectory == "personalFolder") {
                arrayToEdit = personalTasks;
                category = "personal";
            }

            let index = arrayToEdit.findIndex(task => task.title == titleDiv.textContent);
            if (index < 0) {
                return;
            }

            arrayToEdit.splice(index, 1);
            renderTasks(arrayToEdit);
            let newTask = new Task(taskTitle.value, taskDetails.value, taskDate.value, category, completed);
            arrayToEdit.splice(index, 0, newTask);
            renderTasks(arrayToEdit);
            editForm.reset();
            document.getElementById("edit-container").style.display = "none";
            taskDiv.style.border = "2px solid #bfdbfe";
            saveData();
        }
    })

    document.addEventListener('click', function(e) {
        if (e.target && e.target.id == "cancel-edit") {
            editForm.reset();
            document.getElementById("edit-container").style.display = "none";
            taskDiv.style.border = "2px solid #bfdbfe";
        }
    })
}


// Save data to local storage
function saveData() {
    localStorage.setItem(`businessTasks`, JSON.stringify(businessTasks))
    localStorage.setItem(`schoolTasks`, JSON.stringify(schoolTasks))
    localStorage.setItem(`personalTasks`, JSON.stringify(personalTasks))
}

function restore() {
    if (!localStorage.businessTasks || !localStorage.schoolTasks || !localStorage.personalTasks) {
        return;
    } else {
        let business = localStorage.getItem("businessTasks");
        let school = localStorage.getItem("schoolTasks");
        let personal = localStorage.getItem("personalTasks");
    
        business = JSON.parse(business);
        school = JSON.parse(school);
        personal = JSON.parse(personal);
    
        console.log(business);
    
        businessTasks = business;
        schoolTasks = school;
        personalTasks = personal;
        renderTasks(businessTasks);
    }
}

restore()
