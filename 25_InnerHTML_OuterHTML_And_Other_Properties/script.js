let x = document.getElementsByTagName('span')[0];
console.log(x); // console.log shows the span element

console.dir(x); // console.dir shows the span element and its properties

console.log(document.body.firstChild.nodeName); // #text
console.log(document.body.firstElementChild.nodeName); // span

console.log(x.innerHTML);
x.innerHTML = "Hello... Dear.... You're changed..." // This is valid for element nodes only
console.log(x.innerHTML);

// console.log(x.outerHTML);
// x.outerHTML = "<div>Hey....</div>";
// console.log(x.outerHTML); // This is valid for element nodes only

x.innerHTML = "I am not sure"
console.log(x.innerHTML); // This is valid for element nodes only
console.log(x.outerHTML); // This is valid for element nodes only

console.log(document.body.firstChild.data); // This is valid for text nodes only
console.log(document.body.firstChild.nodeValue); // This is valid for text nodes only

console.log(document.body.textContent); // This will give the content in the form of text

// Make my firts child element hidden
document.body.firstElementChild.hidden = true;