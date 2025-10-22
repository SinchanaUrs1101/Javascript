/*two types of datatyps -- primitive --nonprimitive based on how u access them in the memory
// js uses dynamic memory allocations[memory allocated during runtime] static[memory fixed at compile time]

//Primitive [7 types][call by value]
//--String --number --boolean --null --undefined --symbol(unique values) --BigInt(scientific values)
const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherid = Symbol('123')
console.log(id === anotherid);

const bigNumber = 757275877573n
//Reference or Non Primitive[call by reference]
// --Arrays, Objects, Functions

const fruits = ["kiwi", "papaya", "peach", "apple"]
let myObj = {
    name : "sinchu",
    age : 21,
}

const myfunction = function(){
    console.log("Hello World");
}

console.log(typeof anotherId);
*/

//Memory---2 types--1.Stack=>used in Primitive datatypes, 2.Heap=>used in Non-Primitive datatypes
//Type => 1
let myClgname = "AIT"

let anothername = myClgname//here we are giving reference to previous name in the stack, so the copy of previous name will be assigned here
anothername = "BIT"//here when we change the value we are changing value of the copy, not the original reference
console.log(myClgname);
console.log(anothername);

//Type => 2
let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne//Here it is a non primitive datatype hence the value is stored in heap, in heap the direct reference will be given not the copy
userTwo.email = "sinchu@google.com"//when we change the value here, we are changing the original value as well

console.log(userOne.email);
console.log(userTwo.email);

