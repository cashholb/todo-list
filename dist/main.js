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
    --main-color: #e36b93;
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
    min-height: 100%;
    height: 100%;
    width: 100%;

    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: auto 1fr auto;

    grid-template-areas: 
        "header"
        "main-content"
        "footer";
}

.header {
    grid-area: header;
    padding: 15px;

    background-color: var(--main-color);
}


.main-content {
    grid-area: main-content;

    display: grid;
    grid-template-columns: auto 1fr;

    grid-template-areas:
        "sidebar displayed-content";
}


.sidebar {
    grid-area: sidebar;
    border-right: solid;
    border-bottom: solid;
    border-color: var(--main-color);
    padding: 10px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 15px;
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
    padding: 15px;
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

    display: flex;
    justify-content: center;
    align-items: center;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":";AACA;IACI,iBAAiB;IACjB,qBAAqB;AACzB;;AAEA;IACI,UAAU;IACV,SAAS;;IAET,iCAAiC;AACrC;;AAEA;IACI,UAAU;IACV,YAAY;IACZ,aAAa;IACb,cAAc;IACd,6BAA6B;IAC7B,eAAe;AACnB;;AAEA;IACI,gBAAgB;IAChB,YAAY;IACZ,WAAW;;IAEX,aAAa;IACb,2BAA2B;IAC3B,iCAAiC;;IAEjC;;;gBAGY;AAChB;;AAEA;IACI,iBAAiB;IACjB,aAAa;;IAEb,mCAAmC;AACvC;;;AAGA;IACI,uBAAuB;;IAEvB,aAAa;IACb,+BAA+B;;IAE/B;mCAC+B;AACnC;;;AAGA;IACI,kBAAkB;IAClB,mBAAmB;IACnB,oBAAoB;IACpB,+BAA+B;IAC/B,aAAa;;IAEb,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,SAAS;AACb;;AAEA;IACI,kBAAkB;;IAElB,aAAa;IACb,mBAAmB;IACnB,SAAS;;AAEb;;AAEA;IACI,YAAY;IACZ,WAAW;AACf;;;;AAIA;IACI,4BAA4B;IAC5B,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,8BAA8B;;IAE9B;;QAEI,aAAa;QACb,SAAS;IACb;AACJ;;AAEA;IACI,aAAa;IACb,aAAa;IACb,kBAAkB;AACtB;;;;AAIA;IACI,iBAAiB;;IAEjB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB","sourcesContent":["\n:root {\n    --font-size: 20px;\n    --main-color: #e36b93;\n}\n\nbody {\n    padding: 0;\n    margin: 0;\n\n    font-family: 'Roboto', sans-serif;\n}\n\nbutton {\n    padding: 0; \n    border: none;\n    font: inherit;\n    color: inherit; \n    background-color: transparent; \n    cursor: pointer;\n}\n\n.content {\n    min-height: 100%;\n    height: 100%;\n    width: 100%;\n\n    display: grid;\n    grid-template-columns: 100%;\n    grid-template-rows: auto 1fr auto;\n\n    grid-template-areas: \n        \"header\"\n        \"main-content\"\n        \"footer\";\n}\n\n.header {\n    grid-area: header;\n    padding: 15px;\n\n    background-color: var(--main-color);\n}\n\n\n.main-content {\n    grid-area: main-content;\n\n    display: grid;\n    grid-template-columns: auto 1fr;\n\n    grid-template-areas:\n        \"sidebar displayed-content\";\n}\n\n\n.sidebar {\n    grid-area: sidebar;\n    border-right: solid;\n    border-bottom: solid;\n    border-color: var(--main-color);\n    padding: 10px;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: 15px;\n}\n\n.sidebar-item {\n    align-self: center;\n\n    display: flex;\n    align-items: center;\n    gap: 10px;\n\n}\n\n.sidebar-item img {\n    height: 20px;\n    width: 20px;\n}\n\n\n\n.displayed-content {\n    grid-area: displayed-content;\n    padding: 15px;\n}\n\n.project-display-list {\n    display: flex;\n    flex-direction: column;\n    gap: 25px;\n}\n\n.displayed-task {\n    display: flex;\n    justify-content: space-between;\n\n    .left,\n    .right {\n        display: flex;\n        gap: 15px;\n    }\n}\n\n.status-button {\n    padding: 10px;\n    border: solid;\n    border-radius: 70%;\n}\n\n\n\n.footer {\n    grid-area: footer;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}"],"sourceRoot":""}]);
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








const applicationName = 'Todo List App';

const icon = (src, alt) => (
     {src: src, alt: alt}
);

const sideBarItem = (itemTitle, icon) => (
    {itemTitle: itemTitle, icon: icon}
); 

const header = {
    appName: applicationName,
    icon: icon('', ''),
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

// try to load local storage (if it exists)

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

// call all content from content.js and append it to CONTENT_ELEM of DOM
CONTENT_ELEM.appendChild((0,_content__WEBPACK_IMPORTED_MODULE_4__.createHeaderElem)());


const mainContent = document.createElement('div');
mainContent.classList.add('main-content');
mainContent.appendChild((0,_content__WEBPACK_IMPORTED_MODULE_4__.createSidebarElem)(_config__WEBPACK_IMPORTED_MODULE_3__.projectsSidebar));
mainContent.appendChild((0,_content__WEBPACK_IMPORTED_MODULE_4__.createProjectDisplayElem)(projectA));
CONTENT_ELEM.appendChild(mainContent);

CONTENT_ELEM.appendChild((0,_content__WEBPACK_IMPORTED_MODULE_4__.createFooterElem)());


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29uZmlnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb250ZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYFxuOnJvb3Qge1xuICAgIC0tZm9udC1zaXplOiAyMHB4O1xuICAgIC0tbWFpbi1jb2xvcjogI2UzNmI5Mztcbn1cblxuYm9keSB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG5cbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG59XG5cbmJ1dHRvbiB7XG4gICAgcGFkZGluZzogMDsgXG4gICAgYm9yZGVyOiBub25lO1xuICAgIGZvbnQ6IGluaGVyaXQ7XG4gICAgY29sb3I6IGluaGVyaXQ7IFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyBcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jb250ZW50IHtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnIgYXV0bztcblxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxuICAgICAgICBcImhlYWRlclwiXG4gICAgICAgIFwibWFpbi1jb250ZW50XCJcbiAgICAgICAgXCJmb290ZXJcIjtcbn1cblxuLmhlYWRlciB7XG4gICAgZ3JpZC1hcmVhOiBoZWFkZXI7XG4gICAgcGFkZGluZzogMTVweDtcblxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xufVxuXG5cbi5tYWluLWNvbnRlbnQge1xuICAgIGdyaWQtYXJlYTogbWFpbi1jb250ZW50O1xuXG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xuXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICAgICAgXCJzaWRlYmFyIGRpc3BsYXllZC1jb250ZW50XCI7XG59XG5cblxuLnNpZGViYXIge1xuICAgIGdyaWQtYXJlYTogc2lkZWJhcjtcbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkO1xuICAgIGJvcmRlci1ib3R0b206IHNvbGlkO1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XG4gICAgcGFkZGluZzogMTBweDtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDE1cHg7XG59XG5cbi5zaWRlYmFyLWl0ZW0ge1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDEwcHg7XG5cbn1cblxuLnNpZGViYXItaXRlbSBpbWcge1xuICAgIGhlaWdodDogMjBweDtcbiAgICB3aWR0aDogMjBweDtcbn1cblxuXG5cbi5kaXNwbGF5ZWQtY29udGVudCB7XG4gICAgZ3JpZC1hcmVhOiBkaXNwbGF5ZWQtY29udGVudDtcbiAgICBwYWRkaW5nOiAxNXB4O1xufVxuXG4ucHJvamVjdC1kaXNwbGF5LWxpc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDI1cHg7XG59XG5cbi5kaXNwbGF5ZWQtdGFzayB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICAubGVmdCxcbiAgICAucmlnaHQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBnYXA6IDE1cHg7XG4gICAgfVxufVxuXG4uc3RhdHVzLWJ1dHRvbiB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXI6IHNvbGlkO1xuICAgIGJvcmRlci1yYWRpdXM6IDcwJTtcbn1cblxuXG5cbi5mb290ZXIge1xuICAgIGdyaWQtYXJlYTogZm9vdGVyO1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7O0lBRVQsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixhQUFhO0lBQ2IsY0FBYztJQUNkLDZCQUE2QjtJQUM3QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixXQUFXOztJQUVYLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsaUNBQWlDOztJQUVqQzs7O2dCQUdZO0FBQ2hCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7O0lBRWIsbUNBQW1DO0FBQ3ZDOzs7QUFHQTtJQUNJLHVCQUF1Qjs7SUFFdkIsYUFBYTtJQUNiLCtCQUErQjs7SUFFL0I7bUNBQytCO0FBQ25DOzs7QUFHQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLCtCQUErQjtJQUMvQixhQUFhOztJQUViLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGtCQUFrQjs7SUFFbEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixTQUFTOztBQUViOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZjs7OztBQUlBO0lBQ0ksNEJBQTRCO0lBQzVCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7O0lBRTlCOztRQUVJLGFBQWE7UUFDYixTQUFTO0lBQ2I7QUFDSjs7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOzs7O0FBSUE7SUFDSSxpQkFBaUI7O0lBRWpCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbjpyb290IHtcXG4gICAgLS1mb250LXNpemU6IDIwcHg7XFxuICAgIC0tbWFpbi1jb2xvcjogI2UzNmI5MztcXG59XFxuXFxuYm9keSB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG5cXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBwYWRkaW5nOiAwOyBcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250OiBpbmhlcml0O1xcbiAgICBjb2xvcjogaW5oZXJpdDsgXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyBcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciBhdXRvO1xcblxcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gICAgICAgIFxcXCJoZWFkZXJcXFwiXFxuICAgICAgICBcXFwibWFpbi1jb250ZW50XFxcIlxcbiAgICAgICAgXFxcImZvb3RlclxcXCI7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBncmlkLWFyZWE6IGhlYWRlcjtcXG4gICAgcGFkZGluZzogMTVweDtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxufVxcblxcblxcbi5tYWluLWNvbnRlbnQge1xcbiAgICBncmlkLWFyZWE6IG1haW4tY29udGVudDtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcXG5cXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgICAgIFxcXCJzaWRlYmFyIGRpc3BsYXllZC1jb250ZW50XFxcIjtcXG59XFxuXFxuXFxuLnNpZGViYXIge1xcbiAgICBncmlkLWFyZWE6IHNpZGViYXI7XFxuICAgIGJvcmRlci1yaWdodDogc29saWQ7XFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkO1xcbiAgICBib3JkZXItY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxNXB4O1xcbn1cXG5cXG4uc2lkZWJhci1pdGVtIHtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxuXFxufVxcblxcbi5zaWRlYmFyLWl0ZW0gaW1nIHtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICB3aWR0aDogMjBweDtcXG59XFxuXFxuXFxuXFxuLmRpc3BsYXllZC1jb250ZW50IHtcXG4gICAgZ3JpZC1hcmVhOiBkaXNwbGF5ZWQtY29udGVudDtcXG4gICAgcGFkZGluZzogMTVweDtcXG59XFxuXFxuLnByb2plY3QtZGlzcGxheS1saXN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyNXB4O1xcbn1cXG5cXG4uZGlzcGxheWVkLXRhc2sge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFxuICAgIC5sZWZ0LFxcbiAgICAucmlnaHQge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGdhcDogMTVweDtcXG4gICAgfVxcbn1cXG5cXG4uc3RhdHVzLWJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlcjogc29saWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDcwJTtcXG59XFxuXFxuXFxuXFxuLmZvb3RlciB7XFxuICAgIGdyaWQtYXJlYTogZm9vdGVyO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IHByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgaW5ib3hJY29uIGZyb20gXCIuL2Fzc2V0cy9pY29ucy9pbmJveF9GSUxMMF93Z2h0NDAwX0dSQUQwX29wc3oyNC5wbmdcIlxuaW1wb3J0IHRvZGF5SWNvbiBmcm9tIFwiLi9hc3NldHMvaWNvbnMvdG9kYXlfRklMTDBfd2dodDQwMF9HUkFEMF9vcHN6MjQucG5nXCJcbmltcG9ydCB3ZWVrSWNvbiBmcm9tIFwiLi9hc3NldHMvaWNvbnMvZGF0ZV9yYW5nZV9GSUxMMF93Z2h0NDAwX0dSQUQwX29wc3oyNC5wbmdcIlxuaW1wb3J0IHByb2plY3RJY29uIGZyb20gXCIuL2Fzc2V0cy9pY29ucy9jaGVja2xpc3RfRklMTDBfd2dodDQwMF9HUkFEMF9vcHN6MjQucG5nXCJcbmltcG9ydCBkZWxldGVJY29uIGZyb20gXCIuL2Fzc2V0cy9pY29ucy9kZWxldGVfRklMTDBfd2dodDQwMF9HUkFEMF9vcHN6MjQucG5nXCJcbmltcG9ydCBhZGRJY29uIGZyb20gXCIuL2Fzc2V0cy9pY29ucy9hZGRfRklMTDBfd2dodDQwMF9HUkFEMF9vcHN6MjQucG5nXCJcblxuY29uc3QgYXBwbGljYXRpb25OYW1lID0gJ1RvZG8gTGlzdCBBcHAnO1xuXG5jb25zdCBpY29uID0gKHNyYywgYWx0KSA9PiAoXG4gICAgIHtzcmM6IHNyYywgYWx0OiBhbHR9XG4pO1xuXG5jb25zdCBzaWRlQmFySXRlbSA9IChpdGVtVGl0bGUsIGljb24pID0+IChcbiAgICB7aXRlbVRpdGxlOiBpdGVtVGl0bGUsIGljb246IGljb259XG4pOyBcblxuY29uc3QgaGVhZGVyID0ge1xuICAgIGFwcE5hbWU6IGFwcGxpY2F0aW9uTmFtZSxcbiAgICBpY29uOiBpY29uKCcnLCAnJyksXG59O1xuXG5jb25zdCBkZWZhdWx0U2lkZWJhciA9IHtcbiAgICBpdGVtczogW1xuICAgICAgICB7XG4gICAgICAgICAgICBpdGVtVGl0bGU6ICdJbmJveCcsXG4gICAgICAgICAgICBpY29uOiBpY29uKGluYm94SWNvbiwgJ0luYm94IEljb24nKSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaXRlbVRpdGxlOiAnVG9kYXknLFxuICAgICAgICAgICAgaWNvbjogaWNvbih0b2RheUljb24sICdUb2RheSBJY29uJyksXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGl0ZW1UaXRsZTogJ1RoaXMgV2VlaycsXG4gICAgICAgICAgICBpY29uOiBpY29uKHdlZWtJY29uLCAnVGhpcyB3ZWVrIGljb24nKSxcbiAgICAgICAgfSxcbiAgICBdLFxufTtcblxuY29uc3QgcHJvamVjdHNTaWRlYmFyID0ge1xuICAgIHRpdGxlOiAnUHJvamVjdHMnLFxuICAgIGljb246IGljb24ocHJvamVjdEljb24sICdQcm9qZWN0IEljb24nKSxcbiAgICBpdGVtczogW1xuICAgIF0sXG4gICAgYWRkQnV0dG9uOiB7XG4gICAgICAgIGljb246IGljb24oYWRkSWNvbiwgJ2FkZCBwcm9qZWN0IGljb24nKSxcbiAgICAgICAgaXRlbVRpdGxlOiAnQWRkIFByb2plY3QnLFxuICAgIH1cbn07XG5cbmNvbnN0IHByb2plY3REaXNwbGF5Q29uZmlnID0ge1xuICAgIGRldGFpbHNCdXR0b25UZXh0OiBcIkRFVEFJTFNcIixcbiAgICBkZWxldGVCdXR0b246IGljb24oZGVsZXRlSWNvbiwgJ2RlbGV0ZSBpY29uJyksXG59O1xuXG5jb25zdCBmb290ZXIgPSB7XG4gICAgdGV4dDogJ0RldmVsb3BlZCBieSBDYXNodG9uIEhvbGJlcnQnLFxuICAgIGdpdGh1YkxvZ286IGljb24oJycsICcnKSxcbiAgICBnaXRodWJMaW5rOiAnJyxcbn07XG5cbmV4cG9ydCB7YXBwbGljYXRpb25OYW1lLCBoZWFkZXIsIGRlZmF1bHRTaWRlYmFyLCBwcm9qZWN0RGlzcGxheUNvbmZpZywgcHJvamVjdHNTaWRlYmFyLCBzaWRlQmFySXRlbSwgaWNvbiwgZm9vdGVyfTsiLCJpbXBvcnQge2hlYWRlciwgZGVmYXVsdFNpZGViYXIsIHByb2plY3REaXNwbGF5Q29uZmlnLCBmb290ZXJ9IGZyb20gJy4vY29uZmlnLmpzJztcbmltcG9ydCB7IHByb2plY3QgfSBmcm9tICcuL3Byb2plY3QuanMnO1xuXG4vLyBoZWFkZXJcbmNvbnN0IGNyZWF0ZUhlYWRlckVsZW0gPSAoKSA9PiB7XG4gICAgY29uc3QgaGVhZGVyRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRlckVsZW0uY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XG5cbiAgICBjb25zdCBpY29uRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGljb25FbGVtLnNyYyA9IGhlYWRlci5pY29uLnNyYztcbiAgICBpY29uRWxlbS5hbHQgPSBoZWFkZXIuaWNvbi5hbHQ7XG4gICAgaGVhZGVyRWxlbS5hcHBlbmRDaGlsZChpY29uRWxlbSk7XG5cbiAgICBjb25zdCB0aXRsZUVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIHRpdGxlRWxlbS50ZXh0Q29udGVudCA9IGhlYWRlci5hcHBOYW1lO1xuICAgIGhlYWRlckVsZW0uYXBwZW5kQ2hpbGQodGl0bGVFbGVtKTtcblxuICAgIHJldHVybiBoZWFkZXJFbGVtO1xufTtcblxuLy8gc2lkZWJhclxuY29uc3QgY3JlYXRlU2lkZWJhckVsZW0gPSAoY3VyclByb2plY3RzU2lkZWJhcikgPT4ge1xuXG4gICAgY29uc3Qgc2lkZWJhckVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzaWRlYmFyRWxlbS5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyJyk7XG5cbiAgICBjb25zdCBjcmVhdGVTaWRlYmFyQnV0dG9uc0xpc3RFbGVtID0gKGl0ZW1zTGlzdCkgPT4ge1xuXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lckVsZW0gPSAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRhaW5lckVsZW0uY2xhc3NMaXN0LmFkZCgnc2lkZWJhci1pdGVtcy1saXN0Jyk7XG5cbiAgICAgICAgaXRlbXNMaXN0LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNpZGViYXJJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBzaWRlYmFySXRlbS5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyLWl0ZW0nKTtcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgIGljb24uc3JjID0gaXRlbS5pY29uLnNyYztcbiAgICAgICAgICAgIGljb24uYWx0ID0gaXRlbS5pY29uLmFsdDtcbiAgICAgICAgICAgIHNpZGViYXJJdGVtLmFwcGVuZENoaWxkKGljb24pO1xuICAgIFxuICAgICAgICAgICAgY29uc3QgaXRlbVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgaXRlbVRpdGxlLnRleHRDb250ZW50ID0gaXRlbS5pdGVtVGl0bGU7XG4gICAgICAgICAgICBzaWRlYmFySXRlbS5hcHBlbmRDaGlsZChpdGVtVGl0bGUpO1xuICAgIFxuICAgICAgICAgICAgY29udGFpbmVyRWxlbS5hcHBlbmRDaGlsZChzaWRlYmFySXRlbSk7XG4gICAgICAgIH0pO1xuICAgICAgICAgICAgXG4gICAgICAgIHJldHVybiBjb250YWluZXJFbGVtO1xuICAgIH1cblxuICAgIC8vIGRlZmF1bHQgaXRlbXMgKEluYm94LCBUb2RheSwgZXRjLilcbiAgICBjb25zdCBkZWZhdWx0U2lkZWJhckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRlZmF1bHRTaWRlYmFyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXItY29udGFpbmVyJyk7XG5cbiAgICBkZWZhdWx0U2lkZWJhckNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVTaWRlYmFyQnV0dG9uc0xpc3RFbGVtKGRlZmF1bHRTaWRlYmFyLml0ZW1zKSk7XG4gICAgc2lkZWJhckVsZW0uYXBwZW5kQ2hpbGQoZGVmYXVsdFNpZGViYXJDb250YWluZXIpO1xuXG5cbiAgICAvLyBwcm9qZWN0cyBzaWRlYmFyIHBvcnRpb25cbiAgICBjb25zdCBwcm9qZWN0c1NpZGViYXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0c1NpZGViYXJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2lkZWJhci1jb250YWluZXInKTtcblxuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gY3VyclByb2plY3RzU2lkZWJhci50aXRsZTtcbiAgICBwcm9qZWN0c1NpZGViYXJDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcblxuICAgIGNvbnN0IHByb2plY3RzU2lkZWJhckl0ZW1zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBwcm9qZWN0c1NpZGViYXJDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlU2lkZWJhckJ1dHRvbnNMaXN0RWxlbShjdXJyUHJvamVjdHNTaWRlYmFyLml0ZW1zKSk7XG4gICAgc2lkZWJhckVsZW0uYXBwZW5kQ2hpbGQocHJvamVjdHNTaWRlYmFyQ29udGFpbmVyKTtcblxuICAgIHJldHVybiBzaWRlYmFyRWxlbTtcbn07XG5cbi8vIHByb2plY3QgZGlzcGxheSBjb250ZW50XG5jb25zdCBjcmVhdGVQcm9qZWN0RGlzcGxheUVsZW0gPSAocHJvamVjdCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3REaXNwbGF5RWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3REaXNwbGF5RWxlbS5jbGFzc0xpc3QuYWRkKCdkaXNwbGF5ZWQtY29udGVudCcpO1xuXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlO1xuICAgIHByb2plY3REaXNwbGF5RWxlbS5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gICAgY29uc3QgcHJvamVjdERpc3BsYXlMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdERpc3BsYXlMaXN0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtZGlzcGxheS1saXN0Jyk7XG5cbiAgICAvLyBjcmVhdGUgZGlzcGxheWVkIHRhc2sgaXRlbVxuICAgIGZvciAoY29uc3QgdGFzayBvZiBwcm9qZWN0LnByb2plY3RUb0RvTGlzdCkge1xuICAgICAgICBjb25zdCBpdGVtRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBpdGVtRWxlbS5jbGFzc0xpc3QuYWRkKCdkaXNwbGF5ZWQtdGFzaycpO1xuXG4gICAgICAgIGNvbnN0IGxlZnRTaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxlZnRTaWRlLmNsYXNzTGlzdC5hZGQoJ2xlZnQnKTtcblxuICAgICAgICAvLyBUT0RPOiBDSEFOR0UgQlVUVE9OIENIRUNLRUQgT1IgVU5DSEVDS0VEIERFUEVOREVOVCBPTiAndGFzaycgUEFSQU1cbiAgICAgICAgY29uc3Qgc3RhdHVzQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHN0YXR1c0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdzdGF0dXMtYnV0dG9uJyk7XG4gICAgICAgIGxlZnRTaWRlLmFwcGVuZENoaWxkKHN0YXR1c0J1dHRvbik7XG5cbiAgICAgICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHRhc2tUaXRsZS5jbGFzc0xpc3QuYWRkKCd0YXNrLXRpdGxlJyk7XG4gICAgICAgIHRhc2tUaXRsZS50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XG4gICAgICAgIGxlZnRTaWRlLmFwcGVuZENoaWxkKHRhc2tUaXRsZSk7XG5cbiAgICAgICAgaXRlbUVsZW0uYXBwZW5kQ2hpbGQobGVmdFNpZGUpO1xuXG4gICAgICAgIGNvbnN0IHJpZ2h0U2lkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICByaWdodFNpZGUuY2xhc3NMaXN0LmFkZCgncmlnaHQnKTtcblxuICAgICAgICBjb25zdCBkZXRhaWxzQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGRldGFpbHNCdXR0b24uY2xhc3NMaXN0LmFkZCgnZGV0YWlscy1idXR0b24nKTtcbiAgICAgICAgZGV0YWlsc0J1dHRvbi50ZXh0Q29udGVudCA9IHByb2plY3REaXNwbGF5Q29uZmlnLmRldGFpbHNCdXR0b25UZXh0O1xuICAgICAgICByaWdodFNpZGUuYXBwZW5kQ2hpbGQoZGV0YWlsc0J1dHRvbik7XG5cbiAgICAgICAgY29uc3QgZGF0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBkYXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2RhdGUtYnV0dG9uJyk7XG4gICAgICAgIGRhdGVCdXR0b24udGV4dENvbnRlbnQgPSB0YXNrLmR1ZURhdGU7XG4gICAgICAgIHJpZ2h0U2lkZS5hcHBlbmRDaGlsZChkYXRlQnV0dG9uKTtcblxuICAgICAgICBjb25zdCBkZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgZGVsQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2RlbC1pY29uJyk7XG4gICAgICAgIGRlbEJ1dHRvbi5zcmMgPSBwcm9qZWN0RGlzcGxheUNvbmZpZy5kZWxldGVCdXR0b24uc3JjO1xuICAgICAgICBkZWxCdXR0b24uYWx0ID0gcHJvamVjdERpc3BsYXlDb25maWcuZGVsZXRlQnV0dG9uLmFsdDtcbiAgICAgICAgcmlnaHRTaWRlLmFwcGVuZENoaWxkKGRlbEJ1dHRvbik7XG4gICAgICAgIFxuICAgICAgICBpdGVtRWxlbS5hcHBlbmRDaGlsZChyaWdodFNpZGUpO1xuXG4gICAgICAgIHByb2plY3REaXNwbGF5TGlzdC5hcHBlbmRDaGlsZChpdGVtRWxlbSk7XG4gICAgfVxuXG4gICAgcHJvamVjdERpc3BsYXlFbGVtLmFwcGVuZENoaWxkKHByb2plY3REaXNwbGF5TGlzdCk7XG5cbiAgICByZXR1cm4gcHJvamVjdERpc3BsYXlFbGVtO1xufTtcblxuLy8gZm9vdGVyXG5jb25zdCBjcmVhdGVGb290ZXJFbGVtID0gKCkgPT4ge1xuXG4gICAgY29uc3QgZm9vdGVyRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgLy8gdGV4dFxuICAgIGZvb3RlckVsZW0uY2xhc3NMaXN0LmFkZCgnZm9vdGVyJyk7XG4gICAgY29uc3QgZm9vdGVyQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBmb290ZXJDb250ZW50LnRleHRDb250ZW50ID0gJ0RldmVsb3BlZCBieSBDYXNodG9uIEhvbGJlcnQnO1xuICAgIGZvb3RlckVsZW0uYXBwZW5kQ2hpbGQoZm9vdGVyQ29udGVudCk7XG5cbiAgICAvLyBnaXRodWIgbG9nb1xuICAgIGNvbnN0IGdpdGh1YkxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgZ2l0aHViTGluay5ocmVmID0gZm9vdGVyLmdpdGh1Ykxpbms7XG4gICAgY29uc3QgZ2l0aHViSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBnaXRodWJJbWFnZS5zcmMgPSBmb290ZXIuZ2l0aHViTG9nby5zcmM7XG4gICAgZ2l0aHViSW1hZ2UuYWx0ID0gZm9vdGVyLmdpdGh1YkxvZ28uYWx0O1xuICAgIGdpdGh1YkxpbmsuYXBwZW5kQ2hpbGQoZ2l0aHViSW1hZ2UpO1xuICAgIGZvb3RlckVsZW0uYXBwZW5kQ2hpbGQoZ2l0aHViTGluayk7XG5cbiAgICByZXR1cm4gZm9vdGVyRWxlbTtcbn07XG5cbmV4cG9ydCB7Y3JlYXRlSGVhZGVyRWxlbSwgY3JlYXRlU2lkZWJhckVsZW0sIGNyZWF0ZVByb2plY3REaXNwbGF5RWxlbSwgY3JlYXRlRm9vdGVyRWxlbX07IiwiY29uc3QgcHJvamVjdCA9ICh0aXRsZSkgPT4ge1xuXG4gICAgbGV0IHByb2plY3RUb0RvTGlzdCA9IFtdO1xuICAgIFxuICAgIHJldHVybiB7XG4gICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgcHJvamVjdFRvRG9MaXN0OiBwcm9qZWN0VG9Eb0xpc3QsXG4gICAgICAgIGFkZCh0b2RvSXRlbSkge1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnByb2plY3RUb0RvTGlzdC5pbmRleE9mKHRvZG9JdGVtKTtcbiAgICAgICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb2plY3RUb0RvTGlzdC5wdXNoKHRvZG9JdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcmVtb3ZlKHRvZG9JdGVtKSB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMucHJvamVjdFRvRG9MaXN0LmluZGV4T2YodG9kb0l0ZW0pO1xuICAgICAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvamVjdFRvRG9MaXN0LnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCB7cHJvamVjdH07IiwiXG5jb25zdCB0b2RvSXRlbSA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSA9PiB7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG4gICAgICAgIGR1ZURhdGU6IGR1ZURhdGUsXG4gICAgICAgIHByaW9yaXR5OiBwcmlvcml0eSxcbiAgICB9O1xufTtcblxuZXhwb3J0IHt0b2RvSXRlbX07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuaW1wb3J0IHsgcHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCB7IHRvZG9JdGVtIH0gZnJvbSBcIi4vdG9kb1wiO1xuaW1wb3J0IHsgcHJvamVjdHNTaWRlYmFyLCBpY29uLCBzaWRlQmFySXRlbSwgcHJvamVjdERpc3BsYXl9IGZyb20gXCIuL2NvbmZpZ1wiO1xuaW1wb3J0IHsgY3JlYXRlSGVhZGVyRWxlbSwgY3JlYXRlU2lkZWJhckVsZW0sIGNyZWF0ZVByb2plY3REaXNwbGF5RWxlbSwgY3JlYXRlRm9vdGVyRWxlbSB9IGZyb20gXCIuL2NvbnRlbnRcIjtcblxuLy8gY3JlYXRlIGFwcCBjb250YWluZXJcbmNvbnN0IENPTlRFTlRfRUxFTSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuQ09OVEVOVF9FTEVNLmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQnKTtcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5hcHBlbmRDaGlsZChDT05URU5UX0VMRU0pO1xuXG4vLyB0cnkgdG8gbG9hZCBsb2NhbCBzdG9yYWdlIChpZiBpdCBleGlzdHMpXG5cbi8vIHRlbXAgcHJvamVjdCBzdG9yYWdlXG5cbmNvbnN0IHByb2plY3RBID0gcHJvamVjdCgnQ2xlYW4gUm9vbScpO1xuXG5wcm9qZWN0QS5hZGQodG9kb0l0ZW0oXG4gICAgJ3BpY2sgdXAgY2xvdGhlcycsXG4gICAgJ3VzZSB5b3VyIGhhbmRzLCB0b3NzIHRoZW0gaW4gdGhlIHdhc2gnLFxuICAgICc1LzEwLzI0JyxcbiAgICAnbG93JyxcbikpO1xuXG5wcm9qZWN0QS5hZGQodG9kb0l0ZW0oXG4gICAgJ29yZ2FuaXplIGRyZXNzZXInLFxuICAgICd0aHJvdyBvdXQganVuayBmcm9tIGp1bmsgZHJhd2VyJyxcbiAgICAnNS8xNS8yNCcsXG4gICAgJ21lZGl1bScsXG4pKTtcblxuY29uc3QgcHJvamVjdEIgPSBwcm9qZWN0KCdUb3VjaCBHcmFzcycpO1xuXG5jb25zdCBwcm9qZWN0cyA9IFtwcm9qZWN0QSwgcHJvamVjdEJdO1xuXG5jb25zdCB1cGRhdGVQcm9qZWN0U2lkZUJhciA9IChwcm9qZWN0TGlzdCkgPT4ge1xuICAgIGxldCBwcm9qZWN0U2lkZUJhckxpc3QgPSBbXTtcbiAgICBwcm9qZWN0TGlzdC5mb3JFYWNoKChwcm9qZWN0KSA9PiBwcm9qZWN0U2lkZUJhckxpc3QucHVzaChzaWRlQmFySXRlbShwcm9qZWN0LnRpdGxlLCBwcm9qZWN0c1NpZGViYXIuaWNvbikpKTtcbiAgICBwcm9qZWN0c1NpZGViYXIuaXRlbXMgPSBwcm9qZWN0U2lkZUJhckxpc3Q7XG59XG5cbnVwZGF0ZVByb2plY3RTaWRlQmFyKHByb2plY3RzKTtcblxuY29uc3QgdXBkYXRlUHJvamVjdERpc3BsYXkgPSAocHJvamVjdCkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaXNwbGF5ZWQtY29udGVudCcpLmlubmVySFRNTCA9IFwiXCI7XG4gICAgY3JlYXRlUHJvamVjdERpc3BsYXlFbGVtKHByb2plY3RBKTtcbn1cblxuLy8gY2FsbCBhbGwgY29udGVudCBmcm9tIGNvbnRlbnQuanMgYW5kIGFwcGVuZCBpdCB0byBDT05URU5UX0VMRU0gb2YgRE9NXG5DT05URU5UX0VMRU0uYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZGVyRWxlbSgpKTtcblxuXG5jb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xubWFpbkNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnbWFpbi1jb250ZW50Jyk7XG5tYWluQ29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVTaWRlYmFyRWxlbShwcm9qZWN0c1NpZGViYXIpKTtcbm1haW5Db250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZVByb2plY3REaXNwbGF5RWxlbShwcm9qZWN0QSkpO1xuQ09OVEVOVF9FTEVNLmFwcGVuZENoaWxkKG1haW5Db250ZW50KTtcblxuQ09OVEVOVF9FTEVNLmFwcGVuZENoaWxkKGNyZWF0ZUZvb3RlckVsZW0oKSk7XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==