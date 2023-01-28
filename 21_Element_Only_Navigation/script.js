const changeBodyRed = () => {
    document.body.firstElementChild.style.backgroundColor = "red";
}

let b = document.body
console.log(b.firstChild);
console.log(b.firstElementChild);

changeBodyRed();