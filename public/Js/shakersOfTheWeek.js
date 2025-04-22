export class ShakersOfTheWeek{

    constructor()
    {
        this.container = document.getElementById('container');
    }

    generatePage(data)
    {
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

            const ingredients = document.createElement('div');
            ingredients.classList.add("ingredients");

            elem.ingredients.forEach((ingr) => {
                
                const tmp = document.createElement("h4");
                tmp.textContent = ingr;

                ingredients.appendChild(tmp);
            })

            Div.appendChild(ingredients);
            Div.appendChild(name);
            Div.appendChild(age);
            Div.appendChild(img);

            container.appendChild(Div);
        })
    }
}