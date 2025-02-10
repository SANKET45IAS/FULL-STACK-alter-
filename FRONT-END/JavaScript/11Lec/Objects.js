// Object Literal
let JSUser = {
    name: "Sanket",
    redg: 9465,
    44: "Lucky Number",
    "Topper": true, 
    lastLogin: ["Monday", "Wednesday", "Thursday"],
    
    greet:function() {
        console.log(`Welcome to the world of coding ${this.name}`);//this.name refers to the parent object name key

    },

    UserPersonal: {
        email: "sanket45nayak@gmail.com",
        password: "xyz67"
    }
};

//Adding age as a key to the object
let UserAge=20;
JSUser[UserAge]=19;//'19'(value) is the value of key UserAge variable value '20'(key)
JSUser.age=19;//. method to add value
JSUser["Birth"]="31/03/2005";//[] meethod to add value 'str' key
JSUser[45]="Rohit Sharma";//'number' key


// Whole Object Declaration
console.log(JSUser);
/*Output
{
  '20': 20,
  '44': 'Lucky Number',
  '45': 'Rohit Sharma',
  name: 'Sanket',
  redg: 9465,
  Topper: true,
  lastLogin: [ 'Monday', 'Wednesday', 'Thursday' ],
  greet: [Function: greet],
  UserPersonal: { email: 'sanket45nayak@gmail.com', password: 'xyz67' },
  age: 19,
  Birth: '31/03/2005'
}
*/

console.log(JSUser["name"]);
// console.log(JSUser.44); Not working 
console.log(JSUser[44]); 
console.log(JSUser["Topper"]);//These way more prefered
// console.log(JSUser.Topper);This way also work 
/*Output
Sanket
Lucky Number
true
*/

// Function Declaration
JSUser.greet();
/*Output
Welcome to the world of coding
*/

// Array Declaration
console.log(JSUser["lastLogin"][2]);
console.log(JSUser["lastLogin"].at(1));//In these way I use more method in the array
console.log(JSUser.lastLogin.at(0));//Here, also I use more method in the array
/*Output
Thursday
Wednesday
Monday
*/

// Nested Object
console.log(JSUser.UserPersonal.email);
console.log(JSUser["UserPersonal"]["password"]);
/*Output
sanket45nayak@gmail.com
xyz67
*/
