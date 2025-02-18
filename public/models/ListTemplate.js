export class ListTemplate {
    constructor(container) {
        this.container = container;
    }
    // pos: 'start' | 'end' means it can only be those two string values
    render(item, heading, pos) {
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        const p = document.createElement('p');
        h4.textContent = heading;
        li.append(h4);
        p.textContent = item.format();
        li.append(p);
        if (pos === 'start') {
            this.container.prepend(li);
        }
        else {
            this.container.append(li);
        }
    }
}
