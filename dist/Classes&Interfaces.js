"use strict";
// // Classes and Interfaces
// class MainClass {
//     name: string;
//     private employee: string[] = [] //After desclared as private it can't be accessed directly by other functions
//     constructor(id: string) {
//         this.name = id;
//     }
// // Construction function and this keyword
//     describe(this: MainClass) {
//         console.log(`Username: ${this.name}`)
//     }
// // Private public class
//     AddemployeeFun(employee: string) {
//         this.employee.push(employee)
//     }
//     showEmployeeData (this: MainClass){
//         console.log(this.employee.push.length);
//         console.log(this.employee);
//     }
// }
// const newMainClass = new MainClass("Surabh Duryodhan");
// newMainClass.describe();
// // const accountingCopy = { name:"John Cena", describe: newMainClass.describe }
// // accountingCopy.describe();
// newMainClass.AddemployeeFun("Funtoosh");
// // newMainClass.employee[2] = "This is Complex structure"; // Directly trying to access employees
// newMainClass.showEmployeeData();
// // Inheritances
// class ITDEpartment extends MainClass{
//     constructor(id: string, public admins: string[]) {
//         super(id);
//     }
// }
// console.log(ITDEpartment)
//Inheritance cleared
class Car {
    constructor(c_name, id) {
        this.carName = c_name;
        this.carId = id;
    }
    showCarDetails() {
        console.log(`Car name is ${this.carName} and car has wheels ${this.carId}`);
    }
}
class CarUpdate extends Car {
    constructor(carName, id) {
        super("Lamborghini", id);
        this.ucarId = 11;
        this.ucarUpdatedName = carName;
    }
    ;
    showMyUpdatedCar(c_id) {
        this.ucarId = c_id;
        console.log(`cardId: ${this.ucarId}`);
    }
}
class newCar extends CarUpdate {
    constructor(ucarName, ucarId) {
        super("Mercedise", ucarId);
        this.newCarName = ucarName;
        this.newCarId = ucarId;
    }
    showNewCar() {
        console.log(`This is my new Car: ${this.newCarName}`);
    }
}
const obj1 = new Car("Morris Gariage Hector", 4);
obj1.showCarDetails();
const obj2 = new CarUpdate("Maruti Suzuki", 1);
console.log(obj2);
const obj3 = new newCar("Bridge Carl", 90);
console.log(obj3);
