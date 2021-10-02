function listOfNames(arrayOfPeople) {
  let content = document.querySelector("#content");
  var head1 = document.createElement("h1");
  var head2 = document.createElement("h2");
  head1.innerHTML = `${arrayOfPeople.name}`;
  head2.innerHTML = `${arrayOfPeople.job}`;
  content.appendChild(head1).after(head2);
  }

function showRes() {
  people.forEach((arrayOfPeople) => {listOfNames(arrayOfPeople);});
}


let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

showRes();
//listOfNames(people);
