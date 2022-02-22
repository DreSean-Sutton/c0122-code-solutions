function ExampleConstructor() {

}

console.log('prototype of ExampleConstructor:', ExampleConstructor.prototype);
console.log('typeof prototype of ExampleConstructor:', typeof ExampleConstructor.prototype);

var babyExampleConstructor = new ExampleConstructor();

console.log('Is babyExampleConstructor instance of ExampleConstructor:', babyExampleConstructor instanceof ExampleConstructor);
