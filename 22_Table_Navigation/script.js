let t = document.body.firstElementChild.firstElementChild;
console.log(t);
console.log(t.rows);
console.log(t.caption);
console.log(t.tHead.firstElementChild);
console.log(t.tFoot);
console.log(t.tBodies);
// Print the rows of tBody
console.log(t.tBodies[0].rows);
console.log(t.rows[0].rowIndex);