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

/***/ "./src/addtask.js":
/*!************************!*\
  !*** ./src/addtask.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addtask: () => (/* binding */ addtask)\n/* harmony export */ });\nfunction addtask() {\n  document.addEventListener(\"DOMContentLoaded\", function () {\n    var addTaskIcon = document.getElementById(\"addtask\");\n    var addTaskForm = document.getElementById(\"addTaskForm\");\n    var taskForm = document.getElementById(\"taskForm\");\n    var cross = document.getElementById(\"cross\");\n    addTaskIcon.addEventListener(\"click\", function () {\n      addTaskForm.classList.add(\"active\");\n    });\n    cross.addEventListener(\"click\", function () {\n      addTaskForm.classList.remove(\"active\");\n    });\n    taskForm.addEventListener(\"submit\", function (event) {\n      event.preventDefault();\n      var task_template = document.querySelector(\"#task-template\");\n      var clone_task = task_template.content.cloneNode(true);\n      var difficultySelect = document.querySelector(\"input[name='difficulty']:checked\");\n      var taskInput = document.querySelector(\"#taskName\").value;\n      clone_task.querySelector(\"#task\").textContent = taskInput;\n      var todoList = document.getElementById(\"todo_task\");\n      var selectedDifficulty = difficultySelect.value;\n      var difficultyColors = {\n        Easy: \"rgba(66, 255, 0, 0.56)\",\n        Medium: \"rgba(240, 164, 16, 0.56)\",\n        Hard: \"rgba(255, 0, 0, 0.56)\"\n      };\n      clone_task.querySelector(\"#task\").textContent = taskInput;\n      clone_task.querySelector(\"#difficulty\").textContent = selectedDifficulty;\n      clone_task.querySelector(\"#difficulty\").style.backgroundColor = difficultyColors[selectedDifficulty];\n      todoList.appendChild(clone_task);\n      taskForm.reset();\n      addTaskForm.classList.remove(\"active\");\n    });\n  });\n}\n\n//# sourceURL=webpack://my-webpack-project/./src/addtask.js?");

/***/ }),

/***/ "./src/darkmode.js":
/*!*************************!*\
  !*** ./src/darkmode.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   toggleDarkMode: () => (/* binding */ toggleDarkMode)\n/* harmony export */ });\n// Fonction pour mettre à jour le mode sombre\nfunction toggleDarkMode() {\n  var toggleSwitch = document.querySelector(\".checkbox\");\n  var container = document.querySelector(\"body\");\n  var logoElement = document.querySelector(\"#logo\");\n  var ul = document.querySelector(\"ul\");\n  var li = document.querySelector(\"li\");\n  var originalLogoSrc = logoElement.src;\n  toggleSwitch.addEventListener(\"change\", function () {\n    if (toggleSwitch.checked) {\n      logoElement.src = \"./image/logo-dark-mode.webp\";\n      container.classList.add(\"dark-mode\", \"dark-transition\");\n      ul.classList.add(\"dark-mode\");\n      li.classList.add(\"dark-mode\");\n    } else {\n      logoElement.src = originalLogoSrc;\n      container.classList.remove(\"dark-mode\", \"dark-transition\");\n      ul.classList.remove(\"dark-mode\");\n      li.classList.remove(\"dark-mode\");\n    }\n  });\n}\n\n//# sourceURL=webpack://my-webpack-project/./src/darkmode.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.sass */ \"./src/style.sass\");\n/* harmony import */ var _addtask_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addtask.sass */ \"./src/addtask.sass\");\n/* harmony import */ var _darkmode_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./darkmode.sass */ \"./src/darkmode.sass\");\n/* harmony import */ var _template_creation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./template_creation */ \"./src/template_creation.js\");\n/* harmony import */ var _addtask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./addtask */ \"./src/addtask.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _darkmode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./darkmode */ \"./src/darkmode.js\");\n\n\n\n\n\n\n\n(0,_template_creation__WEBPACK_IMPORTED_MODULE_3__.template_creation)();\n(0,_menu__WEBPACK_IMPORTED_MODULE_5__.menu)();\n(0,_addtask__WEBPACK_IMPORTED_MODULE_4__.addtask)();\n(0,_darkmode__WEBPACK_IMPORTED_MODULE_6__.toggleDarkMode)();\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   menu: () => (/* binding */ menu)\n/* harmony export */ });\nfunction menu() {\n  var menus = document.querySelectorAll(\"#menutroispoints\");\n  var renames = document.querySelectorAll(\"#rename\");\n  var suprs = document.querySelectorAll(\"#delete\");\n  var meenus = document.querySelectorAll(\"menu\");\n  menus.forEach(function (menu, index) {\n    menu.addEventListener(\"click\", function (e) {\n      if (renames[index].style.display === \"none\" && suprs[index].style.display === \"none\") {\n        renames[index].style.display = \"block\";\n        suprs[index].style.display = \"block\";\n        menu.parentElement.style.marginTop = \"80px\";\n      } else {\n        renames[index].style.display = \"none\";\n        suprs[index].style.display = \"none\";\n        menu.parentElement.style.marginTop = \"20px\";\n      }\n    });\n  });\n}\n;\n\n//# sourceURL=webpack://my-webpack-project/./src/menu.js?");

/***/ }),

/***/ "./src/template_creation.js":
/*!**********************************!*\
  !*** ./src/template_creation.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   template_creation: () => (/* binding */ template_creation)\n/* harmony export */ });\nfunction template_creation() {\n  var container = document.querySelector(\"#app\");\n  console.log(container);\n\n  // On récupère le template souhaité\n  var template = document.querySelector(\"#base-template\");\n  var task_template = document.querySelector(\"#task-template\");\n  var addtask_template = document.querySelector(\"#task-create\");\n\n  // On clone le template \n  var clone = document.importNode(template.content, true);\n  var clone_task = document.importNode(task_template.content, true);\n  var clone_addtask = document.importNode(addtask_template.content, true);\n\n  //On va chercher les balise que l'on souhaite//\n  var ul = clone.querySelector(\"#todo_task\");\n  var done = clone.querySelector(\"#done_task\");\n  var inprogress = clone.querySelector(\"#in-progress_task\");\n\n  //On inject le contenu souhaité\n  container.appendChild(clone);\n  container.appendChild(clone_addtask);\n}\n\n//# sourceURL=webpack://my-webpack-project/./src/template_creation.js?");

/***/ }),

/***/ "./src/addtask.sass":
/*!**************************!*\
  !*** ./src/addtask.sass ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-webpack-project/./src/addtask.sass?");

/***/ }),

/***/ "./src/darkmode.sass":
/*!***************************!*\
  !*** ./src/darkmode.sass ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-webpack-project/./src/darkmode.sass?");

/***/ }),

/***/ "./src/style.sass":
/*!************************!*\
  !*** ./src/style.sass ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-webpack-project/./src/style.sass?");

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