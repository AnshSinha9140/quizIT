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
/* harmony import */ var _components_lottie__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/lottie */ "./components/lottie.js");
/* harmony import */ var _Animations_38150_celebration_particle_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Animations/38150-celebration-particle.json */ "./Animations/38150-celebration-particle.json");
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

  return currentQuestion >= numberOfQuestions ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: "score",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h4", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_lottie__WEBPACK_IMPORTED_MODULE_8__.default, {
        celebration: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, this), "Your score is ", score, " out of ", numberOfQuestions]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 5
  }, this) : questions.length > 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_4__.default, _objectSpread({}, yourname), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "score-div",
      children: ["Score: ", score]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "sub-home",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_QuestionCard__WEBPACK_IMPORTED_MODULE_7__.default, {
        handleAnswer: handleAnswer,
        data: questions[currentQuestion]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 53,
    columnNumber: 5
  }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
    children: "loading......"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 64,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGVzdGluZy5qcyJdLCJuYW1lcyI6WyJ0ZXN0aW5nIiwidXNlU3RhdGUiLCJiZ0NvbG9yIiwic2V0Qmdjb2xvciIsInF1ZXN0aW9ucyIsInNldFF1ZXN0aW9ucyIsImN1cnJlbnRRdWVzdGlvbiIsInNldGN1cnJlbnRRdWVzdGlvbiIsInNjb3JlIiwic2V0U2NvcmUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ5b3VybmFtZSIsInF1ZXJ5IiwibmFtZSIsImNhdGVnb3J5IiwiZGlmZmljdWx0eSIsInF1ZXN0aW9uRGlmZmljdWx0eSIsIm51bWJlck9mUXVlc3Rpb25zIiwidCIsInVzZUVmZmVjdCIsImF4aW9zIiwidGhlbiIsInJlc3AiLCJkYXRhIiwicmVzdWx0cyIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsImhhbmRsZUFuc3dlciIsImFuc3dlciIsImNvcnJlY3RfYW5zd2VyIiwibG9nIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxPQUFULEdBQW1CO0FBQUE7O0FBQUEsa0JBQ0ZDLCtDQUFRLENBQUMsZUFBRCxDQUROO0FBQUEsTUFDekJDLE9BRHlCO0FBQUEsTUFDaEJDLFVBRGdCOztBQUFBLG1CQUVFRiwrQ0FBUSxDQUFDLEVBQUQsQ0FGVjtBQUFBLE1BRXpCRyxTQUZ5QjtBQUFBLE1BRWRDLFlBRmM7O0FBQUEsbUJBR2NKLCtDQUFRLENBQUMsQ0FBRCxDQUh0QjtBQUFBLE1BR3pCSyxlQUh5QjtBQUFBLE1BR1JDLGtCQUhROztBQUFBLG1CQUlOTiwrQ0FBUSxDQUFDLENBQUQsQ0FKRjtBQUFBLE1BSXpCTyxLQUp5QjtBQUFBLE1BSWxCQyxRQUprQjs7QUFLaEMsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQUNBLE1BQU1DLFFBQVEsR0FBR0YsTUFBTSxDQUFDRyxLQUFQLENBQWFDLElBQTlCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHTCxNQUFNLENBQUNHLEtBQVAsQ0FBYUUsUUFBOUI7QUFDQSxNQUFNQyxVQUFVLEdBQUdOLE1BQU0sQ0FBQ0csS0FBUCxDQUFhSSxrQkFBaEM7QUFDQSxNQUFNQyxpQkFBaUIsR0FBR1IsTUFBTSxDQUFDRyxLQUFQLENBQWFLLGlCQUF2QztBQUNBLE1BQU1DLENBQUMsR0FBRyxVQUFWO0FBRUFDLGtEQUFTLENBQUMsWUFBTTtBQUNkQyxvREFBQSw4Q0FFMENILGlCQUYxQyx1QkFFd0VILFFBRnhFLHlCQUUrRkMsVUFGL0YsbUJBRWtIRyxDQUZsSCxHQUlHRyxJQUpILENBSVEsVUFBQ0MsSUFBRCxFQUFVO0FBQ2RsQixrQkFBWSxDQUFDa0IsSUFBSSxDQUFDQyxJQUFMLENBQVVDLE9BQVgsQ0FBWjtBQUNELEtBTkgsV0FPUyxVQUFDQyxHQUFELEVBQVM7QUFDZEMsYUFBTyxDQUFDQyxLQUFSLENBQWNGLEdBQWQ7QUFDRCxLQVRIO0FBVUQsR0FYUSxFQVdOLEVBWE0sQ0FBVDs7QUFhQSxNQUFNRyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxNQUFELEVBQVk7QUFDL0IsUUFBSUEsTUFBTSxLQUFLMUIsU0FBUyxDQUFDRSxlQUFELENBQVQsQ0FBMkJ5QixjQUExQyxFQUEwRDtBQUN4RHRCLGNBQVEsQ0FBQ0QsS0FBSyxHQUFHLENBQVQsQ0FBUjtBQUNBRCx3QkFBa0IsQ0FBQ0QsZUFBZSxHQUFHLENBQW5CLENBQWxCO0FBQ0QsS0FIRCxNQUdPO0FBQ0xxQixhQUFPLENBQUNLLEdBQVIsQ0FBWSxPQUFaO0FBQ0F6Qix3QkFBa0IsQ0FBQ0QsZUFBZSxHQUFHLENBQW5CLENBQWxCO0FBQ0Q7QUFDRixHQVJEOztBQVVBLFNBQU9BLGVBQWUsSUFBSVksaUJBQW5CLGdCQUNMO0FBQUssYUFBUyxFQUFDLE9BQWY7QUFBQSwyQkFDRTtBQUFBLDhCQUNFLDhEQUFDLHVEQUFEO0FBQWlCLG1CQUFXO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixvQkFFaUJWLEtBRmpCLGNBRWdDVSxpQkFGaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURLLEdBT0hkLFNBQVMsQ0FBQzZCLE1BQVYsR0FBbUIsQ0FBbkIsZ0JBQ0Y7QUFBQSw0QkFDRSw4REFBQyx1REFBRCxvQkFBWXJCLFFBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUU7QUFBSyxlQUFTLEVBQUMsV0FBZjtBQUFBLDRCQUFtQ0osS0FBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsZUFHRTtBQUFLLGVBQVMsRUFBQyxVQUFmO0FBQUEsNkJBQ0UsOERBQUMsNkRBQUQ7QUFDRSxvQkFBWSxFQUFFcUIsWUFEaEI7QUFFRSxZQUFJLEVBQUV6QixTQUFTLENBQUNFLGVBQUQ7QUFGakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERSxnQkFZRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQW5CRjtBQXFCRDs7R0F4RHVCTixPO1VBS1BXLGtEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Rlc3RpbmcuNzUzYzcyNTViOTdhYWJmYTVkZWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlclwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBTY29yZUNhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvU2NvcmVDYXJkXCI7XHJcbmltcG9ydCBRdWVzdGlvbkNhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvUXVlc3Rpb25DYXJkXCI7XHJcbmltcG9ydCBMb3R0aWVBbmltYXRpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvbG90dGllXCI7XHJcbmltcG9ydCBjZWxlYnJhdGlvbiBmcm9tIFwiLi4vQW5pbWF0aW9ucy8zODE1MC1jZWxlYnJhdGlvbi1wYXJ0aWNsZS5qc29uXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0ZXN0aW5nKCkge1xyXG4gIGNvbnN0IFtiZ0NvbG9yLCBzZXRCZ2NvbG9yXSA9IHVzZVN0YXRlKFwiYW5zd2Vycy13aGl0ZVwiKTtcclxuICBjb25zdCBbcXVlc3Rpb25zLCBzZXRRdWVzdGlvbnNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtjdXJyZW50UXVlc3Rpb24sIHNldGN1cnJlbnRRdWVzdGlvbl0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbc2NvcmUsIHNldFNjb3JlXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHlvdXJuYW1lID0gcm91dGVyLnF1ZXJ5Lm5hbWU7XHJcbiAgY29uc3QgY2F0ZWdvcnkgPSByb3V0ZXIucXVlcnkuY2F0ZWdvcnk7XHJcbiAgY29uc3QgZGlmZmljdWx0eSA9IHJvdXRlci5xdWVyeS5xdWVzdGlvbkRpZmZpY3VsdHk7XHJcbiAgY29uc3QgbnVtYmVyT2ZRdWVzdGlvbnMgPSByb3V0ZXIucXVlcnkubnVtYmVyT2ZRdWVzdGlvbnM7XHJcbiAgY29uc3QgdCA9IFwibXVsdGlwbGVcIjtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGF4aW9zXHJcbiAgICAgIC5nZXQoXHJcbiAgICAgICAgYGh0dHBzOi8vb3BlbnRkYi5jb20vYXBpLnBocD9hbW91bnQ9JHtudW1iZXJPZlF1ZXN0aW9uc30mY2F0ZWdvcnk9JHtjYXRlZ29yeX0mZGlmZmljdWx0eT0ke2RpZmZpY3VsdHl9JnR5cGU9JHt0fWBcclxuICAgICAgKVxyXG4gICAgICAudGhlbigocmVzcCkgPT4ge1xyXG4gICAgICAgIHNldFF1ZXN0aW9ucyhyZXNwLmRhdGEucmVzdWx0cyk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUFuc3dlciA9IChhbnN3ZXIpID0+IHtcclxuICAgIGlmIChhbnN3ZXIgPT09IHF1ZXN0aW9uc1tjdXJyZW50UXVlc3Rpb25dLmNvcnJlY3RfYW5zd2VyKSB7XHJcbiAgICAgIHNldFNjb3JlKHNjb3JlICsgMSk7XHJcbiAgICAgIHNldGN1cnJlbnRRdWVzdGlvbihjdXJyZW50UXVlc3Rpb24gKyAxKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiZmFsc2VcIik7XHJcbiAgICAgIHNldGN1cnJlbnRRdWVzdGlvbihjdXJyZW50UXVlc3Rpb24gKyAxKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gY3VycmVudFF1ZXN0aW9uID49IG51bWJlck9mUXVlc3Rpb25zID8gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzY29yZVwiPlxyXG4gICAgICA8aDQ+XHJcbiAgICAgICAgPExvdHRpZUFuaW1hdGlvbiBjZWxlYnJhdGlvbiAvPlxyXG4gICAgICAgIFlvdXIgc2NvcmUgaXMge3Njb3JlfSBvdXQgb2Yge251bWJlck9mUXVlc3Rpb25zfVxyXG4gICAgICA8L2g0PlxyXG4gICAgPC9kaXY+XHJcbiAgKSA6IHF1ZXN0aW9ucy5sZW5ndGggPiAwID8gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEhlYWRlciB7Li4ueW91cm5hbWV9IC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2NvcmUtZGl2XCI+U2NvcmU6IHtzY29yZX08L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWItaG9tZVwiPlxyXG4gICAgICAgIDxRdWVzdGlvbkNhcmRcclxuICAgICAgICAgIGhhbmRsZUFuc3dlcj17aGFuZGxlQW5zd2VyfVxyXG4gICAgICAgICAgZGF0YT17cXVlc3Rpb25zW2N1cnJlbnRRdWVzdGlvbl19XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApIDogKFxyXG4gICAgPGgxPmxvYWRpbmcuLi4uLi48L2gxPlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==