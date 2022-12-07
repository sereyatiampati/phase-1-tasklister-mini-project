document.addEventListener("DOMContentLoaded", addTask);

function addTask(){
  const li = document.createElement('li')
  const toDo = document.querySelector('#new-task-description')
  const ul = document.querySelector('#tasks')
  const form = document.querySelector('#create-task-form')
  form.addEventListener("submit", (e)=> {
    e.preventDefault();
  ul.appendChild(li);
  li.innerHTML=toDo.value
  })
}