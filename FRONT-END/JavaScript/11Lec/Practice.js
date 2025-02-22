let student = {
    name: "Sanket Sidhivinayak",
    age: 19,
    address: {
        city: "Mumbai",
        state: "Maharashtra",
        country: "India",
        pincode: {
            code: 400001,
            area: "South Mumbai",
        }
    },
    academics: {
        subjects: {
            math: 90,
            physics: 85,
            chemistry: 88,
        },
        grades: {
            semester1: "A",
            semester2: "A+",
        }
    },
    getDetails: function() {
        return `${this.name} lives in ${this.address.city}, scored ${this.academics.subjects.math} in Math.`;
    }
};

// Accessing 3rd level properties
console.log(student.addressz.pincode.code);  // 400001
console.log(student.academics.subjects.chemistry);  // 88
console.log(student.academics.grades.semester2);  // "A+"

// Calling the method
console.log(student.getDetails()); 
// Output: "Sanket Sidhivinayak lives in Mumbai, scored 90 in Math."
