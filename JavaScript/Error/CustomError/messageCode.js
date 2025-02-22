try {
    let balance = -500;
    if (balance < 0) {
        throw { message: "Balance cannot be negative!", code: 108 };
    }
    console.log("Transaction Successful");
} catch (error) {
    console.log(`Error ${error.code}: ${error.message}`);
}
