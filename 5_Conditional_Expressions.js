let a = prompt("Hey, what is your age?");
a = Number.parseInt(a); // convert string to number

if(a<0)
{
    alert("This is not a valid age");
}
else if(a<9)
{
    alert("You are a kid");
}
else if(a<18 && a>=9)
{
    alert("You are a teenager and you can think of driving after 18.");
}
else
{
    alert("You can now drive");
}