import loadFrontPage from './front';
import css from "./styles.css";

const content = document.getElementById('content');

content.appendChild(loadFrontPage());

console.log("Hello webpack!");