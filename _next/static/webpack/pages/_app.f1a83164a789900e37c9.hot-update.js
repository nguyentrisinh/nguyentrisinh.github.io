webpackHotUpdate_N_E("pages/_app",{

/***/ "./layouts/components/Menu.jsx":
/*!*************************************!*\
  !*** ./layouts/components/Menu.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_common_ActiveLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/common/ActiveLink */ "./components/common/ActiveLink.jsx");


var _jsxFileName = "C:\\Users\\tamPC\\OneDrive\\working\\sinhnt\\sinhnt-fe\\layouts\\components\\Menu.jsx",
    _this = undefined;




var MenuItem = function MenuItem(_ref) {
  var name = _ref.name,
      href = _ref.href;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_common_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: href,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
      className: "flex items-center justify-center w-full px-3 py-4 font-bold no-underline uppercase bg-white rounded text-grey-light dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-500 lg:justify-start",
      children: name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, _this);
};

_c = MenuItem;

var Menu = function Menu(_ref2) {
  var _ref2$className = _ref2.className,
      className = _ref2$className === void 0 ? '' : _ref2$className;
  var menuItems = [{
    name: 'Home',
    href: '/'
  }, {
    name: 'Contact',
    href: '/contact'
  }, // { name: 'Portfolios', href: '/portfolios' },
  {
    name: 'Demos',
    href: '/demos'
  }];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "text-sm flex items-center border-t-2 border-green-700 lg:border-none ".concat(className),
    children: menuItems && menuItems.map(function (menuItem) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MenuItem, {
        name: menuItem.name,
        href: menuItem.href
      }, menuItem.name, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 5
  }, _this);
};

_c2 = Menu;
/* harmony default export */ __webpack_exports__["default"] = (Menu);

var _c, _c2;

$RefreshReg$(_c, "MenuItem");
$RefreshReg$(_c2, "Menu");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGF5b3V0cy9jb21wb25lbnRzL01lbnUuanN4Il0sIm5hbWVzIjpbIk1lbnVJdGVtIiwibmFtZSIsImhyZWYiLCJNZW51IiwiY2xhc3NOYW1lIiwibWVudUl0ZW1zIiwibWFwIiwibWVudUl0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBb0I7QUFBQSxNQUFqQkMsSUFBaUIsUUFBakJBLElBQWlCO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQ25DLHNCQUNFLHFFQUFDLHFFQUFEO0FBQVksUUFBSSxFQUFFQSxJQUFsQjtBQUFBLDJCQUNFO0FBQUcsZUFBUyxFQUFDLGdNQUFiO0FBQUEsZ0JBQ0dEO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQU9ELENBUkQ7O0tBQU1ELFE7O0FBVU4sSUFBTUcsSUFBSSxHQUFHLFNBQVBBLElBQU8sUUFBd0I7QUFBQSw4QkFBckJDLFNBQXFCO0FBQUEsTUFBckJBLFNBQXFCLGdDQUFULEVBQVM7QUFDbkMsTUFBTUMsU0FBUyxHQUFHLENBQ2hCO0FBQUVKLFFBQUksRUFBRSxNQUFSO0FBQWdCQyxRQUFJLEVBQUU7QUFBdEIsR0FEZ0IsRUFFaEI7QUFBRUQsUUFBSSxFQUFFLFNBQVI7QUFBbUJDLFFBQUksRUFBRTtBQUF6QixHQUZnQixFQUdoQjtBQUNBO0FBQUVELFFBQUksRUFBRSxPQUFSO0FBQWlCQyxRQUFJLEVBQUU7QUFBdkIsR0FKZ0IsQ0FBbEI7QUFPQSxzQkFDRTtBQUFLLGFBQVMsaUZBQTBFRSxTQUExRSxDQUFkO0FBQUEsY0FDR0MsU0FBUyxJQUFJQSxTQUFTLENBQUNDLEdBQVYsQ0FBYyxVQUFBQyxRQUFRO0FBQUEsMEJBQ2xDLHFFQUFDLFFBQUQ7QUFBOEIsWUFBSSxFQUFFQSxRQUFRLENBQUNOLElBQTdDO0FBQW1ELFlBQUksRUFBRU0sUUFBUSxDQUFDTDtBQUFsRSxTQUFlSyxRQUFRLENBQUNOLElBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEa0M7QUFBQSxLQUF0QjtBQURoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFPRCxDQWZEOztNQUFNRSxJO0FBaUJTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmYxYTgzMTY0YTc4OTkwMGUzN2M5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBBY3RpdmVMaW5rIGZyb20gJ0AvY29tcG9uZW50cy9jb21tb24vQWN0aXZlTGluaydcclxuXHJcbmNvbnN0IE1lbnVJdGVtID0gKHsgbmFtZSwgaHJlZiB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxBY3RpdmVMaW5rIGhyZWY9e2hyZWZ9PlxyXG4gICAgICA8YSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB3LWZ1bGwgcHgtMyBweS00IGZvbnQtYm9sZCBuby11bmRlcmxpbmUgdXBwZXJjYXNlIGJnLXdoaXRlIHJvdW5kZWQgdGV4dC1ncmV5LWxpZ2h0IGRhcms6YmctZ3JheS04MDAgaG92ZXI6YmctZ3JheS0zMDAgZGFyazpob3ZlcjpiZy1ncmF5LTUwMCBsZzpqdXN0aWZ5LXN0YXJ0XCI+XHJcbiAgICAgICAge25hbWV9XHJcbiAgICAgIDwvYT5cclxuICAgIDwvQWN0aXZlTGluaz5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IE1lbnUgPSAoeyBjbGFzc05hbWUgPSAnJyB9KSA9PiB7XHJcbiAgY29uc3QgbWVudUl0ZW1zID0gW1xyXG4gICAgeyBuYW1lOiAnSG9tZScsIGhyZWY6ICcvJyB9LFxyXG4gICAgeyBuYW1lOiAnQ29udGFjdCcsIGhyZWY6ICcvY29udGFjdCcgfSxcclxuICAgIC8vIHsgbmFtZTogJ1BvcnRmb2xpb3MnLCBocmVmOiAnL3BvcnRmb2xpb3MnIH0sXHJcbiAgICB7IG5hbWU6ICdEZW1vcycsIGhyZWY6ICcvZGVtb3MnIH0sXHJcbiAgXVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2B0ZXh0LXNtIGZsZXggaXRlbXMtY2VudGVyIGJvcmRlci10LTIgYm9yZGVyLWdyZWVuLTcwMCBsZzpib3JkZXItbm9uZSAke2NsYXNzTmFtZX1gfT5cclxuICAgICAge21lbnVJdGVtcyAmJiBtZW51SXRlbXMubWFwKG1lbnVJdGVtID0+IChcclxuICAgICAgICA8TWVudUl0ZW0ga2V5PXttZW51SXRlbS5uYW1lfSBuYW1lPXttZW51SXRlbS5uYW1lfSBocmVmPXttZW51SXRlbS5ocmVmfSAvPlxyXG4gICAgICApKX1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVudSJdLCJzb3VyY2VSb290IjoiIn0=