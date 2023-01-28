console.log(document.body.firstChild);
console.log(document.body.lastChild);
console.log(document.body.childNodes);

// Childnodes looks like an array but it is not an array
// Convert it to an array
let arr = Array.from(document.body.childNodes);
console.log(arr);