// Get the counter element
const counterElement = document.getElementById('counter');

// Initial counter value
let counterValue = 0;

// Function to update the counter value and display it
function updateCounter() {
    counterElement.textContent = counterValue;
}

// Function to handle increment button click
function increment() {
    counterValue++;
    updateCounter();
}

// Function to handle decrement button click
function decrement() {
    counterValue--;
    updateCounter();
}