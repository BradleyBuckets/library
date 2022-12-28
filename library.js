let viewport = document.querySelector(".viewport");

function Book(title, author, pages, haveRead) {
  (this.title = title),
    (this.author = author),
    (this.pages = pages),
    (this.haveRead = haveRead);
  // (this.info = function () {});
}

Book.prototype.info = function () {
  if (this.haveRead == true) {
    return `${this.title} by ${this.author}, ${this.pages} pages, you have read this.`;
  } else
    return `${this.title} by ${this.author}, ${this.pages} pages, have not read yet.`;
};

let hobbit = new Book("The Hobbit", "J.R.R Tolkien", 295, false);
let kings = new Book("The Way of Kings", "Brandon Sanderson", 2340, true);
console.log(hobbit.info());
console.log(kings.info());
console.log(kings);
