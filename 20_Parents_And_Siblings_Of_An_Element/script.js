console.log(document.body.firstChild);

a = document.body.firstChild;

console.log(a.parentNode); // This will return any node that is the parent of the node that we are currently on.
console.log(a.parentElement); // This will return any element that is the parent of the element that we are currently on.

console.log(a.firstChild.nextSibling); // This will return the next sibling of the first child of the node that we are currently on.