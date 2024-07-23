import { createHomeTab } from './HomeTab.js';
import { createMenuTab } from './MenuTab.js';
import { createContactTab } from './ContactTab.js';
import './style.css'

const createTabSwitcher = () => {
    const content = document.getElementById('content');
    const tabs = document.querySelectorAll('nav button');

    const clearContent = () => {
        content.innerHTML = '';
    };

    const switchTab = (createTabFunction, clickedTab) => {
        clearContent();
        const tabContent = createTabFunction();
        content.appendChild(tabContent);

        tabs.forEach(tab => tab.classList.remove('active'));
        clickedTab.classList.add('active');
    };

    const setTheme = (tab) => {
        const root = document.documentElement;
        switch(tab) {
            case 'home':
                root.style.setProperty('--primary-color', '#007bff');
                break;
            case 'menu':
                root.style.setProperty('--primary-color', '#28a745');
                break;
            case 'contact':
                root.style.setProperty('--primary-color', '#dc3545');
                break;
        }
    };

    return {
        switchToHome: (event) => {
            switchTab(createHomeTab, event.target);
            setTheme('home');
        },
        switchToMenu: (event) => {
            switchTab(createMenuTab, event.target);
            setTheme('menu');
        },
        switchToContact: (event) => {
            switchTab(createContactTab, event.target);
            setTheme('contact');
        }
    };
};

document.addEventListener('DOMContentLoaded', () => {
    const tabSwitcher = createTabSwitcher();
    document.getElementById('home-tab').addEventListener('click', tabSwitcher.switchToHome);
    document.getElementById('menu-tab').addEventListener('click', tabSwitcher.switchToMenu);
    document.getElementById('contact-tab').addEventListener('click', tabSwitcher.switchToContact);

    tabSwitcher.switchToHome({ target: document.getElementById('home-tab') });
});

function setCurrentYear() {
    const yearSpan = document.getElementById('currentYear');
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
}

document.addEventListener('DOMContentLoaded', setCurrentYear);