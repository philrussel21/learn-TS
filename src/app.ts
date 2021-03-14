import { HasFormatter } from './interfaces/HasFormatter';
import { Invoice } from './models/Invoice.js';
import { ListTemplate } from './models/ListTemplate.js';
import { Payment } from './models/Payment.js';

const form = document.querySelector('.new-item-form') as HTMLFormElement;
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;
const cont = document.querySelector('.item-list') as HTMLUListElement;

// --- PHIL's WAY ---

// form.addEventListener('submit', (e: Event) => {
// 	e.preventDefault();
// 	console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
// 	let doc = {
// 		customer: tofrom.value,
// 		details: details.value,
// 		amount: amount.valueAsNumber,
// 	};

// 	if (type.value === 'invoice') {
// 		let inv: Invoice = createInvoice(doc);
// 		console.log('Invoice created: ', inv);
// 	} else {
// 		let payDoc = {
// 			client: tofrom.value,
// 			details: details.value,
// 			amount: amount.valueAsNumber,
// 		};
// 		let pay: Payment = createPayment(payDoc);
// 		console.log('Payment created: ', pay);
// 	}
// });

// const createInvoice = (obj: {
// 	customer: string;
// 	details: string;
// 	amount: number;
// }) => {
// 	return new Invoice(obj.customer, obj.details, obj.amount);
// };

// const createPayment = (obj: {
// 	client: string;
// 	details: string;
// 	amount: number;
// }) => {
// 	return new Payment(obj.client, obj.details, obj.amount);
// };

form.addEventListener('submit', (e: Event) => {
	e.preventDefault();

	let doc: HasFormatter;

	// Creates an array
	// INVALID - since arrays are a bit loose, it won't know what type each element inside is. When destructured(spread),
	// it would seem like its type any which is not a function or class usually doesn't take.
	// let values = [tofrom.value, details.value, amount.valueAsNumber];

	// Creates a tuple
	// VALID - tuples on the other hand, explicitly says what types are the elements gonna be that's why
	// destructuring it to a function or class that expects certain types is allowed.
	let values: [string, string, number];
	values = [tofrom.value, details.value, amount.valueAsNumber];

	if (type.value === 'invoice') {
		doc = new Invoice(...values); // Spread operator: spreads each element inside an iterable one by one.
		console.log('New Invoice Created: ', doc);
	} else {
		doc = new Payment(...values);
		console.log('New Payment Created: ', doc);
	}

	// Add the doc to the DOM
	let list = new ListTemplate(cont);
	list.render(doc, type.value, 'end');
});

// const inv1 = new Invoice('ryu', 'website work', 100);
// const inv2 = new Invoice('ken', 'mobile app', 300);
// const pay1 = new Payment('chunli', 'self defence', 200);
// const pay2 = new Payment('guile', 'security', 50);
