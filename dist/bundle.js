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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/taco-background.png */ \"./src/images/taco-background.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* General Style */\\nhtml {\\n    box-sizing: border-box;\\n    font-family: -apple-system, BlinkMacSystemFont, sans-serif;\\n}\\n\\n*, \\n*:before,\\n*:after {\\n    box-sizing: inherit;\\n}\\n\\nbody {\\n    margin: 0;\\n    padding: 0;\\n}\\n\\nh1 {\\n    margin: 0;\\n    padding: 0;\\n}\\nimg {\\n    margin: 0;\\n    padding: 0;\\n}\\nfooter {\\n    margin: 0;\\n    padding: 0;\\n}\\nsection{\\n    margin: 0;\\n    padding: 0;\\n}\\ndiv {\\n    margin: 0;\\n    padding: 0;\\n}\\n\\n#content {\\n    height: 100vh;\\n}\\n\\n.content-front-page {\\n    padding: 4em;\\n    height: 90%;\\n    display: flex;\\n    flex-direction: column;\\n}\\n\\n/* Header Styles */\\n\\nheader {\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    background-color: lightblue;\\n}\\n\\nheader h1 {\\n    z-index: 1;\\n    flex: 0;\\n    margin-left: 2em;\\n}\\n\\n.header-img-taco {\\n    width: 20%;\\n    transform: rotate(90deg);\\n    z-index: 0;\\n}\\n\\n/* Main section style */\\n\\nsection {\\n    flex: 1;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n    background-color: beige;\\n    background-size: 200px;\\n    background-position: -30px;\\n    background-repeat: repeat;\\n}\\n\\nsection div {\\n    background-color: oldlace;\\n    border-radius: 20px;\\n    border: 5px solid black;\\n    padding: 5px;\\n}\\n\\nsection q {\\n    font-size: x-large;\\n    font-style: italic;\\n}\\n\\nsection figcaption {\\n    text-align: end;\\n    font-size: large;\\n    font-weight: bold;\\n}\\n\\n.section-img-customer {\\n    width: 200px;\\n    border: 10px black solid;\\n    border-radius: 20px;\\n    box-shadow: 2px 2px 10px 2px;\\n    margin-right: 2em;\\n}\\n\\n/* Menu Style */\\n\\n.menu-section {\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    flex-direction: column;\\n    gap: 1em;\\n}\\n\\narticle {\\n    width: 30%;\\n    background-color: aliceblue;\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    align-items: center;\\n    border: 5px solid black;\\n    padding: .5em 1em;\\n}\\n\\narticle p {\\n    text-align: center;\\n}\\n\\narticle img {\\n    width: 100px;\\n}\\n\\n/* Contact Style */\\n\\n.contact-section {\\n    display: flex;\\n}\\n\\n.contact-block {\\n    border: 5px solid black;\\n    border-radius: 20px;\\n    padding: 1em;\\n    white-space: pre;\\n    text-align: center;\\n    background-color: antiquewhite;\\n}\\n\\n/* Footer */\\n\\nfooter {\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    background-color: azure;\\n    height: 3em;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page-js-odin/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page-js-odin/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-page-js-odin/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page-js-odin/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page-js-odin/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page-js-odin/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page-js-odin/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page-js-odin/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page-js-odin/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page-js-odin/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page-js-odin/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_tacos_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/tacos.jpg */ \"./src/images/tacos.jpg\");\n\n\nfunction loadContactPage() {\n    const contactPage = document.createElement(\"div\");\n\n    function createContactHeader() {\n        const header = document.createElement('header');\n        const headerImageTaco = document.createElement('img');\n        const headerHeading = document.createElement('h1');\n\n        headerImageTaco.setAttribute('src', _images_tacos_jpg__WEBPACK_IMPORTED_MODULE_0__);\n        headerImageTaco.classList = \"header-img-taco\";\n\n        headerHeading.textContent = \"Taco Shop Contact\";\n\n        header.appendChild(headerImageTaco);\n        header.appendChild(headerHeading);\n\n        return header;\n    }\n\n    function createContact() {\n        const contactInfo = {\n            title: \"Taco Shop\",\n            address: \"123 Taco Way \\nTaco City, Taco Land 00000\",\n            phone: \"111-111-taco\",\n            email: \"taco@taco.taco\",\n        };\n\n        const contactSection = document.createElement('section');\n        contactSection.className = \"contact-section\";\n        \n        const contactBlock = document.createElement('p');\n        contactBlock.className = \"contact-block\";\n\n        Object.entries(contactInfo).forEach(([key, value]) => contactBlock.textContent += value + '\\n\\n');\n        contactSection.appendChild(contactBlock);\n\n        return contactSection;\n    }\n\n    contactPage.appendChild(createContactHeader());\n    contactPage.appendChild(createContact());\n\n    return contactPage;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContactPage);\n\n//# sourceURL=webpack://restaurant-page-js-odin/./src/contact.js?");

/***/ }),

/***/ "./src/front.js":
/*!**********************!*\
  !*** ./src/front.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_tacos_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/tacos.jpg */ \"./src/images/tacos.jpg\");\n/* harmony import */ var _images_customer_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/customer.jpg */ \"./src/images/customer.jpg\");\n\n\n\nfunction loadFrontPage() {\n    const frontPage = document.createElement(\"div\");\n\n    function createHeader() {\n        const header = document.createElement('header');\n        const headerImageTaco = document.createElement('img');\n        const headerHeading = document.createElement('h1');\n\n        headerImageTaco.setAttribute('src', _images_tacos_jpg__WEBPACK_IMPORTED_MODULE_0__);\n        headerImageTaco.classList = \"header-img-taco\";\n\n        headerHeading.textContent = \"Welcome to the Taco Shop!\";\n\n        header.appendChild(headerImageTaco);\n        header.appendChild(headerHeading);\n\n        return header;\n    }\n\n    function createSection() {\n        const section = document.createElement('section');\n        const customerReaction = document.createElement('div');\n        const quote = document.createElement('q');\n        const author = document.createElement('figcaption');\n        const authorImage = document.createElement('img');\n\n        quote.textContent = \"It's the Taco Shop or nothing!\";\n        author.textContent = \"\\u2014 Satisfied Customer\";\n        // Photo by logan hansen from Pexels\n        authorImage.setAttribute('src', _images_customer_jpg__WEBPACK_IMPORTED_MODULE_1__);\n        authorImage.classList = \"section-img-customer\";\n\n        customerReaction.appendChild(quote);\n        customerReaction.appendChild(author);\n        \n\n        section.appendChild(authorImage);\n        section.appendChild(customerReaction);\n\n        return section;\n    }\n\n    function createFooter() {\n        const footer = document.createElement('footer');\n\n        footer.textContent = \"Social Tacos\";\n\n        return footer;\n    }\n\n\n    frontPage.classList = 'content-front-page';\n\n    frontPage.appendChild(createHeader());\n    frontPage.appendChild(createSection());\n    frontPage.appendChild(createFooter());\n    \n    return frontPage;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadFrontPage);\n\n//# sourceURL=webpack://restaurant-page-js-odin/./src/front.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _front_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./front.js */ \"./src/front.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n\n\n\n\n\nconst content = document.getElementById('content');\nconst mainButton = document.createElement('button');\nconst menuButton = document.createElement('button');\nconst contactButton = document.createElement('button');\n\nmainButton.textContent = \"Home\";\nmenuButton.textContent = \"Menu\";\ncontactButton.textContent = \"Contact\";\n\n\nmainButton.onclick = changeToMainPage;\nmenuButton.onclick = changeToMenuPage;\ncontactButton.onclick = changeToContactPage;\n\nfunction changeToMainPage() {\n    content.removeChild(content.lastChild);\n    content.appendChild((0,_front_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n};\n\nfunction changeToMenuPage() {\n    content.removeChild(content.lastChild);\n    content.appendChild((0,_menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\n};\n\nfunction changeToContactPage() {\n    content.removeChild(content.lastChild);\n    content.appendChild((0,_contact_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\n};\n\ncontent.appendChild(mainButton);\ncontent.appendChild(menuButton);\ncontent.appendChild(contactButton);\n\ncontent.appendChild((0,_contact_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\n\nconsole.log(\"Hello webpack!\");\n\n//# sourceURL=webpack://restaurant-page-js-odin/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_tacos_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/tacos.jpg */ \"./src/images/tacos.jpg\");\n/* harmony import */ var _images_street_taco_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/street-taco.jpg */ \"./src/images/street-taco.jpg\");\n/* harmony import */ var _images_waffle_taco_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/waffle-taco.jpg */ \"./src/images/waffle-taco.jpg\");\n/* harmony import */ var _images_ice_cream_taco_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/ice-cream-taco.jpg */ \"./src/images/ice-cream-taco.jpg\");\n/* harmony import */ var _images_sushi_taco_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/sushi-taco.jpg */ \"./src/images/sushi-taco.jpg\");\n/* harmony import */ var _images_fruit_taco_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/fruit-taco.jpg */ \"./src/images/fruit-taco.jpg\");\n\n //Photo by ROMAN ODINTSOV from Pexels\n //Photo by Yaroslav Shuraev from Pexels\n //Photo by RODNAE Productions from Pexels\n//Photo by Eiliv Aceron from Pexels\n // Image by platinumproperties1 from Pixabay \n\n\nfunction loadMenuPage() {\n    const menuPage = document.createElement(\"div\");\n\n    function createMenuHeader() {\n        const header = document.createElement('header');\n        const headerImageTaco = document.createElement('img');\n        const headerHeading = document.createElement('h1');\n\n        headerImageTaco.setAttribute('src', _images_tacos_jpg__WEBPACK_IMPORTED_MODULE_0__);\n        headerImageTaco.classList = \"header-img-taco\";\n\n        headerHeading.textContent = \"Taco Shop Menu\";\n\n        header.appendChild(headerImageTaco);\n        header.appendChild(headerHeading);\n\n        return header;\n    }\n\n    function createMenu() {\n        const menuSection = document.createElement('Section');\n        menuSection.className = \"menu-section\";\n        const menuItems = [\n            {title: 'Street Taco', image: _images_street_taco_jpg__WEBPACK_IMPORTED_MODULE_1__, description: \"Don't mess with these tacos. Filled with all the traditional goodies.\"},\n            {title: 'Waffle Taco', image: _images_waffle_taco_jpg__WEBPACK_IMPORTED_MODULE_2__, description: \"A taco inspired by maple syrup and ready to start any day.\"},\n            {title: 'Sushi Taco', image: _images_sushi_taco_jpg__WEBPACK_IMPORTED_MODULE_4__, description: \"This taco rolled around in some rice, the rest is seaweed.\"},\n            {title: 'Fruit Taco', image: _images_fruit_taco_jpg__WEBPACK_IMPORTED_MODULE_5__, description: \"An apple a day, might as well put it in a taco.\"},\n            {title: 'Ice Cream Taco', image: _images_ice_cream_taco_jpg__WEBPACK_IMPORTED_MODULE_3__, description: \"This taco is great as a desert treat, or even if it's snowing.\"},\n        ]\n        \n        menuItems.forEach((item) =>{\n            const menuItem = document.createElement(\"article\");\n            menuItem.className = \"menuItem\";\n            \n            const menuItemTitle = document.createElement('h2');\n            const menuItemImage = document.createElement('img');\n            const menuItemDescription = document.createElement('p');\n\n            menuItemTitle.textContent = item.title;\n            menuItemImage.src = item.image;\n            menuItemDescription.textContent = item.description;\n\n            menuItem.appendChild(menuItemTitle);\n            menuItem.appendChild(menuItemImage);\n            menuItem.appendChild(menuItemDescription);\n            \n            menuSection.appendChild(menuItem);\n        });\n\n        \n\n        return menuSection;\n    }\n\n    menuPage.appendChild(createMenuHeader());\n    menuPage.appendChild(createMenu());\n\n    return menuPage;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenuPage);\n\n//# sourceURL=webpack://restaurant-page-js-odin/./src/menu.js?");

/***/ }),

/***/ "./src/images/customer.jpg":
/*!*********************************!*\
  !*** ./src/images/customer.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/03df93dacf2fcd3440a8.jpg\";\n\n//# sourceURL=webpack://restaurant-page-js-odin/./src/images/customer.jpg?");

/***/ }),

/***/ "./src/images/fruit-taco.jpg":
/*!***********************************!*\
  !*** ./src/images/fruit-taco.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/6f5023b9a96c6f861a95.jpg\";\n\n//# sourceURL=webpack://restaurant-page-js-odin/./src/images/fruit-taco.jpg?");

/***/ }),

/***/ "./src/images/ice-cream-taco.jpg":
/*!***************************************!*\
  !*** ./src/images/ice-cream-taco.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/b8416a0a7aeede21a056.jpg\";\n\n//# sourceURL=webpack://restaurant-page-js-odin/./src/images/ice-cream-taco.jpg?");

/***/ }),

/***/ "./src/images/street-taco.jpg":
/*!************************************!*\
  !*** ./src/images/street-taco.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/8bec949e3e421f46e81e.jpg\";\n\n//# sourceURL=webpack://restaurant-page-js-odin/./src/images/street-taco.jpg?");

/***/ }),

/***/ "./src/images/sushi-taco.jpg":
/*!***********************************!*\
  !*** ./src/images/sushi-taco.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/13a29c54873ed5cb8aeb.jpg\";\n\n//# sourceURL=webpack://restaurant-page-js-odin/./src/images/sushi-taco.jpg?");

/***/ }),

/***/ "./src/images/taco-background.png":
/*!****************************************!*\
  !*** ./src/images/taco-background.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/d13292e55469c42d4370.png\";\n\n//# sourceURL=webpack://restaurant-page-js-odin/./src/images/taco-background.png?");

/***/ }),

/***/ "./src/images/tacos.jpg":
/*!******************************!*\
  !*** ./src/images/tacos.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/4e39217931787dc4710f.jpg\";\n\n//# sourceURL=webpack://restaurant-page-js-odin/./src/images/tacos.jpg?");

/***/ }),

/***/ "./src/images/waffle-taco.jpg":
/*!************************************!*\
  !*** ./src/images/waffle-taco.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/fdf8624208d87a47ba86.jpg\";\n\n//# sourceURL=webpack://restaurant-page-js-odin/./src/images/waffle-taco.jpg?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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