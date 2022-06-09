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
___CSS_LOADER_EXPORT___.push([module.id, "*, *::before, *::after {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    min-height: 100vh;\n    width: 100vw;\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n    grid-template-rows: auto 4fr;\n    font-family: sans-serif;\n}\n\n\n/* Header */\nheader {\n    background-color: #1d4ed8;\n    color: #eff6ff;\n    grid-column: 1 / 3;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n}\n\nheader h1 {\n    padding: 24px 0px;\n}\n\nheader img {\n    width: 2rem;\n    height: auto;\n    position: absolute;\n    top: 30%;\n    left: 24px;\n    cursor: pointer;\n}\n\nheader img:hover {\n    border: none;\n}\n\n/* Nav Bar */\n#nav {\n    color: black;\n    background-color: #bfdbfe;\n    display: flex;\n    flex-direction: column;\n    gap: 24px;\n}\n\n#nav h2 {\n    padding-top: 24px;\n    padding-left: 24px;\n}\n\n#nav ul {\n    padding-left: 36px;\n    list-style-type: none;\n    line-height: 1.5rem;\n}\n\n\n#nav ul li:hover {\n    cursor: pointer;\n    text-decoration: underline;\n}\n\n/* Main container  */\nmain {\n    color: black;\n    background-color: #eff6ff;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: auto;\n}\n    \n#main-container {\n    display: flex;\n    flex-direction: column;\n    width: 80%;\n    align-items: center;\n    justify-content: center;\n    padding-top: 24px;\n    gap: 16px;\n}\n\n#current-directory {\n    font-weight: bold;\n    background-color: #1d4ed8;\n    color: #eff6ff;\n    border-radius: 5px;\n    padding: 16px;\n    width: 100%;\n    font-size: 1.5rem;\n}\n\n#task-list {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 4px;\n}\n\n.task-item {\n    width: 100%;\n    border: 2px solid #bfdbfe;\n    border-radius: 5px;\n    padding: 8px;\n    display: flex;\n    align-items: center;\n    position: relative;\n    gap: 16px;\n}\n\n.checkbox {\n    width: 1.5rem;\n    height: 1.5rem;\n    border-radius: 50%;\n    border: 1px solid black;\n    background-color: transparent;\n}\n\n.completed {\n    background-color: lightgreen;\n    border: 1px solid lightgreen;\n}\n\n.strikethrough {\n    text-decoration: line-through;\n}\n\nbutton:hover,\n.checkbox:hover {\n    cursor: pointer;\n}\n\n\n.task-item p {\n    font-size: 1rem;\n    color: grey;\n}\n\n/* Forms */\n#form-container,\n#edit-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    background-color: #bfdbfe;\n    border-radius: 5px;\n}\n\n#form-container form,\n#edit-container form {\n    padding-top: 24px;\n    padding-bottom: 12px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 8px;\n    width: 95%;\n}\n\n#form-title {\n    align-self: flex-start;\n    padding-bottom: 8px;\n}\n\n#form-container input[type=\"text\"],\n#form-container input[type=\"date\"],\n#task-details,\n#edit-container input[type=\"text\"],\n#edit-container input[type=\"date\"],\n#edit-task-details{\n    width: 100%;\n    font-family: inherit;\n    border: none;\n    border-radius: 5px;\n    background-color: #eff6ff;\n    padding: 0px 8px;\n}\n\n#task-title, \n#task-date,\n#edit-task-title,\n#edit-task-date {\n    height: 1.5rem;\n}\n\n#task-details,\n#edit-task-details {\n    height: 4rem;\n    resize: none;\n    padding-top: 3px;\n}\n\n#form-buttons {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 16px;\n}\n\n#category,\n#edit-category {\n    display: flex;\n    width: 100%;\n    gap: 16px;\n}\n\n.category-section {\n    display: flex;\n    width: fit-content;\n    align-items: center;\n    gap: 4px;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AAEA;IACI,iBAAiB;IACjB,YAAY;IACZ,aAAa;IACb,8BAA8B;IAC9B,4BAA4B;IAC5B,uBAAuB;AAC3B;;;AAGA,WAAW;AACX;IACI,yBAAyB;IACzB,cAAc;IACd,kBAAkB;IAClB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,QAAQ;IACR,UAAU;IACV,eAAe;AACnB;;AAEA;IACI,YAAY;AAChB;;AAEA,YAAY;AACZ;IACI,YAAY;IACZ,yBAAyB;IACzB,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,qBAAqB;IACrB,mBAAmB;AACvB;;;AAGA;IACI,eAAe;IACf,0BAA0B;AAC9B;;AAEA,oBAAoB;AACpB;IACI,YAAY;IACZ,yBAAyB;IACzB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,WAAW;AACf;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,UAAU;IACV,mBAAmB;IACnB,uBAAuB;IACvB,iBAAiB;IACjB,SAAS;AACb;;AAEA;IACI,iBAAiB;IACjB,yBAAyB;IACzB,cAAc;IACd,kBAAkB;IAClB,aAAa;IACb,WAAW;IACX,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,QAAQ;AACZ;;AAEA;IACI,WAAW;IACX,yBAAyB;IACzB,kBAAkB;IAClB,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,kBAAkB;IAClB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,cAAc;IACd,kBAAkB;IAClB,uBAAuB;IACvB,6BAA6B;AACjC;;AAEA;IACI,4BAA4B;IAC5B,4BAA4B;AAChC;;AAEA;IACI,6BAA6B;AACjC;;AAEA;;IAEI,eAAe;AACnB;;;AAGA;IACI,eAAe;IACf,WAAW;AACf;;AAEA,UAAU;AACV;;IAEI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,WAAW;IACX,yBAAyB;IACzB,kBAAkB;AACtB;;AAEA;;IAEI,iBAAiB;IACjB,oBAAoB;IACpB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,QAAQ;IACR,UAAU;AACd;;AAEA;IACI,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;;;;;;IAMI,WAAW;IACX,oBAAoB;IACpB,YAAY;IACZ,kBAAkB;IAClB,yBAAyB;IACzB,gBAAgB;AACpB;;AAEA;;;;IAII,cAAc;AAClB;;AAEA;;IAEI,YAAY;IACZ,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,SAAS;AACb;;AAEA;;IAEI,aAAa;IACb,WAAW;IACX,SAAS;AACb;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,mBAAmB;IACnB,QAAQ;AACZ","sourcesContent":["*, *::before, *::after {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    min-height: 100vh;\n    width: 100vw;\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n    grid-template-rows: auto 4fr;\n    font-family: sans-serif;\n}\n\n\n/* Header */\nheader {\n    background-color: #1d4ed8;\n    color: #eff6ff;\n    grid-column: 1 / 3;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n}\n\nheader h1 {\n    padding: 24px 0px;\n}\n\nheader img {\n    width: 2rem;\n    height: auto;\n    position: absolute;\n    top: 30%;\n    left: 24px;\n    cursor: pointer;\n}\n\nheader img:hover {\n    border: none;\n}\n\n/* Nav Bar */\n#nav {\n    color: black;\n    background-color: #bfdbfe;\n    display: flex;\n    flex-direction: column;\n    gap: 24px;\n}\n\n#nav h2 {\n    padding-top: 24px;\n    padding-left: 24px;\n}\n\n#nav ul {\n    padding-left: 36px;\n    list-style-type: none;\n    line-height: 1.5rem;\n}\n\n\n#nav ul li:hover {\n    cursor: pointer;\n    text-decoration: underline;\n}\n\n/* Main container  */\nmain {\n    color: black;\n    background-color: #eff6ff;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: auto;\n}\n    \n#main-container {\n    display: flex;\n    flex-direction: column;\n    width: 80%;\n    align-items: center;\n    justify-content: center;\n    padding-top: 24px;\n    gap: 16px;\n}\n\n#current-directory {\n    font-weight: bold;\n    background-color: #1d4ed8;\n    color: #eff6ff;\n    border-radius: 5px;\n    padding: 16px;\n    width: 100%;\n    font-size: 1.5rem;\n}\n\n#task-list {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 4px;\n}\n\n.task-item {\n    width: 100%;\n    border: 2px solid #bfdbfe;\n    border-radius: 5px;\n    padding: 8px;\n    display: flex;\n    align-items: center;\n    position: relative;\n    gap: 16px;\n}\n\n.checkbox {\n    width: 1.5rem;\n    height: 1.5rem;\n    border-radius: 50%;\n    border: 1px solid black;\n    background-color: transparent;\n}\n\n.completed {\n    background-color: lightgreen;\n    border: 1px solid lightgreen;\n}\n\n.strikethrough {\n    text-decoration: line-through;\n}\n\nbutton:hover,\n.checkbox:hover {\n    cursor: pointer;\n}\n\n\n.task-item p {\n    font-size: 1rem;\n    color: grey;\n}\n\n/* Forms */\n#form-container,\n#edit-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    background-color: #bfdbfe;\n    border-radius: 5px;\n}\n\n#form-container form,\n#edit-container form {\n    padding-top: 24px;\n    padding-bottom: 12px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 8px;\n    width: 95%;\n}\n\n#form-title {\n    align-self: flex-start;\n    padding-bottom: 8px;\n}\n\n#form-container input[type=\"text\"],\n#form-container input[type=\"date\"],\n#task-details,\n#edit-container input[type=\"text\"],\n#edit-container input[type=\"date\"],\n#edit-task-details{\n    width: 100%;\n    font-family: inherit;\n    border: none;\n    border-radius: 5px;\n    background-color: #eff6ff;\n    padding: 0px 8px;\n}\n\n#task-title, \n#task-date,\n#edit-task-title,\n#edit-task-date {\n    height: 1.5rem;\n}\n\n#task-details,\n#edit-task-details {\n    height: 4rem;\n    resize: none;\n    padding-top: 3px;\n}\n\n#form-buttons {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 16px;\n}\n\n#category,\n#edit-category {\n    display: flex;\n    width: 100%;\n    gap: 16px;\n}\n\n.category-section {\n    display: flex;\n    width: fit-content;\n    align-items: center;\n    gap: 4px;\n}\n"],"sourceRoot":""}]);
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

// Task creation
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

    // Hide/show nav bar when hamburger button is clicked
    let navDisplay = true;
    menuBtn.addEventListener("click", function() {
        if (navDisplay == true) {
            navBar.style.display = "none";
            document.querySelector("main").style.width = "100vw";
            navDisplay = false;
        } else {
            navBar.style.display = "flex";
            document.querySelector("main").style.width = "auto";
            navDisplay = true;
        }
    })

    // Show add task form when button is clicked
    const newTaskBtn = document.getElementById("add-task");
    let formDisplay = false;
    newTaskBtn.addEventListener("click", function() {
        if (formDisplay == false) {
            document.getElementById("form-container").style.display = "flex";
            formDisplay = true;
        } else {
            return;
        }
    })

    // Hide task form when button is clicked
    const cancelFormBtn = document.getElementById("hide-form");
    cancelFormBtn.addEventListener("click", function() {
        if (formDisplay == true) {
            document.getElementById("form-container").style.display = "none";
            formDisplay = false;
        }
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
submitTaskBtn.addEventListener('click', (e) => {
    e.preventDefault();
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

        const displayTitle = document.createElement("h4");
        displayTitle.classList.add("displayTitle");
        displayTitle.textContent = task.title;
        taskItem.appendChild(displayTitle);

        const displayDetails = document.createElement("p");
        displayDetails.classList.add("displayDetails");
        displayDetails.textContent = task.details;
        taskItem.appendChild(displayDetails);

        const displayDate = document.createElement("p");
        displayDate.classList.add("displayDate");
        displayDate.textContent = task.date;
        taskItem.appendChild(displayDate);

        // Edit button and functionality - more on this later
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

        function checkCompleted() {
            if (task.completed == true) {
                checkbox.classList.add("completed");
                displayTitle.classList.add("strikethrough");
                displayDetails.classList.add("strikethrough");
            }
        }
        checkCompleted();

        // Highlight checkbox and strikethrough task items when clicked
        checkbox.addEventListener("click", () => {
            console.log('click');
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
}

// EDIT TASK - first select task based on current directory, splice out of array,
//  open edit task form, submit new values, render task list on submit


// EVENT DELEGATION - SEEMS VERY USEFUL
// document.addEventListener('click',function(e) {
//     if (e.target && e.target.id == 'checkbox') {

//     }
//  });

// ADD CATEGORY CHECKBOX TO OBJECT, SORT TASKS ACCORDING TO CATEGORY
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUs7QUFDTCxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHFCQUFxQjtBQUN6QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTCxvRSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiosICo6OmJlZm9yZSwgKjo6YWZ0ZXIge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byA0ZnI7XFxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbn1cXG5cXG5cXG4vKiBIZWFkZXIgKi9cXG5oZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWQ0ZWQ4O1xcbiAgICBjb2xvcjogI2VmZjZmZjtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5oZWFkZXIgaDEge1xcbiAgICBwYWRkaW5nOiAyNHB4IDBweDtcXG59XFxuXFxuaGVhZGVyIGltZyB7XFxuICAgIHdpZHRoOiAycmVtO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAzMCU7XFxuICAgIGxlZnQ6IDI0cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuaGVhZGVyIGltZzpob3ZlciB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLyogTmF2IEJhciAqL1xcbiNuYXYge1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiZmRiZmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMjRweDtcXG59XFxuXFxuI25hdiBoMiB7XFxuICAgIHBhZGRpbmctdG9wOiAyNHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDI0cHg7XFxufVxcblxcbiNuYXYgdWwge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDM2cHg7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcXG59XFxuXFxuXFxuI25hdiB1bCBsaTpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbi8qIE1haW4gY29udGFpbmVyICAqL1xcbm1haW4ge1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmY2ZmY7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiBhdXRvO1xcbn1cXG4gICAgXFxuI21haW4tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBhZGRpbmctdG9wOiAyNHB4O1xcbiAgICBnYXA6IDE2cHg7XFxufVxcblxcbiNjdXJyZW50LWRpcmVjdG9yeSB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWQ0ZWQ4O1xcbiAgICBjb2xvcjogI2VmZjZmZjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiAxNnB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbiN0YXNrLWxpc3Qge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogNHB4O1xcbn1cXG5cXG4udGFzay1pdGVtIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNiZmRiZmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGdhcDogMTZweDtcXG59XFxuXFxuLmNoZWNrYm94IHtcXG4gICAgd2lkdGg6IDEuNXJlbTtcXG4gICAgaGVpZ2h0OiAxLjVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uY29tcGxldGVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmVlbjtcXG59XFxuXFxuLnN0cmlrZXRocm91Z2gge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuYnV0dG9uOmhvdmVyLFxcbi5jaGVja2JveDpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuXFxuLnRhc2staXRlbSBwIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBjb2xvcjogZ3JleTtcXG59XFxuXFxuLyogRm9ybXMgKi9cXG4jZm9ybS1jb250YWluZXIsXFxuI2VkaXQtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmZkYmZlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbiNmb3JtLWNvbnRhaW5lciBmb3JtLFxcbiNlZGl0LWNvbnRhaW5lciBmb3JtIHtcXG4gICAgcGFkZGluZy10b3A6IDI0cHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxMnB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiA4cHg7XFxuICAgIHdpZHRoOiA5NSU7XFxufVxcblxcbiNmb3JtLXRpdGxlIHtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gICAgcGFkZGluZy1ib3R0b206IDhweDtcXG59XFxuXFxuI2Zvcm0tY29udGFpbmVyIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXSxcXG4jZm9ybS1jb250YWluZXIgaW5wdXRbdHlwZT1cXFwiZGF0ZVxcXCJdLFxcbiN0YXNrLWRldGFpbHMsXFxuI2VkaXQtY29udGFpbmVyIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXSxcXG4jZWRpdC1jb250YWluZXIgaW5wdXRbdHlwZT1cXFwiZGF0ZVxcXCJdLFxcbiNlZGl0LXRhc2stZGV0YWlsc3tcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZjZmZjtcXG4gICAgcGFkZGluZzogMHB4IDhweDtcXG59XFxuXFxuI3Rhc2stdGl0bGUsIFxcbiN0YXNrLWRhdGUsXFxuI2VkaXQtdGFzay10aXRsZSxcXG4jZWRpdC10YXNrLWRhdGUge1xcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXG59XFxuXFxuI3Rhc2stZGV0YWlscyxcXG4jZWRpdC10YXNrLWRldGFpbHMge1xcbiAgICBoZWlnaHQ6IDRyZW07XFxuICAgIHJlc2l6ZTogbm9uZTtcXG4gICAgcGFkZGluZy10b3A6IDNweDtcXG59XFxuXFxuI2Zvcm0tYnV0dG9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDE2cHg7XFxufVxcblxcbiNjYXRlZ29yeSxcXG4jZWRpdC1jYXRlZ29yeSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBnYXA6IDE2cHg7XFxufVxcblxcbi5jYXRlZ29yeS1zZWN0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDRweDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLDRCQUE0QjtJQUM1Qix1QkFBdUI7QUFDM0I7OztBQUdBLFdBQVc7QUFDWDtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixVQUFVO0lBQ1YsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUEsWUFBWTtBQUNaO0lBQ0ksWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLG1CQUFtQjtBQUN2Qjs7O0FBR0E7SUFDSSxlQUFlO0lBQ2YsMEJBQTBCO0FBQzlCOztBQUVBLG9CQUFvQjtBQUNwQjtJQUNJLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsU0FBUztBQUNiOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1Qiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSw2QkFBNkI7QUFDakM7O0FBRUE7O0lBRUksZUFBZTtBQUNuQjs7O0FBR0E7SUFDSSxlQUFlO0lBQ2YsV0FBVztBQUNmOztBQUVBLFVBQVU7QUFDVjs7SUFFSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsUUFBUTtJQUNSLFVBQVU7QUFDZDs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7O0FBRUE7Ozs7OztJQU1JLFdBQVc7SUFDWCxvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsZ0JBQWdCO0FBQ3BCOztBQUVBOzs7O0lBSUksY0FBYztBQUNsQjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFNBQVM7QUFDYjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2IsV0FBVztJQUNYLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLFFBQVE7QUFDWlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqLCAqOjpiZWZvcmUsICo6OmFmdGVyIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gNGZyO1xcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG59XFxuXFxuXFxuLyogSGVhZGVyICovXFxuaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFkNGVkODtcXG4gICAgY29sb3I6ICNlZmY2ZmY7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuaGVhZGVyIGgxIHtcXG4gICAgcGFkZGluZzogMjRweCAwcHg7XFxufVxcblxcbmhlYWRlciBpbWcge1xcbiAgICB3aWR0aDogMnJlbTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMzAlO1xcbiAgICBsZWZ0OiAyNHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmhlYWRlciBpbWc6aG92ZXIge1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi8qIE5hdiBCYXIgKi9cXG4jbmF2IHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmZkYmZlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDI0cHg7XFxufVxcblxcbiNuYXYgaDIge1xcbiAgICBwYWRkaW5nLXRvcDogMjRweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAyNHB4O1xcbn1cXG5cXG4jbmF2IHVsIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAzNnB4O1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XFxufVxcblxcblxcbiNuYXYgdWwgbGk6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4vKiBNYWluIGNvbnRhaW5lciAgKi9cXG5tYWluIHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZmNmZmO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogYXV0bztcXG59XFxuICAgIFxcbiNtYWluLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nLXRvcDogMjRweDtcXG4gICAgZ2FwOiAxNnB4O1xcbn1cXG5cXG4jY3VycmVudC1kaXJlY3Rvcnkge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFkNGVkODtcXG4gICAgY29sb3I6ICNlZmY2ZmY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogMTZweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4jdGFzay1saXN0IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDRweDtcXG59XFxuXFxuLnRhc2staXRlbSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjYmZkYmZlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBnYXA6IDE2cHg7XFxufVxcblxcbi5jaGVja2JveCB7XFxuICAgIHdpZHRoOiAxLjVyZW07XFxuICAgIGhlaWdodDogMS41cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLmNvbXBsZXRlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JlZW47XFxufVxcblxcbi5zdHJpa2V0aHJvdWdoIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbmJ1dHRvbjpob3ZlcixcXG4uY2hlY2tib3g6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcblxcbi50YXNrLWl0ZW0gcCB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgY29sb3I6IGdyZXk7XFxufVxcblxcbi8qIEZvcm1zICovXFxuI2Zvcm0tY29udGFpbmVyLFxcbiNlZGl0LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JmZGJmZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4jZm9ybS1jb250YWluZXIgZm9ybSxcXG4jZWRpdC1jb250YWluZXIgZm9ybSB7XFxuICAgIHBhZGRpbmctdG9wOiAyNHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTJweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogOHB4O1xcbiAgICB3aWR0aDogOTUlO1xcbn1cXG5cXG4jZm9ybS10aXRsZSB7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XFxufVxcblxcbiNmb3JtLWNvbnRhaW5lciBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0sXFxuI2Zvcm0tY29udGFpbmVyIGlucHV0W3R5cGU9XFxcImRhdGVcXFwiXSxcXG4jdGFzay1kZXRhaWxzLFxcbiNlZGl0LWNvbnRhaW5lciBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0sXFxuI2VkaXQtY29udGFpbmVyIGlucHV0W3R5cGU9XFxcImRhdGVcXFwiXSxcXG4jZWRpdC10YXNrLWRldGFpbHN7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmY2ZmY7XFxuICAgIHBhZGRpbmc6IDBweCA4cHg7XFxufVxcblxcbiN0YXNrLXRpdGxlLCBcXG4jdGFzay1kYXRlLFxcbiNlZGl0LXRhc2stdGl0bGUsXFxuI2VkaXQtdGFzay1kYXRlIHtcXG4gICAgaGVpZ2h0OiAxLjVyZW07XFxufVxcblxcbiN0YXNrLWRldGFpbHMsXFxuI2VkaXQtdGFzay1kZXRhaWxzIHtcXG4gICAgaGVpZ2h0OiA0cmVtO1xcbiAgICByZXNpemU6IG5vbmU7XFxuICAgIHBhZGRpbmctdG9wOiAzcHg7XFxufVxcblxcbiNmb3JtLWJ1dHRvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxNnB4O1xcbn1cXG5cXG4jY2F0ZWdvcnksXFxuI2VkaXQtY2F0ZWdvcnkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZ2FwOiAxNnB4O1xcbn1cXG5cXG4uY2F0ZWdvcnktc2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA0cHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuLy8gVGFza3MgYXJyYXkgdGhhdCB3aWxsIGJlIHVzZWQgdG8gcG9wdWxhdGUgRE9NXG5sZXQgYnVzaW5lc3NUYXNrcyA9IFtdO1xubGV0IHNjaG9vbFRhc2tzID0gW107XG5sZXQgcGVyc29uYWxUYXNrcyA9IFtdO1xuXG4vLyBUYXNrIGNyZWF0aW9uXG5jbGFzcyBUYXNrIHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGV0YWlscywgZGF0ZSwgY2F0ZWdvcnksIGNvbXBsZXRlZCkge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGV0YWlscyA9IGRldGFpbHM7XG4gICAgICAgIHRoaXMuZGF0ZSA9IGRhdGU7XG4gICAgICAgIHRoaXMuY2F0ZWdvcnkgPSBjYXRlZ29yeTtcbiAgICAgICAgdGhpcy5jb21wbGV0ZWQgPSBjb21wbGV0ZWQ7XG4gICAgfVxufVxuXG4vLyBUb2dnbGUgbmF2IGJhciBkaXNwbGF5LCBzaG93L2hpZGUgdGFzayBmb3JtXG5jb25zdCBidXR0b25Ub2dnbGVzID0gKCgpID0+IHtcbiAgICBjb25zdCBtZW51QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51LWJ0blwiKTtcbiAgICBjb25zdCBuYXZCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdlwiKTtcblxuICAgIC8vIEhpZGUvc2hvdyBuYXYgYmFyIHdoZW4gaGFtYnVyZ2VyIGJ1dHRvbiBpcyBjbGlja2VkXG4gICAgbGV0IG5hdkRpc3BsYXkgPSB0cnVlO1xuICAgIG1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAobmF2RGlzcGxheSA9PSB0cnVlKSB7XG4gICAgICAgICAgICBuYXZCYXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIikuc3R5bGUud2lkdGggPSBcIjEwMHZ3XCI7XG4gICAgICAgICAgICBuYXZEaXNwbGF5ID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuYXZCYXIuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIikuc3R5bGUud2lkdGggPSBcImF1dG9cIjtcbiAgICAgICAgICAgIG5hdkRpc3BsYXkgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfSlcblxuICAgIC8vIFNob3cgYWRkIHRhc2sgZm9ybSB3aGVuIGJ1dHRvbiBpcyBjbGlja2VkXG4gICAgY29uc3QgbmV3VGFza0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXRhc2tcIik7XG4gICAgbGV0IGZvcm1EaXNwbGF5ID0gZmFsc2U7XG4gICAgbmV3VGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmIChmb3JtRGlzcGxheSA9PSBmYWxzZSkge1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtLWNvbnRhaW5lclwiKS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICAgICAgICBmb3JtRGlzcGxheSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gSGlkZSB0YXNrIGZvcm0gd2hlbiBidXR0b24gaXMgY2xpY2tlZFxuICAgIGNvbnN0IGNhbmNlbEZvcm1CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhpZGUtZm9ybVwiKTtcbiAgICBjYW5jZWxGb3JtQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKGZvcm1EaXNwbGF5ID09IHRydWUpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybS1jb250YWluZXJcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgZm9ybURpc3BsYXkgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0pXG59KSgpO1xuXG4vLyBOYXZpZ2F0ZSB0byBzZWxlY3RlZCBmb2xkZXIgZnJvbSBuYXYgYmFyXG5jb25zdCBmb2xkZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mb2xkZXJcIik7XG5jb25zdCBjdXJyZW50Rm9sZGVyVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImN1cnJlbnQtZGlyZWN0b3J5XCIpO1xuXG4vLyBPcGVuIGJ1c2luZXNzIGRpcmVjdG9yeSBieSBkZWZhdWx0IG9uIHdpbmRvdyBvcGVuXG5sZXQgY3VycmVudERpcmVjdG9yeSA9IFwiYnVzaW5lc3NGb2xkZXJcIjtcbndpbmRvdy5vbmxvYWQgPSAoZGlzcGxheUN1cnJlbnREaXJlY3RvcnkoY3VycmVudERpcmVjdG9yeSkpO1xuXG4vLyBUb2dnbGUgZGlyZWN0b3J5IHRpdGxlIGZyb20gbmF2IGJhclxuZnVuY3Rpb24gZGlzcGxheUN1cnJlbnREaXJlY3RvcnkoZGlyZWN0b3J5KSB7XG4gICAgaWYgKGRpcmVjdG9yeSA9PSBcImJ1c2luZXNzRm9sZGVyXCIpIHtcbiAgICAgICAgY3VycmVudEZvbGRlclRpdGxlLnRleHRDb250ZW50ID0gXCJCdXNpbmVzc1wiO1xuICAgIH0gZWxzZSBpZiAoZGlyZWN0b3J5ID09IFwic2Nob29sRm9sZGVyXCIpIHtcbiAgICAgICAgY3VycmVudEZvbGRlclRpdGxlLnRleHRDb250ZW50ID0gXCJTY2hvb2xcIjtcbiAgICB9IGVsc2UgaWYgKGRpcmVjdG9yeSA9PSBcInBlcnNvbmFsRm9sZGVyXCIpe1xuICAgICAgICBjdXJyZW50Rm9sZGVyVGl0bGUudGV4dENvbnRlbnQgPSBcIlBlcnNvbmFsXCI7XG4gICAgfVxufVxuXG5mb2xkZXJzLmZvckVhY2goKGZvbGRlcikgPT4ge1xuICAgIGZvbGRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY3VycmVudERpcmVjdG9yeSA9IGZvbGRlci5pZDtcbiAgICAgICAgZGlzcGxheUN1cnJlbnREaXJlY3RvcnkoY3VycmVudERpcmVjdG9yeSk7XG4gICAgICAgIGlmIChjdXJyZW50RGlyZWN0b3J5ID09IFwiYnVzaW5lc3NGb2xkZXJcIikge1xuICAgICAgICAgICAgcmVuZGVyVGFza3MoYnVzaW5lc3NUYXNrcyk7XG4gICAgICAgIH0gZWxzZSBpZiAoY3VycmVudERpcmVjdG9yeSA9PSBcInNjaG9vbEZvbGRlclwiKSB7XG4gICAgICAgICAgICByZW5kZXJUYXNrcyhzY2hvb2xUYXNrcyk7XG4gICAgICAgIH0gZWxzZSBpZiAoY3VycmVudERpcmVjdG9yeSA9PSBcInBlcnNvbmFsRm9sZGVyXCIpIHtcbiAgICAgICAgICAgIHJlbmRlclRhc2tzKHBlcnNvbmFsVGFza3MpO1xuICAgICAgICB9XG4gICAgfSlcbn0pXG5cblxuLy8gQWRkIHRhc2sgdG8gYXJyYXkgd2hlbiBmb3JtIGlzIHN1Ym1pdHRlZFxuY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybVwiKTtcbmNvbnN0IHN1Ym1pdFRhc2tCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Ym1pdC10YXNrXCIpO1xuc3VibWl0VGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLXRpdGxlXCIpLnZhbHVlO1xuICAgIGNvbnN0IGRldGFpbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stZGV0YWlsc1wiKS52YWx1ZTtcbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLWRhdGVcIikudmFsdWU7XG4gICAgbGV0IGNvbXBsZXRlZCA9IGZhbHNlO1xuICAgIGxldCBjYXRlZ29yeTtcblxuICAgIC8vIENoZWNrIHdoaWNoIGNhdGVnb3J5IGlzIGNoZWNrZWQgb2ZmXG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnVzaW5lc3NcIikuY2hlY2tlZCA9PSB0cnVlKSB7XG4gICAgICAgIGNhdGVnb3J5ID0gXCJidXNpbmVzc1wiO1xuICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzY2hvb2xcIikuY2hlY2tlZCA9PSB0cnVlKSB7XG4gICAgICAgIGNhdGVnb3J5ID0gXCJzY2hvb2xcIjsgXG4gICAgfSBlbHNlIHtcbiAgICAgICAgY2F0ZWdvcnkgPSBcInBlcnNvbmFsXCI7XG4gICAgfVxuXG4gICAgLy8gQWRkIHRhc2sgdG8gYXJyYXkgY29ycmVzcG9uZGluZyB0byBzZWxlY3RlZCBjYXRlZ29yeVxuICAgIGxldCBuZXdUYXNrID0gbmV3IFRhc2sodGl0bGUsIGRldGFpbHMsIGRhdGUsIGNhdGVnb3J5LCBjb21wbGV0ZWQpO1xuICAgIGlmIChuZXdUYXNrLmNhdGVnb3J5ID09IFwiYnVzaW5lc3NcIikge1xuICAgICAgICBidXNpbmVzc1Rhc2tzLnB1c2gobmV3VGFzayk7XG4gICAgfSBlbHNlIGlmIChuZXdUYXNrLmNhdGVnb3J5ID09IFwic2Nob29sXCIpIHtcbiAgICAgICAgc2Nob29sVGFza3MucHVzaChuZXdUYXNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBwZXJzb25hbFRhc2tzLnB1c2gobmV3VGFzayk7XG4gICAgfVxuXG4gICAgLy8gSWYgY3JlYXRpbmcgYSB0YXNrIHdpdGhpbiB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGRpcmVjdG9yeSwgZGlzcGxheSB0aGUgdXBkYXRlZCBsaXN0XG4gICAgaWYgKG5ld1Rhc2suY2F0ZWdvcnkgPT0gXCJidXNpbmVzc1wiICYmIGN1cnJlbnREaXJlY3RvcnkgPT0gXCJidXNpbmVzc0ZvbGRlclwiKSB7XG4gICAgICAgIHJlbmRlclRhc2tzKGJ1c2luZXNzVGFza3MpO1xuICAgIH0gZWxzZSBpZiAobmV3VGFzay5jYXRlZ29yeSA9PSBcInNjaG9vbFwiICYmIGN1cnJlbnREaXJlY3RvcnkgPT0gXCJzY2hvb2xGb2xkZXJcIikge1xuICAgICAgICByZW5kZXJUYXNrcyhzY2hvb2xUYXNrcyk7XG4gICAgfSBlbHNlIGlmIChuZXdUYXNrLmNhdGVnb3J5ID09IFwicGVyc29uYWxcIiAmJiBjdXJyZW50RGlyZWN0b3J5ID09IFwicGVyc29uYWxGb2xkZXJcIikge1xuICAgICAgICByZW5kZXJUYXNrcyhwZXJzb25hbFRhc2tzKTtcbiAgICB9XG5cbiAgICBmb3JtLnJlc2V0KCk7XG59KVxuXG5cbi8vIERpc3BsYXkgY3VycmVudCB0YXNrcyBvbiBzY3JlZW5cbmZ1bmN0aW9uIHJlbmRlclRhc2tzKGxpc3QpIHtcbiAgICAvLyBGaXJzdCBjbGVhciBhbGwgdGFza3MgdG8gYXZvaWQgZHVwbGljYXRpb25cbiAgICBjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1saXN0XCIpO1xuICAgIGNvbnN0IGFsbFRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YXNrLWl0ZW1cIik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxUYXNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBhbGxUYXNrc1tpXS5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICAvLyBGb3IgZWFjaCBlbnRyeSBpbiBteVRhc2tzLCBjcmVhdGUgYSBET00gZWxlbWVudFxuICAgIGxpc3QuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICBjb25zdCB0YXNrSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRhc2tJdGVtLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWl0ZW1cIik7XG4gICAgICAgIHRhc2tMaXN0LmFwcGVuZENoaWxkKHRhc2tJdGVtKTtcblxuICAgICAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNoZWNrYm94LmNsYXNzTGlzdC5hZGQoXCJjaGVja2JveFwiKTtcbiAgICAgICAgY2hlY2tib3guc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjaGVja2JveFwiKTtcbiAgICAgICAgdGFza0l0ZW0uYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuXG4gICAgICAgIGNvbnN0IGRpc3BsYXlUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcbiAgICAgICAgZGlzcGxheVRpdGxlLmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5VGl0bGVcIik7XG4gICAgICAgIGRpc3BsYXlUaXRsZS50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XG4gICAgICAgIHRhc2tJdGVtLmFwcGVuZENoaWxkKGRpc3BsYXlUaXRsZSk7XG5cbiAgICAgICAgY29uc3QgZGlzcGxheURldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgZGlzcGxheURldGFpbHMuY2xhc3NMaXN0LmFkZChcImRpc3BsYXlEZXRhaWxzXCIpO1xuICAgICAgICBkaXNwbGF5RGV0YWlscy50ZXh0Q29udGVudCA9IHRhc2suZGV0YWlscztcbiAgICAgICAgdGFza0l0ZW0uYXBwZW5kQ2hpbGQoZGlzcGxheURldGFpbHMpO1xuXG4gICAgICAgIGNvbnN0IGRpc3BsYXlEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIGRpc3BsYXlEYXRlLmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5RGF0ZVwiKTtcbiAgICAgICAgZGlzcGxheURhdGUudGV4dENvbnRlbnQgPSB0YXNrLmRhdGU7XG4gICAgICAgIHRhc2tJdGVtLmFwcGVuZENoaWxkKGRpc3BsYXlEYXRlKTtcblxuICAgICAgICAvLyBFZGl0IGJ1dHRvbiBhbmQgZnVuY3Rpb25hbGl0eSAtIG1vcmUgb24gdGhpcyBsYXRlclxuICAgICAgICBjb25zdCBlZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgZWRpdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImVkaXRcIik7XG4gICAgICAgIGVkaXRCdXR0b24udGV4dENvbnRlbnQgPSBcIkVkaXRcIjtcbiAgICAgICAgdGFza0l0ZW0uYXBwZW5kQ2hpbGQoZWRpdEJ1dHRvbik7XG5cbiAgICAgICAgLy8gTGluayB0aGUgaW5kZXggdG8gdGhlIGRlbGV0ZSBidXR0b24gYW5kIGluY3JlbWVudCBwZXIgdGFzayBlbGVtZW50LlxuICAgICAgICAvLyBQcmVzc2luZyBkZWxldGUgYnV0dG9uIHJlbW92ZXMgdGhlIHBhcmVudCBkb20gZWxlbWVudCBhdCB0aGUgaW5kZXggY29ycnJlc3BvbmRpbmcgdG8gbXlUYXNrcy5cbiAgICAgICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgZGVsZXRlQnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZGVsZXRlXCIpO1xuICAgICAgICBkZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSBcIkRlbGV0ZVwiO1xuICAgICAgICB0YXNrSXRlbS5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuXG4gICAgICAgIGZ1bmN0aW9uIGNoZWNrQ29tcGxldGVkKCkge1xuICAgICAgICAgICAgaWYgKHRhc2suY29tcGxldGVkID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBjaGVja2JveC5jbGFzc0xpc3QuYWRkKFwiY29tcGxldGVkXCIpO1xuICAgICAgICAgICAgICAgIGRpc3BsYXlUaXRsZS5jbGFzc0xpc3QuYWRkKFwic3RyaWtldGhyb3VnaFwiKTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5RGV0YWlscy5jbGFzc0xpc3QuYWRkKFwic3RyaWtldGhyb3VnaFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjaGVja0NvbXBsZXRlZCgpO1xuXG4gICAgICAgIC8vIEhpZ2hsaWdodCBjaGVja2JveCBhbmQgc3RyaWtldGhyb3VnaCB0YXNrIGl0ZW1zIHdoZW4gY2xpY2tlZFxuICAgICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2NsaWNrJyk7XG4gICAgICAgICAgICBpZiAodGFzay5jb21wbGV0ZWQgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBjaGVja2JveC5jbGFzc0xpc3QuYWRkKFwiY29tcGxldGVkXCIpO1xuICAgICAgICAgICAgICAgIGRpc3BsYXlUaXRsZS5jbGFzc0xpc3QuYWRkKFwic3RyaWtldGhyb3VnaFwiKTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5RGV0YWlscy5jbGFzc0xpc3QuYWRkKFwic3RyaWtldGhyb3VnaFwiKTtcbiAgICAgICAgICAgICAgICB0YXNrLmNvbXBsZXRlZCA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNoZWNrYm94LmNsYXNzTGlzdC5yZW1vdmUoXCJjb21wbGV0ZWRcIik7XG4gICAgICAgICAgICAgICAgZGlzcGxheVRpdGxlLmNsYXNzTGlzdC5yZW1vdmUoXCJzdHJpa2V0aHJvdWdoXCIpO1xuICAgICAgICAgICAgICAgIGRpc3BsYXlEZXRhaWxzLmNsYXNzTGlzdC5yZW1vdmUoXCJzdHJpa2V0aHJvdWdoXCIpO1xuICAgICAgICAgICAgICAgIHRhc2suY29tcGxldGVkID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pXG59XG5cbi8vIExpc3RlbiBmb3IgY2xpY2sgb24gYSBkZWxldGUgdGFzayBidXR0b24sIHJ1biBkZWxldGUgdGFzayBmdW5jdGlvblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgaWYgKGUudGFyZ2V0ICYmIGUudGFyZ2V0LmlkID09ICdkZWxldGUnKSB7XG4gICAgICAgIGRlbGV0ZVRhc2soZSk7XG4gICAgfVxuIH0pO1xuXG4vLyBEZWxldGUgdGFzayBmcm9tIGxpc3RcbmZ1bmN0aW9uIGRlbGV0ZVRhc2soZSkge1xuICAgIGxldCB0YXNrRGl2ID0gZS50YXJnZXQucGFyZW50RWxlbWVudDtcbiAgICBsZXQgdGl0bGVEaXYgPSB0YXNrRGl2LnF1ZXJ5U2VsZWN0b3IoXCIuZGlzcGxheVRpdGxlXCIpLnRleHRDb250ZW50O1xuICAgIGlmIChjdXJyZW50RGlyZWN0b3J5ID09IFwiYnVzaW5lc3NGb2xkZXJcIikge1xuICAgICAgICBsZXQgcmVtYWluaW5nQXJyYXkgPSBidXNpbmVzc1Rhc2tzLmZpbHRlcih0YXNrID0+IHRhc2sudGl0bGUgIT0gdGl0bGVEaXYpO1xuICAgICAgICBidXNpbmVzc1Rhc2tzID0gcmVtYWluaW5nQXJyYXk7XG4gICAgICAgIHJlbmRlclRhc2tzKGJ1c2luZXNzVGFza3MpO1xuICAgIH0gZWxzZSBpZiAoY3VycmVudERpcmVjdG9yeSA9PSBcInNjaG9vbEZvbGRlclwiKSB7XG4gICAgICAgIGxldCByZW1haW5pbmdBcnJheSA9IHNjaG9vbFRhc2tzLmZpbHRlcih0YXNrID0+IHRhc2sudGl0bGUgIT0gdGl0bGVEaXYpO1xuICAgICAgICBzY2hvb2xUYXNrcyA9IHJlbWFpbmluZ0FycmF5O1xuICAgICAgICByZW5kZXJUYXNrcyhzY2hvb2xUYXNrcyk7XG4gICAgfSBlbHNlIGlmIChjdXJyZW50RGlyZWN0b3J5ID09IFwicGVyc29uYWxGb2xkZXJcIikge1xuICAgICAgICBsZXQgcmVtYWluaW5nQXJyYXkgPSBwZXJzb25hbFRhc2tzLmZpbHRlcih0YXNrID0+IHRhc2sudGl0bGUgIT0gdGl0bGVEaXYpO1xuICAgICAgICBwZXJzb25hbFRhc2tzID0gcmVtYWluaW5nQXJyYXk7XG4gICAgICAgIHJlbmRlclRhc2tzKHBlcnNvbmFsVGFza3MpO1xuICAgIH1cbn1cblxuLy8gRURJVCBUQVNLIC0gZmlyc3Qgc2VsZWN0IHRhc2sgYmFzZWQgb24gY3VycmVudCBkaXJlY3RvcnksIHNwbGljZSBvdXQgb2YgYXJyYXksXG4vLyAgb3BlbiBlZGl0IHRhc2sgZm9ybSwgc3VibWl0IG5ldyB2YWx1ZXMsIHJlbmRlciB0YXNrIGxpc3Qgb24gc3VibWl0XG5cblxuLy8gRVZFTlQgREVMRUdBVElPTiAtIFNFRU1TIFZFUlkgVVNFRlVMXG4vLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oZSkge1xuLy8gICAgIGlmIChlLnRhcmdldCAmJiBlLnRhcmdldC5pZCA9PSAnY2hlY2tib3gnKSB7XG5cbi8vICAgICB9XG4vLyAgfSk7XG5cbi8vIEFERCBDQVRFR09SWSBDSEVDS0JPWCBUTyBPQkpFQ1QsIFNPUlQgVEFTS1MgQUNDT1JESU5HIFRPIENBVEVHT1JZIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9