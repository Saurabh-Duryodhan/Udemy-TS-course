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
  carName;
  carId;
  constructor(c_name: string, id: number) {
    this.carName = c_name;
    this.carId = id;
  }
  showCarDetails() {
    console.log(`Car name is ${this.carName} and car has wheels ${this.carId}`);
  }
}
class CarUpdate extends Car {
  ucarId;
  ucarUpdatedName;
  constructor(carName: string, id: number) {
    super("Lamborghini", id);
    this.ucarId = 11;
    this.ucarUpdatedName = carName;
  }
  showMyUpdatedCar(c_id: number) {
    this.ucarId = c_id;
    console.log(`cardId: ${this.ucarId}`);
  }
}

class newCar extends CarUpdate {
  newCarName;
  newCarId;
  constructor(ucarName: string, ucarId: number) {
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

abstract class DMart {
  constructor() {}
  details() {
    console.log(
      `DMart has ${
        this.products
      } numbers of products and ${this.customerName()} is special customer`
    );
  }
  abstract get products(): number;
  abstract customerName(): string;
}

class Emall extends DMart {
  customerName(): string {
    return "John Doe";
  }
  get products(): number {
    return 5000;
  }
}
const dmartShop = new Emall();
dmartShop.details();

// Singleton and Private constructor
class MobileClass {
  private static _instance: MobileClass;
  data: string;
  private constructor(d: string) {
    this.data = d;
  }

  static getInstance(d: string) {
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

// class Fridge{
//   fridgeName: string;
//   /*to create class instance you need wrote it like this
//       private static instance: Fridge;
//   */
//  private static instance : Fridge;
//   private constructor(f_name: string){
//     this.fridgeName = f_name;
//   }

//   static getFridgeName(f_name: string){
//     if(!Fridge.instance){
//       Fridge.instance = new Fridge(f_name);
//     }
//     return Fridge.instance;
//   }
// }
// const myFridge3 = Fridge.getFridgeName("LG");
// const myFridge = Fridge.getFridgeName("Godrej");
// const myFridge2 = Fridge.getFridgeName("Samsung");
// console.log(myFridge.fridgeName)
// console.log(myFridge2.fridgeName)
// console.log(myFridge3.fridgeName)

// Interfaces

interface Person {
  name: string;
  age: number;
  hobby: string[];
  greet(phrase: string):void;
}

let epUser: Person;
epUser = {
  name: "Saurabh Duryodhan",
  age: 24,
  hobby: ["Singing", "Gamming", 'etc'],
  greet(phrase: string){
    console.log(`${phrase} ${this.name}`)
  }
}
epUser.greet("Welcome")