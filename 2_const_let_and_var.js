let a = 45;
var b = "Hello";
var c = null;
var d = undefined;

console.log(b);

{
    let b = "World";
    console.log(b);
}

var b = "World"; // I can declare a variable again with var

console.log(b);

// We can't redeclare a variable with let but can be updated

// const is a constant variable
// We can't redeclare or update a const variable

const e = 45;
// let e = 46; --> This will show an Error