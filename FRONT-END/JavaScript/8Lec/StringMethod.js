let str = "   Hello, JavaScript World!   ";

console.log("Original String:", str);

// 1. Trim whitespace
let trimmedStr = str.trim();
console.log("Trimmed:", trimmedStr);

// 2. Get length
console.log("Length:", trimmedStr.length);

// 3. Convert to uppercase
console.log("Uppercase:", trimmedStr.toUpperCase());

// 4. Convert to lowercase
console.log("Lowercase:", trimmedStr.toLowerCase());

// 5. Slice part of string
console.log("Slice (0-5):", trimmedStr.slice(0, 5));

// 6. Substring (similar to slice)
console.log("Substring (0-5):", trimmedStr.substring(0, 5));

// 7. Substr (start at index 7, length 10)
console.log("Substr (7,10):", trimmedStr.substr(7, 10));

// 8. Replace a word
let replacedStr = trimmedStr.replace("JavaScript", "Coding");
console.log("Replaced 'JavaScript' -> 'Coding':", replacedStr);

// 9. Replace all occurrences
let multiReplace = "apple apple banana apple";
console.log(multiReplace);
console.log("Replace all 'apple' -> 'orange':", multiReplace.replaceAll("apple", "orange"));
console.log(multiReplace);


// 10. Split string into an array
let wordsArray = trimmedStr.split(" ");
console.log("Split into array:", wordsArray);

// 11. Join array into a string
console.log("Joined array:", wordsArray.join("-"));

// 12. Check if string includes a word
console.log("Includes 'World':", trimmedStr.includes("World"));

// 13. Check if string starts with
console.log("Starts with 'Hello':", trimmedStr.startsWith("Hello"));

// 14. Check if string ends with
console.log("Ends with 'World!':", trimmedStr.endsWith("World!"));

// 15. Repeat string
console.log("Repeated 3 times:", "Hi! ".repeat(3));

// 16. Find index of a word
console.log("Index of 'World':", trimmedStr.indexOf("World"));

// 17. Find last index of a word
console.log("Last index of 'o':", trimmedStr.lastIndexOf("o"));

// 18. Extract character at index
console.log("Character at index 4:", trimmedStr.charAt(4));

// 19. Extract character code (ASCII)
console.log("Char code at index 4:", trimmedStr.charCodeAt(4));

// 20. Convert character code to letter
console.log("From char code 72:", String.fromCharCode(72));

// 21. Pad start of a string
console.log("Pad start (length 20, '*'):", trimmedStr.padStart(20, "*"));

// 22. Pad end of a string
console.log("Pad end (length 30, '*'):", trimmedStr.padEnd(30, "*"));

// 23. Remove all spaces using regex
console.log("Remove all spaces:", trimmedStr.replace(/\s/g, ""));

// 24. Reverse a string
console.log("Reversed string:", trimmedStr.split("").reverse().join(""));

console.log(str);
