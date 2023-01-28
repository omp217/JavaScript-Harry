let a = null;
let b = 345;
let c = true;
let d = BigInt("567") + BigInt("3")
let e = "Om"
let f = Symbol("Hello")
let g = undefined

console.log(a, b, c, d, e, f, g);

console.log(typeof a, typeof b, typeof c, typeof d, typeof e, typeof f, typeof g);

// Premitive Data Types: Number, String, Boolean, BigInt, Symbol, Undefined, Null

// objects are non-premitive data types

const item = {
    om: true,
    "shubh": false,
    "lovish": 67,
    "Rohan": undefined    
}

console.log(item);
console.log(item["om"]);
console.log(item.om);
console.log(item.sddsd);

item['friends'] = "Hello";

console.log(item['friends']);
console.log(item['om']);