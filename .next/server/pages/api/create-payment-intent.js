"use strict";
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
exports.id = "pages/api/create-payment-intent";
exports.ids = ["pages/api/create-payment-intent"];
exports.modules = {

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stripe");

/***/ }),

/***/ "(api)/./pages/api/create-payment-intent.js":
/*!********************************************!*\
  !*** ./pages/api/create-payment-intent.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n// This is your test secret API key.\nconst stripe = __webpack_require__(/*! stripe */ \"stripe\")(process.env.STRIPE_SECRET_KEY);\nconst calculateOrderAmount = (items)=>{\n    // console.log('Items',items)\n    const totalAmount = items.reduce((accumalatedQuantity, item)=>accumalatedQuantity + item.quantity * item.price, 0);\n    return Math.round(totalAmount * 100);\n};\nasync function handler(req, res) {\n    const { items  } = req.body;\n    // console.log('Node function', req.body);\n    // Create a PaymentIntent with the order amount and currency\n    const paymentIntent = await stripe.paymentIntents.create({\n        amount: calculateOrderAmount(items) < 1 ? 100 : calculateOrderAmount(items),\n        currency: \"usd\",\n        automatic_payment_methods: {\n            enabled: true\n        }\n    });\n    res.send({\n        clientSecret: paymentIntent.client_secret,\n        totalAmountC: calculateOrderAmount(items)\n    });\n};\n;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY3JlYXRlLXBheW1lbnQtaW50ZW50LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxvQ0FBb0M7QUFDcEMsTUFBTUEsTUFBTSxHQUFHQyxtQkFBTyxDQUFDLHNCQUFRLENBQUMsQ0FBQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUNDLGlCQUFpQixDQUFDO0FBRS9ELE1BQU1DLG9CQUFvQixHQUFHLENBQUNDLEtBQUssR0FBSztJQUN0Qyw2QkFBNkI7SUFFM0IsTUFBTUMsV0FBVyxHQUFHRCxLQUFLLENBQUNFLE1BQU0sQ0FDOUIsQ0FBQ0MsbUJBQW1CLEVBQUVDLElBQUksR0FDdkJELG1CQUFtQixHQUFHQyxJQUFJLENBQUNDLFFBQVEsR0FBR0QsSUFBSSxDQUFDRSxLQUFLLEVBQ25ELENBQUMsQ0FDRjtJQUNELE9BQU9DLElBQUksQ0FBQ0MsS0FBSyxDQUFDUCxXQUFXLEdBQUcsR0FBRyxDQUFDLENBQUM7QUFFekMsQ0FBQztBQUVjLGVBQWVRLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDOUMsTUFBTSxFQUFFWCxLQUFLLEdBQUUsR0FBR1UsR0FBRyxDQUFDRSxJQUFJO0lBQzFCLDBDQUEwQztJQUMxQyw0REFBNEQ7SUFDNUQsTUFBTUMsYUFBYSxHQUFHLE1BQU1uQixNQUFNLENBQUNvQixjQUFjLENBQUNDLE1BQU0sQ0FBQztRQUN2REMsTUFBTSxFQUFFakIsb0JBQW9CLENBQUNDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUlELG9CQUFvQixDQUFDQyxLQUFLLENBQUM7UUFDNUVpQixRQUFRLEVBQUUsS0FBSztRQUNmQyx5QkFBeUIsRUFBRTtZQUN6QkMsT0FBTyxFQUFFLElBQUk7U0FDZDtLQUNGLENBQUM7SUFFRlIsR0FBRyxDQUFDUyxJQUFJLENBQUM7UUFDUEMsWUFBWSxFQUFFUixhQUFhLENBQUNTLGFBQWE7UUFDekNDLFlBQVksRUFBRXhCLG9CQUFvQixDQUFDQyxLQUFLLENBQUM7S0FDMUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3VwbXlzYWxhcnl2Mi8uL3BhZ2VzL2FwaS9jcmVhdGUtcGF5bWVudC1pbnRlbnQuanM/NzVjOCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGlzIHlvdXIgdGVzdCBzZWNyZXQgQVBJIGtleS5cclxuY29uc3Qgc3RyaXBlID0gcmVxdWlyZShcInN0cmlwZVwiKShwcm9jZXNzLmVudi5TVFJJUEVfU0VDUkVUX0tFWSk7XHJcblxyXG5jb25zdCBjYWxjdWxhdGVPcmRlckFtb3VudCA9IChpdGVtcykgPT4ge1xyXG4gIC8vIGNvbnNvbGUubG9nKCdJdGVtcycsaXRlbXMpXHJcblxyXG4gICAgY29uc3QgdG90YWxBbW91bnQgPSBpdGVtcy5yZWR1Y2UoXHJcbiAgICAgIChhY2N1bWFsYXRlZFF1YW50aXR5LCBpdGVtKSA9PlxyXG4gICAgICAgIChhY2N1bWFsYXRlZFF1YW50aXR5ICsgaXRlbS5xdWFudGl0eSAqIGl0ZW0ucHJpY2UpLFxyXG4gICAgICAwXHJcbiAgICApXHJcbiAgICByZXR1cm4gTWF0aC5yb3VuZCh0b3RhbEFtb3VudCAqIDEwMCk7XHJcblxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gIGNvbnN0IHsgaXRlbXMgfSA9IHJlcS5ib2R5O1xyXG4gIC8vIGNvbnNvbGUubG9nKCdOb2RlIGZ1bmN0aW9uJywgcmVxLmJvZHkpO1xyXG4gIC8vIENyZWF0ZSBhIFBheW1lbnRJbnRlbnQgd2l0aCB0aGUgb3JkZXIgYW1vdW50IGFuZCBjdXJyZW5jeVxyXG4gIGNvbnN0IHBheW1lbnRJbnRlbnQgPSBhd2FpdCBzdHJpcGUucGF5bWVudEludGVudHMuY3JlYXRlKHtcclxuICAgIGFtb3VudDogY2FsY3VsYXRlT3JkZXJBbW91bnQoaXRlbXMpIDwgMSA/IDEwMCA6ICBjYWxjdWxhdGVPcmRlckFtb3VudChpdGVtcyksXHJcbiAgICBjdXJyZW5jeTogXCJ1c2RcIixcclxuICAgIGF1dG9tYXRpY19wYXltZW50X21ldGhvZHM6IHtcclxuICAgICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG4gIHJlcy5zZW5kKHtcclxuICAgIGNsaWVudFNlY3JldDogcGF5bWVudEludGVudC5jbGllbnRfc2VjcmV0LFxyXG4gICAgdG90YWxBbW91bnRDOiBjYWxjdWxhdGVPcmRlckFtb3VudChpdGVtcyksXHJcbiAgfSk7XHJcbn07Il0sIm5hbWVzIjpbInN0cmlwZSIsInJlcXVpcmUiLCJwcm9jZXNzIiwiZW52IiwiU1RSSVBFX1NFQ1JFVF9LRVkiLCJjYWxjdWxhdGVPcmRlckFtb3VudCIsIml0ZW1zIiwidG90YWxBbW91bnQiLCJyZWR1Y2UiLCJhY2N1bWFsYXRlZFF1YW50aXR5IiwiaXRlbSIsInF1YW50aXR5IiwicHJpY2UiLCJNYXRoIiwicm91bmQiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiYm9keSIsInBheW1lbnRJbnRlbnQiLCJwYXltZW50SW50ZW50cyIsImNyZWF0ZSIsImFtb3VudCIsImN1cnJlbmN5IiwiYXV0b21hdGljX3BheW1lbnRfbWV0aG9kcyIsImVuYWJsZWQiLCJzZW5kIiwiY2xpZW50U2VjcmV0IiwiY2xpZW50X3NlY3JldCIsInRvdGFsQW1vdW50QyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/create-payment-intent.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/create-payment-intent.js"));
module.exports = __webpack_exports__;

})();