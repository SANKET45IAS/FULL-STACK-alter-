class Human {
    age = 27;
    #weight = 72; // Private field
    height;

    // ✅ Correct constructor
    constructor(age, weight, height) {
        this.age = age;
        this.#weight = weight;
        this.height = height;
    }

    display() {
        return `Age: ${this.age}, Height: ${this.height}, Weight: ${this.#weight}`;
    }
}

// ✅ Create an instance correctly
let Sanket = new Human(19, 80, 173);

// ✅ Call the method correctly
console.log(Sanket.display());
