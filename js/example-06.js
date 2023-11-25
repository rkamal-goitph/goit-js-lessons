// Example 6 - Operation rest
// Write a transformUsername(user) function to return a new object with fullName property instead of firstName and lastName.

// Pseudocode for implementation without rest operator
// 1. Create new user object for concatenating firstName and lastName
// 2. Iterate over the object keys to include non existing keys coming from the function user parameter
function transformUsername(user) {
  let newUser = {
    fullName: `${user.firstName} ${user.lastName}`,
  };

  // Copying other properties manually
  for (const key in user) {
    if (key !== 'firstName' && key !== 'lastName') {
      newUser[key] = user[key];
    }
  }

  return newUser;
}

console.log(
  transformUsername({
    id: 1,
    firstName: 'Jacob',
    lastName: 'Mercer',
    email: 'j.mercer@mail.com',
    friendCount: 40,
  })
);

console.log(
  transformUsername({
    id: 2,
    firstName: 'Adrian',
    lastName: 'Cross',
    email: 'a.cross@hotmail.com',
    friendCount: 20,
  })
);

// Pseudocode for answers
// 1. Rest the nonexisting parameters in the function parameter object
// 2. Return the concatenated firstName and lastName along with the spread additional properties

// ======================== ANSWERS BELOW ========================= //

// Solution
function transformUsername({ firstName, lastName, ...otherProps }) {
  return {
    fullName: `${firstName} ${lastName}`,
    ...otherProps,
  };
}

console.log(
  transformId({
    id: 1,
    firstName: 'Jacob',
    lastName: 'Mercer',
    email: 'j.mercer@mail.com',
    friendCount: 40,
  })
);

console.log(
  transformId({
    id: 2,
    firstName: 'Adrian',
    lastName: 'Cross',
    email: 'a.cross@hotmail.com',
    friendCount: 20,
  })
);
