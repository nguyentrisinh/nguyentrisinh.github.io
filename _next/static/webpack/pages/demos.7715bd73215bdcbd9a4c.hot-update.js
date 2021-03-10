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
  if (event.defaultPrevented) return;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGVtb3MuanMiXSwibmFtZXMiOlsiZ29Ub0V4dGVybmFsIiwiZXZlbnQiLCJ1cmwiLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0IiwiZGVmYXVsdFByZXZlbnRlZCIsIndpbmRvdyIsIm9wZW4iLCJEZW1vSXRlbSIsImNsYXNzTmFtZSIsImRlbW8iLCJjb3ZlclVybCIsImdldFN0cmFwaU1lZGlhIiwiY292ZXIiLCJ3ZWJzaXRlX3VybCIsImJhY2tncm91bmRJbWFnZSIsInJlcG9fdXJsIiwibmFtZSIsInRhZ3MiLCJtYXAiLCJ0YWciLCJzbHVnIiwiRGVtb3NQYWdlIiwid2Vic2l0ZSIsImRlbW9zIiwicGFnZURhdGEiLCJnZXRQYWdlRGF0YSIsImNvbnZlcnREYXRhUGFnZSIsIm1ldGEiLCJjb250ZW50IiwidXNlU3RhdGUiLCJmaWx0ZXJTdHIiLCJzZXRGaWx0ZXJTdHIiLCJncmlkIiwic2V0R3JpZCIsInRhZ0ZpbHRlcnMiLCJ1c2VEaWRNb3VudCIsIklzb3RvcGUiLCJyZXF1aXJlIiwiaXRlbVNlbGVjdG9yIiwibGF5b3V0TW9kZSIsIm9uRmlsdGVyIiwidmFsdWUiLCJhcnJhbmdlIiwiZmlsdGVyIiwiZ2V0RGVtb0NsYXNzIiwiam9pbiIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJzaXRlX25hbWUiLCJEZW1vc1N2ZyIsInRhZ0ZpbHRlciIsImNuIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxLQUFELEVBQVFDLEdBQVIsRUFBZ0I7QUFDbkNDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSCxLQUFLLENBQUNJLE1BQWxCO0FBQ0EsTUFBSUosS0FBSyxDQUFDSyxnQkFBVixFQUE0QjtBQUM1QkMsUUFBTSxDQUFDQyxJQUFQLENBQVlOLEdBQVo7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QUE7QUFBQSxlQWZGLGVBK0JFO0FBQUssVUFBRSxFQUFDLGlCQUFSO0FBQTBCLGlCQUFTLEVBQUMsZ0JBQXBDO0FBQUEsa0JBQ0dHLEtBQUssSUFBSUEsS0FBSyxDQUFDTCxHQUFOLENBQVUsVUFBQVQsSUFBSTtBQUFBLDhCQUN0QixxRUFBQyxRQUFEO0FBQXdCLGdCQUFJLEVBQUVBLElBQTlCO0FBQW9DLHFCQUFTLHdEQUFpRG1DLFlBQVksQ0FBQ25DLElBQUQsQ0FBN0Q7QUFBN0MsYUFBZUEsSUFBSSxDQUFDMkMsRUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEc0I7QUFBQSxTQUFkO0FBRFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQS9CRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFWRjtBQUFBLGtCQURGO0FBa0RELENBckZEOztHQUFNL0IsUztVQVNKYyxpRDs7O01BVElkLFM7O0FBdUZTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kZW1vcy43NzE1YmQ3MzIxNWJkY2JkOWE0Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VEaWRNb3VudCB9IGZyb20gJ3Jvb2tzJ1xuaW1wb3J0IGNuIGZyb20gJ2NsYXNzbmFtZXMnXG5pbXBvcnQgeyBOZXh0U2VvIH0gZnJvbSAnbmV4dC1zZW8nXG5cbmltcG9ydCBXZWJzaXRlTWl4aW4gZnJvbSAnQC9saWJzL21peGlucy9XZWJzaXRlTWl4aW4nXG5pbXBvcnQgY29uZmlnIGZyb20gJ0AvbGlicy9jb25maWcnXG5pbXBvcnQgeyBEZW1vU2VydmljZSB9IGZyb20gJ0AvbGlicy9zZXJ2aWNlcydcbmltcG9ydCB7IGNvbnZlcnREYXRhUGFnZSB9IGZyb20gJ0AvbGlicy9jb252ZXJ0ZXJzL0RlbW9zUGFnZUNvbnZlcnRlcidcbmltcG9ydCB7IGdldFBhZ2VEYXRhLCBnZXRTdHJhcGlNZWRpYSB9IGZyb20gJ0AvbGlicy9jb25maWcnXG5cbmltcG9ydCBEZW1vc1N2ZyBmcm9tICdAL2Fzc2V0cy9zdmcvZGVtb3Muc3ZnJ1xuXG5jb25zdCBnb1RvRXh0ZXJuYWwgPSAoZXZlbnQsIHVybCkgPT4ge1xuICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQpXG4gIGlmIChldmVudC5kZWZhdWx0UHJldmVudGVkKSByZXR1cm47XG4gIHdpbmRvdy5vcGVuKHVybClcbn1cblxuY29uc3QgRGVtb0l0ZW0gPSAoeyBjbGFzc05hbWUsIGRlbW8gfSkgPT4ge1xuICBjb25zdCBjb3ZlclVybCA9IGdldFN0cmFwaU1lZGlhKGRlbW8uY292ZXIpXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YHBvcnRmb2xpby1pdGVtICR7Y2xhc3NOYW1lfWB9IG9uQ2xpY2s9eyhldmVudCk9PiB7IGdvVG9FeHRlcm5hbChldmVudCwgZGVtby53ZWJzaXRlX3VybCkgfX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGJsb2NrIGgtZnVsbCBiZy1ncmF5LTMwMCBiZy1jZW50ZXIgYmctY292ZXIgYm9yZGVyIHJvdW5kZWQgaG92ZXI6YmctZ3JheS0yMDBcIlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke2NvdmVyVXJsfSlgXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTAgcmlnaHQtMCBtdC00IG1yLTQgdGV4dC1ncmVlbi05MDBcIj5cbiAgICAgICAgICA8YSBocmVmPXtkZW1vLnJlcG9fdXJsfSB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzc05hbWU9XCJwLTIgdGV4dC0yeGwgaG92ZXI6dGV4dC1ncmF5LTQwMFwiPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLWdpdC1hbHRcIj48L2k+XG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDxhIGhyZWY9e2RlbW8ud2Vic2l0ZV91cmx9IHRhcmdldD1cIl9ibGFua1wiIGNsYXNzTmFtZT1cInAtMiB0ZXh0LXhsIGhvdmVyOnRleHQtZ3JheS00MDBcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1leHRlcm5hbC1saW5rLWFsdFwiPjwvaT5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGJvdHRvbS0wIHctZnVsbCBwdC0yIHBsLTQgdGV4dC13aGl0ZSBiZy1ncmF5LTcwMCBwb3J0Zm9saW8taXRlbS1jb250ZW50XCI+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkXCI+XG4gICAgICAgICAgICB7IGRlbW8ubmFtZSB9XG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImp1c3RpZnktY2VudGVyIGJsb2NrIHB5LTEgdGV4dC1zbSB0ZWNobm9sb2dpZXNcIj5cbiAgICAgICAgICAgIHtkZW1vLnRhZ3MgJiYgZGVtby50YWdzLm1hcCh0YWcgPT4gKFxuICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgIGtleT17dGFnLnNsdWd9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHBsLTJcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgc3JjPXtgL3RlY2hub2xvZ2llcy8ke3RhZy5zbHVnfS5wbmdgfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC00XCJcbiAgICAgICAgICAgICAgICAgIGFsdD17dGFnLm5hbWV9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgRGVtb3NQYWdlID0gKHsgd2Vic2l0ZSwgZGVtb3MgfSkgPT4ge1xuICBjb25zdCBwYWdlRGF0YSA9IGdldFBhZ2VEYXRhKHdlYnNpdGUsIGBzaW5obnQtZGVtb3NgKVxuICBjb25zdCB7IG1ldGEsIGNvbnRlbnQgfSAgPSBjb252ZXJ0RGF0YVBhZ2UocGFnZURhdGEpXG4gIFxuICBjb25zdCBbZmlsdGVyU3RyLCBzZXRGaWx0ZXJTdHJdID0gdXNlU3RhdGUoJycpXG4gIGxldCBbZ3JpZCwgc2V0R3JpZF0gPSB1c2VTdGF0ZSgpXG5cbiAgbGV0IHRhZ0ZpbHRlcnMgPSBjb250ZW50LnRhZ0ZpbHRlcnNcblxuICB1c2VEaWRNb3VudCgoKSA9PiB7XG4gICAgY29uc3QgSXNvdG9wZSA9IHJlcXVpcmUoJ2lzb3RvcGUtbGF5b3V0JylcbiAgICBzZXRHcmlkKFxuICAgICAgbmV3IElzb3RvcGUoJyNwb3J0Zm9saW9zLWdyaWQnLCB7XG4gICAgICAgIGl0ZW1TZWxlY3RvcjogJy5wb3J0Zm9saW8taXRlbScsXG4gICAgICAgIGxheW91dE1vZGU6ICdmaXRSb3dzJ1xuICAgICAgfSlcbiAgICApXG5cbiAgICBvbkZpbHRlcignKicpXG4gIH0pXG4gIGNvbnN0IG9uRmlsdGVyID0gKHZhbHVlKSA9PiB7XG4gICAgc2V0RmlsdGVyU3RyKHZhbHVlKVxuICAgIGlmICh2YWx1ZSAhPT0gJyonKSB7XG4gICAgICB2YWx1ZSA9ICcuJyArIHZhbHVlXG4gICAgfVxuICAgIGdyaWQgJiYgZ3JpZC5hcnJhbmdlKHsgZmlsdGVyOiB2YWx1ZSB9KVxuICB9XG4gIGNvbnN0IGdldERlbW9DbGFzcyA9IChkZW1vKSA9PiB7XG4gICAgbGV0IHRhZ3MgPSBkZW1vLnRhZ3MubWFwKHRhZyA9PiB7XG4gICAgICByZXR1cm4gdGFnLnNsdWdcbiAgICB9KVxuXG4gICAgcmV0dXJuIHRhZ3Muam9pbignICcpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TmV4dFNlb1xuICAgICAgICB0aXRsZT17bWV0YS50aXRsZX1cbiAgICAgICAgZGVzY3JpcHRpb249e21ldGEuZGVzY3JpcHRpb259XG4gICAgICAgIG9wZW5HcmFwaD17e1xuICAgICAgICAgIHRpdGxlOiBgJHttZXRhLnRpdGxlfSDwn5Go8J+PveKAjfCfkrsgU2luaCBOVGAsXG4gICAgICAgICAgc2l0ZV9uYW1lOiBgJHttZXRhLnRpdGxlfWAsXG4gICAgICAgIH19XG4gICAgICAvPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBweC00IHB5LTI0IG14LWF1dG9cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBqdXN0aWZ5LWJldHdlZW4gbWItNFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IHRleHQtY2VudGVyIGxnOnctNi8xMiBsZzp0ZXh0LWxlZnQgc206cC0wXCI+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibWItNiB0ZXh0LTN4bCBmb250LWJvbGQgbGVhZGluZy1ub3JtYWwgeGw6dGV4dC00eGwgbGc6cHQtNFwiPlxuICAgICAgICAgICAgICB7Y29udGVudC5uYW1lfVxuICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJtYi02IGZvbnQtbWVkaXVtIGxlYWRpbmctcmVsYXhlZCB4bDp0ZXh0LWxnXCI+XG4gICAgICAgICAgICAgIHtjb250ZW50LmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMi8zIG14LWF1dG8gbGc6bXgtMCBsZzp3LTUvMTJcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPXtEZW1vc1N2Z30gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1iLTQgdGV4dC1jZW50ZXIgbGc6bWItMlwiPlxuICAgICAgICAgICAge3RhZ0ZpbHRlcnMgJiYgdGFnRmlsdGVycy5tYXAodGFnRmlsdGVyID0+IChcbiAgICAgICAgICAgICAgPGJ1dHRvbiBrZXk9e3RhZ0ZpbHRlci5zbHVnfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y24oJ3RleHQ6c20gbGc6dGV4dC1sZyBtLTIgbGc6bS00IGJnLW9yYW5nZS01MDAgZm9udC1ib2xkIHAtMiBsZzpwLTYgcHktMSBsZzpweS0yIHRleHQtd2hpdGUgc2hhZG93LW1kIHJvdW5kZWQnLCB7XG4gICAgICAgICAgICAgICAgICAnYmctZ3JlZW4tNTAwJzogZmlsdGVyU3RyID09PSB0YWdGaWx0ZXIuc2x1ZyxcbiAgICAgICAgICAgICAgICAgICdiZy1ncmF5LTUwMCc6IGZpbHRlclN0ciAhPT0gdGFnRmlsdGVyLnNsdWcsXG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCk9PiB7IG9uRmlsdGVyKHRhZ0ZpbHRlci5zbHVnKSB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgeyB0YWdGaWx0ZXIubmFtZSB9XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgaWQ9XCJwb3J0Zm9saW9zLWdyaWRcIiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcFwiPlxuICAgICAgICAgIHtkZW1vcyAmJiBkZW1vcy5tYXAoZGVtbyA9PiAoXG4gICAgICAgICAgICA8RGVtb0l0ZW0ga2V5PXtkZW1vLmlkfSBkZW1vPXtkZW1vfSBjbGFzc05hbWU9e2B3LWZ1bGwgbGc6dy0xLzIgcHktNCBsZzpweC00IGN1cnNvci1wb2ludGVyICR7Z2V0RGVtb0NsYXNzKGRlbW8pfWB9IC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRGVtb3NQYWdlXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XG4gIGNvbnN0IHtwcm9wc30gPSBhd2FpdCBXZWJzaXRlTWl4aW4uZ2V0U3RhdGljUHJvcHMoKVxuICBjb25zdCBkZW1vcyA9IGF3YWl0IERlbW9TZXJ2aWNlLmdldEFsbCh7ICd3ZWJzaXRlLnNsdWcnOiBjb25maWcud2Vic2l0ZVNsdWcgfSlcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgLi4ucHJvcHMsXG4gICAgICBkZW1vc1xuICAgIH0sXG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9