webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libs_converters_HomePageConverter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/libs/converters/HomePageConverter */ "./libs/converters/HomePageConverter.js");
/* harmony import */ var _libs_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/libs/config */ "./libs/config.js");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-seo */ "./node_modules/next-seo/lib/next-seo.module.js");
/* harmony import */ var _components_common_lazy_LazyImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/common/lazy/LazyImage */ "./components/common/lazy/LazyImage.jsx");
/* harmony import */ var _assets_svg_fronend_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/assets/svg/fronend.svg */ "./assets/svg/fronend.svg");
/* harmony import */ var _assets_svg_fronend_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_fronend_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_svg_backend_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/assets/svg/backend.svg */ "./assets/svg/backend.svg");
/* harmony import */ var _assets_svg_backend_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_backend_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_svg_database_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/assets/svg/database.svg */ "./assets/svg/database.svg");
/* harmony import */ var _assets_svg_database_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_database_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_svg_more_thing_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/assets/svg/more-thing.svg */ "./assets/svg/more-thing.svg");
/* harmony import */ var _assets_svg_more_thing_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_more_thing_svg__WEBPACK_IMPORTED_MODULE_8__);



var _jsxFileName = "C:\\Users\\tamPC\\OneDrive\\working\\sinhnt\\sinhnt-fe\\pages\\index.js",
    _this = undefined;










var HomePage = function HomePage(_ref) {
  var website = _ref.website;
  var pageData = Object(_libs_config__WEBPACK_IMPORTED_MODULE_2__["getPageData"])(website, 'sinhnt-home');

  var _convertDataPage = Object(_libs_converters_HomePageConverter__WEBPACK_IMPORTED_MODULE_1__["convertDataPage"])(pageData),
      meta = _convertDataPage.meta,
      content = _convertDataPage.content;

  var avatar = '/avatar.jpg';
  var avatarXl = '/avatar-lg.jpg';
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_seo__WEBPACK_IMPORTED_MODULE_3__["NextSeo"], {
      title: meta.title,
      description: meta.description,
      openGraph: {
        title: "".concat(meta.title, " \uD83D\uDC68\uD83C\uDFFD\u200D\uD83D\uDCBB Sinh NT"),
        site_name: "".concat(meta.title)
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      className: "container px-4 py-24 mx-auto text-black",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex flex-wrap items-center h-auto max-w-4xl mx-auto my-12 lg:my-6",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          id: "profile",
          className: "w-full mx-6 bg-white rounded-lg shadow-2xl lg:w-3/5 lg:rounded-l-lg lg:rounded-r-none lg:mx-0",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "p-4 text-center md:p-12 lg:text-left",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "block w-48 h-48 mx-auto -mt-16 bg-center bg-cover rounded-full shadow-xl lg:hidden",
              style: {
                'backgroundImage': "url(".concat(avatar, ")")
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
              className: "pt-8 text-3xl font-bold lg:pt-0",
              children: content.welcome.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "w-4/5 pt-3 mx-auto border-b-2 border-green-500 lg:mx-0"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "flex items-center justify-center pt-4 text-base font-bold lg:justify-start",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                className: "pr-4 text-green-700 fas fa-id-card"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 41,
                columnNumber: 17
              }, _this), content.welcome.job]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "flex items-center justify-center pt-2 text-xs text-gray-600 lg:text-sm lg:justify-start",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                className: "pr-4 text-lg text-green-700 fas fa-map-marker-alt"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 45,
                columnNumber: 17
              }, _this), content.welcome.location]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "pt-8 text-sm",
              children: content.welcome.description
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "pt-12 pb-8 text-center",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: "px-4 py-2 mx-4 font-bold text-white bg-green-700 rounded-full hover:bg-green-900",
                children: "Hire me"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 51,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: "px-4 py-2 mx-4 font-bold text-white bg-green-700 rounded-full hover:bg-green-900",
                children: "Contact me"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 54,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "flex flex-wrap items-center justify-between w-4/5 pb-16 mx-auto mt-6 lg:pb-0 lg:w-full",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                className: "link",
                href: "#",
                "data-tippy-content": "@github_handle",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                  className: "text-2xl fas fa-envelope-open-text"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 61,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 60,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                className: "link",
                href: "#",
                "data-tippy-content": "@facebook_handle",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                  className: "text-2xl fab fa-skype"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 64,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 63,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                className: "link",
                href: "#",
                "data-tippy-content": "@twitter_handle",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                  className: "text-2xl fab fa-twitter"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 67,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                className: "link",
                href: "#",
                "data-tippy-content": "@github_handle",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                  className: "text-2xl fab fa-github"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 70,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 69,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "w-full lg:w-2/5",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_common_lazy_LazyImage__WEBPACK_IMPORTED_MODULE_4__["default"], {
            src: avatarXl,
            className: "hidden rounded-none shadow-2xl lg:rounded-lg lg:block min-h-xl"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      className: "py-8 bg-gray-100 border-b",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container max-w-5xl m-8 mx-auto",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: "w-full my-2 text-5xl font-black leading-tight text-center text-gray-800",
          children: "What I can do?"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "w-full mb-4",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "w-64 h-1 py-0 mx-auto my-0 bg-gray-500 rounded-t"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "flex flex-wrap",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "w-5/6 p-6 sm:w-1/2",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
              className: "mb-3 text-3xl font-bold leading-none text-gray-800",
              children: content.whatICanDo.frontend.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "mb-8 text-gray-600",
              children: content.whatICanDo.frontend.description
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "w-full p-6 sm:w-1/2",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: _assets_svg_fronend_svg__WEBPACK_IMPORTED_MODULE_5___default.a
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 106,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "flex flex-col-reverse flex-wrap sm:flex-row",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "w-full p-6 mt-6 sm:w-1/2",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: _assets_svg_backend_svg__WEBPACK_IMPORTED_MODULE_6___default.a
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "w-full p-6 mt-6 sm:w-1/2",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "align-middle",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                className: "mb-3 text-3xl font-bold leading-none text-gray-800",
                children: content.whatICanDo.backend.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 116,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "mb-8 text-gray-600",
                children: content.whatICanDo.backend.description
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 119,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 115,
              columnNumber: 15
            }, _this)
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
          className: "flex flex-wrap",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "w-5/6 p-6 sm:w-1/2",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
              className: "mb-3 text-3xl font-bold leading-none text-gray-800",
              children: content.whatICanDo.database.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 128,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "mb-8 text-gray-600",
              children: content.whatICanDo.database.description
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 131,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "w-full p-6 sm:w-1/2",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: _assets_svg_database_svg__WEBPACK_IMPORTED_MODULE_7___default.a
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 136,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "flex flex-col-reverse flex-wrap sm:flex-row",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "w-full p-6 mt-6 sm:w-1/2",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: _assets_svg_more_thing_svg__WEBPACK_IMPORTED_MODULE_8___default.a
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 142,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "w-full p-6 mt-6 sm:w-1/2",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "align-middle",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                className: "mb-3 text-3xl font-bold leading-none text-gray-800",
                children: content.whatICanDo.moreThings.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 146,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "mb-8 text-gray-600",
                children: content.whatICanDo.moreThings.description
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 149,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 145,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 144,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_c = HomePage;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (HomePage);

var _c;

$RefreshReg$(_c, "HomePage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZVBhZ2UiLCJ3ZWJzaXRlIiwicGFnZURhdGEiLCJnZXRQYWdlRGF0YSIsImNvbnZlcnREYXRhUGFnZSIsIm1ldGEiLCJjb250ZW50IiwiYXZhdGFyIiwiYXZhdGFyWGwiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwic2l0ZV9uYW1lIiwid2VsY29tZSIsIm5hbWUiLCJqb2IiLCJsb2NhdGlvbiIsIndoYXRJQ2FuRG8iLCJmcm9udGVuZCIsIkZyb25lbmRTdmciLCJCYWNrZW5kU3ZnIiwiYmFja2VuZCIsImRhdGFiYXNlIiwiRGF0YUJhc2VTdmciLCJNb3JlVGhpbmdTdmciLCJtb3JlVGhpbmdzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBaUI7QUFBQSxNQUFkQyxPQUFjLFFBQWRBLE9BQWM7QUFDaEMsTUFBTUMsUUFBUSxHQUFHQyxnRUFBVyxDQUFDRixPQUFELEVBQVUsYUFBVixDQUE1Qjs7QUFEZ0MseUJBRU5HLDBGQUFlLENBQUNGLFFBQUQsQ0FGVDtBQUFBLE1BRXhCRyxJQUZ3QixvQkFFeEJBLElBRndCO0FBQUEsTUFFbEJDLE9BRmtCLG9CQUVsQkEsT0FGa0I7O0FBR2hDLE1BQU1DLE1BQU0sR0FBRyxhQUFmO0FBQ0EsTUFBTUMsUUFBUSxHQUFHLGdCQUFqQjtBQUNBLHNCQUNFO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFDRSxXQUFLLEVBQUVILElBQUksQ0FBQ0ksS0FEZDtBQUVFLGlCQUFXLEVBQUVKLElBQUksQ0FBQ0ssV0FGcEI7QUFHRSxlQUFTLEVBQUU7QUFDVEQsYUFBSyxZQUFLSixJQUFJLENBQUNJLEtBQVYsd0RBREk7QUFFVEUsaUJBQVMsWUFBS04sSUFBSSxDQUFDSSxLQUFW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QUFBQSxtQkFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBeENGLGVBc0RFO0FBQUssbUJBQVMsRUFBQyw2Q0FBZjtBQUFBLGtDQUNFO0FBQUsscUJBQVMsRUFBQywwQkFBZjtBQUFBLG1DQUNFO0FBQUssaUJBQUcsRUFBRUMsaUVBQVlBO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBSUU7QUFBSyxxQkFBUyxFQUFDLDBCQUFmO0FBQUEsbUNBQ0U7QUFBSyx1QkFBUyxFQUFDLGNBQWY7QUFBQSxzQ0FDRTtBQUFJLHlCQUFTLEVBQUMsb0RBQWQ7QUFBQSwwQkFDR2pCLE9BQU8sQ0FBQ1UsVUFBUixDQUFtQlEsVUFBbkIsQ0FBOEJYO0FBRGpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsZUFJRTtBQUFHLHlCQUFTLEVBQUMsb0JBQWI7QUFBQSwwQkFDR1AsT0FBTyxDQUFDVSxVQUFSLENBQW1CUSxVQUFuQixDQUE4QmQ7QUFEakM7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF0REY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQW5FRjtBQUFBLGtCQURGO0FBK0lELENBcEpEOztLQUFNVixROztBQXNKU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguODVlZTQ5OTg5YTZlZDIwNTlkNDUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBXZWJzaXRlTWl4aW4gZnJvbSAnQC9saWJzL21peGlucy9XZWJzaXRlTWl4aW4nXG5pbXBvcnQgeyBjb252ZXJ0RGF0YVBhZ2UgfSBmcm9tICdAL2xpYnMvY29udmVydGVycy9Ib21lUGFnZUNvbnZlcnRlcidcbmltcG9ydCB7IGdldFBhZ2VEYXRhIH0gZnJvbSAnQC9saWJzL2NvbmZpZydcbmltcG9ydCB7IE5leHRTZW8gfSBmcm9tICduZXh0LXNlbydcblxuaW1wb3J0IExhenlJbWFnZSBmcm9tICdAL2NvbXBvbmVudHMvY29tbW9uL2xhenkvTGF6eUltYWdlJ1xuaW1wb3J0IEZyb25lbmRTdmcgZnJvbSAnQC9hc3NldHMvc3ZnL2Zyb25lbmQuc3ZnJ1xuaW1wb3J0IEJhY2tlbmRTdmcgZnJvbSAnQC9hc3NldHMvc3ZnL2JhY2tlbmQuc3ZnJ1xuaW1wb3J0IERhdGFCYXNlU3ZnIGZyb20gJ0AvYXNzZXRzL3N2Zy9kYXRhYmFzZS5zdmcnXG5pbXBvcnQgTW9yZVRoaW5nU3ZnIGZyb20gJ0AvYXNzZXRzL3N2Zy9tb3JlLXRoaW5nLnN2ZydcblxuY29uc3QgSG9tZVBhZ2UgPSAoeyB3ZWJzaXRlIH0pID0+IHtcbiAgY29uc3QgcGFnZURhdGEgPSBnZXRQYWdlRGF0YSh3ZWJzaXRlLCAnc2luaG50LWhvbWUnKVxuICBjb25zdCB7IG1ldGEsIGNvbnRlbnQgfSA9IGNvbnZlcnREYXRhUGFnZShwYWdlRGF0YSlcbiAgY29uc3QgYXZhdGFyID0gJy9hdmF0YXIuanBnJ1xuICBjb25zdCBhdmF0YXJYbCA9ICcvYXZhdGFyLWxnLmpwZycgXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxOZXh0U2VvXG4gICAgICAgIHRpdGxlPXttZXRhLnRpdGxlfVxuICAgICAgICBkZXNjcmlwdGlvbj17bWV0YS5kZXNjcmlwdGlvbn1cbiAgICAgICAgb3BlbkdyYXBoPXt7XG4gICAgICAgICAgdGl0bGU6IGAke21ldGEudGl0bGV9IPCfkajwn4+94oCN8J+SuyBTaW5oIE5UYCxcbiAgICAgICAgICBzaXRlX25hbWU6IGAke21ldGEudGl0bGV9YCxcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgICBcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRhaW5lciBweC00IHB5LTI0IG14LWF1dG8gdGV4dC1ibGFja1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGl0ZW1zLWNlbnRlciBoLWF1dG8gbWF4LXctNHhsIG14LWF1dG8gbXktMTIgbGc6bXktNlwiPlxuXG4gICAgICAgICAgPGRpdiBpZD1cInByb2ZpbGVcIiBjbGFzc05hbWU9XCJ3LWZ1bGwgbXgtNiBiZy13aGl0ZSByb3VuZGVkLWxnIHNoYWRvdy0yeGwgbGc6dy0zLzUgbGc6cm91bmRlZC1sLWxnIGxnOnJvdW5kZWQtci1ub25lIGxnOm14LTBcIj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTQgdGV4dC1jZW50ZXIgbWQ6cC0xMiBsZzp0ZXh0LWxlZnRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9jayB3LTQ4IGgtNDggbXgtYXV0byAtbXQtMTYgYmctY2VudGVyIGJnLWNvdmVyIHJvdW5kZWQtZnVsbCBzaGFkb3cteGwgbGc6aGlkZGVuXCIgc3R5bGU9e1xuICAgICAgICAgICAgICAgIHsgJ2JhY2tncm91bmRJbWFnZSc6IGB1cmwoJHthdmF0YXJ9KWAgfVxuICAgICAgICAgICAgICB9PjwvZGl2PlxuXG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJwdC04IHRleHQtM3hsIGZvbnQtYm9sZCBsZzpwdC0wXCI+e2NvbnRlbnQud2VsY29tZS5uYW1lfTwvaDE+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy00LzUgcHQtMyBteC1hdXRvIGJvcmRlci1iLTIgYm9yZGVyLWdyZWVuLTUwMCBsZzpteC0wXCI+PC9kaXY+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHB0LTQgdGV4dC1iYXNlIGZvbnQtYm9sZCBsZzpqdXN0aWZ5LXN0YXJ0XCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwicHItNCB0ZXh0LWdyZWVuLTcwMCBmYXMgZmEtaWQtY2FyZFwiPjwvaT5cbiAgICAgICAgICAgICAgICB7Y29udGVudC53ZWxjb21lLmpvYn1cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBwdC0yIHRleHQteHMgdGV4dC1ncmF5LTYwMCBsZzp0ZXh0LXNtIGxnOmp1c3RpZnktc3RhcnRcIj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJwci00IHRleHQtbGcgdGV4dC1ncmVlbi03MDAgZmFzIGZhLW1hcC1tYXJrZXItYWx0XCI+PC9pPlxuICAgICAgICAgICAgICAgIHtjb250ZW50LndlbGNvbWUubG9jYXRpb259XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHQtOCB0ZXh0LXNtXCI+e2NvbnRlbnQud2VsY29tZS5kZXNjcmlwdGlvbn08L3A+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0xMiBwYi04IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJweC00IHB5LTIgbXgtNCBmb250LWJvbGQgdGV4dC13aGl0ZSBiZy1ncmVlbi03MDAgcm91bmRlZC1mdWxsIGhvdmVyOmJnLWdyZWVuLTkwMFwiPlxuICAgICAgICAgICAgICAgICAgSGlyZSBtZVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicHgtNCBweS0yIG14LTQgZm9udC1ib2xkIHRleHQtd2hpdGUgYmctZ3JlZW4tNzAwIHJvdW5kZWQtZnVsbCBob3ZlcjpiZy1ncmVlbi05MDBcIj5cbiAgICAgICAgICAgICAgICAgIENvbnRhY3QgbWVcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHctNC81IHBiLTE2IG14LWF1dG8gbXQtNiBsZzpwYi0wIGxnOnctZnVsbFwiPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImxpbmtcIiBocmVmPVwiI1wiIGRhdGEtdGlwcHktY29udGVudD1cIkBnaXRodWJfaGFuZGxlXCI+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmYXMgZmEtZW52ZWxvcGUtb3Blbi10ZXh0XCI+PC9pPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJsaW5rXCIgaHJlZj1cIiNcIiBkYXRhLXRpcHB5LWNvbnRlbnQ9XCJAZmFjZWJvb2tfaGFuZGxlXCI+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmYWIgZmEtc2t5cGVcIj48L2k+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImxpbmtcIiBocmVmPVwiI1wiIGRhdGEtdGlwcHktY29udGVudD1cIkB0d2l0dGVyX2hhbmRsZVwiPlxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwidGV4dC0yeGwgZmFiIGZhLXR3aXR0ZXJcIj48L2k+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImxpbmtcIiBocmVmPVwiI1wiIGRhdGEtdGlwcHktY29udGVudD1cIkBnaXRodWJfaGFuZGxlXCI+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmYWIgZmEtZ2l0aHViXCI+PC9pPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBsZzp3LTIvNVwiPlxuICAgICAgICAgICAgPExhenlJbWFnZSBzcmM9e2F2YXRhclhsfSBjbGFzc05hbWU9XCJoaWRkZW4gcm91bmRlZC1ub25lIHNoYWRvdy0yeGwgbGc6cm91bmRlZC1sZyBsZzpibG9jayBtaW4taC14bFwiLz5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHktOCBiZy1ncmF5LTEwMCBib3JkZXItYlwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBtYXgtdy01eGwgbS04IG14LWF1dG9cIj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidy1mdWxsIG15LTIgdGV4dC01eGwgZm9udC1ibGFjayBsZWFkaW5nLXRpZ2h0IHRleHQtY2VudGVyIHRleHQtZ3JheS04MDBcIj5cbiAgICAgICAgICAgIFdoYXQgSSBjYW4gZG8/XG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtYi00XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctNjQgaC0xIHB5LTAgbXgtYXV0byBteS0wIGJnLWdyYXktNTAwIHJvdW5kZWQtdFwiPlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy01LzYgcC02IHNtOnctMS8yXCI+XG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJtYi0zIHRleHQtM3hsIGZvbnQtYm9sZCBsZWFkaW5nLW5vbmUgdGV4dC1ncmF5LTgwMFwiPlxuICAgICAgICAgICAgICAgIHtjb250ZW50LndoYXRJQ2FuRG8uZnJvbnRlbmQubmFtZX1cbiAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItOCB0ZXh0LWdyYXktNjAwXCI+XG4gICAgICAgICAgICAgICAge2NvbnRlbnQud2hhdElDYW5Eby5mcm9udGVuZC5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBwLTYgc206dy0xLzJcIj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9e0Zyb25lbmRTdmd9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbC1yZXZlcnNlIGZsZXgtd3JhcCBzbTpmbGV4LXJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcC02IG10LTYgc206dy0xLzJcIj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9e0JhY2tlbmRTdmd9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHAtNiBtdC02IHNtOnctMS8yXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxpZ24tbWlkZGxlXCI+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm1iLTMgdGV4dC0zeGwgZm9udC1ib2xkIGxlYWRpbmctbm9uZSB0ZXh0LWdyYXktODAwXCI+XG4gICAgICAgICAgICAgICAgICB7Y29udGVudC53aGF0SUNhbkRvLmJhY2tlbmQubmFtZX1cbiAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTggdGV4dC1ncmF5LTYwMFwiPlxuICAgICAgICAgICAgICAgICAge2NvbnRlbnQud2hhdElDYW5Eby5iYWNrZW5kLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy01LzYgcC02IHNtOnctMS8yXCI+XG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJtYi0zIHRleHQtM3hsIGZvbnQtYm9sZCBsZWFkaW5nLW5vbmUgdGV4dC1ncmF5LTgwMFwiPlxuICAgICAgICAgICAgICAgIHtjb250ZW50LndoYXRJQ2FuRG8uZGF0YWJhc2UubmFtZX1cbiAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItOCB0ZXh0LWdyYXktNjAwXCI+XG4gICAgICAgICAgICAgICAge2NvbnRlbnQud2hhdElDYW5Eby5kYXRhYmFzZS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBwLTYgc206dy0xLzJcIj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9e0RhdGFCYXNlU3ZnfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wtcmV2ZXJzZSBmbGV4LXdyYXAgc206ZmxleC1yb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHAtNiBtdC02IHNtOnctMS8yXCI+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtNb3JlVGhpbmdTdmd9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHAtNiBtdC02IHNtOnctMS8yXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxpZ24tbWlkZGxlXCI+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm1iLTMgdGV4dC0zeGwgZm9udC1ib2xkIGxlYWRpbmctbm9uZSB0ZXh0LWdyYXktODAwXCI+XG4gICAgICAgICAgICAgICAgICB7Y29udGVudC53aGF0SUNhbkRvLm1vcmVUaGluZ3MubmFtZX1cbiAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTggdGV4dC1ncmF5LTYwMFwiPlxuICAgICAgICAgICAgICAgICAge2NvbnRlbnQud2hhdElDYW5Eby5tb3JlVGhpbmdzLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBXZWJzaXRlTWl4aW4uZ2V0U3RhdGljUHJvcHMoKVxuXG4gIHJldHVybiBkYXRhXG59XG4iXSwic291cmNlUm9vdCI6IiJ9