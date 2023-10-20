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
    gap: 15px;
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
    height: 20px;
    width: 20px;
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

.status-button {
    padding: 10px;
    border: solid;
    border-radius: 70%;
}



.footer {
    grid-area: footer;

    background: var(--main-color);
    color: white;

    display: flex;
    justify-content: center;
    align-items: center;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":";AACA;IACI,iBAAiB;IACjB,mBAAmB;AACvB;;AAEA;IACI,UAAU;IACV,SAAS;;IAET,iCAAiC;AACrC;;AAEA;IACI,UAAU;IACV,YAAY;IACZ,aAAa;IACb,cAAc;IACd,6BAA6B;IAC7B,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,YAAY;;IAEZ,aAAa;IACb,8BAA8B;IAC9B,iCAAiC;;IAEjC;;;uBAGmB;AACvB;;;;AAIA;IACI,iBAAiB;IACjB,aAAa;IACb,YAAY;;IAEZ,mCAAmC;IACnC,aAAa;IACb,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,YAAY;IACZ,WAAW;AACf;;;;AAIA;IACI,kBAAkB;IAClB,mBAAmB;IACnB,+BAA+B;IAC/B,aAAa;;IAEb,qBAAqB;;IAErB,aAAa;IACb,sBAAsB;IACtB,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;;IAElB,aAAa;IACb,mBAAmB;IACnB,SAAS;;AAEb;;AAEA;IACI,YAAY;IACZ,WAAW;AACf;;;;AAIA;IACI,4BAA4B;IAC5B,iBAAiB;IACjB,mBAAmB;IACnB,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,8BAA8B;;IAE9B;;QAEI,aAAa;QACb,SAAS;IACb;AACJ;;AAEA;IACI,aAAa;IACb,aAAa;IACb,kBAAkB;AACtB;;;;AAIA;IACI,iBAAiB;;IAEjB,6BAA6B;IAC7B,YAAY;;IAEZ,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB","sourcesContent":["\n:root {\n    --font-size: 20px;\n    --main-color: black;\n}\n\nbody {\n    padding: 0;\n    margin: 0;\n\n    font-family: 'Roboto', sans-serif;\n}\n\nbutton {\n    padding: 0; \n    border: none;\n    font: inherit;\n    color: inherit; \n    background-color: transparent; \n    cursor: pointer;\n}\n\n.content {\n    height: 100vh;\n    width: 100vw;\n\n    display: grid;\n    grid-template-columns: 1fr 5fr;\n    grid-template-rows: auto 1fr auto;\n\n    grid-template-areas: \n        \"header header\"\n        \"sidebar displayed-content\"\n        \"footer footer\";\n}\n\n\n\n.header {\n    grid-area: header;\n    padding: 15px;\n    color: white;\n\n    background-color: var(--main-color);\n    display: flex;\n    align-items: center;\n    gap: 15px;\n}\n\n.header img {\n    height: 48px;\n    width: 48px;\n}\n\n\n\n.sidebar {\n    grid-area: sidebar;\n    border-right: solid;\n    border-color: var(--main-color);\n    padding: 10px;\n\n    justify-self: stretch;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: start;\n    gap: 15px;\n}\n\n.sidebar-container {\n    padding-left: 25px;\n}\n\n.sidebar-item {\n    align-self: center;\n\n    display: flex;\n    align-items: center;\n    gap: 10px;\n\n}\n\n.sidebar-item img {\n    height: 20px;\n    width: 20px;\n}\n\n\n\n.displayed-content {\n    grid-area: displayed-content;\n    padding-top: 50px;\n    padding-left: 200px;\n    padding-right: 200px;\n}\n\n.project-display-list {\n    display: flex;\n    flex-direction: column;\n    gap: 25px;\n}\n\n.displayed-task {\n    display: flex;\n    justify-content: space-between;\n\n    .left,\n    .right {\n        display: flex;\n        gap: 15px;\n    }\n}\n\n.status-button {\n    padding: 10px;\n    border: solid;\n    border-radius: 70%;\n}\n\n\n\n.footer {\n    grid-area: footer;\n\n    background: var(--main-color);\n    color: white;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _assets_icons_inbox_FILL0_wght400_GRAD0_opsz24_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/icons/inbox_FILL0_wght400_GRAD0_opsz24.png */ "./src/assets/icons/inbox_FILL0_wght400_GRAD0_opsz24.png");
/* harmony import */ var _assets_icons_today_FILL0_wght400_GRAD0_opsz24_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/icons/today_FILL0_wght400_GRAD0_opsz24.png */ "./src/assets/icons/today_FILL0_wght400_GRAD0_opsz24.png");
/* harmony import */ var _assets_icons_date_range_FILL0_wght400_GRAD0_opsz24_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/icons/date_range_FILL0_wght400_GRAD0_opsz24.png */ "./src/assets/icons/date_range_FILL0_wght400_GRAD0_opsz24.png");
/* harmony import */ var _assets_icons_checklist_FILL0_wght400_GRAD0_opsz24_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/icons/checklist_FILL0_wght400_GRAD0_opsz24.png */ "./src/assets/icons/checklist_FILL0_wght400_GRAD0_opsz24.png");
/* harmony import */ var _assets_icons_delete_FILL0_wght400_GRAD0_opsz24_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/icons/delete_FILL0_wght400_GRAD0_opsz24.png */ "./src/assets/icons/delete_FILL0_wght400_GRAD0_opsz24.png");
/* harmony import */ var _assets_icons_add_FILL0_wght400_GRAD0_opsz24_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/icons/add_FILL0_wght400_GRAD0_opsz24.png */ "./src/assets/icons/add_FILL0_wght400_GRAD0_opsz24.png");
/* harmony import */ var _assets_icons_output_onlinepngtools_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/icons/output-onlinepngtools.png */ "./src/assets/icons/output-onlinepngtools.png");









const applicationName = 'Todo List App';

const icon = (src, alt) => (
     {src: src, alt: alt}
);

const sideBarItem = (itemTitle, icon) => (
    {itemTitle: itemTitle, icon: icon}
); 

const header = {
    appName: applicationName,
    icon: icon(_assets_icons_output_onlinepngtools_png__WEBPACK_IMPORTED_MODULE_7__, 'logo icon'),
};

const defaultSidebar = {
    items: [
        {
            itemTitle: 'Inbox',
            icon: icon(_assets_icons_inbox_FILL0_wght400_GRAD0_opsz24_png__WEBPACK_IMPORTED_MODULE_1__, 'Inbox Icon'),
        },
        {
            itemTitle: 'Today',
            icon: icon(_assets_icons_today_FILL0_wght400_GRAD0_opsz24_png__WEBPACK_IMPORTED_MODULE_2__, 'Today Icon'),
        },
        {
            itemTitle: 'This Week',
            icon: icon(_assets_icons_date_range_FILL0_wght400_GRAD0_opsz24_png__WEBPACK_IMPORTED_MODULE_3__, 'This week icon'),
        },
    ],
};

const projectsSidebar = {
    title: 'Projects',
    icon: icon(_assets_icons_checklist_FILL0_wght400_GRAD0_opsz24_png__WEBPACK_IMPORTED_MODULE_4__, 'Project Icon'),
    items: [
    ],
    addButton: {
        icon: icon(_assets_icons_add_FILL0_wght400_GRAD0_opsz24_png__WEBPACK_IMPORTED_MODULE_6__, 'add project icon'),
        itemTitle: 'Add Project',
    }
};

const projectDisplayConfig = {
    detailsButtonText: "DETAILS",
    deleteButton: icon(_assets_icons_delete_FILL0_wght400_GRAD0_opsz24_png__WEBPACK_IMPORTED_MODULE_5__, 'delete icon'),
};

const footer = {
    text: 'Developed by Cashton Holbert',
    githubLogo: icon('', ''),
    githubLink: '',
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

        const delButton = document.createElement('img');
        delButton.classList.add('del-icon');
        delButton.src = _config_js__WEBPACK_IMPORTED_MODULE_0__.projectDisplayConfig.deleteButton.src;
        delButton.alt = _config_js__WEBPACK_IMPORTED_MODULE_0__.projectDisplayConfig.deleteButton.alt;
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

/***/ "./src/assets/icons/add_FILL0_wght400_GRAD0_opsz24.png":
/*!*************************************************************!*\
  !*** ./src/assets/icons/add_FILL0_wght400_GRAD0_opsz24.png ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c2287512b2fb76fdf8be.png";

/***/ }),

/***/ "./src/assets/icons/checklist_FILL0_wght400_GRAD0_opsz24.png":
/*!*******************************************************************!*\
  !*** ./src/assets/icons/checklist_FILL0_wght400_GRAD0_opsz24.png ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c64ba5a73792cd152cc4.png";

/***/ }),

/***/ "./src/assets/icons/date_range_FILL0_wght400_GRAD0_opsz24.png":
/*!********************************************************************!*\
  !*** ./src/assets/icons/date_range_FILL0_wght400_GRAD0_opsz24.png ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6fb80ea1e6ff61b75e8f.png";

/***/ }),

/***/ "./src/assets/icons/delete_FILL0_wght400_GRAD0_opsz24.png":
/*!****************************************************************!*\
  !*** ./src/assets/icons/delete_FILL0_wght400_GRAD0_opsz24.png ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b183da5a4488121637c3.png";

/***/ }),

/***/ "./src/assets/icons/inbox_FILL0_wght400_GRAD0_opsz24.png":
/*!***************************************************************!*\
  !*** ./src/assets/icons/inbox_FILL0_wght400_GRAD0_opsz24.png ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6fc30cfaaca258dae83d.png";

/***/ }),

/***/ "./src/assets/icons/output-onlinepngtools.png":
/*!****************************************************!*\
  !*** ./src/assets/icons/output-onlinepngtools.png ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "95bbc5a152ac2d476b47.png";

/***/ }),

/***/ "./src/assets/icons/today_FILL0_wght400_GRAD0_opsz24.png":
/*!***************************************************************!*\
  !*** ./src/assets/icons/today_FILL0_wght400_GRAD0_opsz24.png ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "88b7a377caa84721c804.png";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSSxrRUFBd0I7QUFDNUI7O0FBRUEseUJBQXlCLDBEQUFnQjtBQUN6Qyx5QkFBeUIsMkRBQWlCLENBQUMsb0RBQWU7QUFDMUQseUJBQXlCLGtFQUF3QjtBQUNqRCx5QkFBeUIsMERBQWdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb25maWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgXG46cm9vdCB7XG4gICAgLS1mb250LXNpemU6IDIwcHg7XG4gICAgLS1tYWluLWNvbG9yOiBibGFjaztcbn1cblxuYm9keSB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG5cbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG59XG5cbmJ1dHRvbiB7XG4gICAgcGFkZGluZzogMDsgXG4gICAgYm9yZGVyOiBub25lO1xuICAgIGZvbnQ6IGluaGVyaXQ7XG4gICAgY29sb3I6IGluaGVyaXQ7IFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyBcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jb250ZW50IHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAxMDB2dztcblxuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnIgYXV0bztcblxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxuICAgICAgICBcImhlYWRlciBoZWFkZXJcIlxuICAgICAgICBcInNpZGViYXIgZGlzcGxheWVkLWNvbnRlbnRcIlxuICAgICAgICBcImZvb3RlciBmb290ZXJcIjtcbn1cblxuXG5cbi5oZWFkZXIge1xuICAgIGdyaWQtYXJlYTogaGVhZGVyO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTVweDtcbn1cblxuLmhlYWRlciBpbWcge1xuICAgIGhlaWdodDogNDhweDtcbiAgICB3aWR0aDogNDhweDtcbn1cblxuXG5cbi5zaWRlYmFyIHtcbiAgICBncmlkLWFyZWE6IHNpZGViYXI7XG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZDtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xuICAgIHBhZGRpbmc6IDEwcHg7XG5cbiAgICBqdXN0aWZ5LXNlbGY6IHN0cmV0Y2g7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgICBnYXA6IDE1cHg7XG59XG5cbi5zaWRlYmFyLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xufVxuXG4uc2lkZWJhci1pdGVtIHtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxMHB4O1xuXG59XG5cbi5zaWRlYmFyLWl0ZW0gaW1nIHtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgd2lkdGg6IDIwcHg7XG59XG5cblxuXG4uZGlzcGxheWVkLWNvbnRlbnQge1xuICAgIGdyaWQtYXJlYTogZGlzcGxheWVkLWNvbnRlbnQ7XG4gICAgcGFkZGluZy10b3A6IDUwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAyMDBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMDBweDtcbn1cblxuLnByb2plY3QtZGlzcGxheS1saXN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAyNXB4O1xufVxuXG4uZGlzcGxheWVkLXRhc2sge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgLmxlZnQsXG4gICAgLnJpZ2h0IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZ2FwOiAxNXB4O1xuICAgIH1cbn1cblxuLnN0YXR1cy1idXR0b24ge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyOiBzb2xpZDtcbiAgICBib3JkZXItcmFkaXVzOiA3MCU7XG59XG5cblxuXG4uZm9vdGVyIHtcbiAgICBncmlkLWFyZWE6IGZvb3RlcjtcblxuICAgIGJhY2tncm91bmQ6IHZhcigtLW1haW4tY29sb3IpO1xuICAgIGNvbG9yOiB3aGl0ZTtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixTQUFTOztJQUVULGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osYUFBYTtJQUNiLGNBQWM7SUFDZCw2QkFBNkI7SUFDN0IsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZOztJQUVaLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsaUNBQWlDOztJQUVqQzs7O3VCQUdtQjtBQUN2Qjs7OztBQUlBO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixZQUFZOztJQUVaLG1DQUFtQztJQUNuQyxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7Ozs7QUFJQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsK0JBQStCO0lBQy9CLGFBQWE7O0lBRWIscUJBQXFCOztJQUVyQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7O0lBRWxCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsU0FBUzs7QUFFYjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7Ozs7QUFJQTtJQUNJLDRCQUE0QjtJQUM1QixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4Qjs7SUFFOUI7O1FBRUksYUFBYTtRQUNiLFNBQVM7SUFDYjtBQUNKOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7Ozs7QUFJQTtJQUNJLGlCQUFpQjs7SUFFakIsNkJBQTZCO0lBQzdCLFlBQVk7O0lBRVosYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuOnJvb3Qge1xcbiAgICAtLWZvbnQtc2l6ZTogMjBweDtcXG4gICAgLS1tYWluLWNvbG9yOiBibGFjaztcXG59XFxuXFxuYm9keSB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG5cXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBwYWRkaW5nOiAwOyBcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250OiBpbmhlcml0O1xcbiAgICBjb2xvcjogaW5oZXJpdDsgXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyBcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIGF1dG87XFxuXFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgICAgICAgXFxcImhlYWRlciBoZWFkZXJcXFwiXFxuICAgICAgICBcXFwic2lkZWJhciBkaXNwbGF5ZWQtY29udGVudFxcXCJcXG4gICAgICAgIFxcXCJmb290ZXIgZm9vdGVyXFxcIjtcXG59XFxuXFxuXFxuXFxuLmhlYWRlciB7XFxuICAgIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDE1cHg7XFxufVxcblxcbi5oZWFkZXIgaW1nIHtcXG4gICAgaGVpZ2h0OiA0OHB4O1xcbiAgICB3aWR0aDogNDhweDtcXG59XFxuXFxuXFxuXFxuLnNpZGViYXIge1xcbiAgICBncmlkLWFyZWE6IHNpZGViYXI7XFxuICAgIGJvcmRlci1yaWdodDogc29saWQ7XFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuXFxuICAgIGp1c3RpZnktc2VsZjogc3RyZXRjaDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgZ2FwOiAxNXB4O1xcbn1cXG5cXG4uc2lkZWJhci1jb250YWluZXIge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XFxufVxcblxcbi5zaWRlYmFyLWl0ZW0ge1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG5cXG59XFxuXFxuLnNpZGViYXItaXRlbSBpbWcge1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIHdpZHRoOiAyMHB4O1xcbn1cXG5cXG5cXG5cXG4uZGlzcGxheWVkLWNvbnRlbnQge1xcbiAgICBncmlkLWFyZWE6IGRpc3BsYXllZC1jb250ZW50O1xcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAyMDBweDtcXG4gICAgcGFkZGluZy1yaWdodDogMjAwcHg7XFxufVxcblxcbi5wcm9qZWN0LWRpc3BsYXktbGlzdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMjVweDtcXG59XFxuXFxuLmRpc3BsYXllZC10YXNrIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcbiAgICAubGVmdCxcXG4gICAgLnJpZ2h0IHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBnYXA6IDE1cHg7XFxuICAgIH1cXG59XFxuXFxuLnN0YXR1cy1idXR0b24ge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXI6IHNvbGlkO1xcbiAgICBib3JkZXItcmFkaXVzOiA3MCU7XFxufVxcblxcblxcblxcbi5mb290ZXIge1xcbiAgICBncmlkLWFyZWE6IGZvb3RlcjtcXG5cXG4gICAgYmFja2dyb3VuZDogdmFyKC0tbWFpbi1jb2xvcik7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBwcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IGluYm94SWNvbiBmcm9tIFwiLi9hc3NldHMvaWNvbnMvaW5ib3hfRklMTDBfd2dodDQwMF9HUkFEMF9vcHN6MjQucG5nXCJcbmltcG9ydCB0b2RheUljb24gZnJvbSBcIi4vYXNzZXRzL2ljb25zL3RvZGF5X0ZJTEwwX3dnaHQ0MDBfR1JBRDBfb3BzejI0LnBuZ1wiXG5pbXBvcnQgd2Vla0ljb24gZnJvbSBcIi4vYXNzZXRzL2ljb25zL2RhdGVfcmFuZ2VfRklMTDBfd2dodDQwMF9HUkFEMF9vcHN6MjQucG5nXCJcbmltcG9ydCBwcm9qZWN0SWNvbiBmcm9tIFwiLi9hc3NldHMvaWNvbnMvY2hlY2tsaXN0X0ZJTEwwX3dnaHQ0MDBfR1JBRDBfb3BzejI0LnBuZ1wiXG5pbXBvcnQgZGVsZXRlSWNvbiBmcm9tIFwiLi9hc3NldHMvaWNvbnMvZGVsZXRlX0ZJTEwwX3dnaHQ0MDBfR1JBRDBfb3BzejI0LnBuZ1wiXG5pbXBvcnQgYWRkSWNvbiBmcm9tIFwiLi9hc3NldHMvaWNvbnMvYWRkX0ZJTEwwX3dnaHQ0MDBfR1JBRDBfb3BzejI0LnBuZ1wiXG5pbXBvcnQgbG9nb0ljb24gZnJvbSBcIi4vYXNzZXRzL2ljb25zL291dHB1dC1vbmxpbmVwbmd0b29scy5wbmdcIlxuXG5jb25zdCBhcHBsaWNhdGlvbk5hbWUgPSAnVG9kbyBMaXN0IEFwcCc7XG5cbmNvbnN0IGljb24gPSAoc3JjLCBhbHQpID0+IChcbiAgICAge3NyYzogc3JjLCBhbHQ6IGFsdH1cbik7XG5cbmNvbnN0IHNpZGVCYXJJdGVtID0gKGl0ZW1UaXRsZSwgaWNvbikgPT4gKFxuICAgIHtpdGVtVGl0bGU6IGl0ZW1UaXRsZSwgaWNvbjogaWNvbn1cbik7IFxuXG5jb25zdCBoZWFkZXIgPSB7XG4gICAgYXBwTmFtZTogYXBwbGljYXRpb25OYW1lLFxuICAgIGljb246IGljb24obG9nb0ljb24sICdsb2dvIGljb24nKSxcbn07XG5cbmNvbnN0IGRlZmF1bHRTaWRlYmFyID0ge1xuICAgIGl0ZW1zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGl0ZW1UaXRsZTogJ0luYm94JyxcbiAgICAgICAgICAgIGljb246IGljb24oaW5ib3hJY29uLCAnSW5ib3ggSWNvbicpLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpdGVtVGl0bGU6ICdUb2RheScsXG4gICAgICAgICAgICBpY29uOiBpY29uKHRvZGF5SWNvbiwgJ1RvZGF5IEljb24nKSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaXRlbVRpdGxlOiAnVGhpcyBXZWVrJyxcbiAgICAgICAgICAgIGljb246IGljb24od2Vla0ljb24sICdUaGlzIHdlZWsgaWNvbicpLFxuICAgICAgICB9LFxuICAgIF0sXG59O1xuXG5jb25zdCBwcm9qZWN0c1NpZGViYXIgPSB7XG4gICAgdGl0bGU6ICdQcm9qZWN0cycsXG4gICAgaWNvbjogaWNvbihwcm9qZWN0SWNvbiwgJ1Byb2plY3QgSWNvbicpLFxuICAgIGl0ZW1zOiBbXG4gICAgXSxcbiAgICBhZGRCdXR0b246IHtcbiAgICAgICAgaWNvbjogaWNvbihhZGRJY29uLCAnYWRkIHByb2plY3QgaWNvbicpLFxuICAgICAgICBpdGVtVGl0bGU6ICdBZGQgUHJvamVjdCcsXG4gICAgfVxufTtcblxuY29uc3QgcHJvamVjdERpc3BsYXlDb25maWcgPSB7XG4gICAgZGV0YWlsc0J1dHRvblRleHQ6IFwiREVUQUlMU1wiLFxuICAgIGRlbGV0ZUJ1dHRvbjogaWNvbihkZWxldGVJY29uLCAnZGVsZXRlIGljb24nKSxcbn07XG5cbmNvbnN0IGZvb3RlciA9IHtcbiAgICB0ZXh0OiAnRGV2ZWxvcGVkIGJ5IENhc2h0b24gSG9sYmVydCcsXG4gICAgZ2l0aHViTG9nbzogaWNvbignJywgJycpLFxuICAgIGdpdGh1Ykxpbms6ICcnLFxufTtcblxuZXhwb3J0IHthcHBsaWNhdGlvbk5hbWUsIGhlYWRlciwgZGVmYXVsdFNpZGViYXIsIHByb2plY3REaXNwbGF5Q29uZmlnLCBwcm9qZWN0c1NpZGViYXIsIHNpZGVCYXJJdGVtLCBpY29uLCBmb290ZXJ9OyIsImltcG9ydCB7aGVhZGVyLCBkZWZhdWx0U2lkZWJhciwgcHJvamVjdERpc3BsYXlDb25maWcsIGZvb3Rlcn0gZnJvbSAnLi9jb25maWcuanMnO1xuaW1wb3J0IHsgcHJvamVjdCB9IGZyb20gJy4vcHJvamVjdC5qcyc7XG5cbi8vIGhlYWRlclxuY29uc3QgY3JlYXRlSGVhZGVyRWxlbSA9ICgpID0+IHtcbiAgICBjb25zdCBoZWFkZXJFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGVyRWxlbS5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcblxuICAgIGNvbnN0IGljb25FbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaWNvbkVsZW0uc3JjID0gaGVhZGVyLmljb24uc3JjO1xuICAgIGljb25FbGVtLmFsdCA9IGhlYWRlci5pY29uLmFsdDtcbiAgICBoZWFkZXJFbGVtLmFwcGVuZENoaWxkKGljb25FbGVtKTtcblxuICAgIGNvbnN0IHRpdGxlRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgdGl0bGVFbGVtLnRleHRDb250ZW50ID0gaGVhZGVyLmFwcE5hbWU7XG4gICAgaGVhZGVyRWxlbS5hcHBlbmRDaGlsZCh0aXRsZUVsZW0pO1xuXG4gICAgcmV0dXJuIGhlYWRlckVsZW07XG59O1xuXG4vLyBzaWRlYmFyXG5jb25zdCBjcmVhdGVTaWRlYmFyRWxlbSA9IChjdXJyUHJvamVjdHNTaWRlYmFyKSA9PiB7XG5cbiAgICBjb25zdCBzaWRlYmFyRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNpZGViYXJFbGVtLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXInKTtcblxuICAgIGNvbnN0IGNyZWF0ZVNpZGViYXJCdXR0b25zTGlzdEVsZW0gPSAoaXRlbXNMaXN0KSA9PiB7XG5cbiAgICAgICAgY29uc3QgY29udGFpbmVyRWxlbSA9ICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29udGFpbmVyRWxlbS5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyLWl0ZW1zLWxpc3QnKTtcblxuICAgICAgICBpdGVtc0xpc3QuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2lkZWJhckl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIHNpZGViYXJJdGVtLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXItaXRlbScpO1xuICAgIFxuICAgICAgICAgICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgaWNvbi5zcmMgPSBpdGVtLmljb24uc3JjO1xuICAgICAgICAgICAgaWNvbi5hbHQgPSBpdGVtLmljb24uYWx0O1xuICAgICAgICAgICAgc2lkZWJhckl0ZW0uYXBwZW5kQ2hpbGQoaWNvbik7XG4gICAgXG4gICAgICAgICAgICBjb25zdCBpdGVtVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBpdGVtVGl0bGUudGV4dENvbnRlbnQgPSBpdGVtLml0ZW1UaXRsZTtcbiAgICAgICAgICAgIHNpZGViYXJJdGVtLmFwcGVuZENoaWxkKGl0ZW1UaXRsZSk7XG4gICAgXG4gICAgICAgICAgICBjb250YWluZXJFbGVtLmFwcGVuZENoaWxkKHNpZGViYXJJdGVtKTtcbiAgICAgICAgfSk7XG4gICAgICAgICAgICBcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lckVsZW07XG4gICAgfVxuXG4gICAgLy8gZGVmYXVsdCBpdGVtcyAoSW5ib3gsIFRvZGF5LCBldGMuKVxuICAgIGNvbnN0IGRlZmF1bHRTaWRlYmFyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGVmYXVsdFNpZGViYXJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2lkZWJhci1jb250YWluZXInKTtcblxuICAgIGRlZmF1bHRTaWRlYmFyQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZVNpZGViYXJCdXR0b25zTGlzdEVsZW0oZGVmYXVsdFNpZGViYXIuaXRlbXMpKTtcbiAgICBzaWRlYmFyRWxlbS5hcHBlbmRDaGlsZChkZWZhdWx0U2lkZWJhckNvbnRhaW5lcik7XG5cblxuICAgIC8vIHByb2plY3RzIHNpZGViYXIgcG9ydGlvblxuICAgIGNvbnN0IHByb2plY3RzU2lkZWJhckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3RzU2lkZWJhckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyLWNvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBjdXJyUHJvamVjdHNTaWRlYmFyLnRpdGxlO1xuICAgIHByb2plY3RzU2lkZWJhckNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpO1xuXG4gICAgY29uc3QgcHJvamVjdHNTaWRlYmFySXRlbXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIHByb2plY3RzU2lkZWJhckNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVTaWRlYmFyQnV0dG9uc0xpc3RFbGVtKGN1cnJQcm9qZWN0c1NpZGViYXIuaXRlbXMpKTtcbiAgICBzaWRlYmFyRWxlbS5hcHBlbmRDaGlsZChwcm9qZWN0c1NpZGViYXJDb250YWluZXIpO1xuXG4gICAgcmV0dXJuIHNpZGViYXJFbGVtO1xufTtcblxuLy8gcHJvamVjdCBkaXNwbGF5IGNvbnRlbnRcbmNvbnN0IGNyZWF0ZVByb2plY3REaXNwbGF5RWxlbSA9IChwcm9qZWN0KSA9PiB7XG4gICAgY29uc3QgcHJvamVjdERpc3BsYXlFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdERpc3BsYXlFbGVtLmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXllZC1jb250ZW50Jyk7XG5cbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGhlYWRlci50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XG4gICAgcHJvamVjdERpc3BsYXlFbGVtLmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbiAgICBjb25zdCBwcm9qZWN0RGlzcGxheUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0RGlzcGxheUxpc3QuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1kaXNwbGF5LWxpc3QnKTtcblxuICAgIC8vIGNyZWF0ZSBkaXNwbGF5ZWQgdGFzayBpdGVtXG4gICAgZm9yIChjb25zdCB0YXNrIG9mIHByb2plY3QucHJvamVjdFRvRG9MaXN0KSB7XG4gICAgICAgIGNvbnN0IGl0ZW1FbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGl0ZW1FbGVtLmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXllZC10YXNrJyk7XG5cbiAgICAgICAgY29uc3QgbGVmdFNpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbGVmdFNpZGUuY2xhc3NMaXN0LmFkZCgnbGVmdCcpO1xuXG4gICAgICAgIC8vIFRPRE86IENIQU5HRSBCVVRUT04gQ0hFQ0tFRCBPUiBVTkNIRUNLRUQgREVQRU5ERU5UIE9OICd0YXNrJyBQQVJBTVxuICAgICAgICBjb25zdCBzdGF0dXNCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgc3RhdHVzQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3N0YXR1cy1idXR0b24nKTtcbiAgICAgICAgbGVmdFNpZGUuYXBwZW5kQ2hpbGQoc3RhdHVzQnV0dG9uKTtcblxuICAgICAgICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgdGFza1RpdGxlLmNsYXNzTGlzdC5hZGQoJ3Rhc2stdGl0bGUnKTtcbiAgICAgICAgdGFza1RpdGxlLnRleHRDb250ZW50ID0gdGFzay50aXRsZTtcbiAgICAgICAgbGVmdFNpZGUuYXBwZW5kQ2hpbGQodGFza1RpdGxlKTtcblxuICAgICAgICBpdGVtRWxlbS5hcHBlbmRDaGlsZChsZWZ0U2lkZSk7XG5cbiAgICAgICAgY29uc3QgcmlnaHRTaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHJpZ2h0U2lkZS5jbGFzc0xpc3QuYWRkKCdyaWdodCcpO1xuXG4gICAgICAgIGNvbnN0IGRldGFpbHNCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgZGV0YWlsc0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdkZXRhaWxzLWJ1dHRvbicpO1xuICAgICAgICBkZXRhaWxzQnV0dG9uLnRleHRDb250ZW50ID0gcHJvamVjdERpc3BsYXlDb25maWcuZGV0YWlsc0J1dHRvblRleHQ7XG4gICAgICAgIHJpZ2h0U2lkZS5hcHBlbmRDaGlsZChkZXRhaWxzQnV0dG9uKTtcblxuICAgICAgICBjb25zdCBkYXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGRhdGVCdXR0b24uY2xhc3NMaXN0LmFkZCgnZGF0ZS1idXR0b24nKTtcbiAgICAgICAgZGF0ZUJ1dHRvbi50ZXh0Q29udGVudCA9IHRhc2suZHVlRGF0ZTtcbiAgICAgICAgcmlnaHRTaWRlLmFwcGVuZENoaWxkKGRhdGVCdXR0b24pO1xuXG4gICAgICAgIGNvbnN0IGRlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBkZWxCdXR0b24uY2xhc3NMaXN0LmFkZCgnZGVsLWljb24nKTtcbiAgICAgICAgZGVsQnV0dG9uLnNyYyA9IHByb2plY3REaXNwbGF5Q29uZmlnLmRlbGV0ZUJ1dHRvbi5zcmM7XG4gICAgICAgIGRlbEJ1dHRvbi5hbHQgPSBwcm9qZWN0RGlzcGxheUNvbmZpZy5kZWxldGVCdXR0b24uYWx0O1xuICAgICAgICByaWdodFNpZGUuYXBwZW5kQ2hpbGQoZGVsQnV0dG9uKTtcbiAgICAgICAgXG4gICAgICAgIGl0ZW1FbGVtLmFwcGVuZENoaWxkKHJpZ2h0U2lkZSk7XG5cbiAgICAgICAgcHJvamVjdERpc3BsYXlMaXN0LmFwcGVuZENoaWxkKGl0ZW1FbGVtKTtcbiAgICB9XG5cbiAgICBwcm9qZWN0RGlzcGxheUVsZW0uYXBwZW5kQ2hpbGQocHJvamVjdERpc3BsYXlMaXN0KTtcblxuICAgIHJldHVybiBwcm9qZWN0RGlzcGxheUVsZW07XG59O1xuXG4vLyBmb290ZXJcbmNvbnN0IGNyZWF0ZUZvb3RlckVsZW0gPSAoKSA9PiB7XG5cbiAgICBjb25zdCBmb290ZXJFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAvLyB0ZXh0XG4gICAgZm9vdGVyRWxlbS5jbGFzc0xpc3QuYWRkKCdmb290ZXInKTtcbiAgICBjb25zdCBmb290ZXJDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGZvb3RlckNvbnRlbnQudGV4dENvbnRlbnQgPSAnRGV2ZWxvcGVkIGJ5IENhc2h0b24gSG9sYmVydCc7XG4gICAgZm9vdGVyRWxlbS5hcHBlbmRDaGlsZChmb290ZXJDb250ZW50KTtcblxuICAgIC8vIGdpdGh1YiBsb2dvXG4gICAgY29uc3QgZ2l0aHViTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBnaXRodWJMaW5rLmhyZWYgPSBmb290ZXIuZ2l0aHViTGluaztcbiAgICBjb25zdCBnaXRodWJJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGdpdGh1YkltYWdlLnNyYyA9IGZvb3Rlci5naXRodWJMb2dvLnNyYztcbiAgICBnaXRodWJJbWFnZS5hbHQgPSBmb290ZXIuZ2l0aHViTG9nby5hbHQ7XG4gICAgZ2l0aHViTGluay5hcHBlbmRDaGlsZChnaXRodWJJbWFnZSk7XG4gICAgZm9vdGVyRWxlbS5hcHBlbmRDaGlsZChnaXRodWJMaW5rKTtcblxuICAgIHJldHVybiBmb290ZXJFbGVtO1xufTtcblxuZXhwb3J0IHtjcmVhdGVIZWFkZXJFbGVtLCBjcmVhdGVTaWRlYmFyRWxlbSwgY3JlYXRlUHJvamVjdERpc3BsYXlFbGVtLCBjcmVhdGVGb290ZXJFbGVtfTsiLCJjb25zdCBwcm9qZWN0ID0gKHRpdGxlKSA9PiB7XG5cbiAgICBsZXQgcHJvamVjdFRvRG9MaXN0ID0gW107XG4gICAgXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICBwcm9qZWN0VG9Eb0xpc3Q6IHByb2plY3RUb0RvTGlzdCxcbiAgICAgICAgYWRkKHRvZG9JdGVtKSB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMucHJvamVjdFRvRG9MaXN0LmluZGV4T2YodG9kb0l0ZW0pO1xuICAgICAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvamVjdFRvRG9MaXN0LnB1c2godG9kb0l0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICByZW1vdmUodG9kb0l0ZW0pIHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5wcm9qZWN0VG9Eb0xpc3QuaW5kZXhPZih0b2RvSXRlbSk7XG4gICAgICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9qZWN0VG9Eb0xpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IHtwcm9qZWN0fTsiLCJcbmNvbnN0IHRvZG9JdGVtID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpID0+IHtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcbiAgICAgICAgZHVlRGF0ZTogZHVlRGF0ZSxcbiAgICAgICAgcHJpb3JpdHk6IHByaW9yaXR5LFxuICAgIH07XG59O1xuXG5leHBvcnQge3RvZG9JdGVtfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5pbXBvcnQgeyBwcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IHsgdG9kb0l0ZW0gfSBmcm9tIFwiLi90b2RvXCI7XG5pbXBvcnQgeyBwcm9qZWN0c1NpZGViYXIsIGljb24sIHNpZGVCYXJJdGVtLCBwcm9qZWN0RGlzcGxheX0gZnJvbSBcIi4vY29uZmlnXCI7XG5pbXBvcnQgeyBjcmVhdGVIZWFkZXJFbGVtLCBjcmVhdGVTaWRlYmFyRWxlbSwgY3JlYXRlUHJvamVjdERpc3BsYXlFbGVtLCBjcmVhdGVGb290ZXJFbGVtIH0gZnJvbSBcIi4vY29udGVudFwiO1xuXG4vLyBjcmVhdGUgYXBwIGNvbnRhaW5lclxuY29uc3QgQ09OVEVOVF9FTEVNID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5DT05URU5UX0VMRU0uY2xhc3NMaXN0LmFkZCgnY29udGVudCcpO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmFwcGVuZENoaWxkKENPTlRFTlRfRUxFTSk7XG5cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gVFJZIFRPIExPQUQgTE9DQUwgU1RPUkFHRVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyB0ZW1wIHByb2plY3Qgc3RvcmFnZVxuXG5jb25zdCBwcm9qZWN0QSA9IHByb2plY3QoJ0NsZWFuIFJvb20nKTtcblxucHJvamVjdEEuYWRkKHRvZG9JdGVtKFxuICAgICdwaWNrIHVwIGNsb3RoZXMnLFxuICAgICd1c2UgeW91ciBoYW5kcywgdG9zcyB0aGVtIGluIHRoZSB3YXNoJyxcbiAgICAnNS8xMC8yNCcsXG4gICAgJ2xvdycsXG4pKTtcblxucHJvamVjdEEuYWRkKHRvZG9JdGVtKFxuICAgICdvcmdhbml6ZSBkcmVzc2VyJyxcbiAgICAndGhyb3cgb3V0IGp1bmsgZnJvbSBqdW5rIGRyYXdlcicsXG4gICAgJzUvMTUvMjQnLFxuICAgICdtZWRpdW0nLFxuKSk7XG5cbmNvbnN0IHByb2plY3RCID0gcHJvamVjdCgnVG91Y2ggR3Jhc3MnKTtcblxuY29uc3QgcHJvamVjdHMgPSBbcHJvamVjdEEsIHByb2plY3RCXTtcblxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIERPIFRIRSBET00gU1RVRkZcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuY29uc3QgdXBkYXRlUHJvamVjdFNpZGVCYXIgPSAocHJvamVjdExpc3QpID0+IHtcbiAgICBsZXQgcHJvamVjdFNpZGVCYXJMaXN0ID0gW107XG4gICAgcHJvamVjdExpc3QuZm9yRWFjaCgocHJvamVjdCkgPT4gcHJvamVjdFNpZGVCYXJMaXN0LnB1c2goc2lkZUJhckl0ZW0ocHJvamVjdC50aXRsZSwgcHJvamVjdHNTaWRlYmFyLmljb24pKSk7XG4gICAgcHJvamVjdHNTaWRlYmFyLml0ZW1zID0gcHJvamVjdFNpZGVCYXJMaXN0O1xufVxuXG51cGRhdGVQcm9qZWN0U2lkZUJhcihwcm9qZWN0cyk7XG5cbmNvbnN0IHVwZGF0ZVByb2plY3REaXNwbGF5ID0gKHByb2plY3QpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlzcGxheWVkLWNvbnRlbnQnKS5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGNyZWF0ZVByb2plY3REaXNwbGF5RWxlbShwcm9qZWN0QSk7XG59XG5cbkNPTlRFTlRfRUxFTS5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXJFbGVtKCkpO1xuQ09OVEVOVF9FTEVNLmFwcGVuZENoaWxkKGNyZWF0ZVNpZGViYXJFbGVtKHByb2plY3RzU2lkZWJhcikpO1xuQ09OVEVOVF9FTEVNLmFwcGVuZENoaWxkKGNyZWF0ZVByb2plY3REaXNwbGF5RWxlbShwcm9qZWN0QSkpO1xuQ09OVEVOVF9FTEVNLmFwcGVuZENoaWxkKGNyZWF0ZUZvb3RlckVsZW0oKSk7XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==