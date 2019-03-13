// external js file
// Write all JavaScript code here

// Selecting element with id 
let mainHeadingElement = document.getElementById('mainHeadingText');
let clickButtonElement = document.getElementById('clickButton');
let linkTextElement = document.getElementById('linkText');

// removing the attributes 
mainHeadingElement.removeAttribute('class');

// verify/confirm class removed or not
console.log('mainHeadingElement.getAttribute:', mainHeadingElement.getAttribute('class'));
console.log('mainHeadingElement.classList.contains:', mainHeadingElement.classList.contains('class'));

// console.log('// ------------------------------');

clickButtonElement.removeAttribute('disabled');

linkTextElement.removeAttribute('href');

// console.log('// ------------------------------');
