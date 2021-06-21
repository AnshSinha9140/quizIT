self["webpackHotUpdate_N_E"]("pages/testing",{

/***/ "./pages/testing.js":
/*!**************************!*\
  !*** ./pages/testing.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ testing; }
/* harmony export */ });
/* harmony import */ var C_Users_rahul_Desktop_quizApp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_ScoreCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/ScoreCard */ "./components/ScoreCard.js");
/* harmony import */ var _components_QuestionCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/QuestionCard */ "./components/QuestionCard.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\rahul\\Desktop\\quizApp\\pages\\testing.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_rahul_Desktop_quizApp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







function testing() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("answers-white"),
      bgColor = _useState[0],
      setBgcolor = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
      questions = _useState2[0],
      setQuestions = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),
      currentQuestion = _useState3[0],
      setcurrentQuestion = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),
      score = _useState4[0],
      setScore = _useState4[1];

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  var yourname = router.query.name;
  var category = router.query.category;
  var difficulty = router.query.questionDifficulty;
  var numberOfQuestions = router.query.numberOfQuestions;
  var t = "multiple";
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    axios__WEBPACK_IMPORTED_MODULE_5___default().get("https://opentdb.com/api.php?amount=".concat(numberOfQuestions, "&category=").concat(category, "&difficulty=").concat(difficulty, "&type=").concat(t)).then(function (resp) {
      setQuestions(resp.data.results);
    })["catch"](function (err) {
      console.error(err);
    });
  }, []);

  var handleAnswer = function handleAnswer(answer) {
    if (answer === questions[currentQuestion].correct_answer) {
      setScore(score + 1);
      setcurrentQuestion(currentQuestion + 1);
    } else {
      console.log("false");
      setcurrentQuestion(currentQuestion + 1);
    }
  };

  return currentQuestion >= numberOfQuestions ?
  /*#__PURE__*/
  // <div>score is {score} </div>
  (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_ScoreCard__WEBPACK_IMPORTED_MODULE_6__.default, {
    d: s
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 5
  }, this) : questions.length > 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_4__.default, _objectSpread({}, yourname), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "score-div",
      children: ["Score: ", score]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "sub-home",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_QuestionCard__WEBPACK_IMPORTED_MODULE_7__.default, {
        handleAnswer: handleAnswer,
        data: questions[currentQuestion]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 5
  }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
    children: "loading......"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 5
  }, this);
}

_s(testing, "ETgPPiNpxUQJD1x+OjwQkcyo/kI=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter];
});

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGVzdGluZy5qcyJdLCJuYW1lcyI6WyJ0ZXN0aW5nIiwidXNlU3RhdGUiLCJiZ0NvbG9yIiwic2V0Qmdjb2xvciIsInF1ZXN0aW9ucyIsInNldFF1ZXN0aW9ucyIsImN1cnJlbnRRdWVzdGlvbiIsInNldGN1cnJlbnRRdWVzdGlvbiIsInNjb3JlIiwic2V0U2NvcmUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ5b3VybmFtZSIsInF1ZXJ5IiwibmFtZSIsImNhdGVnb3J5IiwiZGlmZmljdWx0eSIsInF1ZXN0aW9uRGlmZmljdWx0eSIsIm51bWJlck9mUXVlc3Rpb25zIiwidCIsInVzZUVmZmVjdCIsImF4aW9zIiwidGhlbiIsInJlc3AiLCJkYXRhIiwicmVzdWx0cyIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsImhhbmRsZUFuc3dlciIsImFuc3dlciIsImNvcnJlY3RfYW5zd2VyIiwibG9nIiwicyIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsT0FBVCxHQUFtQjtBQUFBOztBQUFBLGtCQUNGQywrQ0FBUSxDQUFDLGVBQUQsQ0FETjtBQUFBLE1BQ3pCQyxPQUR5QjtBQUFBLE1BQ2hCQyxVQURnQjs7QUFBQSxtQkFFRUYsK0NBQVEsQ0FBQyxFQUFELENBRlY7QUFBQSxNQUV6QkcsU0FGeUI7QUFBQSxNQUVkQyxZQUZjOztBQUFBLG1CQUdjSiwrQ0FBUSxDQUFDLENBQUQsQ0FIdEI7QUFBQSxNQUd6QkssZUFIeUI7QUFBQSxNQUdSQyxrQkFIUTs7QUFBQSxtQkFJTk4sK0NBQVEsQ0FBQyxDQUFELENBSkY7QUFBQSxNQUl6Qk8sS0FKeUI7QUFBQSxNQUlsQkMsUUFKa0I7O0FBS2hDLE1BQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7QUFDQSxNQUFNQyxRQUFRLEdBQUdGLE1BQU0sQ0FBQ0csS0FBUCxDQUFhQyxJQUE5QjtBQUNBLE1BQU1DLFFBQVEsR0FBR0wsTUFBTSxDQUFDRyxLQUFQLENBQWFFLFFBQTlCO0FBQ0EsTUFBTUMsVUFBVSxHQUFHTixNQUFNLENBQUNHLEtBQVAsQ0FBYUksa0JBQWhDO0FBQ0EsTUFBTUMsaUJBQWlCLEdBQUdSLE1BQU0sQ0FBQ0csS0FBUCxDQUFhSyxpQkFBdkM7QUFDQSxNQUFNQyxDQUFDLEdBQUcsVUFBVjtBQUVBQyxrREFBUyxDQUFDLFlBQU07QUFDZEMsb0RBQUEsOENBRTBDSCxpQkFGMUMsdUJBRXdFSCxRQUZ4RSx5QkFFK0ZDLFVBRi9GLG1CQUVrSEcsQ0FGbEgsR0FJR0csSUFKSCxDQUlRLFVBQUNDLElBQUQsRUFBVTtBQUNkbEIsa0JBQVksQ0FBQ2tCLElBQUksQ0FBQ0MsSUFBTCxDQUFVQyxPQUFYLENBQVo7QUFDRCxLQU5ILFdBT1MsVUFBQ0MsR0FBRCxFQUFTO0FBQ2RDLGFBQU8sQ0FBQ0MsS0FBUixDQUFjRixHQUFkO0FBQ0QsS0FUSDtBQVVELEdBWFEsRUFXTixFQVhNLENBQVQ7O0FBYUEsTUFBTUcsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsTUFBRCxFQUFZO0FBQy9CLFFBQUlBLE1BQU0sS0FBSzFCLFNBQVMsQ0FBQ0UsZUFBRCxDQUFULENBQTJCeUIsY0FBMUMsRUFBMEQ7QUFDeER0QixjQUFRLENBQUNELEtBQUssR0FBRyxDQUFULENBQVI7QUFDQUQsd0JBQWtCLENBQUNELGVBQWUsR0FBRyxDQUFuQixDQUFsQjtBQUNELEtBSEQsTUFHTztBQUNMcUIsYUFBTyxDQUFDSyxHQUFSLENBQVksT0FBWjtBQUNBekIsd0JBQWtCLENBQUNELGVBQWUsR0FBRyxDQUFuQixDQUFsQjtBQUNEO0FBQ0YsR0FSRDs7QUFVQSxTQUFPQSxlQUFlLElBQUlZLGlCQUFuQjtBQUFBO0FBQ0w7QUFDQSxnRUFBQywwREFBRDtBQUFXLEtBQUMsRUFBSWU7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUZLLEdBR0g3QixTQUFTLENBQUM4QixNQUFWLEdBQW1CLENBQW5CLGdCQUNGO0FBQUEsNEJBQ0UsOERBQUMsdURBQUQsb0JBQVl0QixRQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFO0FBQUssZUFBUyxFQUFDLFdBQWY7QUFBQSw0QkFBbUNKLEtBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLGVBR0U7QUFBSyxlQUFTLEVBQUMsVUFBZjtBQUFBLDZCQUNFLDhEQUFDLDZEQUFEO0FBQ0Usb0JBQVksRUFBRXFCLFlBRGhCO0FBRUUsWUFBSSxFQUFFekIsU0FBUyxDQUFDRSxlQUFEO0FBRmpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREUsZ0JBWUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFmRjtBQWlCRDs7R0FwRHVCTixPO1VBS1BXLGtEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Rlc3RpbmcuZjk2YzZlZmRmYzI0NzU5YWM2NjYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlclwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBTY29yZUNhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvU2NvcmVDYXJkXCI7XHJcbmltcG9ydCBRdWVzdGlvbkNhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvUXVlc3Rpb25DYXJkXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0ZXN0aW5nKCkge1xyXG4gIGNvbnN0IFtiZ0NvbG9yLCBzZXRCZ2NvbG9yXSA9IHVzZVN0YXRlKFwiYW5zd2Vycy13aGl0ZVwiKTtcclxuICBjb25zdCBbcXVlc3Rpb25zLCBzZXRRdWVzdGlvbnNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtjdXJyZW50UXVlc3Rpb24sIHNldGN1cnJlbnRRdWVzdGlvbl0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbc2NvcmUsIHNldFNjb3JlXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHlvdXJuYW1lID0gcm91dGVyLnF1ZXJ5Lm5hbWU7XHJcbiAgY29uc3QgY2F0ZWdvcnkgPSByb3V0ZXIucXVlcnkuY2F0ZWdvcnk7XHJcbiAgY29uc3QgZGlmZmljdWx0eSA9IHJvdXRlci5xdWVyeS5xdWVzdGlvbkRpZmZpY3VsdHk7XHJcbiAgY29uc3QgbnVtYmVyT2ZRdWVzdGlvbnMgPSByb3V0ZXIucXVlcnkubnVtYmVyT2ZRdWVzdGlvbnM7XHJcbiAgY29uc3QgdCA9IFwibXVsdGlwbGVcIjtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGF4aW9zXHJcbiAgICAgIC5nZXQoXHJcbiAgICAgICAgYGh0dHBzOi8vb3BlbnRkYi5jb20vYXBpLnBocD9hbW91bnQ9JHtudW1iZXJPZlF1ZXN0aW9uc30mY2F0ZWdvcnk9JHtjYXRlZ29yeX0mZGlmZmljdWx0eT0ke2RpZmZpY3VsdHl9JnR5cGU9JHt0fWBcclxuICAgICAgKVxyXG4gICAgICAudGhlbigocmVzcCkgPT4ge1xyXG4gICAgICAgIHNldFF1ZXN0aW9ucyhyZXNwLmRhdGEucmVzdWx0cyk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUFuc3dlciA9IChhbnN3ZXIpID0+IHtcclxuICAgIGlmIChhbnN3ZXIgPT09IHF1ZXN0aW9uc1tjdXJyZW50UXVlc3Rpb25dLmNvcnJlY3RfYW5zd2VyKSB7XHJcbiAgICAgIHNldFNjb3JlKHNjb3JlICsgMSk7XHJcbiAgICAgIHNldGN1cnJlbnRRdWVzdGlvbihjdXJyZW50UXVlc3Rpb24gKyAxKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiZmFsc2VcIik7XHJcbiAgICAgIHNldGN1cnJlbnRRdWVzdGlvbihjdXJyZW50UXVlc3Rpb24gKyAxKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gY3VycmVudFF1ZXN0aW9uID49IG51bWJlck9mUXVlc3Rpb25zID8gKFxyXG4gICAgLy8gPGRpdj5zY29yZSBpcyB7c2NvcmV9IDwvZGl2PlxyXG4gICAgPFNjb3JlQ2FyZCBkID0ge3N9IC8+XHJcbiAgKSA6IHF1ZXN0aW9ucy5sZW5ndGggPiAwID8gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEhlYWRlciB7Li4ueW91cm5hbWV9IC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2NvcmUtZGl2XCI+U2NvcmU6IHtzY29yZX08L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWItaG9tZVwiPlxyXG4gICAgICAgIDxRdWVzdGlvbkNhcmRcclxuICAgICAgICAgIGhhbmRsZUFuc3dlcj17aGFuZGxlQW5zd2VyfVxyXG4gICAgICAgICAgZGF0YT17cXVlc3Rpb25zW2N1cnJlbnRRdWVzdGlvbl19XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApIDogKFxyXG4gICAgPGgxPmxvYWRpbmcuLi4uLi48L2gxPlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==