let viewport = document.querySelector(".viewport");
let container = document.querySelector(".container");

// Constructor function for a book
function Book(title, author, pages, haveRead) {
  // this is pointing to a empty object
  (this.title = title),
    (this.author = author),
    (this.pages = pages),
    (this.haveRead = haveRead);
}

// Read out all the properties of the book
Book.prototype.info = function () {
  if (this.haveRead == true) {
    return `${this.title} by ${this.author}, ${this.pages} pages, you have read this.`;
  } else
    return `${this.title} by ${this.author}, ${this.pages} pages, have not read yet.`;
};

// Add book to the library array
Book.prototype.addToLibrary = function () {
  myLibrary.push(this);
};

// Update a card on the screen to a book
// Book.prototype.updateCard = function () {
//   title.innerHTML = this.title;
//   author.innerHTML = this.author;
//   pages.innerHTML = `Pages: ${this.pages}`;
//   if (this.haveRead) {
//     read.innerHTML = "You have read this already";
//   } else read.innerHTML = "You have not read this yet";
// };

Book.prototype.createCard = function () {
  let newCard = document.createElement("div");
  newCard.classList.add("card");
  // creat new title
  let newTitle = document.createElement("div");
  newTitle.classList.add("title");
  newTitle.innerHTML = this.title;
  // creat new author
  let newAuthor = document.createElement("div");
  newAuthor.classList.add("author");
  newAuthor.innerHTML = this.author;
  // creat new pages
  let newPages = document.createElement("div");
  newPages.classList.add("pages");
  newPages.innerHTML = `Pages: ${this.pages}`;
  // creat new read
  let newRead = document.createElement("div");
  newRead.classList.add("pages");
  if (this.haveRead) {
    newRead.innerHTML = "You have read this already";
  } else newRead.innerHTML = "You have not read this yet";
  // add elements to card
  newCard.appendChild(newTitle);
  newCard.appendChild(newAuthor);
  newCard.appendChild(newPages);
  newCard.appendChild(newRead);
  // add card to screen
  container.appendChild(newCard);
};

// Crete new books
let hobbit = new Book("The Hobbit", "J.R.R Tolkien", 295, false);
let kings = new Book("The Way of Kings", "Brandon Sanderson", 2340, true);
let harryPotter = new Book("Harry Potter", "J.K. Rowling", 314, true);

let myLibrary = [];

hobbit.addToLibrary();
kings.addToLibrary();
harryPotter.addToLibrary();
console.log(myLibrary);

// Loop through library and display info
function updateScreen() {
  clearScreen();
  for (let book of myLibrary) {
    console.log(book.info());
    book.createCard();
  }
}

function clearScreen() {
  let cards = document.querySelectorAll(".card");
  for (let card of cards) {
    card.remove();
  }
}

// create a new card and put it on the screen
// create new card
let newCard = document.createElement("div");
newCard.classList.add("card");
// creat new title
let newTitle = document.createElement("div");
newTitle.classList.add("title");
newTitle.innerHTML = "Hello World";
// add title to card
newCard.appendChild(newTitle);
// add card to screen
container.appendChild(newCard);

updateScreen();
let mormon = new Book("Bom", "Moroni", 560, true);
mormon.addToLibrary();
updateScreen();
