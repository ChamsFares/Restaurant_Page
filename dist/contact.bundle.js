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
/*!***************************!*\
  !*** ./src/ContactTab.js ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createContactTab: () => (/* binding */ createContactTab)
/* harmony export */ });
function createContactTab() {
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
/******/ })()
;