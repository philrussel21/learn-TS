// Implements the interface and since it follows the interface by having the function, this is valid.
export class Invoice {
    // ACCESS MODIFIERS
    // By default all properties are public and can be changed outside this class with something
    // like instance1.customer = 'some name'.
    // public customer: string; // would still be public even without the public keyword
    // readonly details: string; // as the keyword states, can only be read outside this class and cannot be changed.
    // readonly amount: number;
    // Would be applied to all instance of the Class on creation, since they're not updated in the constructor.
    // Private properties can only be used inside this Class and not outside.
    // private owner: string = 'Myself.';
    // constructor(c: string, d: string, a: number) {
    // 	this.customer = c;
    // 	this.details = d;
    // 	this.amount = a;
    // }
    // SHORTER SYNTAX WITH ACCESS MODIFIERS - would only work if access modif are explicitly stated.
    // This would instantiate those properties on creation, much like the code above does.
    constructor(customer, details, amount, owner = 'Myself') {
        this.customer = customer;
        this.details = details;
        this.amount = amount;
        this.owner = owner;
    }
    // Class Method
    format() {
        return `${this.customer} owes $${this.amount} for ${this.details}. - ${this.owner}`;
    }
}
