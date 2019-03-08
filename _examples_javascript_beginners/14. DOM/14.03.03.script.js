// external js file
// Write all JavaScript code here

// Selecting all LI elements with tag name
let liElements = document.getElementsByTagName('li');
console.log(liElements);

// console.log('// ------------------------------');

// get total li tags/elements in page
let totalLiElements = liElements.length;
console.log(totalLiElements);

// console.log('// ------------------------------');

// get text of 1st ie 0th li element
let firstLiText = liElements[0].innerHTML;
console.log('firstLiText: ' + firstLiText);

// console.log('// ------------------------------');

// set text of last element
let lastLi = (liElements.length - 1);
liElements[lastLi].style.color = 'blue';

// console.log('// ------------------------------');

// highlighting all li elements through loop
for(var li in liElements) {  
  liElements[li].style.marginBottom = '10px';
  liElements[li].style.background = '#bbbbbb';
}

// console.log('// ------------------------------');