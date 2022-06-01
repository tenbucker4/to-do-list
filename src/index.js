import "./style.css";

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

const addTaskToList = (() => {
    const taskTitle = document.getElementById("task-title");
    const taskDetails = document.getElementById("task-details");
    const taskDate = document.getElementById("task-date");
    const taskList = document.getElementById("task-list");
    const submitTaskBtn = document.getElementById("submit-task");

    submitTaskBtn.addEventListener("click", function() {
        const taskItem = document.createElement("div");
        taskItem.classList.add("task-item");
        taskItem.textContent = taskTitle.value;
        taskList.appendChild(taskItem);
    })
})();