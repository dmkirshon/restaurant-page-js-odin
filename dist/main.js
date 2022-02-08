/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/front.js":
/*!**********************!*\
  !*** ./src/front.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction loadFrontPage() {\n    const frontPage = document.getElementById(\"content\");\n\n    function createHeader() {\n        const header = document.createElement('header');\n        const headerImageTaco = document.createElement('img');\n        const headerHeading = document.createElement('h1');\n\n        headerImageTaco.setAttribute('src','./tacos.jpg');\n        headerImageTaco.classList = \"header-img-taco\";\n\n        headerHeading.textContent = \"Welcome to the Taco Shop!\";\n\n        header.appendChild(headerImageTaco);\n        header.appendChild(headerHeading);\n\n        return header;\n    }\n\n    function createSection() {\n        const section = document.createElement('section');\n        const quote = document.createElement('q');\n        const author = document.createElement('figcaption');\n\n        quote.textContent = \"It's the Taco Shop or nothing!\";\n        author.textContent = \"\\u2014 Satisfied Customer\";\n\n        section.appendChild(quote);\n        section.appendChild(author);\n\n        return section;\n    }\n\n    function createFooter() {\n        const footer = document.createElement('footer');\n\n        footer.textContent = \"Social Tacos\";\n\n        return footer;\n    }\n\n    frontPage.appendChild(createHeader());\n    frontPage.appendChild(createSection());\n    frontPage.appendChild(createFooter());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadFrontPage);\n\n//# sourceURL=webpack://restaurant-page-js-odin/./src/front.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _front__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./front */ \"./src/front.js\");\n\n\n(0,_front__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\nconsole.log(\"Hello webpack!\");\n\n//# sourceURL=webpack://restaurant-page-js-odin/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;