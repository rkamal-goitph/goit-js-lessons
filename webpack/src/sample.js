export const sampleRun = () => {
  const paragraph = document.createElement("p");
  paragraph.textContent = "This paragraph is inserted using webpack";

  const app = document.querySelector("#root");
  app.append(paragraph);
};
