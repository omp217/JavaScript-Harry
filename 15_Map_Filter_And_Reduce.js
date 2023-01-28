let arr = [45, 23, 21];

// Map
//  Functionality of map is to iterate over the array and perform some operation on each element of the array and return the new array
let a = arr.map((value, index, array)=>{
    console.log(value, index, array);
    return value + 1;
})
console.log(arr);
console.log(a);

//Filter
// Functionality of filter is to iterate over the array and perform some operation on each element of the array and return the new array with the elements that satisfy the condition
arr = [45, 23, 21, 0, 3, 5];
let a2 = arr.filter((a)=>{
    return a < 10;
})
console.log(arr);
console.log(a2);

// Reduce
// Functionality of reduce is to iterate over the array and perform some operation on each element of the array and return the final value
arr = [45, 23, 21, 0, 3, 5];
let a3 = arr.reduce((a, b)=>{
    return a + b;
})
console.log(arr);
console.log(a3);