// Change text and CSS style
document.getElementById('changeTextBtn').addEventListener('click', function () {
    const textElement = document.getElementById('dynamicText');
    textElement.textContent = "Text changed dynamically!";
    textElement.style.color = "green";
    textElement.style.fontWeight = "bold";
    textElement.classList.toggle("highlight");
  });

  // Add or remove an element
  document.getElementById('toggleElementBtn').addEventListener('click', function () {
    const container = document.getElementById('elementContainer');
    const existingElement = document.getElementById('newElement');

    if (existingElement) {
      container.removeChild(existingElement);
    } else {
      const newElem = document.createElement('p');
      newElem.id = 'newElement';
      newElem.textContent = "I'm a new element added dynamically!";
      newElem.style.color = "red";
      container.appendChild(newElem);
    }
  });