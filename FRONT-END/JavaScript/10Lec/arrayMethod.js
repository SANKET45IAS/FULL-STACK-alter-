let arr = [1, 2, 3, 4, 5];

// 1. push() - Add at the end
arr.push(6);
console.log("push:", arr);

// 2. pop() - Remove last element
arr.pop();
console.log("pop:", arr);

// 3. unshift() - Add at the beginning
arr.unshift(7);
console.log("unshift:", arr);

// 4. shift() - Remove first element
arr.shift();
console.log("shift:", arr);

// 5. indexOf() - Find index
console.log("indexOf 3:", arr.indexOf(3));

// 6. lastIndexOf() - Find last occurrence
console.log("lastIndexOf 2:", arr.lastIndexOf(2));

// 7. includes() - Check if exists
console.log("includes 4:", arr.includes(4));

// 8. slice() - Extract part of array
console.log("slice 1-3:", arr.slice(1, 3));

// 9. splice() - Remove & add elements
arr.splice(2, 1, 9); // Replace element at index 2
console.log("splice:", arr);

// 10. concat() - Merge arrays
let arr2 = [7, 8];
console.log("concat:", arr.concat(arr2));

// 11. forEach() - Loop through array
arr.forEach((num) => console.log("forEach:", num));

// 12. map() - Transform elements
let doubled = arr.map((num) => num * 2);
console.log("map:", doubled);

// 13. filter() - Filter elements
let filtered = arr.filter((num) => num > 3);
console.log("filter:", filtered);

// 14. reduce() - Reduce to a single value
let sum = arr.reduce((res, num) => res + num, 0);//0 is the value use for result inner fuction repeatedly increase the value of res(num is the array use for indexing)
console.log("reduce sum:", sum);

// 15. some() - Check if at least one satisfies
console.log("some > 4:", arr.some((num) => num > 4));

// 16. every() - Check if all satisfy
console.log("every > 0:", arr.every((num) => num > 0));

// 17. find() - Find first matching element
console.log("find > 2:", arr.find((num) => num > 2));

// 18. findIndex() - Find index of first match
console.log("findIndex > 2:", arr.findIndex((num) => num > 2));

// 19. reverse() - Reverse array
console.log("reverse:", arr.reverse());

// 20. sort() - Sort array
console.log("sort:", arr.sort((a, b) => a - b));

// 21. join() - Convert to string
console.log("join:", arr.join("-"));

// 22. fill() - Fill array with value
console.log("fill with 0:", arr.fill(0, 1, 3));

// 23. Array.from() - Convert to array
console.log("Array.from:", Array.from("123"));

// 24. Array.of() - Create array from values
console.log("Array.of:", Array.of(10, 20, 30));
