import './style.css';
import header from "./header/header";
import home from "./home/home";
import menu from "./menu/menu";
import contact from "./contact/contact";

const content = document.querySelector('#content');
content.appendChild(header);


//implement links to load in content modules
const links = document.querySelectorAll('li');

links.forEach(link => {
    link.addEventListener('click', () => {
        links.forEach(link => link.classList.remove('active'));
        link.classList.add('active');
    });
});