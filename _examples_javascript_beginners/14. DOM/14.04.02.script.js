// external js file
// Write all JavaScript code here

// Selecting element with id 
let mainHeadingElement = document.getElementById('mainHeadingText');

// set css style
mainHeadingElement.style.padding = '5px';
mainHeadingElement.style.backgroundColor = 'pink';

// console.log('// ------------------------------');

// get inline css styles
console.log('mainHeadingElement.style.padding:',mainHeadingElement.style.padding);
console.log('mainHeadingElement.style.backgroundColor:',mainHeadingElement.style.backgroundColor);

// console.log('// ------------------------------');

// get computed style information/ any type of css styles internal/embedded style sheets
var cssStyles = window.getComputedStyle(mainHeadingElement);
console.log('internal style - color:',cssStyles.color);
console.log('internal style - border:',cssStyles.border);