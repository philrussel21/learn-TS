import { HasFormatter } from '../interfaces/HasFormatter';

export class ListTemplate {
	constructor(private container: HTMLUListElement) {}

	// pos: 'start' | 'end' means it can only be those two string values
	render(item: HasFormatter, heading: string, pos: 'start' | 'end') {
		const li = document.createElement('li');
		const h4 = document.createElement('h4');
		const p = document.createElement('p');

		h4.textContent = heading;
		li.append(h4);

		p.textContent = item.format();
		li.append(p);

		if (pos === 'start') {
			this.container.prepend(li);
		} else {
			this.container.append(li);
		}
	}
}
