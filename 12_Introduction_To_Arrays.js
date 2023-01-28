let a = [1, 2, 3, 4, false, "not present"];
console.log(a);
console.log(typeof a);
console.log(a[0]);
console.log(a[300]);

console.log(a.length);

a[6] = "added";
console.log(a);
console.log(a.length);

a[300] = "new added";
console.log(a);

// Arrays are mutable so that it can be changed