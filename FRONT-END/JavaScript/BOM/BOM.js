// BOM Example: Working with the Browser Object Model

// 1. WINDOW OBJECT (The Global Object)
console.log("Window Width:", window.innerWidth);  // Width of the viewport
console.log("Window Height:", window.innerHeight); // Height of the viewport

// Alert, Confirm, and Prompt are BOM methods
window.alert("Welcome to the BOM Demo!");  // Displays an alert box

let userResponse = window.confirm("Do you like JavaScript?"); // Shows a confirmation dialog
console.log("User's response:", userResponse); // true (OK) or false (Cancel)

let userName = window.prompt("Enter your name:"); // Asks for user input
console.log("User's Name:", userName);

// 2. NAVIGATOR OBJECT (Browser Information)
console.log("Browser Name:", navigator.appName); // Returns browser name (deprecated)
console.log("Browser Version:", navigator.appVersion); // Returns browser version
console.log("User Agent:", navigator.userAgent); // Detailed browser and OS info

// Checking if cookies are enabled
console.log("Cookies Enabled:", navigator.cookieEnabled);

// 3. SCREEN OBJECT (Screen Information)
console.log("Screen Width:", screen.width); // Total screen width
console.log("Screen Height:", screen.height); // Total screen height
console.log("Available Width:", screen.availWidth); // Width available for browser window
console.log("Available Height:", screen.availHeight); // Height available for browser window

// 4. LOCATION OBJECT (URL and Navigation)
console.log("Current URL:", location.href); // Full URL of the page
console.log("Hostname:", location.hostname); // Domain name
console.log("Pathname:", location.pathname); // Path of the file
console.log("Protocol:", location.protocol); // HTTP or HTTPS

// Redirecting to another website after 5 seconds
// setTimeout(() => {
//     location.href = "https://www.google.com";
// }, 5000);

// 5. HISTORY OBJECT (Browser Navigation)
console.log("History Length:", history.length); // Number of pages in session history

// Go back to the previous page
// history.back();

// Go forward to the next page
// history.forward();

// 6. TIMING METHODS (window.setTimeout and window.setInterval)

// setTimeout: Executes a function after a delay
setTimeout(() => {
    console.log("This message appears after 3 seconds");
}, 3000);

// setInterval: Repeats a function at a fixed interval
let count = 0;
let interval = setInterval(() => {
    console.log("Interval Running:", ++count);
    if (count === 5) clearInterval(interval); // Stops after 5 times
}, 1000);
