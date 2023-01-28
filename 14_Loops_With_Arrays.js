let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for(let i=0; i<num.length; i++){
    console.log(num[i]);
}

num.forEach((element)=>{
    console.log(element);
})

let name = "Om Patel";
let arr = Array.from(name); // Converts the string into an array
console.log(arr);

for(let i of arr){
    console.log(i); // i stores the value of the array
}

for(let i in arr){
    console.log(i); // i stores the index of the array
    console.log(arr[i]); // arr[i] stores the value of the array
}