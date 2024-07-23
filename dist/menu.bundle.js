/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!************************!*\
  !*** ./src/MenuTab.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createMenuTab: () => (/* binding */ createMenuTab)
/* harmony export */ });
function createMenuTab() {
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
/******/ })()
;