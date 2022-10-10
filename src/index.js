import './style.css';
import header from "./header/header";
import home from "./home/home";
import menu from "./menu/menu";
import contact from "./contact/contact";

//initial page load
const content = document.querySelector('#content');
content.appendChild(header);
content.appendChild(home);


//implement links to load in content modules
const links = document.querySelectorAll('li');

links.forEach(link => {
    link.addEventListener('click', () => {
        links.forEach(link => link.classList.remove('active'));
        link.classList.add('active');
    });
});

//load home
links[0].addEventListener('click', () => {
    loadContent(home);
});

//load menu
links[1].addEventListener('click', () => {
    loadContent(menu);
});

//load contact
links[2].addEventListener('click', () => {
    loadContent(contact);
});

function loadContent(newContent) {
    content.removeChild(content.lastChild);
    content.appendChild(newContent);
}