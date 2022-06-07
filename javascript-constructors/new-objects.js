var anObject = new Object();
console.log('value of anObject:', anObject);
console.log('typeof anObject:', typeof anObject);

var anArray = new Object([]);
console.log('value of anArray:', anArray);
console.log('typeof anArray:', typeof anArray);

var aFunction = new Object(function () {});
console.log('value of aFunction:', aFunction);
console.log('typeof aFunction:', typeof aFunction);

var aString = new Object('string');
console.log('value of aString:', aString);
console.log('typeof aString:', typeof aString);

var aNumber = new Object(24);
console.log('value of aNumber:', aNumber);
console.log('typeof aNumber:', typeof aNumber);

var aBoolean = new Object(true);
console.log('value of aBoolean:', aBoolean);
console.log('typeof aBoolean:', typeof aBoolean);
