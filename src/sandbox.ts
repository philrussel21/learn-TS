// import { HasFormatter } from './interfaces/HasFormatter.js';
// import { Invoice } from './models/Invoice.js';
// import { Payment } from './models/Payment.js';
// const char = 'luigi';
// console.log(char);

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

// CLASSES - commented and moved to a seperate file

// // Creating a class with properties and a constructor.
// class Invoice {
// 	// ACCESS MODIFIERS
// 	// By default all properties are public and can be changed outside this class with something
// 	// like instance1.customer = 'some name'.
// 	// public customer: string; // would still be public even without the public keyword
// 	// readonly details: string; // as the keyword states, can only be read outside this class and cannot be changed.
// 	// readonly amount: number;
// 	// Would be applied to all instance of the Class on creation, since they're not updated in the constructor.
// 	// Private properties can only be used inside this Class and not outside.
// 	// private owner: string = 'Myself.';

// 	// constructor(c: string, d: string, a: number) {
// 	// 	this.customer = c;
// 	// 	this.details = d;
// 	// 	this.amount = a;
// 	// }

// 	// SHORTER SYNTAX WITH ACCESS MODIFIERS - would only work if access modif are explicitly stated.
// 	// This would instantiate those properties on creation, much like the code above does.
// 	constructor(
// 		public customer: string,
// 		readonly details: string,
// 		readonly amount: number,
// 		private owner: string = 'Myself'
// 	) {}

// 	// Class Method
// 	format(num: number = 1) {
// 		for (let i = 0; i < num; i++) {
// 			console.log(
// 				`[${i}] ${this.customer} owes $${this.amount} for ${this.details}. - ${this.owner}`
// 			);
// 		}
// 	}
// }

// const inv1 = new Invoice('ryu', 'work on the ryu website', 200);
// const inv2 = new Invoice('ken', 'work on the ken website', 150);

// Class created can then also be used as type check for arrays, function, etc.
// const invoices: Invoice[] = [];
// invoices.push('nope'); // Will not work
// invoices.push(inv1);
// invoices.push(inv2);
// console.log(inv1, inv2);
// console.log(inv1.format());

// The DOM

// If you, as a dev, knows that the element you're trying to target is not gonna be null,
// put a bang at the end to let TS know that it won't be null and should stop worrying.
// const anchor = document.querySelector('a')!;

// Alternatively, you can also wrap in if statement if you don't wanna use the !, like so:
// if (anchor) {
// 	console.log(anchor.href);
// }

// Also, if you hover over the variable, TS would know what kind it is and assign a special type
// that comes with different properties and methods that you can use.

// const form = document.querySelector('form')!;

// TYPE CASTING

// When you have more than one form, you'll probably have to target them by class or id, in this case,
// TS won't know what kind of HTMLELEMENT it would be so you have to tell it via type casting, like so:
// const form = document.querySelector('.new-item-form') as HTMLFormElement;

// After successful type casting, the variable would then be of that certain HTMLELEMENT type and
// its properties and methods would then be available.

// console.log(form.children);

// More typecasting

// const type = document.querySelector('#type') as HTMLSelectElement;
// const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
// const details = document.querySelector('#details') as HTMLInputElement;
// const amount = document.querySelector('#amount') as HTMLInputElement;

// form.addEventListener('submit', (e: Event) => {
// 	e.preventDefault();
// 	console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
// });

// INTERFACES
// - Enforces the certain structure for objects and classes. May look like creating a new Class but is not
// the same since it will not create a new object (instance) but will also act like a blueprint when a
// variable declares itself as the interface's type.
// interface isPerson {
// 	name: string;
// 	age: number;
// 	speak(param: string): void; // Method should return void
// 	spend(param: number): number; // Method should return number
// }

// Acts like a blueprint for the isPerson type variable.
// Doesn't have to explicitly say that it is a isPerson, just have to match.
// const me = {
// 	name: 'Pilyo',
// 	age: 25,
// 	speak(msg: string) {
// 		console.log(msg);
// 	},
// 	spend(amount: number) {
// 		console.log(`I just spent $${amount}.`);
// 		return amount;
// 	},
// };

// Saying that this variable will have the structure of the interface isPerson in the future.
// let anotherPerson: isPerson;

// anotherPerson = {
// 	name: 'someNmae',
// 	age: 30,
// 	speak(msg: string) {
// 		console.log(msg);
// 	},
// 	spend(amount: number) {
// 		console.log(`I just spent $${amount}.`);
// 		return amount;
// 	},
// };

// const greetPerson = (person: isPerson) => {
// 	console.log(`Hello, ${person.name}`);
// };

// Since the structure of the me variable matches the structure of the isPerson interface (which is the type
// that this function is expecting), it still works.
// greetPerson(me);

// const pay2 = new Payment('chunli', 'self defense lesson', 100);

// Even though pay3 has to have a type that matches the HasFormatter interface, since Payment class matches it,
// this is valid. Payment follows the HasFormatter and since pay3 is Payment therefore it also follows HasFormatter
// let pay3: HasFormatter;
// pay3 = new Payment('vega', 'annoying villain', 250);

// Same logic applies here, since Invoice and Payment class follows the  interface, TS knows they're allowed to be inside an
// array of HasFormatter type/interface.
// const allFormats: HasFormatter[] = [];
// allFormats.push(pay2);
// allFormats.push(pay3);
// allFormats.push(inv1);
// console.log(allFormats);

// GENERICS
// - Allows reusable blocks of code to be used with different types.

// T captures whatever we put in the argument (properties in this instance since we passed an object)
// so when we return it, it knows what properties are in the object.
// Extends keyword acts like the type check for the T, can be any type (even a class or interface) or any check, like so:
// const addUID = <T extends {name: string}>(object: T) => {
// const addUID = <T extends object>(object: T) => {
// 	let uid = Math.floor(Math.random() * 100);
// 	return { ...object, uid };
// };

// let doc = addUID({ name: 'Ken', age: 30 });
// // addUID('error') // Invalid
// console.log(doc);

// GENERICS WITH INTERFACES
// With interfaces, you define what type T represents, sortof acts like a variable for the type you want it to be.
// interface Resource<T> {
// 	uid: number;
// 	resourceName: string;
// 	document: T;
// }

// let docOne: Resource<object> = {
// 	uid: 2,
// 	resourceName: 'Invoice',
// 	// Since we said T represents an object, the document property would need to be an object
// 	document: { name: 'Juan', amount: 45 },
// };

// In this case, we told it to be a string, hence it would only accept a string.
// let docTwo: Resource<string> = {
// 	uid: 3,
// 	resourceName: 'Payment',
// 	document: 'Pesos',
// };

// Can be of any type
// let docThree: Resource<number[]> = {
// 	uid: 4,
// 	resourceName: 'Lotto Numbers',
// 	document: [1, 8, 12, 21, 26],
// };

// ENUMS
// Special types in TS to let us set constants with words and associate them with numeric value based on their position.

// enum ResourceType {
// 	BOOK,
// 	MOVIE,
// 	SERIES,
// 	AUDIO,
// }

// interface Resource<T> {
// 	uid: number;
// 	resourceType: ResourceType;
// 	document: T;
// }

// let docOne: Resource<object> = {
// 	uid: 0,
// 	resourceType: ResourceType.BOOK, // Would be replaced with numeric value it represents
// 	document: { title: 'Atomic Habits' },
// };

// let docTwo: Resource<number[]> = {
// 	uid: 1,
// 	resourceType: ResourceType.AUDIO, // Would be replaced with numeric value it represents
// 	document: [1, 2, 3],
// };

// console.log(docOne, docTwo);

// TUPLES
// Sort of like arrays except that the type in certain position is fixed.

// Initialization of a tuple, explicitly saying the type it would hold inside the array and its position.
let tup: [string, number, boolean] = ['ryu', 21, true];
// tup[0] = false // Invalid since it would only allow string
tup[0] = 'ken'; // Valid, can change the value as long as the same type

// Array
// Allowed to change the value and type inside as long as it follows the type it was setup on initialization (any in this case)
let arr = ['wat', 5, true];
arr[0] = false;
arr[1] = 'wer';
