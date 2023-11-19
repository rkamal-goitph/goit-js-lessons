/*
╔════════════════════════════════════════╗
║         for ...in LOOP                 ║
╚════════════════════════════════════════╝
*/

const book = {
  title: 'The Last Kingdom',
  author: 'Bernard Cornwell',
  genres: ['historical prose', 'adventure'],
  rating: 8.38,
};

for (const key in book) {
  // Key
  console.log(key);
  // The property value with this key
  console.log(book[key]);
}
