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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @rainbow-me/rainbowkit */ \"@rainbow-me/rainbowkit\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(wagmi__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi/providers/alchemy */ \"wagmi/providers/alchemy\");\n/* harmony import */ var wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var wagmi_providers_public__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi/providers/public */ \"wagmi/providers/public\");\n/* harmony import */ var wagmi_providers_public__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(wagmi_providers_public__WEBPACK_IMPORTED_MODULE_5__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__]);\n_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\nconst localChain = {\n    id: 31337,\n    name: \"LocalHost\",\n    network: \"Hardhat\",\n    iconUrl: \"https://seeklogo.com/images/H/hardhat-logo-888739EBB4-seeklogo.com.png\",\n    iconBackground: \"#fff\",\n    nativeCurrency: {\n        decimals: 18,\n        name: \"Ethereum\",\n        symbol: \"ETH\"\n    },\n    rpcUrls: {\n        default: \"http://127.0.0.1:8545/\"\n    },\n    blockExplorers: {\n        default: {\n            name: \"SnowTrace\",\n            url: \"https://snowtrace.io\"\n        },\n        etherscan: {\n            name: \"SnowTrace\",\n            url: \"https://snowtrace.io\"\n        }\n    },\n    testnet: false\n};\nconst { chains , provider , webSocketProvider  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.configureChains)([\n    localChain,\n    wagmi__WEBPACK_IMPORTED_MODULE_3__.chain.mainnet,\n    wagmi__WEBPACK_IMPORTED_MODULE_3__.chain.polygon,\n    wagmi__WEBPACK_IMPORTED_MODULE_3__.chain.optimism,\n    wagmi__WEBPACK_IMPORTED_MODULE_3__.chain.arbitrum,\n    wagmi__WEBPACK_IMPORTED_MODULE_3__.chain.rinkeby,\n    ...process.env.NEXT_PUBLIC_ENABLE_TESTNETS === \"true\" ? [\n        wagmi__WEBPACK_IMPORTED_MODULE_3__.chain.goerli,\n        wagmi__WEBPACK_IMPORTED_MODULE_3__.chain.kovan,\n        wagmi__WEBPACK_IMPORTED_MODULE_3__.chain.rinkeby,\n        wagmi__WEBPACK_IMPORTED_MODULE_3__.chain.ropsten\n    ] : [], \n], [\n    (0,wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_4__.alchemyProvider)({\n        // This is Alchemy's default API key.\n        // You can get your own at https://dashboard.alchemyapi.io\n        apiKey: \"_gg7wSSi0KMBsdKnGVfHDueq6xMB9EkC\"\n    }),\n    (0,wagmi_providers_public__WEBPACK_IMPORTED_MODULE_5__.publicProvider)(), \n]);\nconst { connectors  } = (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__.getDefaultWallets)({\n    appName: \"RainbowKit App\",\n    chains\n});\nconst wagmiClient = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.createClient)({\n    autoConnect: true,\n    connectors,\n    provider,\n    webSocketProvider\n});\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_3__.WagmiConfig, {\n        client: wagmiClient,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__.RainbowKitProvider, {\n            chains: chains,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/home/user/Desktop/dev/anon-stars/frontend/my-rainbowkit-app/pages/_app.tsx\",\n                lineNumber: 67,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/user/Desktop/dev/anon-stars/frontend/my-rainbowkit-app/pages/_app.tsx\",\n            lineNumber: 66,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/user/Desktop/dev/anon-stars/frontend/my-rainbowkit-app/pages/_app.tsx\",\n        lineNumber: 65,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUErQjtBQUNZO0FBRTJDO0FBQ0c7QUFDL0I7QUFDRjtBQUV4RCxNQUFNUSxVQUFVLEdBQVU7SUFDeEJDLEVBQUUsRUFBRSxLQUFLO0lBQ1RDLElBQUksRUFBRSxXQUFXO0lBQ2pCQyxPQUFPLEVBQUUsU0FBUztJQUNsQkMsT0FBTyxFQUFFLHdFQUF3RTtJQUNqRkMsY0FBYyxFQUFFLE1BQU07SUFDdEJDLGNBQWMsRUFBRTtRQUNkQyxRQUFRLEVBQUUsRUFBRTtRQUNaTCxJQUFJLEVBQUUsVUFBVTtRQUNoQk0sTUFBTSxFQUFFLEtBQUs7S0FDZDtJQUNEQyxPQUFPLEVBQUU7UUFDUEMsT0FBTyxFQUFFLHdCQUF3QjtLQUNsQztJQUNEQyxjQUFjLEVBQUU7UUFDZEQsT0FBTyxFQUFFO1lBQUVSLElBQUksRUFBRSxXQUFXO1lBQUVVLEdBQUcsRUFBRSxzQkFBc0I7U0FBRTtRQUMzREMsU0FBUyxFQUFFO1lBQUVYLElBQUksRUFBRSxXQUFXO1lBQUVVLEdBQUcsRUFBRSxzQkFBc0I7U0FBRTtLQUM5RDtJQUNERSxPQUFPLEVBQUUsS0FBSztDQUNmO0FBQ0QsTUFBTSxFQUFFQyxNQUFNLEdBQUVDLFFBQVEsR0FBRUMsaUJBQWlCLEdBQUUsR0FBR3RCLHNEQUFlLENBQzdEO0lBQ0VLLFVBQVU7SUFDVk4sZ0RBQWE7SUFDYkEsZ0RBQWE7SUFDYkEsaURBQWM7SUFDZEEsaURBQWM7SUFDZEEsZ0RBQWE7T0FDVDZCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQywyQkFBMkIsS0FBSyxNQUFNLEdBQ2xEO1FBQUMvQiwrQ0FBWTtRQUFFQSw4Q0FBVztRQUFFQSxnREFBYTtRQUFFQSxnREFBYTtLQUFDLEdBQ3pELEVBQUU7Q0FDUCxFQUNEO0lBQ0VJLHdFQUFlLENBQUM7UUFDZCxxQ0FBcUM7UUFDckMsMERBQTBEO1FBQzFEK0IsTUFBTSxFQUFFLGtDQUFrQztLQUMzQyxDQUFDO0lBQ0Y5QixzRUFBYyxFQUFFO0NBQ2pCLENBQ0Y7QUFFRCxNQUFNLEVBQUUrQixVQUFVLEdBQUUsR0FBR3JDLHlFQUFpQixDQUFDO0lBQ3ZDc0MsT0FBTyxFQUFFLGdCQUFnQjtJQUN6QmhCLE1BQU07Q0FDUCxDQUFDO0FBRUYsTUFBTWlCLFdBQVcsR0FBR3BDLG1EQUFZLENBQUM7SUFDL0JxQyxXQUFXLEVBQUUsSUFBSTtJQUNqQkgsVUFBVTtJQUNWZCxRQUFRO0lBQ1JDLGlCQUFpQjtDQUNsQixDQUFDO0FBRUYsU0FBU2lCLEtBQUssQ0FBQyxFQUFFQyxTQUFTLEdBQUVDLFNBQVMsR0FBWSxFQUFFO0lBQ2pELHFCQUNFLDhEQUFDdkMsOENBQVc7UUFBQ3dDLE1BQU0sRUFBRUwsV0FBVztrQkFDOUIsNEVBQUN4QyxzRUFBa0I7WUFBQ3VCLE1BQU0sRUFBRUEsTUFBTTtzQkFDaEMsNEVBQUNvQixTQUFTO2dCQUFFLEdBQUdDLFNBQVM7Ozs7O29CQUFJOzs7OztnQkFDVDs7Ozs7WUFDVCxDQUNkO0NBQ0g7QUFFRCxpRUFBZUYsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktcmFpbmJvd2tpdC1hcHAvLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJztcbmltcG9ydCAnQHJhaW5ib3ctbWUvcmFpbmJvd2tpdC9zdHlsZXMuY3NzJztcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCc7XG5pbXBvcnQgeyBDaGFpbiwgUmFpbmJvd0tpdFByb3ZpZGVyLCBnZXREZWZhdWx0V2FsbGV0cyB9IGZyb20gJ0ByYWluYm93LW1lL3JhaW5ib3draXQnO1xuaW1wb3J0IHsgY2hhaW4sIGNvbmZpZ3VyZUNoYWlucywgZGVmYXVsdENoYWlucywgY3JlYXRlQ2xpZW50LCBXYWdtaUNvbmZpZyB9IGZyb20gJ3dhZ21pJztcbmltcG9ydCB7IGFsY2hlbXlQcm92aWRlciB9IGZyb20gJ3dhZ21pL3Byb3ZpZGVycy9hbGNoZW15JztcbmltcG9ydCB7IHB1YmxpY1Byb3ZpZGVyIH0gZnJvbSAnd2FnbWkvcHJvdmlkZXJzL3B1YmxpYyc7XG5cbmNvbnN0IGxvY2FsQ2hhaW46IENoYWluID0ge1xuICBpZDogMzEzMzcsXG4gIG5hbWU6ICdMb2NhbEhvc3QnLFxuICBuZXR3b3JrOiAnSGFyZGhhdCcsXG4gIGljb25Vcmw6ICdodHRwczovL3NlZWtsb2dvLmNvbS9pbWFnZXMvSC9oYXJkaGF0LWxvZ28tODg4NzM5RUJCNC1zZWVrbG9nby5jb20ucG5nJyxcbiAgaWNvbkJhY2tncm91bmQ6ICcjZmZmJyxcbiAgbmF0aXZlQ3VycmVuY3k6IHtcbiAgICBkZWNpbWFsczogMTgsXG4gICAgbmFtZTogJ0V0aGVyZXVtJyxcbiAgICBzeW1ib2w6ICdFVEgnLFxuICB9LFxuICBycGNVcmxzOiB7XG4gICAgZGVmYXVsdDogJ2h0dHA6Ly8xMjcuMC4wLjE6ODU0NS8nLFxuICB9LFxuICBibG9ja0V4cGxvcmVyczoge1xuICAgIGRlZmF1bHQ6IHsgbmFtZTogJ1Nub3dUcmFjZScsIHVybDogJ2h0dHBzOi8vc25vd3RyYWNlLmlvJyB9LFxuICAgIGV0aGVyc2NhbjogeyBuYW1lOiAnU25vd1RyYWNlJywgdXJsOiAnaHR0cHM6Ly9zbm93dHJhY2UuaW8nIH0sXG4gIH0sXG4gIHRlc3RuZXQ6IGZhbHNlLFxufTtcbmNvbnN0IHsgY2hhaW5zLCBwcm92aWRlciwgd2ViU29ja2V0UHJvdmlkZXIgfSA9IGNvbmZpZ3VyZUNoYWlucyhcbiAgW1xuICAgIGxvY2FsQ2hhaW4sXG4gICAgY2hhaW4ubWFpbm5ldCxcbiAgICBjaGFpbi5wb2x5Z29uLFxuICAgIGNoYWluLm9wdGltaXNtLFxuICAgIGNoYWluLmFyYml0cnVtLFxuICAgIGNoYWluLnJpbmtlYnksXG4gICAgLi4uKHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0VOQUJMRV9URVNUTkVUUyA9PT0gJ3RydWUnXG4gICAgICA/IFtjaGFpbi5nb2VybGksIGNoYWluLmtvdmFuLCBjaGFpbi5yaW5rZWJ5LCBjaGFpbi5yb3BzdGVuXVxuICAgICAgOiBbXSksXG4gIF0sXG4gIFtcbiAgICBhbGNoZW15UHJvdmlkZXIoe1xuICAgICAgLy8gVGhpcyBpcyBBbGNoZW15J3MgZGVmYXVsdCBBUEkga2V5LlxuICAgICAgLy8gWW91IGNhbiBnZXQgeW91ciBvd24gYXQgaHR0cHM6Ly9kYXNoYm9hcmQuYWxjaGVteWFwaS5pb1xuICAgICAgYXBpS2V5OiAnX2dnN3dTU2kwS01Cc2RLbkdWZkhEdWVxNnhNQjlFa0MnLFxuICAgIH0pLFxuICAgIHB1YmxpY1Byb3ZpZGVyKCksXG4gIF1cbik7XG5cbmNvbnN0IHsgY29ubmVjdG9ycyB9ID0gZ2V0RGVmYXVsdFdhbGxldHMoe1xuICBhcHBOYW1lOiAnUmFpbmJvd0tpdCBBcHAnLFxuICBjaGFpbnMsXG59KTtcblxuY29uc3Qgd2FnbWlDbGllbnQgPSBjcmVhdGVDbGllbnQoe1xuICBhdXRvQ29ubmVjdDogdHJ1ZSxcbiAgY29ubmVjdG9ycyxcbiAgcHJvdmlkZXIsXG4gIHdlYlNvY2tldFByb3ZpZGVyLFxufSk7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8V2FnbWlDb25maWcgY2xpZW50PXt3YWdtaUNsaWVudH0+XG4gICAgICA8UmFpbmJvd0tpdFByb3ZpZGVyIGNoYWlucz17Y2hhaW5zfT5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9SYWluYm93S2l0UHJvdmlkZXI+XG4gICAgPC9XYWdtaUNvbmZpZz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsiUmFpbmJvd0tpdFByb3ZpZGVyIiwiZ2V0RGVmYXVsdFdhbGxldHMiLCJjaGFpbiIsImNvbmZpZ3VyZUNoYWlucyIsImNyZWF0ZUNsaWVudCIsIldhZ21pQ29uZmlnIiwiYWxjaGVteVByb3ZpZGVyIiwicHVibGljUHJvdmlkZXIiLCJsb2NhbENoYWluIiwiaWQiLCJuYW1lIiwibmV0d29yayIsImljb25VcmwiLCJpY29uQmFja2dyb3VuZCIsIm5hdGl2ZUN1cnJlbmN5IiwiZGVjaW1hbHMiLCJzeW1ib2wiLCJycGNVcmxzIiwiZGVmYXVsdCIsImJsb2NrRXhwbG9yZXJzIiwidXJsIiwiZXRoZXJzY2FuIiwidGVzdG5ldCIsImNoYWlucyIsInByb3ZpZGVyIiwid2ViU29ja2V0UHJvdmlkZXIiLCJtYWlubmV0IiwicG9seWdvbiIsIm9wdGltaXNtIiwiYXJiaXRydW0iLCJyaW5rZWJ5IiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0VOQUJMRV9URVNUTkVUUyIsImdvZXJsaSIsImtvdmFuIiwicm9wc3RlbiIsImFwaUtleSIsImNvbm5lY3RvcnMiLCJhcHBOYW1lIiwid2FnbWlDbGllbnQiLCJhdXRvQ29ubmVjdCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiY2xpZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



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

/***/ "wagmi/providers/alchemy":
/*!******************************************!*\
  !*** external "wagmi/providers/alchemy" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("wagmi/providers/alchemy");

/***/ }),

/***/ "wagmi/providers/public":
/*!*****************************************!*\
  !*** external "wagmi/providers/public" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("wagmi/providers/public");

/***/ }),

/***/ "@rainbow-me/rainbowkit":
/*!*****************************************!*\
  !*** external "@rainbow-me/rainbowkit" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@rainbow-me/rainbowkit");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();