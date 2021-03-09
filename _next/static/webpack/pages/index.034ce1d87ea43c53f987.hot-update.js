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
/* harmony import */ var _assets_svg_fronend_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/assets/svg/fronend.svg */ "./assets/svg/fronend.svg");
/* harmony import */ var _assets_svg_fronend_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_fronend_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_svg_backend_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/assets/svg/backend.svg */ "./assets/svg/backend.svg");
/* harmony import */ var _assets_svg_backend_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_backend_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_svg_database_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/assets/svg/database.svg */ "./assets/svg/database.svg");
/* harmony import */ var _assets_svg_database_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_database_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_svg_more_thing_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/assets/svg/more-thing.svg */ "./assets/svg/more-thing.svg");
/* harmony import */ var _assets_svg_more_thing_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_more_thing_svg__WEBPACK_IMPORTED_MODULE_7__);



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
      lineNumber: 18,
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
              lineNumber: 33,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
              className: "pt-8 text-3xl font-bold lg:pt-0",
              children: content.welcome.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "w-4/5 pt-3 mx-auto border-b-2 border-green-500 lg:mx-0"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "flex items-center justify-center pt-4 text-base font-bold lg:justify-start",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                className: "pr-4 text-green-700 fas fa-id-card"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 40,
                columnNumber: 17
              }, _this), content.welcome.job]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "flex items-center justify-center pt-2 text-xs text-gray-600 lg:text-sm lg:justify-start",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                className: "pr-4 text-lg text-green-700 fas fa-map-marker-alt"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 44,
                columnNumber: 17
              }, _this), content.welcome.location]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "pt-8 text-sm",
              children: content.welcome.description
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "pt-12 pb-8 text-center",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: "px-4 py-2 mx-4 font-bold text-white bg-green-700 rounded-full hover:bg-green-900",
                children: "Hire me"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 50,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: "px-4 py-2 mx-4 font-bold text-white bg-green-700 rounded-full hover:bg-green-900",
                children: "Contact me"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 53,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 49,
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
                  lineNumber: 60,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 59,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                className: "link",
                href: "#",
                "data-tippy-content": "@facebook_handle",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                  className: "text-2xl fab fa-skype"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 63,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 62,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                className: "link",
                href: "#",
                "data-tippy-content": "@twitter_handle",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                  className: "text-2xl fab fa-twitter"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 66,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 65,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                className: "link",
                href: "#",
                "data-tippy-content": "@github_handle",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                  className: "text-2xl fab fa-github"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 69,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 68,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "w-full lg:w-2/5",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: avatarXl,
            className: "hidden rounded-none shadow-2xl lg:rounded-lg lg:block"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
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
          lineNumber: 86,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "w-full mb-4",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "w-64 h-1 py-0 mx-auto my-0 bg-gray-500 rounded-t"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
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
              lineNumber: 97,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "mb-8 text-gray-600",
              children: content.whatICanDo.frontend.description
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "w-full p-6 sm:w-1/2",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: _assets_svg_fronend_svg__WEBPACK_IMPORTED_MODULE_4___default.a
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 105,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "flex flex-col-reverse flex-wrap sm:flex-row",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "w-full p-6 mt-6 sm:w-1/2",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: _assets_svg_backend_svg__WEBPACK_IMPORTED_MODULE_5___default.a
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 110,
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
                lineNumber: 115,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "mb-8 text-gray-600",
                children: content.whatICanDo.backend.description
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 118,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 109,
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
              lineNumber: 127,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "mb-8 text-gray-600",
              children: content.whatICanDo.database.description
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 130,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "w-full p-6 sm:w-1/2",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: _assets_svg_database_svg__WEBPACK_IMPORTED_MODULE_6___default.a
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 135,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "flex flex-col-reverse flex-wrap sm:flex-row",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "w-full p-6 mt-6 sm:w-1/2",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: _assets_svg_more_thing_svg__WEBPACK_IMPORTED_MODULE_7___default.a
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 141,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 140,
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
                lineNumber: 145,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "mb-8 text-gray-600",
                children: content.whatICanDo.moreThings.description
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 148,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 144,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 84,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZVBhZ2UiLCJ3ZWJzaXRlIiwicGFnZURhdGEiLCJnZXRQYWdlRGF0YSIsImNvbnZlcnREYXRhUGFnZSIsIm1ldGEiLCJjb250ZW50IiwiYXZhdGFyIiwiYXZhdGFyWGwiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwic2l0ZV9uYW1lIiwid2VsY29tZSIsIm5hbWUiLCJqb2IiLCJsb2NhdGlvbiIsIndoYXRJQ2FuRG8iLCJmcm9udGVuZCIsIkZyb25lbmRTdmciLCJCYWNrZW5kU3ZnIiwiYmFja2VuZCIsImRhdGFiYXNlIiwiRGF0YUJhc2VTdmciLCJNb3JlVGhpbmdTdmciLCJtb3JlVGhpbmdzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBaUI7QUFBQSxNQUFkQyxPQUFjLFFBQWRBLE9BQWM7QUFDaEMsTUFBTUMsUUFBUSxHQUFHQyxnRUFBVyxDQUFDRixPQUFELEVBQVUsYUFBVixDQUE1Qjs7QUFEZ0MseUJBRU5HLDBGQUFlLENBQUNGLFFBQUQsQ0FGVDtBQUFBLE1BRXhCRyxJQUZ3QixvQkFFeEJBLElBRndCO0FBQUEsTUFFbEJDLE9BRmtCLG9CQUVsQkEsT0FGa0I7O0FBR2hDLE1BQU1DLE1BQU0sR0FBRyxhQUFmO0FBQ0EsTUFBTUMsUUFBUSxHQUFHLGdCQUFqQjtBQUNBLHNCQUNFO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFDRSxXQUFLLEVBQUVILElBQUksQ0FBQ0ksS0FEZDtBQUVFLGlCQUFXLEVBQUVKLElBQUksQ0FBQ0ssV0FGcEI7QUFHRSxlQUFTLEVBQUU7QUFDVEQsYUFBSyxZQUFLSixJQUFJLENBQUNJLEtBQVYsd0RBREk7QUFFVEUsaUJBQVMsWUFBS04sSUFBSSxDQUFDSSxLQUFWO0FBRkE7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QTtBQUFBO0FBQUE7QUFBQSxpQkF4Q0YsZUFzREU7QUFBSyxtQkFBUyxFQUFDLDZDQUFmO0FBQUEsa0NBQ0U7QUFBSyxxQkFBUyxFQUFDLDBCQUFmO0FBQUEsbUNBQ0U7QUFBSyxpQkFBRyxFQUFFQyxpRUFBWUE7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFJRTtBQUFLLHFCQUFTLEVBQUMsMEJBQWY7QUFBQSxtQ0FDRTtBQUFLLHVCQUFTLEVBQUMsY0FBZjtBQUFBLHNDQUNFO0FBQUkseUJBQVMsRUFBQyxvREFBZDtBQUFBLDBCQUNHakIsT0FBTyxDQUFDVSxVQUFSLENBQW1CUSxVQUFuQixDQUE4Qlg7QUFEakM7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixlQUlFO0FBQUcseUJBQVMsRUFBQyxvQkFBYjtBQUFBLDBCQUNHUCxPQUFPLENBQUNVLFVBQVIsQ0FBbUJRLFVBQW5CLENBQThCZDtBQURqQztBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXRERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBbkVGO0FBQUEsa0JBREY7QUErSUQsQ0FwSkQ7O0tBQU1WLFE7O0FBc0pTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wMzRjZTFkODdlYTQzYzUzZjk4Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFdlYnNpdGVNaXhpbiBmcm9tICdAL2xpYnMvbWl4aW5zL1dlYnNpdGVNaXhpbidcbmltcG9ydCB7IGNvbnZlcnREYXRhUGFnZSB9IGZyb20gJ0AvbGlicy9jb252ZXJ0ZXJzL0hvbWVQYWdlQ29udmVydGVyJ1xuaW1wb3J0IHsgZ2V0UGFnZURhdGEgfSBmcm9tICdAL2xpYnMvY29uZmlnJ1xuaW1wb3J0IHsgTmV4dFNlbyB9IGZyb20gJ25leHQtc2VvJ1xuXG5pbXBvcnQgRnJvbmVuZFN2ZyBmcm9tICdAL2Fzc2V0cy9zdmcvZnJvbmVuZC5zdmcnXG5pbXBvcnQgQmFja2VuZFN2ZyBmcm9tICdAL2Fzc2V0cy9zdmcvYmFja2VuZC5zdmcnXG5pbXBvcnQgRGF0YUJhc2VTdmcgZnJvbSAnQC9hc3NldHMvc3ZnL2RhdGFiYXNlLnN2ZydcbmltcG9ydCBNb3JlVGhpbmdTdmcgZnJvbSAnQC9hc3NldHMvc3ZnL21vcmUtdGhpbmcuc3ZnJ1xuXG5jb25zdCBIb21lUGFnZSA9ICh7IHdlYnNpdGUgfSkgPT4ge1xuICBjb25zdCBwYWdlRGF0YSA9IGdldFBhZ2VEYXRhKHdlYnNpdGUsICdzaW5obnQtaG9tZScpXG4gIGNvbnN0IHsgbWV0YSwgY29udGVudCB9ID0gY29udmVydERhdGFQYWdlKHBhZ2VEYXRhKVxuICBjb25zdCBhdmF0YXIgPSAnL2F2YXRhci5qcGcnXG4gIGNvbnN0IGF2YXRhclhsID0gJy9hdmF0YXItbGcuanBnJyBcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE5leHRTZW9cbiAgICAgICAgdGl0bGU9e21ldGEudGl0bGV9XG4gICAgICAgIGRlc2NyaXB0aW9uPXttZXRhLmRlc2NyaXB0aW9ufVxuICAgICAgICBvcGVuR3JhcGg9e3tcbiAgICAgICAgICB0aXRsZTogYCR7bWV0YS50aXRsZX0g8J+RqPCfj73igI3wn5K7IFNpbmggTlRgLFxuICAgICAgICAgIHNpdGVfbmFtZTogYCR7bWV0YS50aXRsZX1gLFxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICAgIFxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFpbmVyIHB4LTQgcHktMjQgbXgtYXV0byB0ZXh0LWJsYWNrXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgaXRlbXMtY2VudGVyIGgtYXV0byBtYXgtdy00eGwgbXgtYXV0byBteS0xMiBsZzpteS02XCI+XG5cbiAgICAgICAgICA8ZGl2IGlkPVwicHJvZmlsZVwiIGNsYXNzTmFtZT1cInctZnVsbCBteC02IGJnLXdoaXRlIHJvdW5kZWQtbGcgc2hhZG93LTJ4bCBsZzp3LTMvNSBsZzpyb3VuZGVkLWwtbGcgbGc6cm91bmRlZC1yLW5vbmUgbGc6bXgtMFwiPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNCB0ZXh0LWNlbnRlciBtZDpwLTEyIGxnOnRleHQtbGVmdFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2NrIHctNDggaC00OCBteC1hdXRvIC1tdC0xNiBiZy1jZW50ZXIgYmctY292ZXIgcm91bmRlZC1mdWxsIHNoYWRvdy14bCBsZzpoaWRkZW5cIiBzdHlsZT17XG4gICAgICAgICAgICAgICAgeyAnYmFja2dyb3VuZEltYWdlJzogYHVybCgke2F2YXRhcn0pYCB9XG4gICAgICAgICAgICAgIH0+PC9kaXY+XG5cbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInB0LTggdGV4dC0zeGwgZm9udC1ib2xkIGxnOnB0LTBcIj57Y29udGVudC53ZWxjb21lLm5hbWV9PC9oMT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTQvNSBwdC0zIG14LWF1dG8gYm9yZGVyLWItMiBib3JkZXItZ3JlZW4tNTAwIGxnOm14LTBcIj48L2Rpdj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcHQtNCB0ZXh0LWJhc2UgZm9udC1ib2xkIGxnOmp1c3RpZnktc3RhcnRcIj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJwci00IHRleHQtZ3JlZW4tNzAwIGZhcyBmYS1pZC1jYXJkXCI+PC9pPlxuICAgICAgICAgICAgICAgIHtjb250ZW50LndlbGNvbWUuam9ifVxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHB0LTIgdGV4dC14cyB0ZXh0LWdyYXktNjAwIGxnOnRleHQtc20gbGc6anVzdGlmeS1zdGFydFwiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInByLTQgdGV4dC1sZyB0ZXh0LWdyZWVuLTcwMCBmYXMgZmEtbWFwLW1hcmtlci1hbHRcIj48L2k+XG4gICAgICAgICAgICAgICAge2NvbnRlbnQud2VsY29tZS5sb2NhdGlvbn1cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwdC04IHRleHQtc21cIj57Y29udGVudC53ZWxjb21lLmRlc2NyaXB0aW9ufTwvcD5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTEyIHBiLTggdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInB4LTQgcHktMiBteC00IGZvbnQtYm9sZCB0ZXh0LXdoaXRlIGJnLWdyZWVuLTcwMCByb3VuZGVkLWZ1bGwgaG92ZXI6YmctZ3JlZW4tOTAwXCI+XG4gICAgICAgICAgICAgICAgICBIaXJlIG1lXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJweC00IHB5LTIgbXgtNCBmb250LWJvbGQgdGV4dC13aGl0ZSBiZy1ncmVlbi03MDAgcm91bmRlZC1mdWxsIGhvdmVyOmJnLWdyZWVuLTkwMFwiPlxuICAgICAgICAgICAgICAgICAgQ29udGFjdCBtZVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gdy00LzUgcGItMTYgbXgtYXV0byBtdC02IGxnOnBiLTAgbGc6dy1mdWxsXCI+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibGlua1wiIGhyZWY9XCIjXCIgZGF0YS10aXBweS1jb250ZW50PVwiQGdpdGh1Yl9oYW5kbGVcIj5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInRleHQtMnhsIGZhcyBmYS1lbnZlbG9wZS1vcGVuLXRleHRcIj48L2k+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImxpbmtcIiBocmVmPVwiI1wiIGRhdGEtdGlwcHktY29udGVudD1cIkBmYWNlYm9va19oYW5kbGVcIj5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInRleHQtMnhsIGZhYiBmYS1za3lwZVwiPjwvaT5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibGlua1wiIGhyZWY9XCIjXCIgZGF0YS10aXBweS1jb250ZW50PVwiQHR3aXR0ZXJfaGFuZGxlXCI+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmYWIgZmEtdHdpdHRlclwiPjwvaT5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibGlua1wiIGhyZWY9XCIjXCIgZGF0YS10aXBweS1jb250ZW50PVwiQGdpdGh1Yl9oYW5kbGVcIj5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInRleHQtMnhsIGZhYiBmYS1naXRodWJcIj48L2k+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGxnOnctMi81XCI+XG4gICAgICAgICAgICA8aW1nIHNyYz17YXZhdGFyWGx9IGNsYXNzTmFtZT1cImhpZGRlbiByb3VuZGVkLW5vbmUgc2hhZG93LTJ4bCBsZzpyb3VuZGVkLWxnIGxnOmJsb2NrXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHktOCBiZy1ncmF5LTEwMCBib3JkZXItYlwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBtYXgtdy01eGwgbS04IG14LWF1dG9cIj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidy1mdWxsIG15LTIgdGV4dC01eGwgZm9udC1ibGFjayBsZWFkaW5nLXRpZ2h0IHRleHQtY2VudGVyIHRleHQtZ3JheS04MDBcIj5cbiAgICAgICAgICAgIFdoYXQgSSBjYW4gZG8/XG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtYi00XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctNjQgaC0xIHB5LTAgbXgtYXV0byBteS0wIGJnLWdyYXktNTAwIHJvdW5kZWQtdFwiPlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy01LzYgcC02IHNtOnctMS8yXCI+XG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJtYi0zIHRleHQtM3hsIGZvbnQtYm9sZCBsZWFkaW5nLW5vbmUgdGV4dC1ncmF5LTgwMFwiPlxuICAgICAgICAgICAgICAgIHtjb250ZW50LndoYXRJQ2FuRG8uZnJvbnRlbmQubmFtZX1cbiAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItOCB0ZXh0LWdyYXktNjAwXCI+XG4gICAgICAgICAgICAgICAge2NvbnRlbnQud2hhdElDYW5Eby5mcm9udGVuZC5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBwLTYgc206dy0xLzJcIj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9e0Zyb25lbmRTdmd9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbC1yZXZlcnNlIGZsZXgtd3JhcCBzbTpmbGV4LXJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcC02IG10LTYgc206dy0xLzJcIj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9e0JhY2tlbmRTdmd9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHAtNiBtdC02IHNtOnctMS8yXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxpZ24tbWlkZGxlXCI+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm1iLTMgdGV4dC0zeGwgZm9udC1ib2xkIGxlYWRpbmctbm9uZSB0ZXh0LWdyYXktODAwXCI+XG4gICAgICAgICAgICAgICAgICB7Y29udGVudC53aGF0SUNhbkRvLmJhY2tlbmQubmFtZX1cbiAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTggdGV4dC1ncmF5LTYwMFwiPlxuICAgICAgICAgICAgICAgICAge2NvbnRlbnQud2hhdElDYW5Eby5iYWNrZW5kLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy01LzYgcC02IHNtOnctMS8yXCI+XG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJtYi0zIHRleHQtM3hsIGZvbnQtYm9sZCBsZWFkaW5nLW5vbmUgdGV4dC1ncmF5LTgwMFwiPlxuICAgICAgICAgICAgICAgIHtjb250ZW50LndoYXRJQ2FuRG8uZGF0YWJhc2UubmFtZX1cbiAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItOCB0ZXh0LWdyYXktNjAwXCI+XG4gICAgICAgICAgICAgICAge2NvbnRlbnQud2hhdElDYW5Eby5kYXRhYmFzZS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBwLTYgc206dy0xLzJcIj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9e0RhdGFCYXNlU3ZnfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wtcmV2ZXJzZSBmbGV4LXdyYXAgc206ZmxleC1yb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHAtNiBtdC02IHNtOnctMS8yXCI+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtNb3JlVGhpbmdTdmd9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHAtNiBtdC02IHNtOnctMS8yXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxpZ24tbWlkZGxlXCI+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm1iLTMgdGV4dC0zeGwgZm9udC1ib2xkIGxlYWRpbmctbm9uZSB0ZXh0LWdyYXktODAwXCI+XG4gICAgICAgICAgICAgICAgICB7Y29udGVudC53aGF0SUNhbkRvLm1vcmVUaGluZ3MubmFtZX1cbiAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTggdGV4dC1ncmF5LTYwMFwiPlxuICAgICAgICAgICAgICAgICAge2NvbnRlbnQud2hhdElDYW5Eby5tb3JlVGhpbmdzLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBXZWJzaXRlTWl4aW4uZ2V0U3RhdGljUHJvcHMoKVxuXG4gIHJldHVybiBkYXRhXG59XG4iXSwic291cmNlUm9vdCI6IiJ9