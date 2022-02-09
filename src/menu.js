import tacosImg from "./images/tacos.jpg";
import streetTacoImg from "./images/street-taco.jpg"; //Photo by ROMAN ODINTSOV from Pexels
import waffleTacoImg from "./images/waffle-taco.jpg"; //Photo by Yaroslav Shuraev from Pexels
import iceCreamTacoImg from "./images/ice-cream-taco.jpg"; //Photo by RODNAE Productions from Pexels
import sushiTacoImg from "./images/sushi-taco.jpg";//Photo by Eiliv Aceron from Pexels
import fruitTacoImg from "./images/fruit-taco.jpg"; // Image by platinumproperties1 from Pixabay 


function loadMenuPage() {
    const menuPage = document.createElement("div");

    function createMenuHeader() {
        const header = document.createElement('header');
        const headerImageTaco = document.createElement('img');
        const headerHeading = document.createElement('h1');

        headerImageTaco.setAttribute('src', tacosImg);
        headerImageTaco.classList = "header-img-taco";

        headerHeading.textContent = "Taco Shop Menu";

        header.appendChild(headerImageTaco);
        header.appendChild(headerHeading);

        return header;
    }

    function createMenu() {
        const menuSection = document.createElement('Section');
        menuSection.className = "menu-section";
        const menuItems = [
            {title: 'Street Taco', image: streetTacoImg, description: "Don't mess with these tacos. Filled with all the traditional goodies."},
            {title: 'Waffle Taco', image: waffleTacoImg, description: "A taco inspired by maple syrup and ready to start any day."},
            {title: 'Sushi Taco', image: sushiTacoImg, description: "This taco rolled around in some rice, the rest is seaweed."},
            {title: 'Fruit Taco', image: fruitTacoImg, description: "An apple a day, might as well put it in a taco."},
            {title: 'Ice Cream Taco', image: iceCreamTacoImg, description: "This taco is great as a desert treat, or even if it's snowing."},
        ]
        
        menuItems.forEach((item) =>{
            const menuItem = document.createElement("article");
            menuItem.className = "menuItem";
            
            const menuItemTitle = document.createElement('h2');
            const menuItemImage = document.createElement('img');
            const menuItemDescription = document.createElement('p');

            menuItemTitle.textContent = item.title;
            menuItemImage.src = item.image;
            menuItemDescription.textContent = item.description;

            menuItem.appendChild(menuItemTitle);
            menuItem.appendChild(menuItemImage);
            menuItem.appendChild(menuItemDescription);
            
            menuSection.appendChild(menuItem);
        });

        

        return menuSection;
    }

    menuPage.appendChild(createMenuHeader());
    menuPage.appendChild(createMenu());

    return menuPage;
}

export default loadMenuPage;