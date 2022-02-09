import tacosImg from "./images/tacos.jpg";
import customerImg from "./images/customer.jpg";

function loadFrontPage() {
    const frontPage = document.createElement("div");

    function createHeader() {
        const header = document.createElement('header');
        const headerImageTaco = document.createElement('img');
        const headerHeading = document.createElement('h1');

        headerImageTaco.setAttribute('src', tacosImg);
        headerImageTaco.classList = "header-img-taco";

        headerHeading.textContent = "Welcome to the Taco Shop!";

        header.appendChild(headerImageTaco);
        header.appendChild(headerHeading);

        return header;
    }

    function createSection() {
        const section = document.createElement('section');
        const customerReaction = document.createElement('div');
        const quote = document.createElement('q');
        const author = document.createElement('figcaption');
        const authorImage = document.createElement('img');

        quote.textContent = "It's the Taco Shop or nothing!";
        author.textContent = "\u2014 Satisfied Customer";
        // Photo by logan hansen from Pexels
        authorImage.setAttribute('src', customerImg);
        authorImage.classList = "section-img-customer";

        customerReaction.appendChild(quote);
        customerReaction.appendChild(author);
        

        section.appendChild(authorImage);
        section.appendChild(customerReaction);

        return section;
    }

    function createFooter() {
        const footer = document.createElement('footer');

        footer.textContent = "Social Tacos";

        return footer;
    }


    frontPage.classList = 'content-front-page';

    frontPage.appendChild(createHeader());
    frontPage.appendChild(createSection());
    frontPage.appendChild(createFooter());
    
    return frontPage;
}

export default loadFrontPage;