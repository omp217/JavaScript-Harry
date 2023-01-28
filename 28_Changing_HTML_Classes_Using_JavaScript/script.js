// first = document.body.getElementById('first');

first.className = "red"; // This will replace the class attribute with the new value

document.getElementById('first').className = "red text-dark"; // This will replace the class attribute with the new value

first.classList.remove('red'); // This will remove the class red from the class attribute

first.classList.add('yellow'); // This will add the class yellow to the class attribute

first.classList.toggle('red'); // This will toggle the class yellow in the class attribute

first.classList.toggle('red'); // This will toggle the class red in the class attribute

console.log(first.classList.contains('red')); // This will return true if the class red is in the class attribute