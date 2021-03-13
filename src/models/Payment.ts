import { HasFormatter } from '../interfaces/HasFormatter';

export class Payment implements HasFormatter {
	constructor(
		public client: string,
		readonly details: string,
		readonly amount: number,
		private owner: string = 'Myself again'
	) {}

	format(num: number = 1) {
		for (let i = 0; i < num; i++) {
			console.log(
				`[${i}] ${this.client} is owed $${this.amount} for ${this.details} - ${this.owner}.`
			);
		}
		return 'Done.';
	}
}
