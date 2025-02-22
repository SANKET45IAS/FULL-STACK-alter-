try {
    console.log("First");
    console.log(x); // ❌ This will cause an error (x is not defined)
    console.log("Last"); // ❌ This will NOT execute due to the error
} catch (error) {
    console.log("Error....");
    console.log(error.value="x not defined");
} finally {
    console.log("Last"); // ✅ This will always run
}
