/*
╔════════════════════════════════════════╗
║         METHODS DECLARATION            ║
╚════════════════════════════════════════╝
*/

// ✅ Entities grouped logically and syntactically
const bookShelf = {
  books: ['The Last Kingdom', 'Dream Guardian'],
  // This is an object method
  getBooks() {
    console.log('This method will return all books, the books property');
  },
  // This is an object method
  addBook(bookName) {
    console.log('This method will add a new book to the books property');
  },
};

// Method calls
bookShelf.getBooks();
bookShelf.addBook('New book');

/*
╔════════════════════════════════════════╗
║         THIS OBJECT                    ║
╚════════════════════════════════════════╝
*/

const bookShelf2 = {
  books: ['The Last Kingdom'],
  getBooks() {
    return this.books;
  },
  addBook(bookName) {
    this.books.push(bookName);
  },
  removeBook(bookName) {
    const bookIndex = this.books.indexOf(bookName);
    this.books.splice(bookIndex, 1);
  },
};

console.log(bookShelf2.getBooks()); // ["The Last Kingdom"]
bookShelf.addBook('The Mist');
bookShelf.addBook('Dream Guardian');
console.log(bookShelf2.getBooks()); // ['The Last Kingdom', 'The Mist', 'Dream Guardian']
bookShelf.removeBook('The Mist');
console.log(bookShelf2.getBooks()); // ['The Last Kingdom', 'Dream Guardian']

/*
╔════════════════════════════════════════╗
║         CREATE METHOD                  ║
╚════════════════════════════════════════╝
*/

const animal = {
  legs: 4,
};
const dog = Object.create(animal);
dog.name = 'Mango';

console.log(dog); // {name: 'Mango'}
console.log(dog.name); // 'Mango'
console.log(dog.legs); // 4

/*
╔════════════════════════════════════════╗
║         HASOWNPROPERTY METHOD          ║
╚════════════════════════════════════════╝
*/

const book = {
  title: 'The Last Kingdom',
  author: 'Bernard Cornwell',
  genres: ['historical prose', 'adventure'],
  rating: 8.38,
};

for (const key in book) {
  // If this property is own, execute the if body
  if (book.hasOwnProperty(key)) {
    console.log(key);
    console.log(book[key]);
  }

  // If this is an inherited property, do nothing
}

/*
╔════════════════════════════════════════╗
║         KEYS METHOD                    ║
╚════════════════════════════════════════╝
*/

const keys = Object.keys(book);
console.log(keys); // ['title', 'author', 'genres', 'rating']

for (const key of keys) {
  // Key
  console.log(key);
  // Property value
  console.log(book[key]);
}

/*
╔════════════════════════════════════════╗
║         VALUES METHOD                  ║
╚════════════════════════════════════════╝
*/

const values = Object.values(book);
console.log(values); // ['The Last Kingdom', 'Bernard Cornwell', 8.38]

const goods = {
  apples: 6,
  grapes: 3,
  bread: 4,
  cheese: 7,
};

const goodsValues = Object.values(goods); // [6, 3, 4, 7]

let total = 0;

for (const value of goodsValues) {
  total += value;
}

console.log(total); // 20

/*
╔════════════════════════════════════════╗
║         ENTRIES METHOD                 ║
╚════════════════════════════════════════╝
*/

const entries = Object.entries(book);
console.log(entries);
// [["title", "The Last Kingdom"], ["author", "Bernard Cornwell"], ["rating", 8.38]]
