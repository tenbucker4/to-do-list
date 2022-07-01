/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    height: 100vh;\n    width: 100vw;\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n    grid-template-rows: auto 4fr;\n    font-family: \"Alata\", sans-serif;\n    background-color: #eff6ff;\n}\n\n/* Header */\nheader {\n    background-color: #1d4ed8;\n    color: #eff6ff;\n    grid-column: 1 / 3;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    box-shadow: 0 5px 5px -3px rgb(0 0 0 / 0.1);\n    z-index: 3;\n}\n\nheader h1 {\n    padding: 24px 0px;\n}\n\nheader img {\n    width: 2rem;\n    height: auto;\n    position: absolute;\n    top: 30%;\n    left: 24px;\n    cursor: pointer;\n}\n\nheader img:hover {\n    border: none;\n}\n\n/* Nav Bar */\n#nav {\n    color: black;\n    background-color: #bfdbfe;\n    display: flex;\n    flex-direction: column;\n    gap: 24px;\n    align-items: center;\n}\n\n#nav h2 {\n    padding-top: 24px;\n    width: 80%;\n    border-bottom: 2px solid black;\n    align-self: center;\n}\n\n#nav ul {\n    list-style-type: none;\n    line-height: 1.5rem;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    width: 80%;\n}\n\n#nav ul li {\n    width: 100%;\n    border-radius: 5px;\n    padding: 4px 2px;\n}\n\n#nav ul li:hover {\n    cursor: pointer;\n    background-color: #1d4ed8;\n    color: #eff6ff;\n}\n\n/* Main container  */\nmain {\n    color: black;\n    background-color: #eff6ff;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    overflow: scroll;\n}\n\n#main-container {\n    display: flex;\n    flex-direction: column;\n    width: 90%;\n    align-items: center;\n    justify-content: center;\n    padding-top: 24px;\n    padding-bottom: 24px;\n    gap: 16px;\n}\n\n#current-directory {\n    font-weight: bold;\n    background-color: #1d4ed8;\n    color: #eff6ff;\n    border-radius: 5px;\n    padding: 16px;\n    width: 100%;\n    font-size: 1.5rem;\n}\n\n#task-list {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 4px;\n}\n\n.task-item {\n    width: 100%;\n    border: 2px solid #bfdbfe;\n    border-radius: 5px;\n    padding: 8px;\n    display: flex;\n    align-items: center;\n    position: relative;\n    gap: 16px;\n}\n\n.checkbox {\n    width: 1.5rem;\n    height: 1.5rem;\n    border-radius: 50%;\n    border: 1px solid black;\n    background-color: transparent;\n    flex-shrink: 0;\n}\n\n.mainBox {\n    /* display: flex;\n    flex-direction: column; */\n    flex: 1;\n    overflow: scroll;\n    flex-wrap: wrap;\n}\n\n.displayTitle {\n    /* flex-wrap: wrap; */\n}\n\n.displayDetails {\n    /* flex-wrap: wrap; */\n}\n\n.displayDate {\n}\n\n#delete {\n}\n\n#edit {\n}\n\n.completed {\n    background-color: lightgreen;\n    border: 1px solid lightgreen;\n}\n\n.strikethrough {\n    text-decoration: line-through;\n}\n\nbutton:hover,\n.checkbox:hover {\n    cursor: pointer;\n}\n\n.task-item p {\n    font-size: 0.8rem;\n    color: grey;\n}\n\n#add-task {\n    padding: 4px 8px;\n    font-size: 1.2rem;\n    background-color: #1d4ed8;\n    color: #eff6ff;\n    border: 1px solid #1d4ed8;\n    border-radius: 5px;\n}\n\n#add-task:hover {\n    background-color: #eff6ff;\n    color: #1d4ed8;\n}\n\n/* Forms */\n#form-container,\n#edit-container {\n    display: none;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    background-color: #bfdbfe;\n    border-radius: 5px;\n}\n\n#form-container form,\n#edit-container form {\n    padding-top: 24px;\n    padding-bottom: 12px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 8px;\n    width: 95%;\n}\n\n#form-title {\n    align-self: flex-start;\n    padding-bottom: 8px;\n}\n\n#form-container input[type=\"text\"],\n#form-container input[type=\"date\"],\n#task-details,\n#edit-container input[type=\"text\"],\n#edit-container input[type=\"date\"],\n#edit-task-details {\n    width: 100%;\n    font-family: inherit;\n    border: none;\n    border-radius: 5px;\n    background-color: #eff6ff;\n    padding: 0px 8px;\n}\n\ninput[type=\"radio\"]:hover {\n    cursor: pointer;\n}\n\n#task-title,\n#task-date,\n#edit-task-title,\n#edit-task-date {\n    height: 1.5rem;\n}\n\n#task-details,\n#edit-task-details {\n    height: 4rem;\n    resize: none;\n    padding-top: 3px;\n}\n\n#form-buttons {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 16px;\n}\n\n#category,\n#edit-category {\n    display: flex;\n    width: 100%;\n    gap: 16px;\n}\n\n.category-section {\n    display: flex;\n    width: fit-content;\n    align-items: center;\n    gap: 4px;\n}\n\n/* Animations */\n@keyframes append-animate {\n    from {\n        transform: scaleY(0);\n        opacity: 0;\n    }\n    to {\n        transform: scaleY(1);\n        opacity: 1;\n    }\n}\n\n.new-box {\n    transform-origin: 50% 0;\n    animation: append-animate 0.3s linear;\n}\n\n/* Buttons */\nbutton {\n    font-family: inherit;\n}\n\n#cancel-edit,\n#delete,\n#hide-form {\n    padding: 4px 8px;\n    border: 1px solid red;\n    border-radius: 5px;\n    background-color: red;\n    color: #eff6ff;\n}\n\n#cancel-edit:hover,\n#delete:hover,\n#hide-form:hover {\n    background-color: #eff6ff;\n    color: red;\n}\n\n#edit,\n#submit-task-edit,\n#submit-task {\n    padding: 4px 8px;\n    border: 1px solid green;\n    border-radius: 5px;\n    background-color: green;\n    color: #eff6ff;\n}\n\n#edit:hover,\n#submit-task-edit:hover,\n#submit-task:hover {\n    background-color: #eff6ff;\n    color: green;\n}\n\n/* Responsiveness */\n@media (max-width: 650px) {\n    body {\n        overflow: scroll;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        width: 100vw;\n        height: fit-content;\n    }\n\n    header,\n    #nav,\n    main {\n        width: 100%;\n    }\n\n    header h1 {\n        padding: 12px 0px;\n    }\n\n    #main-container {\n        width: 80%;\n    }\n\n    main {\n        height: fit-content;\n        flex: 1 1 auto;\n        width: 100%;\n        overflow: auto;\n    }\n\n    #nav ul {\n        line-height: 1rem;\n        padding-bottom: 24px;\n        text-align: center;\n    }\n\n    #nav {\n        align-items: center;\n    }\n\n    #nav h2 {\n        text-align: center;\n    }\n\n    #task-list,\n    .task-item p {\n        font-size: 0.7rem;\n    }\n\n    .checkbox {\n        height: 0.8rem;\n        width: 0.8rem;\n    }\n\n    .displayDate {\n        display: none;\n    }\n}\n\n@media (max-width: 350px) {\n    #category .category-section label {\n        font-size: 0.8rem;\n    }\n}\n\n@media (max-width: 300px) {\n    #category .category-section label {\n        font-size: 0.5rem;\n    }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["*,\n*::before,\n*::after {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    height: 100vh;\n    width: 100vw;\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n    grid-template-rows: auto 4fr;\n    font-family: \"Alata\", sans-serif;\n    background-color: #eff6ff;\n}\n\n/* Header */\nheader {\n    background-color: #1d4ed8;\n    color: #eff6ff;\n    grid-column: 1 / 3;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    box-shadow: 0 5px 5px -3px rgb(0 0 0 / 0.1);\n    z-index: 3;\n}\n\nheader h1 {\n    padding: 24px 0px;\n}\n\nheader img {\n    width: 2rem;\n    height: auto;\n    position: absolute;\n    top: 30%;\n    left: 24px;\n    cursor: pointer;\n}\n\nheader img:hover {\n    border: none;\n}\n\n/* Nav Bar */\n#nav {\n    color: black;\n    background-color: #bfdbfe;\n    display: flex;\n    flex-direction: column;\n    gap: 24px;\n    align-items: center;\n}\n\n#nav h2 {\n    padding-top: 24px;\n    width: 80%;\n    border-bottom: 2px solid black;\n    align-self: center;\n}\n\n#nav ul {\n    list-style-type: none;\n    line-height: 1.5rem;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    width: 80%;\n}\n\n#nav ul li {\n    width: 100%;\n    border-radius: 5px;\n    padding: 4px 2px;\n}\n\n#nav ul li:hover {\n    cursor: pointer;\n    background-color: #1d4ed8;\n    color: #eff6ff;\n}\n\n/* Main container  */\nmain {\n    color: black;\n    background-color: #eff6ff;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    overflow: scroll;\n}\n\n#main-container {\n    display: flex;\n    flex-direction: column;\n    width: 90%;\n    align-items: center;\n    justify-content: center;\n    padding-top: 24px;\n    padding-bottom: 24px;\n    gap: 16px;\n}\n\n#current-directory {\n    font-weight: bold;\n    background-color: #1d4ed8;\n    color: #eff6ff;\n    border-radius: 5px;\n    padding: 16px;\n    width: 100%;\n    font-size: 1.5rem;\n}\n\n#task-list {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 4px;\n}\n\n.task-item {\n    width: 100%;\n    border: 2px solid #bfdbfe;\n    border-radius: 5px;\n    padding: 8px;\n    display: flex;\n    align-items: center;\n    position: relative;\n    gap: 16px;\n}\n\n.checkbox {\n    width: 1.5rem;\n    height: 1.5rem;\n    border-radius: 50%;\n    border: 1px solid black;\n    background-color: transparent;\n    flex-shrink: 0;\n}\n\n.mainBox {\n    /* display: flex;\n    flex-direction: column; */\n    flex: 1;\n    overflow: scroll;\n    flex-wrap: wrap;\n}\n\n.displayTitle {\n    /* flex-wrap: wrap; */\n}\n\n.displayDetails {\n    /* flex-wrap: wrap; */\n}\n\n.displayDate {\n}\n\n#delete {\n}\n\n#edit {\n}\n\n.completed {\n    background-color: lightgreen;\n    border: 1px solid lightgreen;\n}\n\n.strikethrough {\n    text-decoration: line-through;\n}\n\nbutton:hover,\n.checkbox:hover {\n    cursor: pointer;\n}\n\n.task-item p {\n    font-size: 0.8rem;\n    color: grey;\n}\n\n#add-task {\n    padding: 4px 8px;\n    font-size: 1.2rem;\n    background-color: #1d4ed8;\n    color: #eff6ff;\n    border: 1px solid #1d4ed8;\n    border-radius: 5px;\n}\n\n#add-task:hover {\n    background-color: #eff6ff;\n    color: #1d4ed8;\n}\n\n/* Forms */\n#form-container,\n#edit-container {\n    display: none;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    background-color: #bfdbfe;\n    border-radius: 5px;\n}\n\n#form-container form,\n#edit-container form {\n    padding-top: 24px;\n    padding-bottom: 12px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 8px;\n    width: 95%;\n}\n\n#form-title {\n    align-self: flex-start;\n    padding-bottom: 8px;\n}\n\n#form-container input[type=\"text\"],\n#form-container input[type=\"date\"],\n#task-details,\n#edit-container input[type=\"text\"],\n#edit-container input[type=\"date\"],\n#edit-task-details {\n    width: 100%;\n    font-family: inherit;\n    border: none;\n    border-radius: 5px;\n    background-color: #eff6ff;\n    padding: 0px 8px;\n}\n\ninput[type=\"radio\"]:hover {\n    cursor: pointer;\n}\n\n#task-title,\n#task-date,\n#edit-task-title,\n#edit-task-date {\n    height: 1.5rem;\n}\n\n#task-details,\n#edit-task-details {\n    height: 4rem;\n    resize: none;\n    padding-top: 3px;\n}\n\n#form-buttons {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 16px;\n}\n\n#category,\n#edit-category {\n    display: flex;\n    width: 100%;\n    gap: 16px;\n}\n\n.category-section {\n    display: flex;\n    width: fit-content;\n    align-items: center;\n    gap: 4px;\n}\n\n/* Animations */\n@keyframes append-animate {\n    from {\n        transform: scaleY(0);\n        opacity: 0;\n    }\n    to {\n        transform: scaleY(1);\n        opacity: 1;\n    }\n}\n\n.new-box {\n    transform-origin: 50% 0;\n    animation: append-animate 0.3s linear;\n}\n\n/* Buttons */\nbutton {\n    font-family: inherit;\n}\n\n#cancel-edit,\n#delete,\n#hide-form {\n    padding: 4px 8px;\n    border: 1px solid red;\n    border-radius: 5px;\n    background-color: red;\n    color: #eff6ff;\n}\n\n#cancel-edit:hover,\n#delete:hover,\n#hide-form:hover {\n    background-color: #eff6ff;\n    color: red;\n}\n\n#edit,\n#submit-task-edit,\n#submit-task {\n    padding: 4px 8px;\n    border: 1px solid green;\n    border-radius: 5px;\n    background-color: green;\n    color: #eff6ff;\n}\n\n#edit:hover,\n#submit-task-edit:hover,\n#submit-task:hover {\n    background-color: #eff6ff;\n    color: green;\n}\n\n/* Responsiveness */\n@media (max-width: 650px) {\n    body {\n        overflow: scroll;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        width: 100vw;\n        height: fit-content;\n    }\n\n    header,\n    #nav,\n    main {\n        width: 100%;\n    }\n\n    header h1 {\n        padding: 12px 0px;\n    }\n\n    #main-container {\n        width: 80%;\n    }\n\n    main {\n        height: fit-content;\n        flex: 1 1 auto;\n        width: 100%;\n        overflow: auto;\n    }\n\n    #nav ul {\n        line-height: 1rem;\n        padding-bottom: 24px;\n        text-align: center;\n    }\n\n    #nav {\n        align-items: center;\n    }\n\n    #nav h2 {\n        text-align: center;\n    }\n\n    #task-list,\n    .task-item p {\n        font-size: 0.7rem;\n    }\n\n    .checkbox {\n        height: 0.8rem;\n        width: 0.8rem;\n    }\n\n    .displayDate {\n        display: none;\n    }\n}\n\n@media (max-width: 350px) {\n    #category .category-section label {\n        font-size: 0.8rem;\n    }\n}\n\n@media (max-width: 300px) {\n    #category .category-section label {\n        font-size: 0.5rem;\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


// Tasks array that will be used to populate DOM
let businessTasks = [];
let schoolTasks = [];
let personalTasks = [];

// Task object creation
class Task {
    constructor(title, details, date, category, completed) {
        this.title = title;
        this.details = details;
        this.date = date;
        this.category = category;
        this.completed = completed;
    }
}

// Toggle nav bar display, show/hide task form
const buttonToggles = (() => {
    const menuBtn = document.getElementById("menu-btn");
    const navBar = document.getElementById("nav");

    // Show add task form when button is clicked
    const newTaskBtn = document.getElementById("add-task");
    const formContainer = document.getElementById("form-container");
    newTaskBtn.addEventListener("click", function() {
        formContainer.style.display = "flex";
        formContainer.classList.add("new-box");
        newTaskBtn.style.display = "none";
    })

    // Hide task form when button is clicked
    const hideFormBtn = document.getElementById("hide-form");
    hideFormBtn.addEventListener("click", function() {
        document.getElementById("form-container").style.display = "none";
        newTaskBtn.style.display = "inline-block";
    })
})();


// Navigate to selected folder from nav bar
const folders = document.querySelectorAll(".folder");
const currentFolderTitle = document.getElementById("current-directory");

// Open business directory by default on window open
let currentDirectory = "businessFolder";
window.onload = (displayCurrentDirectory(currentDirectory));

// Toggle directory title from nav bar
function displayCurrentDirectory(directory) {
    if (directory == "businessFolder") {
        currentFolderTitle.textContent = "Business";
    } else if (directory == "schoolFolder") {
        currentFolderTitle.textContent = "School";
    } else if (directory == "personalFolder"){
        currentFolderTitle.textContent = "Personal";
    }
}

folders.forEach((folder) => {
    folder.addEventListener('click', () => {
        currentDirectory = folder.id;
        displayCurrentDirectory(currentDirectory);
        if (currentDirectory == "businessFolder") {
            renderTasks(businessTasks);
        } else if (currentDirectory == "schoolFolder") {
            renderTasks(schoolTasks);
        } else if (currentDirectory == "personalFolder") {
            renderTasks(personalTasks);
        }
    })
})


// Add task to array when form is submitted
const form = document.getElementById("form");
const submitTaskBtn = document.getElementById("submit-task");
form.addEventListener('submit', (e) => {
    e.preventDefault();

    document.getElementById("form-container").style.display = "none";
    document.getElementById("add-task").style.display = "inline-block";

    const title = document.getElementById("task-title").value;
    const details = document.getElementById("task-details").value;
    const date = document.getElementById("task-date").value;
    let completed = false;
    let category;

    // Check which category is checked off
    if (document.getElementById("business").checked == true) {
        category = "business";
    } else if (document.getElementById("school").checked == true) {
        category = "school"; 
    } else {
        category = "personal";
    }

    // Add task to array corresponding to selected category
    let newTask = new Task(title, details, date, category, completed);
    if (newTask.category == "business") {
        businessTasks.push(newTask);
    } else if (newTask.category == "school") {
        schoolTasks.push(newTask);
    } else {
        personalTasks.push(newTask);
    }
    saveData();

    // If creating a task within the currently selected directory, display the updated list
    if (newTask.category == "business" && currentDirectory == "businessFolder") {
        renderTasks(businessTasks);
    } else if (newTask.category == "school" && currentDirectory == "schoolFolder") {
        renderTasks(schoolTasks);
    } else if (newTask.category == "personal" && currentDirectory == "personalFolder") {
        renderTasks(personalTasks);
    }

    form.reset();
})


// Display current tasks on screen
function renderTasks(list) {
    // First clear all tasks to avoid duplication
    const taskList = document.getElementById("task-list");
    const allTasks = document.querySelectorAll(".task-item");
    for (let i = 0; i < allTasks.length; i++) {
        allTasks[i].remove();
    }

    // For each entry in myTasks, create a DOM element
    list.forEach((task) => {
        const taskItem = document.createElement("div");
        taskItem.classList.add("task-item");
        taskList.appendChild(taskItem);

        const checkbox = document.createElement("div");
        checkbox.classList.add("checkbox");
        checkbox.setAttribute("id", "checkbox");
        taskItem.appendChild(checkbox);

        const mainBox = document.createElement("div");
        mainBox.classList.add("mainBox");
        taskItem.appendChild(mainBox);

        const displayTitle = document.createElement("h4");
        displayTitle.classList.add("displayTitle");
        displayTitle.textContent = task.title;
        mainBox.appendChild(displayTitle);

        const displayDetails = document.createElement("p");
        displayDetails.classList.add("displayDetails");
        displayDetails.textContent = task.details;
        mainBox.appendChild(displayDetails);

        const displayDate = document.createElement("p");
        displayDate.classList.add("displayDate");
        displayDate.textContent = task.date;
        taskItem.appendChild(displayDate);

        // Edit button
        const editButton = document.createElement("button");
        editButton.setAttribute("id", "edit");
        editButton.textContent = "Edit";
        taskItem.appendChild(editButton);

        // Link the index to the delete button and increment per task element.
        // Pressing delete button removes the parent dom element at the index corrresponding to myTasks.
        const deleteButton = document.createElement("button");
        deleteButton.setAttribute("id", "delete");
        deleteButton.textContent = "Delete";
        taskItem.appendChild(deleteButton);

        // if task is already completed, highlight the checkbox and add a strikethrough to the text
        function checkCompleted() {
            if (task.completed == true) {
                checkbox.classList.add("completed");
                displayTitle.classList.add("strikethrough");
                displayDetails.classList.add("strikethrough");
            }
        }
        checkCompleted();

        // Toggle completed tasks
        checkbox.addEventListener("click", () => {
            if (task.completed == false) {
                checkbox.classList.add("completed");
                displayTitle.classList.add("strikethrough");
                displayDetails.classList.add("strikethrough");
                task.completed = true;
            } else {
                checkbox.classList.remove("completed");
                displayTitle.classList.remove("strikethrough");
                displayDetails.classList.remove("strikethrough");
                task.completed = false;
            }
            saveData();
        });
    })
}

// Listen for click on a delete task button, run delete task function
document.addEventListener('click', function(e) {
    if (e.target && e.target.id == 'delete') {
        deleteTask(e);
    }
 });

// Delete task from list
function deleteTask(e) {
    let taskDiv = e.target.parentElement;
    let titleDiv = taskDiv.querySelector(".displayTitle").textContent;
    if (currentDirectory == "businessFolder") {
        let remainingArray = businessTasks.filter(task => task.title != titleDiv);
        businessTasks = remainingArray;
        renderTasks(businessTasks);
    } else if (currentDirectory == "schoolFolder") {
        let remainingArray = schoolTasks.filter(task => task.title != titleDiv);
        schoolTasks = remainingArray;
        renderTasks(schoolTasks);
    } else if (currentDirectory == "personalFolder") {
        let remainingArray = personalTasks.filter(task => task.title != titleDiv);
        personalTasks = remainingArray;
        renderTasks(personalTasks);
    }
    saveData();
}

// Onclick on an edit button, execute editTask function
document.addEventListener('click', function(e) {
    if (e.target && e.target.id == 'edit') {
        editTask(e);
    }
 });

function editTask(e) {
    // Open edit form and highlight selected task to edit
    document.getElementById("edit-container").style.display = "flex";
    document.getElementById("edit-container").classList.add("new-box");
    const taskDiv = e.target.parentElement;
    taskDiv.style.border = "2px solid lightgreen"
    const titleDiv = taskDiv.querySelector(".displayTitle");
    const detailsDiv = taskDiv.querySelector(".displayDetails");
    const dateDiv = taskDiv.querySelector(".displayDate");

    const editForm = document.getElementById("edit-form");
    const taskTitle = document.getElementById("edit-task-title");
    const taskDetails = document.getElementById("edit-task-details");
    const taskDate = document.getElementById("edit-task-date");
    const isCompleted = document.getElementById("checkbox");

    let completed;
    let category;
    
    if (isCompleted.classList.contains("completed")) {
        completed = true;
    } else {
        completed = false;
    }

    // Set form values to current task values
    taskTitle.value = titleDiv.textContent;
    taskDetails.textContent = detailsDiv.textContent;
    taskDate.value = dateDiv.textContent;

    editForm.addEventListener('submit', function(e) {
        e.preventDefault();
        let arrayToEdit;
        if (currentDirectory == "businessFolder") {
            arrayToEdit = businessTasks;
            category = "business";
        } else if (currentDirectory == "schoolFolder") {
            arrayToEdit = schoolTasks;
            category = "school";
        } else if (currentDirectory == "personalFolder") {
            arrayToEdit = personalTasks;
            category = "personal";
        }

        let index = arrayToEdit.findIndex(task => task.title == titleDiv.textContent);
        if (index < 0) {
            return;
        }

        // Delete task from array and replace with new submitted edit
        arrayToEdit.splice(index, 1);
        let newTask = new Task(taskTitle.value, taskDetails.value, taskDate.value, category, completed);
        arrayToEdit.splice(index, 0, newTask);
        // display new task list, reset form and hide
        renderTasks(arrayToEdit);
        editForm.reset();
        document.getElementById("edit-container").style.display = "none";
        taskDiv.style.border = "2px solid #bfdbfe";
        saveData();
    })

    // if edit cancelled, reset form and hide
    document.addEventListener('click', function(e) {
        if (e.target && e.target.id == "cancel-edit") {
            editForm.reset();
            document.getElementById("edit-container").style.display = "none";
            taskDiv.style.border = "2px solid #bfdbfe";
        }
    })
}


// Save data to local storage
function saveData() {
    localStorage.setItem(`businessTasks`, JSON.stringify(businessTasks))
    localStorage.setItem(`schoolTasks`, JSON.stringify(schoolTasks))
    localStorage.setItem(`personalTasks`, JSON.stringify(personalTasks))
}

function restore() {
    if (!localStorage.businessTasks || !localStorage.schoolTasks || !localStorage.personalTasks) {
        return;
    } else {
        let business = localStorage.getItem("businessTasks");
        let school = localStorage.getItem("schoolTasks");
        let personal = localStorage.getItem("personalTasks");
    
        business = JSON.parse(business);
        school = JSON.parse(school);
        personal = JSON.parse(personal);
    
        businessTasks = business;
        schoolTasks = school;
        personalTasks = personal;
        renderTasks(businessTasks);
    }
}

restore();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssS0FBSyxPQUFPLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxNQUFNLEtBQUssTUFBTSxLQUFLLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLFVBQVUsTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxRQUFRLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLFVBQVUsS0FBSyxLQUFLLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxXQUFXLEtBQUssTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLFVBQVUsS0FBSyxZQUFZLE9BQU8sT0FBTyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxPQUFPLFlBQVksV0FBVyxNQUFNLE9BQU8sWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sT0FBTyxZQUFZLFdBQVcsT0FBTyxZQUFZLE1BQU0sS0FB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OztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IscUJBQXFCO0FBQ3pDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gNGZyO1xcbiAgICBmb250LWZhbWlseTogXFxcIkFsYXRhXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZjZmZjtcXG59XFxuXFxuLyogSGVhZGVyICovXFxuaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFkNGVkODtcXG4gICAgY29sb3I6ICNlZmY2ZmY7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiKDAgMCAwIC8gMC4xKTtcXG4gICAgei1pbmRleDogMztcXG59XFxuXFxuaGVhZGVyIGgxIHtcXG4gICAgcGFkZGluZzogMjRweCAwcHg7XFxufVxcblxcbmhlYWRlciBpbWcge1xcbiAgICB3aWR0aDogMnJlbTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMzAlO1xcbiAgICBsZWZ0OiAyNHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmhlYWRlciBpbWc6aG92ZXIge1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi8qIE5hdiBCYXIgKi9cXG4jbmF2IHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmZkYmZlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDI0cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNuYXYgaDIge1xcbiAgICBwYWRkaW5nLXRvcDogMjRweDtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbiNuYXYgdWwge1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICB3aWR0aDogODAlO1xcbn1cXG5cXG4jbmF2IHVsIGxpIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogNHB4IDJweDtcXG59XFxuXFxuI25hdiB1bCBsaTpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFkNGVkODtcXG4gICAgY29sb3I6ICNlZmY2ZmY7XFxufVxcblxcbi8qIE1haW4gY29udGFpbmVyICAqL1xcbm1haW4ge1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmY2ZmY7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG92ZXJmbG93OiBzY3JvbGw7XFxufVxcblxcbiNtYWluLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nLXRvcDogMjRweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDI0cHg7XFxuICAgIGdhcDogMTZweDtcXG59XFxuXFxuI2N1cnJlbnQtZGlyZWN0b3J5IHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZDRlZDg7XFxuICAgIGNvbG9yOiAjZWZmNmZmO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDE2cHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuI3Rhc2stbGlzdCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiA0cHg7XFxufVxcblxcbi50YXNrLWl0ZW0ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgI2JmZGJmZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZ2FwOiAxNnB4O1xcbn1cXG5cXG4uY2hlY2tib3gge1xcbiAgICB3aWR0aDogMS41cmVtO1xcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcbn1cXG5cXG4ubWFpbkJveCB7XFxuICAgIC8qIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47ICovXFxuICAgIGZsZXg6IDE7XFxuICAgIG92ZXJmbG93OiBzY3JvbGw7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLmRpc3BsYXlUaXRsZSB7XFxuICAgIC8qIGZsZXgtd3JhcDogd3JhcDsgKi9cXG59XFxuXFxuLmRpc3BsYXlEZXRhaWxzIHtcXG4gICAgLyogZmxleC13cmFwOiB3cmFwOyAqL1xcbn1cXG5cXG4uZGlzcGxheURhdGUge1xcbn1cXG5cXG4jZGVsZXRlIHtcXG59XFxuXFxuI2VkaXQge1xcbn1cXG5cXG4uY29tcGxldGVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmVlbjtcXG59XFxuXFxuLnN0cmlrZXRocm91Z2gge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuYnV0dG9uOmhvdmVyLFxcbi5jaGVja2JveDpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2staXRlbSBwIHtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgIGNvbG9yOiBncmV5O1xcbn1cXG5cXG4jYWRkLXRhc2sge1xcbiAgICBwYWRkaW5nOiA0cHggOHB4O1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFkNGVkODtcXG4gICAgY29sb3I6ICNlZmY2ZmY7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMxZDRlZDg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuI2FkZC10YXNrOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZjZmZjtcXG4gICAgY29sb3I6ICMxZDRlZDg7XFxufVxcblxcbi8qIEZvcm1zICovXFxuI2Zvcm0tY29udGFpbmVyLFxcbiNlZGl0LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JmZGJmZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4jZm9ybS1jb250YWluZXIgZm9ybSxcXG4jZWRpdC1jb250YWluZXIgZm9ybSB7XFxuICAgIHBhZGRpbmctdG9wOiAyNHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTJweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogOHB4O1xcbiAgICB3aWR0aDogOTUlO1xcbn1cXG5cXG4jZm9ybS10aXRsZSB7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XFxufVxcblxcbiNmb3JtLWNvbnRhaW5lciBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0sXFxuI2Zvcm0tY29udGFpbmVyIGlucHV0W3R5cGU9XFxcImRhdGVcXFwiXSxcXG4jdGFzay1kZXRhaWxzLFxcbiNlZGl0LWNvbnRhaW5lciBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0sXFxuI2VkaXQtY29udGFpbmVyIGlucHV0W3R5cGU9XFxcImRhdGVcXFwiXSxcXG4jZWRpdC10YXNrLWRldGFpbHMge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZmNmZmO1xcbiAgICBwYWRkaW5nOiAwcHggOHB4O1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jdGFzay10aXRsZSxcXG4jdGFzay1kYXRlLFxcbiNlZGl0LXRhc2stdGl0bGUsXFxuI2VkaXQtdGFzay1kYXRlIHtcXG4gICAgaGVpZ2h0OiAxLjVyZW07XFxufVxcblxcbiN0YXNrLWRldGFpbHMsXFxuI2VkaXQtdGFzay1kZXRhaWxzIHtcXG4gICAgaGVpZ2h0OiA0cmVtO1xcbiAgICByZXNpemU6IG5vbmU7XFxuICAgIHBhZGRpbmctdG9wOiAzcHg7XFxufVxcblxcbiNmb3JtLWJ1dHRvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxNnB4O1xcbn1cXG5cXG4jY2F0ZWdvcnksXFxuI2VkaXQtY2F0ZWdvcnkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZ2FwOiAxNnB4O1xcbn1cXG5cXG4uY2F0ZWdvcnktc2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA0cHg7XFxufVxcblxcbi8qIEFuaW1hdGlvbnMgKi9cXG5Aa2V5ZnJhbWVzIGFwcGVuZC1hbmltYXRlIHtcXG4gICAgZnJvbSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWSgwKTtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgIH1cXG4gICAgdG8ge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVkoMSk7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICB9XFxufVxcblxcbi5uZXctYm94IHtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDA7XFxuICAgIGFuaW1hdGlvbjogYXBwZW5kLWFuaW1hdGUgMC4zcyBsaW5lYXI7XFxufVxcblxcbi8qIEJ1dHRvbnMgKi9cXG5idXR0b24ge1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG59XFxuXFxuI2NhbmNlbC1lZGl0LFxcbiNkZWxldGUsXFxuI2hpZGUtZm9ybSB7XFxuICAgIHBhZGRpbmc6IDRweCA4cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAgIGNvbG9yOiAjZWZmNmZmO1xcbn1cXG5cXG4jY2FuY2VsLWVkaXQ6aG92ZXIsXFxuI2RlbGV0ZTpob3ZlcixcXG4jaGlkZS1mb3JtOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZjZmZjtcXG4gICAgY29sb3I6IHJlZDtcXG59XFxuXFxuI2VkaXQsXFxuI3N1Ym1pdC10YXNrLWVkaXQsXFxuI3N1Ym1pdC10YXNrIHtcXG4gICAgcGFkZGluZzogNHB4IDhweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxuICAgIGNvbG9yOiAjZWZmNmZmO1xcbn1cXG5cXG4jZWRpdDpob3ZlcixcXG4jc3VibWl0LXRhc2stZWRpdDpob3ZlcixcXG4jc3VibWl0LXRhc2s6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZmNmZmO1xcbiAgICBjb2xvcjogZ3JlZW47XFxufVxcblxcbi8qIFJlc3BvbnNpdmVuZXNzICovXFxuQG1lZGlhIChtYXgtd2lkdGg6IDY1MHB4KSB7XFxuICAgIGJvZHkge1xcbiAgICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIHdpZHRoOiAxMDB2dztcXG4gICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIH1cXG5cXG4gICAgaGVhZGVyLFxcbiAgICAjbmF2LFxcbiAgICBtYWluIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuXFxuICAgIGhlYWRlciBoMSB7XFxuICAgICAgICBwYWRkaW5nOiAxMnB4IDBweDtcXG4gICAgfVxcblxcbiAgICAjbWFpbi1jb250YWluZXIge1xcbiAgICAgICAgd2lkdGg6IDgwJTtcXG4gICAgfVxcblxcbiAgICBtYWluIHtcXG4gICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgICAgICBmbGV4OiAxIDEgYXV0bztcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIH1cXG5cXG4gICAgI25hdiB1bCB7XFxuICAgICAgICBsaW5lLWhlaWdodDogMXJlbTtcXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyNHB4O1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgICNuYXYge1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAjbmF2IGgyIHtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAjdGFzay1saXN0LFxcbiAgICAudGFzay1pdGVtIHAge1xcbiAgICAgICAgZm9udC1zaXplOiAwLjdyZW07XFxuICAgIH1cXG5cXG4gICAgLmNoZWNrYm94IHtcXG4gICAgICAgIGhlaWdodDogMC44cmVtO1xcbiAgICAgICAgd2lkdGg6IDAuOHJlbTtcXG4gICAgfVxcblxcbiAgICAuZGlzcGxheURhdGUge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogMzUwcHgpIHtcXG4gICAgI2NhdGVnb3J5IC5jYXRlZ29yeS1zZWN0aW9uIGxhYmVsIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiAzMDBweCkge1xcbiAgICAjY2F0ZWdvcnkgLmNhdGVnb3J5LXNlY3Rpb24gbGFiZWwge1xcbiAgICAgICAgZm9udC1zaXplOiAwLjVyZW07XFxuICAgIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0lBR0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsNEJBQTRCO0lBQzVCLGdDQUFnQztJQUNoQyx5QkFBeUI7QUFDN0I7O0FBRUEsV0FBVztBQUNYO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLDJDQUEyQztJQUMzQyxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsVUFBVTtJQUNWLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBLFlBQVk7QUFDWjtJQUNJLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFVBQVU7SUFDViw4QkFBOEI7SUFD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Sjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixxQ0FBcUM7QUFDekM7O0FBRUEsWUFBWTtBQUNaO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBOzs7SUFHSSxnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsY0FBYztBQUNsQjs7QUFFQTs7O0lBR0kseUJBQXlCO0lBQ3pCLFVBQVU7QUFDZDs7QUFFQTs7O0lBR0ksZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLGNBQWM7QUFDbEI7O0FBRUE7OztJQUdJLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCOztBQUVBLG1CQUFtQjtBQUNuQjtJQUNJO1FBQ0ksZ0JBQWdCO1FBQ2hCLGFBQWE7UUFDYixzQkFBc0I7UUFDdEIsbUJBQW1CO1FBQ25CLFlBQVk7UUFDWixtQkFBbUI7SUFDdkI7O0lBRUE7OztRQUdJLFdBQVc7SUFDZjs7SUFFQTtRQUNJLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLFVBQVU7SUFDZDs7SUFFQTtRQUNJLG1CQUFtQjtRQUNuQixjQUFjO1FBQ2QsV0FBVztRQUNYLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxpQkFBaUI7UUFDakIsb0JBQW9CO1FBQ3BCLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLGtCQUFrQjtJQUN0Qjs7SUFFQTs7UUFFSSxpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxjQUFjO1FBQ2QsYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGFBQWE7SUFDakI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksaUJBQWlCO0lBQ3JCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGlCQUFpQjtJQUNyQjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byA0ZnI7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiQWxhdGFcXFwiLCBzYW5zLXNlcmlmO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZmNmZmO1xcbn1cXG5cXG4vKiBIZWFkZXIgKi9cXG5oZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWQ0ZWQ4O1xcbiAgICBjb2xvcjogI2VmZjZmZjtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2IoMCAwIDAgLyAwLjEpO1xcbiAgICB6LWluZGV4OiAzO1xcbn1cXG5cXG5oZWFkZXIgaDEge1xcbiAgICBwYWRkaW5nOiAyNHB4IDBweDtcXG59XFxuXFxuaGVhZGVyIGltZyB7XFxuICAgIHdpZHRoOiAycmVtO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAzMCU7XFxuICAgIGxlZnQ6IDI0cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuaGVhZGVyIGltZzpob3ZlciB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLyogTmF2IEJhciAqL1xcbiNuYXYge1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiZmRiZmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMjRweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI25hdiBoMiB7XFxuICAgIHBhZGRpbmctdG9wOiAyNHB4O1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuI25hdiB1bCB7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIHdpZHRoOiA4MCU7XFxufVxcblxcbiNuYXYgdWwgbGkge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiA0cHggMnB4O1xcbn1cXG5cXG4jbmF2IHVsIGxpOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWQ0ZWQ4O1xcbiAgICBjb2xvcjogI2VmZjZmZjtcXG59XFxuXFxuLyogTWFpbiBjb250YWluZXIgICovXFxubWFpbiB7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZjZmZjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcXG59XFxuXFxuI21haW4tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBhZGRpbmctdG9wOiAyNHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMjRweDtcXG4gICAgZ2FwOiAxNnB4O1xcbn1cXG5cXG4jY3VycmVudC1kaXJlY3Rvcnkge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFkNGVkODtcXG4gICAgY29sb3I6ICNlZmY2ZmY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogMTZweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4jdGFzay1saXN0IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDRweDtcXG59XFxuXFxuLnRhc2staXRlbSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjYmZkYmZlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBnYXA6IDE2cHg7XFxufVxcblxcbi5jaGVja2JveCB7XFxuICAgIHdpZHRoOiAxLjVyZW07XFxuICAgIGhlaWdodDogMS41cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgZmxleC1zaHJpbms6IDA7XFxufVxcblxcbi5tYWluQm94IHtcXG4gICAgLyogZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgKi9cXG4gICAgZmxleDogMTtcXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4uZGlzcGxheVRpdGxlIHtcXG4gICAgLyogZmxleC13cmFwOiB3cmFwOyAqL1xcbn1cXG5cXG4uZGlzcGxheURldGFpbHMge1xcbiAgICAvKiBmbGV4LXdyYXA6IHdyYXA7ICovXFxufVxcblxcbi5kaXNwbGF5RGF0ZSB7XFxufVxcblxcbiNkZWxldGUge1xcbn1cXG5cXG4jZWRpdCB7XFxufVxcblxcbi5jb21wbGV0ZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyZWVuO1xcbn1cXG5cXG4uc3RyaWtldGhyb3VnaCB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG5idXR0b246aG92ZXIsXFxuLmNoZWNrYm94OmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFzay1pdGVtIHAge1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgY29sb3I6IGdyZXk7XFxufVxcblxcbiNhZGQtdGFzayB7XFxuICAgIHBhZGRpbmc6IDRweCA4cHg7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWQ0ZWQ4O1xcbiAgICBjb2xvcjogI2VmZjZmZjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzFkNGVkODtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4jYWRkLXRhc2s6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZmNmZmO1xcbiAgICBjb2xvcjogIzFkNGVkODtcXG59XFxuXFxuLyogRm9ybXMgKi9cXG4jZm9ybS1jb250YWluZXIsXFxuI2VkaXQtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmZkYmZlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbiNmb3JtLWNvbnRhaW5lciBmb3JtLFxcbiNlZGl0LWNvbnRhaW5lciBmb3JtIHtcXG4gICAgcGFkZGluZy10b3A6IDI0cHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxMnB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiA4cHg7XFxuICAgIHdpZHRoOiA5NSU7XFxufVxcblxcbiNmb3JtLXRpdGxlIHtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gICAgcGFkZGluZy1ib3R0b206IDhweDtcXG59XFxuXFxuI2Zvcm0tY29udGFpbmVyIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXSxcXG4jZm9ybS1jb250YWluZXIgaW5wdXRbdHlwZT1cXFwiZGF0ZVxcXCJdLFxcbiN0YXNrLWRldGFpbHMsXFxuI2VkaXQtY29udGFpbmVyIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXSxcXG4jZWRpdC1jb250YWluZXIgaW5wdXRbdHlwZT1cXFwiZGF0ZVxcXCJdLFxcbiNlZGl0LXRhc2stZGV0YWlscyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmY2ZmY7XFxuICAgIHBhZGRpbmc6IDBweCA4cHg7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl06aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiN0YXNrLXRpdGxlLFxcbiN0YXNrLWRhdGUsXFxuI2VkaXQtdGFzay10aXRsZSxcXG4jZWRpdC10YXNrLWRhdGUge1xcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXG59XFxuXFxuI3Rhc2stZGV0YWlscyxcXG4jZWRpdC10YXNrLWRldGFpbHMge1xcbiAgICBoZWlnaHQ6IDRyZW07XFxuICAgIHJlc2l6ZTogbm9uZTtcXG4gICAgcGFkZGluZy10b3A6IDNweDtcXG59XFxuXFxuI2Zvcm0tYnV0dG9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDE2cHg7XFxufVxcblxcbiNjYXRlZ29yeSxcXG4jZWRpdC1jYXRlZ29yeSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBnYXA6IDE2cHg7XFxufVxcblxcbi5jYXRlZ29yeS1zZWN0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDRweDtcXG59XFxuXFxuLyogQW5pbWF0aW9ucyAqL1xcbkBrZXlmcmFtZXMgYXBwZW5kLWFuaW1hdGUge1xcbiAgICBmcm9tIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGVZKDApO1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgfVxcbiAgICB0byB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWSgxKTtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgIH1cXG59XFxuXFxuLm5ldy1ib3gge1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMDtcXG4gICAgYW5pbWF0aW9uOiBhcHBlbmQtYW5pbWF0ZSAwLjNzIGxpbmVhcjtcXG59XFxuXFxuLyogQnV0dG9ucyAqL1xcbmJ1dHRvbiB7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbn1cXG5cXG4jY2FuY2VsLWVkaXQsXFxuI2RlbGV0ZSxcXG4jaGlkZS1mb3JtIHtcXG4gICAgcGFkZGluZzogNHB4IDhweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgY29sb3I6ICNlZmY2ZmY7XFxufVxcblxcbiNjYW5jZWwtZWRpdDpob3ZlcixcXG4jZGVsZXRlOmhvdmVyLFxcbiNoaWRlLWZvcm06aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZmNmZmO1xcbiAgICBjb2xvcjogcmVkO1xcbn1cXG5cXG4jZWRpdCxcXG4jc3VibWl0LXRhc2stZWRpdCxcXG4jc3VibWl0LXRhc2sge1xcbiAgICBwYWRkaW5nOiA0cHggOHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG4gICAgY29sb3I6ICNlZmY2ZmY7XFxufVxcblxcbiNlZGl0OmhvdmVyLFxcbiNzdWJtaXQtdGFzay1lZGl0OmhvdmVyLFxcbiNzdWJtaXQtdGFzazpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmY2ZmY7XFxuICAgIGNvbG9yOiBncmVlbjtcXG59XFxuXFxuLyogUmVzcG9uc2l2ZW5lc3MgKi9cXG5AbWVkaWEgKG1heC13aWR0aDogNjUwcHgpIHtcXG4gICAgYm9keSB7XFxuICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xcbiAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgfVxcblxcbiAgICBoZWFkZXIsXFxuICAgICNuYXYsXFxuICAgIG1haW4ge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG5cXG4gICAgaGVhZGVyIGgxIHtcXG4gICAgICAgIHBhZGRpbmc6IDEycHggMHB4O1xcbiAgICB9XFxuXFxuICAgICNtYWluLWNvbnRhaW5lciB7XFxuICAgICAgICB3aWR0aDogODAlO1xcbiAgICB9XFxuXFxuICAgIG1haW4ge1xcbiAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgICAgIGZsZXg6IDEgMSBhdXRvO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgfVxcblxcbiAgICAjbmF2IHVsIHtcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxcmVtO1xcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDI0cHg7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgI25hdiB7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgICNuYXYgaDIge1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgICN0YXNrLWxpc3QsXFxuICAgIC50YXNrLWl0ZW0gcCB7XFxuICAgICAgICBmb250LXNpemU6IDAuN3JlbTtcXG4gICAgfVxcblxcbiAgICAuY2hlY2tib3gge1xcbiAgICAgICAgaGVpZ2h0OiAwLjhyZW07XFxuICAgICAgICB3aWR0aDogMC44cmVtO1xcbiAgICB9XFxuXFxuICAgIC5kaXNwbGF5RGF0ZSB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiAzNTBweCkge1xcbiAgICAjY2F0ZWdvcnkgLmNhdGVnb3J5LXNlY3Rpb24gbGFiZWwge1xcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDMwMHB4KSB7XFxuICAgICNjYXRlZ29yeSAuY2F0ZWdvcnktc2VjdGlvbiBsYWJlbCB7XFxuICAgICAgICBmb250LXNpemU6IDAuNXJlbTtcXG4gICAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbi8vIFRhc2tzIGFycmF5IHRoYXQgd2lsbCBiZSB1c2VkIHRvIHBvcHVsYXRlIERPTVxubGV0IGJ1c2luZXNzVGFza3MgPSBbXTtcbmxldCBzY2hvb2xUYXNrcyA9IFtdO1xubGV0IHBlcnNvbmFsVGFza3MgPSBbXTtcblxuLy8gVGFzayBvYmplY3QgY3JlYXRpb25cbmNsYXNzIFRhc2sge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXRhaWxzLCBkYXRlLCBjYXRlZ29yeSwgY29tcGxldGVkKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXRhaWxzID0gZGV0YWlscztcbiAgICAgICAgdGhpcy5kYXRlID0gZGF0ZTtcbiAgICAgICAgdGhpcy5jYXRlZ29yeSA9IGNhdGVnb3J5O1xuICAgICAgICB0aGlzLmNvbXBsZXRlZCA9IGNvbXBsZXRlZDtcbiAgICB9XG59XG5cbi8vIFRvZ2dsZSBuYXYgYmFyIGRpc3BsYXksIHNob3cvaGlkZSB0YXNrIGZvcm1cbmNvbnN0IGJ1dHRvblRvZ2dsZXMgPSAoKCkgPT4ge1xuICAgIGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnUtYnRuXCIpO1xuICAgIGNvbnN0IG5hdkJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2XCIpO1xuXG4gICAgLy8gU2hvdyBhZGQgdGFzayBmb3JtIHdoZW4gYnV0dG9uIGlzIGNsaWNrZWRcbiAgICBjb25zdCBuZXdUYXNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtdGFza1wiKTtcbiAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtLWNvbnRhaW5lclwiKTtcbiAgICBuZXdUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgZm9ybUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICAgIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZChcIm5ldy1ib3hcIik7XG4gICAgICAgIG5ld1Rhc2tCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH0pXG5cbiAgICAvLyBIaWRlIHRhc2sgZm9ybSB3aGVuIGJ1dHRvbiBpcyBjbGlja2VkXG4gICAgY29uc3QgaGlkZUZvcm1CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhpZGUtZm9ybVwiKTtcbiAgICBoaWRlRm9ybUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybS1jb250YWluZXJcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBuZXdUYXNrQnRuLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xuICAgIH0pXG59KSgpO1xuXG5cbi8vIE5hdmlnYXRlIHRvIHNlbGVjdGVkIGZvbGRlciBmcm9tIG5hdiBiYXJcbmNvbnN0IGZvbGRlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZvbGRlclwiKTtcbmNvbnN0IGN1cnJlbnRGb2xkZXJUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3VycmVudC1kaXJlY3RvcnlcIik7XG5cbi8vIE9wZW4gYnVzaW5lc3MgZGlyZWN0b3J5IGJ5IGRlZmF1bHQgb24gd2luZG93IG9wZW5cbmxldCBjdXJyZW50RGlyZWN0b3J5ID0gXCJidXNpbmVzc0ZvbGRlclwiO1xud2luZG93Lm9ubG9hZCA9IChkaXNwbGF5Q3VycmVudERpcmVjdG9yeShjdXJyZW50RGlyZWN0b3J5KSk7XG5cbi8vIFRvZ2dsZSBkaXJlY3RvcnkgdGl0bGUgZnJvbSBuYXYgYmFyXG5mdW5jdGlvbiBkaXNwbGF5Q3VycmVudERpcmVjdG9yeShkaXJlY3RvcnkpIHtcbiAgICBpZiAoZGlyZWN0b3J5ID09IFwiYnVzaW5lc3NGb2xkZXJcIikge1xuICAgICAgICBjdXJyZW50Rm9sZGVyVGl0bGUudGV4dENvbnRlbnQgPSBcIkJ1c2luZXNzXCI7XG4gICAgfSBlbHNlIGlmIChkaXJlY3RvcnkgPT0gXCJzY2hvb2xGb2xkZXJcIikge1xuICAgICAgICBjdXJyZW50Rm9sZGVyVGl0bGUudGV4dENvbnRlbnQgPSBcIlNjaG9vbFwiO1xuICAgIH0gZWxzZSBpZiAoZGlyZWN0b3J5ID09IFwicGVyc29uYWxGb2xkZXJcIil7XG4gICAgICAgIGN1cnJlbnRGb2xkZXJUaXRsZS50ZXh0Q29udGVudCA9IFwiUGVyc29uYWxcIjtcbiAgICB9XG59XG5cbmZvbGRlcnMuZm9yRWFjaCgoZm9sZGVyKSA9PiB7XG4gICAgZm9sZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjdXJyZW50RGlyZWN0b3J5ID0gZm9sZGVyLmlkO1xuICAgICAgICBkaXNwbGF5Q3VycmVudERpcmVjdG9yeShjdXJyZW50RGlyZWN0b3J5KTtcbiAgICAgICAgaWYgKGN1cnJlbnREaXJlY3RvcnkgPT0gXCJidXNpbmVzc0ZvbGRlclwiKSB7XG4gICAgICAgICAgICByZW5kZXJUYXNrcyhidXNpbmVzc1Rhc2tzKTtcbiAgICAgICAgfSBlbHNlIGlmIChjdXJyZW50RGlyZWN0b3J5ID09IFwic2Nob29sRm9sZGVyXCIpIHtcbiAgICAgICAgICAgIHJlbmRlclRhc2tzKHNjaG9vbFRhc2tzKTtcbiAgICAgICAgfSBlbHNlIGlmIChjdXJyZW50RGlyZWN0b3J5ID09IFwicGVyc29uYWxGb2xkZXJcIikge1xuICAgICAgICAgICAgcmVuZGVyVGFza3MocGVyc29uYWxUYXNrcyk7XG4gICAgICAgIH1cbiAgICB9KVxufSlcblxuXG4vLyBBZGQgdGFzayB0byBhcnJheSB3aGVuIGZvcm0gaXMgc3VibWl0dGVkXG5jb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtXCIpO1xuY29uc3Qgc3VibWl0VGFza0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VibWl0LXRhc2tcIik7XG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtLWNvbnRhaW5lclwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtdGFza1wiKS5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLXRpdGxlXCIpLnZhbHVlO1xuICAgIGNvbnN0IGRldGFpbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stZGV0YWlsc1wiKS52YWx1ZTtcbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLWRhdGVcIikudmFsdWU7XG4gICAgbGV0IGNvbXBsZXRlZCA9IGZhbHNlO1xuICAgIGxldCBjYXRlZ29yeTtcblxuICAgIC8vIENoZWNrIHdoaWNoIGNhdGVnb3J5IGlzIGNoZWNrZWQgb2ZmXG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnVzaW5lc3NcIikuY2hlY2tlZCA9PSB0cnVlKSB7XG4gICAgICAgIGNhdGVnb3J5ID0gXCJidXNpbmVzc1wiO1xuICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzY2hvb2xcIikuY2hlY2tlZCA9PSB0cnVlKSB7XG4gICAgICAgIGNhdGVnb3J5ID0gXCJzY2hvb2xcIjsgXG4gICAgfSBlbHNlIHtcbiAgICAgICAgY2F0ZWdvcnkgPSBcInBlcnNvbmFsXCI7XG4gICAgfVxuXG4gICAgLy8gQWRkIHRhc2sgdG8gYXJyYXkgY29ycmVzcG9uZGluZyB0byBzZWxlY3RlZCBjYXRlZ29yeVxuICAgIGxldCBuZXdUYXNrID0gbmV3IFRhc2sodGl0bGUsIGRldGFpbHMsIGRhdGUsIGNhdGVnb3J5LCBjb21wbGV0ZWQpO1xuICAgIGlmIChuZXdUYXNrLmNhdGVnb3J5ID09IFwiYnVzaW5lc3NcIikge1xuICAgICAgICBidXNpbmVzc1Rhc2tzLnB1c2gobmV3VGFzayk7XG4gICAgfSBlbHNlIGlmIChuZXdUYXNrLmNhdGVnb3J5ID09IFwic2Nob29sXCIpIHtcbiAgICAgICAgc2Nob29sVGFza3MucHVzaChuZXdUYXNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBwZXJzb25hbFRhc2tzLnB1c2gobmV3VGFzayk7XG4gICAgfVxuICAgIHNhdmVEYXRhKCk7XG5cbiAgICAvLyBJZiBjcmVhdGluZyBhIHRhc2sgd2l0aGluIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgZGlyZWN0b3J5LCBkaXNwbGF5IHRoZSB1cGRhdGVkIGxpc3RcbiAgICBpZiAobmV3VGFzay5jYXRlZ29yeSA9PSBcImJ1c2luZXNzXCIgJiYgY3VycmVudERpcmVjdG9yeSA9PSBcImJ1c2luZXNzRm9sZGVyXCIpIHtcbiAgICAgICAgcmVuZGVyVGFza3MoYnVzaW5lc3NUYXNrcyk7XG4gICAgfSBlbHNlIGlmIChuZXdUYXNrLmNhdGVnb3J5ID09IFwic2Nob29sXCIgJiYgY3VycmVudERpcmVjdG9yeSA9PSBcInNjaG9vbEZvbGRlclwiKSB7XG4gICAgICAgIHJlbmRlclRhc2tzKHNjaG9vbFRhc2tzKTtcbiAgICB9IGVsc2UgaWYgKG5ld1Rhc2suY2F0ZWdvcnkgPT0gXCJwZXJzb25hbFwiICYmIGN1cnJlbnREaXJlY3RvcnkgPT0gXCJwZXJzb25hbEZvbGRlclwiKSB7XG4gICAgICAgIHJlbmRlclRhc2tzKHBlcnNvbmFsVGFza3MpO1xuICAgIH1cblxuICAgIGZvcm0ucmVzZXQoKTtcbn0pXG5cblxuLy8gRGlzcGxheSBjdXJyZW50IHRhc2tzIG9uIHNjcmVlblxuZnVuY3Rpb24gcmVuZGVyVGFza3MobGlzdCkge1xuICAgIC8vIEZpcnN0IGNsZWFyIGFsbCB0YXNrcyB0byBhdm9pZCBkdXBsaWNhdGlvblxuICAgIGNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLWxpc3RcIik7XG4gICAgY29uc3QgYWxsVGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhc2staXRlbVwiKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbFRhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGFsbFRhc2tzW2ldLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIC8vIEZvciBlYWNoIGVudHJ5IGluIG15VGFza3MsIGNyZWF0ZSBhIERPTSBlbGVtZW50XG4gICAgbGlzdC5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhc2tJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGFza0l0ZW0uY2xhc3NMaXN0LmFkZChcInRhc2staXRlbVwiKTtcbiAgICAgICAgdGFza0xpc3QuYXBwZW5kQ2hpbGQodGFza0l0ZW0pO1xuXG4gICAgICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY2hlY2tib3guY2xhc3NMaXN0LmFkZChcImNoZWNrYm94XCIpO1xuICAgICAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNoZWNrYm94XCIpO1xuICAgICAgICB0YXNrSXRlbS5hcHBlbmRDaGlsZChjaGVja2JveCk7XG5cbiAgICAgICAgY29uc3QgbWFpbkJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG1haW5Cb3guY2xhc3NMaXN0LmFkZChcIm1haW5Cb3hcIik7XG4gICAgICAgIHRhc2tJdGVtLmFwcGVuZENoaWxkKG1haW5Cb3gpO1xuXG4gICAgICAgIGNvbnN0IGRpc3BsYXlUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcbiAgICAgICAgZGlzcGxheVRpdGxlLmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5VGl0bGVcIik7XG4gICAgICAgIGRpc3BsYXlUaXRsZS50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XG4gICAgICAgIG1haW5Cb3guYXBwZW5kQ2hpbGQoZGlzcGxheVRpdGxlKTtcblxuICAgICAgICBjb25zdCBkaXNwbGF5RGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBkaXNwbGF5RGV0YWlscy5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheURldGFpbHNcIik7XG4gICAgICAgIGRpc3BsYXlEZXRhaWxzLnRleHRDb250ZW50ID0gdGFzay5kZXRhaWxzO1xuICAgICAgICBtYWluQm94LmFwcGVuZENoaWxkKGRpc3BsYXlEZXRhaWxzKTtcblxuICAgICAgICBjb25zdCBkaXNwbGF5RGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBkaXNwbGF5RGF0ZS5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheURhdGVcIik7XG4gICAgICAgIGRpc3BsYXlEYXRlLnRleHRDb250ZW50ID0gdGFzay5kYXRlO1xuICAgICAgICB0YXNrSXRlbS5hcHBlbmRDaGlsZChkaXNwbGF5RGF0ZSk7XG5cbiAgICAgICAgLy8gRWRpdCBidXR0b25cbiAgICAgICAgY29uc3QgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGVkaXRCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJlZGl0XCIpO1xuICAgICAgICBlZGl0QnV0dG9uLnRleHRDb250ZW50ID0gXCJFZGl0XCI7XG4gICAgICAgIHRhc2tJdGVtLmFwcGVuZENoaWxkKGVkaXRCdXR0b24pO1xuXG4gICAgICAgIC8vIExpbmsgdGhlIGluZGV4IHRvIHRoZSBkZWxldGUgYnV0dG9uIGFuZCBpbmNyZW1lbnQgcGVyIHRhc2sgZWxlbWVudC5cbiAgICAgICAgLy8gUHJlc3NpbmcgZGVsZXRlIGJ1dHRvbiByZW1vdmVzIHRoZSBwYXJlbnQgZG9tIGVsZW1lbnQgYXQgdGhlIGluZGV4IGNvcnJyZXNwb25kaW5nIHRvIG15VGFza3MuXG4gICAgICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGRlbGV0ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRlbGV0ZVwiKTtcbiAgICAgICAgZGVsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gXCJEZWxldGVcIjtcbiAgICAgICAgdGFza0l0ZW0uYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcblxuICAgICAgICAvLyBpZiB0YXNrIGlzIGFscmVhZHkgY29tcGxldGVkLCBoaWdobGlnaHQgdGhlIGNoZWNrYm94IGFuZCBhZGQgYSBzdHJpa2V0aHJvdWdoIHRvIHRoZSB0ZXh0XG4gICAgICAgIGZ1bmN0aW9uIGNoZWNrQ29tcGxldGVkKCkge1xuICAgICAgICAgICAgaWYgKHRhc2suY29tcGxldGVkID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBjaGVja2JveC5jbGFzc0xpc3QuYWRkKFwiY29tcGxldGVkXCIpO1xuICAgICAgICAgICAgICAgIGRpc3BsYXlUaXRsZS5jbGFzc0xpc3QuYWRkKFwic3RyaWtldGhyb3VnaFwiKTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5RGV0YWlscy5jbGFzc0xpc3QuYWRkKFwic3RyaWtldGhyb3VnaFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjaGVja0NvbXBsZXRlZCgpO1xuXG4gICAgICAgIC8vIFRvZ2dsZSBjb21wbGV0ZWQgdGFza3NcbiAgICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0YXNrLmNvbXBsZXRlZCA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGNoZWNrYm94LmNsYXNzTGlzdC5hZGQoXCJjb21wbGV0ZWRcIik7XG4gICAgICAgICAgICAgICAgZGlzcGxheVRpdGxlLmNsYXNzTGlzdC5hZGQoXCJzdHJpa2V0aHJvdWdoXCIpO1xuICAgICAgICAgICAgICAgIGRpc3BsYXlEZXRhaWxzLmNsYXNzTGlzdC5hZGQoXCJzdHJpa2V0aHJvdWdoXCIpO1xuICAgICAgICAgICAgICAgIHRhc2suY29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2hlY2tib3guY2xhc3NMaXN0LnJlbW92ZShcImNvbXBsZXRlZFwiKTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5VGl0bGUuY2xhc3NMaXN0LnJlbW92ZShcInN0cmlrZXRocm91Z2hcIik7XG4gICAgICAgICAgICAgICAgZGlzcGxheURldGFpbHMuY2xhc3NMaXN0LnJlbW92ZShcInN0cmlrZXRocm91Z2hcIik7XG4gICAgICAgICAgICAgICAgdGFzay5jb21wbGV0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNhdmVEYXRhKCk7XG4gICAgICAgIH0pO1xuICAgIH0pXG59XG5cbi8vIExpc3RlbiBmb3IgY2xpY2sgb24gYSBkZWxldGUgdGFzayBidXR0b24sIHJ1biBkZWxldGUgdGFzayBmdW5jdGlvblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgaWYgKGUudGFyZ2V0ICYmIGUudGFyZ2V0LmlkID09ICdkZWxldGUnKSB7XG4gICAgICAgIGRlbGV0ZVRhc2soZSk7XG4gICAgfVxuIH0pO1xuXG4vLyBEZWxldGUgdGFzayBmcm9tIGxpc3RcbmZ1bmN0aW9uIGRlbGV0ZVRhc2soZSkge1xuICAgIGxldCB0YXNrRGl2ID0gZS50YXJnZXQucGFyZW50RWxlbWVudDtcbiAgICBsZXQgdGl0bGVEaXYgPSB0YXNrRGl2LnF1ZXJ5U2VsZWN0b3IoXCIuZGlzcGxheVRpdGxlXCIpLnRleHRDb250ZW50O1xuICAgIGlmIChjdXJyZW50RGlyZWN0b3J5ID09IFwiYnVzaW5lc3NGb2xkZXJcIikge1xuICAgICAgICBsZXQgcmVtYWluaW5nQXJyYXkgPSBidXNpbmVzc1Rhc2tzLmZpbHRlcih0YXNrID0+IHRhc2sudGl0bGUgIT0gdGl0bGVEaXYpO1xuICAgICAgICBidXNpbmVzc1Rhc2tzID0gcmVtYWluaW5nQXJyYXk7XG4gICAgICAgIHJlbmRlclRhc2tzKGJ1c2luZXNzVGFza3MpO1xuICAgIH0gZWxzZSBpZiAoY3VycmVudERpcmVjdG9yeSA9PSBcInNjaG9vbEZvbGRlclwiKSB7XG4gICAgICAgIGxldCByZW1haW5pbmdBcnJheSA9IHNjaG9vbFRhc2tzLmZpbHRlcih0YXNrID0+IHRhc2sudGl0bGUgIT0gdGl0bGVEaXYpO1xuICAgICAgICBzY2hvb2xUYXNrcyA9IHJlbWFpbmluZ0FycmF5O1xuICAgICAgICByZW5kZXJUYXNrcyhzY2hvb2xUYXNrcyk7XG4gICAgfSBlbHNlIGlmIChjdXJyZW50RGlyZWN0b3J5ID09IFwicGVyc29uYWxGb2xkZXJcIikge1xuICAgICAgICBsZXQgcmVtYWluaW5nQXJyYXkgPSBwZXJzb25hbFRhc2tzLmZpbHRlcih0YXNrID0+IHRhc2sudGl0bGUgIT0gdGl0bGVEaXYpO1xuICAgICAgICBwZXJzb25hbFRhc2tzID0gcmVtYWluaW5nQXJyYXk7XG4gICAgICAgIHJlbmRlclRhc2tzKHBlcnNvbmFsVGFza3MpO1xuICAgIH1cbiAgICBzYXZlRGF0YSgpO1xufVxuXG4vLyBPbmNsaWNrIG9uIGFuIGVkaXQgYnV0dG9uLCBleGVjdXRlIGVkaXRUYXNrIGZ1bmN0aW9uXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBpZiAoZS50YXJnZXQgJiYgZS50YXJnZXQuaWQgPT0gJ2VkaXQnKSB7XG4gICAgICAgIGVkaXRUYXNrKGUpO1xuICAgIH1cbiB9KTtcblxuZnVuY3Rpb24gZWRpdFRhc2soZSkge1xuICAgIC8vIE9wZW4gZWRpdCBmb3JtIGFuZCBoaWdobGlnaHQgc2VsZWN0ZWQgdGFzayB0byBlZGl0XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0LWNvbnRhaW5lclwiKS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0LWNvbnRhaW5lclwiKS5jbGFzc0xpc3QuYWRkKFwibmV3LWJveFwiKTtcbiAgICBjb25zdCB0YXNrRGl2ID0gZS50YXJnZXQucGFyZW50RWxlbWVudDtcbiAgICB0YXNrRGl2LnN0eWxlLmJvcmRlciA9IFwiMnB4IHNvbGlkIGxpZ2h0Z3JlZW5cIlxuICAgIGNvbnN0IHRpdGxlRGl2ID0gdGFza0Rpdi5xdWVyeVNlbGVjdG9yKFwiLmRpc3BsYXlUaXRsZVwiKTtcbiAgICBjb25zdCBkZXRhaWxzRGl2ID0gdGFza0Rpdi5xdWVyeVNlbGVjdG9yKFwiLmRpc3BsYXlEZXRhaWxzXCIpO1xuICAgIGNvbnN0IGRhdGVEaXYgPSB0YXNrRGl2LnF1ZXJ5U2VsZWN0b3IoXCIuZGlzcGxheURhdGVcIik7XG5cbiAgICBjb25zdCBlZGl0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdC1mb3JtXCIpO1xuICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdC10YXNrLXRpdGxlXCIpO1xuICAgIGNvbnN0IHRhc2tEZXRhaWxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0LXRhc2stZGV0YWlsc1wiKTtcbiAgICBjb25zdCB0YXNrRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdC10YXNrLWRhdGVcIik7XG4gICAgY29uc3QgaXNDb21wbGV0ZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNoZWNrYm94XCIpO1xuXG4gICAgbGV0IGNvbXBsZXRlZDtcbiAgICBsZXQgY2F0ZWdvcnk7XG4gICAgXG4gICAgaWYgKGlzQ29tcGxldGVkLmNsYXNzTGlzdC5jb250YWlucyhcImNvbXBsZXRlZFwiKSkge1xuICAgICAgICBjb21wbGV0ZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbXBsZXRlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8vIFNldCBmb3JtIHZhbHVlcyB0byBjdXJyZW50IHRhc2sgdmFsdWVzXG4gICAgdGFza1RpdGxlLnZhbHVlID0gdGl0bGVEaXYudGV4dENvbnRlbnQ7XG4gICAgdGFza0RldGFpbHMudGV4dENvbnRlbnQgPSBkZXRhaWxzRGl2LnRleHRDb250ZW50O1xuICAgIHRhc2tEYXRlLnZhbHVlID0gZGF0ZURpdi50ZXh0Q29udGVudDtcblxuICAgIGVkaXRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBsZXQgYXJyYXlUb0VkaXQ7XG4gICAgICAgIGlmIChjdXJyZW50RGlyZWN0b3J5ID09IFwiYnVzaW5lc3NGb2xkZXJcIikge1xuICAgICAgICAgICAgYXJyYXlUb0VkaXQgPSBidXNpbmVzc1Rhc2tzO1xuICAgICAgICAgICAgY2F0ZWdvcnkgPSBcImJ1c2luZXNzXCI7XG4gICAgICAgIH0gZWxzZSBpZiAoY3VycmVudERpcmVjdG9yeSA9PSBcInNjaG9vbEZvbGRlclwiKSB7XG4gICAgICAgICAgICBhcnJheVRvRWRpdCA9IHNjaG9vbFRhc2tzO1xuICAgICAgICAgICAgY2F0ZWdvcnkgPSBcInNjaG9vbFwiO1xuICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnREaXJlY3RvcnkgPT0gXCJwZXJzb25hbEZvbGRlclwiKSB7XG4gICAgICAgICAgICBhcnJheVRvRWRpdCA9IHBlcnNvbmFsVGFza3M7XG4gICAgICAgICAgICBjYXRlZ29yeSA9IFwicGVyc29uYWxcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBpbmRleCA9IGFycmF5VG9FZGl0LmZpbmRJbmRleCh0YXNrID0+IHRhc2sudGl0bGUgPT0gdGl0bGVEaXYudGV4dENvbnRlbnQpO1xuICAgICAgICBpZiAoaW5kZXggPCAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBEZWxldGUgdGFzayBmcm9tIGFycmF5IGFuZCByZXBsYWNlIHdpdGggbmV3IHN1Ym1pdHRlZCBlZGl0XG4gICAgICAgIGFycmF5VG9FZGl0LnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIGxldCBuZXdUYXNrID0gbmV3IFRhc2sodGFza1RpdGxlLnZhbHVlLCB0YXNrRGV0YWlscy52YWx1ZSwgdGFza0RhdGUudmFsdWUsIGNhdGVnb3J5LCBjb21wbGV0ZWQpO1xuICAgICAgICBhcnJheVRvRWRpdC5zcGxpY2UoaW5kZXgsIDAsIG5ld1Rhc2spO1xuICAgICAgICAvLyBkaXNwbGF5IG5ldyB0YXNrIGxpc3QsIHJlc2V0IGZvcm0gYW5kIGhpZGVcbiAgICAgICAgcmVuZGVyVGFza3MoYXJyYXlUb0VkaXQpO1xuICAgICAgICBlZGl0Rm9ybS5yZXNldCgpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXQtY29udGFpbmVyXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgdGFza0Rpdi5zdHlsZS5ib3JkZXIgPSBcIjJweCBzb2xpZCAjYmZkYmZlXCI7XG4gICAgICAgIHNhdmVEYXRhKCk7XG4gICAgfSlcblxuICAgIC8vIGlmIGVkaXQgY2FuY2VsbGVkLCByZXNldCBmb3JtIGFuZCBoaWRlXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGlmIChlLnRhcmdldCAmJiBlLnRhcmdldC5pZCA9PSBcImNhbmNlbC1lZGl0XCIpIHtcbiAgICAgICAgICAgIGVkaXRGb3JtLnJlc2V0KCk7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXQtY29udGFpbmVyXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIHRhc2tEaXYuc3R5bGUuYm9yZGVyID0gXCIycHggc29saWQgI2JmZGJmZVwiO1xuICAgICAgICB9XG4gICAgfSlcbn1cblxuXG4vLyBTYXZlIGRhdGEgdG8gbG9jYWwgc3RvcmFnZVxuZnVuY3Rpb24gc2F2ZURhdGEoKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYGJ1c2luZXNzVGFza3NgLCBKU09OLnN0cmluZ2lmeShidXNpbmVzc1Rhc2tzKSlcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgc2Nob29sVGFza3NgLCBKU09OLnN0cmluZ2lmeShzY2hvb2xUYXNrcykpXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYHBlcnNvbmFsVGFza3NgLCBKU09OLnN0cmluZ2lmeShwZXJzb25hbFRhc2tzKSlcbn1cblxuZnVuY3Rpb24gcmVzdG9yZSgpIHtcbiAgICBpZiAoIWxvY2FsU3RvcmFnZS5idXNpbmVzc1Rhc2tzIHx8ICFsb2NhbFN0b3JhZ2Uuc2Nob29sVGFza3MgfHwgIWxvY2FsU3RvcmFnZS5wZXJzb25hbFRhc2tzKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgYnVzaW5lc3MgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImJ1c2luZXNzVGFza3NcIik7XG4gICAgICAgIGxldCBzY2hvb2wgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNjaG9vbFRhc2tzXCIpO1xuICAgICAgICBsZXQgcGVyc29uYWwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInBlcnNvbmFsVGFza3NcIik7XG4gICAgXG4gICAgICAgIGJ1c2luZXNzID0gSlNPTi5wYXJzZShidXNpbmVzcyk7XG4gICAgICAgIHNjaG9vbCA9IEpTT04ucGFyc2Uoc2Nob29sKTtcbiAgICAgICAgcGVyc29uYWwgPSBKU09OLnBhcnNlKHBlcnNvbmFsKTtcbiAgICBcbiAgICAgICAgYnVzaW5lc3NUYXNrcyA9IGJ1c2luZXNzO1xuICAgICAgICBzY2hvb2xUYXNrcyA9IHNjaG9vbDtcbiAgICAgICAgcGVyc29uYWxUYXNrcyA9IHBlcnNvbmFsO1xuICAgICAgICByZW5kZXJUYXNrcyhidXNpbmVzc1Rhc2tzKTtcbiAgICB9XG59XG5cbnJlc3RvcmUoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==