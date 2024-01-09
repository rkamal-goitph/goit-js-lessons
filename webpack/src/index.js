import { sampleRun } from "./sample.js";

// Create heading node
const heading = document.createElement("h1");
heading.textContent = "Interesting!";

// Append heading node to the DOM
const app = document.querySelector("#root");
app.append(heading);

sampleRun();
