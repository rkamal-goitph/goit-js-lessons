// Example 6 - Operation rest
// Write a transformUsername(user) function to return a new object with fullName property instead of firstName and lastName.

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
