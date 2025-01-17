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

/***/ "./src/header/script.js":
/*!******************************!*\
  !*** ./src/header/script.js ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nfunction getSnowflakeCount() {\n  const month = new Date().getMonth(); // Získání aktuálního měsíce (0 = leden, 1 = únor, ..., 11 = prosinec)\n\n  // Definování množství vloček podle měsíce\n  const snowfallMap = [200,\n  // Leden\n  300,\n  // Únor (nejvíce chumelí)\n  250,\n  // Březen\n  100,\n  // Duben\n  0,\n  // Květen (žádný sníh)\n  0,\n  // Červen\n  0,\n  // Červenec\n  0,\n  // Srpen\n  0,\n  // Září\n  50,\n  // Říjen (začátek sněhu)\n  150,\n  // Listopad\n  250 // Prosinec\n  ];\n  return snowfallMap[month]; // Vrátí počet vloček podle aktuálního měsíce\n}\nfunction createSnowflakes(count) {\n  const container = document.querySelector(\".snowflakes\");\n  for (let i = 0; i < count; i++) {\n    let snowflake = document.createElement(\"div\");\n    snowflake.classList.add(\"snowflake\");\n    let inner = document.createElement(\"div\");\n    inner.classList.add(\"inner\");\n    inner.innerHTML = \"❅\";\n    snowflake.style.left = Math.random() * 100 + \"%\";\n    snowflake.style.animationDelay = Math.random() * 3 + \"s\";\n    inner.style.animationDelay = Math.random() * 10 + \"s\";\n    snowflake.appendChild(inner);\n    container.appendChild(snowflake);\n  }\n}\nconst snowflakeCount = getSnowflakeCount();\ncreateSnowflakes(snowflakeCount);\n\n//# sourceURL=webpack://vodazivoda-ext/./src/header/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/header/script.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;