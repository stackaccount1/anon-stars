/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/viewprofile";
exports.ids = ["pages/viewprofile"];
exports.modules = {

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"Home_container__bCOhY\",\n\t\"main\": \"Home_main__nLjiQ\",\n\t\"footer\": \"Home_footer____T7K\",\n\t\"title\": \"Home_title__T09hD\",\n\t\"description\": \"Home_description__41Owk\",\n\t\"grid\": \"Home_grid__GxQ85\",\n\t\"card\": \"Home_card___LpL1\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktcmFpbmJvd2tpdC1hcHAvLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzPzcxMjciXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiSG9tZV9jb250YWluZXJfX2JDT2hZXCIsXG5cdFwibWFpblwiOiBcIkhvbWVfbWFpbl9fbkxqaVFcIixcblx0XCJmb290ZXJcIjogXCJIb21lX2Zvb3Rlcl9fX19UN0tcIixcblx0XCJ0aXRsZVwiOiBcIkhvbWVfdGl0bGVfX1QwOWhEXCIsXG5cdFwiZGVzY3JpcHRpb25cIjogXCJIb21lX2Rlc2NyaXB0aW9uX180MU93a1wiLFxuXHRcImdyaWRcIjogXCJIb21lX2dyaWRfX0d4UTg1XCIsXG5cdFwiY2FyZFwiOiBcIkhvbWVfY2FyZF9fX0xwTDFcIlxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/Home.module.css\n");

/***/ }),

/***/ "./components/viewProfile.js":
/*!***********************************!*\
  !*** ./components/viewProfile.js ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ViewProfile)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ \"./constants/index.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_constants__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ethersproject/bignumber */ \"@ethersproject/bignumber\");\n/* harmony import */ var _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(wagmi__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var flatted__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flatted */ \"flatted?229a\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([flatted__WEBPACK_IMPORTED_MODULE_5__]);\nflatted__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\nfunction ViewProfile() {\n    const { parse , stringify  } = __webpack_require__(/*! flatted */ \"flatted?08e7\");\n    const { data: signer , isError , isLoading  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.useSigner)();\n    const one = signer;\n    console.log(signer);\n    const chainId = 4;\n    const { data  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.useContractRead)({\n        addressOrName: _constants__WEBPACK_IMPORTED_MODULE_2__.contractAddresses[chainId][0],\n        contractInterface: _constants__WEBPACK_IMPORTED_MODULE_2__.abiFile,\n        chainId: 4,\n        functionName: \"returnEndorsementsAddresses\",\n        args: [\n            one\n        ]\n    });\n    const viewprofile = stringify(contractRead.data);\n    console.log(\"Return id____________________________________________\");\n    console.log(data);\n    /*\n  let number = ethers.BigNumber.from(data.toString());\n  number = number.toString();\n  */ return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: \"hello\"\n    }, void 0, false, {\n        fileName: \"/home/user/Desktop/dev/anon-stars/frontend/my-rainbowkit-app/components/viewProfile.js\",\n        lineNumber: 27,\n        columnNumber: 10\n    }, this);\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3ZpZXdQcm9maWxlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQStCO0FBQzJCO0FBQ0w7QUFDVztBQUNIO0FBRTlDLFNBQVNXLFdBQVcsR0FBRztJQUNwQyxNQUFNLEVBQUVKLEtBQUssR0FBRUMsU0FBUyxHQUFFLEdBQUdJLG1CQUFPLENBQUMsNkJBQVMsQ0FBQztJQUMvQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsTUFBTSxHQUFFQyxPQUFPLEdBQUVDLFNBQVMsR0FBRSxHQUFHVixnREFBUyxFQUFFO0lBQ3hELE1BQU1XLEdBQUcsR0FBR0gsTUFBTTtJQUNsQkksT0FBTyxDQUFDQyxHQUFHLENBQUNMLE1BQU0sQ0FBQyxDQUFDO0lBQ3BCLE1BQU1NLE9BQU8sR0FBRyxDQUFDO0lBQ2pCLE1BQU0sRUFBRVAsSUFBSSxHQUFFLEdBQUdULHNEQUFlLENBQUM7UUFDL0JpQixhQUFhLEVBQUVwQix5REFBaUIsQ0FBQ21CLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1Q0UsaUJBQWlCLEVBQUVwQiwrQ0FBTztRQUMxQmtCLE9BQU8sRUFBRSxDQUFDO1FBQ1ZHLFlBQVksRUFBRSw2QkFBNkI7UUFDM0NDLElBQUksRUFBRTtZQUFDUCxHQUFHO1NBQUM7S0FDWixDQUFDO0lBQ0YsTUFBTVEsV0FBVyxHQUFHakIsU0FBUyxDQUFDa0IsWUFBWSxDQUFDYixJQUFJLENBQUM7SUFDaERLLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHVEQUF1RCxDQUFDLENBQUM7SUFDckVELE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTixJQUFJLENBQUMsQ0FBQztJQUNsQjs7O0VBR0EsR0FDQSxxQkFBTyw4REFBQ2MsSUFBRTtrQkFBQyxPQUFLOzs7OztZQUFLLENBQUM7Q0FDdkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1yYWluYm93a2l0LWFwcC8uL2NvbXBvbmVudHMvdmlld1Byb2ZpbGUuanM/ZGYwYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbnRyYWN0QWRkcmVzc2VzLCBhYmlGaWxlIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgQmlnTnVtYmVyIH0gZnJvbSBcIkBldGhlcnNwcm9qZWN0L2JpZ251bWJlclwiO1xuaW1wb3J0IHsgdXNlQ29udHJhY3RSZWFkLCB1c2VDb250cmFjdCwgdXNlU2lnbmVyIH0gZnJvbSBcIndhZ21pXCI7XG5pbXBvcnQgeyBwYXJzZSwgc3RyaW5naWZ5LCB0b0pTT04sIGZyb21KU09OIH0gZnJvbSBcImZsYXR0ZWRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVmlld1Byb2ZpbGUoKSB7XG4gIGNvbnN0IHsgcGFyc2UsIHN0cmluZ2lmeSB9ID0gcmVxdWlyZShcImZsYXR0ZWRcIik7XG4gIGNvbnN0IHsgZGF0YTogc2lnbmVyLCBpc0Vycm9yLCBpc0xvYWRpbmcgfSA9IHVzZVNpZ25lcigpO1xuICBjb25zdCBvbmUgPSBzaWduZXI7XG4gIGNvbnNvbGUubG9nKHNpZ25lcik7XG4gIGNvbnN0IGNoYWluSWQgPSA0O1xuICBjb25zdCB7IGRhdGEgfSA9IHVzZUNvbnRyYWN0UmVhZCh7XG4gICAgYWRkcmVzc09yTmFtZTogY29udHJhY3RBZGRyZXNzZXNbY2hhaW5JZF1bMF0sXG4gICAgY29udHJhY3RJbnRlcmZhY2U6IGFiaUZpbGUsXG4gICAgY2hhaW5JZDogNCxcbiAgICBmdW5jdGlvbk5hbWU6IFwicmV0dXJuRW5kb3JzZW1lbnRzQWRkcmVzc2VzXCIsXG4gICAgYXJnczogW29uZV0sXG4gIH0pO1xuICBjb25zdCB2aWV3cHJvZmlsZSA9IHN0cmluZ2lmeShjb250cmFjdFJlYWQuZGF0YSk7XG4gIGNvbnNvbGUubG9nKFwiUmV0dXJuIGlkX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cIik7XG4gIGNvbnNvbGUubG9nKGRhdGEpO1xuICAvKlxuICBsZXQgbnVtYmVyID0gZXRoZXJzLkJpZ051bWJlci5mcm9tKGRhdGEudG9TdHJpbmcoKSk7XG4gIG51bWJlciA9IG51bWJlci50b1N0cmluZygpO1xuICAqL1xuICByZXR1cm4gPGgxPmhlbGxvPC9oMT47XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJjb250cmFjdEFkZHJlc3NlcyIsImFiaUZpbGUiLCJCaWdOdW1iZXIiLCJ1c2VDb250cmFjdFJlYWQiLCJ1c2VDb250cmFjdCIsInVzZVNpZ25lciIsInBhcnNlIiwic3RyaW5naWZ5IiwidG9KU09OIiwiZnJvbUpTT04iLCJWaWV3UHJvZmlsZSIsInJlcXVpcmUiLCJkYXRhIiwic2lnbmVyIiwiaXNFcnJvciIsImlzTG9hZGluZyIsIm9uZSIsImNvbnNvbGUiLCJsb2ciLCJjaGFpbklkIiwiYWRkcmVzc09yTmFtZSIsImNvbnRyYWN0SW50ZXJmYWNlIiwiZnVuY3Rpb25OYW1lIiwiYXJncyIsInZpZXdwcm9maWxlIiwiY29udHJhY3RSZWFkIiwiaDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/viewProfile.js\n");

/***/ }),

/***/ "./constants/index.js":
/*!****************************!*\
  !*** ./constants/index.js ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nconst contractAddresses = __webpack_require__(/*! ./contractAddresses.json */ \"./constants/contractAddresses.json\");\nconst abiFile = __webpack_require__(/*! ./abi.json */ \"./constants/abi.json\");\nmodule.exports = {\n    contractAddresses,\n    abiFile\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb25zdGFudHMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFNQSxpQkFBaUIsR0FBR0MsbUJBQU8sQ0FBQyxvRUFBMEIsQ0FBQztBQUM3RCxNQUFNQyxPQUFPLEdBQUdELG1CQUFPLENBQUMsd0NBQVksQ0FBQztBQUVyQ0UsTUFBTSxDQUFDQyxPQUFPLEdBQUc7SUFDZkosaUJBQWlCO0lBQ2pCRSxPQUFPO0NBQ1IsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LXJhaW5ib3draXQtYXBwLy4vY29uc3RhbnRzL2luZGV4LmpzPzM3MzciXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY29udHJhY3RBZGRyZXNzZXMgPSByZXF1aXJlKFwiLi9jb250cmFjdEFkZHJlc3Nlcy5qc29uXCIpO1xuY29uc3QgYWJpRmlsZSA9IHJlcXVpcmUoXCIuL2FiaS5qc29uXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY29udHJhY3RBZGRyZXNzZXMsXG4gIGFiaUZpbGUsXG59O1xuIl0sIm5hbWVzIjpbImNvbnRyYWN0QWRkcmVzc2VzIiwicmVxdWlyZSIsImFiaUZpbGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./constants/index.js\n");

/***/ }),

/***/ "./pages/viewprofile.tsx":
/*!*******************************!*\
  !*** ./pages/viewprofile.tsx ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_viewProfile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/viewProfile */ \"./components/viewProfile.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_viewProfile__WEBPACK_IMPORTED_MODULE_1__]);\n_components_viewProfile__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n//import { loadComponents } from 'next/dist/server/load-components';\nconst Home = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Anon Stars\"\n                    }, void 0, false, {\n                        fileName: \"/home/user/Desktop/dev/anon-stars/frontend/my-rainbowkit-app/pages/viewprofile.tsx\",\n                        lineNumber: 12,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by @rainbow-me/create-rainbowkit\"\n                    }, void 0, false, {\n                        fileName: \"/home/user/Desktop/dev/anon-stars/frontend/my-rainbowkit-app/pages/viewprofile.tsx\",\n                        lineNumber: 13,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/home/user/Desktop/dev/anon-stars/frontend/my-rainbowkit-app/pages/viewprofile.tsx\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/user/Desktop/dev/anon-stars/frontend/my-rainbowkit-app/pages/viewprofile.tsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_viewProfile__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/user/Desktop/dev/anon-stars/frontend/my-rainbowkit-app/pages/viewprofile.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/user/Desktop/dev/anon-stars/frontend/my-rainbowkit-app/pages/viewprofile.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().footer),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: \"https://rainbow.me\",\n                    target: \"_blank\",\n                    rel: \"noopener noreferrer\",\n                    children: \"Made with ❤️ by your frens at \\uD83C\\uDF08\"\n                }, void 0, false, {\n                    fileName: \"/home/user/Desktop/dev/anon-stars/frontend/my-rainbowkit-app/pages/viewprofile.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/user/Desktop/dev/anon-stars/frontend/my-rainbowkit-app/pages/viewprofile.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/user/Desktop/dev/anon-stars/frontend/my-rainbowkit-app/pages/viewprofile.tsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy92aWV3cHJvZmlsZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVvRDtBQUN2QjtBQUNrQjtBQUMvQyxvRUFBb0U7QUFFcEUsTUFBTUcsSUFBSSxHQUFhLElBQU07SUFDM0IscUJBQ0UsOERBQUNDLEtBQUc7UUFBQ0MsU0FBUyxFQUFFSCwwRUFBZ0I7OzBCQUM5Qiw4REFBQ0Qsa0RBQUk7O2tDQUNILDhEQUFDTSxPQUFLO2tDQUFDLFlBQVU7Ozs7O2lDQUFRO2tDQUN6Qiw4REFBQ0MsTUFBSTt3QkFDSEMsSUFBSSxFQUFDLGFBQWE7d0JBQ2xCQyxPQUFPLEVBQUMsNENBQTRDOzs7OztpQ0FDcEQ7a0NBQ0YsOERBQUNDLE1BQUk7d0JBQUNDLEdBQUcsRUFBQyxNQUFNO3dCQUFDQyxJQUFJLEVBQUMsY0FBYzs7Ozs7aUNBQUc7Ozs7Ozt5QkFDbEM7MEJBRVAsOERBQUNDLE1BQUk7Z0JBQUNULFNBQVMsRUFBRUgscUVBQVc7MEJBQzFCLDRFQUFDRiwrREFBVzs7Ozs2QkFBRzs7Ozs7eUJBQ1Y7MEJBQ1AsOERBQUNlLFFBQU07Z0JBQUNWLFNBQVMsRUFBRUgsdUVBQWE7MEJBQzlCLDRFQUFDYyxHQUFDO29CQUFDSCxJQUFJLEVBQUMsb0JBQW9CO29CQUFDSSxNQUFNLEVBQUMsUUFBUTtvQkFBQ0wsR0FBRyxFQUFDLHFCQUFxQjs4QkFBQyw0Q0FFdkU7Ozs7OzZCQUFJOzs7Ozt5QkFDRzs7Ozs7O2lCQUNMLENBQ047Q0FDSDtBQUVELGlFQUFlVCxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1yYWluYm93a2l0LWFwcC8uL3BhZ2VzL3ZpZXdwcm9maWxlLnRzeD8yMWI3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbm5lY3RCdXR0b24gfSBmcm9tICdAcmFpbmJvdy1tZS9yYWluYm93a2l0JztcbmltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0JztcbmltcG9ydCBWaWV3UHJvZmlsZSBmcm9tIFwiLi4vY29tcG9uZW50cy92aWV3UHJvZmlsZVwiO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcyc7XG4vL2ltcG9ydCB7IGxvYWRDb21wb25lbnRzIH0gZnJvbSAnbmV4dC9kaXN0L3NlcnZlci9sb2FkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBIb21lOiBOZXh0UGFnZSA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkFub24gU3RhcnM8L3RpdGxlPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgY29udGVudD1cIkdlbmVyYXRlZCBieSBAcmFpbmJvdy1tZS9jcmVhdGUtcmFpbmJvd2tpdFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIDxWaWV3UHJvZmlsZSAvPlxuICAgICAgPC9tYWluPlxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9yYWluYm93Lm1lXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxuICAgICAgICAgIE1hZGUgd2l0aCDinaTvuI8gYnkgeW91ciBmcmVucyBhdCDwn4yIXG4gICAgICAgIDwvYT5cbiAgICAgIDwvZm9vdGVyPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiXSwibmFtZXMiOlsiVmlld1Byb2ZpbGUiLCJIZWFkIiwic3R5bGVzIiwiSG9tZSIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJtYWluIiwiZm9vdGVyIiwiYSIsInRhcmdldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/viewprofile.tsx\n");

/***/ }),

/***/ "@ethersproject/bignumber":
/*!*******************************************!*\
  !*** external "@ethersproject/bignumber" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@ethersproject/bignumber");

/***/ }),

/***/ "flatted?08e7":
/*!**************************!*\
  !*** external "flatted" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("flatted");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "wagmi":
/*!************************!*\
  !*** external "wagmi" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("wagmi");

/***/ }),

/***/ "flatted?229a":
/*!**************************!*\
  !*** external "flatted" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = import("flatted");;

/***/ }),

/***/ "./constants/abi.json":
/*!****************************!*\
  !*** ./constants/abi.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"type":"constructor","payable":false,"inputs":[]},{"type":"error","name":"ImSorryTheProfileExists","inputs":[]},{"type":"error","name":"YouAreNotThatGuy_Owner","inputs":[]},{"type":"event","anonymous":false,"name":"NewProfileGenerated","inputs":[{"type":"uint256","name":"id","indexed":false},{"type":"string","name":"username","indexed":false},{"type":"string","name":"profilePictureUrl","indexed":false},{"type":"string","name":"descriptionOfSkills","indexed":false},{"type":"string","name":"resumeLink","indexed":false}]},{"type":"function","name":"createProfile","constant":false,"payable":false,"gas":29000000,"inputs":[{"type":"string","name":"_username"},{"type":"string","name":"_profilePictureUrl"},{"type":"string","name":"_descriptionOfSkills"},{"type":"string","name":"_resumeLink"}],"outputs":[]},{"type":"function","name":"endorseProfile","constant":false,"payable":false,"gas":29000000,"inputs":[{"type":"address","name":"_endorsee"}],"outputs":[]},{"type":"function","name":"endorsementId","constant":true,"stateMutability":"view","payable":false,"gas":29000000,"inputs":[],"outputs":[{"type":"uint256"}]},{"type":"function","name":"endorsementList","constant":true,"stateMutability":"view","payable":false,"gas":29000000,"inputs":[{"type":"uint256"},{"type":"uint256"}],"outputs":[{"type":"uint256"}]},{"type":"function","name":"endorsementToAddress","constant":true,"stateMutability":"view","payable":false,"gas":29000000,"inputs":[{"type":"uint256"}],"outputs":[{"type":"address"}]},{"type":"function","name":"id","constant":true,"stateMutability":"view","payable":false,"gas":29000000,"inputs":[],"outputs":[{"type":"uint256"}]},{"type":"function","name":"idToOwner","constant":true,"stateMutability":"view","payable":false,"gas":29000000,"inputs":[{"type":"address"}],"outputs":[{"type":"uint256"}]},{"type":"function","name":"profileCount","constant":true,"stateMutability":"view","payable":false,"gas":29000000,"inputs":[],"outputs":[{"type":"uint256"}]},{"type":"function","name":"profileToOwner","constant":true,"stateMutability":"view","payable":false,"gas":29000000,"inputs":[{"type":"uint256"}],"outputs":[{"type":"address"}]},{"type":"function","name":"profiles","constant":true,"stateMutability":"view","payable":false,"gas":29000000,"inputs":[{"type":"uint256"}],"outputs":[{"type":"uint256","name":"id"},{"type":"string","name":"username"},{"type":"string","name":"profilePictureUrl"},{"type":"string","name":"descriptionOfSkills"},{"type":"string","name":"resumeLink"}]},{"type":"function","name":"returnEndorsementId","constant":true,"stateMutability":"view","payable":false,"gas":29000000,"inputs":[],"outputs":[{"type":"uint256"}]},{"type":"function","name":"returnEndorsements","constant":true,"stateMutability":"view","payable":false,"gas":29000000,"inputs":[{"type":"address","name":"_whoseThatProfile"}],"outputs":[{"type":"uint256[]"}]},{"type":"function","name":"returnEndorsementsAddresses","constant":true,"stateMutability":"view","payable":false,"gas":29000000,"inputs":[{"type":"address","name":"_whoseThatProfile"}],"outputs":[{"type":"address[]"}]},{"type":"function","name":"returnId","constant":true,"stateMutability":"view","payable":false,"gas":29000000,"inputs":[],"outputs":[{"type":"uint256"}]},{"type":"function","name":"returnProfilesLength","constant":true,"stateMutability":"view","payable":false,"gas":29000000,"inputs":[],"outputs":[{"type":"uint256"}]},{"type":"function","name":"viewProfile","constant":true,"stateMutability":"view","payable":false,"gas":29000000,"inputs":[{"type":"address","name":"_whoseThatProfile"}],"outputs":[{"type":"tuple","name":"profile","components":[{"type":"uint256","name":"id"},{"type":"string","name":"username"},{"type":"string","name":"profilePictureUrl"},{"type":"string","name":"descriptionOfSkills"},{"type":"string","name":"resumeLink"}]}]},{"type":"function","name":"viewProfileStrings","constant":true,"stateMutability":"view","payable":false,"gas":29000000,"inputs":[{"type":"address","name":"_whoseThatProfile"}],"outputs":[{"type":"string","name":"username"},{"type":"string","name":"profilePictureUrl"},{"type":"string","name":"descriptionOfSkills"},{"type":"string","name":"resumeLink"}]},{"type":"function","name":"withdraw","constant":false,"payable":false,"gas":29000000,"inputs":[],"outputs":[]}]');

/***/ }),

/***/ "./constants/contractAddresses.json":
/*!******************************************!*\
  !*** ./constants/contractAddresses.json ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"4":["0x235b364e14869fe0f452d261252147A00cF95904"]}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/viewprofile.tsx"));
module.exports = __webpack_exports__;

})();