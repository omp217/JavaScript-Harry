let n = prompt("Enter a number");
n = Number.parseInt(n);

// While loop
let i = 0;
while (i <= n)
{
    console.log(i);
    i++;
}

i = 0;
do
{
    console.log(i);
    i++;
} while (i <= n);