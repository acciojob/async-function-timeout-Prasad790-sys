//your JS code here. If required.
const btn = document.getElementById("btn");
const output = document.getElementById("output");

// Function to introduce a delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Async function to handle the form submission
const displayMessageAfterDelay = async () => {
    // Retrieve user input values
    const text = document.getElementById("text").value;
    const delayTime = parseInt(document.getElementById("delay").value);

    // Check if the input fields are valid
    if (!text || isNaN(delayTime) || delayTime <= 0) {
        output.textContent = "Please enter valid text and a positive delay.";
        return;
    }

    // Introduce the delay
    await delay(delayTime);

    // Display the user-provided text after the delay
    output.textContent = text;
};

// Add an event listener to the button
btn.addEventListener("click", displayMessageAfterDelay);