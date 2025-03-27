// Primitive

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt


// Js is dynamically typed lang 

// Symbol

const id= Symbol("123")
const anotherId=Symbol("123")

console.log(id===anotherId);


// Reference (Non Primitive)

// Arrays, objects, functions 

const heroes=["oggy","tom","jerry"];

let myObj={
    name:"Tanishq",
    age:22
}

const muFunction= function(){
    console.log("Hello World");
    
}

// typeof(null) => object 