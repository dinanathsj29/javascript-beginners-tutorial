// external js file
// Write all JavaScript code here

// Selecting elements with class
let listItems = document.getElementsByClassName('list-item');
console.log(listItems);

// get text of 1st ie 0th element
let firstListItemText = listItems[0].innerHTML;
console.log('firstListItemText: ' + firstListItemText);

// console.log('// ------------------------------');

// set color of last element
let lastListItem = (listItems.length - 1);
listItems[lastListItem].style.color = 'blue';

// console.log('// ------------------------------');

// highlighting all list items through loop
for(var listItem in listItems) {  
  listItems[listItem].style.marginBottom = '10px';
  listItems[listItem].style.background = '#bbbbbb';
}

// console.log('// ------------------------------');
