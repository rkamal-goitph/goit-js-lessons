// 1. The execution of the asynchronous function is suspended when the interpreter sees await
// 2. Each subsequent request waits for the previous one to be completed

const fetchUsers = async () => {
  const baseUrl = 'https://jsonplaceholder.typicode.com';
  const firstResponse = await fetch(`${baseUrl}/users/1`);
  const secondResponse = await fetch(`${baseUrl}/users/2`);
  const thirdResponse = await fetch(`${baseUrl}/users/3`);

  const firstUser = await firstResponse.json();
  const secondUser = await secondResponse.json();
  const thirdUser = await thirdResponse.json();

  console.log(firstUser, secondUser, thirdUser);
};

fetchUsers();

// 3. This is fine when requests depend on each other, i.e. the next one uses the result of the previous one.
// 4. For requests that are completely independent, you need to run them in parallel.

// const fetchUsers = async () => {
//   const baseUrl = 'https://jsonplaceholder.typicode.com';
//   const userIds = [1, 2, 3];

//   // 1. Create an array of promises
//   const arrayOfPromises = userIds.map(async userId => {
//     const response = await fetch(`${baseUrl}/users/${userId}`);
//     return response.json();
//   });

//   // 2. Run all promises in parallel and wait for their completion
//   const users = await Promise.all(arrayOfPromises);
//   console.log(users);
// };

// fetchUsers();
