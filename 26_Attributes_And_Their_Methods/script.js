let first = document.getElementById('first');

let a = first.getAttribute("class");
console.log(a);

console.log(first.hasAttribute("class")); // true
console.log(first.hasAttribute("style")); // false

first.setAttribute("hidden", "true"); // setAttribute() set the attribute to the given value
first.removeAttribute("hidden"); // removeAttribute() removes the attribute

console.log(first.attributes); // returns a NamedNodeMap of all the attributes of the element

console.log(first.dataset); // returns a DOMStringMap of all the data-* attributes of the element

//  data-* attributes are used to store custom data private to the page or application
//  The stored (custom) data can then be used in the page's JavaScript to create a more engaging user experience (without any Ajax calls or server-side database queries)
//  The data-* attributes consist of two parts: the attribute name, and the value
//  The attribute name should not contain any uppercase letters, and must be at least one character long after the prefix "data-"
//  The attribute value can be any string
//  The data-* attributes allow us to pass information from HTML to JavaScript
//  The data-* attributes are completely in the hands of the developer
//  The data-* attributes provide us with a way to embed custom data attributes on all HTML elements
//  The data-* attributes give us a way to store extra information on standard, semantic HTML elements, without other hacks such as non-standard attributes, extra properties on DOM.
//  The data-* attributes allow us to add our own attributes to HTML elements
//  The data-* attributes allow us to store extra information about an element without other hacks such as non-standard attributes, extra properties on DOM.

console.log(first.dataset.game);
console.log(first.dataset.player);