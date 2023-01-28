// For loop
for(let i=0; i<34; i++)
{
    console.log(i);
}

//For-in loop
let obj =
{
    harry: 90,
    shubh: 45,
    shivika: 56,
    ritika: 57,
    shiv: 23
}

for(let i=0; i<Object.keys(obj).length; i++)
{
    console.log(Object.keys(obj)[i]);
}

for (let key in obj)
{
    console.log(`${key} scored ${obj[key]}`);
}

// For-of loop
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let element of arr)
{
    console.log(element);
}

// For-of loop with strings
let str = "This is a string";
for (let element of str)
{
    console.log(element);
}