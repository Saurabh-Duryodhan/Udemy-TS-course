// String Type
function greet(uName: string, lName: string) {
    console.log(`First name is ${uName} and last name is: ${lName}`)
}
greet("Saurabh", "Duryodhan")


// Number Type
function addition(num1: number, num2: number) {
    console.log(num1 + num2)
}             
addition(22, 33);


// Boolean Type
function checkVerifiedUser(auth: boolean) {
    if (auth == true) {
        console.log(`User logged in`)
    }
    else {
        console.log(`User not authorized`)
    }
}
checkVerifiedUser(false);


// Object Type
function objectUser(user: { username: string, age: number, isSignedUp: boolean }) {
    console.log(user)
}
objectUser({ "username": "Saurabh Duryodhan", "age": 24, "isSignedUp": true })


// Nested Object Types
const person: { user: string, email: string, mobile: number, tags: string[], friends: {}} = {
    user: "Saurabh Duryodhan",
    email: "duryodhanrocks@gmail.com",
    mobile: +917798655710,
    tags: ["Music producer", "Fullstack developer"],
    friends: {1: "Mahesh Chalakh", 2: "Pramit Bhagat", 3: "Suryakant Chavhan", 4: "Bhushan Tidke", 5: "Satish Dhondiparage"} 
}
console.log(person.friends)


// Array Type
let bankAccount: (string|number|boolean|object)[] = [{ "username": "Saurabh Duryodhan", "Account number": 1234567890, "IFSC code": "SBIN100023678726" }, "State Bank Of India", 2567265, true, ["transactions"]]
console.log(bankAccount)


// Tuple Type
let user: [number, string] = [1, "Snoop Dogg"] //The array with fixed lenght and type should be called tuple and types are defined inside the array;
console.log(user)


// Enum Type
enum Gender {MALE = "male", FEMALE = "female" }
const auth_user: (number|string|object)[] = [12, "John Doe", `Gender: ${Gender.MALE}`];
console.log(auth_user)


// Union Type
function unioTypeExample(input1: number | string, input2: number | string) {
    if (typeof input1 === "number" && typeof input2 === "number") {
        const addition = input1 + input2;
        console.log(`The addition is ${addition}`);
    } else { 
        const concatString = `${input1.toString()} ${input2.toString()}`;
        console.log(`Concatenated string is looks like: ${concatString}`)
    }
}
unioTypeExample("John", "david");


// Literal Type
function combine(inpt1: string | number, inpt2: string | number, resultConversion: 'as-number' | 'as-text') { 
    let result;
    if (typeof inpt1 === 'number' && typeof inpt2 === 'number' || resultConversion === 'as-number') {
        result = +inpt1 + +inpt2;
    }
    else { 
        result = `${inpt1.toString()} ${inpt2.toString()}`;
    }
    return result; //returns the result out of the function
}
const combinedResultAsText = combine("Surabh", "duryodhan", 'as-text')
console.log(`This is result for text ${combinedResultAsText}`)

const combunedResultAsNumber = combine(22.4324, 32, 'as-number');
console.log(`This is result for Number ${combunedResultAsNumber}`)


// Aliases Type or Custom Type
type inputNuber = number;
type inputString = string;
function aliasesFun(inptsNum: inputNuber, inptsStr: inputString) { 
    let strVal = inptsStr;
    let numVal = inptsNum;
    return `retuning string value using Alias ype or Custom Type: ${strVal} \n returning number value using Alias Type or Custom Type:: ${numVal}`
}
const callAlias = aliasesFun(29, "John Doe");
console.log(`${callAlias}`);

type carType = 'premium' | 'local';
type carName = string;
function carGarage(myCar: carName, myCarType: carType) {
    let showCarResult;
    if (myCarType === 'premium') {
        showCarResult = `Congrats \n Your car name is ${myCar} and you have ${myCarType} features with it.`
        return showCarResult;
    } else { 
        showCarResult = `Ooops\n Your car name is ${myCar} and your car have ${myCarType} features with it.`
        return showCarResult;
    }
}

const localCar = carGarage("Tata nano", 'local');
console.log(localCar);

const premiumCar = carGarage("Lamborghini", 'premium');
console.log(premiumCar);


//Function Return Types & Void
function add(n1: number, n2: number) { 
    return n1 + n2;
}

function printResult(num1: number,  num2: number) {  //Here void type used to return nothing
    console.log(`Result ${num1 + num2}`)
}
printResult(add(2232, 3232), 7777);

//Function as Type
function parentFun(nm1: number, nm2: number) {
    return nm1 + nm2
}
let combineFunctionAsType: Function;
combineFunctionAsType = parentFun; //Here i tried two functions as type. if i assign type printResult then it will show undefined because it doen't satified the condition. 
console.log(combineFunctionAsType(22, 56));


//Function type & Callbacks
function callBackFun(cnum1: number, cnum2: number, cb: (res: number) => void) { 
    const result = cnum1 + cnum2;
    return cb(result);
}

callBackFun(22, 323, (res) => {
    console.log(res)
    return true;
})


// The "Unknown" Type
let uInpt: unknown; 
let child: string;
uInpt = 83987;
//child = uInput;  //This error occurs because unknown type is not assignable.
if (typeof uInpt === "string") {
    console.log(`Hey welcome ${uInpt}`);
}
else {
    console.log(`Sorry you are unknown person to me`);
}


// Never Type
function generateError(message: string, code: number): never { 
    if (code === 201) { 
        throw {message, errorCode: code}
    }
    else {
        throw{message, errorCode: code}
    }
}
let notCreated = generateError("Failed to create document", 423);
// let created = generateError("Document created successfully", 201);