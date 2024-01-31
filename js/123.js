const saveTodoList = function () {
  localStorage.storedList = todoList.innerHTML;
};
const loadList = function () {
  todoList.innerHTML = localStorage.storedList;
};

  if (localStorage.storedList) {
    loadList();
  }