// external js file
// Write all JavaScript code here

// remove/delete Object's Properties

// delete MyObject.propertyName;

var Person = {
  name:'Dinanath',
  domain:'IT/Software',
  gender:'Male',
  city:'Mumbai',
  country:'India'
}

delete Person.name
console.log(Person.name);
console.log(Person['domain']);
