"use strict";

const todoControl = document.querySelector(".todo-control");
const headerInput = document.querySelector(".header-input");
const todoList = document.querySelector(".todo-list");
const todoCompleted = document.querySelector(".todo-completed");
const removeTodoList = document.querySelector(".todo-remove");

const toDoData = [];
const saveToStorage = function() {
   localStorage.setItem("todoList", JSON.stringify(toDoData));
   console.log(toDoData);
}
// Здесь начинается "корявый" код
// let loadFromStorage = function() {
//   if (localStorage.getItem('todoList')) {
//     toDoData = JSON.parse(localStorage.getItem('todoList'))
//   }
//   else {
//     toDoData = []
//   }
// }


// loadFromStorage();
// Здесь "корявый" код заканчивается
const render = function () {

 
  todoList.innerHTML = "";
  todoCompleted.innerHTML = "";

  toDoData.forEach(function (item) {
    const li = document.createElement("li");
    li.classList.add("todo-item");
    li.innerHTML = `
    <span class="text-todo">${item.text}</span>
				<div class="todo-buttons">
					<button class="todo-remove"></button>
					<button class="todo-complete"></button>
				</div>
    `;
    if (item.completed) {
      todoCompleted.append(li);
    } else {
      todoList.append(li);
    }
   saveToStorage();
    
    li.querySelector(".todo-complete").addEventListener("click", function () {
      item.completed = !item.completed;
      
      render();
      
    });

    li.querySelector(".todo-remove").addEventListener("click", function () {
      const todoIndex = toDoData.indexOf(item);
      toDoData.splice(todoIndex, 1);
      saveToStorage();
      render();
    
    });
    
  });

};
  
todoControl.addEventListener("submit", function (e) {
  e.preventDefault();

  const newToDo = {
    text: headerInput.value,
    completed: false,
  };

  if (headerInput.value === "") {
    return;
  } else {
    toDoData.push(newToDo);
    headerInput.value = "";
  }

  render();


});
console.log(todoList);