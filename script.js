 // ===== JAVASCRIPT FOR COFFEE WEBSITE =====

// Array of different background colors to cycle through
var backgroundColors = [
    '#f4f4f4',  // Light gray (original)
    '#e8f5e8',  // Light green
    '#fff0e6',  // Light orange
    '#e6f3ff',  // Light blue
    '#f0e6ff',  // Light purple
    '#ffe6f0',  // Light pink
];

// Variable to keep track of current color index
var currentColorIndex = 0;

// Function to change background color
function changeBackgroundColor() {
    // Get the body element using getElementById (we'll add an id to body)
    var bodyElement = document.body;
    
    // Move to next color in the array
    currentColorIndex = currentColorIndex + 1;
    
    // If we've reached the end of the array, go back to the beginning
    if (currentColorIndex >= backgroundColors.length) {
        currentColorIndex = 0;
    }
    
    // Change the background color
    bodyElement.style.backgroundColor = backgroundColors[currentColorIndex];
    
    // Optional: Show an alert to demonstrate JavaScript is working
    // You can remove this line if you don't want the alert
    alert('Background color changed! 🎨');
}

// Function that runs when the page loads
function pageLoadedMessage() {
    console.log('Coffee website loaded successfully! ☕');
}

// Wait for the page to load completely, then run our function
window.onload = function() {
    pageLoadedMessage();
    
    // You can add more functions here that should run when page loads
    console.log('Welcome to Coffee Paradise!');
};

// Additional function to demonstrate basic JavaScript
function showWelcomeMessage() {
    var userName = prompt('What is your name?');
    if (userName) {
        alert('Welcome to Coffee Paradise, ' + userName + '! ☕');
    }
}

// Uncomment the line below if you want to show welcome message when page loads
// showWelcomeMessage();