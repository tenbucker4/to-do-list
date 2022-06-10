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
___CSS_LOADER_EXPORT___.push([module.id, "*, *::before, *::after {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    min-height: 100vh;\n    width: 100vw;\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n    grid-template-rows: auto 4fr;\n    font-family: sans-serif;\n}\n\n\n/* Header */\nheader {\n    background-color: #1d4ed8;\n    color: #eff6ff;\n    grid-column: 1 / 3;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n}\n\nheader h1 {\n    padding: 24px 0px;\n}\n\nheader img {\n    width: 2rem;\n    height: auto;\n    position: absolute;\n    top: 30%;\n    left: 24px;\n    cursor: pointer;\n}\n\nheader img:hover {\n    border: none;\n}\n\n/* Nav Bar */\n#nav {\n    color: black;\n    background-color: #bfdbfe;\n    display: flex;\n    flex-direction: column;\n    gap: 24px;\n}\n\n#nav h2 {\n    padding-top: 24px;\n    padding-left: 24px;\n}\n\n#nav ul {\n    padding-left: 36px;\n    list-style-type: none;\n    line-height: 1.5rem;\n}\n\n\n#nav ul li:hover {\n    cursor: pointer;\n    text-decoration: underline;\n}\n\n/* Main container  */\nmain {\n    color: black;\n    background-color: #eff6ff;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: auto;\n}\n    \n#main-container {\n    display: flex;\n    flex-direction: column;\n    width: 80%;\n    align-items: center;\n    justify-content: center;\n    padding-top: 24px;\n    gap: 16px;\n}\n\n#current-directory {\n    font-weight: bold;\n    background-color: #1d4ed8;\n    color: #eff6ff;\n    border-radius: 5px;\n    padding: 16px;\n    width: 100%;\n    font-size: 1.5rem;\n}\n\n#task-list {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 4px;\n}\n\n.task-item {\n    width: 100%;\n    border: 2px solid #bfdbfe;\n    border-radius: 5px;\n    padding: 8px;\n    display: flex;\n    align-items: center;\n    position: relative;\n    gap: 16px;\n}\n\n.checkbox {\n    width: 1.5rem;\n    height: 1.5rem;\n    border-radius: 50%;\n    border: 1px solid black;\n    background-color: transparent;\n}\n\n.completed {\n    background-color: lightgreen;\n    border: 1px solid lightgreen;\n}\n\n.strikethrough {\n    text-decoration: line-through;\n}\n\nbutton:hover,\n.checkbox:hover {\n    cursor: pointer;\n}\n\n\n.task-item p {\n    font-size: 1rem;\n    color: grey;\n}\n\n/* Forms */\n#form-container,\n#edit-container {\n    display: none;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    background-color: #bfdbfe;\n    border-radius: 5px;\n}\n\n#form-container form,\n#edit-container form {\n    padding-top: 24px;\n    padding-bottom: 12px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 8px;\n    width: 95%;\n}\n\n#form-title {\n    align-self: flex-start;\n    padding-bottom: 8px;\n}\n\n#form-container input[type=\"text\"],\n#form-container input[type=\"date\"],\n#task-details,\n#edit-container input[type=\"text\"],\n#edit-container input[type=\"date\"],\n#edit-task-details{\n    width: 100%;\n    font-family: inherit;\n    border: none;\n    border-radius: 5px;\n    background-color: #eff6ff;\n    padding: 0px 8px;\n}\n\n#task-title, \n#task-date,\n#edit-task-title,\n#edit-task-date {\n    height: 1.5rem;\n}\n\n#task-details,\n#edit-task-details {\n    height: 4rem;\n    resize: none;\n    padding-top: 3px;\n}\n\n#form-buttons {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 16px;\n}\n\n#category,\n#edit-category {\n    display: flex;\n    width: 100%;\n    gap: 16px;\n}\n\n.category-section {\n    display: flex;\n    width: fit-content;\n    align-items: center;\n    gap: 4px;\n}\n\n@keyframes append-animate {\n\tfrom {\n\t\ttransform: scaleY(0);\n\t\topacity: 0;\n\t}\n\tto {\n\t\ttransform: scaleY(1);\n\t\topacity: 1;\n\t}\n}\n\n.new-box {\n    transform-origin: 50% 0;\n\tanimation: append-animate .3s linear;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AAEA;IACI,iBAAiB;IACjB,YAAY;IACZ,aAAa;IACb,8BAA8B;IAC9B,4BAA4B;IAC5B,uBAAuB;AAC3B;;;AAGA,WAAW;AACX;IACI,yBAAyB;IACzB,cAAc;IACd,kBAAkB;IAClB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,QAAQ;IACR,UAAU;IACV,eAAe;AACnB;;AAEA;IACI,YAAY;AAChB;;AAEA,YAAY;AACZ;IACI,YAAY;IACZ,yBAAyB;IACzB,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,qBAAqB;IACrB,mBAAmB;AACvB;;;AAGA;IACI,eAAe;IACf,0BAA0B;AAC9B;;AAEA,oBAAoB;AACpB;IACI,YAAY;IACZ,yBAAyB;IACzB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,WAAW;AACf;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,UAAU;IACV,mBAAmB;IACnB,uBAAuB;IACvB,iBAAiB;IACjB,SAAS;AACb;;AAEA;IACI,iBAAiB;IACjB,yBAAyB;IACzB,cAAc;IACd,kBAAkB;IAClB,aAAa;IACb,WAAW;IACX,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,QAAQ;AACZ;;AAEA;IACI,WAAW;IACX,yBAAyB;IACzB,kBAAkB;IAClB,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,kBAAkB;IAClB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,cAAc;IACd,kBAAkB;IAClB,uBAAuB;IACvB,6BAA6B;AACjC;;AAEA;IACI,4BAA4B;IAC5B,4BAA4B;AAChC;;AAEA;IACI,6BAA6B;AACjC;;AAEA;;IAEI,eAAe;AACnB;;;AAGA;IACI,eAAe;IACf,WAAW;AACf;;AAEA,UAAU;AACV;;IAEI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,WAAW;IACX,yBAAyB;IACzB,kBAAkB;AACtB;;AAEA;;IAEI,iBAAiB;IACjB,oBAAoB;IACpB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,QAAQ;IACR,UAAU;AACd;;AAEA;IACI,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;;;;;;IAMI,WAAW;IACX,oBAAoB;IACpB,YAAY;IACZ,kBAAkB;IAClB,yBAAyB;IACzB,gBAAgB;AACpB;;AAEA;;;;IAII,cAAc;AAClB;;AAEA;;IAEI,YAAY;IACZ,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,SAAS;AACb;;AAEA;;IAEI,aAAa;IACb,WAAW;IACX,SAAS;AACb;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,mBAAmB;IACnB,QAAQ;AACZ;;AAEA;CACC;EACC,oBAAoB;EACpB,UAAU;CACX;CACA;EACC,oBAAoB;EACpB,UAAU;CACX;AACD;;AAEA;IACI,uBAAuB;CAC1B,oCAAoC;AACrC","sourcesContent":["*, *::before, *::after {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    min-height: 100vh;\n    width: 100vw;\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n    grid-template-rows: auto 4fr;\n    font-family: sans-serif;\n}\n\n\n/* Header */\nheader {\n    background-color: #1d4ed8;\n    color: #eff6ff;\n    grid-column: 1 / 3;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n}\n\nheader h1 {\n    padding: 24px 0px;\n}\n\nheader img {\n    width: 2rem;\n    height: auto;\n    position: absolute;\n    top: 30%;\n    left: 24px;\n    cursor: pointer;\n}\n\nheader img:hover {\n    border: none;\n}\n\n/* Nav Bar */\n#nav {\n    color: black;\n    background-color: #bfdbfe;\n    display: flex;\n    flex-direction: column;\n    gap: 24px;\n}\n\n#nav h2 {\n    padding-top: 24px;\n    padding-left: 24px;\n}\n\n#nav ul {\n    padding-left: 36px;\n    list-style-type: none;\n    line-height: 1.5rem;\n}\n\n\n#nav ul li:hover {\n    cursor: pointer;\n    text-decoration: underline;\n}\n\n/* Main container  */\nmain {\n    color: black;\n    background-color: #eff6ff;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: auto;\n}\n    \n#main-container {\n    display: flex;\n    flex-direction: column;\n    width: 80%;\n    align-items: center;\n    justify-content: center;\n    padding-top: 24px;\n    gap: 16px;\n}\n\n#current-directory {\n    font-weight: bold;\n    background-color: #1d4ed8;\n    color: #eff6ff;\n    border-radius: 5px;\n    padding: 16px;\n    width: 100%;\n    font-size: 1.5rem;\n}\n\n#task-list {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 4px;\n}\n\n.task-item {\n    width: 100%;\n    border: 2px solid #bfdbfe;\n    border-radius: 5px;\n    padding: 8px;\n    display: flex;\n    align-items: center;\n    position: relative;\n    gap: 16px;\n}\n\n.checkbox {\n    width: 1.5rem;\n    height: 1.5rem;\n    border-radius: 50%;\n    border: 1px solid black;\n    background-color: transparent;\n}\n\n.completed {\n    background-color: lightgreen;\n    border: 1px solid lightgreen;\n}\n\n.strikethrough {\n    text-decoration: line-through;\n}\n\nbutton:hover,\n.checkbox:hover {\n    cursor: pointer;\n}\n\n\n.task-item p {\n    font-size: 1rem;\n    color: grey;\n}\n\n/* Forms */\n#form-container,\n#edit-container {\n    display: none;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    background-color: #bfdbfe;\n    border-radius: 5px;\n}\n\n#form-container form,\n#edit-container form {\n    padding-top: 24px;\n    padding-bottom: 12px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 8px;\n    width: 95%;\n}\n\n#form-title {\n    align-self: flex-start;\n    padding-bottom: 8px;\n}\n\n#form-container input[type=\"text\"],\n#form-container input[type=\"date\"],\n#task-details,\n#edit-container input[type=\"text\"],\n#edit-container input[type=\"date\"],\n#edit-task-details{\n    width: 100%;\n    font-family: inherit;\n    border: none;\n    border-radius: 5px;\n    background-color: #eff6ff;\n    padding: 0px 8px;\n}\n\n#task-title, \n#task-date,\n#edit-task-title,\n#edit-task-date {\n    height: 1.5rem;\n}\n\n#task-details,\n#edit-task-details {\n    height: 4rem;\n    resize: none;\n    padding-top: 3px;\n}\n\n#form-buttons {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 16px;\n}\n\n#category,\n#edit-category {\n    display: flex;\n    width: 100%;\n    gap: 16px;\n}\n\n.category-section {\n    display: flex;\n    width: fit-content;\n    align-items: center;\n    gap: 4px;\n}\n\n@keyframes append-animate {\n\tfrom {\n\t\ttransform: scaleY(0);\n\t\topacity: 0;\n\t}\n\tto {\n\t\ttransform: scaleY(1);\n\t\topacity: 1;\n\t}\n}\n\n.new-box {\n    transform-origin: 50% 0;\n\tanimation: append-animate .3s linear;\n}\n"],"sourceRoot":""}]);
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
submitTaskBtn.addEventListener('click', (e) => {
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

// Onclick on an edit button, execute editTask function
document.addEventListener('click', function(e) {
    if (e.target && e.target.id == 'edit') {
        editTask(e);
    }
 });

function editTask(e) {
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

    taskTitle.value = titleDiv.textContent;
    taskDetails.textContent = detailsDiv.textContent;
    taskDate.textContent = dateDiv.textContent;

    document.addEventListener('click', function(e) {
        if (e.target && e.target.id == "submit-task-edit") {
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

            arrayToEdit.splice(index, 1);
            renderTasks(arrayToEdit);
            let newTask = new Task(taskTitle.value, taskDetails.value, taskDate.value, category, completed);
            arrayToEdit.splice(index, 0, newTask);
            renderTasks(arrayToEdit);
            editForm.reset();
            document.getElementById("edit-container").style.display = "none";
            taskDiv.style.border = "2px solid #bfdbfe";
        }
    })

    document.addEventListener('click', function(e) {
        if (e.target && e.target.id == "cancel-edit") {
            editForm.reset();
            document.getElementById("edit-container").style.display = "none";
            taskDiv.style.border = "2px solid #bfdbfe";
        }
    })
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQzs7OztBQUlEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHFCQUFxQjtBQUN6QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqLCAqOjpiZWZvcmUsICo6OmFmdGVyIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gNGZyO1xcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG59XFxuXFxuXFxuLyogSGVhZGVyICovXFxuaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFkNGVkODtcXG4gICAgY29sb3I6ICNlZmY2ZmY7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuaGVhZGVyIGgxIHtcXG4gICAgcGFkZGluZzogMjRweCAwcHg7XFxufVxcblxcbmhlYWRlciBpbWcge1xcbiAgICB3aWR0aDogMnJlbTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMzAlO1xcbiAgICBsZWZ0OiAyNHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmhlYWRlciBpbWc6aG92ZXIge1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi8qIE5hdiBCYXIgKi9cXG4jbmF2IHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmZkYmZlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDI0cHg7XFxufVxcblxcbiNuYXYgaDIge1xcbiAgICBwYWRkaW5nLXRvcDogMjRweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAyNHB4O1xcbn1cXG5cXG4jbmF2IHVsIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAzNnB4O1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XFxufVxcblxcblxcbiNuYXYgdWwgbGk6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4vKiBNYWluIGNvbnRhaW5lciAgKi9cXG5tYWluIHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZmNmZmO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogYXV0bztcXG59XFxuICAgIFxcbiNtYWluLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nLXRvcDogMjRweDtcXG4gICAgZ2FwOiAxNnB4O1xcbn1cXG5cXG4jY3VycmVudC1kaXJlY3Rvcnkge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFkNGVkODtcXG4gICAgY29sb3I6ICNlZmY2ZmY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogMTZweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4jdGFzay1saXN0IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDRweDtcXG59XFxuXFxuLnRhc2staXRlbSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjYmZkYmZlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBnYXA6IDE2cHg7XFxufVxcblxcbi5jaGVja2JveCB7XFxuICAgIHdpZHRoOiAxLjVyZW07XFxuICAgIGhlaWdodDogMS41cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLmNvbXBsZXRlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JlZW47XFxufVxcblxcbi5zdHJpa2V0aHJvdWdoIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbmJ1dHRvbjpob3ZlcixcXG4uY2hlY2tib3g6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcblxcbi50YXNrLWl0ZW0gcCB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgY29sb3I6IGdyZXk7XFxufVxcblxcbi8qIEZvcm1zICovXFxuI2Zvcm0tY29udGFpbmVyLFxcbiNlZGl0LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JmZGJmZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4jZm9ybS1jb250YWluZXIgZm9ybSxcXG4jZWRpdC1jb250YWluZXIgZm9ybSB7XFxuICAgIHBhZGRpbmctdG9wOiAyNHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTJweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogOHB4O1xcbiAgICB3aWR0aDogOTUlO1xcbn1cXG5cXG4jZm9ybS10aXRsZSB7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XFxufVxcblxcbiNmb3JtLWNvbnRhaW5lciBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0sXFxuI2Zvcm0tY29udGFpbmVyIGlucHV0W3R5cGU9XFxcImRhdGVcXFwiXSxcXG4jdGFzay1kZXRhaWxzLFxcbiNlZGl0LWNvbnRhaW5lciBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0sXFxuI2VkaXQtY29udGFpbmVyIGlucHV0W3R5cGU9XFxcImRhdGVcXFwiXSxcXG4jZWRpdC10YXNrLWRldGFpbHN7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmY2ZmY7XFxuICAgIHBhZGRpbmc6IDBweCA4cHg7XFxufVxcblxcbiN0YXNrLXRpdGxlLCBcXG4jdGFzay1kYXRlLFxcbiNlZGl0LXRhc2stdGl0bGUsXFxuI2VkaXQtdGFzay1kYXRlIHtcXG4gICAgaGVpZ2h0OiAxLjVyZW07XFxufVxcblxcbiN0YXNrLWRldGFpbHMsXFxuI2VkaXQtdGFzay1kZXRhaWxzIHtcXG4gICAgaGVpZ2h0OiA0cmVtO1xcbiAgICByZXNpemU6IG5vbmU7XFxuICAgIHBhZGRpbmctdG9wOiAzcHg7XFxufVxcblxcbiNmb3JtLWJ1dHRvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxNnB4O1xcbn1cXG5cXG4jY2F0ZWdvcnksXFxuI2VkaXQtY2F0ZWdvcnkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZ2FwOiAxNnB4O1xcbn1cXG5cXG4uY2F0ZWdvcnktc2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA0cHg7XFxufVxcblxcbkBrZXlmcmFtZXMgYXBwZW5kLWFuaW1hdGUge1xcblxcdGZyb20ge1xcblxcdFxcdHRyYW5zZm9ybTogc2NhbGVZKDApO1xcblxcdFxcdG9wYWNpdHk6IDA7XFxuXFx0fVxcblxcdHRvIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHNjYWxlWSgxKTtcXG5cXHRcXHRvcGFjaXR5OiAxO1xcblxcdH1cXG59XFxuXFxuLm5ldy1ib3gge1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMDtcXG5cXHRhbmltYXRpb246IGFwcGVuZC1hbmltYXRlIC4zcyBsaW5lYXI7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osYUFBYTtJQUNiLDhCQUE4QjtJQUM5Qiw0QkFBNEI7SUFDNUIsdUJBQXVCO0FBQzNCOzs7QUFHQSxXQUFXO0FBQ1g7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsVUFBVTtJQUNWLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBLFlBQVk7QUFDWjtJQUNJLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixtQkFBbUI7QUFDdkI7OztBQUdBO0lBQ0ksZUFBZTtJQUNmLDBCQUEwQjtBQUM5Qjs7QUFFQSxvQkFBb0I7QUFDcEI7SUFDSSxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsV0FBVztJQUNYLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsUUFBUTtBQUNaOztBQUVBO0lBQ0ksV0FBVztJQUNYLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2Qiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksNkJBQTZCO0FBQ2pDOztBQUVBOztJQUVJLGVBQWU7QUFDbkI7OztBQUdBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7QUFDZjs7QUFFQSxVQUFVO0FBQ1Y7O0lBRUksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFFBQVE7SUFDUixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUVBOzs7Ozs7SUFNSSxXQUFXO0lBQ1gsb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGdCQUFnQjtBQUNwQjs7QUFFQTs7OztJQUlJLGNBQWM7QUFDbEI7O0FBRUE7O0lBRUksWUFBWTtJQUNaLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixTQUFTO0FBQ2I7O0FBRUE7O0lBRUksYUFBYTtJQUNiLFdBQVc7SUFDWCxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixRQUFRO0FBQ1o7O0FBRUE7Q0FDQztFQUNDLG9CQUFvQjtFQUNwQixVQUFVO0NBQ1g7Q0FDQTtFQUNDLG9CQUFvQjtFQUNwQixVQUFVO0NBQ1g7QUFDRDs7QUFFQTtJQUNJLHVCQUF1QjtDQUMxQixvQ0FBb0M7QUFDckNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDRmcjtcXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxufVxcblxcblxcbi8qIEhlYWRlciAqL1xcbmhlYWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZDRlZDg7XFxuICAgIGNvbG9yOiAjZWZmNmZmO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbmhlYWRlciBoMSB7XFxuICAgIHBhZGRpbmc6IDI0cHggMHB4O1xcbn1cXG5cXG5oZWFkZXIgaW1nIHtcXG4gICAgd2lkdGg6IDJyZW07XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDMwJTtcXG4gICAgbGVmdDogMjRweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5oZWFkZXIgaW1nOmhvdmVyIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4vKiBOYXYgQmFyICovXFxuI25hdiB7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JmZGJmZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyNHB4O1xcbn1cXG5cXG4jbmF2IGgyIHtcXG4gICAgcGFkZGluZy10b3A6IDI0cHg7XFxuICAgIHBhZGRpbmctbGVmdDogMjRweDtcXG59XFxuXFxuI25hdiB1bCB7XFxuICAgIHBhZGRpbmctbGVmdDogMzZweDtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgICBsaW5lLWhlaWdodDogMS41cmVtO1xcbn1cXG5cXG5cXG4jbmF2IHVsIGxpOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuLyogTWFpbiBjb250YWluZXIgICovXFxubWFpbiB7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZjZmZjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IGF1dG87XFxufVxcbiAgICBcXG4jbWFpbi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcGFkZGluZy10b3A6IDI0cHg7XFxuICAgIGdhcDogMTZweDtcXG59XFxuXFxuI2N1cnJlbnQtZGlyZWN0b3J5IHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZDRlZDg7XFxuICAgIGNvbG9yOiAjZWZmNmZmO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDE2cHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuI3Rhc2stbGlzdCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiA0cHg7XFxufVxcblxcbi50YXNrLWl0ZW0ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgI2JmZGJmZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZ2FwOiAxNnB4O1xcbn1cXG5cXG4uY2hlY2tib3gge1xcbiAgICB3aWR0aDogMS41cmVtO1xcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5jb21wbGV0ZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyZWVuO1xcbn1cXG5cXG4uc3RyaWtldGhyb3VnaCB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG5idXR0b246aG92ZXIsXFxuLmNoZWNrYm94OmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5cXG4udGFzay1pdGVtIHAge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGNvbG9yOiBncmV5O1xcbn1cXG5cXG4vKiBGb3JtcyAqL1xcbiNmb3JtLWNvbnRhaW5lcixcXG4jZWRpdC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiZmRiZmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuI2Zvcm0tY29udGFpbmVyIGZvcm0sXFxuI2VkaXQtY29udGFpbmVyIGZvcm0ge1xcbiAgICBwYWRkaW5nLXRvcDogMjRweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDEycHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDhweDtcXG4gICAgd2lkdGg6IDk1JTtcXG59XFxuXFxuI2Zvcm0tdGl0bGUge1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xcbn1cXG5cXG4jZm9ybS1jb250YWluZXIgaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdLFxcbiNmb3JtLWNvbnRhaW5lciBpbnB1dFt0eXBlPVxcXCJkYXRlXFxcIl0sXFxuI3Rhc2stZGV0YWlscyxcXG4jZWRpdC1jb250YWluZXIgaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdLFxcbiNlZGl0LWNvbnRhaW5lciBpbnB1dFt0eXBlPVxcXCJkYXRlXFxcIl0sXFxuI2VkaXQtdGFzay1kZXRhaWxze1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZmNmZmO1xcbiAgICBwYWRkaW5nOiAwcHggOHB4O1xcbn1cXG5cXG4jdGFzay10aXRsZSwgXFxuI3Rhc2stZGF0ZSxcXG4jZWRpdC10YXNrLXRpdGxlLFxcbiNlZGl0LXRhc2stZGF0ZSB7XFxuICAgIGhlaWdodDogMS41cmVtO1xcbn1cXG5cXG4jdGFzay1kZXRhaWxzLFxcbiNlZGl0LXRhc2stZGV0YWlscyB7XFxuICAgIGhlaWdodDogNHJlbTtcXG4gICAgcmVzaXplOiBub25lO1xcbiAgICBwYWRkaW5nLXRvcDogM3B4O1xcbn1cXG5cXG4jZm9ybS1idXR0b25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMTZweDtcXG59XFxuXFxuI2NhdGVnb3J5LFxcbiNlZGl0LWNhdGVnb3J5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGdhcDogMTZweDtcXG59XFxuXFxuLmNhdGVnb3J5LXNlY3Rpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNHB4O1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGFwcGVuZC1hbmltYXRlIHtcXG5cXHRmcm9tIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHNjYWxlWSgwKTtcXG5cXHRcXHRvcGFjaXR5OiAwO1xcblxcdH1cXG5cXHR0byB7XFxuXFx0XFx0dHJhbnNmb3JtOiBzY2FsZVkoMSk7XFxuXFx0XFx0b3BhY2l0eTogMTtcXG5cXHR9XFxufVxcblxcbi5uZXctYm94IHtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDA7XFxuXFx0YW5pbWF0aW9uOiBhcHBlbmQtYW5pbWF0ZSAuM3MgbGluZWFyO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbi8vIFRhc2tzIGFycmF5IHRoYXQgd2lsbCBiZSB1c2VkIHRvIHBvcHVsYXRlIERPTVxubGV0IGJ1c2luZXNzVGFza3MgPSBbXTtcbmxldCBzY2hvb2xUYXNrcyA9IFtdO1xubGV0IHBlcnNvbmFsVGFza3MgPSBbXTtcblxuLy8gVGFzayBjcmVhdGlvblxuY2xhc3MgVGFzayB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRldGFpbHMsIGRhdGUsIGNhdGVnb3J5LCBjb21wbGV0ZWQpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRldGFpbHMgPSBkZXRhaWxzO1xuICAgICAgICB0aGlzLmRhdGUgPSBkYXRlO1xuICAgICAgICB0aGlzLmNhdGVnb3J5ID0gY2F0ZWdvcnk7XG4gICAgICAgIHRoaXMuY29tcGxldGVkID0gY29tcGxldGVkO1xuICAgIH1cbn1cblxuLy8gVG9nZ2xlIG5hdiBiYXIgZGlzcGxheSwgc2hvdy9oaWRlIHRhc2sgZm9ybVxuY29uc3QgYnV0dG9uVG9nZ2xlcyA9ICgoKSA9PiB7XG4gICAgY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVudS1idG5cIik7XG4gICAgY29uc3QgbmF2QmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXZcIik7XG5cbiAgICAvLyBIaWRlL3Nob3cgbmF2IGJhciB3aGVuIGhhbWJ1cmdlciBidXR0b24gaXMgY2xpY2tlZFxuICAgIGxldCBuYXZEaXNwbGF5ID0gdHJ1ZTtcbiAgICBtZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKG5hdkRpc3BsYXkgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgbmF2QmFyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpLnN0eWxlLndpZHRoID0gXCIxMDB2d1wiO1xuICAgICAgICAgICAgbmF2RGlzcGxheSA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmF2QmFyLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpLnN0eWxlLndpZHRoID0gXCJhdXRvXCI7XG4gICAgICAgICAgICBuYXZEaXNwbGF5ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBTaG93IGFkZCB0YXNrIGZvcm0gd2hlbiBidXR0b24gaXMgY2xpY2tlZFxuICAgIGNvbnN0IG5ld1Rhc2tCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC10YXNrXCIpO1xuICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm0tY29udGFpbmVyXCIpO1xuICAgIG5ld1Rhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBmb3JtQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgICAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibmV3LWJveFwiKTtcbiAgICAgICAgbmV3VGFza0J0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfSlcblxuICAgIC8vIEhpZGUgdGFzayBmb3JtIHdoZW4gYnV0dG9uIGlzIGNsaWNrZWRcbiAgICBjb25zdCBoaWRlRm9ybUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGlkZS1mb3JtXCIpO1xuICAgIGhpZGVGb3JtQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtLWNvbnRhaW5lclwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIG5ld1Rhc2tCdG4uc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XG4gICAgfSlcbn0pKCk7XG5cblxuXG4vLyBOYXZpZ2F0ZSB0byBzZWxlY3RlZCBmb2xkZXIgZnJvbSBuYXYgYmFyXG5jb25zdCBmb2xkZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mb2xkZXJcIik7XG5jb25zdCBjdXJyZW50Rm9sZGVyVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImN1cnJlbnQtZGlyZWN0b3J5XCIpO1xuXG4vLyBPcGVuIGJ1c2luZXNzIGRpcmVjdG9yeSBieSBkZWZhdWx0IG9uIHdpbmRvdyBvcGVuXG5sZXQgY3VycmVudERpcmVjdG9yeSA9IFwiYnVzaW5lc3NGb2xkZXJcIjtcbndpbmRvdy5vbmxvYWQgPSAoZGlzcGxheUN1cnJlbnREaXJlY3RvcnkoY3VycmVudERpcmVjdG9yeSkpO1xuXG4vLyBUb2dnbGUgZGlyZWN0b3J5IHRpdGxlIGZyb20gbmF2IGJhclxuZnVuY3Rpb24gZGlzcGxheUN1cnJlbnREaXJlY3RvcnkoZGlyZWN0b3J5KSB7XG4gICAgaWYgKGRpcmVjdG9yeSA9PSBcImJ1c2luZXNzRm9sZGVyXCIpIHtcbiAgICAgICAgY3VycmVudEZvbGRlclRpdGxlLnRleHRDb250ZW50ID0gXCJCdXNpbmVzc1wiO1xuICAgIH0gZWxzZSBpZiAoZGlyZWN0b3J5ID09IFwic2Nob29sRm9sZGVyXCIpIHtcbiAgICAgICAgY3VycmVudEZvbGRlclRpdGxlLnRleHRDb250ZW50ID0gXCJTY2hvb2xcIjtcbiAgICB9IGVsc2UgaWYgKGRpcmVjdG9yeSA9PSBcInBlcnNvbmFsRm9sZGVyXCIpe1xuICAgICAgICBjdXJyZW50Rm9sZGVyVGl0bGUudGV4dENvbnRlbnQgPSBcIlBlcnNvbmFsXCI7XG4gICAgfVxufVxuXG5mb2xkZXJzLmZvckVhY2goKGZvbGRlcikgPT4ge1xuICAgIGZvbGRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY3VycmVudERpcmVjdG9yeSA9IGZvbGRlci5pZDtcbiAgICAgICAgZGlzcGxheUN1cnJlbnREaXJlY3RvcnkoY3VycmVudERpcmVjdG9yeSk7XG4gICAgICAgIGlmIChjdXJyZW50RGlyZWN0b3J5ID09IFwiYnVzaW5lc3NGb2xkZXJcIikge1xuICAgICAgICAgICAgcmVuZGVyVGFza3MoYnVzaW5lc3NUYXNrcyk7XG4gICAgICAgIH0gZWxzZSBpZiAoY3VycmVudERpcmVjdG9yeSA9PSBcInNjaG9vbEZvbGRlclwiKSB7XG4gICAgICAgICAgICByZW5kZXJUYXNrcyhzY2hvb2xUYXNrcyk7XG4gICAgICAgIH0gZWxzZSBpZiAoY3VycmVudERpcmVjdG9yeSA9PSBcInBlcnNvbmFsRm9sZGVyXCIpIHtcbiAgICAgICAgICAgIHJlbmRlclRhc2tzKHBlcnNvbmFsVGFza3MpO1xuICAgICAgICB9XG4gICAgfSlcbn0pXG5cblxuLy8gQWRkIHRhc2sgdG8gYXJyYXkgd2hlbiBmb3JtIGlzIHN1Ym1pdHRlZFxuY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybVwiKTtcbmNvbnN0IHN1Ym1pdFRhc2tCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Ym1pdC10YXNrXCIpO1xuc3VibWl0VGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtLWNvbnRhaW5lclwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtdGFza1wiKS5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLXRpdGxlXCIpLnZhbHVlO1xuICAgIGNvbnN0IGRldGFpbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stZGV0YWlsc1wiKS52YWx1ZTtcbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLWRhdGVcIikudmFsdWU7XG4gICAgbGV0IGNvbXBsZXRlZCA9IGZhbHNlO1xuICAgIGxldCBjYXRlZ29yeTtcblxuICAgIC8vIENoZWNrIHdoaWNoIGNhdGVnb3J5IGlzIGNoZWNrZWQgb2ZmXG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnVzaW5lc3NcIikuY2hlY2tlZCA9PSB0cnVlKSB7XG4gICAgICAgIGNhdGVnb3J5ID0gXCJidXNpbmVzc1wiO1xuICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzY2hvb2xcIikuY2hlY2tlZCA9PSB0cnVlKSB7XG4gICAgICAgIGNhdGVnb3J5ID0gXCJzY2hvb2xcIjsgXG4gICAgfSBlbHNlIHtcbiAgICAgICAgY2F0ZWdvcnkgPSBcInBlcnNvbmFsXCI7XG4gICAgfVxuXG4gICAgLy8gQWRkIHRhc2sgdG8gYXJyYXkgY29ycmVzcG9uZGluZyB0byBzZWxlY3RlZCBjYXRlZ29yeVxuICAgIGxldCBuZXdUYXNrID0gbmV3IFRhc2sodGl0bGUsIGRldGFpbHMsIGRhdGUsIGNhdGVnb3J5LCBjb21wbGV0ZWQpO1xuICAgIGlmIChuZXdUYXNrLmNhdGVnb3J5ID09IFwiYnVzaW5lc3NcIikge1xuICAgICAgICBidXNpbmVzc1Rhc2tzLnB1c2gobmV3VGFzayk7XG4gICAgfSBlbHNlIGlmIChuZXdUYXNrLmNhdGVnb3J5ID09IFwic2Nob29sXCIpIHtcbiAgICAgICAgc2Nob29sVGFza3MucHVzaChuZXdUYXNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBwZXJzb25hbFRhc2tzLnB1c2gobmV3VGFzayk7XG4gICAgfVxuXG4gICAgLy8gSWYgY3JlYXRpbmcgYSB0YXNrIHdpdGhpbiB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGRpcmVjdG9yeSwgZGlzcGxheSB0aGUgdXBkYXRlZCBsaXN0XG4gICAgaWYgKG5ld1Rhc2suY2F0ZWdvcnkgPT0gXCJidXNpbmVzc1wiICYmIGN1cnJlbnREaXJlY3RvcnkgPT0gXCJidXNpbmVzc0ZvbGRlclwiKSB7XG4gICAgICAgIHJlbmRlclRhc2tzKGJ1c2luZXNzVGFza3MpO1xuICAgIH0gZWxzZSBpZiAobmV3VGFzay5jYXRlZ29yeSA9PSBcInNjaG9vbFwiICYmIGN1cnJlbnREaXJlY3RvcnkgPT0gXCJzY2hvb2xGb2xkZXJcIikge1xuICAgICAgICByZW5kZXJUYXNrcyhzY2hvb2xUYXNrcyk7XG4gICAgfSBlbHNlIGlmIChuZXdUYXNrLmNhdGVnb3J5ID09IFwicGVyc29uYWxcIiAmJiBjdXJyZW50RGlyZWN0b3J5ID09IFwicGVyc29uYWxGb2xkZXJcIikge1xuICAgICAgICByZW5kZXJUYXNrcyhwZXJzb25hbFRhc2tzKTtcbiAgICB9XG5cbiAgICBmb3JtLnJlc2V0KCk7XG59KVxuXG5cbi8vIERpc3BsYXkgY3VycmVudCB0YXNrcyBvbiBzY3JlZW5cbmZ1bmN0aW9uIHJlbmRlclRhc2tzKGxpc3QpIHtcbiAgICAvLyBGaXJzdCBjbGVhciBhbGwgdGFza3MgdG8gYXZvaWQgZHVwbGljYXRpb25cbiAgICBjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1saXN0XCIpO1xuICAgIGNvbnN0IGFsbFRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YXNrLWl0ZW1cIik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxUYXNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBhbGxUYXNrc1tpXS5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICAvLyBGb3IgZWFjaCBlbnRyeSBpbiBteVRhc2tzLCBjcmVhdGUgYSBET00gZWxlbWVudFxuICAgIGxpc3QuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICBjb25zdCB0YXNrSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRhc2tJdGVtLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWl0ZW1cIik7XG4gICAgICAgIHRhc2tMaXN0LmFwcGVuZENoaWxkKHRhc2tJdGVtKTtcblxuICAgICAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNoZWNrYm94LmNsYXNzTGlzdC5hZGQoXCJjaGVja2JveFwiKTtcbiAgICAgICAgY2hlY2tib3guc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjaGVja2JveFwiKTtcbiAgICAgICAgdGFza0l0ZW0uYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuXG4gICAgICAgIGNvbnN0IGRpc3BsYXlUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcbiAgICAgICAgZGlzcGxheVRpdGxlLmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5VGl0bGVcIik7XG4gICAgICAgIGRpc3BsYXlUaXRsZS50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XG4gICAgICAgIHRhc2tJdGVtLmFwcGVuZENoaWxkKGRpc3BsYXlUaXRsZSk7XG5cbiAgICAgICAgY29uc3QgZGlzcGxheURldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgZGlzcGxheURldGFpbHMuY2xhc3NMaXN0LmFkZChcImRpc3BsYXlEZXRhaWxzXCIpO1xuICAgICAgICBkaXNwbGF5RGV0YWlscy50ZXh0Q29udGVudCA9IHRhc2suZGV0YWlscztcbiAgICAgICAgdGFza0l0ZW0uYXBwZW5kQ2hpbGQoZGlzcGxheURldGFpbHMpO1xuXG4gICAgICAgIGNvbnN0IGRpc3BsYXlEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIGRpc3BsYXlEYXRlLmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5RGF0ZVwiKTtcbiAgICAgICAgZGlzcGxheURhdGUudGV4dENvbnRlbnQgPSB0YXNrLmRhdGU7XG4gICAgICAgIHRhc2tJdGVtLmFwcGVuZENoaWxkKGRpc3BsYXlEYXRlKTtcblxuICAgICAgICAvLyBFZGl0IGJ1dHRvbiBhbmQgZnVuY3Rpb25hbGl0eSAtIG1vcmUgb24gdGhpcyBsYXRlclxuICAgICAgICBjb25zdCBlZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgZWRpdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImVkaXRcIik7XG4gICAgICAgIGVkaXRCdXR0b24udGV4dENvbnRlbnQgPSBcIkVkaXRcIjtcbiAgICAgICAgdGFza0l0ZW0uYXBwZW5kQ2hpbGQoZWRpdEJ1dHRvbik7XG5cbiAgICAgICAgLy8gTGluayB0aGUgaW5kZXggdG8gdGhlIGRlbGV0ZSBidXR0b24gYW5kIGluY3JlbWVudCBwZXIgdGFzayBlbGVtZW50LlxuICAgICAgICAvLyBQcmVzc2luZyBkZWxldGUgYnV0dG9uIHJlbW92ZXMgdGhlIHBhcmVudCBkb20gZWxlbWVudCBhdCB0aGUgaW5kZXggY29ycnJlc3BvbmRpbmcgdG8gbXlUYXNrcy5cbiAgICAgICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgZGVsZXRlQnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZGVsZXRlXCIpO1xuICAgICAgICBkZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSBcIkRlbGV0ZVwiO1xuICAgICAgICB0YXNrSXRlbS5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuXG4gICAgICAgIC8vIGlmIHRhc2sgaXMgYWxyZWFkeSBjb21wbGV0ZWQsIGhpZ2hsaWdodCB0aGUgY2hlY2tib3ggYW5kIGFkZCBhIHN0cmlrZXRocm91Z2ggdG8gdGhlIHRleHRcbiAgICAgICAgZnVuY3Rpb24gY2hlY2tDb21wbGV0ZWQoKSB7XG4gICAgICAgICAgICBpZiAodGFzay5jb21wbGV0ZWQgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGNoZWNrYm94LmNsYXNzTGlzdC5hZGQoXCJjb21wbGV0ZWRcIik7XG4gICAgICAgICAgICAgICAgZGlzcGxheVRpdGxlLmNsYXNzTGlzdC5hZGQoXCJzdHJpa2V0aHJvdWdoXCIpO1xuICAgICAgICAgICAgICAgIGRpc3BsYXlEZXRhaWxzLmNsYXNzTGlzdC5hZGQoXCJzdHJpa2V0aHJvdWdoXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNoZWNrQ29tcGxldGVkKCk7XG5cbiAgICAgICAgLy8gVG9nZ2xlIGNvbXBsZXRlZCB0YXNrc1xuICAgICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRhc2suY29tcGxldGVkID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgY2hlY2tib3guY2xhc3NMaXN0LmFkZChcImNvbXBsZXRlZFwiKTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5VGl0bGUuY2xhc3NMaXN0LmFkZChcInN0cmlrZXRocm91Z2hcIik7XG4gICAgICAgICAgICAgICAgZGlzcGxheURldGFpbHMuY2xhc3NMaXN0LmFkZChcInN0cmlrZXRocm91Z2hcIik7XG4gICAgICAgICAgICAgICAgdGFzay5jb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjaGVja2JveC5jbGFzc0xpc3QucmVtb3ZlKFwiY29tcGxldGVkXCIpO1xuICAgICAgICAgICAgICAgIGRpc3BsYXlUaXRsZS5jbGFzc0xpc3QucmVtb3ZlKFwic3RyaWtldGhyb3VnaFwiKTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5RGV0YWlscy5jbGFzc0xpc3QucmVtb3ZlKFwic3RyaWtldGhyb3VnaFwiKTtcbiAgICAgICAgICAgICAgICB0YXNrLmNvbXBsZXRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KVxufVxuXG4vLyBMaXN0ZW4gZm9yIGNsaWNrIG9uIGEgZGVsZXRlIHRhc2sgYnV0dG9uLCBydW4gZGVsZXRlIHRhc2sgZnVuY3Rpb25cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGlmIChlLnRhcmdldCAmJiBlLnRhcmdldC5pZCA9PSAnZGVsZXRlJykge1xuICAgICAgICBkZWxldGVUYXNrKGUpO1xuICAgIH1cbiB9KTtcblxuLy8gRGVsZXRlIHRhc2sgZnJvbSBsaXN0XG5mdW5jdGlvbiBkZWxldGVUYXNrKGUpIHtcbiAgICBsZXQgdGFza0RpdiA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gICAgbGV0IHRpdGxlRGl2ID0gdGFza0Rpdi5xdWVyeVNlbGVjdG9yKFwiLmRpc3BsYXlUaXRsZVwiKS50ZXh0Q29udGVudDtcbiAgICBpZiAoY3VycmVudERpcmVjdG9yeSA9PSBcImJ1c2luZXNzRm9sZGVyXCIpIHtcbiAgICAgICAgbGV0IHJlbWFpbmluZ0FycmF5ID0gYnVzaW5lc3NUYXNrcy5maWx0ZXIodGFzayA9PiB0YXNrLnRpdGxlICE9IHRpdGxlRGl2KTtcbiAgICAgICAgYnVzaW5lc3NUYXNrcyA9IHJlbWFpbmluZ0FycmF5O1xuICAgICAgICByZW5kZXJUYXNrcyhidXNpbmVzc1Rhc2tzKTtcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnREaXJlY3RvcnkgPT0gXCJzY2hvb2xGb2xkZXJcIikge1xuICAgICAgICBsZXQgcmVtYWluaW5nQXJyYXkgPSBzY2hvb2xUYXNrcy5maWx0ZXIodGFzayA9PiB0YXNrLnRpdGxlICE9IHRpdGxlRGl2KTtcbiAgICAgICAgc2Nob29sVGFza3MgPSByZW1haW5pbmdBcnJheTtcbiAgICAgICAgcmVuZGVyVGFza3Moc2Nob29sVGFza3MpO1xuICAgIH0gZWxzZSBpZiAoY3VycmVudERpcmVjdG9yeSA9PSBcInBlcnNvbmFsRm9sZGVyXCIpIHtcbiAgICAgICAgbGV0IHJlbWFpbmluZ0FycmF5ID0gcGVyc29uYWxUYXNrcy5maWx0ZXIodGFzayA9PiB0YXNrLnRpdGxlICE9IHRpdGxlRGl2KTtcbiAgICAgICAgcGVyc29uYWxUYXNrcyA9IHJlbWFpbmluZ0FycmF5O1xuICAgICAgICByZW5kZXJUYXNrcyhwZXJzb25hbFRhc2tzKTtcbiAgICB9XG59XG5cbi8vIE9uY2xpY2sgb24gYW4gZWRpdCBidXR0b24sIGV4ZWN1dGUgZWRpdFRhc2sgZnVuY3Rpb25cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGlmIChlLnRhcmdldCAmJiBlLnRhcmdldC5pZCA9PSAnZWRpdCcpIHtcbiAgICAgICAgZWRpdFRhc2soZSk7XG4gICAgfVxuIH0pO1xuXG5mdW5jdGlvbiBlZGl0VGFzayhlKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0LWNvbnRhaW5lclwiKS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0LWNvbnRhaW5lclwiKS5jbGFzc0xpc3QuYWRkKFwibmV3LWJveFwiKTtcbiAgICBjb25zdCB0YXNrRGl2ID0gZS50YXJnZXQucGFyZW50RWxlbWVudDtcbiAgICB0YXNrRGl2LnN0eWxlLmJvcmRlciA9IFwiMnB4IHNvbGlkIGxpZ2h0Z3JlZW5cIlxuICAgIGNvbnN0IHRpdGxlRGl2ID0gdGFza0Rpdi5xdWVyeVNlbGVjdG9yKFwiLmRpc3BsYXlUaXRsZVwiKTtcbiAgICBjb25zdCBkZXRhaWxzRGl2ID0gdGFza0Rpdi5xdWVyeVNlbGVjdG9yKFwiLmRpc3BsYXlEZXRhaWxzXCIpO1xuICAgIGNvbnN0IGRhdGVEaXYgPSB0YXNrRGl2LnF1ZXJ5U2VsZWN0b3IoXCIuZGlzcGxheURhdGVcIik7XG5cbiAgICBjb25zdCBlZGl0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdC1mb3JtXCIpO1xuICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdC10YXNrLXRpdGxlXCIpO1xuICAgIGNvbnN0IHRhc2tEZXRhaWxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0LXRhc2stZGV0YWlsc1wiKTtcbiAgICBjb25zdCB0YXNrRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdC10YXNrLWRhdGVcIik7XG4gICAgY29uc3QgaXNDb21wbGV0ZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNoZWNrYm94XCIpO1xuXG4gICAgbGV0IGNvbXBsZXRlZDtcbiAgICBsZXQgY2F0ZWdvcnk7XG4gICAgXG4gICAgaWYgKGlzQ29tcGxldGVkLmNsYXNzTGlzdC5jb250YWlucyhcImNvbXBsZXRlZFwiKSkge1xuICAgICAgICBjb21wbGV0ZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbXBsZXRlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHRhc2tUaXRsZS52YWx1ZSA9IHRpdGxlRGl2LnRleHRDb250ZW50O1xuICAgIHRhc2tEZXRhaWxzLnRleHRDb250ZW50ID0gZGV0YWlsc0Rpdi50ZXh0Q29udGVudDtcbiAgICB0YXNrRGF0ZS50ZXh0Q29udGVudCA9IGRhdGVEaXYudGV4dENvbnRlbnQ7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgaWYgKGUudGFyZ2V0ICYmIGUudGFyZ2V0LmlkID09IFwic3VibWl0LXRhc2stZWRpdFwiKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBsZXQgYXJyYXlUb0VkaXQ7XG4gICAgICAgICAgICBpZiAoY3VycmVudERpcmVjdG9yeSA9PSBcImJ1c2luZXNzRm9sZGVyXCIpIHtcbiAgICAgICAgICAgICAgICBhcnJheVRvRWRpdCA9IGJ1c2luZXNzVGFza3M7XG4gICAgICAgICAgICAgICAgY2F0ZWdvcnkgPSBcImJ1c2luZXNzXCI7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnREaXJlY3RvcnkgPT0gXCJzY2hvb2xGb2xkZXJcIikge1xuICAgICAgICAgICAgICAgIGFycmF5VG9FZGl0ID0gc2Nob29sVGFza3M7XG4gICAgICAgICAgICAgICAgY2F0ZWdvcnkgPSBcInNjaG9vbFwiO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjdXJyZW50RGlyZWN0b3J5ID09IFwicGVyc29uYWxGb2xkZXJcIikge1xuICAgICAgICAgICAgICAgIGFycmF5VG9FZGl0ID0gcGVyc29uYWxUYXNrcztcbiAgICAgICAgICAgICAgICBjYXRlZ29yeSA9IFwicGVyc29uYWxcIjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IGluZGV4ID0gYXJyYXlUb0VkaXQuZmluZEluZGV4KHRhc2sgPT4gdGFzay50aXRsZSA9PSB0aXRsZURpdi50ZXh0Q29udGVudCk7XG4gICAgICAgICAgICBpZiAoaW5kZXggPCAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBhcnJheVRvRWRpdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgcmVuZGVyVGFza3MoYXJyYXlUb0VkaXQpO1xuICAgICAgICAgICAgbGV0IG5ld1Rhc2sgPSBuZXcgVGFzayh0YXNrVGl0bGUudmFsdWUsIHRhc2tEZXRhaWxzLnZhbHVlLCB0YXNrRGF0ZS52YWx1ZSwgY2F0ZWdvcnksIGNvbXBsZXRlZCk7XG4gICAgICAgICAgICBhcnJheVRvRWRpdC5zcGxpY2UoaW5kZXgsIDAsIG5ld1Rhc2spO1xuICAgICAgICAgICAgcmVuZGVyVGFza3MoYXJyYXlUb0VkaXQpO1xuICAgICAgICAgICAgZWRpdEZvcm0ucmVzZXQoKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdC1jb250YWluZXJcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgdGFza0Rpdi5zdHlsZS5ib3JkZXIgPSBcIjJweCBzb2xpZCAjYmZkYmZlXCI7XG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGlmIChlLnRhcmdldCAmJiBlLnRhcmdldC5pZCA9PSBcImNhbmNlbC1lZGl0XCIpIHtcbiAgICAgICAgICAgIGVkaXRGb3JtLnJlc2V0KCk7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXQtY29udGFpbmVyXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIHRhc2tEaXYuc3R5bGUuYm9yZGVyID0gXCIycHggc29saWQgI2JmZGJmZVwiO1xuICAgICAgICB9XG4gICAgfSlcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==