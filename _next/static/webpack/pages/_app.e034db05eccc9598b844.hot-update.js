webpackHotUpdate_N_E("pages/_app",{

/***/ "./libs/config.js":
/*!************************!*\
  !*** ./libs/config.js ***!
  \************************/
/*! exports provided: default, getMeta, getByName, getPageData, getStrapiURL, getStrapiMedia, getSocialUrl, getSocialImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMeta", function() { return getMeta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getByName", function() { return getByName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPageData", function() { return getPageData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStrapiURL", function() { return getStrapiURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStrapiMedia", function() { return getStrapiMedia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSocialUrl", function() { return getSocialUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSocialImage", function() { return getSocialImage; });
var config = {
  node: "development" || false,
  isProduction: false,
  isTest: false,
  isDevelopment:  false || true,
  appName: "sinhnt-fe-dev",
  websiteSlug: process.env.WEBSITE_SLUG,
  siteUrl: "http://localhost:3000",
  apiBaseUrl: "http://localhost:1337"
};
/* harmony default export */ __webpack_exports__["default"] = (config);
function getMeta(tags, name, defaultValue) {
  var result = tags.find(function (tag) {
    return tag.name === name;
  });
  return result ? result.content : defaultValue || '';
}
function getByName(items, name, defaultValue) {
  var result = items.find(function (item) {
    return item.name === name;
  });
  return result || defaultValue || null;
}
function getPageData(website, slug) {
  var result = website.pages.find(function (page) {
    return page.slug === slug;
  });
  return result || {};
}
function getStrapiURL() {
  var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return "".concat("http://localhost:1337" || false).concat(path);
}
function getStrapiMedia(media) {
  var imageUrl = media.url.startsWith('/') ? getStrapiURL(media.url) : media.url;
  return imageUrl;
}
function getSocialUrl(path) {
  var siteUrl = "".concat(config.siteUrl).concat(path);
  return siteUrl;
}
function getSocialImage(media) {
  var imageUrl = '/thumb.jpg';

  if (media) {
    imageUrl = getStrapiMedia(media);
  }

  return imageUrl;
}

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGlicy9jb25maWcuanMiXSwibmFtZXMiOlsiY29uZmlnIiwibm9kZSIsImlzUHJvZHVjdGlvbiIsImlzVGVzdCIsImlzRGV2ZWxvcG1lbnQiLCJhcHBOYW1lIiwicHJvY2VzcyIsIndlYnNpdGVTbHVnIiwiZW52IiwiV0VCU0lURV9TTFVHIiwic2l0ZVVybCIsImFwaUJhc2VVcmwiLCJORVhUX1BVQkxJQ19TVFJBUElfQVBJX1VSTCIsImdldE1ldGEiLCJ0YWdzIiwibmFtZSIsImRlZmF1bHRWYWx1ZSIsInJlc3VsdCIsImZpbmQiLCJ0YWciLCJjb250ZW50IiwiZ2V0QnlOYW1lIiwiaXRlbXMiLCJpdGVtIiwiZ2V0UGFnZURhdGEiLCJ3ZWJzaXRlIiwic2x1ZyIsInBhZ2VzIiwicGFnZSIsImdldFN0cmFwaVVSTCIsInBhdGgiLCJnZXRTdHJhcGlNZWRpYSIsIm1lZGlhIiwiaW1hZ2VVcmwiLCJ1cmwiLCJzdGFydHNXaXRoIiwiZ2V0U29jaWFsVXJsIiwiZ2V0U29jaWFsSW1hZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBTUEsTUFBTSxHQUFHO0FBQ2JDLE1BQUksRUFBRSxpQkFBd0IsS0FEakI7QUFFYkMsY0FBWSxPQUZDO0FBR2JDLFFBQU0sT0FITztBQUliQyxlQUFhLEVBQUUsY0FKRjtBQUtiQyxTQUFPLEVBQUVDLGVBTEk7QUFNYkMsYUFBVyxFQUFFRCxPQUFPLENBQUNFLEdBQVIsQ0FBWUMsWUFOWjtBQU9iQyxTQUFPLEVBQUVKLHVCQVBJO0FBUWJLLFlBQVUsRUFBRUwsdUJBQXNDTTtBQVJyQyxDQUFmO0FBVWVaLHFFQUFmO0FBRU8sU0FBU2EsT0FBVCxDQUFpQkMsSUFBakIsRUFBdUJDLElBQXZCLEVBQTZCQyxZQUE3QixFQUEyQztBQUNoRCxNQUFJQyxNQUFNLEdBQUdILElBQUksQ0FBQ0ksSUFBTCxDQUFVLFVBQUFDLEdBQUcsRUFBSTtBQUM1QixXQUFPQSxHQUFHLENBQUNKLElBQUosS0FBYUEsSUFBcEI7QUFDRCxHQUZZLENBQWI7QUFHQSxTQUFPRSxNQUFNLEdBQUdBLE1BQU0sQ0FBQ0csT0FBVixHQUFxQkosWUFBWSxJQUFJLEVBQWxEO0FBQ0Q7QUFFTSxTQUFTSyxTQUFULENBQW1CQyxLQUFuQixFQUEwQlAsSUFBMUIsRUFBZ0NDLFlBQWhDLEVBQThDO0FBQ25ELE1BQUlDLE1BQU0sR0FBR0ssS0FBSyxDQUFDSixJQUFOLENBQVcsVUFBQUssSUFBSSxFQUFJO0FBQzlCLFdBQU9BLElBQUksQ0FBQ1IsSUFBTCxLQUFjQSxJQUFyQjtBQUNELEdBRlksQ0FBYjtBQUdBLFNBQU9FLE1BQU0sSUFBSUQsWUFBVixJQUEwQixJQUFqQztBQUNEO0FBRU0sU0FBU1EsV0FBVCxDQUFxQkMsT0FBckIsRUFBOEJDLElBQTlCLEVBQW9DO0FBQ3pDLE1BQUlULE1BQU0sR0FBR1EsT0FBTyxDQUFDRSxLQUFSLENBQWNULElBQWQsQ0FBbUIsVUFBQVUsSUFBSSxFQUFJO0FBQ3RDLFdBQU9BLElBQUksQ0FBQ0YsSUFBTCxLQUFjQSxJQUFyQjtBQUNELEdBRlksQ0FBYjtBQUdBLFNBQU9ULE1BQU0sSUFBSSxFQUFqQjtBQUNEO0FBRU0sU0FBU1ksWUFBVCxHQUFpQztBQUFBLE1BQVhDLElBQVcsdUVBQUosRUFBSTtBQUN0QyxtQkFBVXhCLHVCQUFBLElBQTBDLEtBQXBELFNBQThFd0IsSUFBOUU7QUFDRDtBQUVNLFNBQVNDLGNBQVQsQ0FBd0JDLEtBQXhCLEVBQStCO0FBQ3BDLE1BQU1DLFFBQVEsR0FBR0QsS0FBSyxDQUFDRSxHQUFOLENBQVVDLFVBQVYsQ0FBcUIsR0FBckIsSUFDYk4sWUFBWSxDQUFDRyxLQUFLLENBQUNFLEdBQVAsQ0FEQyxHQUViRixLQUFLLENBQUNFLEdBRlY7QUFHQSxTQUFPRCxRQUFQO0FBQ0Q7QUFFTSxTQUFTRyxZQUFULENBQXNCTixJQUF0QixFQUE0QjtBQUNqQyxNQUFNcEIsT0FBTyxhQUFNVixNQUFNLENBQUNVLE9BQWIsU0FBdUJvQixJQUF2QixDQUFiO0FBRUEsU0FBT3BCLE9BQVA7QUFDRDtBQUVNLFNBQVMyQixjQUFULENBQXdCTCxLQUF4QixFQUErQjtBQUNwQyxNQUFJQyxRQUFRLEdBQUcsWUFBZjs7QUFFQSxNQUFJRCxLQUFKLEVBQVc7QUFDVEMsWUFBUSxHQUFHRixjQUFjLENBQUNDLEtBQUQsQ0FBekI7QUFDRDs7QUFFRCxTQUFPQyxRQUFQO0FBQ0QiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5lMDM0ZGIwNWVjY2M5NTk4Yjg0NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY29uZmlnID0ge1xyXG4gIG5vZGU6IHByb2Nlc3MuZW52Lk5PREVfRU5WIHx8ICdkZXZlbG9wbWVudCcsXHJcbiAgaXNQcm9kdWN0aW9uOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nLFxyXG4gIGlzVGVzdDogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICd0ZXN0JyxcclxuICBpc0RldmVsb3BtZW50OiAhISFwcm9jZXNzLmVudi5OT0RFX0VOViB8fCBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyxcclxuICBhcHBOYW1lOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUFBfTkFNRSxcclxuICB3ZWJzaXRlU2x1ZzogcHJvY2Vzcy5lbnYuV0VCU0lURV9TTFVHLFxyXG4gIHNpdGVVcmw6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NJVEVfVVJMLFxyXG4gIGFwaUJhc2VVcmw6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NUUkFQSV9BUElfVVJMLFxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGNvbmZpZ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldE1ldGEodGFncywgbmFtZSwgZGVmYXVsdFZhbHVlKSB7XHJcbiAgbGV0IHJlc3VsdCA9IHRhZ3MuZmluZCh0YWcgPT4ge1xyXG4gICAgcmV0dXJuIHRhZy5uYW1lID09PSBuYW1lXHJcbiAgfSlcclxuICByZXR1cm4gcmVzdWx0ID8gcmVzdWx0LmNvbnRlbnQgOiAoZGVmYXVsdFZhbHVlIHx8ICcnKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QnlOYW1lKGl0ZW1zLCBuYW1lLCBkZWZhdWx0VmFsdWUpIHtcclxuICBsZXQgcmVzdWx0ID0gaXRlbXMuZmluZChpdGVtID0+IHtcclxuICAgIHJldHVybiBpdGVtLm5hbWUgPT09IG5hbWVcclxuICB9KVxyXG4gIHJldHVybiByZXN1bHQgfHwgZGVmYXVsdFZhbHVlIHx8IG51bGxcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFBhZ2VEYXRhKHdlYnNpdGUsIHNsdWcpIHtcclxuICBsZXQgcmVzdWx0ID0gd2Vic2l0ZS5wYWdlcy5maW5kKHBhZ2UgPT4ge1xyXG4gICAgcmV0dXJuIHBhZ2Uuc2x1ZyA9PT0gc2x1Z1xyXG4gIH0pXHJcbiAgcmV0dXJuIHJlc3VsdCB8fCB7fVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3RyYXBpVVJMKHBhdGggPSAnJykge1xyXG4gIHJldHVybiBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVFJBUElfQVBJX1VSTCB8fCAnaHR0cDovL2xvY2FsaG9zdDoxMzM3J30ke3BhdGh9YFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3RyYXBpTWVkaWEobWVkaWEpIHtcclxuICBjb25zdCBpbWFnZVVybCA9IG1lZGlhLnVybC5zdGFydHNXaXRoKCcvJylcclxuICAgID8gZ2V0U3RyYXBpVVJMKG1lZGlhLnVybClcclxuICAgIDogbWVkaWEudXJsXHJcbiAgcmV0dXJuIGltYWdlVXJsXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTb2NpYWxVcmwocGF0aCkge1xyXG4gIGNvbnN0IHNpdGVVcmwgPSBgJHtjb25maWcuc2l0ZVVybH0ke3BhdGh9YFxyXG5cclxuICByZXR1cm4gc2l0ZVVybFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U29jaWFsSW1hZ2UobWVkaWEpIHtcclxuICBsZXQgaW1hZ2VVcmwgPSAnL3RodW1iLmpwZydcclxuXHJcbiAgaWYgKG1lZGlhKSB7XHJcbiAgICBpbWFnZVVybCA9IGdldFN0cmFwaU1lZGlhKG1lZGlhKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGltYWdlVXJsXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9