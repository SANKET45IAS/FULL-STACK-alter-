let arr=[1,2,3,4,true,"Sanket"];
let arr2=new Array(1,2,3,4,true,"Sanket");

let findnm=(a)=>{
    for (let i = 0; i < a.length; i++) {
        if (a[i]=="Sanket") {
            console.log("Sanket Is Present");
        }
    }
}

arr.findnm = findnm; // Assign function to the array object
arr.findnm(arr); // ✅ Now it works

arr.map((num) => console.log(num * 2));

// Array.prototype.findnm = function() {
//     for (let i = 0; i < this.length; i++) {
//         if (this[i] == "Sanket") { this refer to cureent array object
//             console.log("Sanket Is Present");
//         }
//     }
// };

// arr.findnm(); // ✅ Works for any array now!
