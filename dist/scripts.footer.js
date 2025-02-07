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

/***/ "./src/footer/btcOnChain.js":
/*!**********************************!*\
  !*** ./src/footer/btcOnChain.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initBtcOnChain: () => (/* binding */ initBtcOnChain)\n/* harmony export */ });\n// ts-check\n/**\n * @typedef {import('@shoptet/datalayer').DataLayer} DataLayer\n */\n\n/** @type {DataLayer} */\nconst shoptetDataLayer = getShoptetDataLayer();\nfunction initBtcOnChain(btcAdres) {\n  function magicGetByTestId(selector) {\n    const element = document.querySelector(`[data-testid=\"${selector}\"]`);\n    return element.textContent.trim();\n  }\n  if (shoptetDataLayer.pageType === \"thankYou\" && magicGetByTestId(\"recapPaymentMethod\") === \"On-chain Bitcoin\") {\n    const recapitulation = document.querySelector(\".recapitulation-wrapper\");\n    const orderNo = shoptetDataLayer.order.orderNo;\n    const total = shoptetDataLayer.order.total;\n    const currencyCode = shoptetDataLayer.order.currencyCode;\n    fetch(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currencyCode}`).then(response => response.json()).then(data => {\n      const btcRate = data.bitcoin[currencyCode.toLowerCase()];\n      console.log(btcRate);\n      const btcAmount = total / btcRate;\n      const label = \"Eshop\";\n      const message = `Objednávka č. ${orderNo}`;\n      recapitulation.insertAdjacentHTML(\"beforebegin\", `\n        <div class=\"recapitulation-wrapper\">\n          <div class=\"order-summary-item total\">\n            QR kód pro ON-CHAIN Platbu\n          </div>\n          <div>\n            <img src=\"https://api.qrserver.com/v1/create-qr-code/?data=bitcoin:${btcAdres}?amount=${btcAmount}?label='${label}'?message='${message}'&size=300x300\" alt=\"QR kód pro platbu\" />\n          </div>\n          <div>\n            Pošlete ${btcAmount} BTC<br/> Na adresu:${btcAdres}\n          </div>\n        </div>\n      `);\n    }).catch(error => {\n      console.error(\"Chyba při získávání dat:\", error);\n      recapitulation.insertAdjacentHTML(\"beforebegin\", `\n         <div class=\"recapitulation-wrapper\">\n          <div class=\"order-summary-item total\">\n            Chyba platebního kódu. Kontaktujte nás prosím.\n          </div>\n        </div>`);\n    });\n  }\n}\n\n//# sourceURL=webpack://vodazivoda-ext/./src/footer/btcOnChain.js?");

/***/ }),

/***/ "./src/footer/script.js":
/*!******************************!*\
  !*** ./src/footer/script.js ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _btcOnChain_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./btcOnChain.js */ \"./src/footer/btcOnChain.js\");\n/* harmony import */ var _snowflakes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./snowflakes.js */ \"./src/footer/snowflakes.js\");\n// ts-check\n/**\n * @typedef {import('@shoptet/datalayer').DataLayer} DataLayer\n */\n/** @type {DataLayer} */\nconst shoptetDataLayer = getShoptetDataLayer();\n\n\n(0,_btcOnChain_js__WEBPACK_IMPORTED_MODULE_0__.initBtcOnChain)(`bc1qsp9j6af90pxlkj5tvmqgsva3nqngm624ygfezm`);\n(0,_snowflakes_js__WEBPACK_IMPORTED_MODULE_1__.createSnowflakes)();\n\n//# sourceURL=webpack://vodazivoda-ext/./src/footer/script.js?");

/***/ }),

/***/ "./src/footer/snowflakes.js":
/*!**********************************!*\
  !*** ./src/footer/snowflakes.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createSnowflakes: () => (/* binding */ createSnowflakes)\n/* harmony export */ });\nfunction getSnowflakeCount() {\n  const month = new Date().getMonth(); // Získání aktuálního měsíce (0 = leden, 1 = únor, ..., 11 = prosinec)\n\n  // Definování množství vloček podle měsíce\n  const snowfallMap = [20,\n  // Leden\n  30,\n  // Únor (nejvíce chumelí)\n  25,\n  // Březen\n  10,\n  // Duben\n  0,\n  // Květen (žádný sníh)\n  0,\n  // Červen\n  0,\n  // Červenec\n  0,\n  // Srpen\n  0,\n  // Září\n  5,\n  // Říjen (začátek sněhu)\n  15,\n  // Listopad\n  25 // Prosinec\n  ];\n  return snowfallMap[month]; // Vrátí počet vloček podle aktuálního měsíce\n}\n\n/**\n *\n * @param {number} initCount\n */\nfunction createSnowflakes(initCount) {\n  const count = initCount || getSnowflakeCount();\n  const container = document.querySelector(\".snowflakes\");\n  for (let i = 0; i < count; i++) {\n    let snowflake = document.createElement(\"div\");\n    snowflake.classList.add(\"snowflake\");\n    let inner = document.createElement(\"div\");\n    inner.classList.add(\"inner\");\n    inner.innerHTML = \"❅\";\n    snowflake.style.left = Math.random() * 100 + \"%\";\n    snowflake.style.animationDelay = Math.random() * 3 + \"s\";\n    inner.style.animationDelay = Math.random() * 10 + \"s\";\n    snowflake.appendChild(inner);\n    container.appendChild(snowflake);\n  }\n}\n\n//# sourceURL=webpack://vodazivoda-ext/./src/footer/snowflakes.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/footer/script.js");
/******/ 	
/******/ })()
;