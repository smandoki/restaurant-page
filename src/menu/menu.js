import './menu.style.css';
import hawaiian from './img/hawaiian.png';
import margerita from './img/margerita.png';
import meatlovers from './img/meatlovers.png';
import mushroom from './img/mushroom.png';
import pepperoni from './img/pepperoni.png';
import seafood from './img/seafood.png';

const menu = document.createElement('main');

const cardContainer = document.createElement('div');
cardContainer.classList.add('card-container');
menu.appendChild(cardContainer);

function createCard(image, name, description) {
    const card = document.createElement('div');
    card.classList.add('card');

    const cardImage = new Image();
    cardImage.src = image;
    card.appendChild(cardImage);

    const cardName = document.createElement('h3');
    cardName.innerText = name;
    card.appendChild(cardName);

    const cardDescription = document.createElement('p');
    cardDescription.innerText = description;
    card.appendChild(cardDescription);

    return card;
}

cardContainer.appendChild(createCard(hawaiian, 'Hawaiian', 'tomato sauce, cheese, ham, and pineapple'));
cardContainer.appendChild(createCard(margerita, 'Margerita', 'tomato sauce, mozzarella cheese, tomato, and basil'));
cardContainer.appendChild(createCard(meatlovers, 'Meatlovers', 'BBQ sauce, cheese, pepperoni, bacon, ham, beef, and sausage'));
cardContainer.appendChild(createCard(mushroom, 'Mushroom', 'tomato sauce, cheese, and mushroom'));
cardContainer.appendChild(createCard(pepperoni, 'Pepperoni', 'tomato sauce, cheese, and pepperoni'));
cardContainer.appendChild(createCard(seafood, 'Seafood', 'tomato sauce, cheese, basil, shrimp, and anchovies'));

export default menu;