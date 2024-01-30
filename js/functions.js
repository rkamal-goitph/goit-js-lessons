import { saveTask, loadTasks, updateTask, deleteTask } from './api.js';

// Step 1: Get the input element with the id "myInput".
const myInput = document.getElementById('myInput');
let currentId = 1;

/**
 * Adds a new task to the to-do list.
 */
function addNewTask() {
  // Step 2: Trim and get the value from the input element.
  const inputValue = myInput.value.trim();

  // Step 3: Check if the input value is empty, show an alert, and exit if true.
  if (inputValue === '') {
    alert('You must write something!');
    return;
  }

  // Step 4: Create a new task list item (LI) with the input value.
  createLi(inputValue);

  // Step 5: Clear the input field.
  myInput.value = '';

  // Step 6: Add the new task to the database (API).
  addTaskToDB(inputValue);
}

/**
 * Creates a new list item (LI) element and appends it to the task list.
 *
 * @param {string} text - The text content of the task.
 * @param {boolean} isDone - Indicates whether the task is done.
 * @param {number} id - The unique identifier of the task.
 */
function createLi(text, isDone = false, id = currentId) {
  // Step 7: Create a new LI element.
  const liEl = document.createElement('LI');

  // Step 8: Create a text node with the task text.
  const liText = document.createTextNode(text);

  // Step 9: Append the text node to the LI element.
  liEl.appendChild(liText);

  // Step 10: Set the dataset id attribute of the LI element.
  liEl.dataset.id = id;

  // Step 11: If the task is done, add the "checked" class to the LI element.
  if (isDone) liEl.className = 'checked';

  // Step 12: Append the LI element to the task list (UL).
  myUL.appendChild(liEl);

  // Step 13: Add a close button to the LI element.
  addCloseButton(liEl);
}

/**
 * Adds a close button to a given task list item.
 *
 * @param {HTMLElement} li - The task list item element.
 */
function addCloseButton(li) {
  // Step 14: Create a SPAN element for the close button.
  const span = document.createElement('SPAN');

  // Step 15: Create a text node with the 'x' character.
  const txt = document.createTextNode('\u00D7');

  // Step 16: Set the class name of the SPAN element to "close".
  span.className = 'close';

  // Step 17: Append the text node to the SPAN element.
  span.appendChild(txt);

  // Step 18: Append the SPAN element to the task list item (LI).
  li.appendChild(span);
}

/**
 * Handles the behavior of a task (checking/unchecking or deleting).
 *
 * @param {Event} event - The event object.
 */
function handleTaskBehavior({ target }) {
  // Step 19: Check if the target element is an LI (task item).
  if (target.tagName === 'LI') {
    // Step 20: Toggle the "checked" class of the LI element.
    target.classList.toggle('checked');

    // Step 21: Update the task status in the database (API).
    updateTask(target.dataset.id, target.classList.contains('checked'));
  } else if (target.classList.contains('close')) {
    // Step 22: If the target has the "close" class, remove the parent LI element.
    target.parentNode.remove();

    // Step 23: Delete the task from the database (API).
    deleteTask(target.parentNode.dataset.id);
  }
}

/**
 * Creates a task object and adds it to the database (API).
 *
 * @param {string} text - The text content of the task.
 * @param {boolean} isDone - Indicates whether the task is done.
 */
function addTaskToDB(text, isDone = false) {
  // Step 24: Create a task object with the given text and status.
  const newTask = createTaskObject(text, isDone);

  // Step 25: Save the task to the database (API).
  saveTask(newTask);

  // Step 26: Increment the currentId for unique identifiers.
  currentId += 1;
}

/**
 * Fills the tasks list by loading tasks from the database (API).
 */
function fillTasksList() {
  // Step 27: Load tasks from the database (API).
  loadTasks()
    .then(todos => {
      // Step 28: Iterate through the tasks and create LI elements.
      todos.forEach(({ text, isDone, id }) => createLi(text, isDone, id));
      console.log(todos);
      return todos;
    })
    .then(todos => {
      // Step 29: Set the currentId based on the last task ID.
      currentId =
        todos.length === 0 ? 1 : Number(todos[todos.length - 1].id) + 1;
    });
}

// Step 30: Export the functions to be used in other parts of the application.
export { addNewTask, handleTaskBehavior, fillTasksList };
