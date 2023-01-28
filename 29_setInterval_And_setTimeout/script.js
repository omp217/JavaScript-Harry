alert("hello");

let a = setTimeout(function() {
    alert("I am inside of setTimeout...");
}, 2000); // This will execute the function after 2 seconds

console.log(a);

a = setTimeout(function() {
    alert("I am inside of setTimeout...");
}, 5000); // This will execute the function after 2 seconds

clearTimeout(a); // This will clear the timeout
console.log(a);

const sum = (a,b) => {
    console.log(a+b);
}

setTimeout(sum, 2000, 2, 3); // This will execute the function after 2 seconds

setInterval(sum, 2000, 2, 3); // This will execute the function after 2 seconds