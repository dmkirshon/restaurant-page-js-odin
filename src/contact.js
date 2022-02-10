import tacosImg from "./images/tacos.jpg";

function loadContactPage() {
    const contactPage = document.createElement("div");

    function createContactHeader() {
        const header = document.createElement('header');
        const headerImageTaco = document.createElement('img');
        const headerHeading = document.createElement('h1');

        headerImageTaco.setAttribute('src', tacosImg);
        headerImageTaco.classList = "header-img-taco";

        headerHeading.textContent = "Taco Shop Contact";

        header.appendChild(headerImageTaco);
        header.appendChild(headerHeading);

        return header;
    }

    function createContact() {
        const contactInfo = {
            title: "Taco Shop",
            address: "123 Taco Way \nTaco City, Taco Land 00000",
            phone: "111-111-taco",
            email: "taco@taco.taco",
        };

        const contactSection = document.createElement('section');
        contactSection.className = "contact-section";
        
        const contactBlock = document.createElement('p');
        contactBlock.className = "contact-block";

        Object.entries(contactInfo).forEach(([key, value]) => contactBlock.textContent += value + '\n\n');
        contactSection.appendChild(contactBlock);

        return contactSection;
    }

    contactPage.appendChild(createContactHeader());
    contactPage.appendChild(createContact());

    return contactPage;
}

export default loadContactPage;