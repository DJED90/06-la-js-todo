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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addtask: () => (/* binding */ addtask),\n/* harmony export */   removetask: () => (/* binding */ removetask),\n/* harmony export */   updateLocalStorage: () => (/* binding */ updateLocalStorage)\n/* harmony export */ });\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _darkmode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./darkmode */ \"./src/darkmode.js\");\n//J'importe la fonction menu afin de pouvoir ciblé les tâches crées avec ma fonction \"menu\"\n\n\nfunction addtask() {\n  document.addEventListener(\"DOMContentLoaded\", function () {\n    var addTaskIcon = document.getElementById(\"addtask\");\n    var addTaskForm = document.getElementById(\"addTaskForm\");\n    var taskForm = document.getElementById(\"taskForm\");\n    var cross = document.getElementById(\"cross\");\n    addTaskIcon.addEventListener(\"click\", function () {\n      addTaskForm.classList.add(\"active\");\n    });\n    cross.addEventListener(\"click\", function () {\n      addTaskForm.classList.remove(\"active\");\n    });\n    taskForm.addEventListener(\"submit\", function (event) {\n      event.preventDefault();\n      var task_template = document.querySelector(\"#task-template\");\n      var clone_task = task_template.content.cloneNode(true);\n      var difficultySelect = document.querySelector(\"input[name='difficulty']:checked\");\n      var taskInput = document.querySelector(\"#taskName\").value;\n      clone_task.querySelector(\"#task\").textContent = taskInput;\n      var todoList = document.getElementById(\"todo_task\");\n      var selectedDifficulty = difficultySelect.value;\n      var difficultyColors = {\n        Easy: \"rgba(66, 255, 0, 0.56)\",\n        Medium: \"rgba(240, 164, 16, 0.56)\",\n        Hard: \"rgba(255, 0, 0, 0.56)\"\n      };\n      clone_task.querySelector(\"#task\").textContent = taskInput;\n      clone_task.querySelector(\"#difficulty\").textContent = selectedDifficulty;\n      clone_task.querySelector(\"#difficulty\").style.backgroundColor = difficultyColors[selectedDifficulty];\n      todoList.appendChild(clone_task);\n      taskForm.reset();\n      addTaskForm.classList.remove(\"active\");\n      (0,_darkmode__WEBPACK_IMPORTED_MODULE_1__.toggleDarkMode)();\n      (0,_menu__WEBPACK_IMPORTED_MODULE_0__.menu)();\n      removetask();\n\n      //Sauvegarde des tâches dans le localstorage\n      // Cette ligne de code récupère le contenu associé à la clé \"tasks\" dans le localStorage. La méthode getItem est utilisée pour récupérer la valeur de la clé \"tasks\". La valeur est stockée en tant que chaîne JSON, donc nous utilisons JSON.parse pour la convertir en un tableau JavaScript. Si la clé \"tasks\" n'existe pas ou si elle est vide, le || [] à la fin garantit que nous initialisons tasks avec un tableau vide.\n      var tasks = JSON.parse(localStorage.getItem(\"tasks\")) || [];\n      //Ici, nous ajoutons un nouvel objet à tasks contenant les informations de la nouvelle tâche. Les valeurs taskInput et selectedDifficulty proviennent des champs de saisie de l'utilisateur.\n      tasks.push({\n        task: taskInput,\n        difficulty: selectedDifficulty\n      });\n      //Une fois que nous avons mis à jour le tableau tasks, nous utilisons JSON.stringify pour convertir ce tableau en une chaîne JSON. Ensuite, nous utilisons localStorage.setItem pour enregistrer cette chaîne JSON dans le localStorage sous la clé \"tasks\". Cela permet de stocker les tâches de manière persistante dans le navigateur, même après la fermeture de la page\n      localStorage.setItem(\"tasks\", JSON.stringify(tasks));\n    });\n    // Charger les tâches depuis le localStorage\n    var task_template = document.querySelector(\"#task-template\");\n    var difficultyColors = {\n      Easy: \"rgba(66, 255, 0, 0.56)\",\n      Medium: \"rgba(240, 164, 16, 0.56)\",\n      Hard: \"rgba(255, 0, 0, 0.56)\"\n    };\n    //Cette ligne récupère les données enregistrées sous la clé \"tasks\" dans le localStorage.\n    var savedTasks = JSON.parse(localStorage.getItem(\"tasks\")) || [];\n    var todoList = document.getElementById(\"todo_task\");\n    savedTasks.forEach(function (savedTask) {\n      if (!savedTask.deleted) {\n        var clone_task = task_template.content.cloneNode(true);\n        //met à jour le contenu de l'élément correspondant au nom de la tâche\n        clone_task.querySelector(\"#task\").textContent = savedTask.task;\n        clone_task.querySelector(\"#difficulty\").textContent = savedTask.difficulty;\n        clone_task.querySelector(\"#difficulty\").style.backgroundColor = difficultyColors[savedTask.difficulty];\n        todoList.appendChild(clone_task);\n        (0,_menu__WEBPACK_IMPORTED_MODULE_0__.menu)();\n        removetask();\n      }\n    });\n  });\n}\nfunction removetask() {\n  var remove = document.querySelectorAll(\".delete\");\n  console.log(remove);\n  remove.forEach(function (removeTask) {\n    removeTask.addEventListener(\"click\", function () {\n      var taskElement = removeTask.closest(\"li\");\n      if (taskElement) {\n        taskElement.remove();\n        taskElement.classList.add(\"deleted\");\n        //Mettre à jour le localStorage pour garder en savegarde la suppression de la tâche\n        updateLocalStorage();\n        (0,_menu__WEBPACK_IMPORTED_MODULE_0__.menu)();\n      }\n    });\n  });\n}\nfunction updateLocalStorage() {\n  var tasks = [];\n  var taskElements = document.querySelectorAll(\".task\");\n  taskElements.forEach(function (taskElement) {\n    if (!taskElement.classList.contains(\"deleted\")) {\n      // Exclure les tâches supprimées\n      var taskName = taskElement.querySelector(\"#task\").textContent;\n      var difficulty = taskElement.querySelector(\"#difficulty\").textContent;\n      tasks.push({\n        task: taskName,\n        difficulty: difficulty\n      });\n    }\n  });\n  localStorage.setItem(\"tasks\", JSON.stringify(tasks));\n}\n;\n\n//# sourceURL=webpack://my-webpack-project/./src/addtask.js?");

/***/ }),

/***/ "./src/darkmode.js":
/*!*************************!*\
  !*** ./src/darkmode.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   toggleDarkMode: () => (/* binding */ toggleDarkMode)\n/* harmony export */ });\n// Fonction pour mettre à jour le mode sombre\nfunction toggleDarkMode() {\n  var toggleSwitch = document.querySelector(\".checkbox\");\n  var container = document.querySelector(\"body\");\n  var logoElement = document.querySelector(\"#logo\");\n  var originalLogoSrc = logoElement.src;\n  toggleSwitch.addEventListener(\"change\", function () {\n    if (toggleSwitch.checked) {\n      logoElement.src = \"./image/logo-dark-mode.webp\";\n      container.classList.add(\"dark-mode\", \"dark-transition\");\n      applyDarkModeToElements(\"ul\");\n      applyDarkModeToElements(\"li\");\n      applyDarkModeToElements(\"#addtask\");\n    } else {\n      logoElement.src = originalLogoSrc;\n      container.classList.remove(\"dark-mode\", \"dark-transition\");\n      removeDarkModeFromElements(\"ul\");\n      removeDarkModeFromElements(\"li\");\n      removeDarkModeFromElements(\"#addtask\");\n    }\n  });\n  function applyDarkModeToElements(selector) {\n    var elements = document.querySelectorAll(selector);\n    elements.forEach(function (element) {\n      element.classList.add(\"dark-mode\");\n    });\n  }\n  function removeDarkModeFromElements(selector) {\n    var elements = document.querySelectorAll(selector);\n    elements.forEach(function (element) {\n      element.classList.remove(\"dark-mode\");\n    });\n  }\n}\n\n//# sourceURL=webpack://my-webpack-project/./src/darkmode.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.sass */ \"./src/style.sass\");\n/* harmony import */ var _addtask_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addtask.sass */ \"./src/addtask.sass\");\n/* harmony import */ var _darkmode_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./darkmode.sass */ \"./src/darkmode.sass\");\n/* harmony import */ var _template_creation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./template_creation */ \"./src/template_creation.js\");\n/* harmony import */ var _addtask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./addtask */ \"./src/addtask.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _darkmode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./darkmode */ \"./src/darkmode.js\");\n\n\n\n\n\n\n\n(0,_template_creation__WEBPACK_IMPORTED_MODULE_3__.template_creation)();\n(0,_addtask__WEBPACK_IMPORTED_MODULE_4__.addtask)();\n(0,_darkmode__WEBPACK_IMPORTED_MODULE_6__.toggleDarkMode)();\n(0,_menu__WEBPACK_IMPORTED_MODULE_5__.menu)();\n(0,_addtask__WEBPACK_IMPORTED_MODULE_4__.removetask)();\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   menu: () => (/* binding */ menu)\n/* harmony export */ });\nfunction menu() {\n  var menus = document.querySelectorAll(\".menutroispoints\");\n  var renames = document.querySelectorAll(\".rename\");\n  var suprs = document.querySelectorAll(\".delete\");\n  menus.forEach(function (menu, index) {\n    menu.addEventListener(\"click\", function (e) {\n      if (renames[index].style.display === \"none\" && suprs[index].style.display === \"none\") {\n        renames[index].style.display = \"block\";\n        suprs[index].style.display = \"block\";\n        menu.parentElement.style.marginTop = \"80px\";\n      } else {\n        renames[index].style.display = \"none\";\n        suprs[index].style.display = \"none\";\n        menu.parentElement.style.marginTop = \"20px\";\n      }\n    });\n  });\n}\n;\n\n//# sourceURL=webpack://my-webpack-project/./src/menu.js?");

/***/ }),

/***/ "./src/template_creation.js":
/*!**********************************!*\
  !*** ./src/template_creation.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   template_creation: () => (/* binding */ template_creation)\n/* harmony export */ });\nfunction template_creation() {\n  var container = document.querySelector(\"#app\");\n\n  // On récupère le template souhaité\n  var template = document.querySelector(\"#base-template\");\n  var task_template = document.querySelector(\"#task-template\");\n  var addtask_template = document.querySelector(\"#task-create\");\n\n  // On clone le template \n  var clone = document.importNode(template.content, true);\n  var clone_task = document.importNode(task_template.content, true);\n  var clone_addtask = document.importNode(addtask_template.content, true);\n\n  //On va chercher les balise que l'on souhaite//\n  var ul = clone.querySelector(\"#todo_task\");\n  var done = clone.querySelector(\"#done_task\");\n  var inprogress = clone.querySelector(\"#in-progress_task\");\n\n  //On inject le contenu souhaité\n  container.appendChild(clone);\n  container.appendChild(clone_addtask);\n}\n\n//# sourceURL=webpack://my-webpack-project/./src/template_creation.js?");

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