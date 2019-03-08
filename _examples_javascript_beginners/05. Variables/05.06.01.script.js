// external js file
// Write all JavaScript code here

// traditional var syntax
var techName1 = 'JavaScript';

for(var i = 1; i <= 5; i++) {
  console.log('i : ' + i); // 1,2,3,4,5
  console.log('inside block:' + techName1);
  var version1 = 100;
}
console.log('outside: ' + i); 
console.log('outside: ' + version1); 

// ------------------------------

// ES6 syntax
let techName2 = 'LiveScript';

for(let n = 1; n <= 5; n++) {
  console.log('n : ' + n); // 1,2,3,4,5
  console.log('inside block:' + techName2);
  let version2 = 100;
}

console.log(n); // undefined
console.log('outside: ' + version2);  // undefined
