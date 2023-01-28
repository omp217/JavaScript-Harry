alert("Your script is woking fine");

alert("Enter the value of a");
let a = prompt("Enter the value of a here:");

let write = confirm("Do you want to write the value of a?");
if(write){
    document.write("The value of a is: " + a);
} 
else
{
    document.write("The value of a is not written");
}