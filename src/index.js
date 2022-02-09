import loadFrontPage from './front';
import loadMenuPage from './menu';
import css from "./styles.css";

const content = document.getElementById('content');
const mainButton = document.createElement('button');
const menuButton = document.createElement('button');
const contactButton = document.createElement('button');

mainButton.textContent = "Home";
menuButton.textContent = "Menu";


mainButton.onclick = changeToMainPage;
menuButton.onclick = changeToMenuPage;

function changeToMainPage() {
    content.removeChild(content.lastChild);
    content.appendChild(loadFrontPage());
};

function changeToMenuPage() {
    content.removeChild(content.lastChild);
    content.appendChild(loadMenuPage());
};

content.appendChild(mainButton);
content.appendChild(menuButton);

content.appendChild(loadFrontPage());

console.log("Hello webpack!");