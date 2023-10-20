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
___CSS_LOADER_EXPORT___.push([module.id, `
:root {
    --font-size: 20px;
    --main-color: black;
}

body {
    padding: 0;
    margin: 0;

    font-family: 'Roboto', sans-serif;
}

button {
    padding: 0; 
    border: none;
    font: inherit;
    color: inherit; 
    background-color: transparent; 
    cursor: pointer;
}

.content {
    height: 100vh;
    width: 100vw;

    display: grid;
    grid-template-columns: 1fr 5fr;
    grid-template-rows: auto 1fr auto;

    grid-template-areas: 
        "header header"
        "sidebar displayed-content"
        "footer footer";
}



.header {
    grid-area: header;
    padding: 15px;
    color: white;

    background-color: var(--main-color);
    display: flex;
    align-items: center;
    gap: 15px;
}

.header img {
    height: 48px;
    width: 48px;

    filter: invert(1);
}



.sidebar {
    grid-area: sidebar;
    border-right: solid;
    border-color: var(--main-color);
    padding: 10px;

    justify-self: stretch;

    display: flex;
    flex-direction: column;
    justify-content: start;
    gap: 18px;
}

.sidebar-container {
    padding-left: 25px;
}

.sidebar-item {
    align-self: center;

    display: flex;
    align-items: center;
    gap: 10px;

}

.sidebar-item img {
    height: 25px;
    width: 25px;
}



.displayed-content {
    grid-area: displayed-content;
    padding-top: 50px;
    padding-left: 200px;
    padding-right: 200px;
}

.project-display-list {
    display: flex;
    flex-direction: column;
    gap: 25px;
}

.displayed-task {
    display: flex;
    justify-content: space-between;

    .left,
    .right {
        display: flex;
        gap: 15px;
    }
}



.footer {
    grid-area: footer;

    background: var(--main-color);
    color: white;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
}

.footer img {
    height: 35px;
    width: 35px;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":";AACA;IACI,iBAAiB;IACjB,mBAAmB;AACvB;;AAEA;IACI,UAAU;IACV,SAAS;;IAET,iCAAiC;AACrC;;AAEA;IACI,UAAU;IACV,YAAY;IACZ,aAAa;IACb,cAAc;IACd,6BAA6B;IAC7B,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,YAAY;;IAEZ,aAAa;IACb,8BAA8B;IAC9B,iCAAiC;;IAEjC;;;uBAGmB;AACvB;;;;AAIA;IACI,iBAAiB;IACjB,aAAa;IACb,YAAY;;IAEZ,mCAAmC;IACnC,aAAa;IACb,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,YAAY;IACZ,WAAW;;IAEX,iBAAiB;AACrB;;;;AAIA;IACI,kBAAkB;IAClB,mBAAmB;IACnB,+BAA+B;IAC/B,aAAa;;IAEb,qBAAqB;;IAErB,aAAa;IACb,sBAAsB;IACtB,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;;IAElB,aAAa;IACb,mBAAmB;IACnB,SAAS;;AAEb;;AAEA;IACI,YAAY;IACZ,WAAW;AACf;;;;AAIA;IACI,4BAA4B;IAC5B,iBAAiB;IACjB,mBAAmB;IACnB,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,8BAA8B;;IAE9B;;QAEI,aAAa;QACb,SAAS;IACb;AACJ;;;;AAIA;IACI,iBAAiB;;IAEjB,6BAA6B;IAC7B,YAAY;;IAEZ,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,YAAY;IACZ,WAAW;AACf","sourcesContent":["\n:root {\n    --font-size: 20px;\n    --main-color: black;\n}\n\nbody {\n    padding: 0;\n    margin: 0;\n\n    font-family: 'Roboto', sans-serif;\n}\n\nbutton {\n    padding: 0; \n    border: none;\n    font: inherit;\n    color: inherit; \n    background-color: transparent; \n    cursor: pointer;\n}\n\n.content {\n    height: 100vh;\n    width: 100vw;\n\n    display: grid;\n    grid-template-columns: 1fr 5fr;\n    grid-template-rows: auto 1fr auto;\n\n    grid-template-areas: \n        \"header header\"\n        \"sidebar displayed-content\"\n        \"footer footer\";\n}\n\n\n\n.header {\n    grid-area: header;\n    padding: 15px;\n    color: white;\n\n    background-color: var(--main-color);\n    display: flex;\n    align-items: center;\n    gap: 15px;\n}\n\n.header img {\n    height: 48px;\n    width: 48px;\n\n    filter: invert(1);\n}\n\n\n\n.sidebar {\n    grid-area: sidebar;\n    border-right: solid;\n    border-color: var(--main-color);\n    padding: 10px;\n\n    justify-self: stretch;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: start;\n    gap: 18px;\n}\n\n.sidebar-container {\n    padding-left: 25px;\n}\n\n.sidebar-item {\n    align-self: center;\n\n    display: flex;\n    align-items: center;\n    gap: 10px;\n\n}\n\n.sidebar-item img {\n    height: 25px;\n    width: 25px;\n}\n\n\n\n.displayed-content {\n    grid-area: displayed-content;\n    padding-top: 50px;\n    padding-left: 200px;\n    padding-right: 200px;\n}\n\n.project-display-list {\n    display: flex;\n    flex-direction: column;\n    gap: 25px;\n}\n\n.displayed-task {\n    display: flex;\n    justify-content: space-between;\n\n    .left,\n    .right {\n        display: flex;\n        gap: 15px;\n    }\n}\n\n\n\n.footer {\n    grid-area: footer;\n\n    background: var(--main-color);\n    color: white;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 10px;\n}\n\n.footer img {\n    height: 35px;\n    width: 35px;\n}"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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
    return [content].concat([sourceMapping]).join("\n");
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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   applicationName: () => (/* binding */ applicationName),
/* harmony export */   defaultSidebar: () => (/* binding */ defaultSidebar),
/* harmony export */   footer: () => (/* binding */ footer),
/* harmony export */   header: () => (/* binding */ header),
/* harmony export */   icon: () => (/* binding */ icon),
/* harmony export */   projectDisplayConfig: () => (/* binding */ projectDisplayConfig),
/* harmony export */   projectsSidebar: () => (/* binding */ projectsSidebar),
/* harmony export */   sideBarItem: () => (/* binding */ sideBarItem)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _assets_icons_inbox_FILL0_wght400_GRAD0_opsz24_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/icons/inbox_FILL0_wght400_GRAD0_opsz24.svg */ "./src/assets/icons/inbox_FILL0_wght400_GRAD0_opsz24.svg");
/* harmony import */ var _assets_icons_today_FILL0_wght400_GRAD0_opsz24_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/icons/today_FILL0_wght400_GRAD0_opsz24.svg */ "./src/assets/icons/today_FILL0_wght400_GRAD0_opsz24.svg");
/* harmony import */ var _assets_icons_date_range_FILL0_wght400_GRAD0_opsz24_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/icons/date_range_FILL0_wght400_GRAD0_opsz24.svg */ "./src/assets/icons/date_range_FILL0_wght400_GRAD0_opsz24.svg");
/* harmony import */ var _assets_icons_checklist_FILL0_wght400_GRAD0_opsz24_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/icons/checklist_FILL0_wght400_GRAD0_opsz24.svg */ "./src/assets/icons/checklist_FILL0_wght400_GRAD0_opsz24.svg");
/* harmony import */ var _assets_icons_delete_FILL0_wght400_GRAD0_opsz24_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/icons/delete_FILL0_wght400_GRAD0_opsz24.svg */ "./src/assets/icons/delete_FILL0_wght400_GRAD0_opsz24.svg");
/* harmony import */ var _assets_icons_add_FILL0_wght400_GRAD0_opsz24_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/icons/add_FILL0_wght400_GRAD0_opsz24.svg */ "./src/assets/icons/add_FILL0_wght400_GRAD0_opsz24.svg");
/* harmony import */ var _assets_icons_done_all_FILL0_wght400_GRAD0_opsz24_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/icons/done_all_FILL0_wght400_GRAD0_opsz24.svg */ "./src/assets/icons/done_all_FILL0_wght400_GRAD0_opsz24.svg");
/* harmony import */ var _assets_icons_radio_button_unchecked_FILL0_wght400_GRAD0_opsz24_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/icons/radio_button_unchecked_FILL0_wght400_GRAD0_opsz24.svg */ "./src/assets/icons/radio_button_unchecked_FILL0_wght400_GRAD0_opsz24.svg");
/* harmony import */ var _assets_icons_check_circle_FILL0_wght400_GRAD0_opsz24_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/icons/check_circle_FILL0_wght400_GRAD0_opsz24.svg */ "./src/assets/icons/check_circle_FILL0_wght400_GRAD0_opsz24.svg");
/* harmony import */ var _assets_icons_github_mark_white_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/icons/github-mark-white.svg */ "./src/assets/icons/github-mark-white.svg");












const applicationName = 'Todo List App';

const icon = (src, alt) => (
     {src: src, alt: alt}
);

const sideBarItem = (itemTitle, icon) => (
    {itemTitle: itemTitle, icon: icon}
); 

const header = {
    appName: applicationName,
    icon: icon(_assets_icons_done_all_FILL0_wght400_GRAD0_opsz24_svg__WEBPACK_IMPORTED_MODULE_7__, 'logo icon'),
};

const defaultSidebar = {
    items: [
        {
            itemTitle: 'Inbox',
            icon: icon(_assets_icons_inbox_FILL0_wght400_GRAD0_opsz24_svg__WEBPACK_IMPORTED_MODULE_1__, 'Inbox Icon'),
        },
        {
            itemTitle: 'Today',
            icon: icon(_assets_icons_today_FILL0_wght400_GRAD0_opsz24_svg__WEBPACK_IMPORTED_MODULE_2__, 'Today Icon'),
        },
        {
            itemTitle: 'This Week',
            icon: icon(_assets_icons_date_range_FILL0_wght400_GRAD0_opsz24_svg__WEBPACK_IMPORTED_MODULE_3__, 'This week icon'),
        },
    ],
};

const projectsSidebar = {
    title: 'Projects',
    icon: icon(_assets_icons_checklist_FILL0_wght400_GRAD0_opsz24_svg__WEBPACK_IMPORTED_MODULE_4__, 'Project Icon'),
    items: [
    ],
    addButton: {
        icon: icon(_assets_icons_add_FILL0_wght400_GRAD0_opsz24_svg__WEBPACK_IMPORTED_MODULE_6__, 'add project icon'),
        itemTitle: 'Add Project',
    }
};

const projectDisplayConfig = {
    detailsButtonText: "DETAILS",
    uncheckedButton: icon(_assets_icons_radio_button_unchecked_FILL0_wght400_GRAD0_opsz24_svg__WEBPACK_IMPORTED_MODULE_8__,'task in progress icon'),
    checkedButton: icon(_assets_icons_check_circle_FILL0_wght400_GRAD0_opsz24_svg__WEBPACK_IMPORTED_MODULE_9__, 'task finished icon'),
    deleteButton: icon(_assets_icons_delete_FILL0_wght400_GRAD0_opsz24_svg__WEBPACK_IMPORTED_MODULE_5__, 'delete icon'),
};

const footer = {
    text: 'Developed by Cashton Holbert',
    githubLogo: icon(_assets_icons_github_mark_white_svg__WEBPACK_IMPORTED_MODULE_10__, 'githubLogo'),
    githubLink: 'https://github.com/cashholb/todo-list',
};




/***/ }),

/***/ "./src/content.js":
/*!************************!*\
  !*** ./src/content.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createFooterElem: () => (/* binding */ createFooterElem),
/* harmony export */   createHeaderElem: () => (/* binding */ createHeaderElem),
/* harmony export */   createProjectDisplayElem: () => (/* binding */ createProjectDisplayElem),
/* harmony export */   createSidebarElem: () => (/* binding */ createSidebarElem)
/* harmony export */ });
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ "./src/config.js");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ "./src/project.js");



// header
const createHeaderElem = () => {
    const headerElem = document.createElement('div');
    headerElem.classList.add('header');

    const iconElem = document.createElement('img');
    iconElem.src = _config_js__WEBPACK_IMPORTED_MODULE_0__.header.icon.src;
    iconElem.alt = _config_js__WEBPACK_IMPORTED_MODULE_0__.header.icon.alt;
    headerElem.appendChild(iconElem);

    const titleElem = document.createElement('h1');
    titleElem.textContent = _config_js__WEBPACK_IMPORTED_MODULE_0__.header.appName;
    headerElem.appendChild(titleElem);

    return headerElem;
};

// sidebar
const createSidebarElem = (currProjectsSidebar) => {

    const sidebarElem = document.createElement('div');
    sidebarElem.classList.add('sidebar');

    const createSidebarButtonsListElem = (itemsList) => {

        const containerElem =  document.createElement('div');
        containerElem.classList.add('sidebar-items-list');

        itemsList.forEach((item) => {
            const sidebarItem = document.createElement('button');
            sidebarItem.classList.add('sidebar-item');
    
            const icon = document.createElement('img');
            icon.src = item.icon.src;
            icon.alt = item.icon.alt;
            sidebarItem.appendChild(icon);
    
            const itemTitle = document.createElement('p');
            itemTitle.textContent = item.itemTitle;
            sidebarItem.appendChild(itemTitle);
    
            containerElem.appendChild(sidebarItem);
        });
            
        return containerElem;
    }

    // default items (Inbox, Today, etc.)
    const defaultSidebarContainer = document.createElement('div');
    defaultSidebarContainer.classList.add('sidebar-container');

    defaultSidebarContainer.appendChild(createSidebarButtonsListElem(_config_js__WEBPACK_IMPORTED_MODULE_0__.defaultSidebar.items));
    sidebarElem.appendChild(defaultSidebarContainer);


    // projects sidebar portion
    const projectsSidebarContainer = document.createElement('div');
    projectsSidebarContainer.classList.add('sidebar-container');

    const projectTitle = document.createElement('h2');
    projectTitle.textContent = currProjectsSidebar.title;
    projectsSidebarContainer.appendChild(projectTitle);

    const projectsSidebarItems = document.createElement('div');

    projectsSidebarContainer.appendChild(createSidebarButtonsListElem(currProjectsSidebar.items));
    sidebarElem.appendChild(projectsSidebarContainer);

    return sidebarElem;
};

// project display content
const createProjectDisplayElem = (project) => {
    const projectDisplayElem = document.createElement('div');
    projectDisplayElem.classList.add('displayed-content');

    const header = document.createElement('h1');
    header.textContent = project.title;
    projectDisplayElem.appendChild(header);

    const projectDisplayList = document.createElement('div');
    projectDisplayList.classList.add('project-display-list');

    // create displayed task item
    for (const task of project.projectToDoList) {
        const itemElem = document.createElement('div');
        itemElem.classList.add('displayed-task');

        const leftSide = document.createElement('div');
        leftSide.classList.add('left');

        // TODO: CHANGE BUTTON CHECKED OR UNCHECKED DEPENDENT ON 'task' PARAM
        const statusButton = document.createElement('button');
        const statusImg = document.createElement('img');
        if(task.checked) {
            statusImg.src = _config_js__WEBPACK_IMPORTED_MODULE_0__.projectDisplayConfig.checkedButton.src;
            statusImg.alt = _config_js__WEBPACK_IMPORTED_MODULE_0__.projectDisplayConfig.checkedButton.alt;
        }else{
            statusImg.src = _config_js__WEBPACK_IMPORTED_MODULE_0__.projectDisplayConfig.uncheckedButton.src;
            statusImg.alt = _config_js__WEBPACK_IMPORTED_MODULE_0__.projectDisplayConfig.uncheckedButton.alt;
        }
        statusButton.appendChild(statusImg);
        
        statusButton.classList.add('status-button');
        leftSide.appendChild(statusButton);

        const taskTitle = document.createElement('button');
        taskTitle.classList.add('task-title');
        taskTitle.textContent = task.title;
        leftSide.appendChild(taskTitle);

        itemElem.appendChild(leftSide);

        const rightSide = document.createElement('div');
        rightSide.classList.add('right');

        const detailsButton = document.createElement('button');
        detailsButton.classList.add('details-button');
        detailsButton.textContent = _config_js__WEBPACK_IMPORTED_MODULE_0__.projectDisplayConfig.detailsButtonText;
        rightSide.appendChild(detailsButton);

        const dateButton = document.createElement('button');
        dateButton.classList.add('date-button');
        dateButton.textContent = task.dueDate;
        rightSide.appendChild(dateButton);

        const delButton = document.createElement('button');
        delButton.classList.add('del-icon');
        const delImg = document.createElement('img');
        delImg.src = _config_js__WEBPACK_IMPORTED_MODULE_0__.projectDisplayConfig.deleteButton.src;
        delImg.alt = _config_js__WEBPACK_IMPORTED_MODULE_0__.projectDisplayConfig.deleteButton.alt;
        delButton.appendChild(delImg);
        rightSide.appendChild(delButton);
        
        itemElem.appendChild(rightSide);

        projectDisplayList.appendChild(itemElem);
    }

    projectDisplayElem.appendChild(projectDisplayList);

    return projectDisplayElem;
};

// footer
const createFooterElem = () => {

    const footerElem = document.createElement('div');

    // text
    footerElem.classList.add('footer');
    const footerContent = document.createElement('p');
    footerContent.textContent = 'Developed by Cashton Holbert';
    footerElem.appendChild(footerContent);

    // github logo
    const githubLink = document.createElement('a');
    githubLink.href = _config_js__WEBPACK_IMPORTED_MODULE_0__.footer.githubLink;
    const githubImage = document.createElement('img');
    githubImage.src = _config_js__WEBPACK_IMPORTED_MODULE_0__.footer.githubLogo.src;
    githubImage.alt = _config_js__WEBPACK_IMPORTED_MODULE_0__.footer.githubLogo.alt;
    githubLink.appendChild(githubImage);
    footerElem.appendChild(githubLink);

    return footerElem;
};



/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   project: () => (/* binding */ project)
/* harmony export */ });
const project = (title) => {

    let projectToDoList = [];
    
    return {
        title: title,
        projectToDoList: projectToDoList,
        add(todoItem) {
            const index = this.projectToDoList.indexOf(todoItem);
            if (index === -1) {
                this.projectToDoList.push(todoItem);
            }
        },
        remove(todoItem) {
            const index = this.projectToDoList.indexOf(todoItem);
            if (index !== -1) {
                this.projectToDoList.splice(index, 1);
            }
        }
    }
}



/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   todoItem: () => (/* binding */ todoItem)
/* harmony export */ });

const todoItem = (title, description, dueDate, priority) => {

    return {
        checked: false,
        title: title,
        description: description,
        dueDate: dueDate,
        priority: priority,
    };
};



/***/ }),

/***/ "./src/assets/icons/add_FILL0_wght400_GRAD0_opsz24.svg":
/*!*************************************************************!*\
  !*** ./src/assets/icons/add_FILL0_wght400_GRAD0_opsz24.svg ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3be0ea4ac64cead2bf95.svg";

/***/ }),

/***/ "./src/assets/icons/check_circle_FILL0_wght400_GRAD0_opsz24.svg":
/*!**********************************************************************!*\
  !*** ./src/assets/icons/check_circle_FILL0_wght400_GRAD0_opsz24.svg ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4f061b0a3021042c0e43.svg";

/***/ }),

/***/ "./src/assets/icons/checklist_FILL0_wght400_GRAD0_opsz24.svg":
/*!*******************************************************************!*\
  !*** ./src/assets/icons/checklist_FILL0_wght400_GRAD0_opsz24.svg ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b5d731463a6ef3406a83.svg";

/***/ }),

/***/ "./src/assets/icons/date_range_FILL0_wght400_GRAD0_opsz24.svg":
/*!********************************************************************!*\
  !*** ./src/assets/icons/date_range_FILL0_wght400_GRAD0_opsz24.svg ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4f56e04d5596f51f140b.svg";

/***/ }),

/***/ "./src/assets/icons/delete_FILL0_wght400_GRAD0_opsz24.svg":
/*!****************************************************************!*\
  !*** ./src/assets/icons/delete_FILL0_wght400_GRAD0_opsz24.svg ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "642da2f9203fed7e99a0.svg";

/***/ }),

/***/ "./src/assets/icons/done_all_FILL0_wght400_GRAD0_opsz24.svg":
/*!******************************************************************!*\
  !*** ./src/assets/icons/done_all_FILL0_wght400_GRAD0_opsz24.svg ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "278de6a280546fbb9973.svg";

/***/ }),

/***/ "./src/assets/icons/github-mark-white.svg":
/*!************************************************!*\
  !*** ./src/assets/icons/github-mark-white.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "97ed8e7eef60d61ca469.svg";

/***/ }),

/***/ "./src/assets/icons/inbox_FILL0_wght400_GRAD0_opsz24.svg":
/*!***************************************************************!*\
  !*** ./src/assets/icons/inbox_FILL0_wght400_GRAD0_opsz24.svg ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1d45cd0dc21654a08f74.svg";

/***/ }),

/***/ "./src/assets/icons/radio_button_unchecked_FILL0_wght400_GRAD0_opsz24.svg":
/*!********************************************************************************!*\
  !*** ./src/assets/icons/radio_button_unchecked_FILL0_wght400_GRAD0_opsz24.svg ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6bfeb430abd13c4c8a64.svg";

/***/ }),

/***/ "./src/assets/icons/today_FILL0_wght400_GRAD0_opsz24.svg":
/*!***************************************************************!*\
  !*** ./src/assets/icons/today_FILL0_wght400_GRAD0_opsz24.svg ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e0e385e1ed83a44ce819.svg";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo */ "./src/todo.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ "./src/config.js");
/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./content */ "./src/content.js");







// create app container
const CONTENT_ELEM = document.createElement('div');
CONTENT_ELEM.classList.add('content');
document.querySelector('body').appendChild(CONTENT_ELEM);


// -------------------------
// TRY TO LOAD LOCAL STORAGE
// -------------------------

// temp project storage

const projectA = (0,_project__WEBPACK_IMPORTED_MODULE_1__.project)('Clean Room');

projectA.add((0,_todo__WEBPACK_IMPORTED_MODULE_2__.todoItem)(
    'pick up clothes',
    'use your hands, toss them in the wash',
    '5/10/24',
    'low',
));

projectA.add((0,_todo__WEBPACK_IMPORTED_MODULE_2__.todoItem)(
    'organize dresser',
    'throw out junk from junk drawer',
    '5/15/24',
    'medium',
));

const projectB = (0,_project__WEBPACK_IMPORTED_MODULE_1__.project)('Touch Grass');

const projects = [projectA, projectB];


// ---------------------------------
// DO THE DOM STUFF
// ---------------------------------
const updateProjectSideBar = (projectList) => {
    let projectSideBarList = [];
    projectList.forEach((project) => projectSideBarList.push((0,_config__WEBPACK_IMPORTED_MODULE_3__.sideBarItem)(project.title, _config__WEBPACK_IMPORTED_MODULE_3__.projectsSidebar.icon)));
    _config__WEBPACK_IMPORTED_MODULE_3__.projectsSidebar.items = projectSideBarList;
}

updateProjectSideBar(projects);

const updateProjectDisplay = (project) => {
    document.querySelector('.displayed-content').innerHTML = "";
    (0,_content__WEBPACK_IMPORTED_MODULE_4__.createProjectDisplayElem)(projectA);
}

CONTENT_ELEM.appendChild((0,_content__WEBPACK_IMPORTED_MODULE_4__.createHeaderElem)());
CONTENT_ELEM.appendChild((0,_content__WEBPACK_IMPORTED_MODULE_4__.createSidebarElem)(_config__WEBPACK_IMPORTED_MODULE_3__.projectsSidebar));
CONTENT_ELEM.appendChild((0,_content__WEBPACK_IMPORTED_MODULE_4__.createProjectDisplayElem)(projectA));
CONTENT_ELEM.appendChild((0,_content__WEBPACK_IMPORTED_MODULE_4__.createFooterElem)());


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGlCQUFpQixpREFBTzs7QUFFeEIsYUFBYSwrQ0FBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWEsK0NBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsaURBQU87O0FBRXhCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQTZELG9EQUFXLGdCQUFnQixvREFBZTtBQUN2RyxJQUFJLG9EQUFlO0FBQ25COztBQUVBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLGtFQUF3QjtBQUM1Qjs7QUFFQSx5QkFBeUIsMERBQWdCO0FBQ3pDLHlCQUF5QiwyREFBaUIsQ0FBQyxvREFBZTtBQUMxRCx5QkFBeUIsa0VBQXdCO0FBQ2pELHlCQUF5QiwwREFBZ0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29udGVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBcbjpyb290IHtcbiAgICAtLWZvbnQtc2l6ZTogMjBweDtcbiAgICAtLW1haW4tY29sb3I6IGJsYWNrO1xufVxuXG5ib2R5IHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcblxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbn1cblxuYnV0dG9uIHtcbiAgICBwYWRkaW5nOiAwOyBcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgZm9udDogaW5oZXJpdDtcbiAgICBjb2xvcjogaW5oZXJpdDsgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IFxuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNvbnRlbnQge1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgd2lkdGg6IDEwMHZ3O1xuXG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1ZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciBhdXRvO1xuXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXG4gICAgICAgIFwiaGVhZGVyIGhlYWRlclwiXG4gICAgICAgIFwic2lkZWJhciBkaXNwbGF5ZWQtY29udGVudFwiXG4gICAgICAgIFwiZm9vdGVyIGZvb3RlclwiO1xufVxuXG5cblxuLmhlYWRlciB7XG4gICAgZ3JpZC1hcmVhOiBoZWFkZXI7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBjb2xvcjogd2hpdGU7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxNXB4O1xufVxuXG4uaGVhZGVyIGltZyB7XG4gICAgaGVpZ2h0OiA0OHB4O1xuICAgIHdpZHRoOiA0OHB4O1xuXG4gICAgZmlsdGVyOiBpbnZlcnQoMSk7XG59XG5cblxuXG4uc2lkZWJhciB7XG4gICAgZ3JpZC1hcmVhOiBzaWRlYmFyO1xuICAgIGJvcmRlci1yaWdodDogc29saWQ7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuXG4gICAganVzdGlmeS1zZWxmOiBzdHJldGNoO1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gICAgZ2FwOiAxOHB4O1xufVxuXG4uc2lkZWJhci1jb250YWluZXIge1xuICAgIHBhZGRpbmctbGVmdDogMjVweDtcbn1cblxuLnNpZGViYXItaXRlbSB7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTBweDtcblxufVxuXG4uc2lkZWJhci1pdGVtIGltZyB7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIHdpZHRoOiAyNXB4O1xufVxuXG5cblxuLmRpc3BsYXllZC1jb250ZW50IHtcbiAgICBncmlkLWFyZWE6IGRpc3BsYXllZC1jb250ZW50O1xuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xuICAgIHBhZGRpbmctbGVmdDogMjAwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMjAwcHg7XG59XG5cbi5wcm9qZWN0LWRpc3BsYXktbGlzdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMjVweDtcbn1cblxuLmRpc3BsYXllZC10YXNrIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgIC5sZWZ0LFxuICAgIC5yaWdodCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGdhcDogMTVweDtcbiAgICB9XG59XG5cblxuXG4uZm9vdGVyIHtcbiAgICBncmlkLWFyZWE6IGZvb3RlcjtcblxuICAgIGJhY2tncm91bmQ6IHZhcigtLW1haW4tY29sb3IpO1xuICAgIGNvbG9yOiB3aGl0ZTtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDEwcHg7XG59XG5cbi5mb290ZXIgaW1nIHtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgd2lkdGg6IDM1cHg7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsU0FBUzs7SUFFVCxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGFBQWE7SUFDYixjQUFjO0lBQ2QsNkJBQTZCO0lBQzdCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTs7SUFFWixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGlDQUFpQzs7SUFFakM7Ozt1QkFHbUI7QUFDdkI7Ozs7QUFJQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsWUFBWTs7SUFFWixtQ0FBbUM7SUFDbkMsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVzs7SUFFWCxpQkFBaUI7QUFDckI7Ozs7QUFJQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsK0JBQStCO0lBQy9CLGFBQWE7O0lBRWIscUJBQXFCOztJQUVyQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7O0lBRWxCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsU0FBUzs7QUFFYjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7Ozs7QUFJQTtJQUNJLDRCQUE0QjtJQUM1QixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4Qjs7SUFFOUI7O1FBRUksYUFBYTtRQUNiLFNBQVM7SUFDYjtBQUNKOzs7O0FBSUE7SUFDSSxpQkFBaUI7O0lBRWpCLDZCQUE2QjtJQUM3QixZQUFZOztJQUVaLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuOnJvb3Qge1xcbiAgICAtLWZvbnQtc2l6ZTogMjBweDtcXG4gICAgLS1tYWluLWNvbG9yOiBibGFjaztcXG59XFxuXFxuYm9keSB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG5cXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBwYWRkaW5nOiAwOyBcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250OiBpbmhlcml0O1xcbiAgICBjb2xvcjogaW5oZXJpdDsgXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyBcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIGF1dG87XFxuXFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgICAgICAgXFxcImhlYWRlciBoZWFkZXJcXFwiXFxuICAgICAgICBcXFwic2lkZWJhciBkaXNwbGF5ZWQtY29udGVudFxcXCJcXG4gICAgICAgIFxcXCJmb290ZXIgZm9vdGVyXFxcIjtcXG59XFxuXFxuXFxuXFxuLmhlYWRlciB7XFxuICAgIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDE1cHg7XFxufVxcblxcbi5oZWFkZXIgaW1nIHtcXG4gICAgaGVpZ2h0OiA0OHB4O1xcbiAgICB3aWR0aDogNDhweDtcXG5cXG4gICAgZmlsdGVyOiBpbnZlcnQoMSk7XFxufVxcblxcblxcblxcbi5zaWRlYmFyIHtcXG4gICAgZ3JpZC1hcmVhOiBzaWRlYmFyO1xcbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkO1xcbiAgICBib3JkZXItY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcblxcbiAgICBqdXN0aWZ5LXNlbGY6IHN0cmV0Y2g7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgIGdhcDogMThweDtcXG59XFxuXFxuLnNpZGViYXItY29udGFpbmVyIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xcbn1cXG5cXG4uc2lkZWJhci1pdGVtIHtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxuXFxufVxcblxcbi5zaWRlYmFyLWl0ZW0gaW1nIHtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICB3aWR0aDogMjVweDtcXG59XFxuXFxuXFxuXFxuLmRpc3BsYXllZC1jb250ZW50IHtcXG4gICAgZ3JpZC1hcmVhOiBkaXNwbGF5ZWQtY29udGVudDtcXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XFxuICAgIHBhZGRpbmctbGVmdDogMjAwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDIwMHB4O1xcbn1cXG5cXG4ucHJvamVjdC1kaXNwbGF5LWxpc3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDI1cHg7XFxufVxcblxcbi5kaXNwbGF5ZWQtdGFzayB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXG4gICAgLmxlZnQsXFxuICAgIC5yaWdodCB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZ2FwOiAxNXB4O1xcbiAgICB9XFxufVxcblxcblxcblxcbi5mb290ZXIge1xcbiAgICBncmlkLWFyZWE6IGZvb3RlcjtcXG5cXG4gICAgYmFja2dyb3VuZDogdmFyKC0tbWFpbi1jb2xvcik7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLmZvb3RlciBpbWcge1xcbiAgICBoZWlnaHQ6IDM1cHg7XFxuICAgIHdpZHRoOiAzNXB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgcHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCBpbmJveEljb24gZnJvbSBcIi4vYXNzZXRzL2ljb25zL2luYm94X0ZJTEwwX3dnaHQ0MDBfR1JBRDBfb3BzejI0LnN2Z1wiXG5pbXBvcnQgdG9kYXlJY29uIGZyb20gXCIuL2Fzc2V0cy9pY29ucy90b2RheV9GSUxMMF93Z2h0NDAwX0dSQUQwX29wc3oyNC5zdmdcIlxuaW1wb3J0IHdlZWtJY29uIGZyb20gXCIuL2Fzc2V0cy9pY29ucy9kYXRlX3JhbmdlX0ZJTEwwX3dnaHQ0MDBfR1JBRDBfb3BzejI0LnN2Z1wiXG5pbXBvcnQgcHJvamVjdEljb24gZnJvbSBcIi4vYXNzZXRzL2ljb25zL2NoZWNrbGlzdF9GSUxMMF93Z2h0NDAwX0dSQUQwX29wc3oyNC5zdmdcIlxuaW1wb3J0IGRlbGV0ZUljb24gZnJvbSBcIi4vYXNzZXRzL2ljb25zL2RlbGV0ZV9GSUxMMF93Z2h0NDAwX0dSQUQwX29wc3oyNC5zdmdcIlxuaW1wb3J0IGFkZEljb24gZnJvbSBcIi4vYXNzZXRzL2ljb25zL2FkZF9GSUxMMF93Z2h0NDAwX0dSQUQwX29wc3oyNC5zdmdcIlxuaW1wb3J0IGxvZ29JY29uIGZyb20gXCIuL2Fzc2V0cy9pY29ucy9kb25lX2FsbF9GSUxMMF93Z2h0NDAwX0dSQUQwX29wc3oyNC5zdmdcIlxuaW1wb3J0IHVuY2hlY2tlZEJ1dHRvbiBmcm9tIFwiLi9hc3NldHMvaWNvbnMvcmFkaW9fYnV0dG9uX3VuY2hlY2tlZF9GSUxMMF93Z2h0NDAwX0dSQUQwX29wc3oyNC5zdmdcIlxuaW1wb3J0IGNoZWNrZWRCdXR0b24gZnJvbSBcIi4vYXNzZXRzL2ljb25zL2NoZWNrX2NpcmNsZV9GSUxMMF93Z2h0NDAwX0dSQUQwX29wc3oyNC5zdmdcIlxuaW1wb3J0IGdpdGh1YkxvZ28gZnJvbSBcIi4vYXNzZXRzL2ljb25zL2dpdGh1Yi1tYXJrLXdoaXRlLnN2Z1wiXG5cbmNvbnN0IGFwcGxpY2F0aW9uTmFtZSA9ICdUb2RvIExpc3QgQXBwJztcblxuY29uc3QgaWNvbiA9IChzcmMsIGFsdCkgPT4gKFxuICAgICB7c3JjOiBzcmMsIGFsdDogYWx0fVxuKTtcblxuY29uc3Qgc2lkZUJhckl0ZW0gPSAoaXRlbVRpdGxlLCBpY29uKSA9PiAoXG4gICAge2l0ZW1UaXRsZTogaXRlbVRpdGxlLCBpY29uOiBpY29ufVxuKTsgXG5cbmNvbnN0IGhlYWRlciA9IHtcbiAgICBhcHBOYW1lOiBhcHBsaWNhdGlvbk5hbWUsXG4gICAgaWNvbjogaWNvbihsb2dvSWNvbiwgJ2xvZ28gaWNvbicpLFxufTtcblxuY29uc3QgZGVmYXVsdFNpZGViYXIgPSB7XG4gICAgaXRlbXM6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgaXRlbVRpdGxlOiAnSW5ib3gnLFxuICAgICAgICAgICAgaWNvbjogaWNvbihpbmJveEljb24sICdJbmJveCBJY29uJyksXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGl0ZW1UaXRsZTogJ1RvZGF5JyxcbiAgICAgICAgICAgIGljb246IGljb24odG9kYXlJY29uLCAnVG9kYXkgSWNvbicpLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpdGVtVGl0bGU6ICdUaGlzIFdlZWsnLFxuICAgICAgICAgICAgaWNvbjogaWNvbih3ZWVrSWNvbiwgJ1RoaXMgd2VlayBpY29uJyksXG4gICAgICAgIH0sXG4gICAgXSxcbn07XG5cbmNvbnN0IHByb2plY3RzU2lkZWJhciA9IHtcbiAgICB0aXRsZTogJ1Byb2plY3RzJyxcbiAgICBpY29uOiBpY29uKHByb2plY3RJY29uLCAnUHJvamVjdCBJY29uJyksXG4gICAgaXRlbXM6IFtcbiAgICBdLFxuICAgIGFkZEJ1dHRvbjoge1xuICAgICAgICBpY29uOiBpY29uKGFkZEljb24sICdhZGQgcHJvamVjdCBpY29uJyksXG4gICAgICAgIGl0ZW1UaXRsZTogJ0FkZCBQcm9qZWN0JyxcbiAgICB9XG59O1xuXG5jb25zdCBwcm9qZWN0RGlzcGxheUNvbmZpZyA9IHtcbiAgICBkZXRhaWxzQnV0dG9uVGV4dDogXCJERVRBSUxTXCIsXG4gICAgdW5jaGVja2VkQnV0dG9uOiBpY29uKHVuY2hlY2tlZEJ1dHRvbiwndGFzayBpbiBwcm9ncmVzcyBpY29uJyksXG4gICAgY2hlY2tlZEJ1dHRvbjogaWNvbihjaGVja2VkQnV0dG9uLCAndGFzayBmaW5pc2hlZCBpY29uJyksXG4gICAgZGVsZXRlQnV0dG9uOiBpY29uKGRlbGV0ZUljb24sICdkZWxldGUgaWNvbicpLFxufTtcblxuY29uc3QgZm9vdGVyID0ge1xuICAgIHRleHQ6ICdEZXZlbG9wZWQgYnkgQ2FzaHRvbiBIb2xiZXJ0JyxcbiAgICBnaXRodWJMb2dvOiBpY29uKGdpdGh1YkxvZ28sICdnaXRodWJMb2dvJyksXG4gICAgZ2l0aHViTGluazogJ2h0dHBzOi8vZ2l0aHViLmNvbS9jYXNoaG9sYi90b2RvLWxpc3QnLFxufTtcblxuZXhwb3J0IHthcHBsaWNhdGlvbk5hbWUsIGhlYWRlciwgZGVmYXVsdFNpZGViYXIsIHByb2plY3REaXNwbGF5Q29uZmlnLCBwcm9qZWN0c1NpZGViYXIsIHNpZGVCYXJJdGVtLCBpY29uLCBmb290ZXJ9O1xuIiwiaW1wb3J0IHtoZWFkZXIsIGRlZmF1bHRTaWRlYmFyLCBwcm9qZWN0RGlzcGxheUNvbmZpZywgZm9vdGVyfSBmcm9tICcuL2NvbmZpZy5qcyc7XG5pbXBvcnQgeyBwcm9qZWN0IH0gZnJvbSAnLi9wcm9qZWN0LmpzJztcblxuLy8gaGVhZGVyXG5jb25zdCBjcmVhdGVIZWFkZXJFbGVtID0gKCkgPT4ge1xuICAgIGNvbnN0IGhlYWRlckVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXJFbGVtLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuXG4gICAgY29uc3QgaWNvbkVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpY29uRWxlbS5zcmMgPSBoZWFkZXIuaWNvbi5zcmM7XG4gICAgaWNvbkVsZW0uYWx0ID0gaGVhZGVyLmljb24uYWx0O1xuICAgIGhlYWRlckVsZW0uYXBwZW5kQ2hpbGQoaWNvbkVsZW0pO1xuXG4gICAgY29uc3QgdGl0bGVFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICB0aXRsZUVsZW0udGV4dENvbnRlbnQgPSBoZWFkZXIuYXBwTmFtZTtcbiAgICBoZWFkZXJFbGVtLmFwcGVuZENoaWxkKHRpdGxlRWxlbSk7XG5cbiAgICByZXR1cm4gaGVhZGVyRWxlbTtcbn07XG5cbi8vIHNpZGViYXJcbmNvbnN0IGNyZWF0ZVNpZGViYXJFbGVtID0gKGN1cnJQcm9qZWN0c1NpZGViYXIpID0+IHtcblxuICAgIGNvbnN0IHNpZGViYXJFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2lkZWJhckVsZW0uY2xhc3NMaXN0LmFkZCgnc2lkZWJhcicpO1xuXG4gICAgY29uc3QgY3JlYXRlU2lkZWJhckJ1dHRvbnNMaXN0RWxlbSA9IChpdGVtc0xpc3QpID0+IHtcblxuICAgICAgICBjb25zdCBjb250YWluZXJFbGVtID0gIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb250YWluZXJFbGVtLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXItaXRlbXMtbGlzdCcpO1xuXG4gICAgICAgIGl0ZW1zTGlzdC5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzaWRlYmFySXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgc2lkZWJhckl0ZW0uY2xhc3NMaXN0LmFkZCgnc2lkZWJhci1pdGVtJyk7XG4gICAgXG4gICAgICAgICAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICBpY29uLnNyYyA9IGl0ZW0uaWNvbi5zcmM7XG4gICAgICAgICAgICBpY29uLmFsdCA9IGl0ZW0uaWNvbi5hbHQ7XG4gICAgICAgICAgICBzaWRlYmFySXRlbS5hcHBlbmRDaGlsZChpY29uKTtcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIGl0ZW1UaXRsZS50ZXh0Q29udGVudCA9IGl0ZW0uaXRlbVRpdGxlO1xuICAgICAgICAgICAgc2lkZWJhckl0ZW0uYXBwZW5kQ2hpbGQoaXRlbVRpdGxlKTtcbiAgICBcbiAgICAgICAgICAgIGNvbnRhaW5lckVsZW0uYXBwZW5kQ2hpbGQoc2lkZWJhckl0ZW0pO1xuICAgICAgICB9KTtcbiAgICAgICAgICAgIFxuICAgICAgICByZXR1cm4gY29udGFpbmVyRWxlbTtcbiAgICB9XG5cbiAgICAvLyBkZWZhdWx0IGl0ZW1zIChJbmJveCwgVG9kYXksIGV0Yy4pXG4gICAgY29uc3QgZGVmYXVsdFNpZGViYXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkZWZhdWx0U2lkZWJhckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyLWNvbnRhaW5lcicpO1xuXG4gICAgZGVmYXVsdFNpZGViYXJDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlU2lkZWJhckJ1dHRvbnNMaXN0RWxlbShkZWZhdWx0U2lkZWJhci5pdGVtcykpO1xuICAgIHNpZGViYXJFbGVtLmFwcGVuZENoaWxkKGRlZmF1bHRTaWRlYmFyQ29udGFpbmVyKTtcblxuXG4gICAgLy8gcHJvamVjdHMgc2lkZWJhciBwb3J0aW9uXG4gICAgY29uc3QgcHJvamVjdHNTaWRlYmFyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdHNTaWRlYmFyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXItY29udGFpbmVyJyk7XG5cbiAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IGN1cnJQcm9qZWN0c1NpZGViYXIudGl0bGU7XG4gICAgcHJvamVjdHNTaWRlYmFyQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSk7XG5cbiAgICBjb25zdCBwcm9qZWN0c1NpZGViYXJJdGVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgcHJvamVjdHNTaWRlYmFyQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZVNpZGViYXJCdXR0b25zTGlzdEVsZW0oY3VyclByb2plY3RzU2lkZWJhci5pdGVtcykpO1xuICAgIHNpZGViYXJFbGVtLmFwcGVuZENoaWxkKHByb2plY3RzU2lkZWJhckNvbnRhaW5lcik7XG5cbiAgICByZXR1cm4gc2lkZWJhckVsZW07XG59O1xuXG4vLyBwcm9qZWN0IGRpc3BsYXkgY29udGVudFxuY29uc3QgY3JlYXRlUHJvamVjdERpc3BsYXlFbGVtID0gKHByb2plY3QpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0RGlzcGxheUVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0RGlzcGxheUVsZW0uY2xhc3NMaXN0LmFkZCgnZGlzcGxheWVkLWNvbnRlbnQnKTtcblxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZTtcbiAgICBwcm9qZWN0RGlzcGxheUVsZW0uYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICAgIGNvbnN0IHByb2plY3REaXNwbGF5TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3REaXNwbGF5TGlzdC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWRpc3BsYXktbGlzdCcpO1xuXG4gICAgLy8gY3JlYXRlIGRpc3BsYXllZCB0YXNrIGl0ZW1cbiAgICBmb3IgKGNvbnN0IHRhc2sgb2YgcHJvamVjdC5wcm9qZWN0VG9Eb0xpc3QpIHtcbiAgICAgICAgY29uc3QgaXRlbUVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaXRlbUVsZW0uY2xhc3NMaXN0LmFkZCgnZGlzcGxheWVkLXRhc2snKTtcblxuICAgICAgICBjb25zdCBsZWZ0U2lkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsZWZ0U2lkZS5jbGFzc0xpc3QuYWRkKCdsZWZ0Jyk7XG5cbiAgICAgICAgLy8gVE9ETzogQ0hBTkdFIEJVVFRPTiBDSEVDS0VEIE9SIFVOQ0hFQ0tFRCBERVBFTkRFTlQgT04gJ3Rhc2snIFBBUkFNXG4gICAgICAgIGNvbnN0IHN0YXR1c0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjb25zdCBzdGF0dXNJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgaWYodGFzay5jaGVja2VkKSB7XG4gICAgICAgICAgICBzdGF0dXNJbWcuc3JjID0gcHJvamVjdERpc3BsYXlDb25maWcuY2hlY2tlZEJ1dHRvbi5zcmM7XG4gICAgICAgICAgICBzdGF0dXNJbWcuYWx0ID0gcHJvamVjdERpc3BsYXlDb25maWcuY2hlY2tlZEJ1dHRvbi5hbHQ7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgc3RhdHVzSW1nLnNyYyA9IHByb2plY3REaXNwbGF5Q29uZmlnLnVuY2hlY2tlZEJ1dHRvbi5zcmM7XG4gICAgICAgICAgICBzdGF0dXNJbWcuYWx0ID0gcHJvamVjdERpc3BsYXlDb25maWcudW5jaGVja2VkQnV0dG9uLmFsdDtcbiAgICAgICAgfVxuICAgICAgICBzdGF0dXNCdXR0b24uYXBwZW5kQ2hpbGQoc3RhdHVzSW1nKTtcbiAgICAgICAgXG4gICAgICAgIHN0YXR1c0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdzdGF0dXMtYnV0dG9uJyk7XG4gICAgICAgIGxlZnRTaWRlLmFwcGVuZENoaWxkKHN0YXR1c0J1dHRvbik7XG5cbiAgICAgICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHRhc2tUaXRsZS5jbGFzc0xpc3QuYWRkKCd0YXNrLXRpdGxlJyk7XG4gICAgICAgIHRhc2tUaXRsZS50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XG4gICAgICAgIGxlZnRTaWRlLmFwcGVuZENoaWxkKHRhc2tUaXRsZSk7XG5cbiAgICAgICAgaXRlbUVsZW0uYXBwZW5kQ2hpbGQobGVmdFNpZGUpO1xuXG4gICAgICAgIGNvbnN0IHJpZ2h0U2lkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICByaWdodFNpZGUuY2xhc3NMaXN0LmFkZCgncmlnaHQnKTtcblxuICAgICAgICBjb25zdCBkZXRhaWxzQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGRldGFpbHNCdXR0b24uY2xhc3NMaXN0LmFkZCgnZGV0YWlscy1idXR0b24nKTtcbiAgICAgICAgZGV0YWlsc0J1dHRvbi50ZXh0Q29udGVudCA9IHByb2plY3REaXNwbGF5Q29uZmlnLmRldGFpbHNCdXR0b25UZXh0O1xuICAgICAgICByaWdodFNpZGUuYXBwZW5kQ2hpbGQoZGV0YWlsc0J1dHRvbik7XG5cbiAgICAgICAgY29uc3QgZGF0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBkYXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2RhdGUtYnV0dG9uJyk7XG4gICAgICAgIGRhdGVCdXR0b24udGV4dENvbnRlbnQgPSB0YXNrLmR1ZURhdGU7XG4gICAgICAgIHJpZ2h0U2lkZS5hcHBlbmRDaGlsZChkYXRlQnV0dG9uKTtcblxuICAgICAgICBjb25zdCBkZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgZGVsQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2RlbC1pY29uJyk7XG4gICAgICAgIGNvbnN0IGRlbEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBkZWxJbWcuc3JjID0gcHJvamVjdERpc3BsYXlDb25maWcuZGVsZXRlQnV0dG9uLnNyYztcbiAgICAgICAgZGVsSW1nLmFsdCA9IHByb2plY3REaXNwbGF5Q29uZmlnLmRlbGV0ZUJ1dHRvbi5hbHQ7XG4gICAgICAgIGRlbEJ1dHRvbi5hcHBlbmRDaGlsZChkZWxJbWcpO1xuICAgICAgICByaWdodFNpZGUuYXBwZW5kQ2hpbGQoZGVsQnV0dG9uKTtcbiAgICAgICAgXG4gICAgICAgIGl0ZW1FbGVtLmFwcGVuZENoaWxkKHJpZ2h0U2lkZSk7XG5cbiAgICAgICAgcHJvamVjdERpc3BsYXlMaXN0LmFwcGVuZENoaWxkKGl0ZW1FbGVtKTtcbiAgICB9XG5cbiAgICBwcm9qZWN0RGlzcGxheUVsZW0uYXBwZW5kQ2hpbGQocHJvamVjdERpc3BsYXlMaXN0KTtcblxuICAgIHJldHVybiBwcm9qZWN0RGlzcGxheUVsZW07XG59O1xuXG4vLyBmb290ZXJcbmNvbnN0IGNyZWF0ZUZvb3RlckVsZW0gPSAoKSA9PiB7XG5cbiAgICBjb25zdCBmb290ZXJFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAvLyB0ZXh0XG4gICAgZm9vdGVyRWxlbS5jbGFzc0xpc3QuYWRkKCdmb290ZXInKTtcbiAgICBjb25zdCBmb290ZXJDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGZvb3RlckNvbnRlbnQudGV4dENvbnRlbnQgPSAnRGV2ZWxvcGVkIGJ5IENhc2h0b24gSG9sYmVydCc7XG4gICAgZm9vdGVyRWxlbS5hcHBlbmRDaGlsZChmb290ZXJDb250ZW50KTtcblxuICAgIC8vIGdpdGh1YiBsb2dvXG4gICAgY29uc3QgZ2l0aHViTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBnaXRodWJMaW5rLmhyZWYgPSBmb290ZXIuZ2l0aHViTGluaztcbiAgICBjb25zdCBnaXRodWJJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGdpdGh1YkltYWdlLnNyYyA9IGZvb3Rlci5naXRodWJMb2dvLnNyYztcbiAgICBnaXRodWJJbWFnZS5hbHQgPSBmb290ZXIuZ2l0aHViTG9nby5hbHQ7XG4gICAgZ2l0aHViTGluay5hcHBlbmRDaGlsZChnaXRodWJJbWFnZSk7XG4gICAgZm9vdGVyRWxlbS5hcHBlbmRDaGlsZChnaXRodWJMaW5rKTtcblxuICAgIHJldHVybiBmb290ZXJFbGVtO1xufTtcblxuZXhwb3J0IHtjcmVhdGVIZWFkZXJFbGVtLCBjcmVhdGVTaWRlYmFyRWxlbSwgY3JlYXRlUHJvamVjdERpc3BsYXlFbGVtLCBjcmVhdGVGb290ZXJFbGVtfTsiLCJjb25zdCBwcm9qZWN0ID0gKHRpdGxlKSA9PiB7XG5cbiAgICBsZXQgcHJvamVjdFRvRG9MaXN0ID0gW107XG4gICAgXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICBwcm9qZWN0VG9Eb0xpc3Q6IHByb2plY3RUb0RvTGlzdCxcbiAgICAgICAgYWRkKHRvZG9JdGVtKSB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMucHJvamVjdFRvRG9MaXN0LmluZGV4T2YodG9kb0l0ZW0pO1xuICAgICAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvamVjdFRvRG9MaXN0LnB1c2godG9kb0l0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICByZW1vdmUodG9kb0l0ZW0pIHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5wcm9qZWN0VG9Eb0xpc3QuaW5kZXhPZih0b2RvSXRlbSk7XG4gICAgICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9qZWN0VG9Eb0xpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IHtwcm9qZWN0fTsiLCJcbmNvbnN0IHRvZG9JdGVtID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpID0+IHtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcbiAgICAgICAgZHVlRGF0ZTogZHVlRGF0ZSxcbiAgICAgICAgcHJpb3JpdHk6IHByaW9yaXR5LFxuICAgIH07XG59O1xuXG5leHBvcnQge3RvZG9JdGVtfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5pbXBvcnQgeyBwcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IHsgdG9kb0l0ZW0gfSBmcm9tIFwiLi90b2RvXCI7XG5pbXBvcnQgeyBwcm9qZWN0c1NpZGViYXIsIGljb24sIHNpZGVCYXJJdGVtLCBwcm9qZWN0RGlzcGxheX0gZnJvbSBcIi4vY29uZmlnXCI7XG5pbXBvcnQgeyBjcmVhdGVIZWFkZXJFbGVtLCBjcmVhdGVTaWRlYmFyRWxlbSwgY3JlYXRlUHJvamVjdERpc3BsYXlFbGVtLCBjcmVhdGVGb290ZXJFbGVtIH0gZnJvbSBcIi4vY29udGVudFwiO1xuXG4vLyBjcmVhdGUgYXBwIGNvbnRhaW5lclxuY29uc3QgQ09OVEVOVF9FTEVNID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5DT05URU5UX0VMRU0uY2xhc3NMaXN0LmFkZCgnY29udGVudCcpO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmFwcGVuZENoaWxkKENPTlRFTlRfRUxFTSk7XG5cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gVFJZIFRPIExPQUQgTE9DQUwgU1RPUkFHRVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyB0ZW1wIHByb2plY3Qgc3RvcmFnZVxuXG5jb25zdCBwcm9qZWN0QSA9IHByb2plY3QoJ0NsZWFuIFJvb20nKTtcblxucHJvamVjdEEuYWRkKHRvZG9JdGVtKFxuICAgICdwaWNrIHVwIGNsb3RoZXMnLFxuICAgICd1c2UgeW91ciBoYW5kcywgdG9zcyB0aGVtIGluIHRoZSB3YXNoJyxcbiAgICAnNS8xMC8yNCcsXG4gICAgJ2xvdycsXG4pKTtcblxucHJvamVjdEEuYWRkKHRvZG9JdGVtKFxuICAgICdvcmdhbml6ZSBkcmVzc2VyJyxcbiAgICAndGhyb3cgb3V0IGp1bmsgZnJvbSBqdW5rIGRyYXdlcicsXG4gICAgJzUvMTUvMjQnLFxuICAgICdtZWRpdW0nLFxuKSk7XG5cbmNvbnN0IHByb2plY3RCID0gcHJvamVjdCgnVG91Y2ggR3Jhc3MnKTtcblxuY29uc3QgcHJvamVjdHMgPSBbcHJvamVjdEEsIHByb2plY3RCXTtcblxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIERPIFRIRSBET00gU1RVRkZcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuY29uc3QgdXBkYXRlUHJvamVjdFNpZGVCYXIgPSAocHJvamVjdExpc3QpID0+IHtcbiAgICBsZXQgcHJvamVjdFNpZGVCYXJMaXN0ID0gW107XG4gICAgcHJvamVjdExpc3QuZm9yRWFjaCgocHJvamVjdCkgPT4gcHJvamVjdFNpZGVCYXJMaXN0LnB1c2goc2lkZUJhckl0ZW0ocHJvamVjdC50aXRsZSwgcHJvamVjdHNTaWRlYmFyLmljb24pKSk7XG4gICAgcHJvamVjdHNTaWRlYmFyLml0ZW1zID0gcHJvamVjdFNpZGVCYXJMaXN0O1xufVxuXG51cGRhdGVQcm9qZWN0U2lkZUJhcihwcm9qZWN0cyk7XG5cbmNvbnN0IHVwZGF0ZVByb2plY3REaXNwbGF5ID0gKHByb2plY3QpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlzcGxheWVkLWNvbnRlbnQnKS5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGNyZWF0ZVByb2plY3REaXNwbGF5RWxlbShwcm9qZWN0QSk7XG59XG5cbkNPTlRFTlRfRUxFTS5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXJFbGVtKCkpO1xuQ09OVEVOVF9FTEVNLmFwcGVuZENoaWxkKGNyZWF0ZVNpZGViYXJFbGVtKHByb2plY3RzU2lkZWJhcikpO1xuQ09OVEVOVF9FTEVNLmFwcGVuZENoaWxkKGNyZWF0ZVByb2plY3REaXNwbGF5RWxlbShwcm9qZWN0QSkpO1xuQ09OVEVOVF9FTEVNLmFwcGVuZENoaWxkKGNyZWF0ZUZvb3RlckVsZW0oKSk7XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==