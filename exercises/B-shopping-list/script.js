function shoppingList(arrayOfPeople) {
  let array = Array.from(arrayOfPeople);
  let content = document.getElementById("content");
  var ul = document.createElement("ul");
  for (let i = 0; i<array.length; i++) {
    var li = document.createElement("li");
    li.innerHTML = array[i];
    ul.appendChild(li); 
  };
  content.appendChild(ul);
}

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);
