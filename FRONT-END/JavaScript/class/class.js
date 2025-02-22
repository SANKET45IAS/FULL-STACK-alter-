class Human {
    age=19;
    #weigth=72;
    height;
    
    eating(){
        console.log("I am Eating");
    }

    running(nm){
        console.log(`${nm} is Running`);
    }

    getWeigth(){
        return this.#weigth;
    }

    modifyWeight(val){
        this.#weigth=val;
    }
}
const Sanket=new Human();
console.log(Sanket.eating());
console.log(Sanket["running"]("Sanket"));
console.log(Sanket.age);
console.log("Weight: ",Sanket["weigth"]);
console.log("Weight: ",Sanket.getWeigth());
// We can't directly access the weigth becaus it is private so we need getter method


console.log(`Height ${Sanket.height}`);
Sanket.height=173;
Sanket["height"]=168;
console.log(`Height ${Sanket.height}`);


// Output
// I am Eating
// undefined
// Sanket is Running
// undefined
// 19
// Weight:  undefined
// Weight:  72
// Height undefined
// Height 168