// external js file
// Write all JavaScript code here

// Operator precedence
var result1 = 10 + 2 * 5
alert('10 + 2 * 5 =  ' + result1); // answer is 20 NOT 60 (12 * 5 ), actually * or multiplication have higher precedence so the actual calculation is like 10 + ( 2*5 ) = 10 + 10 = 20

// change precedence with `parentheses ()` 
var result2 = (10 + 2) * 5;
alert('(10 + 2) * 5 =  ' + result2); // (12) * 5 = 60

// same precedence operators
var result3 = 10 + 5 - 2
alert('10 + 5 - 2 =  ' + result3); // 13 first addition than subtraction

var result4 = 10 + (5 - 2);
alert('10 + (5 - 2) =  ' + result4); // 13 first subtraction ie. ( ) than addition