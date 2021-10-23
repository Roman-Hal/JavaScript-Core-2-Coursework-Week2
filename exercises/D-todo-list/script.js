function todoList(todos) {
  // Write your code here...
  let content = document.getElementById("content");
  let ul = document.createElement("ul");
  for (let i = 0; i < todos.length; i++) {
    let list = document.createElement('li');
    list.innerHTML = `${todos[i].todo}`;
    ul.appendChild(list);
    list.style.listStyle = "none";
    if(i%2===0) {
      list.style.backgroundColor = "lightgrey";
    }else {
      list.style.backgroundColor = "grey";
    }
    list.style.cursor = "pointer";
  }
  
  content.appendChild(ul);

  function line(ev) {
    if(ev.target.style.getPropertyValue('text-decoration').startsWith('line-through',0)) 
    {
      ev.target.style.textDecoration = 'none';
    } else {
      ev.target.style.textDecoration = 'line-through';
    }
  }
  ul.addEventListener('click', line);
}

const todos = [
  {todo: "wash the dishes"}, 
  {todo: "walk the dog"}, 
  {todo: "learn javascript"}, 
  {todo: "go shopping"}
];

todoList(todos);