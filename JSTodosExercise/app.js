/* 
JS Todos Exercise
Part 1
For this assignment you will be combining your knowledge of DOM access and events to build a todo app!

As a user, you should be able to:

Add a new todo (by submitting a form)
Mark a todo as completed (cross out the text of the todo)
Remove a todo
Part 2
Now that you have a functioning todo app, save your todos in localStorage! Make sure that when the page refreshes, the todos on the page remain there.
*/
const form = document.querySelector("form");
const todoList = document.querySelector("#todo-list");
const newTodo = document.querySelector("#newTodo-item");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    todoList.appendChild(createListItem(newTodo.value));
    newTodo.value = "";
    saveItems();
})

form.addEventListener("click", (event) => {
    if (event.target.checked) {
        event.target.parentElement.classList.add("done");
    } else if (event.target.value === "Delete") {
        event.target.parentElement.remove();
        
    } else if (!event.target.checked) {
        event.target.parentElement.classList.remove("done");
    }
    saveItems();
})

window.addEventListener("load", (event) => {
    displayFromStorage();
})
function createListItem(newaddItem) {
    const newItem = document.createElement("li");
    newItem.textContent = newaddItem;
    const inputDone = document.createElement("input");
    inputDone.type = "checkbox";
    newItem.prepend(inputDone);
    const delBtn = document.createElement("input");
    delBtn.type = "button";
    delBtn.value = "Delete";
    newItem.append(delBtn);
    return newItem;

}
function saveItems() {
    const allItems = document.querySelectorAll("li");
    let itemArray = [];
    for (const item of allItems) {
        itemArray.push(item.innerText);
    }
    window.localStorage.setItem("todoList", JSON.stringify(itemArray));
}
function displayFromStorage() {
    if (localStorage.todoList) {
        let fromStore = window.localStorage.getItem("todoList");
        let itemSavedArray = JSON.parse(fromStore);
        for (const item of itemSavedArray) {
            todoList.appendChild(createListItem(item));
        }
    }
}