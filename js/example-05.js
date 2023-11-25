// Example 5 - operation Spread
// Extend the createContact(partialContact) function so that it returns a new contact object with id and createdAt properties added, as well as list with value "default" if there is no such property in partialContact.

// Pseudocode for implementation without spread operator
// 1. Create a new object for the contact
// 2. Set the list property to 'default' if it's not provided in partialContact and assign it as a property of newContact object
// 3. Iterate over the properties of partialContact to include them in the newContact
// 4. Return the newContact
function createContact(partialContact) {
  // Create a new object for the contact
  let newContact = {
    id: generateId(),
    createdAt: Date.now(),
  };

  // Set the list property to 'default' if it's not provided in partialContact
  if (!partialContact.list) {
    newContact.list = 'default';
  }

  // Manually add properties from partialContact to newContact
  for (const key in partialContact) {
    newContact[key] = partialContact[key];
  }

  return newContact;
}

function generateId() {
  return '_' + Math.random().toString(36).substr(2, 9);
}

let partialContactExample = {
  name: 'John Doe',
  email: 'johndoe@example.com',
  phone: '1234567890',
};

let newContact = createContact(partialContactExample);
console.log(newContact);

// Pseudocode for answers
// 1. Recreate the new contact object by spreading partial contact in the return object of createContact function

// ======================== ANSWERS BELOW ========================= //

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

function foo({ username } = {}) {
  console.log(username);
}

foo();
