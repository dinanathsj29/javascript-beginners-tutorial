// external js file
// Write all JavaScript code here

// Selecting element with id 
let mainHeadingElement = document.getElementById('mainHeadingText');
let clickButtonElement = document.getElementById('clickButton');
let linkTextElement = document.getElementById('linkText');

// getting the attributes values
let getAttrClass = mainHeadingElement.getAttribute('class');
console.log('getAttrClass:', getAttrClass);

let getAttrDisabled = clickButtonElement.getAttribute('disabled');
console.log('getAttrDisabled:', getAttrDisabled);

let getAttrHref = linkTextElement.getAttribute('href');
console.log('getAttrHref:', getAttrHref);

// console.log('// ------------------------------');
