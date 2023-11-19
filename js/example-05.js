// Example 5 - operation Spread
// Extend the createContact(partialContact) function so that it returns a new contact object with id and createdAt properties added, as well as list with value "default" if there is no such property in partialContact.

// Solution
function createContact(partialContact) {
  return {
    list: 'default',
    ...partialContact,
    id: generateId(),
    createdAt: Date.now(),
  };
}

console.log(
  createContact({
    name: 'Mango',
    email: 'mango@mail.com',
    list: 'friends',
  })
);
console.log(
  createContact({
    name: 'Poly',
    email: 'poly@hotmail.com',
  })
);

function generateId() {
  return '_' + Math.random().toString(36).substr(2, 9);
}
