(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ index; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _Animations_9329_loading_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Animations/9329-loading.json */ "./Animations/9329-loading.json");
/* harmony import */ var _components_lottie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/lottie */ "./components/lottie.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "C:\\Users\\rahul\\Desktop\\quizApp\\pages\\index.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function index() {
  //fetching data using useeffect
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
  const {
    0: name,
    1: setName
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
  const {
    0: category,
    1: selectedCategory
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
  const {
    0: questionDifficulty,
    1: setQuestionDifficulty
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
  const {
    0: categories,
    1: setCategories
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
  const {
    0: numberOfQuestions,
    1: setNumberOfQuestions
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(10);
  const singnup = "Signup";
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    axios__WEBPACK_IMPORTED_MODULE_1___default().get("https://opentdb.com/api_category.php").then(response => {
      setCategories(response.data.trivia_categories);
    }).catch(err => {
      console.error(err);
    });
  }, []); //for name

  const handleTypeChange = event => {
    setName(event.target.value);
  }; //for category


  const handleCategoryChange = event => {
    selectedCategory(event.target.value);
  }; // for difficulty


  const handleDifficultyChange = event => {
    setQuestionDifficulty(event.target.value);
  }; // number of questions


  const handleAmountChange = event => {
    setNumberOfQuestions(event.target.value);
  };

  const onsubmit = event => {
    event.preventDefault();
    router.push({
      pathname: "/testing",
      query: {
        name,
        category,
        questionDifficulty,
        numberOfQuestions
      }
    });
  };

  return categories.length > 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_3__.default, _objectSpread({}, singnup), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "welcome",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "main-div",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "name-div",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
              className: "headings",
              children: "Enter your Name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
              type: "text",
              name: "name",
              value: name,
              onChange: handleTypeChange
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "category-div",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
              className: "headings",
              children: "Select Category"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("select", {
              value: category,
              className: "sel ",
              onChange: handleCategoryChange,
              children: categories.map(option => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                value: option.id,
                children: option.name
              }, option.id, false, {
                fileName: _jsxFileName,
                lineNumber: 91,
                columnNumber: 19
              }, this))
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "diffculty-div",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
              className: "headings",
              children: "Select difficulty level"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("select", {
              className: "diff-sel",
              value: questionDifficulty,
              onChange: handleDifficultyChange,
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                children: "easy"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 109,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                children: "medium"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 110,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                children: "hard"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 111,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 104,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "number-div",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
              className: "headings",
              children: "Select number of questions"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 117,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("select", {
              className: "num-sel",
              value: numberOfQuestions,
              onChange: handleAmountChange,
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                children: "10"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 121,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                children: "15"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 122,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                children: "20"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 123,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 120,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: onsubmit,
          className: "btn bt bts",
          children: "Start"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 59,
    columnNumber: 5
  }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "lotties",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_lottie__WEBPACK_IMPORTED_MODULE_5__.default, {
      lottie: _Animations_9329_loading_json__WEBPACK_IMPORTED_MODULE_4__,
      height: 650,
      width: 700
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 134,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "query-string":
/*!*******************************!*\
  !*** external "query-string" ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = require("query-string");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-lottie":
/*!*******************************!*\
  !*** external "react-lottie" ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-lottie");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["Animations_9329-loading_json-components_Header_js-components_lottie_js"], function() { return __webpack_exec__("./pages/index.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9xdWl6aXQvLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9xdWl6aXQvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL3F1aXppdC9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vcXVpeml0L2V4dGVybmFsIFwicXVlcnktc3RyaW5nXCIiLCJ3ZWJwYWNrOi8vcXVpeml0L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9xdWl6aXQvZXh0ZXJuYWwgXCJyZWFjdC1sb3R0aWVcIiIsIndlYnBhY2s6Ly9xdWl6aXQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJpbmRleCIsInJvdXRlciIsInVzZVJvdXRlciIsIm5hbWUiLCJzZXROYW1lIiwidXNlU3RhdGUiLCJjYXRlZ29yeSIsInNlbGVjdGVkQ2F0ZWdvcnkiLCJxdWVzdGlvbkRpZmZpY3VsdHkiLCJzZXRRdWVzdGlvbkRpZmZpY3VsdHkiLCJjYXRlZ29yaWVzIiwic2V0Q2F0ZWdvcmllcyIsIm51bWJlck9mUXVlc3Rpb25zIiwic2V0TnVtYmVyT2ZRdWVzdGlvbnMiLCJzaW5nbnVwIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwidHJpdmlhX2NhdGVnb3JpZXMiLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsImhhbmRsZVR5cGVDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlQ2F0ZWdvcnlDaGFuZ2UiLCJoYW5kbGVEaWZmaWN1bHR5Q2hhbmdlIiwiaGFuZGxlQW1vdW50Q2hhbmdlIiwib25zdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInB1c2giLCJwYXRobmFtZSIsInF1ZXJ5IiwibGVuZ3RoIiwibWFwIiwib3B0aW9uIiwiaWQiLCJsb2FkaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyXCI7XHJcbmltcG9ydCBsb2FkaW5nIGZyb20gXCIuLi9BbmltYXRpb25zLzkzMjktbG9hZGluZy5qc29uXCI7XHJcbmltcG9ydCBMb3R0aWVBbmltYXRpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvbG90dGllXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5kZXgoKSB7XHJcbiAgLy9mZXRjaGluZyBkYXRhIHVzaW5nIHVzZWVmZmVjdFxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtjYXRlZ29yeSwgc2VsZWN0ZWRDYXRlZ29yeV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcXVlc3Rpb25EaWZmaWN1bHR5LCBzZXRRdWVzdGlvbkRpZmZpY3VsdHldID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2NhdGVnb3JpZXMsIHNldENhdGVnb3JpZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtudW1iZXJPZlF1ZXN0aW9ucywgc2V0TnVtYmVyT2ZRdWVzdGlvbnNdID0gdXNlU3RhdGUoMTApO1xyXG4gIGNvbnN0IHNpbmdudXAgPSBcIlNpZ251cFwiO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBheGlvc1xyXG4gICAgICAuZ2V0KFwiaHR0cHM6Ly9vcGVudGRiLmNvbS9hcGlfY2F0ZWdvcnkucGhwXCIpXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIHNldENhdGVnb3JpZXMocmVzcG9uc2UuZGF0YS50cml2aWFfY2F0ZWdvcmllcyk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIC8vZm9yIG5hbWVcclxuICBjb25zdCBoYW5kbGVUeXBlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICBzZXROYW1lKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuICAvL2ZvciBjYXRlZ29yeVxyXG4gIGNvbnN0IGhhbmRsZUNhdGVnb3J5Q2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICBzZWxlY3RlZENhdGVnb3J5KGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuICAvLyBmb3IgZGlmZmljdWx0eVxyXG4gIGNvbnN0IGhhbmRsZURpZmZpY3VsdHlDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgIHNldFF1ZXN0aW9uRGlmZmljdWx0eShldmVudC50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcbiAgLy8gbnVtYmVyIG9mIHF1ZXN0aW9uc1xyXG4gIGNvbnN0IGhhbmRsZUFtb3VudENoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgc2V0TnVtYmVyT2ZRdWVzdGlvbnMoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbnN1Ym1pdCA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHJvdXRlci5wdXNoKHtcclxuICAgICAgcGF0aG5hbWU6IFwiL3Rlc3RpbmdcIixcclxuICAgICAgcXVlcnk6IHtcclxuICAgICAgICBuYW1lLFxyXG4gICAgICAgIGNhdGVnb3J5LFxyXG4gICAgICAgIHF1ZXN0aW9uRGlmZmljdWx0eSxcclxuICAgICAgICBudW1iZXJPZlF1ZXN0aW9ucyxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiBjYXRlZ29yaWVzLmxlbmd0aCA+IDAgPyAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8SGVhZGVyIHsuLi5zaW5nbnVwfSAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIndlbGNvbWVcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tZGl2XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hbWUtZGl2XCI+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJoZWFkaW5nc1wiPkVudGVyIHlvdXIgTmFtZTwvaDM+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtuYW1lfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVR5cGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhdGVnb3J5LWRpdlwiPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWUgPSBcImhlYWRpbmdzXCI+U2VsZWN0IENhdGVnb3J5PC9oMz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPHNlbGVjdFxyXG5cclxuICAgICAgICAgICAgICAgIHZhbHVlPXtjYXRlZ29yeX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNlbCBcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNhdGVnb3J5Q2hhbmdlfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtjYXRlZ29yaWVzLm1hcCgob3B0aW9uKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtvcHRpb24uaWR9IHZhbHVlPXtvcHRpb24uaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtvcHRpb24ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlmZmN1bHR5LWRpdlwiPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWUgPVwiaGVhZGluZ3NcIj5TZWxlY3QgZGlmZmljdWx0eSBsZXZlbDwvaDM+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGlmZi1zZWxcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3F1ZXN0aW9uRGlmZmljdWx0eX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVEaWZmaWN1bHR5Q2hhbmdlfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24+ZWFzeTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbj5tZWRpdW08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24+aGFyZDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJudW1iZXItZGl2XCI+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZSA9XCJoZWFkaW5nc1wiPlNlbGVjdCBudW1iZXIgb2YgcXVlc3Rpb25zPC9oMz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJudW0tc2VsXCIgdmFsdWU9e251bWJlck9mUXVlc3Rpb25zfSBvbkNoYW5nZT17aGFuZGxlQW1vdW50Q2hhbmdlfT5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24+MTA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24+MTU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24+MjA8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17b25zdWJtaXR9IGNsYXNzTmFtZT1cImJ0biBidCBidHNcIj5cclxuICAgICAgICAgICAgU3RhcnRcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICkgOiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImxvdHRpZXNcIj5cclxuICAgICAgPExvdHRpZUFuaW1hdGlvbiBsb3R0aWU9e2xvYWRpbmd9IGhlaWdodD17NjUwfSB3aWR0aD17NzAwfSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInF1ZXJ5LXN0cmluZ1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWxvdHRpZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9