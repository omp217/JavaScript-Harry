let id1 = document.getElementById('id1');
let span1 = document.getElementById('span1');
console.log(id1);

console.log(id1.matches('.box')); // true
console.log(id1.matches('.class1')); // false

console.log(span1.closest('.box')); // returns the closest parent element with the class box

console.log(id1.contains(span1)); // true
console.log(span1.contains(id1)); // false
console.log(id1.contains(id1)); // true