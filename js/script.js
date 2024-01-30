import { addNewTask, handleTaskBehavior, fillTasksList } from './functions.js';

// Step 1: Get the button element with the id "addBtn".
const addBtn = document.getElementById('addBtn');

// Step 2: Get the unordered list element with the id "myUL".
const myUL = document.getElementById('myUL');

// Step 3: Add a click event listener to the "Add" button, calling the addNewTask function.
addBtn.addEventListener('click', addNewTask);

// Step 4: Add a click event listener to the task list (UL), calling the handleTaskBehavior function.
myUL.addEventListener('click', handleTaskBehavior);

// Step 5: Add a DOMContentLoaded event listener to the window, calling the fillTasksList function.
window.addEventListener('DOMContentLoaded', fillTasksList);

// JSDoc: Explanation of the script's initialization and event listeners.
/**
 * Initializes the script by setting up event listeners for adding tasks, handling task behavior,
 * and filling the tasks list on DOMContentLoaded.
 * @event addNewTask - Click event on the "Add" button triggers the addNewTask function.
 * @event handleTaskBehavior - Click event on the task list triggers the handleTaskBehavior function.
 * @event fillTasksList - DOMContentLoaded event triggers the fillTasksList function.
 */
