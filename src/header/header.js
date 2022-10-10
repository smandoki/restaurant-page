import './header.style.css';

const header = document.createElement('header');
header.innerHTML = (`
    <h1>The Pizza Factory</h1>
    <nav>
        <ul>
            <li class="active">Home</li>
            <li>Menu</li>
            <li>Contact</li>
        </ul>
    </nav>
`);

export default header;