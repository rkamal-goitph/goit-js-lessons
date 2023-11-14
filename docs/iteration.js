// ----------------------------ARRAY ITERATION-------------------------//
// For...Of Loop
// This is how we used to create a for loop
const clients = ['Mango', 'Ajax', 'Poly'];

for (let i = 0; i < clients.length; i += 1) {
  console.log(clients[i]);
}

// This is the shorthand version of for loop for array iteration
for (const variable of iterable) {
  // loop body
}

// Example 1
for (const client of clients) {
  console.log(client);
}

// Example 2
const string = 'javascript';

for (const character of string) {
  console.log(character);
}

// Break and Continue Statements
const clientNameToFind = 'Poly';
let message;

// Example 1
for (const client of clients) {
  // At each iteration, check if the array element matches
  // client's name. If it matches, then log a message
  // and make a break so as not to look further
  if (client === clientNameToFind) {
    message = 'Client name exists in the database!';
    break;
  }

  // If no match is found, create a message saying that there is no such a name
  message = 'Client name does not exist in the database!';
}

console.log(message); // "Client name exists in the database!"

// Example 2
const clientNameToFind2 = 'Poly';
let message2 = 'Client name does not exist in the database!';

for (const client of clients) {
  if (client === clientNameToFind2) {
    message2 = 'Client name exists in the database!';
    break;
  }
  // If it does not match, then do nothing at this iteration
}

console.log(message2); // Client name exists in the database!
