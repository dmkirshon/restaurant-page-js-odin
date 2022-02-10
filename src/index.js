import loadFrontPage from './front.js';
import loadMenuPage from './menu.js';
import loadContactPage from './contact.js';
import css from "./styles.css";

const content = document.getElementById('content');
const mainButton = document.createElement('button');
const menuButton = document.createElement('button');
const contactButton = document.createElement('button');

mainButton.textContent = "Home";
menuButton.textContent = "Menu";
contactButton.textContent = "Contact";


mainButton.onclick = changeToMainPage;
menuButton.onclick = changeToMenuPage;
contactButton.onclick = changeToContactPage;

function changeToMainPage() {
    content.removeChild(content.lastChild);
    content.appendChild(loadFrontPage());
};

function changeToMenuPage() {
    content.removeChild(content.lastChild);
    content.appendChild(loadMenuPage());
};

function changeToContactPage() {
    content.removeChild(content.lastChild);
    content.appendChild(loadContactPage());
};

content.appendChild(mainButton);
content.appendChild(menuButton);
content.appendChild(contactButton);

content.appendChild(loadContactPage());

console.log("Hello webpack!");