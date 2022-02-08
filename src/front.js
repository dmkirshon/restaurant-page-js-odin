function loadFrontPage() {
    const frontPage = document.getElementById("content");

    function createHeader() {
        const header = document.createElement('header');
        const headerImageTaco = document.createElement('img');
        const headerHeading = document.createElement('h1');

        headerImageTaco.setAttribute('src','./tacos.jpg');
        headerImageTaco.classList = "header-img-taco";

        headerHeading.textContent = "Welcome to the Taco Shop!";

        header.appendChild(headerImageTaco);
        header.appendChild(headerHeading);

        return header;
    }

    function createSection() {
        const section = document.createElement('section');
        const quote = document.createElement('q');
        const author = document.createElement('figcaption');

        quote.textContent = "It's the Taco Shop or nothing!";
        author.textContent = "\u2014 Satisfied Customer";

        section.appendChild(quote);
        section.appendChild(author);

        return section;
    }

    function createFooter() {
        const footer = document.createElement('footer');

        footer.textContent = "Social Tacos";

        return footer;
    }

    frontPage.appendChild(createHeader());
    frontPage.appendChild(createSection());
    frontPage.appendChild(createFooter());
}

export default loadFrontPage;