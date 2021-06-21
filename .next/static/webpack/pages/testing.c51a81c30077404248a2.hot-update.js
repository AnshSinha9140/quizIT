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

  return currentQuestion >= numberOfQuestions ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: "score",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h4", {
      children: ["Your score is ", score, " out of ", numberOfQuestions]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 5
  }, this) : questions.length > 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_4__.default, _objectSpread({}, yourname), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "score-div",
      children: ["Score: ", score]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "sub-home",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_QuestionCard__WEBPACK_IMPORTED_MODULE_7__.default, {
        handleAnswer: handleAnswer,
        data: questions[currentQuestion]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 5
  }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
    children: "loading......"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 61,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGVzdGluZy5qcyJdLCJuYW1lcyI6WyJ0ZXN0aW5nIiwidXNlU3RhdGUiLCJiZ0NvbG9yIiwic2V0Qmdjb2xvciIsInF1ZXN0aW9ucyIsInNldFF1ZXN0aW9ucyIsImN1cnJlbnRRdWVzdGlvbiIsInNldGN1cnJlbnRRdWVzdGlvbiIsInNjb3JlIiwic2V0U2NvcmUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ5b3VybmFtZSIsInF1ZXJ5IiwibmFtZSIsImNhdGVnb3J5IiwiZGlmZmljdWx0eSIsInF1ZXN0aW9uRGlmZmljdWx0eSIsIm51bWJlck9mUXVlc3Rpb25zIiwidCIsInVzZUVmZmVjdCIsImF4aW9zIiwidGhlbiIsInJlc3AiLCJkYXRhIiwicmVzdWx0cyIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsImhhbmRsZUFuc3dlciIsImFuc3dlciIsImNvcnJlY3RfYW5zd2VyIiwibG9nIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxPQUFULEdBQW1CO0FBQUE7O0FBQUEsa0JBQ0ZDLCtDQUFRLENBQUMsZUFBRCxDQUROO0FBQUEsTUFDekJDLE9BRHlCO0FBQUEsTUFDaEJDLFVBRGdCOztBQUFBLG1CQUVFRiwrQ0FBUSxDQUFDLEVBQUQsQ0FGVjtBQUFBLE1BRXpCRyxTQUZ5QjtBQUFBLE1BRWRDLFlBRmM7O0FBQUEsbUJBR2NKLCtDQUFRLENBQUMsQ0FBRCxDQUh0QjtBQUFBLE1BR3pCSyxlQUh5QjtBQUFBLE1BR1JDLGtCQUhROztBQUFBLG1CQUlOTiwrQ0FBUSxDQUFDLENBQUQsQ0FKRjtBQUFBLE1BSXpCTyxLQUp5QjtBQUFBLE1BSWxCQyxRQUprQjs7QUFLaEMsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQUNBLE1BQU1DLFFBQVEsR0FBR0YsTUFBTSxDQUFDRyxLQUFQLENBQWFDLElBQTlCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHTCxNQUFNLENBQUNHLEtBQVAsQ0FBYUUsUUFBOUI7QUFDQSxNQUFNQyxVQUFVLEdBQUdOLE1BQU0sQ0FBQ0csS0FBUCxDQUFhSSxrQkFBaEM7QUFDQSxNQUFNQyxpQkFBaUIsR0FBR1IsTUFBTSxDQUFDRyxLQUFQLENBQWFLLGlCQUF2QztBQUNBLE1BQU1DLENBQUMsR0FBRyxVQUFWO0FBRUFDLGtEQUFTLENBQUMsWUFBTTtBQUNkQyxvREFBQSw4Q0FFMENILGlCQUYxQyx1QkFFd0VILFFBRnhFLHlCQUUrRkMsVUFGL0YsbUJBRWtIRyxDQUZsSCxHQUlHRyxJQUpILENBSVEsVUFBQ0MsSUFBRCxFQUFVO0FBQ2RsQixrQkFBWSxDQUFDa0IsSUFBSSxDQUFDQyxJQUFMLENBQVVDLE9BQVgsQ0FBWjtBQUNELEtBTkgsV0FPUyxVQUFDQyxHQUFELEVBQVM7QUFDZEMsYUFBTyxDQUFDQyxLQUFSLENBQWNGLEdBQWQ7QUFDRCxLQVRIO0FBVUQsR0FYUSxFQVdOLEVBWE0sQ0FBVDs7QUFhQSxNQUFNRyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxNQUFELEVBQVk7QUFDL0IsUUFBSUEsTUFBTSxLQUFLMUIsU0FBUyxDQUFDRSxlQUFELENBQVQsQ0FBMkJ5QixjQUExQyxFQUEwRDtBQUN4RHRCLGNBQVEsQ0FBQ0QsS0FBSyxHQUFHLENBQVQsQ0FBUjtBQUNBRCx3QkFBa0IsQ0FBQ0QsZUFBZSxHQUFHLENBQW5CLENBQWxCO0FBQ0QsS0FIRCxNQUdPO0FBQ0xxQixhQUFPLENBQUNLLEdBQVIsQ0FBWSxPQUFaO0FBQ0F6Qix3QkFBa0IsQ0FBQ0QsZUFBZSxHQUFHLENBQW5CLENBQWxCO0FBQ0Q7QUFDRixHQVJEOztBQVVBLFNBQU9BLGVBQWUsSUFBSVksaUJBQW5CLGdCQUNMO0FBQUssYUFBUyxFQUFDLE9BQWY7QUFBQSwyQkFDRTtBQUFBLG1DQUNpQlYsS0FEakIsY0FDZ0NVLGlCQURoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREssR0FNSGQsU0FBUyxDQUFDNkIsTUFBVixHQUFtQixDQUFuQixnQkFDRjtBQUFBLDRCQUNFLDhEQUFDLHVEQUFELG9CQUFZckIsUUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRTtBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQUEsNEJBQW1DSixLQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQUdFO0FBQUssZUFBUyxFQUFDLFVBQWY7QUFBQSw2QkFDRSw4REFBQyw2REFBRDtBQUNFLG9CQUFZLEVBQUVxQixZQURoQjtBQUVFLFlBQUksRUFBRXpCLFNBQVMsQ0FBQ0UsZUFBRDtBQUZqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURFLGdCQVlGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBbEJGO0FBb0JEOztHQXZEdUJOLE87VUFLUFcsa0QiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGVzdGluZy5jNTFhODFjMzAwNzc0MDQyNDhhMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IFNjb3JlQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9TY29yZUNhcmRcIjtcclxuaW1wb3J0IFF1ZXN0aW9uQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9RdWVzdGlvbkNhcmRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRlc3RpbmcoKSB7XHJcbiAgY29uc3QgW2JnQ29sb3IsIHNldEJnY29sb3JdID0gdXNlU3RhdGUoXCJhbnN3ZXJzLXdoaXRlXCIpO1xyXG4gIGNvbnN0IFtxdWVzdGlvbnMsIHNldFF1ZXN0aW9uc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2N1cnJlbnRRdWVzdGlvbiwgc2V0Y3VycmVudFF1ZXN0aW9uXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtzY29yZSwgc2V0U2NvcmVdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeW91cm5hbWUgPSByb3V0ZXIucXVlcnkubmFtZTtcclxuICBjb25zdCBjYXRlZ29yeSA9IHJvdXRlci5xdWVyeS5jYXRlZ29yeTtcclxuICBjb25zdCBkaWZmaWN1bHR5ID0gcm91dGVyLnF1ZXJ5LnF1ZXN0aW9uRGlmZmljdWx0eTtcclxuICBjb25zdCBudW1iZXJPZlF1ZXN0aW9ucyA9IHJvdXRlci5xdWVyeS5udW1iZXJPZlF1ZXN0aW9ucztcclxuICBjb25zdCB0ID0gXCJtdWx0aXBsZVwiO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXhpb3NcclxuICAgICAgLmdldChcclxuICAgICAgICBgaHR0cHM6Ly9vcGVudGRiLmNvbS9hcGkucGhwP2Ftb3VudD0ke251bWJlck9mUXVlc3Rpb25zfSZjYXRlZ29yeT0ke2NhdGVnb3J5fSZkaWZmaWN1bHR5PSR7ZGlmZmljdWx0eX0mdHlwZT0ke3R9YFxyXG4gICAgICApXHJcbiAgICAgIC50aGVuKChyZXNwKSA9PiB7XHJcbiAgICAgICAgc2V0UXVlc3Rpb25zKHJlc3AuZGF0YS5yZXN1bHRzKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQW5zd2VyID0gKGFuc3dlcikgPT4ge1xyXG4gICAgaWYgKGFuc3dlciA9PT0gcXVlc3Rpb25zW2N1cnJlbnRRdWVzdGlvbl0uY29ycmVjdF9hbnN3ZXIpIHtcclxuICAgICAgc2V0U2NvcmUoc2NvcmUgKyAxKTtcclxuICAgICAgc2V0Y3VycmVudFF1ZXN0aW9uKGN1cnJlbnRRdWVzdGlvbiArIDEpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coXCJmYWxzZVwiKTtcclxuICAgICAgc2V0Y3VycmVudFF1ZXN0aW9uKGN1cnJlbnRRdWVzdGlvbiArIDEpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiBjdXJyZW50UXVlc3Rpb24gPj0gbnVtYmVyT2ZRdWVzdGlvbnMgPyAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNjb3JlXCI+XHJcbiAgICAgIDxoND5cclxuICAgICAgICBZb3VyIHNjb3JlIGlzIHtzY29yZX0gb3V0IG9mIHtudW1iZXJPZlF1ZXN0aW9uc31cclxuICAgICAgPC9oND5cclxuICAgIDwvZGl2PlxyXG4gICkgOiBxdWVzdGlvbnMubGVuZ3RoID4gMCA/IChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxIZWFkZXIgey4uLnlvdXJuYW1lfSAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNjb3JlLWRpdlwiPlNjb3JlOiB7c2NvcmV9PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3ViLWhvbWVcIj5cclxuICAgICAgICA8UXVlc3Rpb25DYXJkXHJcbiAgICAgICAgICBoYW5kbGVBbnN3ZXI9e2hhbmRsZUFuc3dlcn1cclxuICAgICAgICAgIGRhdGE9e3F1ZXN0aW9uc1tjdXJyZW50UXVlc3Rpb25dfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKSA6IChcclxuICAgIDxoMT5sb2FkaW5nLi4uLi4uPC9oMT5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=