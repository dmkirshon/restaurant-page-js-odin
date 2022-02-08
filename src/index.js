import loadFrontPage from './front';

const content = document.getElementById('content');

content.appendChild(loadFrontPage());

console.log("Hello webpack!");