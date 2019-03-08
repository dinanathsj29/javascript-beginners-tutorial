// external js file
// Write all JavaScript code here

// Selecting all ul -> li elements
let ulLiElement = document.querySelectorAll('ul li');
console.log(ulLiElement);

let ulListItemClass = document.querySelectorAll("ul li.list-item")
console.log(ulListItemClass);

// set color of last li element
ulLiElement[ulLiElement.length - 1].style.color = 'red';

// set text of last li element
ulLiElement[ulLiElement.length - 1].innerHTML = 'Dynamic text change at run time';
