// external js file
// Write all JavaScript code here

// Selecting element with id 
let mainHeadingElement = document.getElementById('mainHeadingText');
let clickButtonElement = document.getElementById('clickButton');
let linkTextElement = document.getElementById('linkText');

// set attribute class named 'btn'
mainHeadingElement.setAttribute('class', 'btn');

// set attribute disabled
clickButtonElement.setAttribute('disabled', '');

// set blank/empty attribute so that it will remove exisiting attribute value
linkTextElement.setAttribute('href','');

// console.log('// ------------------------------');
