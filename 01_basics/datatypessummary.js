//two types of datatyps -- primitive --nonprimitive based on how u access them in the memory
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

console.log(typeof fruits);
