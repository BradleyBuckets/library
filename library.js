let viewport = document.querySelector(".viewport");
let container = document.querySelector(".container");

// constructor function for a book
function Book(title, author, pages, haveRead) {
  // 'this' is updating an empty object
  (this.title = title),
    (this.author = author),
    (this.pages = pages),
    (this.haveRead = haveRead);
}

// read out all the properties of the book
Book.prototype.info = function () {
  if (this.haveRead == true) {
    return `${this.title} by ${this.author}, ${this.pages} pages, you have read this.`;
  } else
    return `${this.title} by ${this.author}, ${this.pages} pages, have not read yet.`;
};

//add book to the library array
Book.prototype.addToLibrary = function () {
  myLibrary.push(this);
};

// creat a card mapped to the book and then put it on the screen
Book.prototype.createCard = function () {
  // create new card
  let newCard = document.createElement("div");
  newCard.classList.add("card");
  newCard.id = this.title;
  // create new title
  let newTitle = document.createElement("div");
  newTitle.classList.add("title");
  newTitle.innerHTML = this.title;
  // create new author
  let newAuthor = document.createElement("div");
  newAuthor.classList.add("author");
  newAuthor.innerHTML = this.author;
  // create new pages
  let newPages = document.createElement("div");
  newPages.classList.add("pages");
  newPages.innerHTML = `Pages: ${this.pages}`;
  // create new read
  let newRead = document.createElement("div");
  newRead.classList.add("pages");
  if (this.haveRead) {
    newRead.innerHTML = "You have read this already";
  } else newRead.innerHTML = "You have not read this yet";
  // add remove button
  let remove = document.createElement("div");
  remove.classList.add("remove");
  // having the same id as the card allows me to connect the button to the card as a whole
  remove.id = this.title;
  remove.innerHTML = "Remove";
  remove.addEventListener("click", removeCard);
  // add elements to card
  newCard.appendChild(newTitle);
  newCard.appendChild(newAuthor);
  newCard.appendChild(newPages);
  newCard.appendChild(newRead);
  newCard.appendChild(remove);
  // add card to screen
  container.appendChild(newCard);
};

// create new books
let hobbit = new Book("The Hobbit", "J.R.R Tolkien", 295, false);
let kings = new Book("The Way of Kings", "Brandon Sanderson", 2340, true);
let harryPotter = new Book("Harry Potter", "J.K. Rowling", 314, true);

let myLibrary = [];

hobbit.addToLibrary();
kings.addToLibrary();
harryPotter.addToLibrary();

// add cards to the screen
function updateScreen() {
  clearScreen();
  // loop through library and display info and create card
  for (let book of myLibrary) {
    book.createCard();
  }
}

// remove all cards from the screen
function clearScreen() {
  // grab all cards
  let cards = document.querySelectorAll(".card");
  // remove each card
  for (let card of cards) {
    card.remove();
  }
}

// remove card when button is clicked
function removeCard() {
  // 'this' is referencing the button itself
  let rm = document.getElementById(this.id);
  rm.remove();
}

updateScreen();
let mormon = new Book("Bom", "Moroni", 560, true);
mormon.addToLibrary();
updateScreen();
