const postsContainer = document.getElementById('js-posts-container');
const savePostButton = document.getElementById('js-save-post');
const titleInput = document.getElementById('js-title-input');
const bodyInput = document.getElementById('js-body-input');

// async function fetchPosts() {
//   const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const posts = await response.json(); // Correctly await the parsing of the JSON
//   console.log(posts);
// }

// function fetchPosts() {
//   const resolvedResponse = fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(posts => console.log(posts));
// }

// function displayFetchedPosts() {
//   fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'GET',
//   })
//     .then(response => response.json())
//     .then(posts => {
//       postsContainer.innerHTML = '';
//       posts.forEach(post => {
//         const postElement = document.createElement('div');
//         postElement.className = 'post-card';
//         postElement.innerHTML = `
//                         <h3 class="post-title">${post.title}</h3>
//                         <p class="post-body">${post.body}</p>
//                         <button class="post-card-button edit">Edit</button>
//                         <button class="post-card-button delete">Delete</button>
//                     `;
//         postsContainer.appendChild(postElement);

//         postElement
//           .querySelector('.edit')
//           .addEventListener('click', () => editPost(post.id, postElement));
//         postElement
//           .querySelector('.delete')
//           .addEventListener('click', () => deletePost(post.id));
//       });
//     });
// }

function fetchPosts() {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
      postsContainer.innerHTML = '';
      posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'post-card';
        postElement.innerHTML = `
                        <h3 class="post-title">${post.title}</h3>
                        <p class="post-body">${post.body}</p>
                        <button class="post-card-button edit">Edit</button>
                        <button class="post-card-button delete">Delete</button>
                    `;
        postsContainer.appendChild(postElement);

        postElement
          .querySelector('.edit')
          .addEventListener('click', () => editPost(post.id, postElement));
        postElement
          .querySelector('.delete')
          .addEventListener('click', () => deletePost(post.id));
      });
    });
}

function createPost(title, body) {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: title,
      body: body,
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(response => response.json())
    .then(post => {
      console.log(post);
      fetchPosts(); // Refresh the list after creation
    });
}

function editPost(id, postElement) {
  console.log(`Edit post ${id}`);
}

function deletePost(id) {
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: 'DELETE',
  })
    .then(post => {
      console.log(`we are deleting ${post.id}`);
      fetchPosts(); // Refresh the posts list to reflect deletion
    })
    .catch(error => console.error('Error:', error));
}

savePostButton.addEventListener('click', function () {
  createPost(titleInput.value, bodyInput.value);
});

fetchPosts(); // Initial fetch of posts
// displayFetchedPosts();
