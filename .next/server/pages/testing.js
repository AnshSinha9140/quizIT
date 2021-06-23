(function() {
var exports = {};
exports.id = "pages/testing";
exports.ids = ["pages/testing"];
exports.modules = {

/***/ "./components/QuestionCard.js":
/*!************************************!*\
  !*** ./components/QuestionCard.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ QuestionCard; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\rahul\\Desktop\\quizApp\\components\\QuestionCard.js";


function QuestionCard({
  handleAnswer,
  data: {
    question,
    correct_answer,
    incorrect_answers
  }
}) {
  const shuffledAnswers = [correct_answer, ...incorrect_answers].sort(() => Math.random() - 0.5);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "ques-card",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "question",
      children: question
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "answers-box",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: `answers answers-white`,
        onClick: () => handleAnswer(shuffledAnswers[0]),
        children: [" ", shuffledAnswers[0]]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "answers answers-white",
        onClick: () => handleAnswer(shuffledAnswers[1]),
        children: [" ", shuffledAnswers[1]]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "answers answers-white",
        onClick: () => handleAnswer(shuffledAnswers[2]),
        children: [" ", shuffledAnswers[2]]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "answers answers-white",
        onClick: () => handleAnswer(shuffledAnswers[3]),
        children: [" ", shuffledAnswers[3]]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./pages/testing.js":
/*!**************************!*\
  !*** ./pages/testing.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ testing; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _Animations_9329_loading_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Animations/9329-loading.json */ "./Animations/9329-loading.json");
/* harmony import */ var _components_lottie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/lottie */ "./components/lottie.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_QuestionCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/QuestionCard */ "./components/QuestionCard.js");

var _jsxFileName = "C:\\Users\\rahul\\Desktop\\quizApp\\pages\\testing.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function testing() {
  const {
    0: bgColor,
    1: setBgcolor
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("answers-white");
  const {
    0: questions,
    1: setQuestions
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: currentQuestion,
    1: setcurrentQuestion
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const {
    0: score,
    1: setScore
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  const yourname = router.query.name;
  const category = router.query.category;
  const difficulty = router.query.questionDifficulty;
  const numberOfQuestions = router.query.numberOfQuestions;
  const t = "multiple";
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    axios__WEBPACK_IMPORTED_MODULE_6___default().get(`https://opentdb.com/api.php?amount=${numberOfQuestions}&category=${category}&difficulty=${difficulty}&type=${t}`).then(resp => {
      setQuestions(resp.data.results);
    }).catch(err => {
      console.error(err);
    });
  }, []);

  const handleAnswer = answer => {
    if (answer === questions[currentQuestion].correct_answer) {
      setScore(score + 1);
      setcurrentQuestion(currentQuestion + 1);
    } else {
      console.log("false");
      setcurrentQuestion(currentQuestion + 1);
    }
  };

  return currentQuestion >= numberOfQuestions ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "score",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
      children: ["Your score is ", score, " out of ", numberOfQuestions]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 5
  }, this) : questions.length > 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_3__.default, _objectSpread({}, yourname), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "score-div",
      children: ["Score: ", score]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_QuestionCard__WEBPACK_IMPORTED_MODULE_7__.default, {
      handleAnswer: handleAnswer,
      data: questions[currentQuestion]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 5
  }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "lotties",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_lottie__WEBPACK_IMPORTED_MODULE_5__.default, {
      lottie: _Animations_9329_loading_json__WEBPACK_IMPORTED_MODULE_4__,
      height: 650,
      width: 700
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 61,
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
var __webpack_exports__ = __webpack_require__.X(0, ["Animations_9329-loading_json-components_Header_js-components_lottie_js"], function() { return __webpack_exec__("./pages/testing.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9xdWl6aXQvLi9jb21wb25lbnRzL1F1ZXN0aW9uQ2FyZC5qcyIsIndlYnBhY2s6Ly9xdWl6aXQvLi9wYWdlcy90ZXN0aW5nLmpzIiwid2VicGFjazovL3F1aXppdC9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vcXVpeml0L2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9xdWl6aXQvZXh0ZXJuYWwgXCJxdWVyeS1zdHJpbmdcIiIsIndlYnBhY2s6Ly9xdWl6aXQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3F1aXppdC9leHRlcm5hbCBcInJlYWN0LWxvdHRpZVwiIiwid2VicGFjazovL3F1aXppdC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIlF1ZXN0aW9uQ2FyZCIsImhhbmRsZUFuc3dlciIsImRhdGEiLCJxdWVzdGlvbiIsImNvcnJlY3RfYW5zd2VyIiwiaW5jb3JyZWN0X2Fuc3dlcnMiLCJzaHVmZmxlZEFuc3dlcnMiLCJzb3J0IiwiTWF0aCIsInJhbmRvbSIsInRlc3RpbmciLCJiZ0NvbG9yIiwic2V0Qmdjb2xvciIsInVzZVN0YXRlIiwicXVlc3Rpb25zIiwic2V0UXVlc3Rpb25zIiwiY3VycmVudFF1ZXN0aW9uIiwic2V0Y3VycmVudFF1ZXN0aW9uIiwic2NvcmUiLCJzZXRTY29yZSIsInJvdXRlciIsInVzZVJvdXRlciIsInlvdXJuYW1lIiwicXVlcnkiLCJuYW1lIiwiY2F0ZWdvcnkiLCJkaWZmaWN1bHR5IiwicXVlc3Rpb25EaWZmaWN1bHR5IiwibnVtYmVyT2ZRdWVzdGlvbnMiLCJ0IiwidXNlRWZmZWN0IiwiYXhpb3MiLCJ0aGVuIiwicmVzcCIsInJlc3VsdHMiLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsImFuc3dlciIsImxvZyIsImxlbmd0aCIsImxvYWRpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUFBLFlBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREUsZ0JBV0Y7QUFBSyxhQUFTLEVBQUMsU0FBZjtBQUFBLDJCQUNFLDhEQUFDLHVEQUFEO0FBQWlCLFlBQU0sRUFBRTBCLDBEQUF6QjtBQUFrQyxZQUFNLEVBQUUsR0FBMUM7QUFBK0MsV0FBSyxFQUFFO0FBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBakJGO0FBcUJELEM7Ozs7Ozs7Ozs7O0FDaEVELG1DOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLG1EIiwiZmlsZSI6InBhZ2VzL3Rlc3RpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBRdWVzdGlvbkNhcmQoe1xyXG4gIGhhbmRsZUFuc3dlcixcclxuICBkYXRhOiB7IHF1ZXN0aW9uLCBjb3JyZWN0X2Fuc3dlciwgaW5jb3JyZWN0X2Fuc3dlcnMgfSxcclxufSkge1xyXG4gIGNvbnN0IHNodWZmbGVkQW5zd2VycyA9IFtjb3JyZWN0X2Fuc3dlciwgLi4uaW5jb3JyZWN0X2Fuc3dlcnNdLnNvcnQoXHJcbiAgICAoKSA9PiBNYXRoLnJhbmRvbSgpIC0gMC41XHJcbiAgKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJxdWVzLWNhcmRcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJxdWVzdGlvblwiPntxdWVzdGlvbn08L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW5zd2Vycy1ib3hcIj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2BhbnN3ZXJzIGFuc3dlcnMtd2hpdGVgfVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQW5zd2VyKHNodWZmbGVkQW5zd2Vyc1swXSl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAge3NodWZmbGVkQW5zd2Vyc1swXX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJhbnN3ZXJzIGFuc3dlcnMtd2hpdGVcIlxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQW5zd2VyKHNodWZmbGVkQW5zd2Vyc1sxXSl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAge3NodWZmbGVkQW5zd2Vyc1sxXX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJhbnN3ZXJzIGFuc3dlcnMtd2hpdGVcIlxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQW5zd2VyKHNodWZmbGVkQW5zd2Vyc1syXSl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAge3NodWZmbGVkQW5zd2Vyc1syXX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJhbnN3ZXJzIGFuc3dlcnMtd2hpdGVcIlxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQW5zd2VyKHNodWZmbGVkQW5zd2Vyc1szXSl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAge3NodWZmbGVkQW5zd2Vyc1szXX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlclwiO1xyXG5pbXBvcnQgbG9hZGluZyBmcm9tIFwiLi4vQW5pbWF0aW9ucy85MzI5LWxvYWRpbmcuanNvblwiO1xyXG5pbXBvcnQgTG90dGllQW5pbWF0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL2xvdHRpZVwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBRdWVzdGlvbkNhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvUXVlc3Rpb25DYXJkXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0ZXN0aW5nKCkge1xyXG4gIGNvbnN0IFtiZ0NvbG9yLCBzZXRCZ2NvbG9yXSA9IHVzZVN0YXRlKFwiYW5zd2Vycy13aGl0ZVwiKTtcclxuICBjb25zdCBbcXVlc3Rpb25zLCBzZXRRdWVzdGlvbnNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtjdXJyZW50UXVlc3Rpb24sIHNldGN1cnJlbnRRdWVzdGlvbl0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbc2NvcmUsIHNldFNjb3JlXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHlvdXJuYW1lID0gcm91dGVyLnF1ZXJ5Lm5hbWU7XHJcbiAgY29uc3QgY2F0ZWdvcnkgPSByb3V0ZXIucXVlcnkuY2F0ZWdvcnk7XHJcbiAgY29uc3QgZGlmZmljdWx0eSA9IHJvdXRlci5xdWVyeS5xdWVzdGlvbkRpZmZpY3VsdHk7XHJcbiAgY29uc3QgbnVtYmVyT2ZRdWVzdGlvbnMgPSByb3V0ZXIucXVlcnkubnVtYmVyT2ZRdWVzdGlvbnM7XHJcbiAgY29uc3QgdCA9IFwibXVsdGlwbGVcIjtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGF4aW9zXHJcbiAgICAgIC5nZXQoXHJcbiAgICAgICAgYGh0dHBzOi8vb3BlbnRkYi5jb20vYXBpLnBocD9hbW91bnQ9JHtudW1iZXJPZlF1ZXN0aW9uc30mY2F0ZWdvcnk9JHtjYXRlZ29yeX0mZGlmZmljdWx0eT0ke2RpZmZpY3VsdHl9JnR5cGU9JHt0fWBcclxuICAgICAgKVxyXG4gICAgICAudGhlbigocmVzcCkgPT4ge1xyXG4gICAgICAgIHNldFF1ZXN0aW9ucyhyZXNwLmRhdGEucmVzdWx0cyk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUFuc3dlciA9IChhbnN3ZXIpID0+IHtcclxuICAgIGlmIChhbnN3ZXIgPT09IHF1ZXN0aW9uc1tjdXJyZW50UXVlc3Rpb25dLmNvcnJlY3RfYW5zd2VyKSB7XHJcbiAgICAgIHNldFNjb3JlKHNjb3JlICsgMSk7XHJcbiAgICAgIHNldGN1cnJlbnRRdWVzdGlvbihjdXJyZW50UXVlc3Rpb24gKyAxKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiZmFsc2VcIik7XHJcbiAgICAgIHNldGN1cnJlbnRRdWVzdGlvbihjdXJyZW50UXVlc3Rpb24gKyAxKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gY3VycmVudFF1ZXN0aW9uID49IG51bWJlck9mUXVlc3Rpb25zID8gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzY29yZVwiPlxyXG4gICAgICA8aDQ+XHJcbiAgICAgICAgWW91ciBzY29yZSBpcyB7c2NvcmV9IG91dCBvZiB7bnVtYmVyT2ZRdWVzdGlvbnN9XHJcbiAgICAgIDwvaDQ+XHJcbiAgICA8L2Rpdj5cclxuICApIDogcXVlc3Rpb25zLmxlbmd0aCA+IDAgPyAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8SGVhZGVyIHsuLi55b3VybmFtZX0gLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzY29yZS1kaXZcIj5TY29yZToge3Njb3JlfTwvZGl2PlxyXG5cclxuICAgICAgPFF1ZXN0aW9uQ2FyZFxyXG4gICAgICAgIGhhbmRsZUFuc3dlcj17aGFuZGxlQW5zd2VyfVxyXG4gICAgICAgIGRhdGE9e3F1ZXN0aW9uc1tjdXJyZW50UXVlc3Rpb25dfVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKSA6IChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibG90dGllc1wiPlxyXG4gICAgICA8TG90dGllQW5pbWF0aW9uIGxvdHRpZT17bG9hZGluZ30gaGVpZ2h0PXs2NTB9IHdpZHRoPXs3MDB9IC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicXVlcnktc3RyaW5nXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtbG90dGllXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=