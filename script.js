// Select elements
const boxes = document.querySelectorAll('.box');
const heading = document.getElementById('heading');
const button = document.getElementById('greetBtn');
const input = document.getElementById('nameInput');

// Change box color on click
boxes.forEach(box => {
    box.addEventListener('click', () => {
        const color = box.getAttribute('data-color');
        box.style.backgroundColor = color;
    });
});

// Change greeting text
button.addEventListener('click', () => {
    const name = input.value.trim();

    if (name === "") {
        heading.textContent = "Hello";
    } else {
        heading.textContent = `Hello, ${name}`;
    }
});