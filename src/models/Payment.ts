import { HasFormatter } from '../interfaces/HasFormatter';

export class Payment implements HasFormatter {
	constructor(
		public client: string,
		readonly details: string,
		readonly amount: number,
		private owner: string = 'Myself again'
	) {}

	format() {
		return `${this.client} is owed $${this.amount} for ${this.details} - ${this.owner}.`;
	}
}
