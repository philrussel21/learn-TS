export class Payment {
    constructor(client, details, amount, owner = 'Myself again') {
        this.client = client;
        this.details = details;
        this.amount = amount;
        this.owner = owner;
    }
    format() {
        return `${this.client} is owed $${this.amount} for ${this.details} - ${this.owner}.`;
    }
}
