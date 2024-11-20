document.addEventListener("DOMContentLoaded", () => {
    const todoForm = document.getElementById("todo-form");
    const todoInput = document.getElementById("todo-input");
    const todoList = document.getElementById("todo-list");

    // FR1 : 일정 추가하는 기능
    todoForm.addEventListener("submit", (event) => {
        event.preventDefault(); 

        const taskText = todoInput.value.trim();
        if (taskText === "") return; 


        const listItem = document.createElement("li");
        const taskSpan = document.createElement("span");
        taskSpan.textContent = taskText;
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";

        // FR2 : 일정 삭제하는 기능
        deleteButton.addEventListener("click", () => {
            listItem.remove();
        });


        listItem.appendChild(taskSpan);
        listItem.appendChild(deleteButton);


        todoList.appendChild(listItem);
        todoInput.value = "";
    });
});
