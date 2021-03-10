webpackHotUpdate_N_E("pages/demos",{

/***/ "./pages/demos.js":
/*!************************!*\
  !*** ./pages/demos.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rooks */ "./node_modules/rooks/lib/rooks.esm.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-seo */ "./node_modules/next-seo/lib/next-seo.module.js");
/* harmony import */ var _libs_converters_DemosPageConverter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/libs/converters/DemosPageConverter */ "./libs/converters/DemosPageConverter.js");
/* harmony import */ var _libs_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/libs/config */ "./libs/config.js");
/* harmony import */ var _assets_svg_demos_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/assets/svg/demos.svg */ "./assets/svg/demos.svg");
/* harmony import */ var _assets_svg_demos_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_demos_svg__WEBPACK_IMPORTED_MODULE_7__);



var _jsxFileName = "C:\\Users\\tamPC\\OneDrive\\working\\sinhnt\\sinhnt-fe\\pages\\demos.js",
    _this = undefined,
    _s = $RefreshSig$();









var goToExternal = function goToExternal(event, url) {
  console.log(event.target);
  return false;
  window.open(url);
};

var DemoItem = function DemoItem(_ref) {
  var className = _ref.className,
      demo = _ref.demo;
  var coverUrl = Object(_libs_config__WEBPACK_IMPORTED_MODULE_6__["getStrapiMedia"])(demo.cover);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "portfolio-item ".concat(className),
    onClick: function onClick(event) {
      goToExternal(event, demo.website_url);
    },
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "relative block h-full bg-gray-300 bg-center bg-cover border rounded hover:bg-gray-200",
      style: {
        backgroundImage: "url(".concat(coverUrl, ")")
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "absolute top-0 right-0 mt-4 mr-4 text-green-900",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: demo.repo_url,
          target: "_blank",
          className: "p-2 text-2xl hover:text-gray-400",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
            className: "fab fa-git-alt"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: demo.website_url,
          target: "_blank",
          className: "p-2 text-xl hover:text-gray-400",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
            className: "fas fa-external-link-alt"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "absolute bottom-0 w-full pt-2 pl-4 text-white bg-gray-700 portfolio-item-content",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: "text-xl font-bold",
          children: demo.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "justify-center block py-1 text-sm technologies",
          children: demo.tags && demo.tags.map(function (tag) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "inline-block pl-2",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: "/technologies/".concat(tag.slug, ".png"),
                className: "h-4",
                alt: tag.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 48,
                columnNumber: 17
              }, _this)
            }, tag.slug, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 15
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }, _this);
};

_c = DemoItem;

var DemosPage = function DemosPage(_ref2) {
  _s();

  var website = _ref2.website,
      demos = _ref2.demos;
  var pageData = Object(_libs_config__WEBPACK_IMPORTED_MODULE_6__["getPageData"])(website, "sinhnt-demos");

  var _convertDataPage = Object(_libs_converters_DemosPageConverter__WEBPACK_IMPORTED_MODULE_5__["convertDataPage"])(pageData),
      meta = _convertDataPage.meta,
      content = _convertDataPage.content;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      filterStr = _useState[0],
      setFilterStr = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      grid = _useState2[0],
      setGrid = _useState2[1];

  var tagFilters = content.tagFilters;
  Object(rooks__WEBPACK_IMPORTED_MODULE_2__["useDidMount"])(function () {
    var Isotope = __webpack_require__(/*! isotope-layout */ "./node_modules/isotope-layout/js/isotope.js");

    setGrid(new Isotope('#portfolios-grid', {
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows'
    }));
    onFilter('*');
  });

  var onFilter = function onFilter(value) {
    setFilterStr(value);

    if (value !== '*') {
      value = '.' + value;
    }

    grid && grid.arrange({
      filter: value
    });
  };

  var getDemoClass = function getDemoClass(demo) {
    var tags = demo.tags.map(function (tag) {
      return tag.slug;
    });
    return tags.join(' ');
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_seo__WEBPACK_IMPORTED_MODULE_4__["NextSeo"], {
      title: meta.title,
      description: meta.description,
      openGraph: {
        title: "".concat(meta.title, " \uD83D\uDC68\uD83C\uDFFD\u200D\uD83D\uDCBB Sinh NT"),
        site_name: "".concat(meta.title)
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container px-4 py-24 mx-auto",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex flex-wrap justify-between mb-4",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "p-4 text-center lg:w-6/12 lg:text-left sm:p-0",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            className: "mb-6 text-3xl font-bold leading-normal xl:text-4xl lg:pt-4",
            children: content.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            className: "mb-6 font-medium leading-relaxed xl:text-lg",
            children: content.description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "w-2/3 mx-auto lg:mx-0 lg:w-5/12",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: _assets_svg_demos_svg__WEBPACK_IMPORTED_MODULE_7___default.a
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex flex-wrap",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "w-full mb-4 text-center lg:mb-2",
          children: tagFilters && tagFilters.map(function (tagFilter) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('text:sm lg:text-lg m-2 lg:m-4 bg-orange-500 font-bold p-2 lg:p-6 py-1 lg:py-2 text-white shadow-md rounded', {
                'bg-green-500': filterStr === tagFilter.slug,
                'bg-gray-500': filterStr !== tagFilter.slug
              }),
              onClick: function onClick() {
                onFilter(tagFilter.slug);
              },
              children: tagFilter.name
            }, tagFilter.slug, false, {
              fileName: _jsxFileName,
              lineNumber: 126,
              columnNumber: 15
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        id: "portfolios-grid",
        className: "flex flex-wrap",
        children: demos && demos.map(function (demo) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(DemoItem, {
            demo: demo,
            className: "w-full lg:w-1/2 py-4 lg:px-4 cursor-pointer ".concat(getDemoClass(demo))
          }, demo.id, false, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 13
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(DemosPage, "8f3B+ssXd/f/NHj46yZyHt15NJY=", false, function () {
  return [rooks__WEBPACK_IMPORTED_MODULE_2__["useDidMount"]];
});

_c2 = DemosPage;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (DemosPage);

var _c, _c2;

$RefreshReg$(_c, "DemoItem");
$RefreshReg$(_c2, "DemosPage");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGVtb3MuanMiXSwibmFtZXMiOlsiZ29Ub0V4dGVybmFsIiwiZXZlbnQiLCJ1cmwiLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0Iiwid2luZG93Iiwib3BlbiIsIkRlbW9JdGVtIiwiY2xhc3NOYW1lIiwiZGVtbyIsImNvdmVyVXJsIiwiZ2V0U3RyYXBpTWVkaWEiLCJjb3ZlciIsIndlYnNpdGVfdXJsIiwiYmFja2dyb3VuZEltYWdlIiwicmVwb191cmwiLCJuYW1lIiwidGFncyIsIm1hcCIsInRhZyIsInNsdWciLCJEZW1vc1BhZ2UiLCJ3ZWJzaXRlIiwiZGVtb3MiLCJwYWdlRGF0YSIsImdldFBhZ2VEYXRhIiwiY29udmVydERhdGFQYWdlIiwibWV0YSIsImNvbnRlbnQiLCJ1c2VTdGF0ZSIsImZpbHRlclN0ciIsInNldEZpbHRlclN0ciIsImdyaWQiLCJzZXRHcmlkIiwidGFnRmlsdGVycyIsInVzZURpZE1vdW50IiwiSXNvdG9wZSIsInJlcXVpcmUiLCJpdGVtU2VsZWN0b3IiLCJsYXlvdXRNb2RlIiwib25GaWx0ZXIiLCJ2YWx1ZSIsImFycmFuZ2UiLCJmaWx0ZXIiLCJnZXREZW1vQ2xhc3MiLCJqb2luIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInNpdGVfbmFtZSIsIkRlbW9zU3ZnIiwidGFnRmlsdGVyIiwiY24iLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUVBOztBQUVBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEtBQUQsRUFBUUMsR0FBUixFQUFnQjtBQUNuQ0MsU0FBTyxDQUFDQyxHQUFSLENBQVlILEtBQUssQ0FBQ0ksTUFBbEI7QUFDQSxTQUFPLEtBQVA7QUFDQUMsUUFBTSxDQUFDQyxJQUFQLENBQVlMLEdBQVo7QUFDRCxDQUpEOztBQU1BLElBQU1NLFFBQVEsR0FBRyxTQUFYQSxR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O0FBQTBCLGlCQUFTLEVBQUMsZ0JBQXBDO0FBQUEsa0JBQ0dHLEtBQUssSUFBSUEsS0FBSyxDQUFDTCxHQUFOLENBQVUsVUFBQVQsSUFBSTtBQUFBLDhCQUN0QixxRUFBQyxRQUFEO0FBQXdCLGdCQUFJLEVBQUVBLElBQTlCO0FBQW9DLHFCQUFTLHdEQUFpRG1DLFlBQVksQ0FBQ25DLElBQUQsQ0FBN0Q7QUFBN0MsYUFBZUEsSUFBSSxDQUFDMkMsRUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEc0I7QUFBQSxTQUFkO0FBRFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQS9CRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFWRjtBQUFBLGtCQURGO0FBa0RELENBckZEOztHQUFNL0IsUztVQVNKYyxpRDs7O01BVElkLFM7O0FBdUZTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kZW1vcy41MDJkNzQ3NjUzN2E4ZjdmZTkyMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VEaWRNb3VudCB9IGZyb20gJ3Jvb2tzJ1xuaW1wb3J0IGNuIGZyb20gJ2NsYXNzbmFtZXMnXG5pbXBvcnQgeyBOZXh0U2VvIH0gZnJvbSAnbmV4dC1zZW8nXG5cbmltcG9ydCBXZWJzaXRlTWl4aW4gZnJvbSAnQC9saWJzL21peGlucy9XZWJzaXRlTWl4aW4nXG5pbXBvcnQgY29uZmlnIGZyb20gJ0AvbGlicy9jb25maWcnXG5pbXBvcnQgeyBEZW1vU2VydmljZSB9IGZyb20gJ0AvbGlicy9zZXJ2aWNlcydcbmltcG9ydCB7IGNvbnZlcnREYXRhUGFnZSB9IGZyb20gJ0AvbGlicy9jb252ZXJ0ZXJzL0RlbW9zUGFnZUNvbnZlcnRlcidcbmltcG9ydCB7IGdldFBhZ2VEYXRhLCBnZXRTdHJhcGlNZWRpYSB9IGZyb20gJ0AvbGlicy9jb25maWcnXG5cbmltcG9ydCBEZW1vc1N2ZyBmcm9tICdAL2Fzc2V0cy9zdmcvZGVtb3Muc3ZnJ1xuXG5jb25zdCBnb1RvRXh0ZXJuYWwgPSAoZXZlbnQsIHVybCkgPT4ge1xuICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQpXG4gIHJldHVybiBmYWxzZTtcbiAgd2luZG93Lm9wZW4odXJsKVxufVxuXG5jb25zdCBEZW1vSXRlbSA9ICh7IGNsYXNzTmFtZSwgZGVtbyB9KSA9PiB7XG4gIGNvbnN0IGNvdmVyVXJsID0gZ2V0U3RyYXBpTWVkaWEoZGVtby5jb3ZlcilcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgcG9ydGZvbGlvLWl0ZW0gJHtjbGFzc05hbWV9YH0gb25DbGljaz17KGV2ZW50KT0+IHsgZ29Ub0V4dGVybmFsKGV2ZW50LCBkZW1vLndlYnNpdGVfdXJsKSB9fT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgYmxvY2sgaC1mdWxsIGJnLWdyYXktMzAwIGJnLWNlbnRlciBiZy1jb3ZlciBib3JkZXIgcm91bmRlZCBob3ZlcjpiZy1ncmF5LTIwMFwiXG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7Y292ZXJVcmx9KWBcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMCByaWdodC0wIG10LTQgbXItNCB0ZXh0LWdyZWVuLTkwMFwiPlxuICAgICAgICAgIDxhIGhyZWY9e2RlbW8ucmVwb191cmx9IHRhcmdldD1cIl9ibGFua1wiIGNsYXNzTmFtZT1cInAtMiB0ZXh0LTJ4bCBob3Zlcjp0ZXh0LWdyYXktNDAwXCI+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtZ2l0LWFsdFwiPjwvaT5cbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgPGEgaHJlZj17ZGVtby53ZWJzaXRlX3VybH0gdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3NOYW1lPVwicC0yIHRleHQteGwgaG92ZXI6dGV4dC1ncmF5LTQwMFwiPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWV4dGVybmFsLWxpbmstYWx0XCI+PC9pPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTAgdy1mdWxsIHB0LTIgcGwtNCB0ZXh0LXdoaXRlIGJnLWdyYXktNzAwIHBvcnRmb2xpby1pdGVtLWNvbnRlbnRcIj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGRcIj5cbiAgICAgICAgICAgIHsgZGVtby5uYW1lIH1cbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwianVzdGlmeS1jZW50ZXIgYmxvY2sgcHktMSB0ZXh0LXNtIHRlY2hub2xvZ2llc1wiPlxuICAgICAgICAgICAge2RlbW8udGFncyAmJiBkZW1vLnRhZ3MubWFwKHRhZyA9PiAoXG4gICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAga2V5PXt0YWcuc2x1Z31cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgcGwtMlwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICBzcmM9e2AvdGVjaG5vbG9naWVzLyR7dGFnLnNsdWd9LnBuZ2B9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTRcIlxuICAgICAgICAgICAgICAgICAgYWx0PXt0YWcubmFtZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBEZW1vc1BhZ2UgPSAoeyB3ZWJzaXRlLCBkZW1vcyB9KSA9PiB7XG4gIGNvbnN0IHBhZ2VEYXRhID0gZ2V0UGFnZURhdGEod2Vic2l0ZSwgYHNpbmhudC1kZW1vc2ApXG4gIGNvbnN0IHsgbWV0YSwgY29udGVudCB9ICA9IGNvbnZlcnREYXRhUGFnZShwYWdlRGF0YSlcbiAgXG4gIGNvbnN0IFtmaWx0ZXJTdHIsIHNldEZpbHRlclN0cl0gPSB1c2VTdGF0ZSgnJylcbiAgbGV0IFtncmlkLCBzZXRHcmlkXSA9IHVzZVN0YXRlKClcblxuICBsZXQgdGFnRmlsdGVycyA9IGNvbnRlbnQudGFnRmlsdGVyc1xuXG4gIHVzZURpZE1vdW50KCgpID0+IHtcbiAgICBjb25zdCBJc290b3BlID0gcmVxdWlyZSgnaXNvdG9wZS1sYXlvdXQnKVxuICAgIHNldEdyaWQoXG4gICAgICBuZXcgSXNvdG9wZSgnI3BvcnRmb2xpb3MtZ3JpZCcsIHtcbiAgICAgICAgaXRlbVNlbGVjdG9yOiAnLnBvcnRmb2xpby1pdGVtJyxcbiAgICAgICAgbGF5b3V0TW9kZTogJ2ZpdFJvd3MnXG4gICAgICB9KVxuICAgIClcblxuICAgIG9uRmlsdGVyKCcqJylcbiAgfSlcbiAgY29uc3Qgb25GaWx0ZXIgPSAodmFsdWUpID0+IHtcbiAgICBzZXRGaWx0ZXJTdHIodmFsdWUpXG4gICAgaWYgKHZhbHVlICE9PSAnKicpIHtcbiAgICAgIHZhbHVlID0gJy4nICsgdmFsdWVcbiAgICB9XG4gICAgZ3JpZCAmJiBncmlkLmFycmFuZ2UoeyBmaWx0ZXI6IHZhbHVlIH0pXG4gIH1cbiAgY29uc3QgZ2V0RGVtb0NsYXNzID0gKGRlbW8pID0+IHtcbiAgICBsZXQgdGFncyA9IGRlbW8udGFncy5tYXAodGFnID0+IHtcbiAgICAgIHJldHVybiB0YWcuc2x1Z1xuICAgIH0pXG5cbiAgICByZXR1cm4gdGFncy5qb2luKCcgJylcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxOZXh0U2VvXG4gICAgICAgIHRpdGxlPXttZXRhLnRpdGxlfVxuICAgICAgICBkZXNjcmlwdGlvbj17bWV0YS5kZXNjcmlwdGlvbn1cbiAgICAgICAgb3BlbkdyYXBoPXt7XG4gICAgICAgICAgdGl0bGU6IGAke21ldGEudGl0bGV9IPCfkajwn4+94oCN8J+SuyBTaW5oIE5UYCxcbiAgICAgICAgICBzaXRlX25hbWU6IGAke21ldGEudGl0bGV9YCxcbiAgICAgICAgfX1cbiAgICAgIC8+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHB4LTQgcHktMjQgbXgtYXV0b1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGp1c3RpZnktYmV0d2VlbiBtYi00XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTQgdGV4dC1jZW50ZXIgbGc6dy02LzEyIGxnOnRleHQtbGVmdCBzbTpwLTBcIj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJtYi02IHRleHQtM3hsIGZvbnQtYm9sZCBsZWFkaW5nLW5vcm1hbCB4bDp0ZXh0LTR4bCBsZzpwdC00XCI+XG4gICAgICAgICAgICAgIHtjb250ZW50Lm5hbWV9XG4gICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm1iLTYgZm9udC1tZWRpdW0gbGVhZGluZy1yZWxheGVkIHhsOnRleHQtbGdcIj5cbiAgICAgICAgICAgICAge2NvbnRlbnQuZGVzY3JpcHRpb259XG4gICAgICAgICAgICA8L2gzPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0yLzMgbXgtYXV0byBsZzpteC0wIGxnOnctNS8xMlwiPlxuICAgICAgICAgICAgPGltZyBzcmM9e0RlbW9zU3ZnfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWItNCB0ZXh0LWNlbnRlciBsZzptYi0yXCI+XG4gICAgICAgICAgICB7dGFnRmlsdGVycyAmJiB0YWdGaWx0ZXJzLm1hcCh0YWdGaWx0ZXIgPT4gKFxuICAgICAgICAgICAgICA8YnV0dG9uIGtleT17dGFnRmlsdGVyLnNsdWd9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbigndGV4dDpzbSBsZzp0ZXh0LWxnIG0tMiBsZzptLTQgYmctb3JhbmdlLTUwMCBmb250LWJvbGQgcC0yIGxnOnAtNiBweS0xIGxnOnB5LTIgdGV4dC13aGl0ZSBzaGFkb3ctbWQgcm91bmRlZCcsIHtcbiAgICAgICAgICAgICAgICAgICdiZy1ncmVlbi01MDAnOiBmaWx0ZXJTdHIgPT09IHRhZ0ZpbHRlci5zbHVnLFxuICAgICAgICAgICAgICAgICAgJ2JnLWdyYXktNTAwJzogZmlsdGVyU3RyICE9PSB0YWdGaWx0ZXIuc2x1ZyxcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKT0+IHsgb25GaWx0ZXIodGFnRmlsdGVyLnNsdWcpIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7IHRhZ0ZpbHRlci5uYW1lIH1cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBpZD1cInBvcnRmb2xpb3MtZ3JpZFwiIGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwXCI+XG4gICAgICAgICAge2RlbW9zICYmIGRlbW9zLm1hcChkZW1vID0+IChcbiAgICAgICAgICAgIDxEZW1vSXRlbSBrZXk9e2RlbW8uaWR9IGRlbW89e2RlbW99IGNsYXNzTmFtZT17YHctZnVsbCBsZzp3LTEvMiBweS00IGxnOnB4LTQgY3Vyc29yLXBvaW50ZXIgJHtnZXREZW1vQ2xhc3MoZGVtbyl9YH0gLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBEZW1vc1BhZ2VcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcbiAgY29uc3Qge3Byb3BzfSA9IGF3YWl0IFdlYnNpdGVNaXhpbi5nZXRTdGF0aWNQcm9wcygpXG4gIGNvbnN0IGRlbW9zID0gYXdhaXQgRGVtb1NlcnZpY2UuZ2V0QWxsKHsgJ3dlYnNpdGUuc2x1Zyc6IGNvbmZpZy53ZWJzaXRlU2x1ZyB9KVxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICAuLi5wcm9wcyxcbiAgICAgIGRlbW9zXG4gICAgfSxcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=