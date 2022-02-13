function listOfColours(colours) {
  // Write your code here...
  let content = document.getElementById("content");
  let select = document.createElement("select");
  let p = document.createElement("p");

  content.appendChild(p);
  p.innerHTML = 'Select one of the colors from option';

  for(var i = 0; i < colours.length; i++) {
    let option = document.createElement("option");
    option.setAttribute("value", colours[i]);
    option.innerHTML = colours[i];

  select.appendChild(option);
  };
  
select.addEventListener("click", (e) => {
  p.innerHTML = `Color ${e.target.value} has been selected.`;
  p.style.color = e.target.value;
});
content.appendChild(select);
};

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
