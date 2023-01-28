let name = "Om Patel";
console.log(name);
console.log(name.length);

console.log(name.toUpperCase());
console.log(name.toLowerCase());

console.log(name.slice(2,4)); // 2 is inclusive and 4 is exclusive
console.log(name.slice(2)); // String from 2 to end

console.log(name.replace("Om", "Vrund")); // Replace Om with Vrund

name = "om"
let surname = "patel"

console.log(name.concat(surname, " and he is nice guy... :)")); // Concatenate strings

name = "              Om                  ";
console.log(name);
console.log(name.trim()); // Remove white spaces from start and end

const sentence = "The quick brown fox jumps over the lazy dog.";
const word = 'fox';
console.log(`The word ${word} ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);
console.log(sentence.includes(word));

let str = "Hello World";
str[3] = "a"; // This will not work because string is immutable 
// This will not throw error but will not change the string
console.log(str); 