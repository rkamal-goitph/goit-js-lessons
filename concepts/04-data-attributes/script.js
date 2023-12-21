window.onload = function () {
  // Accessing data attributes
  let infoDiv = document.getElementById('info');
  console.log('Name:', infoDiv.dataset.name);
  console.log('Year:', infoDiv.dataset.year);
  console.log('Active:', infoDiv.dataset.active);

  // Function to update data attributes
  function updateData() {
    infoDiv.dataset.name = 'UpdatedChatGPT';
    infoDiv.dataset.year = '2024';
    infoDiv.dataset.active = 'false';
    console.log('Updated Name:', infoDiv.dataset.name);
    console.log('Updated Year:', infoDiv.dataset.year);
    console.log('Updated Active:', infoDiv.dataset.active);
  }

  // Event listener for button
  let updateButton = document.getElementById('updateButton');
  updateButton.addEventListener('click', updateData);
};
