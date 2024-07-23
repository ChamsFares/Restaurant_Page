export function createContactTab() {
    const contactContent = document.createElement('div');
    contactContent.classList.add('tab-content');

    const h1 = document.createElement('h1');
    h1.textContent = 'Contact Us';
    contactContent.appendChild(h1);

    const p = document.createElement('p');
    p.textContent = 'Get in touch with us:';
    contactContent.appendChild(p);

    const contactInfo = document.createElement('div');
    contactInfo.innerHTML = `
        <p>Phone: (555) 123-4567</p>
        <p>Email: info@flavorhaven.com</p>
        <p>Address: 123 Tasty Street, Foodville, FD 12345</p>
    `;
    contactContent.appendChild(contactInfo);

    return contactContent;
}