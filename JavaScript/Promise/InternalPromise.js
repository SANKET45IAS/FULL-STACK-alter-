function MyPromise(executor) {
    let onResolve, onReject;
    let isResolved = false, isRejected = false;
    let value;

    // 'resolve' function
    function resolve(result) {
        if (!isResolved && !isRejected) {
            isResolved = true;
            value = result;
            if (onResolve) onResolve(value); // Execute callback if already set
        }
    }

    // 'reject' function
    function reject(error) {
        if (!isResolved && !isRejected) {
            isRejected = true;
            value = error;
            if (onReject) onReject(value); // Execute callback if already set
        }
    }

    // Execute the provided function
    try {
        executor(resolve, reject);
    } catch (error) {
        reject(error);
    }

    // 'then' method
    this.then = function(callback) {
        if (isResolved) {
            callback(value);  // If resolved, execute immediately
        } else {
            onResolve = callback;  // Otherwise, store callback for later execution
        }
        return this;
    };

    // 'catch' method
    this.catch = function(callback) {
        if (isRejected) {
            callback(value);  // If rejected, execute immediately
        } else {
            onReject = callback;  // Otherwise, store callback for later execution
        }
        return this;
    };
}

// Example Usage:
let p = new MyPromise((resolve, reject) => {
    setTimeout(() => resolve("Success!"), 1000); // Resolve after 1 second
});

p.then((message) => {
    console.log(message); // Output: "Success!" after 1 second
}).catch(error => console.log(error));

// Another case: calling `then` after resolution
setTimeout(() => {
    p.then(msg => console.log("Late Then:", msg)); // Should still print: "Late Then: Success!"
}, 2000);
