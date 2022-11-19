const addToDos = document.querySelector(".btn")
addToDos.addEventListener("click", Submit);
function Submit() {
  const todolist = document.getElementById("todos");
  let todoitem = document.getElementById("todo-item").value; 
  if(todoitem.length == 0){
    alert("You cannot create an empty todo item");
    return;
  }
  const Img = document.createElement("img");
  Img.addEventListener("click", markAsComplete)
  const Img1 = document.createElement("img");
  Img1.addEventListener("click", deleteItem)
  Img.setAttribute("class", "width");
  Img.setAttribute("src", "good1.png");
  Img1.setAttribute("class", "width");
  Img1.setAttribute("src", "bad.png");
  const listitem = document.createElement("li");
  listitem.className = "list-group-item w-25";
  listitem.innerHTML = todoitem;
  listitem.appendChild(Img1); 
  listitem.appendChild(Img); 
  todolist.appendChild(listitem);
  document.getElementById("todo-item").value = "";  
}

function markAsComplete (event) {
  event.target.parentNode.style.textDecoration = "line-through";
}

function deleteItem (event) {
  event.target.parentNode.remove();
}