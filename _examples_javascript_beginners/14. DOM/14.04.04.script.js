// external js file
// Write all JavaScript code here

// Selecting element with id 
let mainHeadingElement = document.getElementById('mainHeadingText');

// apply/set/add css class with classList
mainHeadingElement.classList.add('heading-text');

// apply/set/add css class with classList
mainHeadingElement.classList.add('border','bg-color');

// remove classes with classList
mainHeadingElement.classList.remove('border','bg-color');

// if class exists remove it, if not add it
mainHeadingElement.classList.toggle('heading-text');

// mainHeadingElement.classList.add('border');

// check if class exist and act accordingly
if(mainHeadingElement.classList.contains('border')) {
  alert('border class present');
} else {
  alert('NO border class present');
}