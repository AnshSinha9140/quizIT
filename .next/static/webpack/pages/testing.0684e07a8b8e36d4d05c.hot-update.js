self["webpackHotUpdate_N_E"]("pages/testing",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ index; }
/* harmony export */ });
/* harmony import */ var C_Users_rahul_Desktop_quizApp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\rahul\\Desktop\\quizApp\\pages\\index.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_rahul_Desktop_quizApp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





function index() {
  _s();

  var _this = this;

  //fetching data using useeffect
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(""),
      name = _useState[0],
      setName = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(""),
      category = _useState2[0],
      selectedCategory = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(""),
      questionDifficulty = _useState3[0],
      setQuestionDifficulty = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),
      categories = _useState4[0],
      setCategories = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(10),
      numberOfQuestions = _useState5[0],
      setNumberOfQuestions = _useState5[1];

  var singnup = "Signup";
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    axios__WEBPACK_IMPORTED_MODULE_2___default().get("https://opentdb.com/api_category.php").then(function (response) {
      setCategories(response.data.trivia_categories);
    })["catch"](function (err) {
      console.error(err);
    });
  }, []); //for name

  var handleTypeChange = function handleTypeChange(event) {
    setName(event.target.value);
  }; //for category


  var handleCategoryChange = function handleCategoryChange(event) {
    selectedCategory(event.target.value);
  }; // for difficulty


  var handleDifficultyChange = function handleDifficultyChange(event) {
    setQuestionDifficulty(event.target.value);
  }; // number of questions


  var handleAmountChange = function handleAmountChange(event) {
    setNumberOfQuestions(event.target.value);
  };

  var onsubmit = function onsubmit(event) {
    event.preventDefault();
    router.push({
      pathname: "/testing",
      query: {
        name: name,
        category: category,
        questionDifficulty: questionDifficulty,
        numberOfQuestions: numberOfQuestions
      }
    });
  }; //routing
  //returns


  return categories.length > 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_4__.default, _objectSpread({}, singnup), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "welcome",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "main-div",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "name-div",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
              children: "Enter your Name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
              type: "text",
              name: "name",
              value: name,
              onChange: handleTypeChange
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "category-div",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
              children: "Select Category"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("select", {
              value: category,
              className: "sel",
              onChange: handleCategoryChange,
              children: categories.map(function (option) {
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("option", {
                  value: option.id,
                  children: option.name
                }, option.id, false, {
                  fileName: _jsxFileName,
                  lineNumber: 93,
                  columnNumber: 19
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "diffculty-div",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
              children: "Select difficulty level"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("select", {
              value: questionDifficulty,
              onChange: handleDifficultyChange,
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("option", {
                children: "easy"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 110,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("option", {
                children: "medium"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 111,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("option", {
                children: "hard"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 112,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 106,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "number-div",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
              children: "Select number of questions"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 118,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("select", {
              value: numberOfQuestions,
              onChange: handleAmountChange,
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("option", {
                children: "10"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 122,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("option", {
                children: "15"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 123,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("option", {
                children: "20"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 124,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 121,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
          onClick: onsubmit,
          className: "btn bt",
          children: "Start"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 62,
    columnNumber: 5
  }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
    children: "categoris loading....."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 135,
    columnNumber: 5
  }, this);
}

_s(index, "32WpKB9oSGo5RUN2HJt2LsG50h0=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter];
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


/***/ }),

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
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! . */ "./pages/index.js");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Rlc3RpbmcuanMiXSwibmFtZXMiOlsiaW5kZXgiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsIm5hbWUiLCJzZXROYW1lIiwiY2F0ZWdvcnkiLCJzZWxlY3RlZENhdGVnb3J5IiwicXVlc3Rpb25EaWZmaWN1bHR5Iiwic2V0UXVlc3Rpb25EaWZmaWN1bHR5IiwiY2F0ZWdvcmllcyIsInNldENhdGVnb3JpZXMiLCJudW1iZXJPZlF1ZXN0aW9ucyIsInNldE51bWJlck9mUXVlc3Rpb25zIiwic2luZ251cCIsInVzZUVmZmVjdCIsImF4aW9zIiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsInRyaXZpYV9jYXRlZ29yaWVzIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwiaGFuZGxlVHlwZUNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVDYXRlZ29yeUNoYW5nZSIsImhhbmRsZURpZmZpY3VsdHlDaGFuZ2UiLCJoYW5kbGVBbW91bnRDaGFuZ2UiLCJvbnN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwicHVzaCIsInBhdGhuYW1lIiwicXVlcnkiLCJsZW5ndGgiLCJtYXAiLCJvcHRpb24iLCJpZCIsInRlc3RpbmciLCJiZ0NvbG9yIiwic2V0Qmdjb2xvciIsInF1ZXN0aW9ucyIsInNldFF1ZXN0aW9ucyIsImN1cnJlbnRRdWVzdGlvbiIsInNldGN1cnJlbnRRdWVzdGlvbiIsInNjb3JlIiwic2V0U2NvcmUiLCJ5b3VybmFtZSIsImRpZmZpY3VsdHkiLCJ0IiwicmVzcCIsInJlc3VsdHMiLCJoYW5kbGVBbnN3ZXIiLCJhbnN3ZXIiLCJjb3JyZWN0X2Fuc3dlciIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsS0FBVCxHQUFp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dGVzdGluZy4wNjg0ZTA3YThiOGUzNmQ0ZDA1Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlclwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluZGV4KCkge1xyXG4gIC8vZmV0Y2hpbmcgZGF0YSB1c2luZyB1c2VlZmZlY3RcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY2F0ZWdvcnksIHNlbGVjdGVkQ2F0ZWdvcnldID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3F1ZXN0aW9uRGlmZmljdWx0eSwgc2V0UXVlc3Rpb25EaWZmaWN1bHR5XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtjYXRlZ29yaWVzLCBzZXRDYXRlZ29yaWVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbbnVtYmVyT2ZRdWVzdGlvbnMsIHNldE51bWJlck9mUXVlc3Rpb25zXSA9IHVzZVN0YXRlKDEwKTtcclxuXHJcbiAgY29uc3Qgc2luZ251cCA9IFwiU2lnbnVwXCI7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBheGlvc1xyXG4gICAgICAuZ2V0KFwiaHR0cHM6Ly9vcGVudGRiLmNvbS9hcGlfY2F0ZWdvcnkucGhwXCIpXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIHNldENhdGVnb3JpZXMocmVzcG9uc2UuZGF0YS50cml2aWFfY2F0ZWdvcmllcyk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIC8vZm9yIG5hbWVcclxuICBjb25zdCBoYW5kbGVUeXBlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICBzZXROYW1lKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuICAvL2ZvciBjYXRlZ29yeVxyXG4gIGNvbnN0IGhhbmRsZUNhdGVnb3J5Q2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICBzZWxlY3RlZENhdGVnb3J5KGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuICAvLyBmb3IgZGlmZmljdWx0eVxyXG4gIGNvbnN0IGhhbmRsZURpZmZpY3VsdHlDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgIHNldFF1ZXN0aW9uRGlmZmljdWx0eShldmVudC50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcbiAgLy8gbnVtYmVyIG9mIHF1ZXN0aW9uc1xyXG4gIGNvbnN0IGhhbmRsZUFtb3VudENoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgc2V0TnVtYmVyT2ZRdWVzdGlvbnMoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbnN1Ym1pdCA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHJvdXRlci5wdXNoKHtcclxuICAgICAgcGF0aG5hbWU6IFwiL3Rlc3RpbmdcIixcclxuICAgICAgcXVlcnk6IHtcclxuICAgICAgICBuYW1lLFxyXG4gICAgICAgIGNhdGVnb3J5LFxyXG4gICAgICAgIHF1ZXN0aW9uRGlmZmljdWx0eSxcclxuICAgICAgICBudW1iZXJPZlF1ZXN0aW9ucyxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIC8vcm91dGluZ1xyXG5cclxuICAvL3JldHVybnNcclxuICByZXR1cm4gY2F0ZWdvcmllcy5sZW5ndGggPiAwID8gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEhlYWRlciB7Li4uc2luZ251cH0gLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ZWxjb21lXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWRpdlwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYW1lLWRpdlwiPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICA8aDM+RW50ZXIgeW91ciBOYW1lPC9oMz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e25hbWV9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlVHlwZUNoYW5nZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2F0ZWdvcnktZGl2XCI+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGgzPlNlbGVjdCBDYXRlZ29yeTwvaDM+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtjYXRlZ29yeX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNlbFwiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2F0ZWdvcnlDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2NhdGVnb3JpZXMubWFwKChvcHRpb24pID0+IChcclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e29wdGlvbi5pZH0gdmFsdWU9e29wdGlvbi5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAge29wdGlvbi5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaWZmY3VsdHktZGl2XCI+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGgzPlNlbGVjdCBkaWZmaWN1bHR5IGxldmVsPC9oMz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtxdWVzdGlvbkRpZmZpY3VsdHl9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlRGlmZmljdWx0eUNoYW5nZX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uPmVhc3k8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24+bWVkaXVtPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uPmhhcmQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibnVtYmVyLWRpdlwiPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxoMz5TZWxlY3QgbnVtYmVyIG9mIHF1ZXN0aW9uczwvaDM+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxzZWxlY3QgdmFsdWU9e251bWJlck9mUXVlc3Rpb25zfSBvbkNoYW5nZT17aGFuZGxlQW1vdW50Q2hhbmdlfT5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24+MTA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24+MTU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24+MjA8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17b25zdWJtaXR9IGNsYXNzTmFtZT1cImJ0biBidFwiPlxyXG4gICAgICAgICAgICBTdGFydFxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKSA6IChcclxuICAgIDxoMT5jYXRlZ29yaXMgbG9hZGluZy4uLi4uPC9oMT5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlclwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBTY29yZUNhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvU2NvcmVDYXJkXCI7XHJcbmltcG9ydCBRdWVzdGlvbkNhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvUXVlc3Rpb25DYXJkXCI7XHJcbmltcG9ydCBMb3R0aWVBbmltYXRpb24gZnJvbSAnLi4vY29tcG9uZW50cy9sb3R0aWUnO1xyXG5pbXBvcnQgY2VsZWJyYXRpb24gZnJvbSAnLidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRlc3RpbmcoKSB7XHJcbiAgY29uc3QgW2JnQ29sb3IsIHNldEJnY29sb3JdID0gdXNlU3RhdGUoXCJhbnN3ZXJzLXdoaXRlXCIpO1xyXG4gIGNvbnN0IFtxdWVzdGlvbnMsIHNldFF1ZXN0aW9uc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2N1cnJlbnRRdWVzdGlvbiwgc2V0Y3VycmVudFF1ZXN0aW9uXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtzY29yZSwgc2V0U2NvcmVdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeW91cm5hbWUgPSByb3V0ZXIucXVlcnkubmFtZTtcclxuICBjb25zdCBjYXRlZ29yeSA9IHJvdXRlci5xdWVyeS5jYXRlZ29yeTtcclxuICBjb25zdCBkaWZmaWN1bHR5ID0gcm91dGVyLnF1ZXJ5LnF1ZXN0aW9uRGlmZmljdWx0eTtcclxuICBjb25zdCBudW1iZXJPZlF1ZXN0aW9ucyA9IHJvdXRlci5xdWVyeS5udW1iZXJPZlF1ZXN0aW9ucztcclxuICBjb25zdCB0ID0gXCJtdWx0aXBsZVwiO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXhpb3NcclxuICAgICAgLmdldChcclxuICAgICAgICBgaHR0cHM6Ly9vcGVudGRiLmNvbS9hcGkucGhwP2Ftb3VudD0ke251bWJlck9mUXVlc3Rpb25zfSZjYXRlZ29yeT0ke2NhdGVnb3J5fSZkaWZmaWN1bHR5PSR7ZGlmZmljdWx0eX0mdHlwZT0ke3R9YFxyXG4gICAgICApXHJcbiAgICAgIC50aGVuKChyZXNwKSA9PiB7XHJcbiAgICAgICAgc2V0UXVlc3Rpb25zKHJlc3AuZGF0YS5yZXN1bHRzKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQW5zd2VyID0gKGFuc3dlcikgPT4ge1xyXG4gICAgaWYgKGFuc3dlciA9PT0gcXVlc3Rpb25zW2N1cnJlbnRRdWVzdGlvbl0uY29ycmVjdF9hbnN3ZXIpIHtcclxuICAgICAgc2V0U2NvcmUoc2NvcmUgKyAxKTtcclxuICAgICAgc2V0Y3VycmVudFF1ZXN0aW9uKGN1cnJlbnRRdWVzdGlvbiArIDEpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coXCJmYWxzZVwiKTtcclxuICAgICAgc2V0Y3VycmVudFF1ZXN0aW9uKGN1cnJlbnRRdWVzdGlvbiArIDEpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiBjdXJyZW50UXVlc3Rpb24gPj0gbnVtYmVyT2ZRdWVzdGlvbnMgPyAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNjb3JlXCI+XHJcbiAgICAgIDxoND5cclxuXHJcbiAgICAgICAgWW91ciBzY29yZSBpcyB7c2NvcmV9IG91dCBvZiB7bnVtYmVyT2ZRdWVzdGlvbnN9XHJcbiAgICAgIDwvaDQ+XHJcbiAgICA8L2Rpdj5cclxuICApIDogcXVlc3Rpb25zLmxlbmd0aCA+IDAgPyAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8SGVhZGVyIHsuLi55b3VybmFtZX0gLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzY29yZS1kaXZcIj5TY29yZToge3Njb3JlfTwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1Yi1ob21lXCI+XHJcbiAgICAgICAgPFF1ZXN0aW9uQ2FyZFxyXG4gICAgICAgICAgaGFuZGxlQW5zd2VyPXtoYW5kbGVBbnN3ZXJ9XHJcbiAgICAgICAgICBkYXRhPXtxdWVzdGlvbnNbY3VycmVudFF1ZXN0aW9uXX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICkgOiAoXHJcbiAgICA8aDE+bG9hZGluZy4uLi4uLjwvaDE+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9