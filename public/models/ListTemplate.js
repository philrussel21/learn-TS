export class ListTemplate {
    constructor(container) {
        this.container = container;
    }
    // pos: 'start' | 'end' means it can only be those two string values
    render(item, heading, pos) {
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        const p = document.createElement('p');
    }
}
