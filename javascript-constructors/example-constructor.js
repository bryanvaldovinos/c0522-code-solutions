function ExampleConstructor() {

}

console.log('value of prototype property of ExampleConstructor:', ExampleConstructor.prototype);
console.log('typeof of prototype property of ExampleConstructor:', typeof ExampleConstructor.prototype);

var newObj = new ExampleConstructor();
console.log(newObj);

var newInst = newObj instanceof ExampleConstructor;
console.log(newInst);
