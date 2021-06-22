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
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "sub-home",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_QuestionCard__WEBPACK_IMPORTED_MODULE_7__.default, {
        handleAnswer: handleAnswer,
        data: questions[currentQuestion]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
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
      lineNumber: 63,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 62,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9xdWl6aXQvLi9jb21wb25lbnRzL1F1ZXN0aW9uQ2FyZC5qcyIsIndlYnBhY2s6Ly9xdWl6aXQvLi9wYWdlcy90ZXN0aW5nLmpzIiwid2VicGFjazovL3F1aXppdC9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vcXVpeml0L2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9xdWl6aXQvZXh0ZXJuYWwgXCJxdWVyeS1zdHJpbmdcIiIsIndlYnBhY2s6Ly9xdWl6aXQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3F1aXppdC9leHRlcm5hbCBcInJlYWN0LWxvdHRpZVwiIiwid2VicGFjazovL3F1aXppdC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIlF1ZXN0aW9uQ2FyZCIsImhhbmRsZUFuc3dlciIsImRhdGEiLCJxdWVzdGlvbiIsImNvcnJlY3RfYW5zd2VyIiwiaW5jb3JyZWN0X2Fuc3dlcnMiLCJzaHVmZmxlZEFuc3dlcnMiLCJzb3J0IiwiTWF0aCIsInJhbmRvbSIsInRlc3RpbmciLCJiZ0NvbG9yIiwic2V0Qmdjb2xvciIsInVzZVN0YXRlIiwicXVlc3Rpb25zIiwic2V0UXVlc3Rpb25zIiwiY3VycmVudFF1ZXN0aW9uIiwic2V0Y3VycmVudFF1ZXN0aW9uIiwic2NvcmUiLCJzZXRTY29yZSIsInJvdXRlciIsInVzZVJvdXRlciIsInlvdXJuYW1lIiwicXVlcnkiLCJuYW1lIiwiY2F0ZWdvcnkiLCJkaWZmaWN1bHR5IiwicXVlc3Rpb25EaWZmaWN1bHR5IiwibnVtYmVyT2ZRdWVzdGlvbnMiLCJ0IiwidXNlRWZmZWN0IiwiYXhpb3MiLCJ0aGVuIiwicmVzcCIsInJlc3VsdHMiLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsImFuc3dlciIsImxvZyIsImxlbmd0aCIsImxvYWRpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUNFLGVBQUQ7QUFGakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERSxnQkFZRjtBQUFLLGFBQVMsRUFBQyxTQUFmO0FBQUEsMkJBQ0UsOERBQUMsdURBQUQ7QUFBaUIsWUFBTSxFQUFFMEIsMERBQXpCO0FBQWtDLFlBQU0sRUFBRSxHQUExQztBQUErQyxXQUFLLEVBQUU7QUFBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFsQkY7QUFzQkQsQzs7Ozs7Ozs7Ozs7QUNqRUQsbUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoicGFnZXMvdGVzdGluZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFF1ZXN0aW9uQ2FyZCh7XHJcbiAgaGFuZGxlQW5zd2VyLFxyXG4gIGRhdGE6IHsgcXVlc3Rpb24sIGNvcnJlY3RfYW5zd2VyLCBpbmNvcnJlY3RfYW5zd2VycyB9LFxyXG59KSB7XHJcbiAgY29uc3Qgc2h1ZmZsZWRBbnN3ZXJzID0gW2NvcnJlY3RfYW5zd2VyLCAuLi5pbmNvcnJlY3RfYW5zd2Vyc10uc29ydChcclxuICAgICgpID0+IE1hdGgucmFuZG9tKCkgLSAwLjVcclxuICApO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInF1ZXMtY2FyZFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInF1ZXN0aW9uXCI+e3F1ZXN0aW9ufTwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbnN3ZXJzLWJveFwiPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT17YGFuc3dlcnMgYW5zd2Vycy13aGl0ZWB9XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVBbnN3ZXIoc2h1ZmZsZWRBbnN3ZXJzWzBdKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICB7c2h1ZmZsZWRBbnN3ZXJzWzBdfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImFuc3dlcnMgYW5zd2Vycy13aGl0ZVwiXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVBbnN3ZXIoc2h1ZmZsZWRBbnN3ZXJzWzFdKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICB7c2h1ZmZsZWRBbnN3ZXJzWzFdfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImFuc3dlcnMgYW5zd2Vycy13aGl0ZVwiXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVBbnN3ZXIoc2h1ZmZsZWRBbnN3ZXJzWzJdKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICB7c2h1ZmZsZWRBbnN3ZXJzWzJdfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImFuc3dlcnMgYW5zd2Vycy13aGl0ZVwiXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVBbnN3ZXIoc2h1ZmZsZWRBbnN3ZXJzWzNdKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICB7c2h1ZmZsZWRBbnN3ZXJzWzNdfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyXCI7XHJcbmltcG9ydCBsb2FkaW5nIGZyb20gXCIuLi9BbmltYXRpb25zLzkzMjktbG9hZGluZy5qc29uXCI7XHJcbmltcG9ydCBMb3R0aWVBbmltYXRpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvbG90dGllXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IFF1ZXN0aW9uQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9RdWVzdGlvbkNhcmRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRlc3RpbmcoKSB7XHJcbiAgY29uc3QgW2JnQ29sb3IsIHNldEJnY29sb3JdID0gdXNlU3RhdGUoXCJhbnN3ZXJzLXdoaXRlXCIpO1xyXG4gIGNvbnN0IFtxdWVzdGlvbnMsIHNldFF1ZXN0aW9uc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2N1cnJlbnRRdWVzdGlvbiwgc2V0Y3VycmVudFF1ZXN0aW9uXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtzY29yZSwgc2V0U2NvcmVdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeW91cm5hbWUgPSByb3V0ZXIucXVlcnkubmFtZTtcclxuICBjb25zdCBjYXRlZ29yeSA9IHJvdXRlci5xdWVyeS5jYXRlZ29yeTtcclxuICBjb25zdCBkaWZmaWN1bHR5ID0gcm91dGVyLnF1ZXJ5LnF1ZXN0aW9uRGlmZmljdWx0eTtcclxuICBjb25zdCBudW1iZXJPZlF1ZXN0aW9ucyA9IHJvdXRlci5xdWVyeS5udW1iZXJPZlF1ZXN0aW9ucztcclxuICBjb25zdCB0ID0gXCJtdWx0aXBsZVwiO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXhpb3NcclxuICAgICAgLmdldChcclxuICAgICAgICBgaHR0cHM6Ly9vcGVudGRiLmNvbS9hcGkucGhwP2Ftb3VudD0ke251bWJlck9mUXVlc3Rpb25zfSZjYXRlZ29yeT0ke2NhdGVnb3J5fSZkaWZmaWN1bHR5PSR7ZGlmZmljdWx0eX0mdHlwZT0ke3R9YFxyXG4gICAgICApXHJcbiAgICAgIC50aGVuKChyZXNwKSA9PiB7XHJcbiAgICAgICAgc2V0UXVlc3Rpb25zKHJlc3AuZGF0YS5yZXN1bHRzKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQW5zd2VyID0gKGFuc3dlcikgPT4ge1xyXG4gICAgaWYgKGFuc3dlciA9PT0gcXVlc3Rpb25zW2N1cnJlbnRRdWVzdGlvbl0uY29ycmVjdF9hbnN3ZXIpIHtcclxuICAgICAgc2V0U2NvcmUoc2NvcmUgKyAxKTtcclxuICAgICAgc2V0Y3VycmVudFF1ZXN0aW9uKGN1cnJlbnRRdWVzdGlvbiArIDEpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coXCJmYWxzZVwiKTtcclxuICAgICAgc2V0Y3VycmVudFF1ZXN0aW9uKGN1cnJlbnRRdWVzdGlvbiArIDEpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiBjdXJyZW50UXVlc3Rpb24gPj0gbnVtYmVyT2ZRdWVzdGlvbnMgPyAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNjb3JlXCI+XHJcbiAgICAgIDxoND5cclxuICAgICAgICBZb3VyIHNjb3JlIGlzIHtzY29yZX0gb3V0IG9mIHtudW1iZXJPZlF1ZXN0aW9uc31cclxuICAgICAgPC9oND5cclxuICAgIDwvZGl2PlxyXG4gICkgOiBxdWVzdGlvbnMubGVuZ3RoID4gMCA/IChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxIZWFkZXIgey4uLnlvdXJuYW1lfSAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNjb3JlLWRpdlwiPlNjb3JlOiB7c2NvcmV9PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3ViLWhvbWVcIj5cclxuICAgICAgICA8UXVlc3Rpb25DYXJkXHJcbiAgICAgICAgICBoYW5kbGVBbnN3ZXI9e2hhbmRsZUFuc3dlcn1cclxuICAgICAgICAgIGRhdGE9e3F1ZXN0aW9uc1tjdXJyZW50UXVlc3Rpb25dfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKSA6IChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibG90dGllc1wiPlxyXG4gICAgICA8TG90dGllQW5pbWF0aW9uIGxvdHRpZT17bG9hZGluZ30gaGVpZ2h0PXs2NTB9IHdpZHRoPXs3MDB9IC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicXVlcnktc3RyaW5nXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtbG90dGllXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=