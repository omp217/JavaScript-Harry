let age = prompt("What is your age?");
age = Number.parseInt(age);

switch(age)
{
    case 12:
        console.log("You are 12 years old");
    case 13:
        console.log("You are 13 years old");
    case 14:
        console.log("You are 14 years old");
    case 15:
        console.log("You are 15 years old");
    default:
        console.log("Your age is not special");
}

// Ternary Operator Example
age = prompt("What is your age?");
age = Number.parseInt(age);
(age >= 18) ? console.log("You are an adult") : console.log("You are a child");