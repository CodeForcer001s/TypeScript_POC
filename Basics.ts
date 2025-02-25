console.log("Hello world");
let user = {name:"Jegannath",age:20};
let username :string = user.name;
let userage :number = user.age;
let userId: number = 3124.22243065;
userId.toFixed();
// Not a good practice however we never really need to explicitly define the types... TS overuse it is..
let isLoggedIn: boolean = false;

function getName(stringy :String){ 
    // in function params we mention the types so as to prevent setting up an "any" on it and thus enforce ts supremacy
    return stringy;
}
let thorium : any;
thorium = getName("poda punda mavane");
console.log(thorium)

// default value set up in params
function isSignedUp(name: string, email:string, upornot: boolean = false) :string{
    if (upornot==false){
        return "We are not signed up";
    }
    else{
        return "We are all up now...";
    }
}
let variable: any;
let details = isSignedUp("Jegannath","jegannath69@gmail.com",true);
console.log(details);

// Arrow function [they start with variable declaration]
const arrowfn = (name:string):string =>{
    return ""+name;
}


// Using void to make sure the function is non performing...
function consoleError(errmsg: string) : void {
    console.log(errmsg);
}

// Using never to make sure the function never terminates normally [throws error or terminates program]
function handleError(errmsg: string): never {
    throw new Error(errmsg);
}

// function to return an object
function returnObj(msg1: string): {}{
    return {};
}

// creating a manual type in TS, accessed inside function with Type Safety [called Type Aliass]
type User = {
    readonly name: string,
    age: number,
    gmail: string,
}

function createUser(user:User):string{
    return user.name;
}

let usedUser:User = {
    name:"Jegan",
    age:20,
    gmail:"h@gmail.com"
} 

let passingVal = createUser(usedUser);
console.log(passingVal); //this will work well

// usedUser.name="hitesh"; this will end up throwing an error because name is a read only propery...

// Union Types in TS for allowing multiple types of inputs/outputs && this is how we handle multiple methods as well
// based on their data types &&& how the typeof function works
const helloWorld = (strval : string | number) :string | number =>{
    if (typeof strval === "string"){
        return strval.toLowerCase();
    }else{
        return strval.toString();
    }
}
console.log(helloWorld("Michael Jackson"));

// array declaration in TS
const data1 : number[] = [1,2,3];
const data2 : string[] = ["1","2","Good Day Biscuit"];
//either this or use any and just be good to go...
const data3 : (string | number | boolean)[] = [1,"Hello",3,"World"];

// Securing the value using Unions 
let seatingAllotment : "Aisle" | "middle" | "Window";
// seatingAllotment = "Crew" not assignable error


// Tuples <- TS native and not found in JS 
// In api calls where order of input data needs to be strictly in order we use tuples:
let userData : [number,boolean,string];

userData = [123,true,"Helo"];
// reversing or changing order won't work at all...

// Types being strictly given types
type UserAPI = [number,string];
let helloUser : UserAPI = [1,"Medaka Kuroiwa"];

// funny issues with tuple 
// helloUser.push(true); //only warn but runs the code rather...
