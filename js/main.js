let taskInput = document.getElementById("taskInput");
let addTaskButton = document.getElementById("addTask");
let taskList = document.getElementById("taskList");

function createTaskItem(task) {
  let li = document.createElement("li");
  let span = document.createElement("span");
  span.textContent = task;

  let deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", () => {
    taskList.removeChild(li);
  });

  li.appendChild(span);
  li.appendChild(deleteButton);
  return li;
}

// Add task button event listener
addTask.addEventListener("click", () => {
  let taskText = taskInput.value.trim();
  if (taskText) {
    let taskItem = createTaskItem(taskText);
    taskList.appendChild(taskItem);
    taskInput.value = "";
  }
});

// // Optional: Allow pressing Enter to add a task
// taskInput.addEventListener("keypress", (event) => {
//   if (event.key === "Enter") {
//     addTaskButton.click();
//   }
// });
