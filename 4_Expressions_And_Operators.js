// Arithmetic Operators

let a = 45;
let b = 67;
console.log("a + b = ", a + b);
console.log("a - b = ", a - b);
console.log("a / b = ", a / b);
console.log("a * b = ", a * b);

a = 2;
b = 4;

console.log(a ** b);
console.log(a % b);

console.log(a++)
console.log(++a)
console.log(a)
console.log(a--)
console.log(--a)
console.log(a)

// Assignment Operators

a += 5;
console.log(a);

// List of all assignment operators is: +=, -=, *=, /=, %=, **=

// Comparison Operators

let comp1 = 6;
let comp2 = 7;

console.log(comp1 > comp2);

// List of all comparison operators is: >, <, >=, <=, ==, ===, !=, !==

comp1 = 6;
comp2 = "6";

console.log(comp1 == comp2); // This will return true because the value is same
console.log(comp1 === comp2); // This will return false because the type is different
console.log(comp1 != comp2); // This will return false because the value is same
console.log(comp1 !== comp2); // This will return true because the type is different

// Logical Operators

// Logical operators are operating on the boolean values
// list of all logical operators is: &&, ||, !

let x = 5;
let y = 6;
console.log(x<y && x>0); // This will return true because both the conditions are true