export function createMenuTab() {
    const menuContent = document.createElement('div');
    menuContent.classList.add('tab-content');

    const h1 = document.createElement('h1');
    h1.textContent = 'Our Menu';
    menuContent.appendChild(h1);

    const menuItems = [
        { name: 'Grilled Salmon', price: '$22' },
        { name: 'Vegetarian Pasta', price: '$18' },
        { name: 'Steak Frites', price: '$25' },
        { name: 'Caesar Salad', price: '$12' }
    ];

    const ul = document.createElement('ul');
    menuItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ${item.price}`;
        ul.appendChild(li);
    });

    menuContent.appendChild(ul);

    return menuContent;
}