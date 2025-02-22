class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError";
    }
}

try {
    let marks = 105;
    if (marks > 100) {
        throw new CustomError("Marks cannot be greater than 100!");
    }
    console.log("Valid Marks");
} catch (error) {
    console.log(`${error.name}: ${error.message}`);
}
