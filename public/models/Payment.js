export class Payment {
    constructor(client, details, amount, owner = 'Myself again') {
        this.client = client;
        this.details = details;
        this.amount = amount;
        this.owner = owner;
    }
    format(num = 1) {
        for (let i = 0; i < num; i++) {
            console.log(`[${i}] ${this.client} is owed $${this.amount} for ${this.details} - ${this.owner}.`);
        }
        return 'Done.';
    }
}
