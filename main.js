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
___CSS_LOADER_EXPORT___.push([module.id, "*, *::before, *::after {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    height: 100vh;\n    width: 100vw;\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n    grid-template-rows: auto 4fr;\n    font-family: \"Alata\", sans-serif;\n    background-color: #eff6ff;\n}\n\n\n/* Header */\nheader {\n    background-color: #1d4ed8;\n    color: #eff6ff;\n    grid-column: 1 / 3;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    box-shadow: 0 5px 5px -3px rgb(0 0 0 / 0.1);\n    z-index: 3;\n}\n\nheader h1 {\n    padding: 24px 0px;\n}\n\nheader img {\n    width: 2rem;\n    height: auto;\n    position: absolute;\n    top: 30%;\n    left: 24px;\n    cursor: pointer;\n}\n\nheader img:hover {\n    border: none;\n}\n\n/* Nav Bar */\n#nav {\n    color: black;\n    background-color: #bfdbfe;\n    display: flex;\n    flex-direction: column;\n    gap: 24px;\n    align-items: center;\n}\n\n#nav h2 {\n    padding-top: 24px;\n    width: 80%;\n    border-bottom: 2px solid black;\n    align-self: center;\n}\n\n#nav ul {\n    list-style-type: none;\n    line-height: 1.5rem;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    width: 80%;\n}\n\n#nav ul li {\n    width: 100%;\n    border-radius: 5px;\n    padding: 4px 2px;\n}\n\n#nav ul li:hover {\n    cursor: pointer;\n    background-color: #1d4ed8;\n    color: #eff6ff;\n}\n\n/* Main container  */\nmain {\n    color: black;\n    background-color: #eff6ff;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    overflow: scroll;\n}\n    \n#main-container {\n    display: flex;\n    flex-direction: column;\n    width: 90%;\n    align-items: center;\n    justify-content: center;\n    padding-top: 24px;\n    padding-bottom: 24px;\n    gap: 16px;\n}\n\n#current-directory {\n    font-weight: bold;\n    background-color: #1d4ed8;\n    color: #eff6ff;\n    border-radius: 5px;\n    padding: 16px;\n    width: 100%;\n    font-size: 1.5rem;\n}\n\n#task-list {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 4px;\n}\n\n.task-item {\n    width: 100%;\n    border: 2px solid #bfdbfe;\n    border-radius: 5px;\n    padding: 8px;\n    display: flex;\n    align-items: center;\n    position: relative;\n    gap: 16px;\n}\n\n.checkbox {\n    width: 1.5rem;\n    height: 1.5rem;\n    border-radius: 50%;\n    border: 1px solid black;\n    background-color: transparent;\n    flex-shrink: 0;\n}\n\n.mainBox {\n    /* display: flex;\n    flex-direction: column; */\n    flex: 1;\n    overflow: scroll;\n    flex-wrap: wrap;\n}\n\n.displayTitle {\n    /* flex-wrap: wrap; */\n}\n\n.displayDetails {\n    /* flex-wrap: wrap; */\n}\n\n.displayDate {\n\n}\n\n#delete {\n\n}\n\n#edit {\n\n}\n\n.completed {\n    background-color: lightgreen;\n    border: 1px solid lightgreen;\n}\n\n.strikethrough {\n    text-decoration: line-through;\n}\n\nbutton:hover,\n.checkbox:hover {\n    cursor: pointer;\n}\n\n.task-item p {\n    font-size: 0.8rem;\n    color: grey;\n}\n\n#add-task {\n    padding: 4px 8px;\n    font-size: 1.2rem;\n    background-color: #1d4ed8;\n    color: #eff6ff;\n    border: 1px solid #1d4ed8;\n    border-radius: 5px;\n}\n\n#add-task:hover {\n    background-color: #eff6ff;\n    color: #1d4ed8;\n}\n\n\n/* Forms */\n#form-container,\n#edit-container {\n    display: none;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    background-color: #bfdbfe;\n    border-radius: 5px;\n}\n\n#form-container form,\n#edit-container form {\n    padding-top: 24px;\n    padding-bottom: 12px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 8px;\n    width: 95%;\n}\n\n#form-title {\n    align-self: flex-start;\n    padding-bottom: 8px;\n}\n\n#form-container input[type=\"text\"],\n#form-container input[type=\"date\"],\n#task-details,\n#edit-container input[type=\"text\"],\n#edit-container input[type=\"date\"],\n#edit-task-details{\n    width: 100%;\n    font-family: inherit;\n    border: none;\n    border-radius: 5px;\n    background-color: #eff6ff;\n    padding: 0px 8px;\n}\n\ninput[type=\"radio\"]:hover {\n    cursor: pointer;\n}\n\n#task-title, \n#task-date,\n#edit-task-title,\n#edit-task-date {\n    height: 1.5rem;\n}\n\n#task-details,\n#edit-task-details {\n    height: 4rem;\n    resize: none;\n    padding-top: 3px;\n}\n\n#form-buttons {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 16px;\n}\n\n#category,\n#edit-category {\n    display: flex;\n    width: 100%;\n    gap: 16px;\n}\n\n.category-section {\n    display: flex;\n    width: fit-content;\n    align-items: center;\n    gap: 4px;\n}\n\n/* Animations */\n@keyframes append-animate {\n\tfrom {\n\t\ttransform: scaleY(0);\n\t\topacity: 0;\n\t}\n\tto {\n\t\ttransform: scaleY(1);\n\t\topacity: 1;\n\t}\n}\n\n.new-box {\n    transform-origin: 50% 0;\n\tanimation: append-animate .3s linear;\n}\n\n/* Buttons */\nbutton {\n    font-family: inherit;\n}\n\n#cancel-edit,\n#delete,\n#hide-form {\n    padding: 4px 8px;\n    border: 1px solid red;\n    border-radius: 5px;\n    background-color: red;\n    color: #eff6ff;\n}\n\n#cancel-edit:hover,\n#delete:hover,\n#hide-form:hover {\n    background-color: #eff6ff;\n    color: red;\n}\n\n#edit,\n#submit-task-edit,\n#submit-task {\n    padding: 4px 8px;\n    border: 1px solid green;\n    border-radius: 5px;\n    background-color: green;\n    color: #eff6ff;\n}\n\n#edit:hover,\n#submit-task-edit:hover,\n#submit-task:hover {\n    background-color: #eff6ff;\n    color: green;\n}\n\n/* Responsiveness */\n@media (max-width:650px) {\n    body {\n        overflow: scroll;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        width: 100vw;\n        height: fit-content;\n    }\n\n    header,\n    #nav,\n    main {\n        width: 100%;\n    }\n\n    header h1 {\n        padding: 12px 0px;\n    }\n\n    #main-container {\n        width: 80%;\n    }\n\n    main {\n        height: fit-content;\n        flex: 1 1 auto;\n        width: 100%;\n        overflow: auto;\n    }\n\n    #nav ul {\n        line-height: 1.0rem;\n        padding-bottom: 24px;\n        text-align: center;\n    }\n\n    #nav {\n        align-items: center;\n    }\n\n    #nav h2 {\n        text-align: center;\n    }\n\n    #task-list, \n    .task-item p {\n        font-size: 0.7rem;\n    }\n\n    .checkbox {\n        height: 0.8rem;\n        width: 0.8rem;\n    }\n\n    .displayDate {\n        display: none;\n    }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["*, *::before, *::after {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    height: 100vh;\n    width: 100vw;\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n    grid-template-rows: auto 4fr;\n    font-family: \"Alata\", sans-serif;\n    background-color: #eff6ff;\n}\n\n\n/* Header */\nheader {\n    background-color: #1d4ed8;\n    color: #eff6ff;\n    grid-column: 1 / 3;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    box-shadow: 0 5px 5px -3px rgb(0 0 0 / 0.1);\n    z-index: 3;\n}\n\nheader h1 {\n    padding: 24px 0px;\n}\n\nheader img {\n    width: 2rem;\n    height: auto;\n    position: absolute;\n    top: 30%;\n    left: 24px;\n    cursor: pointer;\n}\n\nheader img:hover {\n    border: none;\n}\n\n/* Nav Bar */\n#nav {\n    color: black;\n    background-color: #bfdbfe;\n    display: flex;\n    flex-direction: column;\n    gap: 24px;\n    align-items: center;\n}\n\n#nav h2 {\n    padding-top: 24px;\n    width: 80%;\n    border-bottom: 2px solid black;\n    align-self: center;\n}\n\n#nav ul {\n    list-style-type: none;\n    line-height: 1.5rem;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    width: 80%;\n}\n\n#nav ul li {\n    width: 100%;\n    border-radius: 5px;\n    padding: 4px 2px;\n}\n\n#nav ul li:hover {\n    cursor: pointer;\n    background-color: #1d4ed8;\n    color: #eff6ff;\n}\n\n/* Main container  */\nmain {\n    color: black;\n    background-color: #eff6ff;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    overflow: scroll;\n}\n    \n#main-container {\n    display: flex;\n    flex-direction: column;\n    width: 90%;\n    align-items: center;\n    justify-content: center;\n    padding-top: 24px;\n    padding-bottom: 24px;\n    gap: 16px;\n}\n\n#current-directory {\n    font-weight: bold;\n    background-color: #1d4ed8;\n    color: #eff6ff;\n    border-radius: 5px;\n    padding: 16px;\n    width: 100%;\n    font-size: 1.5rem;\n}\n\n#task-list {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 4px;\n}\n\n.task-item {\n    width: 100%;\n    border: 2px solid #bfdbfe;\n    border-radius: 5px;\n    padding: 8px;\n    display: flex;\n    align-items: center;\n    position: relative;\n    gap: 16px;\n}\n\n.checkbox {\n    width: 1.5rem;\n    height: 1.5rem;\n    border-radius: 50%;\n    border: 1px solid black;\n    background-color: transparent;\n    flex-shrink: 0;\n}\n\n.mainBox {\n    /* display: flex;\n    flex-direction: column; */\n    flex: 1;\n    overflow: scroll;\n    flex-wrap: wrap;\n}\n\n.displayTitle {\n    /* flex-wrap: wrap; */\n}\n\n.displayDetails {\n    /* flex-wrap: wrap; */\n}\n\n.displayDate {\n\n}\n\n#delete {\n\n}\n\n#edit {\n\n}\n\n.completed {\n    background-color: lightgreen;\n    border: 1px solid lightgreen;\n}\n\n.strikethrough {\n    text-decoration: line-through;\n}\n\nbutton:hover,\n.checkbox:hover {\n    cursor: pointer;\n}\n\n.task-item p {\n    font-size: 0.8rem;\n    color: grey;\n}\n\n#add-task {\n    padding: 4px 8px;\n    font-size: 1.2rem;\n    background-color: #1d4ed8;\n    color: #eff6ff;\n    border: 1px solid #1d4ed8;\n    border-radius: 5px;\n}\n\n#add-task:hover {\n    background-color: #eff6ff;\n    color: #1d4ed8;\n}\n\n\n/* Forms */\n#form-container,\n#edit-container {\n    display: none;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    background-color: #bfdbfe;\n    border-radius: 5px;\n}\n\n#form-container form,\n#edit-container form {\n    padding-top: 24px;\n    padding-bottom: 12px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 8px;\n    width: 95%;\n}\n\n#form-title {\n    align-self: flex-start;\n    padding-bottom: 8px;\n}\n\n#form-container input[type=\"text\"],\n#form-container input[type=\"date\"],\n#task-details,\n#edit-container input[type=\"text\"],\n#edit-container input[type=\"date\"],\n#edit-task-details{\n    width: 100%;\n    font-family: inherit;\n    border: none;\n    border-radius: 5px;\n    background-color: #eff6ff;\n    padding: 0px 8px;\n}\n\ninput[type=\"radio\"]:hover {\n    cursor: pointer;\n}\n\n#task-title, \n#task-date,\n#edit-task-title,\n#edit-task-date {\n    height: 1.5rem;\n}\n\n#task-details,\n#edit-task-details {\n    height: 4rem;\n    resize: none;\n    padding-top: 3px;\n}\n\n#form-buttons {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 16px;\n}\n\n#category,\n#edit-category {\n    display: flex;\n    width: 100%;\n    gap: 16px;\n}\n\n.category-section {\n    display: flex;\n    width: fit-content;\n    align-items: center;\n    gap: 4px;\n}\n\n/* Animations */\n@keyframes append-animate {\n\tfrom {\n\t\ttransform: scaleY(0);\n\t\topacity: 0;\n\t}\n\tto {\n\t\ttransform: scaleY(1);\n\t\topacity: 1;\n\t}\n}\n\n.new-box {\n    transform-origin: 50% 0;\n\tanimation: append-animate .3s linear;\n}\n\n/* Buttons */\nbutton {\n    font-family: inherit;\n}\n\n#cancel-edit,\n#delete,\n#hide-form {\n    padding: 4px 8px;\n    border: 1px solid red;\n    border-radius: 5px;\n    background-color: red;\n    color: #eff6ff;\n}\n\n#cancel-edit:hover,\n#delete:hover,\n#hide-form:hover {\n    background-color: #eff6ff;\n    color: red;\n}\n\n#edit,\n#submit-task-edit,\n#submit-task {\n    padding: 4px 8px;\n    border: 1px solid green;\n    border-radius: 5px;\n    background-color: green;\n    color: #eff6ff;\n}\n\n#edit:hover,\n#submit-task-edit:hover,\n#submit-task:hover {\n    background-color: #eff6ff;\n    color: green;\n}\n\n/* Responsiveness */\n@media (max-width:650px) {\n    body {\n        overflow: scroll;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        width: 100vw;\n        height: fit-content;\n    }\n\n    header,\n    #nav,\n    main {\n        width: 100%;\n    }\n\n    header h1 {\n        padding: 12px 0px;\n    }\n\n    #main-container {\n        width: 80%;\n    }\n\n    main {\n        height: fit-content;\n        flex: 1 1 auto;\n        width: 100%;\n        overflow: auto;\n    }\n\n    #nav ul {\n        line-height: 1.0rem;\n        padding-bottom: 24px;\n        text-align: center;\n    }\n\n    #nav {\n        align-items: center;\n    }\n\n    #nav h2 {\n        text-align: center;\n    }\n\n    #task-list, \n    .task-item p {\n        font-size: 0.7rem;\n    }\n\n    .checkbox {\n        height: 0.8rem;\n        width: 0.8rem;\n    }\n\n    .displayDate {\n        display: none;\n    }\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLEtBQUssT0FBTyxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsUUFBUSxVQUFVLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sUUFBUSxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxVQUFVLEtBQUssS0FBSyxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksV0FBVyxLQUFLLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxVQUFVLEtBQUssWUFBWSxPQUFPLE9BQU8sWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sT0FBTyxZQUFZLFdBQVcsTUFBTSxPQUFPLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLE9BQU8sWUFBWSxXQUFXLE9BQU8sWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxPQUFPLFVBQVUsTUFBTSxLQUFLLFlBQVks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Q0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHFCQUFxQjtBQUN6QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gNGZyO1xcbiAgICBmb250LWZhbWlseTogXFxcIkFsYXRhXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZjZmZjtcXG59XFxuXFxuXFxuLyogSGVhZGVyICovXFxuaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFkNGVkODtcXG4gICAgY29sb3I6ICNlZmY2ZmY7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiKDAgMCAwIC8gMC4xKTtcXG4gICAgei1pbmRleDogMztcXG59XFxuXFxuaGVhZGVyIGgxIHtcXG4gICAgcGFkZGluZzogMjRweCAwcHg7XFxufVxcblxcbmhlYWRlciBpbWcge1xcbiAgICB3aWR0aDogMnJlbTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMzAlO1xcbiAgICBsZWZ0OiAyNHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmhlYWRlciBpbWc6aG92ZXIge1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi8qIE5hdiBCYXIgKi9cXG4jbmF2IHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmZkYmZlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDI0cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNuYXYgaDIge1xcbiAgICBwYWRkaW5nLXRvcDogMjRweDtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbiNuYXYgdWwge1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICB3aWR0aDogODAlO1xcbn1cXG5cXG4jbmF2IHVsIGxpIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogNHB4IDJweDtcXG59XFxuXFxuI25hdiB1bCBsaTpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFkNGVkODtcXG4gICAgY29sb3I6ICNlZmY2ZmY7XFxufVxcblxcbi8qIE1haW4gY29udGFpbmVyICAqL1xcbm1haW4ge1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmY2ZmY7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG92ZXJmbG93OiBzY3JvbGw7XFxufVxcbiAgICBcXG4jbWFpbi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcGFkZGluZy10b3A6IDI0cHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAyNHB4O1xcbiAgICBnYXA6IDE2cHg7XFxufVxcblxcbiNjdXJyZW50LWRpcmVjdG9yeSB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWQ0ZWQ4O1xcbiAgICBjb2xvcjogI2VmZjZmZjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiAxNnB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbiN0YXNrLWxpc3Qge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogNHB4O1xcbn1cXG5cXG4udGFzay1pdGVtIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNiZmRiZmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGdhcDogMTZweDtcXG59XFxuXFxuLmNoZWNrYm94IHtcXG4gICAgd2lkdGg6IDEuNXJlbTtcXG4gICAgaGVpZ2h0OiAxLjVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBmbGV4LXNocmluazogMDtcXG59XFxuXFxuLm1haW5Cb3gge1xcbiAgICAvKiBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAqL1xcbiAgICBmbGV4OiAxO1xcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5kaXNwbGF5VGl0bGUge1xcbiAgICAvKiBmbGV4LXdyYXA6IHdyYXA7ICovXFxufVxcblxcbi5kaXNwbGF5RGV0YWlscyB7XFxuICAgIC8qIGZsZXgtd3JhcDogd3JhcDsgKi9cXG59XFxuXFxuLmRpc3BsYXlEYXRlIHtcXG5cXG59XFxuXFxuI2RlbGV0ZSB7XFxuXFxufVxcblxcbiNlZGl0IHtcXG5cXG59XFxuXFxuLmNvbXBsZXRlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JlZW47XFxufVxcblxcbi5zdHJpa2V0aHJvdWdoIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbmJ1dHRvbjpob3ZlcixcXG4uY2hlY2tib3g6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNrLWl0ZW0gcCB7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgICBjb2xvcjogZ3JleTtcXG59XFxuXFxuI2FkZC10YXNrIHtcXG4gICAgcGFkZGluZzogNHB4IDhweDtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZDRlZDg7XFxuICAgIGNvbG9yOiAjZWZmNmZmO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMWQ0ZWQ4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbiNhZGQtdGFzazpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmY2ZmY7XFxuICAgIGNvbG9yOiAjMWQ0ZWQ4O1xcbn1cXG5cXG5cXG4vKiBGb3JtcyAqL1xcbiNmb3JtLWNvbnRhaW5lcixcXG4jZWRpdC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiZmRiZmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuI2Zvcm0tY29udGFpbmVyIGZvcm0sXFxuI2VkaXQtY29udGFpbmVyIGZvcm0ge1xcbiAgICBwYWRkaW5nLXRvcDogMjRweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDEycHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDhweDtcXG4gICAgd2lkdGg6IDk1JTtcXG59XFxuXFxuI2Zvcm0tdGl0bGUge1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xcbn1cXG5cXG4jZm9ybS1jb250YWluZXIgaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdLFxcbiNmb3JtLWNvbnRhaW5lciBpbnB1dFt0eXBlPVxcXCJkYXRlXFxcIl0sXFxuI3Rhc2stZGV0YWlscyxcXG4jZWRpdC1jb250YWluZXIgaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdLFxcbiNlZGl0LWNvbnRhaW5lciBpbnB1dFt0eXBlPVxcXCJkYXRlXFxcIl0sXFxuI2VkaXQtdGFzay1kZXRhaWxze1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZmNmZmO1xcbiAgICBwYWRkaW5nOiAwcHggOHB4O1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jdGFzay10aXRsZSwgXFxuI3Rhc2stZGF0ZSxcXG4jZWRpdC10YXNrLXRpdGxlLFxcbiNlZGl0LXRhc2stZGF0ZSB7XFxuICAgIGhlaWdodDogMS41cmVtO1xcbn1cXG5cXG4jdGFzay1kZXRhaWxzLFxcbiNlZGl0LXRhc2stZGV0YWlscyB7XFxuICAgIGhlaWdodDogNHJlbTtcXG4gICAgcmVzaXplOiBub25lO1xcbiAgICBwYWRkaW5nLXRvcDogM3B4O1xcbn1cXG5cXG4jZm9ybS1idXR0b25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMTZweDtcXG59XFxuXFxuI2NhdGVnb3J5LFxcbiNlZGl0LWNhdGVnb3J5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGdhcDogMTZweDtcXG59XFxuXFxuLmNhdGVnb3J5LXNlY3Rpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNHB4O1xcbn1cXG5cXG4vKiBBbmltYXRpb25zICovXFxuQGtleWZyYW1lcyBhcHBlbmQtYW5pbWF0ZSB7XFxuXFx0ZnJvbSB7XFxuXFx0XFx0dHJhbnNmb3JtOiBzY2FsZVkoMCk7XFxuXFx0XFx0b3BhY2l0eTogMDtcXG5cXHR9XFxuXFx0dG8ge1xcblxcdFxcdHRyYW5zZm9ybTogc2NhbGVZKDEpO1xcblxcdFxcdG9wYWNpdHk6IDE7XFxuXFx0fVxcbn1cXG5cXG4ubmV3LWJveCB7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSAwO1xcblxcdGFuaW1hdGlvbjogYXBwZW5kLWFuaW1hdGUgLjNzIGxpbmVhcjtcXG59XFxuXFxuLyogQnV0dG9ucyAqL1xcbmJ1dHRvbiB7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbn1cXG5cXG4jY2FuY2VsLWVkaXQsXFxuI2RlbGV0ZSxcXG4jaGlkZS1mb3JtIHtcXG4gICAgcGFkZGluZzogNHB4IDhweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgY29sb3I6ICNlZmY2ZmY7XFxufVxcblxcbiNjYW5jZWwtZWRpdDpob3ZlcixcXG4jZGVsZXRlOmhvdmVyLFxcbiNoaWRlLWZvcm06aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZmNmZmO1xcbiAgICBjb2xvcjogcmVkO1xcbn1cXG5cXG4jZWRpdCxcXG4jc3VibWl0LXRhc2stZWRpdCxcXG4jc3VibWl0LXRhc2sge1xcbiAgICBwYWRkaW5nOiA0cHggOHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG4gICAgY29sb3I6ICNlZmY2ZmY7XFxufVxcblxcbiNlZGl0OmhvdmVyLFxcbiNzdWJtaXQtdGFzay1lZGl0OmhvdmVyLFxcbiNzdWJtaXQtdGFzazpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmY2ZmY7XFxuICAgIGNvbG9yOiBncmVlbjtcXG59XFxuXFxuLyogUmVzcG9uc2l2ZW5lc3MgKi9cXG5AbWVkaWEgKG1heC13aWR0aDo2NTBweCkge1xcbiAgICBib2R5IHtcXG4gICAgICAgIG92ZXJmbG93OiBzY3JvbGw7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICB3aWR0aDogMTAwdnc7XFxuICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICB9XFxuXFxuICAgIGhlYWRlcixcXG4gICAgI25hdixcXG4gICAgbWFpbiB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcblxcbiAgICBoZWFkZXIgaDEge1xcbiAgICAgICAgcGFkZGluZzogMTJweCAwcHg7XFxuICAgIH1cXG5cXG4gICAgI21haW4tY29udGFpbmVyIHtcXG4gICAgICAgIHdpZHRoOiA4MCU7XFxuICAgIH1cXG5cXG4gICAgbWFpbiB7XFxuICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICAgICAgZmxleDogMSAxIGF1dG87XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICB9XFxuXFxuICAgICNuYXYgdWwge1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMHJlbTtcXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyNHB4O1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgICNuYXYge1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAjbmF2IGgyIHtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAjdGFzay1saXN0LCBcXG4gICAgLnRhc2staXRlbSBwIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xcbiAgICB9XFxuXFxuICAgIC5jaGVja2JveCB7XFxuICAgICAgICBoZWlnaHQ6IDAuOHJlbTtcXG4gICAgICAgIHdpZHRoOiAwLjhyZW07XFxuICAgIH1cXG5cXG4gICAgLmRpc3BsYXlEYXRlIHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFV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O0lBRUE7OztRQUdJLFdBQVc7SUFDZjs7SUFFQTtRQUNJLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLFVBQVU7SUFDZDs7SUFFQTtRQUNJLG1CQUFtQjtRQUNuQixjQUFjO1FBQ2QsV0FBVztRQUNYLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxtQkFBbUI7UUFDbkIsb0JBQW9CO1FBQ3BCLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLGtCQUFrQjtJQUN0Qjs7SUFFQTs7UUFFSSxpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxjQUFjO1FBQ2QsYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGFBQWE7SUFDakI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqLCAqOjpiZWZvcmUsICo6OmFmdGVyIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byA0ZnI7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiQWxhdGFcXFwiLCBzYW5zLXNlcmlmO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZmNmZmO1xcbn1cXG5cXG5cXG4vKiBIZWFkZXIgKi9cXG5oZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWQ0ZWQ4O1xcbiAgICBjb2xvcjogI2VmZjZmZjtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2IoMCAwIDAgLyAwLjEpO1xcbiAgICB6LWluZGV4OiAzO1xcbn1cXG5cXG5oZWFkZXIgaDEge1xcbiAgICBwYWRkaW5nOiAyNHB4IDBweDtcXG59XFxuXFxuaGVhZGVyIGltZyB7XFxuICAgIHdpZHRoOiAycmVtO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAzMCU7XFxuICAgIGxlZnQ6IDI0cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuaGVhZGVyIGltZzpob3ZlciB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLyogTmF2IEJhciAqL1xcbiNuYXYge1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiZmRiZmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMjRweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI25hdiBoMiB7XFxuICAgIHBhZGRpbmctdG9wOiAyNHB4O1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuI25hdiB1bCB7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIHdpZHRoOiA4MCU7XFxufVxcblxcbiNuYXYgdWwgbGkge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiA0cHggMnB4O1xcbn1cXG5cXG4jbmF2IHVsIGxpOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWQ0ZWQ4O1xcbiAgICBjb2xvcjogI2VmZjZmZjtcXG59XFxuXFxuLyogTWFpbiBjb250YWluZXIgICovXFxubWFpbiB7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZjZmZjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcXG59XFxuICAgIFxcbiNtYWluLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nLXRvcDogMjRweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDI0cHg7XFxuICAgIGdhcDogMTZweDtcXG59XFxuXFxuI2N1cnJlbnQtZGlyZWN0b3J5IHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZDRlZDg7XFxuICAgIGNvbG9yOiAjZWZmNmZmO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDE2cHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuI3Rhc2stbGlzdCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiA0cHg7XFxufVxcblxcbi50YXNrLWl0ZW0ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgI2JmZGJmZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZ2FwOiAxNnB4O1xcbn1cXG5cXG4uY2hlY2tib3gge1xcbiAgICB3aWR0aDogMS41cmVtO1xcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcbn1cXG5cXG4ubWFpbkJveCB7XFxuICAgIC8qIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47ICovXFxuICAgIGZsZXg6IDE7XFxuICAgIG92ZXJmbG93OiBzY3JvbGw7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLmRpc3BsYXlUaXRsZSB7XFxuICAgIC8qIGZsZXgtd3JhcDogd3JhcDsgKi9cXG59XFxuXFxuLmRpc3BsYXlEZXRhaWxzIHtcXG4gICAgLyogZmxleC13cmFwOiB3cmFwOyAqL1xcbn1cXG5cXG4uZGlzcGxheURhdGUge1xcblxcbn1cXG5cXG4jZGVsZXRlIHtcXG5cXG59XFxuXFxuI2VkaXQge1xcblxcbn1cXG5cXG4uY29tcGxldGVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmVlbjtcXG59XFxuXFxuLnN0cmlrZXRocm91Z2gge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuYnV0dG9uOmhvdmVyLFxcbi5jaGVja2JveDpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2staXRlbSBwIHtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgIGNvbG9yOiBncmV5O1xcbn1cXG5cXG4jYWRkLXRhc2sge1xcbiAgICBwYWRkaW5nOiA0cHggOHB4O1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFkNGVkODtcXG4gICAgY29sb3I6ICNlZmY2ZmY7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMxZDRlZDg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuI2FkZC10YXNrOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZjZmZjtcXG4gICAgY29sb3I6ICMxZDRlZDg7XFxufVxcblxcblxcbi8qIEZvcm1zICovXFxuI2Zvcm0tY29udGFpbmVyLFxcbiNlZGl0LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JmZGJmZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4jZm9ybS1jb250YWluZXIgZm9ybSxcXG4jZWRpdC1jb250YWluZXIgZm9ybSB7XFxuICAgIHBhZGRpbmctdG9wOiAyNHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTJweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogOHB4O1xcbiAgICB3aWR0aDogOTUlO1xcbn1cXG5cXG4jZm9ybS10aXRsZSB7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XFxufVxcblxcbiNmb3JtLWNvbnRhaW5lciBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0sXFxuI2Zvcm0tY29udGFpbmVyIGlucHV0W3R5cGU9XFxcImRhdGVcXFwiXSxcXG4jdGFzay1kZXRhaWxzLFxcbiNlZGl0LWNvbnRhaW5lciBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0sXFxuI2VkaXQtY29udGFpbmVyIGlucHV0W3R5cGU9XFxcImRhdGVcXFwiXSxcXG4jZWRpdC10YXNrLWRldGFpbHN7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmY2ZmY7XFxuICAgIHBhZGRpbmc6IDBweCA4cHg7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl06aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiN0YXNrLXRpdGxlLCBcXG4jdGFzay1kYXRlLFxcbiNlZGl0LXRhc2stdGl0bGUsXFxuI2VkaXQtdGFzay1kYXRlIHtcXG4gICAgaGVpZ2h0OiAxLjVyZW07XFxufVxcblxcbiN0YXNrLWRldGFpbHMsXFxuI2VkaXQtdGFzay1kZXRhaWxzIHtcXG4gICAgaGVpZ2h0OiA0cmVtO1xcbiAgICByZXNpemU6IG5vbmU7XFxuICAgIHBhZGRpbmctdG9wOiAzcHg7XFxufVxcblxcbiNmb3JtLWJ1dHRvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxNnB4O1xcbn1cXG5cXG4jY2F0ZWdvcnksXFxuI2VkaXQtY2F0ZWdvcnkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZ2FwOiAxNnB4O1xcbn1cXG5cXG4uY2F0ZWdvcnktc2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA0cHg7XFxufVxcblxcbi8qIEFuaW1hdGlvbnMgKi9cXG5Aa2V5ZnJhbWVzIGFwcGVuZC1hbmltYXRlIHtcXG5cXHRmcm9tIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHNjYWxlWSgwKTtcXG5cXHRcXHRvcGFjaXR5OiAwO1xcblxcdH1cXG5cXHR0byB7XFxuXFx0XFx0dHJhbnNmb3JtOiBzY2FsZVkoMSk7XFxuXFx0XFx0b3BhY2l0eTogMTtcXG5cXHR9XFxufVxcblxcbi5uZXctYm94IHtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDA7XFxuXFx0YW5pbWF0aW9uOiBhcHBlbmQtYW5pbWF0ZSAuM3MgbGluZWFyO1xcbn1cXG5cXG4vKiBCdXR0b25zICovXFxuYnV0dG9uIHtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxufVxcblxcbiNjYW5jZWwtZWRpdCxcXG4jZGVsZXRlLFxcbiNoaWRlLWZvcm0ge1xcbiAgICBwYWRkaW5nOiA0cHggOHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICBjb2xvcjogI2VmZjZmZjtcXG59XFxuXFxuI2NhbmNlbC1lZGl0OmhvdmVyLFxcbiNkZWxldGU6aG92ZXIsXFxuI2hpZGUtZm9ybTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmY2ZmY7XFxuICAgIGNvbG9yOiByZWQ7XFxufVxcblxcbiNlZGl0LFxcbiNzdWJtaXQtdGFzay1lZGl0LFxcbiNzdWJtaXQtdGFzayB7XFxuICAgIHBhZGRpbmc6IDRweCA4cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbiAgICBjb2xvcjogI2VmZjZmZjtcXG59XFxuXFxuI2VkaXQ6aG92ZXIsXFxuI3N1Ym1pdC10YXNrLWVkaXQ6aG92ZXIsXFxuI3N1Ym1pdC10YXNrOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZjZmZjtcXG4gICAgY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4vKiBSZXNwb25zaXZlbmVzcyAqL1xcbkBtZWRpYSAobWF4LXdpZHRoOjY1MHB4KSB7XFxuICAgIGJvZHkge1xcbiAgICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIHdpZHRoOiAxMDB2dztcXG4gICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIH1cXG5cXG4gICAgaGVhZGVyLFxcbiAgICAjbmF2LFxcbiAgICBtYWluIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuXFxuICAgIGhlYWRlciBoMSB7XFxuICAgICAgICBwYWRkaW5nOiAxMnB4IDBweDtcXG4gICAgfVxcblxcbiAgICAjbWFpbi1jb250YWluZXIge1xcbiAgICAgICAgd2lkdGg6IDgwJTtcXG4gICAgfVxcblxcbiAgICBtYWluIHtcXG4gICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgICAgICBmbGV4OiAxIDEgYXV0bztcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIH1cXG5cXG4gICAgI25hdiB1bCB7XFxuICAgICAgICBsaW5lLWhlaWdodDogMS4wcmVtO1xcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDI0cHg7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgI25hdiB7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgICNuYXYgaDIge1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgICN0YXNrLWxpc3QsIFxcbiAgICAudGFzay1pdGVtIHAge1xcbiAgICAgICAgZm9udC1zaXplOiAwLjdyZW07XFxuICAgIH1cXG5cXG4gICAgLmNoZWNrYm94IHtcXG4gICAgICAgIGhlaWdodDogMC44cmVtO1xcbiAgICAgICAgd2lkdGg6IDAuOHJlbTtcXG4gICAgfVxcblxcbiAgICAuZGlzcGxheURhdGUge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbi8vIFRhc2tzIGFycmF5IHRoYXQgd2lsbCBiZSB1c2VkIHRvIHBvcHVsYXRlIERPTVxubGV0IGJ1c2luZXNzVGFza3MgPSBbXTtcbmxldCBzY2hvb2xUYXNrcyA9IFtdO1xubGV0IHBlcnNvbmFsVGFza3MgPSBbXTtcblxuLy8gVGFzayBvYmplY3QgY3JlYXRpb25cbmNsYXNzIFRhc2sge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXRhaWxzLCBkYXRlLCBjYXRlZ29yeSwgY29tcGxldGVkKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXRhaWxzID0gZGV0YWlscztcbiAgICAgICAgdGhpcy5kYXRlID0gZGF0ZTtcbiAgICAgICAgdGhpcy5jYXRlZ29yeSA9IGNhdGVnb3J5O1xuICAgICAgICB0aGlzLmNvbXBsZXRlZCA9IGNvbXBsZXRlZDtcbiAgICB9XG59XG5cbi8vIFRvZ2dsZSBuYXYgYmFyIGRpc3BsYXksIHNob3cvaGlkZSB0YXNrIGZvcm1cbmNvbnN0IGJ1dHRvblRvZ2dsZXMgPSAoKCkgPT4ge1xuICAgIGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnUtYnRuXCIpO1xuICAgIGNvbnN0IG5hdkJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2XCIpO1xuXG4gICAgLy8gU2hvdyBhZGQgdGFzayBmb3JtIHdoZW4gYnV0dG9uIGlzIGNsaWNrZWRcbiAgICBjb25zdCBuZXdUYXNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtdGFza1wiKTtcbiAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtLWNvbnRhaW5lclwiKTtcbiAgICBuZXdUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgZm9ybUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICAgIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZChcIm5ldy1ib3hcIik7XG4gICAgICAgIG5ld1Rhc2tCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH0pXG5cbiAgICAvLyBIaWRlIHRhc2sgZm9ybSB3aGVuIGJ1dHRvbiBpcyBjbGlja2VkXG4gICAgY29uc3QgaGlkZUZvcm1CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhpZGUtZm9ybVwiKTtcbiAgICBoaWRlRm9ybUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybS1jb250YWluZXJcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBuZXdUYXNrQnRuLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xuICAgIH0pXG59KSgpO1xuXG5cblxuLy8gTmF2aWdhdGUgdG8gc2VsZWN0ZWQgZm9sZGVyIGZyb20gbmF2IGJhclxuY29uc3QgZm9sZGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZm9sZGVyXCIpO1xuY29uc3QgY3VycmVudEZvbGRlclRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjdXJyZW50LWRpcmVjdG9yeVwiKTtcblxuLy8gT3BlbiBidXNpbmVzcyBkaXJlY3RvcnkgYnkgZGVmYXVsdCBvbiB3aW5kb3cgb3BlblxubGV0IGN1cnJlbnREaXJlY3RvcnkgPSBcImJ1c2luZXNzRm9sZGVyXCI7XG53aW5kb3cub25sb2FkID0gKGRpc3BsYXlDdXJyZW50RGlyZWN0b3J5KGN1cnJlbnREaXJlY3RvcnkpKTtcblxuLy8gVG9nZ2xlIGRpcmVjdG9yeSB0aXRsZSBmcm9tIG5hdiBiYXJcbmZ1bmN0aW9uIGRpc3BsYXlDdXJyZW50RGlyZWN0b3J5KGRpcmVjdG9yeSkge1xuICAgIGlmIChkaXJlY3RvcnkgPT0gXCJidXNpbmVzc0ZvbGRlclwiKSB7XG4gICAgICAgIGN1cnJlbnRGb2xkZXJUaXRsZS50ZXh0Q29udGVudCA9IFwiQnVzaW5lc3NcIjtcbiAgICB9IGVsc2UgaWYgKGRpcmVjdG9yeSA9PSBcInNjaG9vbEZvbGRlclwiKSB7XG4gICAgICAgIGN1cnJlbnRGb2xkZXJUaXRsZS50ZXh0Q29udGVudCA9IFwiU2Nob29sXCI7XG4gICAgfSBlbHNlIGlmIChkaXJlY3RvcnkgPT0gXCJwZXJzb25hbEZvbGRlclwiKXtcbiAgICAgICAgY3VycmVudEZvbGRlclRpdGxlLnRleHRDb250ZW50ID0gXCJQZXJzb25hbFwiO1xuICAgIH1cbn1cblxuZm9sZGVycy5mb3JFYWNoKChmb2xkZXIpID0+IHtcbiAgICBmb2xkZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGN1cnJlbnREaXJlY3RvcnkgPSBmb2xkZXIuaWQ7XG4gICAgICAgIGRpc3BsYXlDdXJyZW50RGlyZWN0b3J5KGN1cnJlbnREaXJlY3RvcnkpO1xuICAgICAgICBpZiAoY3VycmVudERpcmVjdG9yeSA9PSBcImJ1c2luZXNzRm9sZGVyXCIpIHtcbiAgICAgICAgICAgIHJlbmRlclRhc2tzKGJ1c2luZXNzVGFza3MpO1xuICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnREaXJlY3RvcnkgPT0gXCJzY2hvb2xGb2xkZXJcIikge1xuICAgICAgICAgICAgcmVuZGVyVGFza3Moc2Nob29sVGFza3MpO1xuICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnREaXJlY3RvcnkgPT0gXCJwZXJzb25hbEZvbGRlclwiKSB7XG4gICAgICAgICAgICByZW5kZXJUYXNrcyhwZXJzb25hbFRhc2tzKTtcbiAgICAgICAgfVxuICAgIH0pXG59KVxuXG5cbi8vIEFkZCB0YXNrIHRvIGFycmF5IHdoZW4gZm9ybSBpcyBzdWJtaXR0ZWRcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm1cIik7XG5jb25zdCBzdWJtaXRUYXNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWJtaXQtdGFza1wiKTtcbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm0tY29udGFpbmVyXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC10YXNrXCIpLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stdGl0bGVcIikudmFsdWU7XG4gICAgY29uc3QgZGV0YWlscyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1kZXRhaWxzXCIpLnZhbHVlO1xuICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stZGF0ZVwiKS52YWx1ZTtcbiAgICBsZXQgY29tcGxldGVkID0gZmFsc2U7XG4gICAgbGV0IGNhdGVnb3J5O1xuXG4gICAgLy8gQ2hlY2sgd2hpY2ggY2F0ZWdvcnkgaXMgY2hlY2tlZCBvZmZcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidXNpbmVzc1wiKS5jaGVja2VkID09IHRydWUpIHtcbiAgICAgICAgY2F0ZWdvcnkgPSBcImJ1c2luZXNzXCI7XG4gICAgfSBlbHNlIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNjaG9vbFwiKS5jaGVja2VkID09IHRydWUpIHtcbiAgICAgICAgY2F0ZWdvcnkgPSBcInNjaG9vbFwiOyBcbiAgICB9IGVsc2Uge1xuICAgICAgICBjYXRlZ29yeSA9IFwicGVyc29uYWxcIjtcbiAgICB9XG5cbiAgICAvLyBBZGQgdGFzayB0byBhcnJheSBjb3JyZXNwb25kaW5nIHRvIHNlbGVjdGVkIGNhdGVnb3J5XG4gICAgbGV0IG5ld1Rhc2sgPSBuZXcgVGFzayh0aXRsZSwgZGV0YWlscywgZGF0ZSwgY2F0ZWdvcnksIGNvbXBsZXRlZCk7XG4gICAgaWYgKG5ld1Rhc2suY2F0ZWdvcnkgPT0gXCJidXNpbmVzc1wiKSB7XG4gICAgICAgIGJ1c2luZXNzVGFza3MucHVzaChuZXdUYXNrKTtcbiAgICB9IGVsc2UgaWYgKG5ld1Rhc2suY2F0ZWdvcnkgPT0gXCJzY2hvb2xcIikge1xuICAgICAgICBzY2hvb2xUYXNrcy5wdXNoKG5ld1Rhc2spO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHBlcnNvbmFsVGFza3MucHVzaChuZXdUYXNrKTtcbiAgICB9XG4gICAgc2F2ZURhdGEoKTtcblxuICAgIC8vIElmIGNyZWF0aW5nIGEgdGFzayB3aXRoaW4gdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBkaXJlY3RvcnksIGRpc3BsYXkgdGhlIHVwZGF0ZWQgbGlzdFxuICAgIGlmIChuZXdUYXNrLmNhdGVnb3J5ID09IFwiYnVzaW5lc3NcIiAmJiBjdXJyZW50RGlyZWN0b3J5ID09IFwiYnVzaW5lc3NGb2xkZXJcIikge1xuICAgICAgICByZW5kZXJUYXNrcyhidXNpbmVzc1Rhc2tzKTtcbiAgICB9IGVsc2UgaWYgKG5ld1Rhc2suY2F0ZWdvcnkgPT0gXCJzY2hvb2xcIiAmJiBjdXJyZW50RGlyZWN0b3J5ID09IFwic2Nob29sRm9sZGVyXCIpIHtcbiAgICAgICAgcmVuZGVyVGFza3Moc2Nob29sVGFza3MpO1xuICAgIH0gZWxzZSBpZiAobmV3VGFzay5jYXRlZ29yeSA9PSBcInBlcnNvbmFsXCIgJiYgY3VycmVudERpcmVjdG9yeSA9PSBcInBlcnNvbmFsRm9sZGVyXCIpIHtcbiAgICAgICAgcmVuZGVyVGFza3MocGVyc29uYWxUYXNrcyk7XG4gICAgfVxuXG4gICAgZm9ybS5yZXNldCgpO1xufSlcblxuXG4vLyBEaXNwbGF5IGN1cnJlbnQgdGFza3Mgb24gc2NyZWVuXG5mdW5jdGlvbiByZW5kZXJUYXNrcyhsaXN0KSB7XG4gICAgLy8gRmlyc3QgY2xlYXIgYWxsIHRhc2tzIHRvIGF2b2lkIGR1cGxpY2F0aW9uXG4gICAgY29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stbGlzdFwiKTtcbiAgICBjb25zdCBhbGxUYXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFzay1pdGVtXCIpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsVGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYWxsVGFza3NbaV0ucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgLy8gRm9yIGVhY2ggZW50cnkgaW4gbXlUYXNrcywgY3JlYXRlIGEgRE9NIGVsZW1lbnRcbiAgICBsaXN0LmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgY29uc3QgdGFza0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0YXNrSXRlbS5jbGFzc0xpc3QuYWRkKFwidGFzay1pdGVtXCIpO1xuICAgICAgICB0YXNrTGlzdC5hcHBlbmRDaGlsZCh0YXNrSXRlbSk7XG5cbiAgICAgICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjaGVja2JveC5jbGFzc0xpc3QuYWRkKFwiY2hlY2tib3hcIik7XG4gICAgICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY2hlY2tib3hcIik7XG4gICAgICAgIHRhc2tJdGVtLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcblxuICAgICAgICBjb25zdCBtYWluQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbWFpbkJveC5jbGFzc0xpc3QuYWRkKFwibWFpbkJveFwiKTtcbiAgICAgICAgdGFza0l0ZW0uYXBwZW5kQ2hpbGQobWFpbkJveCk7XG5cbiAgICAgICAgY29uc3QgZGlzcGxheVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xuICAgICAgICBkaXNwbGF5VGl0bGUuY2xhc3NMaXN0LmFkZChcImRpc3BsYXlUaXRsZVwiKTtcbiAgICAgICAgZGlzcGxheVRpdGxlLnRleHRDb250ZW50ID0gdGFzay50aXRsZTtcbiAgICAgICAgbWFpbkJveC5hcHBlbmRDaGlsZChkaXNwbGF5VGl0bGUpO1xuXG4gICAgICAgIGNvbnN0IGRpc3BsYXlEZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIGRpc3BsYXlEZXRhaWxzLmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5RGV0YWlsc1wiKTtcbiAgICAgICAgZGlzcGxheURldGFpbHMudGV4dENvbnRlbnQgPSB0YXNrLmRldGFpbHM7XG4gICAgICAgIG1haW5Cb3guYXBwZW5kQ2hpbGQoZGlzcGxheURldGFpbHMpO1xuXG4gICAgICAgIGNvbnN0IGRpc3BsYXlEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIGRpc3BsYXlEYXRlLmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5RGF0ZVwiKTtcbiAgICAgICAgZGlzcGxheURhdGUudGV4dENvbnRlbnQgPSB0YXNrLmRhdGU7XG4gICAgICAgIHRhc2tJdGVtLmFwcGVuZENoaWxkKGRpc3BsYXlEYXRlKTtcblxuICAgICAgICAvLyBFZGl0IGJ1dHRvblxuICAgICAgICBjb25zdCBlZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgZWRpdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImVkaXRcIik7XG4gICAgICAgIGVkaXRCdXR0b24udGV4dENvbnRlbnQgPSBcIkVkaXRcIjtcbiAgICAgICAgdGFza0l0ZW0uYXBwZW5kQ2hpbGQoZWRpdEJ1dHRvbik7XG5cbiAgICAgICAgLy8gTGluayB0aGUgaW5kZXggdG8gdGhlIGRlbGV0ZSBidXR0b24gYW5kIGluY3JlbWVudCBwZXIgdGFzayBlbGVtZW50LlxuICAgICAgICAvLyBQcmVzc2luZyBkZWxldGUgYnV0dG9uIHJlbW92ZXMgdGhlIHBhcmVudCBkb20gZWxlbWVudCBhdCB0aGUgaW5kZXggY29ycnJlc3BvbmRpbmcgdG8gbXlUYXNrcy5cbiAgICAgICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgZGVsZXRlQnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZGVsZXRlXCIpO1xuICAgICAgICBkZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSBcIkRlbGV0ZVwiO1xuICAgICAgICB0YXNrSXRlbS5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuXG4gICAgICAgIC8vIGlmIHRhc2sgaXMgYWxyZWFkeSBjb21wbGV0ZWQsIGhpZ2hsaWdodCB0aGUgY2hlY2tib3ggYW5kIGFkZCBhIHN0cmlrZXRocm91Z2ggdG8gdGhlIHRleHRcbiAgICAgICAgZnVuY3Rpb24gY2hlY2tDb21wbGV0ZWQoKSB7XG4gICAgICAgICAgICBpZiAodGFzay5jb21wbGV0ZWQgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGNoZWNrYm94LmNsYXNzTGlzdC5hZGQoXCJjb21wbGV0ZWRcIik7XG4gICAgICAgICAgICAgICAgZGlzcGxheVRpdGxlLmNsYXNzTGlzdC5hZGQoXCJzdHJpa2V0aHJvdWdoXCIpO1xuICAgICAgICAgICAgICAgIGRpc3BsYXlEZXRhaWxzLmNsYXNzTGlzdC5hZGQoXCJzdHJpa2V0aHJvdWdoXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNoZWNrQ29tcGxldGVkKCk7XG5cbiAgICAgICAgLy8gVG9nZ2xlIGNvbXBsZXRlZCB0YXNrc1xuICAgICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRhc2suY29tcGxldGVkID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgY2hlY2tib3guY2xhc3NMaXN0LmFkZChcImNvbXBsZXRlZFwiKTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5VGl0bGUuY2xhc3NMaXN0LmFkZChcInN0cmlrZXRocm91Z2hcIik7XG4gICAgICAgICAgICAgICAgZGlzcGxheURldGFpbHMuY2xhc3NMaXN0LmFkZChcInN0cmlrZXRocm91Z2hcIik7XG4gICAgICAgICAgICAgICAgdGFzay5jb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjaGVja2JveC5jbGFzc0xpc3QucmVtb3ZlKFwiY29tcGxldGVkXCIpO1xuICAgICAgICAgICAgICAgIGRpc3BsYXlUaXRsZS5jbGFzc0xpc3QucmVtb3ZlKFwic3RyaWtldGhyb3VnaFwiKTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5RGV0YWlscy5jbGFzc0xpc3QucmVtb3ZlKFwic3RyaWtldGhyb3VnaFwiKTtcbiAgICAgICAgICAgICAgICB0YXNrLmNvbXBsZXRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2F2ZURhdGEoKTtcbiAgICAgICAgfSk7XG4gICAgfSlcbn1cblxuLy8gTGlzdGVuIGZvciBjbGljayBvbiBhIGRlbGV0ZSB0YXNrIGJ1dHRvbiwgcnVuIGRlbGV0ZSB0YXNrIGZ1bmN0aW9uXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBpZiAoZS50YXJnZXQgJiYgZS50YXJnZXQuaWQgPT0gJ2RlbGV0ZScpIHtcbiAgICAgICAgZGVsZXRlVGFzayhlKTtcbiAgICB9XG4gfSk7XG5cbi8vIERlbGV0ZSB0YXNrIGZyb20gbGlzdFxuZnVuY3Rpb24gZGVsZXRlVGFzayhlKSB7XG4gICAgbGV0IHRhc2tEaXYgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50O1xuICAgIGxldCB0aXRsZURpdiA9IHRhc2tEaXYucXVlcnlTZWxlY3RvcihcIi5kaXNwbGF5VGl0bGVcIikudGV4dENvbnRlbnQ7XG4gICAgaWYgKGN1cnJlbnREaXJlY3RvcnkgPT0gXCJidXNpbmVzc0ZvbGRlclwiKSB7XG4gICAgICAgIGxldCByZW1haW5pbmdBcnJheSA9IGJ1c2luZXNzVGFza3MuZmlsdGVyKHRhc2sgPT4gdGFzay50aXRsZSAhPSB0aXRsZURpdik7XG4gICAgICAgIGJ1c2luZXNzVGFza3MgPSByZW1haW5pbmdBcnJheTtcbiAgICAgICAgcmVuZGVyVGFza3MoYnVzaW5lc3NUYXNrcyk7XG4gICAgfSBlbHNlIGlmIChjdXJyZW50RGlyZWN0b3J5ID09IFwic2Nob29sRm9sZGVyXCIpIHtcbiAgICAgICAgbGV0IHJlbWFpbmluZ0FycmF5ID0gc2Nob29sVGFza3MuZmlsdGVyKHRhc2sgPT4gdGFzay50aXRsZSAhPSB0aXRsZURpdik7XG4gICAgICAgIHNjaG9vbFRhc2tzID0gcmVtYWluaW5nQXJyYXk7XG4gICAgICAgIHJlbmRlclRhc2tzKHNjaG9vbFRhc2tzKTtcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnREaXJlY3RvcnkgPT0gXCJwZXJzb25hbEZvbGRlclwiKSB7XG4gICAgICAgIGxldCByZW1haW5pbmdBcnJheSA9IHBlcnNvbmFsVGFza3MuZmlsdGVyKHRhc2sgPT4gdGFzay50aXRsZSAhPSB0aXRsZURpdik7XG4gICAgICAgIHBlcnNvbmFsVGFza3MgPSByZW1haW5pbmdBcnJheTtcbiAgICAgICAgcmVuZGVyVGFza3MocGVyc29uYWxUYXNrcyk7XG4gICAgfVxuICAgIHNhdmVEYXRhKCk7XG59XG5cbi8vIE9uY2xpY2sgb24gYW4gZWRpdCBidXR0b24sIGV4ZWN1dGUgZWRpdFRhc2sgZnVuY3Rpb25cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGlmIChlLnRhcmdldCAmJiBlLnRhcmdldC5pZCA9PSAnZWRpdCcpIHtcbiAgICAgICAgZWRpdFRhc2soZSk7XG4gICAgfVxuIH0pO1xuXG5mdW5jdGlvbiBlZGl0VGFzayhlKSB7XG4gICAgLy8gT3BlbiBlZGl0IGZvcm0gYW5kIGhpZ2hsaWdodCBzZWxlY3RlZCB0YXNrIHRvIGVkaXRcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXQtY29udGFpbmVyXCIpLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXQtY29udGFpbmVyXCIpLmNsYXNzTGlzdC5hZGQoXCJuZXctYm94XCIpO1xuICAgIGNvbnN0IHRhc2tEaXYgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50O1xuICAgIHRhc2tEaXYuc3R5bGUuYm9yZGVyID0gXCIycHggc29saWQgbGlnaHRncmVlblwiXG4gICAgY29uc3QgdGl0bGVEaXYgPSB0YXNrRGl2LnF1ZXJ5U2VsZWN0b3IoXCIuZGlzcGxheVRpdGxlXCIpO1xuICAgIGNvbnN0IGRldGFpbHNEaXYgPSB0YXNrRGl2LnF1ZXJ5U2VsZWN0b3IoXCIuZGlzcGxheURldGFpbHNcIik7XG4gICAgY29uc3QgZGF0ZURpdiA9IHRhc2tEaXYucXVlcnlTZWxlY3RvcihcIi5kaXNwbGF5RGF0ZVwiKTtcblxuICAgIGNvbnN0IGVkaXRGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0LWZvcm1cIik7XG4gICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0LXRhc2stdGl0bGVcIik7XG4gICAgY29uc3QgdGFza0RldGFpbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXQtdGFzay1kZXRhaWxzXCIpO1xuICAgIGNvbnN0IHRhc2tEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0LXRhc2stZGF0ZVwiKTtcbiAgICBjb25zdCBpc0NvbXBsZXRlZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hlY2tib3hcIik7XG5cbiAgICBsZXQgY29tcGxldGVkO1xuICAgIGxldCBjYXRlZ29yeTtcbiAgICBcbiAgICBpZiAoaXNDb21wbGV0ZWQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY29tcGxldGVkXCIpKSB7XG4gICAgICAgIGNvbXBsZXRlZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29tcGxldGVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gU2V0IGZvcm0gdmFsdWVzIHRvIGN1cnJlbnQgdGFzayB2YWx1ZXNcbiAgICB0YXNrVGl0bGUudmFsdWUgPSB0aXRsZURpdi50ZXh0Q29udGVudDtcbiAgICB0YXNrRGV0YWlscy50ZXh0Q29udGVudCA9IGRldGFpbHNEaXYudGV4dENvbnRlbnQ7XG4gICAgdGFza0RhdGUudmFsdWUgPSBkYXRlRGl2LnRleHRDb250ZW50O1xuXG4gICAgZWRpdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGxldCBhcnJheVRvRWRpdDtcbiAgICAgICAgaWYgKGN1cnJlbnREaXJlY3RvcnkgPT0gXCJidXNpbmVzc0ZvbGRlclwiKSB7XG4gICAgICAgICAgICBhcnJheVRvRWRpdCA9IGJ1c2luZXNzVGFza3M7XG4gICAgICAgICAgICBjYXRlZ29yeSA9IFwiYnVzaW5lc3NcIjtcbiAgICAgICAgfSBlbHNlIGlmIChjdXJyZW50RGlyZWN0b3J5ID09IFwic2Nob29sRm9sZGVyXCIpIHtcbiAgICAgICAgICAgIGFycmF5VG9FZGl0ID0gc2Nob29sVGFza3M7XG4gICAgICAgICAgICBjYXRlZ29yeSA9IFwic2Nob29sXCI7XG4gICAgICAgIH0gZWxzZSBpZiAoY3VycmVudERpcmVjdG9yeSA9PSBcInBlcnNvbmFsRm9sZGVyXCIpIHtcbiAgICAgICAgICAgIGFycmF5VG9FZGl0ID0gcGVyc29uYWxUYXNrcztcbiAgICAgICAgICAgIGNhdGVnb3J5ID0gXCJwZXJzb25hbFwiO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGluZGV4ID0gYXJyYXlUb0VkaXQuZmluZEluZGV4KHRhc2sgPT4gdGFzay50aXRsZSA9PSB0aXRsZURpdi50ZXh0Q29udGVudCk7XG4gICAgICAgIGlmIChpbmRleCA8IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIERlbGV0ZSB0YXNrIGZyb20gYXJyYXkgYW5kIHJlcGxhY2Ugd2l0aCBuZXcgc3VibWl0dGVkIGVkaXRcbiAgICAgICAgYXJyYXlUb0VkaXQuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgbGV0IG5ld1Rhc2sgPSBuZXcgVGFzayh0YXNrVGl0bGUudmFsdWUsIHRhc2tEZXRhaWxzLnZhbHVlLCB0YXNrRGF0ZS52YWx1ZSwgY2F0ZWdvcnksIGNvbXBsZXRlZCk7XG4gICAgICAgIGFycmF5VG9FZGl0LnNwbGljZShpbmRleCwgMCwgbmV3VGFzayk7XG4gICAgICAgIC8vIGRpc3BsYXkgbmV3IHRhc2sgbGlzdCwgcmVzZXQgZm9ybSBhbmQgaGlkZVxuICAgICAgICByZW5kZXJUYXNrcyhhcnJheVRvRWRpdCk7XG4gICAgICAgIGVkaXRGb3JtLnJlc2V0KCk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdC1jb250YWluZXJcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB0YXNrRGl2LnN0eWxlLmJvcmRlciA9IFwiMnB4IHNvbGlkICNiZmRiZmVcIjtcbiAgICAgICAgc2F2ZURhdGEoKTtcbiAgICB9KVxuXG4gICAgLy8gaWYgZWRpdCBjYW5jZWxsZWQsIHJlc2V0IGZvcm0gYW5kIGhpZGVcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgaWYgKGUudGFyZ2V0ICYmIGUudGFyZ2V0LmlkID09IFwiY2FuY2VsLWVkaXRcIikge1xuICAgICAgICAgICAgZWRpdEZvcm0ucmVzZXQoKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdC1jb250YWluZXJcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgdGFza0Rpdi5zdHlsZS5ib3JkZXIgPSBcIjJweCBzb2xpZCAjYmZkYmZlXCI7XG4gICAgICAgIH1cbiAgICB9KVxufVxuXG5cbi8vIFNhdmUgZGF0YSB0byBsb2NhbCBzdG9yYWdlXG5mdW5jdGlvbiBzYXZlRGF0YSgpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgYnVzaW5lc3NUYXNrc2AsIEpTT04uc3RyaW5naWZ5KGJ1c2luZXNzVGFza3MpKVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGBzY2hvb2xUYXNrc2AsIEpTT04uc3RyaW5naWZ5KHNjaG9vbFRhc2tzKSlcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgcGVyc29uYWxUYXNrc2AsIEpTT04uc3RyaW5naWZ5KHBlcnNvbmFsVGFza3MpKVxufVxuXG5mdW5jdGlvbiByZXN0b3JlKCkge1xuICAgIGlmICghbG9jYWxTdG9yYWdlLmJ1c2luZXNzVGFza3MgfHwgIWxvY2FsU3RvcmFnZS5zY2hvb2xUYXNrcyB8fCAhbG9jYWxTdG9yYWdlLnBlcnNvbmFsVGFza3MpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBidXNpbmVzcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYnVzaW5lc3NUYXNrc1wiKTtcbiAgICAgICAgbGV0IHNjaG9vbCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2Nob29sVGFza3NcIik7XG4gICAgICAgIGxldCBwZXJzb25hbCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicGVyc29uYWxUYXNrc1wiKTtcbiAgICBcbiAgICAgICAgYnVzaW5lc3MgPSBKU09OLnBhcnNlKGJ1c2luZXNzKTtcbiAgICAgICAgc2Nob29sID0gSlNPTi5wYXJzZShzY2hvb2wpO1xuICAgICAgICBwZXJzb25hbCA9IEpTT04ucGFyc2UocGVyc29uYWwpO1xuICAgIFxuICAgICAgICBidXNpbmVzc1Rhc2tzID0gYnVzaW5lc3M7XG4gICAgICAgIHNjaG9vbFRhc2tzID0gc2Nob29sO1xuICAgICAgICBwZXJzb25hbFRhc2tzID0gcGVyc29uYWw7XG4gICAgICAgIHJlbmRlclRhc2tzKGJ1c2luZXNzVGFza3MpO1xuICAgIH1cbn1cblxucmVzdG9yZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9