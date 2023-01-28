let num = [1, 2, 3, 4, 5];

let b = num.toString();
console.log(b);
console.log(b.length);

let c = num.join("_");
console.log(c);
console.log(typeof c);
console.log(c.length);

let r = num.pop(); // Removes the last element from the array and returns it
console.log(num);
console.log(r);

r = num.push(6); // Adds the element to the end of the array and returns the new length
console.log(num);
console.log(r);

r = num.shift(); // Removes the first element from the array and returns it
console.log(num);
console.log(r);

r = num.unshift(0); // Adds the element to the beginning of the array and returns the new length
console.log(num);
console.log(r);

delete num[0]; // Deletes the element at the given index
// But the length of the array remains the same
console.log(num);
console.log(num.length);

let num_more = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newarray = num.concat(num_more); // Concatenates the two arrays without modifying the original arrays
console.log(newarray);
console.log(num);
console.log(num_more);

let numevenmore = num.concat(num_more, newarray); // Can concatenate multiple arrays without modifying the original arrays
console.log(numevenmore);

num = [51, 27, 21, 0, -1, 500, 501];
num.sort(); // Sorts the array in ascending order with considering the elements as strings
console.log(num);

let compare = (a, b)=>{
    return b - a; // Sorts the array in descending order
    // return a - b; // Sorts the array in ascending order
}

num = [51, 27, 21, 0, -1, 500];
num.sort(compare);
console.log(num);

// Splice And Slice
num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let deletedvalues = num.splice(2, 3); // Removes the elements from the given index and adds the given elements and returns the deleted elements
// If no elements are given to add, then it just removes the elements
console.log(num);
console.log(num.length);
console.log(deletedvalues);
console.log(typeof deletedvalues);

num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let slicedvalues = num.slice(2, 5); // Returns the elements from the given index to the given index
// last index is not included
console.log(num);
console.log(slicedvalues);
console.log(typeof slicedvalues);