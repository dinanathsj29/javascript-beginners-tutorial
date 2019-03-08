// external js file
// Write all JavaScript code here

// Selecting element with id 
let mainHeadingElement = document.getElementById('mainHeadingText');

// get html of selected element
let mainHeadingHtml = mainHeadingElement.innerHTML;

// get text of selected element
let mainHeadingText = mainHeadingElement.innerText;
console.log('mainHeadingHtml: ' + mainHeadingHtml); // text with complete html tags
console.log('mainHeadingText: ' + mainHeadingText); // only text

// console.log('// ------------------------------');

// set text of selected element
mainHeadingElement.innerHTML = 'This text changed with DOM method...';

// console.log('// ------------------------------');

// set text of another element
let subHeadingElement = document.getElementById('subHeadingText');
subHeadingElement.innerHTML = mainHeadingElement.innerHTML ;

// console.log('// ------------------------------');

// set css style
mainHeadingElement.style.backgroundColor = 'pink';

// console.log('// ------------------------------');
