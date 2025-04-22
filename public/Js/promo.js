
export class Promo {

    constructor(Id) {
        this.container = document.getAnimations(Id);
    }

    generatePage(data) {
        data.forEach((elem) => {
            const Div = document.createElement('div');
            Div.classList.add('element');

            const name = document.createElement('div');
            name.classList.add('name');
            name.appendChild(document.createTextNode(elem.name));

            const age = document.createElement('div');
            age.classList.add('price');
            age.appendChild(document.createTextNode(elem.price));

            const img = document.createElement('div');
            img.classList.add('img');
            img.style.backgroundImage = `url(${elem.img})`;

            const description = document.createElement('div');
            ingredients.classList.add("description");

            description.appendChild(document.createTextNode(elem.description));
            Div.appendChild(description);
            Div.appendChild(name);
            Div.appendChild(age);
            Div.appendChild(img);

            this.container.appendChild(Div);
        })
    }
}