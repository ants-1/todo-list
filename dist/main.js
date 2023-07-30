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

/***/ "./src/UI.js":
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n\n\n\nconst UI = (() => {\n  const menuIcon = document.querySelector('.icon-bar');\n  const sidebar = document.getElementById('sidebar');\n  const addProjectBtn = document.querySelector('.add-project-btn');\n  const newProject = document.querySelector('.new-project');\n  const addNewProjectBtn = document.querySelector('.add-project');\n  const addTaskBtn = document.querySelector('.add-task');\n  const addNewTask = document.querySelector('.add-new-task');\n  const addNewTaskBtn = document.querySelector('.add-task-btn');\n  const taskList = document.querySelector('.task-list');\n  const cancelProjectBtn = document.querySelector('.cancel-project');\n  const cancelTaskBtn = document.querySelector('.cancel-task-btn');\n  const projectSection = document.querySelector('.project-list');\n  const overlay = document.getElementById('overlay');\n\n  function toggleMenu(elem) {\n    if (elem.classList.contains('hidden')) {\n      elem.classList.remove('hidden');\n    } else {\n      elem.classList.add('hidden');\n    }\n  }\n\n  function overlayOn() {\n    overlay.style.display = 'block';\n  }\n\n  function overlayOff() {\n    overlay.style.display = 'none';\n  }\n\n  function openMenu(elem) {\n    if (elem.classList.contains('hidden')) {\n      elem.classList.remove('hidden');\n    }\n  }\n\n  function closeMenu(elem) {\n    if (!elem.classList.contains('hidden')) {\n      elem.classList.add('hidden');\n    }\n  }\n\n  function createDiv(classNames) {\n    const div = document.createElement('div');\n    div.classList.add(...classNames);\n\n    return div;\n  }\n\n  function createInput(type, name, id) {\n    const input = document.createElement('input');\n    input.type = type;\n    input.name = name;\n    input.id = id;\n\n    return input;\n  }\n\n  function createPara(classNames, text) {\n    const para = document.createElement('p');\n    para.classList.add(...classNames);\n    para.textContent = text;\n\n    return para;\n  }\n\n  function createBtn(classNames, text) {\n    const btn = document.createElement('button');\n    btn.classList.add(...classNames);\n    btn.textContent = text;\n\n    return btn;\n  }\n\n  function createTaskCard(title, date, priority) {\n    const taskCard = createDiv(['task-card', 'new-task']);\n    const left = createDiv(['left']);\n    const right = createDiv(['right']);\n    const taskPriority = createDiv(['priority']);\n    const checkbox = createInput('checkbox', 'checkbox', 'checkbox');\n    const taskTitle = createPara(['task-title'], title);\n    const dueDate = createPara(['due-date'], date);\n    const removeTask = createPara(['remove-task'], 'X');\n\n    if (priority === 'high') {\n      taskPriority.style.backgroundColor = '#ff6d60';\n    } else if (priority === 'mid') {\n      taskPriority.style.backgroundColor = '#f3e99f';\n    } else if (priority === 'low') {\n      taskPriority.style.backgroundColor = '#98d8aa';\n    } else {\n      taskPriority.style.backgroundColor = '#3c486b';\n    }\n\n    left.appendChild(taskPriority);\n    left.appendChild(checkbox);\n    left.appendChild(taskTitle);\n    right.appendChild(dueDate);\n    right.appendChild(removeTask);\n    taskCard.appendChild(left);\n    taskCard.appendChild(right);\n\n    return taskCard;\n  }\n\n  function createTask() {\n    const title = document.getElementById('new-task-title').value;\n    let dueDate = document.getElementById('new-task-date').value;\n    const priority = document.getElementById('new-task-priority').value;\n\n    if (title === '') {\n      alert('Please enter task name');\n      return;\n    }\n\n    if (dueDate === '') {\n      dueDate = 'No Date';\n    }\n\n    const newTask = new _task__WEBPACK_IMPORTED_MODULE_0__[\"default\"](title, dueDate, priority);\n    const newTaskCard = createTaskCard(\n      newTask.getTitle(),\n      newTask.getDate(),\n      newTask.getPriority(),\n    );\n\n    taskList.prepend(newTaskCard);\n    console.log(newTask);\n\n    return newTaskCard;\n  }\n\n  function deleteTask(taskCard) {\n    taskCard.remove();\n  }\n\n  function createProjectCard(title) {\n    const projectCard = createBtn(['project'], title);\n\n    return projectCard;\n  }\n\n  function createProject() {\n    const projectName = document.getElementById('project-name').value;\n\n    if (projectName === '') {\n      alert('Please enter project name');\n      return;\n    }\n\n    const project = new _project__WEBPACK_IMPORTED_MODULE_1__[\"default\"](projectName);\n    const newProjectCard = createProjectCard(project.getName());\n    projectSection.prepend(newProjectCard);\n    console.log(project);\n    console.log(project.getProjectTasks());\n\n    return newProjectCard;\n  }\n\n  menuIcon.addEventListener('click', () => toggleMenu(sidebar));\n  addProjectBtn.addEventListener('click', () => openMenu(newProject));\n  addTaskBtn.addEventListener('click', () => {\n    overlayOn();\n    openMenu(addNewTask);\n  });\n  addNewProjectBtn.addEventListener('click', () => createProject());\n  cancelProjectBtn.addEventListener('click', () => closeMenu(newProject));\n  cancelTaskBtn.addEventListener('click', () => {\n    overlayOff();\n    closeMenu(addNewTask);\n  });\n  addNewTaskBtn.addEventListener('click', () => {\n    createTask();\n    overlayOff();\n  });\n  taskList.addEventListener('click', (event) => {\n    const { target } = event;\n    const taskCard = target.closest('.task-card');\n    if (target.classList.contains('remove-task')) {\n      deleteTask(taskCard);\n    }\n  });\n\n  return {\n    toggleMenu,\n    openMenu,\n    closeMenu,\n    overlayOn,\n    overlayOff,\n    createDiv,\n    createInput,\n    createPara,\n    createTaskCard,\n    createTask,\n    createProjectCard,\n    createProject,\n  };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UI);\n\n\n//# sourceURL=webpack://todo-list/./src/UI.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI */ \"./src/UI.js\");\n\n\n(0,_UI__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\nclass Project {\n  constructor(name) {\n    this.name = name;\n    this.projectTasks = [];\n  }\n\n  setName(name) {\n    this.name = name;\n  }\n\n  getName() {\n    return this.name;\n  }\n\n  setProjectTasks(projectTasks) {\n    this.projectTasks = projectTasks;\n  }\n\n  getProjectTasks() {\n    return this.projectTasks;\n  }\n\n  getTask(taskName) {\n    return this.projectTasks.find((task) => task.getName() === taskName);\n  }\n\n  addTask(newTask) {\n    if (!this.projectTasks.find((task) => task.getName() === newTask.getName())) {\n      this.projectTasks.push(newTask);\n    }\n  }\n}\n\n\n//# sourceURL=webpack://todo-list/./src/project.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\n  constructor(title, date, priority) {\n    this.title = title;\n    this.date = date;\n    this.priority = priority;\n  }\n\n  setTitle(title) {\n    this.title = title;\n  }\n\n  getTitle() {\n    return this.title;\n  }\n\n  setDate(date) {\n    this.date = date;\n  }\n\n  getDate() {\n    return this.date;\n  }\n\n  setPriority(priority) {\n    this.priority = priority;\n  }\n\n  getPriority() {\n    return this.priority;\n  }\n}\n\n\n//# sourceURL=webpack://todo-list/./src/task.js?");

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