let x = function(e) {
    console.log(e.target);
    console.log(e.type);
    console.log(e.clientX);
    console.log(e.clientY);
}

let y = function(e) {
    console.log(e);
    alert("hello world");
}

btn.addEventListener('click', x);
btn.addEventListener('click', y);

let a = prompt("What is your favourite number?");

if(a == 2)
{
    btn.removeEventListener('click', x);
}