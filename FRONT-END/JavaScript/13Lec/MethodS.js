function SayHello(name="Virat") {
    console.log(`Hello ${name}, How are You?`);
    return `Hello ${name}, How are You?`;
}
let Say2=SayHello;
Say2("ROHIT")

let methodCall = {
    a: 5,
    add: function (b) {
        return this.a + b;
    },
    Greet: SayHello ,// Store function reference (not calling it)
    callF: function(f){
        f();
    }
};

console.log(methodCall.add(4)); // Output: 9
methodCall.Greet("Sanket");       // Output: Hello John, How are You?

console.log(methodCall.callF(SayHello));//SayHello() not possible because it is not a function f is a variable inside a method it's treated as fuction


