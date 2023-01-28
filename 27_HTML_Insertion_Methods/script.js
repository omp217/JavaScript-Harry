let a = document.getElementsByTagName('div')[0];

a.innerHTML = a.innerHTML + '<h1>Hello World</h1>';

let div = document.createElement('div');
div.innerHTML = '<h1>Hello World</h1>';
a.prepend(div);

console.log(a.innerHTML);

a.before(div);

console.log(a.innerHTML);

a.after(div);

console.log(a.innerHTML);

a.replaceWith(div); // Replce the whole content of a with div