function ExampleConstructor() {

}

var babyExampleConstructor = new ExampleConstructor();

console.log('prototype of ExampleConstructor:', ExampleConstructor.prototype);
console.log('typeof prototype of ExampleConstructor:', typeof ExampleConstructor.prototype);

console.log('__proto__ of babyExampleConstructor:', babyExampleConstructor.__proto__);
console.log('typeof __proto__ of babyExampleConstructor:', typeof babyExampleConstructor.__proto__);

console.log('Is babyExampleConstructor instanceof ExampleConstructor:', babyExampleConstructor instanceof ExampleConstructor);
