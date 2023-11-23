/*
╔════════════════════════════════════════╗
║            PARAMETER OBJECT            ║
╚════════════════════════════════════════╝
*/

// Definition: Wraps multiple function parameter in one object
// Applications:
// 1. Organizing clutter from multiple arguments

// ====================================Example 1====================================

function doStuffWithBook(title, numberOfPages, downloads, rating, public) {
  // Doing something with parameters
  console.log(title);
  console.log(numberOfPages);
  // And so on
}

// ❌ What is 736? What is 10283? What is true?
doStuffWithBook('The Last Kingdom', 736, 10283, 8.38, true);

// ====================================Example 2====================================

function doStuffWithBook(book) {
  // Doing something with object properties
  console.log(book.title);
  console.log(book.numberOfPages);
  // And so on
}

// ✅ Everything is clear
doStuffWithBook({
  title: 'The Last Kingdom',
  numberOfPages: 736,
  downloads: 10283,
  rating: 8.38,
  isPublic: true,
});

function doStuffWithBook(book) {
  const { title, numberOfPages, downloads, rating, isPublic } = book;
  console.log(title);
  console.log(numberOfPages);
  // And so on
}

function doStuffWithBook({
  title,
  numberOfPages,
  downloads,
  rating,
  isPublic,
}) {
  console.log(title);
  console.log(numberOfPages);
  // And so on
}
