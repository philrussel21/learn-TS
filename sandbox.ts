const char = 'luigi';
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
let character = {
	name: 'ryu',
	pow: 98,
	class: 'fighter',
};

character.name = 'ken';
character.pow = 99;
// character.pow = 'baby'; // Invalid
character.class = 'mage';

// Also cannot add new properties to update the object
// character.allies = ['chunli','vega']; // Invalid

// When resetting the object, it has to have the same properties, otherwise it would be invalid
character = {
	name: 'chunli',
	pow: 90,
	class: 'brawler',
};
