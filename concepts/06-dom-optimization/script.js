window.onload = function () {
  const container = document.getElementById('container');
  const repaintButton = document.getElementById('repaintButton');
  const reflowButton = document.getElementById('reflowButton');

  repaintButton.addEventListener('click', function () {
    // This will cause a repaint as it changes the appearance but not layout
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
      box.style.backgroundColor = 'green';
    });
  });

  reflowButton.addEventListener('click', function () {
    // This will cause a reflow as it changes the content and potentially the layout
    for (let i = 0; i < 3; i++) {
      const newBox = document.createElement('div');
      newBox.className = 'box';
      container.appendChild(newBox);
    }
  });

  // Optimizing for reflow
  // Instead of appending each box individually, which causes multiple reflows,
  // We can use a DocumentFragment to minimize reflows.
  const optimizedReflow = function () {
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < 3; i++) {
      const newBox = document.createElement('div');
      newBox.className = 'box';
      fragment.appendChild(newBox);
    }
    container.appendChild(fragment);
  };

  reflowButton.addEventListener('click', optimizedReflow);
};
