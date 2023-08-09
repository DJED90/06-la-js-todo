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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addtask: () => (/* binding */ addtask)\n/* harmony export */ });\nfunction addtask() {\n  document.addEventListener(\"DOMContentLoaded\", function () {\n    var overlay = document.createElement(\"div\");\n    overlay.id = \"overlay\";\n    overlay.className = \"overlay\";\n    document.body.appendChild(overlay);\n    var addTaskIcon = document.getElementById(\"addtask\");\n    var addTaskForm = document.getElementById(\"addTaskForm\");\n    var taskForm = document.getElementById(\"taskForm\");\n    addTaskIcon.addEventListener(\"click\", function () {\n      overlay.style.display = \"block\";\n      addTaskForm.style.display = \"block\";\n    });\n    overlay.addEventListener(\"click\", function () {\n      overlay.style.display = \"none\";\n      addTaskForm.style.display = \"none\";\n    });\n    taskForm.addEventListener(\"submit\", function (event) {\n      event.preventDefault();\n      var taskName = document.getElementById(\"taskName\").value;\n      var difficulty = document.getElementById(\"difficulty\").value;\n\n      // Ajoutez ici la logique pour ajouter la tâche à votre liste\n      // Créez un nouvel élément li en utilisant les données du formulaire et ajoutez-le à la liste appropriée\n      // Puis réinitialisez le formulaire et cachez le formulaire\n      // Par exemple :\n      // const newTaskElement = document.createElement(\"li\");\n      // newTaskElement.innerHTML = `...`; // Utilisez les données du formulaire pour personnaliser le contenu\n      // document.getElementById(\"todo_task\").appendChild(newTaskElement);\n\n      taskForm.reset();\n      overlay.style.display = \"none\";\n      addTaskForm.style.display = \"none\";\n    });\n  });\n}\n\n//# sourceURL=webpack://my-webpack-project/./src/addtask.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.sass */ \"./src/style.sass\");\n/* harmony import */ var _addtask_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addtask.sass */ \"./src/addtask.sass\");\n/* harmony import */ var _template_creation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./template_creation */ \"./src/template_creation.js\");\n/* harmony import */ var _addtask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addtask */ \"./src/addtask.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n\n\n\n\n\n(0,_template_creation__WEBPACK_IMPORTED_MODULE_2__.template_creation)();\n(0,_menu__WEBPACK_IMPORTED_MODULE_4__.menu)();\n(0,_addtask__WEBPACK_IMPORTED_MODULE_3__.addtask)();\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   menu: () => (/* binding */ menu)\n/* harmony export */ });\nfunction menu() {\n  var menu = document.querySelector(\"#menutroispoints\");\n  var rename = document.querySelector(\"#rename\");\n  var supr = document.querySelector(\"#delete\");\n  menu.addEventListener(\"click\", function (e) {\n    if (rename.style.display == \"none\" && supr.style.display == \"none\") {\n      rename.style.display = \"block\";\n      supr.style.display = \"block\";\n    } else {\n      rename.style.display = \"none\";\n      supr.style.display = \"none\";\n    }\n  });\n}\n\n//# sourceURL=webpack://my-webpack-project/./src/menu.js?");

/***/ }),

/***/ "./src/template_creation.js":
/*!**********************************!*\
  !*** ./src/template_creation.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   template_creation: () => (/* binding */ template_creation)\n/* harmony export */ });\nfunction template_creation() {\n  var container = document.querySelector(\"#app\");\n  console.log(container);\n\n  // On récupère le template souhaité\n  var template = document.querySelector(\"#base-template\");\n  var task_template = document.querySelector(\"#task-template\");\n  var addtask_template = document.querySelector(\"#task-create\");\n\n  // On clone le template \n  var clone = document.importNode(template.content, true);\n  var clone_task = document.importNode(task_template.content, true);\n  var clone_addtask = document.importNode(addtask_template.content, true);\n\n  //On va chercher les balise que l'on souhaite//\n  var ul = clone.querySelector(\"#todo_task\");\n  var done = clone.querySelector(\"#done_task\");\n  var inprogress = clone.querySelector(\"#in-progress_task\");\n\n  //On inject le contenu souhaité\n  container.appendChild(clone);\n  ul.appendChild(clone_task);\n  container.appendChild(clone_addtask);\n\n  // Clonez le modèle de tâche pour les tâches \"Done\" et ajoutez-le à la liste \"Done\"\n  var clone_task_done = document.importNode(task_template.content, true);\n  done.appendChild(clone_task_done);\n  // Clonez le modèle de tâche pour les tâches \"In-progress\" et ajoutez-le à la liste \"In-progress\"\n  var clone_task_progress = document.importNode(task_template.content, true);\n  inprogress.appendChild(clone_task_progress);\n}\n\n//# sourceURL=webpack://my-webpack-project/./src/template_creation.js?");

/***/ }),

/***/ "./src/addtask.sass":
/*!**************************!*\
  !*** ./src/addtask.sass ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-webpack-project/./src/addtask.sass?");

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