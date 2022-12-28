let viewport = document.querySelector(".viewport");
let card = document.querySelector(".card");
let title = document.querySelector(".title");
let author = document.querySelector(".author");
let pages = document.querySelector(".pages");
let read = document.querySelector(".read");

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
Book.prototype.updateCard = function () {
  title.innerHTML = this.title;
  author.innerHTML = this.author;
  pages.innerHTML = `Pages: ${this.pages}`;
  if (this.haveRead) {
    read.innerHTML = "You have read this already";
  } else read.innerHTML = "You have not read this yet";
};

// Crete new books
let hobbit = new Book("The Hobbit", "J.R.R Tolkien", 295, false);
let kings = new Book("The Way of Kings", "Brandon Sanderson", 2340, true);
let harryPotter = new Book("Harry Potter", "J.K. Rowling", 314, true);
console.log(hobbit.info());
console.log(kings.info());
console.log(kings);

let myLibrary = [];

hobbit.addToLibrary();
kings.addToLibrary();
harryPotter.addToLibrary();
console.log(myLibrary);

// Loop through library and display info
for (let book of myLibrary) {
  console.log(book.info());
}

kings.updateCard();
