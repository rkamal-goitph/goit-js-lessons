// ----------------------------ARRAY BASICS--------------------------//
// Array Creation
const clients = ['Mango', 'Poly', 'Ajax'];

// Element Access
// By specifying the element index in brackets, you get its value
console.log(clients[0]); // Mango
console.log(clients[1]); // Poly
console.log(clients[2]); // Ajax

// Element Overriding
clients[0] = 'Kiwi';
clients[1] = 'Pango';
console.log(clients); // ["Kiwi", "Pango", "Ajax"]

// Array Length
const clients = ['Mango', 'Poly', 'Ajax'];
console.log(clients.length); // 3

// Last Element Index
const clients = ['Mango', 'Poly', 'Ajax'];
const lastElementIndex = clients.length - 1;
console.log(lastElementIndex); // 2
console.log(clients[lastElementIndex]); // "Ajax"
