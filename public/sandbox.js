"use strict";
var char = 'luigi';
console.log(char);
// tells what type of data this function can only allow
// const circ = (diameter: number) => {
// 	return diameter * Math.PI;
// };
// Won't be allowed since it was defined that only a number shall be passed
// to this function.
// console.log(circ('2'));
// console.log(circ(false));
// console.log(circ(2)); // Works
// ARRAYS
// Would only allow same type to be in the same array,
// since on init, only strings are put in, it would only allow string moving forward
// const names = ['mario', 'luigi', 'todd'];
// names.push('peach'); // Works
// names.push(true);
// names.push(4);
// This weirdly enough works too since TS recognizes there's that type inside too, as long as
// it was made during initialization
// const random = ['blah', true, 3];
// random.push('works');
// random.push(4);
// random.push(false);
// console.log(random);
// OBJECTS
// Objects and its properties behaves like variables. When initialized, a property would only
// allow the same type if it was to be reassigned.
// let character = {
// 	name: 'ryu',
// 	pow: 98,
// 	class: 'fighter',
// };
// character.name = 'ken';
// character.pow = 99;
// character.pow = 'baby'; // Invalid
// character.class = 'mage';
// Also cannot add new properties to update the object
// character.allies = ['chunli','vega']; // Invalid
// When resetting the object, it has to have the same properties, otherwise it would be invalid
// character = {
// 	name: 'chunli',
// 	pow: 90,
// 	class: 'brawler',
// };
// EXPLICIT TYPES - explicitly telling the type of the value that would be stored in the variable
// even before initialization.
// Initializing a variable to only allow certain type
// let character: string;
// let pow: number;
// let isStrong: boolean;
// EXPLICIT TYPES - ARRAYS
// Initializes an empty array to only allow strings so you can push to it later on.
// const allies: string[] = [];
// const powers: number[] = [];
// EXPLICIT TYPES - OBJECTS
// let ninja: object; // WARNING: since an Array is classified as an object, TS would still let you reassign it to an array
// Another way, more strict way.
// let ninja2: {
// 	name: string;
// 	age: number;
// 	isBlackBelt: boolean;
// };
// ninja2 = { name: 'Ken', age: 45, isBlackBelt: true };
// UNION TYPES
// UNION TYPES - VARS - more than one type for the variable
// let id: string | number;
// id = '32';
// console.log('id', id);
// id = 32;
// console.log('id', id);
// // UNION TYPES - ARRAYS - more than one type in the array
// const mixed: (string | number)[] = [];
// mixed.push('hello');
// mixed.push(30);
// // mixed.push(false); // Invalid since it was not part when initialized
// console.log(mixed);
// DYNAMIC (any) TYPE
// negates the essence of TS by allowing ANY type of data to be stored in the variable
// let someVar: any;
// someVar = 'name';
// someVar = 5;
// someVar = true;
// FUNCTIONS
// Can also be set explicitly
// let greet: Function;
// greet = () => {
// 	console.log('Hello!');
// };
// or implicitly
// let greetAgain = () => {
// 	console.log('Hello, Again!');
// };
// Function Parameters
// Since this function does not return anything, it returns void (which is different from undefined)
// let add = (a: number, b: number, c: number | string = 0) => {
// 	// C is an optional argument that has a default value. The other way around is: c?:number|string which would have a default
// 	// value of undefined.
// 	console.log(a + b);
// 	console.log(c);
// };
// Infer from the returned type
// let addNums = (a: number, b: number) => {
// 	return a + b;
// };
// Variable sum would have the type of whatever the returned value was from a function - Infer type
// let sum = addNums(5, 10);
// sum = 'hey'; // Invalid
// Explicitly stating the return type of the function
// let minus = (a: number, b: number): number => {
// 	return a - b;
// };
// let difference = minus(10, 5);
// difference = 'yolo' // Invalid
// TYPE ALIASES
// - creates a placeholder type to have a more organized, DRYer code?
// type StringorNum = string | number;
// type ObjWithName = { name: string; uid: StringorNum };
// let logDetails = (uid: StringorNum, item: string) => {
// 	console.log(`${item} has an id of ${uid}`);
// };
// let greet = (user: ObjWithName) => {
// 	console.log(`${user.name} says hello.`);
// };
// FUNCTION SIGNATURES
// Same like let greet: Function; but with more requirements,
// this translates to "the function greet must accept these kinds of params and must return void."
// let greet: (param1: string, param2: string) => void;
// greet = (name: string, greeting: string) => {
// 	console.log(`${name} says ${greeting}!`);
// };
// this translates to "the function calc must accept two num params and must return a number"
// let calc: (param: number, anotherParam: number, action: string) => number;
// calc = (num1: number, num2: number, op: string) => {
// 	return op === 'add' ? num1 + num2 : num1 - num2;
// };
// translates to "the function logDetails must accept an object with the following fields and must return void."
// let logDetails: (p1: { name: string; age: number }) => void;
// logDetails = (user: { name: string; age: number }) => {
// 	console.log(`${user.name} is ${user.age} years old.`);
// };
// OR WITH TYPE ALIASES
// type person = { name: string; age: number };
// let log2Details: (p1: person) => void;
// log2Details = (user: person) => {
// 	console.log(`${user.name} is ${user.age} years old.`);
// };
// The DOM
// If you, as a dev, knows that the element you're trying to target is not gonna be null,
// put a bang at the end to let TS know that it won't be null and should stop worrying.
var anchor = document.querySelector('a');
// Alternatively, you can also wrap in if statement if you don't wanna use the !, like so:
if (anchor) {
    console.log(anchor.href);
}
// Also, if you hover over the variable, TS would know what kind it is and assign a special type
// that comes with different properties and methods that you can use.
// const form = document.querySelector('form')!;
// TYPE CASTING
// When you have more than one form, you'll probably have to target them by class or id, in this case,
// TS won't know what kind of HTMLELEMENT it would be so you have to tell it via type casting, like so:
var form = document.querySelector('.new-item-form');
// After successful type casting, the variable would then be of that certain HTMLELEMENT type and
// its properties and methods would then be available.
console.log(form.children);
// More typecasting
var type = document.querySelector('#type');
var tofrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
