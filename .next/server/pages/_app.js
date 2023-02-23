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

/***/ "./pages/_app.jsx":
/*!************************!*\
  !*** ./pages/_app.jsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/store */ \"./redux/store.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux-persist/integration/react */ \"redux-persist/integration/react\");\n/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @stripe/stripe-js */ \"@stripe/stripe-js\");\n/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @stripe/react-stripe-js */ \"@stripe/react-stripe-js\");\n/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-hot-toast */ \"react-hot-toast\");\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-cookie */ \"react-cookie\");\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_cookie__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _public_components_loading__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../public/components/loading */ \"./public/components/loading.jsx\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_11__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_8__]);\nreact_hot_toast__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst stripePromise = (0,_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_6__.loadStripe)(\"pk_live_51KduLnFoywW8ROP45Y2X8iOfAAY30bjenrn28xNFlQzGof7llueRfgTyxlKaXdH08SbM14CQD4EUqsqXMz2vafwQ00pnpI8JzK\");\nconst MyApp = ({ Component , pageProps  })=>{\n    let state = _redux_store__WEBPACK_IMPORTED_MODULE_3__.store.getState();\n    const { 0: clientSecret , 1: setClientSecret  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Create PaymentIntent as soon as the page loads\n        fetch(\"/api/create-payment-intent\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                items: state.cart.cartItems\n            })\n        }).then((res)=>res.json()).then((data)=>setClientSecret(data.clientSecret));\n    }, [\n        state.cart\n    ]);\n    const appearance = {\n        theme: \"stripe\"\n    };\n    const options = {\n        clientSecret,\n        appearance\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_11___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                    rel: \"shortcut icon\",\n                    href: \"../public/assets/favicon.ico\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\DELL\\\\upmysalaryv2\\\\pages\\\\_app.jsx\",\n                    lineNumber: 46,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\upmysalaryv2\\\\pages\\\\_app.jsx\",\n                lineNumber: 45,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_cookie__WEBPACK_IMPORTED_MODULE_9__.CookiesProvider, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_4__.Provider, {\n                    store: _redux_store__WEBPACK_IMPORTED_MODULE_3__.store,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_5__.PersistGate, {\n                        loading: null,\n                        persistor: _redux_store__WEBPACK_IMPORTED_MODULE_3__.persistor,\n                        children: clientSecret && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_7__.Elements, {\n                            options: options,\n                            stripe: stripePromise,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_hot_toast__WEBPACK_IMPORTED_MODULE_8__.Toaster, {\n                                    position: \"top-right\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\DELL\\\\upmysalaryv2\\\\pages\\\\_app.jsx\",\n                                    lineNumber: 53,\n                                    columnNumber: 21\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                                    ...pageProps\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\DELL\\\\upmysalaryv2\\\\pages\\\\_app.jsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\DELL\\\\upmysalaryv2\\\\pages\\\\_app.jsx\",\n                            lineNumber: 52,\n                            columnNumber: 19\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DELL\\\\upmysalaryv2\\\\pages\\\\_app.jsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\DELL\\\\upmysalaryv2\\\\pages\\\\_app.jsx\",\n                    lineNumber: 49,\n                    columnNumber: 7\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\upmysalaryv2\\\\pages\\\\_app.jsx\",\n                lineNumber: 48,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBc0Q7QUFDdkI7QUFFUTtBQUNhO0FBQ1M7QUFDbEI7QUFDSTtBQUNJO0FBQ1Q7QUFDSztBQUNJO0FBQ3RCO0FBRTdCLE1BQU1jLGFBQWEsR0FBR04sNkRBQVUsQ0FBQ08sNkdBQThDLENBQUM7QUFFaEYsTUFBTUcsS0FBSyxHQUFHLENBQUMsRUFBRUMsU0FBUyxHQUFFQyxTQUFTLEdBQUUsR0FBSTtJQUV6QyxJQUFJQyxLQUFLLEdBQUdsQix3REFBYyxFQUFFO0lBRTlCLE1BQU0sS0FBQ29CLFlBQVksTUFBRUMsZUFBZSxNQUFJeEIsK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFFcERDLGdEQUFTLENBQUMsSUFBTTtRQUNkLGlEQUFpRDtRQUVqRHdCLEtBQUssQ0FBQyw0QkFBNEIsRUFBRTtZQUNsQ0MsTUFBTSxFQUFFLE1BQU07WUFDZEMsT0FBTyxFQUFFO2dCQUFFLGNBQWMsRUFBRSxrQkFBa0I7YUFBRTtZQUMvQ0MsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQVMsQ0FBQztnQkFBRUMsS0FBSyxFQUFFVixLQUFLLENBQUNXLElBQUksQ0FBQ0MsU0FBUzthQUFFLENBQUM7U0FDdEQsQ0FBQyxDQUNDQyxJQUFJLENBQUMsQ0FBQ0MsR0FBRyxHQUFLQSxHQUFHLENBQUNDLElBQUksRUFBRSxDQUFDLENBQ3pCRixJQUFJLENBQUMsQ0FBQ0csSUFBSSxHQUFLYixlQUFlLENBQUNhLElBQUksQ0FBQ2QsWUFBWSxDQUFDLENBQUMsQ0FBQztJQUN4RCxDQUFDLEVBQUU7UUFBQ0YsS0FBSyxDQUFDVyxJQUFJO0tBQUMsQ0FBQyxDQUFDO0lBRWpCLE1BQU1NLFVBQVUsR0FBRztRQUNqQkMsS0FBSyxFQUFFLFFBQVE7S0FDaEI7SUFDRCxNQUFNQyxPQUFPLEdBQUc7UUFDZGpCLFlBQVk7UUFDWmUsVUFBVTtLQUNYO0lBRUMscUJBQ0U7OzBCQUNBLDhEQUFDekIsbURBQUk7MEJBQ0MsNEVBQUM0QixNQUFJO29CQUFDQyxHQUFHLEVBQUMsZUFBZTtvQkFBQ0MsSUFBSSxFQUFDLDhCQUE4Qjs7Ozs7NkJBQUc7Ozs7O3lCQUMvRDswQkFDUCw4REFBQ2hDLHlEQUFlOzBCQUNkLDRFQUFDUCxpREFBUTtvQkFBQ0QsS0FBSyxFQUFFQSwrQ0FBSzs4QkFDcEIsNEVBQUNHLHdFQUFXO3dCQUFDc0MsT0FBTyxFQUFFLElBQUk7d0JBQUVyQyxTQUFTLEVBQUVBLG1EQUFTO2tDQUN6Q2dCLFlBQVksa0JBQ1QsOERBQUNkLDZEQUFROzRCQUFDK0IsT0FBTyxFQUFFQSxPQUFPOzRCQUFFSyxNQUFNLEVBQUUvQixhQUFhOzs4Q0FDL0MsOERBQUNKLG9EQUFPO29DQUFDb0MsUUFBUSxFQUFDLFdBQVc7Ozs7OzZDQUFFOzhDQUUzQiw4REFBQzNCLFNBQVM7b0NBQUUsR0FBR0MsU0FBUzs7Ozs7NkNBQUk7Ozs7OztxQ0FFdkI7Ozs7O2lDQUVQOzs7Ozs2QkFDTDs7Ozs7eUJBQ0s7O29CQUNmLENBQ0o7QUFDSCxDQUFDO0FBR0QsaUVBQWVGLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91cG15c2FsYXJ5djIvLi9wYWdlcy9fYXBwLmpzeD80Y2IzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIFN1c3BlbnNlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnO1xuXG5pbXBvcnQgeyBzdG9yZSB9IGZyb20gJy4uL3JlZHV4L3N0b3JlJztcbmltcG9ydCB7IFByb3ZpZGVyLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IFBlcnNpc3RHYXRlIH0gZnJvbSAncmVkdXgtcGVyc2lzdC9pbnRlZ3JhdGlvbi9yZWFjdCdcbmltcG9ydCB7IHBlcnNpc3RvciB9IGZyb20gJy4uL3JlZHV4L3N0b3JlJztcbmltcG9ydCB7IGxvYWRTdHJpcGUgfSBmcm9tIFwiQHN0cmlwZS9zdHJpcGUtanNcIjtcbmltcG9ydCB7IEVsZW1lbnRzIH0gZnJvbSBcIkBzdHJpcGUvcmVhY3Qtc3RyaXBlLWpzXCI7XG5pbXBvcnQgeyBUb2FzdGVyIH0gZnJvbSAncmVhY3QtaG90LXRvYXN0JztcbmltcG9ydCB7IENvb2tpZXNQcm92aWRlciB9IGZyb20gXCJyZWFjdC1jb29raWVcIjtcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4uL3B1YmxpYy9jb21wb25lbnRzL2xvYWRpbmcnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcblxuY29uc3Qgc3RyaXBlUHJvbWlzZSA9IGxvYWRTdHJpcGUocHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1RSSVBFX1BVQkxJU0hBQkxFX0tFWSk7XG5cbmNvbnN0IE15QXBwID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSk9PiB7XG5cbiAgbGV0IHN0YXRlID0gc3RvcmUuZ2V0U3RhdGUoKTtcblxuY29uc3QgW2NsaWVudFNlY3JldCwgc2V0Q2xpZW50U2VjcmV0XSA9IHVzZVN0YXRlKFwiXCIpO1xuXG51c2VFZmZlY3QoKCkgPT4ge1xuICAvLyBDcmVhdGUgUGF5bWVudEludGVudCBhcyBzb29uIGFzIHRoZSBwYWdlIGxvYWRzXG4gIFxuICBmZXRjaChcIi9hcGkvY3JlYXRlLXBheW1lbnQtaW50ZW50XCIsIHtcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGl0ZW1zOiBzdGF0ZS5jYXJ0LmNhcnRJdGVtcyB9KSxcbiAgfSlcbiAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgIC50aGVuKChkYXRhKSA9PiBzZXRDbGllbnRTZWNyZXQoZGF0YS5jbGllbnRTZWNyZXQpKTtcbn0sIFtzdGF0ZS5jYXJ0XSk7XG5cbmNvbnN0IGFwcGVhcmFuY2UgPSB7XG4gIHRoZW1lOiAnc3RyaXBlJyxcbn07XG5jb25zdCBvcHRpb25zID0ge1xuICBjbGllbnRTZWNyZXQsXG4gIGFwcGVhcmFuY2UsXG59O1xuICBcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgIDxIZWFkPlxuICAgICAgICAgIDxsaW5rIHJlbD1cInNob3J0Y3V0IGljb25cIiBocmVmPVwiLi4vcHVibGljL2Fzc2V0cy9mYXZpY29uLmljb1wiIC8+XG4gICAgPC9IZWFkPlxuICAgIDxDb29raWVzUHJvdmlkZXI+XG4gICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgICAgPFBlcnNpc3RHYXRlIGxvYWRpbmc9e251bGx9IHBlcnNpc3Rvcj17cGVyc2lzdG9yfT5cbiAgICAgICAgICAgICAge2NsaWVudFNlY3JldCAmJiAoXG4gICAgICAgICAgICAgICAgICA8RWxlbWVudHMgb3B0aW9ucz17b3B0aW9uc30gc3RyaXBlPXtzdHJpcGVQcm9taXNlfT5cbiAgICAgICAgICAgICAgICAgICAgPFRvYXN0ZXIgcG9zaXRpb249XCJ0b3AtcmlnaHRcIi8+XG4gICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICBcbiAgICAgICAgICAgICAgICAgIDwvRWxlbWVudHM+XG4gICAgICAgICAgICAgICl9IFxuICAgICAgICA8L1BlcnNpc3RHYXRlPlxuICAgICAgPC9Qcm92aWRlcj5cbiAgICA8L0Nvb2tpZXNQcm92aWRlcj5cbiAgICA8Lz5cbiAgKVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJTdXNwZW5zZSIsInN0b3JlIiwiUHJvdmlkZXIiLCJ1c2VTZWxlY3RvciIsIlBlcnNpc3RHYXRlIiwicGVyc2lzdG9yIiwibG9hZFN0cmlwZSIsIkVsZW1lbnRzIiwiVG9hc3RlciIsIkNvb2tpZXNQcm92aWRlciIsIkxvYWRpbmciLCJIZWFkIiwic3RyaXBlUHJvbWlzZSIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19TVFJJUEVfUFVCTElTSEFCTEVfS0VZIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJzdGF0ZSIsImdldFN0YXRlIiwiY2xpZW50U2VjcmV0Iiwic2V0Q2xpZW50U2VjcmV0IiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJpdGVtcyIsImNhcnQiLCJjYXJ0SXRlbXMiLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJhcHBlYXJhbmNlIiwidGhlbWUiLCJvcHRpb25zIiwibGluayIsInJlbCIsImhyZWYiLCJsb2FkaW5nIiwic3RyaXBlIiwicG9zaXRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.jsx\n");

/***/ }),

/***/ "./public/components/loading.jsx":
/*!***************************************!*\
  !*** ./public/components/loading.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Loading)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Loading() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mt-10 sm:pt-16\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"animate-pulse text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-l from-blue-900 to-blue-500 sm:text-5xl lg:text-6xl\",\n                children: \"UpMySalary\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\upmysalaryv2\\\\public\\\\components\\\\loading.jsx\",\n                lineNumber: 5,\n                columnNumber: 13\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\DELL\\\\upmysalaryv2\\\\public\\\\components\\\\loading.jsx\",\n            lineNumber: 4,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\DELL\\\\upmysalaryv2\\\\public\\\\components\\\\loading.jsx\",\n        lineNumber: 3,\n        columnNumber: 7\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvY29tcG9uZW50cy9sb2FkaW5nLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUFlLFNBQVNBLE9BQU8sR0FBRztJQUM5QixxQkFDRSw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUMsZ0JBQWdCO2tCQUM3Qiw0RUFBQ0QsS0FBRztZQUFDQyxTQUFTLEVBQUMsd0NBQXdDO3NCQUNuRCw0RUFBQ0MsSUFBRTtnQkFBQ0QsU0FBUyxFQUFDLGtKQUFrSjswQkFBQyxZQUFVOzs7OztvQkFBSzs7Ozs7Z0JBQzlLOzs7OztZQUNGLENBQ1A7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdXBteXNhbGFyeXYyLy4vcHVibGljL2NvbXBvbmVudHMvbG9hZGluZy5qc3g/M2RlYyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2FkaW5nKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xMCBzbTpwdC0xNlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byBtYXgtdy03eGwgcHgtNCBzbTpweC02IGxnOnB4LThcIj5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImFuaW1hdGUtcHVsc2UgdGV4dC00eGwgZm9udC1ib2xkIHRyYWNraW5nLXRpZ2h0IGJnLWNsaXAtdGV4dCB0ZXh0LXRyYW5zcGFyZW50IGJnLWdyYWRpZW50LXRvLWwgZnJvbS1ibHVlLTkwMCB0by1ibHVlLTUwMCBzbTp0ZXh0LTV4bCBsZzp0ZXh0LTZ4bFwiPlVwTXlTYWxhcnk8L2gxPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9Il0sIm5hbWVzIjpbIkxvYWRpbmciLCJkaXYiLCJjbGFzc05hbWUiLCJoMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./public/components/loading.jsx\n");

/***/ }),

/***/ "./redux/cart-reducer.js":
/*!*******************************!*\
  !*** ./redux/cart-reducer.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addItem\": () => (/* binding */ addItem),\n/* harmony export */   \"cartSlice\": () => (/* binding */ cartSlice),\n/* harmony export */   \"clearCart\": () => (/* binding */ clearCart),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"removeItem\": () => (/* binding */ removeItem)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _cart_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cart.utils */ \"./redux/cart.utils.js\");\n\n\nconst cartSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"cart\",\n    initialState: {\n        cartItems: []\n    },\n    reducers: {\n        addItem: (state, action)=>{\n            return {\n                ...state,\n                cartItems: (0,_cart_utils__WEBPACK_IMPORTED_MODULE_1__.addItemToCart)(state.cartItems, action.payload)\n            };\n        },\n        removeItem: (state, action)=>{\n            return {\n                ...state,\n                cartItems: (0,_cart_utils__WEBPACK_IMPORTED_MODULE_1__.removeItemFromCart)(state.cartItems, action.payload)\n            };\n        },\n        clearCart: (state)=>{\n            return {\n                ...state,\n                cartItems: []\n            };\n        }\n    }\n});\n// Action creators are generated for each case reducer function\nconst { addItem , removeItem , clearCart  } = cartSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cartSlice.reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1eC9jYXJ0LXJlZHVjZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBK0M7QUFDa0I7QUFFMUQsTUFBTUcsU0FBUyxHQUFHSCw2REFBVyxDQUFDO0lBQ2pDSSxJQUFJLEVBQUUsTUFBTTtJQUNaQyxZQUFZLEVBQUU7UUFDWkMsU0FBUyxFQUFFLEVBQUU7S0FDZDtJQUNEQyxRQUFRLEVBQUU7UUFDUkMsT0FBTyxFQUFFLENBQUNDLEtBQUssRUFBRUMsTUFBTSxHQUFLO1lBQzFCLE9BQU87Z0JBQ0gsR0FBR0QsS0FBSztnQkFDUkgsU0FBUyxFQUFFTCwwREFBYSxDQUFDUSxLQUFLLENBQUNILFNBQVMsRUFBRUksTUFBTSxDQUFDQyxPQUFPLENBQUM7YUFDNUQ7UUFFSCxDQUFDO1FBQ0RDLFVBQVUsRUFBRSxDQUFDSCxLQUFLLEVBQUVDLE1BQU0sR0FBSztZQUM5QixPQUFPO2dCQUNOLEdBQUdELEtBQUs7Z0JBQ1JILFNBQVMsRUFBQ0osK0RBQWtCLENBQUNPLEtBQUssQ0FBQ0gsU0FBUyxFQUFFSSxNQUFNLENBQUNDLE9BQU8sQ0FBQzthQUM3RDtRQUVGLENBQUM7UUFDREUsU0FBUyxFQUFDLENBQUNKLEtBQUssR0FBSztZQUNuQixPQUFPO2dCQUNMLEdBQUdBLEtBQUs7Z0JBQ1JILFNBQVMsRUFBQyxFQUFFO2FBQ2I7UUFFSCxDQUFDO0tBRUY7Q0FDRixDQUFDO0FBRUYsK0RBQStEO0FBQ3hELE1BQU0sRUFBRUUsT0FBTyxHQUFFSSxVQUFVLEdBQUVDLFNBQVMsR0FBRSxHQUFHVixTQUFTLENBQUNXLE9BQU87QUFFbkUsaUVBQWVYLFNBQVMsQ0FBQ1ksT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL3VwbXlzYWxhcnl2Mi8uL3JlZHV4L2NhcnQtcmVkdWNlci5qcz81YWNhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XHJcbmltcG9ydCB7IGFkZEl0ZW1Ub0NhcnQsIHJlbW92ZUl0ZW1Gcm9tQ2FydCB9IGZyb20gJy4vY2FydC51dGlscyc7XHJcblxyXG5leHBvcnQgY29uc3QgY2FydFNsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gICAgbmFtZTogJ2NhcnQnLFxyXG4gICAgaW5pdGlhbFN0YXRlOiB7XHJcbiAgICAgIGNhcnRJdGVtczogW10sXHJcbiAgICB9LFxyXG4gICAgcmVkdWNlcnM6IHtcclxuICAgICAgYWRkSXRlbTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgY2FydEl0ZW1zOiBhZGRJdGVtVG9DYXJ0KHN0YXRlLmNhcnRJdGVtcywgYWN0aW9uLnBheWxvYWQpIFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgfSxcclxuICAgICAgcmVtb3ZlSXRlbTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY2FydEl0ZW1zOnJlbW92ZUl0ZW1Gcm9tQ2FydChzdGF0ZS5jYXJ0SXRlbXMsIGFjdGlvbi5wYXlsb2FkKVxyXG4gICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICB9LFxyXG4gICAgICBjbGVhckNhcnQ6KHN0YXRlKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgY2FydEl0ZW1zOltdXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG4gIH0pXHJcbiAgXHJcbiAgLy8gQWN0aW9uIGNyZWF0b3JzIGFyZSBnZW5lcmF0ZWQgZm9yIGVhY2ggY2FzZSByZWR1Y2VyIGZ1bmN0aW9uXHJcbiAgZXhwb3J0IGNvbnN0IHsgYWRkSXRlbSwgcmVtb3ZlSXRlbSwgY2xlYXJDYXJ0IH0gPSBjYXJ0U2xpY2UuYWN0aW9uc1xyXG4gIFxyXG4gIGV4cG9ydCBkZWZhdWx0IGNhcnRTbGljZS5yZWR1Y2VyIl0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiYWRkSXRlbVRvQ2FydCIsInJlbW92ZUl0ZW1Gcm9tQ2FydCIsImNhcnRTbGljZSIsIm5hbWUiLCJpbml0aWFsU3RhdGUiLCJjYXJ0SXRlbXMiLCJyZWR1Y2VycyIsImFkZEl0ZW0iLCJzdGF0ZSIsImFjdGlvbiIsInBheWxvYWQiLCJyZW1vdmVJdGVtIiwiY2xlYXJDYXJ0IiwiYWN0aW9ucyIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./redux/cart-reducer.js\n");

/***/ }),

/***/ "./redux/cart.utils.js":
/*!*****************************!*\
  !*** ./redux/cart.utils.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addItemToCart\": () => (/* binding */ addItemToCart),\n/* harmony export */   \"removeItemFromCart\": () => (/* binding */ removeItemFromCart)\n/* harmony export */ });\nconst addItemToCart = (cartItems, cartItemToAdd)=>{\n    const existingCartItem = cartItems.find((cartItem)=>cartItem.id === cartItemToAdd.id);\n    if (existingCartItem) {\n        return cartItems.map((cartItem)=>cartItem.id === cartItemToAdd.id ? {\n                ...cartItem,\n                quantity: cartItem.quantity + 1\n            } : cartItem);\n    }\n    return [\n        ...cartItems,\n        {\n            ...cartItemToAdd,\n            quantity: 1\n        }\n    ];\n};\nconst removeItemFromCart = (cartItems, cartItemToRemove)=>{\n    const existingCartItem = cartItems.find((cartItem)=>cartItem.id === cartItemToRemove.id);\n    if (existingCartItem.quantity === 1) {\n        return cartItems.filter((cartItem)=>cartItem.id !== cartItemToRemove.id);\n    }\n    return cartItems.map((cartItem)=>cartItem.id === cartItemToRemove.id ? {\n            ...cartItem,\n            quantity: cartItem.quantity - 1\n        } : cartItem);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1eC9jYXJ0LnV0aWxzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQU8sTUFBTUEsYUFBYSxHQUFHLENBQUNDLFNBQVMsRUFBRUMsYUFBYSxHQUFLO0lBQ3ZELE1BQU1DLGdCQUFnQixHQUFHRixTQUFTLENBQUNHLElBQUksQ0FBQ0MsQ0FBQUEsUUFBUSxHQUFJQSxRQUFRLENBQUNDLEVBQUUsS0FBS0osYUFBYSxDQUFDSSxFQUFFLENBQUM7SUFFckYsSUFBR0gsZ0JBQWdCLEVBQUU7UUFDbEIsT0FBT0YsU0FBUyxDQUFDTSxHQUFHLENBQUNGLENBQUFBLFFBQVEsR0FBSUEsUUFBUSxDQUFDQyxFQUFFLEtBQUtKLGFBQWEsQ0FBQ0ksRUFBRSxHQUM5RDtnQkFBQyxHQUFHRCxRQUFRO2dCQUFFRyxRQUFRLEVBQUVILFFBQVEsQ0FBQ0csUUFBUSxHQUFHLENBQUM7YUFBQyxHQUNoREgsUUFBUSxDQUFDO0lBQ2IsQ0FBQztJQUNELE9BQU87V0FBSUosU0FBUztRQUFFO1lBQUMsR0FBR0MsYUFBYTtZQUFFTSxRQUFRLEVBQUUsQ0FBQztTQUFDO0tBQUMsQ0FBQztBQUMzRCxDQUFDO0FBRU0sTUFBTUMsa0JBQWtCLEdBQUcsQ0FBQ1IsU0FBUyxFQUFFUyxnQkFBZ0IsR0FBSztJQUMvRCxNQUFNUCxnQkFBZ0IsR0FBR0YsU0FBUyxDQUFDRyxJQUFJLENBQUNDLENBQUFBLFFBQVEsR0FBSUEsUUFBUSxDQUFDQyxFQUFFLEtBQUtJLGdCQUFnQixDQUFDSixFQUFFLENBQUM7SUFFeEYsSUFBR0gsZ0JBQWdCLENBQUNLLFFBQVEsS0FBSyxDQUFDLEVBQUU7UUFDaEMsT0FBT1AsU0FBUyxDQUFDVSxNQUFNLENBQUNOLENBQUFBLFFBQVEsR0FBSUEsUUFBUSxDQUFDQyxFQUFFLEtBQUtJLGdCQUFnQixDQUFDSixFQUFFLENBQUMsQ0FBQztJQUM3RSxDQUFDO0lBRUQsT0FBT0wsU0FBUyxDQUFDTSxHQUFHLENBQUNGLENBQUFBLFFBQVEsR0FDekJBLFFBQVEsQ0FBQ0MsRUFBRSxLQUFLSSxnQkFBZ0IsQ0FBQ0osRUFBRSxHQUNuQztZQUFDLEdBQUdELFFBQVE7WUFBRUcsUUFBUSxFQUFFSCxRQUFRLENBQUNHLFFBQVEsR0FBRSxDQUFDO1NBQUMsR0FDN0NILFFBQVEsQ0FDWCxDQUFDO0FBQ04sQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3VwbXlzYWxhcnl2Mi8uL3JlZHV4L2NhcnQudXRpbHMuanM/ZDVkOCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgYWRkSXRlbVRvQ2FydCA9IChjYXJ0SXRlbXMsIGNhcnRJdGVtVG9BZGQpID0+IHtcclxuICAgIGNvbnN0IGV4aXN0aW5nQ2FydEl0ZW0gPSBjYXJ0SXRlbXMuZmluZChjYXJ0SXRlbSA9PiBjYXJ0SXRlbS5pZCA9PT0gY2FydEl0ZW1Ub0FkZC5pZCk7XHJcblxyXG4gICAgaWYoZXhpc3RpbmdDYXJ0SXRlbSkge1xyXG4gICAgICAgcmV0dXJuIGNhcnRJdGVtcy5tYXAoY2FydEl0ZW0gPT4gY2FydEl0ZW0uaWQgPT09IGNhcnRJdGVtVG9BZGQuaWRcclxuICAgICAgICA/IHsuLi5jYXJ0SXRlbSwgcXVhbnRpdHk6IGNhcnRJdGVtLnF1YW50aXR5ICsgMX0gOlxyXG4gICAgICAgIGNhcnRJdGVtKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIFsuLi5jYXJ0SXRlbXMsIHsuLi5jYXJ0SXRlbVRvQWRkLCBxdWFudGl0eTogMX1dO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcmVtb3ZlSXRlbUZyb21DYXJ0ID0gKGNhcnRJdGVtcywgY2FydEl0ZW1Ub1JlbW92ZSkgPT4ge1xyXG4gICAgY29uc3QgZXhpc3RpbmdDYXJ0SXRlbSA9IGNhcnRJdGVtcy5maW5kKGNhcnRJdGVtID0+IGNhcnRJdGVtLmlkID09PSBjYXJ0SXRlbVRvUmVtb3ZlLmlkKTtcclxuXHJcbiAgICBpZihleGlzdGluZ0NhcnRJdGVtLnF1YW50aXR5ID09PSAxKSB7XHJcbiAgICAgICAgcmV0dXJuIGNhcnRJdGVtcy5maWx0ZXIoY2FydEl0ZW0gPT4gY2FydEl0ZW0uaWQgIT09IGNhcnRJdGVtVG9SZW1vdmUuaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjYXJ0SXRlbXMubWFwKGNhcnRJdGVtID0+XHJcbiAgICAgICAgY2FydEl0ZW0uaWQgPT09IGNhcnRJdGVtVG9SZW1vdmUuaWQgP1xyXG4gICAgICAgIHsuLi5jYXJ0SXRlbSwgcXVhbnRpdHk6IGNhcnRJdGVtLnF1YW50aXR5IC0xfSA6XHJcbiAgICAgICAgY2FydEl0ZW1cclxuICAgICk7XHJcbn0iXSwibmFtZXMiOlsiYWRkSXRlbVRvQ2FydCIsImNhcnRJdGVtcyIsImNhcnRJdGVtVG9BZGQiLCJleGlzdGluZ0NhcnRJdGVtIiwiZmluZCIsImNhcnRJdGVtIiwiaWQiLCJtYXAiLCJxdWFudGl0eSIsInJlbW92ZUl0ZW1Gcm9tQ2FydCIsImNhcnRJdGVtVG9SZW1vdmUiLCJmaWx0ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./redux/cart.utils.js\n");

/***/ }),

/***/ "./redux/store.js":
/*!************************!*\
  !*** ./redux/store.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"persistor\": () => (/* binding */ persistor),\n/* harmony export */   \"store\": () => (/* binding */ store)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _cart_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cart-reducer */ \"./redux/cart-reducer.js\");\n/* harmony import */ var _user_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-reducer */ \"./redux/user-reducer.js\");\n/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-logger */ \"redux-logger\");\n/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-persist/lib/storage */ \"redux-persist/lib/storage\");\n/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux-persist */ \"redux-persist\");\n/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nconst persistConfig = {\n    key: \"root\",\n    storage: (redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_4___default())\n};\nconst reducers = (0,redux__WEBPACK_IMPORTED_MODULE_5__.combineReducers)({\n    cart: _cart_reducer__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    user: _user_reducer__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n});\nconst persistedReducer = (0,redux_persist__WEBPACK_IMPORTED_MODULE_6__.persistReducer)(persistConfig, reducers);\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n    reducer: persistedReducer,\n    middleware: (getDefaultMiddleware)=>getDefaultMiddleware({\n            serializableCheck: {\n                ignoredActions: [\n                    redux_persist__WEBPACK_IMPORTED_MODULE_6__.FLUSH,\n                    redux_persist__WEBPACK_IMPORTED_MODULE_6__.REHYDRATE,\n                    redux_persist__WEBPACK_IMPORTED_MODULE_6__.PAUSE,\n                    redux_persist__WEBPACK_IMPORTED_MODULE_6__.PERSIST,\n                    redux_persist__WEBPACK_IMPORTED_MODULE_6__.PURGE,\n                    redux_persist__WEBPACK_IMPORTED_MODULE_6__.REGISTER\n                ]\n            }\n        }).concat((redux_logger__WEBPACK_IMPORTED_MODULE_3___default()))\n});\nconst persistor = (0,redux_persist__WEBPACK_IMPORTED_MODULE_6__.persistStore)(store);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1eC9zdG9yZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFrRDtBQUNUO0FBQ0E7QUFDUDtBQUNjO0FBQ1I7QUFXaEI7QUFFeEIsTUFBTWMsYUFBYSxHQUFHO0lBQ2xCQyxHQUFHLEVBQUUsTUFBTTtJQUNYWCxPQUFPO0NBQ1Y7QUFFRCxNQUFNWSxRQUFRLEdBQUdYLHNEQUFlLENBQUM7SUFDN0JZLElBQUksRUFBRWhCLHFEQUFXO0lBQ2pCaUIsSUFBSSxFQUFFaEIscURBQVc7Q0FDcEIsQ0FBQztBQUVGLE1BQU1pQixnQkFBZ0IsR0FBR1osNkRBQWMsQ0FBQ08sYUFBYSxFQUFFRSxRQUFRLENBQUM7QUFFekQsTUFBTUksS0FBSyxHQUFHcEIsZ0VBQWMsQ0FBQztJQUNsQ3FCLE9BQU8sRUFBRUYsZ0JBQWdCO0lBQ3pCRyxVQUFVLEVBQUMsQ0FBQ0Msb0JBQW9CLEdBQ2hDQSxvQkFBb0IsQ0FBQztZQUNuQkMsaUJBQWlCLEVBQUU7Z0JBQ2ZDLGNBQWMsRUFBRTtvQkFBQ2pCLGdEQUFLO29CQUFFQyxvREFBUztvQkFBRUMsZ0RBQUs7b0JBQUVDLGtEQUFPO29CQUFFQyxnREFBSztvQkFBRUMsbURBQVE7aUJBQUM7YUFDcEU7U0FDSixDQUFDLENBQUNhLE1BQU0sQ0FBQ3ZCLHFEQUFNLENBQUM7Q0FFbEIsQ0FBQztBQUVLLE1BQU13QixTQUFTLEdBQUdyQiwyREFBWSxDQUFDYyxLQUFLLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3VwbXlzYWxhcnl2Mi8uL3JlZHV4L3N0b3JlLmpzPzM1NDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29uZmlndXJlU3RvcmUgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcclxuaW1wb3J0IGNhcnRSZWR1Y2VyIGZyb20gJy4vY2FydC1yZWR1Y2VyJztcclxuaW1wb3J0IHVzZXJSZWR1Y2VyIGZyb20gJy4vdXNlci1yZWR1Y2VyJztcclxuaW1wb3J0IGxvZ2dlciBmcm9tICdyZWR1eC1sb2dnZXInO1xyXG5pbXBvcnQgc3RvcmFnZSBmcm9tICdyZWR1eC1wZXJzaXN0L2xpYi9zdG9yYWdlJztcclxuaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xyXG5cclxuaW1wb3J0IHtcclxuICAgIHBlcnNpc3RTdG9yZSxcclxuICAgIHBlcnNpc3RSZWR1Y2VyLFxyXG4gICAgRkxVU0gsXHJcbiAgICBSRUhZRFJBVEUsXHJcbiAgICBQQVVTRSxcclxuICAgIFBFUlNJU1QsXHJcbiAgICBQVVJHRSxcclxuICAgIFJFR0lTVEVSLFxyXG4gIH0gZnJvbSAncmVkdXgtcGVyc2lzdCdcclxuXHJcbmNvbnN0IHBlcnNpc3RDb25maWcgPSB7XHJcbiAgICBrZXk6ICdyb290JyxcclxuICAgIHN0b3JhZ2UsXHJcbn1cclxuXHJcbmNvbnN0IHJlZHVjZXJzID0gY29tYmluZVJlZHVjZXJzKHtcclxuICAgIGNhcnQ6IGNhcnRSZWR1Y2VyLFxyXG4gICAgdXNlcjogdXNlclJlZHVjZXJcclxufSk7XHJcblxyXG5jb25zdCBwZXJzaXN0ZWRSZWR1Y2VyID0gcGVyc2lzdFJlZHVjZXIocGVyc2lzdENvbmZpZywgcmVkdWNlcnMpXHJcblxyXG5leHBvcnQgY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSh7XHJcbiAgcmVkdWNlcjogcGVyc2lzdGVkUmVkdWNlcixcclxuICBtaWRkbGV3YXJlOihnZXREZWZhdWx0TWlkZGxld2FyZSkgPT5cclxuICBnZXREZWZhdWx0TWlkZGxld2FyZSh7XHJcbiAgICBzZXJpYWxpemFibGVDaGVjazoge1xyXG4gICAgICAgIGlnbm9yZWRBY3Rpb25zOiBbRkxVU0gsIFJFSFlEUkFURSwgUEFVU0UsIFBFUlNJU1QsIFBVUkdFLCBSRUdJU1RFUl0sXHJcbiAgICAgIH0sXHJcbiAgfSkuY29uY2F0KGxvZ2dlciksXHJcbiAgXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgcGVyc2lzdG9yID0gcGVyc2lzdFN0b3JlKHN0b3JlKTsiXSwibmFtZXMiOlsiY29uZmlndXJlU3RvcmUiLCJjYXJ0UmVkdWNlciIsInVzZXJSZWR1Y2VyIiwibG9nZ2VyIiwic3RvcmFnZSIsImNvbWJpbmVSZWR1Y2VycyIsInBlcnNpc3RTdG9yZSIsInBlcnNpc3RSZWR1Y2VyIiwiRkxVU0giLCJSRUhZRFJBVEUiLCJQQVVTRSIsIlBFUlNJU1QiLCJQVVJHRSIsIlJFR0lTVEVSIiwicGVyc2lzdENvbmZpZyIsImtleSIsInJlZHVjZXJzIiwiY2FydCIsInVzZXIiLCJwZXJzaXN0ZWRSZWR1Y2VyIiwic3RvcmUiLCJyZWR1Y2VyIiwibWlkZGxld2FyZSIsImdldERlZmF1bHRNaWRkbGV3YXJlIiwic2VyaWFsaXphYmxlQ2hlY2siLCJpZ25vcmVkQWN0aW9ucyIsImNvbmNhdCIsInBlcnNpc3RvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./redux/store.js\n");

/***/ }),

/***/ "./redux/user-reducer.js":
/*!*******************************!*\
  !*** ./redux/user-reducer.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"removeCurrentUser\": () => (/* binding */ removeCurrentUser),\n/* harmony export */   \"setCurrentUser\": () => (/* binding */ setCurrentUser),\n/* harmony export */   \"userSlice\": () => (/* binding */ userSlice)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst userSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"user\",\n    initialState: {\n        currentUser: null\n    },\n    reducers: {\n        setCurrentUser: (state, action)=>{\n            return {\n                ...state,\n                currentUser: action.payload\n            };\n        },\n        removeCurrentUser: (state)=>{\n            return {\n                ...state,\n                currentUser: null\n            };\n        }\n    }\n});\n// Action creators are generated for each case reducer function\nconst { setCurrentUser , removeCurrentUser  } = userSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userSlice.reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1eC91c2VyLXJlZHVjZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQThDO0FBRXZDLE1BQU1DLFNBQVMsR0FBR0QsNkRBQVcsQ0FBQztJQUNqQ0UsSUFBSSxFQUFFLE1BQU07SUFDWkMsWUFBWSxFQUFFO1FBQ1pDLFdBQVcsRUFBRSxJQUFJO0tBQ2xCO0lBQ0RDLFFBQVEsRUFBRTtRQUNSQyxjQUFjLEVBQUUsQ0FBQ0MsS0FBSyxFQUFFQyxNQUFNLEdBQUs7WUFDakMsT0FBTztnQkFDSCxHQUFHRCxLQUFLO2dCQUNSSCxXQUFXLEVBQUVJLE1BQU0sQ0FBQ0MsT0FBTzthQUM5QjtRQUVILENBQUM7UUFDREMsaUJBQWlCLEVBQUUsQ0FBQ0gsS0FBSyxHQUFNO1lBQzlCLE9BQU87Z0JBQ04sR0FBR0EsS0FBSztnQkFDUkgsV0FBVyxFQUFDLElBQUk7YUFDaEI7UUFFRixDQUFDO0tBQ0Y7Q0FDRixDQUFDO0FBRUYsK0RBQStEO0FBQ3hELE1BQU0sRUFBRUUsY0FBYyxHQUFFSSxpQkFBaUIsR0FBRSxHQUFHVCxTQUFTLENBQUNVLE9BQU87QUFFdEUsaUVBQWVWLFNBQVMsQ0FBQ1csT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL3VwbXlzYWxhcnl2Mi8uL3JlZHV4L3VzZXItcmVkdWNlci5qcz9jMzE2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCdcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VyU2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgICBuYW1lOiAndXNlcicsXHJcbiAgICBpbml0aWFsU3RhdGU6IHtcclxuICAgICAgY3VycmVudFVzZXI6IG51bGwsXHJcbiAgICB9LFxyXG4gICAgcmVkdWNlcnM6IHtcclxuICAgICAgc2V0Q3VycmVudFVzZXI6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIGN1cnJlbnRVc2VyOiBhY3Rpb24ucGF5bG9hZCBcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgIH0sXHJcbiAgICAgIHJlbW92ZUN1cnJlbnRVc2VyOiAoc3RhdGUgKSA9PiB7XHJcbiAgICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGN1cnJlbnRVc2VyOm51bGxcclxuICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgfSxcclxuICAgIH1cclxuICB9KVxyXG4gIFxyXG4gIC8vIEFjdGlvbiBjcmVhdG9ycyBhcmUgZ2VuZXJhdGVkIGZvciBlYWNoIGNhc2UgcmVkdWNlciBmdW5jdGlvblxyXG4gIGV4cG9ydCBjb25zdCB7IHNldEN1cnJlbnRVc2VyLCByZW1vdmVDdXJyZW50VXNlciB9ID0gdXNlclNsaWNlLmFjdGlvbnNcclxuICBcclxuICBleHBvcnQgZGVmYXVsdCB1c2VyU2xpY2UucmVkdWNlciJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsInVzZXJTbGljZSIsIm5hbWUiLCJpbml0aWFsU3RhdGUiLCJjdXJyZW50VXNlciIsInJlZHVjZXJzIiwic2V0Q3VycmVudFVzZXIiLCJzdGF0ZSIsImFjdGlvbiIsInBheWxvYWQiLCJyZW1vdmVDdXJyZW50VXNlciIsImFjdGlvbnMiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./redux/user-reducer.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "@stripe/react-stripe-js":
/*!******************************************!*\
  !*** external "@stripe/react-stripe-js" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@stripe/react-stripe-js");

/***/ }),

/***/ "@stripe/stripe-js":
/*!************************************!*\
  !*** external "@stripe/stripe-js" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@stripe/stripe-js");

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

/***/ "react-cookie":
/*!*******************************!*\
  !*** external "react-cookie" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-cookie");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux");

/***/ }),

/***/ "redux-logger":
/*!*******************************!*\
  !*** external "redux-logger" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-logger");

/***/ }),

/***/ "redux-persist":
/*!********************************!*\
  !*** external "redux-persist" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-persist");

/***/ }),

/***/ "redux-persist/integration/react":
/*!**************************************************!*\
  !*** external "redux-persist/integration/react" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-persist/integration/react");

/***/ }),

/***/ "redux-persist/lib/storage":
/*!********************************************!*\
  !*** external "redux-persist/lib/storage" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-persist/lib/storage");

/***/ }),

/***/ "react-hot-toast":
/*!**********************************!*\
  !*** external "react-hot-toast" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = import("react-hot-toast");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.jsx"));
module.exports = __webpack_exports__;

})();