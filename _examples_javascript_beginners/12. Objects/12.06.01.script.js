// external js file
// Write all JavaScript code here

// access/loop thourgh array element

// MyObject.propertyName; OR MyObject[propertyName]; OR MyObject['propertyName']

var Person = {
  name:'Dinanath',
  domain:'IT/Software',
  gender:'Male',
  city:'Mumbai',
  country:'India'
}

console.log(Person.name);
console.log(Person['domain']);

console.log('// ------------------------------');

// Loop through an Array Elements
for (props in Person) {
  console.log(Person[props])
}

console.log('// ------------------------------');