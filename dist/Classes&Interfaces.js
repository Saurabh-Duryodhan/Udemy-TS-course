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
//Abstract Classes
// abstract class StreeFighters {
//     constructor(){}
//     move(){}
//     fight(){
//         console.log(`${this.fighter_name} have an special move called ${this.getSpecialAttack()}`)
//     }
//     abstract get fighter_name():string;
//     abstract getSpecialAttack():string;
// }
// class Ryu extends StreeFighters
// {
//     getSpecialAttack(): string{
//         return 'Fire kick'
//     }
//     get fighter_name(): string{
//         return "Ryu"
//     }
// }
// const ryu = new Ryu()
// ryu.fight()
class DMart {
    constructor() { }
    details() {
        console.log(`DMart has ${this.products} numbers of products and ${this.customerName()} is special customer`);
    }
}
class Emall extends DMart {
    customerName() {
        return "John Doe";
    }
    get products() {
        return 5000;
    }
}
const dmartShop = new Emall();
dmartShop.details();
// Singleton and Private constructor
class MobileClass {
    constructor(d) {
        this.data = d;
    }
    static getInstance(d) {
        if (!MobileClass._instance) {
            MobileClass._instance = new MobileClass(d);
        }
        return MobileClass._instance;
    }
}
const Iobj = MobileClass.getInstance("Oneplus Nord 2 5G"); //You are not able to create new keyword.
const Iobj2 = MobileClass.getInstance("IPhone 13");
console.log(Iobj2.data);
console.log(Iobj.data);
let epUser;
epUser = {
    name: "Saurabh Duryodhan",
    age: 24,
    hobby: ["Singing", "Gamming", 'etc'],
    greet(phrase) {
        console.log(`${phrase} ${this.name}`);
    }
};
epUser.greet("Welcome");
