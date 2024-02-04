const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

let toDos = [];
const TODOS_KEY = "todos";

const MAX_TODOS_PER_LINE = 5; //한 줄에 5개씩만 보여주기

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const div = event.target.parentElement;
  div.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(div.id));
  saveToDos();
}

function paintToDo(newTodo) {
  const div = document.createElement("div");
  div.id = newTodo.id;
  const span = document.createElement("span");
  const button = document.createElement("a");
  span.className = "todospan";
  button.className = "todobutton";
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  div.appendChild(span);
  div.appendChild(button);

  span.innerText = newTodo.text;
  toDoList.appendChild(div);

  const currentCount = toDoList.querySelectorAll("div").length;

  // if (currentCount % MAX_TODOS_PER_LINE === 0) {
  //   div.style.marginRight = "0";
  // }
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
