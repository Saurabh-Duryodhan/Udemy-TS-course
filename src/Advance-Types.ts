// type Admin = {
//     name: string;
//     privileges: string[];
// }

// type Employee = {
//     name: string;
//     startDate: Date;
// }

// type ElevetedEmployee = Admin & Employee; 
// // Here we used intersection of two types one is Admin and another one is Employee for that we used '&' symbol
// const e1: ElevetedEmployee = {
//     name: "Max well",
//     privileges: ["Create-server"],
//     startDate: new Date(), 
// }

// console.log(e1);


interface Admin {
    name: string;
    privileges: string[];
}

interface Employee{
    name: string;
    startDate: Date;
}

interface ElevatedEmployee extends Admin, Employee{}
const e1: ElevatedEmployee = {
name: "John Doe",
privileges: ["car, hospitals, home, etc"],
startDate: new Date()
}

console.log(e1)