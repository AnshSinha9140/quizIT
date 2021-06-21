self["webpackHotUpdate_N_E"]("pages/testing",{

/***/ "./components/QuestionCard.js":
/*!************************************!*\
  !*** ./components/QuestionCard.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ QuestionCard; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_rahul_Desktop_quizApp_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\rahul\\Desktop\\quizApp\\components\\QuestionCard.js";


function QuestionCard(_ref) {
  var handleAnswer = _ref.handleAnswer,
      _ref$data = _ref.data,
      question = _ref$data.question,
      correct_answer = _ref$data.correct_answer,
      incorrect_answers = _ref$data.incorrect_answers;
  var shuffledAnswers = [correct_answer].concat((0,C_Users_rahul_Desktop_quizApp_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(incorrect_answers)).sort(function () {
    return Math.random() - 0.5;
  });
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
        className: "answers",
        onClick: function onClick() {
          return handleAnswer(shuffledAnswers[0]);
        },
        children: [" ", shuffledAnswers[0]]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "answers answers-white",
        onClick: function onClick() {
          return handleAnswer(shuffledAnswers[1]);
        },
        children: [" ", shuffledAnswers[1]]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "answers answers-white",
        onClick: function onClick() {
          return handleAnswer(shuffledAnswers[2]);
        },
        children: [" ", shuffledAnswers[2]]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "answers answers-white",
        onClick: function onClick() {
          return handleAnswer(shuffledAnswers[3]);
        },
        children: [" ", shuffledAnswers[3]]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 39,
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
_c = QuestionCard;

var _c;

$RefreshReg$(_c, "QuestionCard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9RdWVzdGlvbkNhcmQuanMiXSwibmFtZXMiOlsiUXVlc3Rpb25DYXJkIiwiaGFuZGxlQW5zd2VyIiwiZGF0YSIsInF1ZXN0aW9uIiwiY29ycmVjdF9hbnN3ZXIiLCJpbmNvcnJlY3RfYW5zd2VycyIsInNodWZmbGVkQW5zd2VycyIsInNvcnQiLCJNYXRoIiwicmFuZG9tIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLFlBQVQsT0FHWjtBQUFBLE1BRkRDLFlBRUMsUUFGREEsWUFFQztBQUFBLHVCQUREQyxJQUNDO0FBQUEsTUFET0MsUUFDUCxhQURPQSxRQUNQO0FBQUEsTUFEaUJDLGNBQ2pCLGFBRGlCQSxjQUNqQjtBQUFBLE1BRGlDQyxpQkFDakMsYUFEaUNBLGlCQUNqQztBQUNELE1BQU1DLGVBQWUsR0FBRyxDQUFDRixjQUFELHlJQUFvQkMsaUJBQXBCLEdBQXVDRSxJQUF2QyxDQUN0QjtBQUFBLFdBQU1DLElBQUksQ0FBQ0MsTUFBTCxLQUFnQixHQUF0QjtBQUFBLEdBRHNCLENBQXhCO0FBR0Esc0JBQ0U7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFDLFVBQWY7QUFBQSxnQkFBMkJOO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUdFO0FBQUssZUFBUyxFQUFDLGFBQWY7QUFBQSw4QkFHRTtBQUNFLGlCQUFTLFdBRFg7QUFFRSxlQUFPLEVBQUU7QUFBQSxpQkFBTUYsWUFBWSxDQUFDSyxlQUFlLENBQUMsQ0FBRCxDQUFoQixDQUFsQjtBQUFBLFNBRlg7QUFBQSxtQkFJRyxHQUpILEVBS0dBLGVBQWUsQ0FBQyxDQUFELENBTGxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhGLGVBVUU7QUFDRSxpQkFBUyxFQUFDLHVCQURaO0FBRUUsZUFBTyxFQUFFO0FBQUEsaUJBQU1MLFlBQVksQ0FBQ0ssZUFBZSxDQUFDLENBQUQsQ0FBaEIsQ0FBbEI7QUFBQSxTQUZYO0FBQUEsbUJBSUcsR0FKSCxFQUtHQSxlQUFlLENBQUMsQ0FBRCxDQUxsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FWRixlQWlCRTtBQUNFLGlCQUFTLEVBQUMsdUJBRFo7QUFFRSxlQUFPLEVBQUU7QUFBQSxpQkFBTUwsWUFBWSxDQUFDSyxlQUFlLENBQUMsQ0FBRCxDQUFoQixDQUFsQjtBQUFBLFNBRlg7QUFBQSxtQkFJRyxHQUpILEVBS0dBLGVBQWUsQ0FBQyxDQUFELENBTGxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWpCRixlQXdCRTtBQUNFLGlCQUFTLEVBQUMsdUJBRFo7QUFFRSxlQUFPLEVBQUU7QUFBQSxpQkFBTUwsWUFBWSxDQUFDSyxlQUFlLENBQUMsQ0FBRCxDQUFoQixDQUFsQjtBQUFBLFNBRlg7QUFBQSxtQkFJRyxHQUpILEVBS0dBLGVBQWUsQ0FBQyxDQUFELENBTGxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXNDRDtLQTdDdUJOLFkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGVzdGluZy4xZTc5NzYwZjhhZjMyZmI5MTUwNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUXVlc3Rpb25DYXJkKHtcclxuICBoYW5kbGVBbnN3ZXIsXHJcbiAgZGF0YTogeyBxdWVzdGlvbiwgY29ycmVjdF9hbnN3ZXIsIGluY29ycmVjdF9hbnN3ZXJzIH0sXHJcbn0pIHtcclxuICBjb25zdCBzaHVmZmxlZEFuc3dlcnMgPSBbY29ycmVjdF9hbnN3ZXIsIC4uLmluY29ycmVjdF9hbnN3ZXJzXS5zb3J0KFxyXG4gICAgKCkgPT4gTWF0aC5yYW5kb20oKSAtIDAuNVxyXG4gICk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicXVlcy1jYXJkXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicXVlc3Rpb25cIj57cXVlc3Rpb259PC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFuc3dlcnMtYm94XCI+XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT17YGFuc3dlcnNgIH1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUFuc3dlcihzaHVmZmxlZEFuc3dlcnNbMF0pfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgIHtzaHVmZmxlZEFuc3dlcnNbMF19XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYW5zd2VycyBhbnN3ZXJzLXdoaXRlXCJcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUFuc3dlcihzaHVmZmxlZEFuc3dlcnNbMV0pfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgIHtzaHVmZmxlZEFuc3dlcnNbMV19XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYW5zd2VycyBhbnN3ZXJzLXdoaXRlXCJcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUFuc3dlcihzaHVmZmxlZEFuc3dlcnNbMl0pfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgIHtzaHVmZmxlZEFuc3dlcnNbMl19XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYW5zd2VycyBhbnN3ZXJzLXdoaXRlXCJcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUFuc3dlcihzaHVmZmxlZEFuc3dlcnNbM10pfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgIHtzaHVmZmxlZEFuc3dlcnNbM119XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9