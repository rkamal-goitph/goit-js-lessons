/**
 * The URL of the mock API for the to-do list.
 * @type {string}
 */
const URL = 'https://63daa94619fffcd620ceff8c.mockapi.io/api/todos/';

/**
 * Saves a new task to the API using Axios.
 *
 * @param {object} task - The task object to be saved.
 * @returns {Promise} A promise that resolves when the task is successfully saved.
 */
const saveTask = task => {
  console.log('POST');
  // Fetch approach:
  // const options = {
  //   method: "POST",
  //   body: JSON.stringify(task),
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // };
  // return fetch(URL, options);

  // Axios approach:
  return axios.post(URL, task);
};

/**
 * Retrieves all tasks from the API using Axios.
 *
 * @returns {Promise} A promise that resolves with the array of tasks.
 */
const loadTasks = () => {
  console.log('GET');
  // Fetch approach:
  // return fetch(URL).then((res) => res.json());

  // Axios approach:
  return axios.get(URL).then(res => res.data);
};

/**
 * Updates the status of a task in the API using Axios.
 *
 * @param {string} id - The ID of the task to be updated.
 * @param {boolean} status - The new status of the task.
 * @returns {Promise} A promise that resolves when the task is successfully updated.
 */
const updateTask = (id, status) => {
  console.log(`PUT: \n\tid: ${id} \n\tstatus: ${status}`);
  // Fetch approach:
  // const options = {
  //   method: "PUT",
  //   body: JSON.stringify({ isDone: status }),
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // };
  // return fetch(`${URL}/${id}`, options);

  // Axios approach:
  return axios.put(`${URL}/${id}`, { isDone: status });
};

/**
 * Deletes a task from the API using Axios.
 *
 * @param {string} id - The ID of the task to be deleted.
 * @returns {Promise} A promise that resolves when the task is successfully deleted.
 */
const deleteTask = id => {
  console.log(`DELETE id: ${id}`);
  // Fetch approach:
  // const options = {
  //   method: "DELETE",
  // };
  // return fetch(`${URL}/${id}`, options);

  // Axios approach:
  return axios.delete(`${URL}/${id}`);
};

/**
 * Export the functions to be used in other parts of the application.
 */
export { saveTask, loadTasks, updateTask, deleteTask };
