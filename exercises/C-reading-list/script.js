function readingList(books) {
  var content = document.getElementById("content");
  let ul = document.createElement("ul");
  for (let i = 0; i<books.length; i++) {
      let li = document.createElement("li");
      let p = document.createElement("p");
      var image = document.createElement("IMG");
      p.innerHTML = `${books[i].title}, ${books[i].author}`;
      image.height = "300";
      li.style.listStyle = "none";
      li.style.cssFloat = "left";
      li.style.margin = "20px";
      li.style.width = "330";
      li.style.padding = "10";
      p.style.margin = "10px";
      ul.appendChild(li);
      li.appendChild(p);
      p.appendChild(image);
      if (books[i].title === "The Design of Everyday Things" ) {
        image.src = "https://media.shortform.com/covers/png/the-design-of-everyday-things-cover@8x.png";
      } else if (books[i].title === "The Most Human Human" ) {
        image.src = "https://images-na.ssl-images-amazon.com/images/I/51iSxrqL+sL._SX335_BO1,204,203,200_.jpg";
      } else {
        image.src = "https://pragprog.com/titles/tpp20/the-pragmatic-programmer-20th-anniversary-edition/tpp20.jpg";
      }
      if(books[i].alreadyRead === true) {

        li.style.backgroundColor = "green";
      } else { li.style.backgroundColor = "red";
    }

  }
  content.appendChild(ul);
}

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true
  }
];

readingList(books);