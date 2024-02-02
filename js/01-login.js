// STEP 1: Fetch the token
// This is like logging into Facebook and getting a special key (token) that proves you are authenticated.

const fetchFriends = () => {
  return fetch('my-api.com/me').then(token => {
    console.log(token);
  });
};

// STEP 2: Fetch the user's profile:
// After logging in and getting the key (token), it uses that key to fetch your Facebook profile details.

// const fetchFriends = () => {
//   return fetch('my-api.com/me')
//     .then(token => {
//       return fetch(`my-api.com/profile?token=${token}`);
//     })
//     .then(user => {
//       console.log(user.id);
//     });
// };

// STEP 3: Fetch the user's friends:
// Building on the previous steps, it uses the user ID to find your list of friends on Facebook.

// const fetchFriends = () => {
//     return fetch("my-api.com/me")
//       .then(token => {
//         return fetch(`my-api.com/profile?token=${token}`);
//       })
//       .then(user => {
//         return fetch(`my-api.com/users/${user.id}/friends`);
//       });
//   };

//   fetchFriends()
//     .then(friends => console.log(friends))
//     .catch(error => console.error(error));
