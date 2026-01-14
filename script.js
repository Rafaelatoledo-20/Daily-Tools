function addTask() {
  const inputTask = document.getElementById("inputTask");
  const taskList = document.getElementById("taskList");
  const message = document.getElementById("message");

  const task = inputTask.value.trim();

  if (task === "") {
    message.textContent = "Enter a task to add it to the list!";
    message.style.color = "#c50303";
    return;
  }

  const li = document.createElement("li");
  li.textContent = task;
  taskList.appendChild(li);

  message.textContent = "Task added successfully!";
  message.style.color = "green";

  inputTask.value = "";
}

