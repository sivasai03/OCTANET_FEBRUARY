function addTask() {
    var taskInput = document.getElementById("taskInput");
    var deadlineInput = document.getElementById("deadlineInput");
    var taskList = document.getElementById("taskList");
    var taskText = taskInput.value;
    var deadlineDate = deadlineInput.value;
    if (taskText.trim() !== "") {
        var listItem = document.createElement("li");
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.addEventListener("change", function() {
            if (checkbox.checked) {
                listItem.style.color = "green"; 
                taskList.appendChild(listItem); 
            } else {
                var now = new Date();
                var deadline = new Date(deadlineDate);
                if (deadline > now) {
                    listItem.style.color = "orange";
                    listItem.style.backgroundColor = "#fffacd";
                } else {
                    listItem.style.color = "black";
                    listItem.style.backgroundColor = "#ffb6c1"; 
                }
            }
        });
        var label = document.createElement("label");
        label.textContent = taskText + " (Deadline: " + deadlineDate + ")";
        listItem.appendChild(checkbox);
        listItem.appendChild(label);
        taskList.insertBefore(listItem, taskList.firstChild);
        taskInput.value = "";
        deadlineInput.value = "";
        var now = new Date();
        var deadline = new Date(deadlineDate);
        if (deadline > now) {
            listItem.style.color = "orange";
            listItem.style.backgroundColor = "#fffacd"; 
        } else {
            listItem.style.color = "black"; 
        }
    } else {
        alert("Please enter a task!");
    }
}
