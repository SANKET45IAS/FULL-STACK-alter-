// 📌 Creating a new Date object (current date & time)
let currentDate = new Date();
console.log("📌 Current Date & Time:", currentDate);

// 📌 Creating a date using specific values
let specificDate = new Date(2025, 1, 14, 12, 30, 0); // Year, Month (0-based), Date, Hours, Minutes, Seconds
console.log("📌 Specific Date (Feb 14, 2025, 12:30 PM):", specificDate);

// 📌 Creating a date from a string (ISO Format)
let isoDate = new Date("2025-02-14T12:30:00Z");
console.log("📌 ISO Date:", isoDate);

// 📌 Working with timestamps
let timestamp = Date.now(); // Get current timestamp (milliseconds since 1970)
console.log("📌 Current Timestamp:", timestamp);

// 📌 Getting individual components of the date
console.log("📌 Year:", currentDate.getFullYear());   // Gets year
console.log("📌 Month:", currentDate.getMonth() + 1); // Months are 0-based, so add 1
console.log("📌 Date:", currentDate.getDate());       // Day of the month (1-31)
console.log("📌 Day of Week:", currentDate.getDay()); // 0 = Sunday, 6 = Saturday
console.log("📌 Hours:", currentDate.getHours());     // 0-23 hours
console.log("📌 Minutes:", currentDate.getMinutes()); // 0-59 minutes
console.log("📌 Seconds:", currentDate.getSeconds()); // 0-59 seconds
console.log("📌 Milliseconds:", currentDate.getMilliseconds()); // 0-999 ms

// 📌 Setting date components
let newDate = new Date();
newDate.setFullYear(2030);  // Change year
newDate.setMonth(5);        // Change month (June, as it's 0-based)
newDate.setDate(20);        // Change day of the month
console.log("📌 Updated Date (June 20, 2030):", newDate);

// 📌 Formatting date into different formats
console.log("📌 toString():", currentDate.toString());         // Full date & time
console.log("📌 toDateString():", currentDate.toDateString()); // Only date
console.log("📌 toTimeString():", currentDate.toTimeString()); // Only time
console.log("📌 toISOString():", currentDate.toISOString());   // ISO format (2025-02-14T12:30:00.000Z)
console.log("📌 toUTCString():", currentDate.toUTCString());   // UTC format
console.log("📌 toLocaleString():", currentDate.toLocaleString()); // Local format
console.log("📌 toLocaleDateString():", currentDate.toLocaleDateString()); // Local date only
console.log("📌 toLocaleTimeString():", currentDate.toLocaleTimeString()); // Local time only

// 📌 Comparing two dates
let date1 = new Date("2025-02-14");
let date2 = new Date("2025-02-15");

if (date1.getTime() < date2.getTime()) {
    console.log("📌 Date1 is earlier than Date2");
} else {
    console.log("📌 Date1 is later than or same as Date2");
}

// 📌 Custom Date Formatting (YYYY-MM-DD)
let formattedDate = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(currentDate.getDate()).padStart(2, '0')}`;
console.log("📌 Custom Formatted Date (YYYY-MM-DD):", formattedDate);


// 📌 Custom Date Formatting (YYYY-MM-DD, Day)
let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let dayOfWeek = daysOfWeek[currentDate.getDay()];

let Day = `${dayOfWeek}`;
console.log("📌Formatted Day: ", Day);
