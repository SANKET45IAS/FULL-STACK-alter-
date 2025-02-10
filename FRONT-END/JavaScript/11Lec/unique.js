let Candidate2023=Symbol("SANKET SIDHIVINAYAK");
let redg=Symbol(2341019465);
let age=20;
Candidate2023={
    Name:"Sanket Sidhivinayak",
    [redg]:9465,
    [age]:19,
}
console.log(Candidate2023);
console.log(Candidate2023[redg]);
console.log(typeof Candidate2023[redg]);
// No need to write in the form of ["redg"] because redg is a variable now, ot a string so simple call it without double quote like:[redg] 

// console.log(Candidate2023[age]);
// return undefined when simply written age in the obj in place of [age] because compiler confuse which value want to shown because of the scope of variable concept

// console.log(Candidate2023["age"]);
// return undefined when simply written [age] in the obj in place of age because now it become a variable not a ket of string datatype 

console.log(Candidate2023[age]);//Now it Work
