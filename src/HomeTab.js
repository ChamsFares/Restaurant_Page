import Img from './ResturantInteriorDesign.jpg';

export function createHomeTab() {
    const homeContent = document.createElement('div');
    homeContent.classList.add('tab-content');

    const h1 = document.createElement('h1');
    h1.textContent = 'Welcome to Flavor Haven';
    homeContent.appendChild(h1);

    const img = new Image();
    img.src = Img;
    img.alt = 'Flavor Haven Interior';
    img.width = 600;
    img.height = 400;
    homeContent.appendChild(img);

    const p = document.createElement('p');
    p.textContent = 'Experience culinary excellence at Flavor Haven. Our chefs craft exquisite dishes using only the finest, locally-sourced ingredients.';
    homeContent.appendChild(p);

    return homeContent;
}