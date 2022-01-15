"use strict";
const showFun = () => console.log('This is next gen code');
showFun();
const addFun = (a, b = 1) => a + b; //Here we provide default parameter in function which is b = 1; Note: Defult parameter should be last parameter in function;
const printAdd = output => console.log(output);
console.log(printAdd(`The addition is ${addFun(20)}`)); // result shows 21 
const button = document.querySelector('button');
if (button)
    button.addEventListener('click', e => console.log(e));
// Spread Operator
// with arrays
const arr = ["samyak", "mahesh", "satish", "bhushan", "vivek"];
console.log(arr);
const names = ["jack", "eminem", "john doe", "Elon musk", ...arr];
console.log(names);
//with objects
const persons = {
    username: 'John devid',
    age: 23,
};
console.log(persons);
const copiedPerson = { ...persons };
//Rest parameters
const adddd = (...numbers) => {
    return numbers.reduce((currentEle, resultEle) => {
        return currentEle + resultEle;
    }, 0);
};
const addedElems = adddd(21, 33, 434, 34, 55, 33, 23);
console.log(addedElems);
// const arrayss = [21, 22, 33, 43, 2, 434, 66];
// const doubleVal=arrayss.map(x => x * 2);
// console.log(doubleVal)
const doubleVal = (...n1) => {
    return n1.filter(x => x % 2 === 0);
};
const mapWithRestOperator = (doubleVal(22, 33, 43, 554, 454, 53, 99, 237));
console.log(`The odd numbers in arrays are: ${mapWithRestOperator}`);
// Arrays and Object Destructuring;
// Array destructuring
const arrayDes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //in array destructuring we can assign array elements to the constant variable
const [n1, n2, n3, ...remainsNumbers] = arrayDes;
console.log(`This is complete destructured array${arrayDes} and \n ${n1}, ${n2} and ${n3} are the constant values from array`);
//Object Destructuring
const cars = {
    carName: 'Morris Garriage Hector',
    wheelerType: 4
};
const { carName } = cars;
console.log(carName);
