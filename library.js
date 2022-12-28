let viewport = document.querySelector(".viewport");

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
