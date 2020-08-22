module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/pesquisa.js":
/*!***************************!*\
  !*** ./pages/pesquisa.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "E:\\dev\\projeto1DevPleno\\pages\\pesquisa.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const Pesquisa = () => {
  //form controlado mais próximo do virtual DOM
  //form não controlado mais próximo do DOM
  //Form Controlado através do state
  const {
    0: form,
    1: setForm
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    Nome: '',
    email: '',
    whatsapp: ''
  }); //validação

  const {
    0: sucess,
    1: setSuccess
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: retorno,
    1: setRetorno
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});

  const save = async () => {
    try {
      const response = await fetch('/api/save', {
        method: 'POST',
        body: JSON.stringify(form)
      });
      const data = await response.json();
      setSuccess(true);
      setRetorno(data);
    } catch (err) {}
  };

  const onChange = evt => {
    const value = evt.target.value;
    const key = evt.target.name;
    setForm(old => _objectSpread(_objectSpread({}, old), {}, {
      [key]: value
    }));
  };

  return __jsx("div", {
    className: "pt-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  }, __jsx("h1", {
    className: "text-center font-bold my-4 text-2xl",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, "Cr\xEDticas e Sugest\xF5es"), __jsx("p", {
    className: "text-center mb-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, "O estabelecimento X sempre busca atender melhor seus clienes.", __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 70
    }
  }), "Por isso gostariamos de ouvir a sua opni\xE3o.", __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 52
    }
  })), !sucess && __jsx("div", {
    className: "w-1/5 mx-auto",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 19
    }
  }, __jsx("label", {
    className: "font-bold",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, "Informe seu nome:"), __jsx("input", {
    type: "text",
    className: "p-4 block shadow bg-blue-100 my-2 rounded",
    placeholder: "Nome",
    onChange: onChange,
    name: "Nome",
    value: form.Nome,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }), __jsx("label", {
    className: "font-bold",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, "email:"), __jsx("input", {
    type: "text",
    className: "p-4 block shadow bg-blue-100 my-2 rounded",
    placeholder: "e-mail",
    onChange: onChange,
    name: "email",
    value: form.email,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }), __jsx("label", {
    className: "font-bold",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, "whatsapp:"), __jsx("input", {
    type: "text",
    className: "p-4 block shadow bg-blue-100 my-2 rounded",
    placeholder: "whatsapp",
    onChange: onChange,
    name: "whatsapp",
    value: form.whatsapp,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }), __jsx("label", {
    className: "font-bold",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, "Sugest\xE3o:"), __jsx("input", {
    type: "text",
    className: "p-4 block shadow bg-blue-100 my-2 rounded",
    placeholder: "Sugest\xE3o",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }), __jsx("button", {
    className: "bg-blue-400 px-16 py-3 font-bold rounded-lg shadow-lg hover:shadow",
    onClick: save,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, "Salvar")), sucess && __jsx("div", {
    className: "w-1/5 mx-auto",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 18
    }
  }, __jsx("p", {
    className: "mb-6 text-center bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, "Obrigado por contribuir com sua informa\xE7\xE3o!"), retorno.showCoupon && __jsx("div", {
    className: "text-center border p-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 33
    }
  }, "Seu cupom: ", __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 24
    }
  }), __jsx("span", {
    className: "font-bold",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  }, retorno.Cupom)), retorno.showCoupon && __jsx("div", {
    className: "text-center border p-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 33
    }
  }, __jsx("span", {
    className: "font-bold",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }, retorno.Promo))));
};

/* harmony default export */ __webpack_exports__["default"] = (Pesquisa);

/***/ }),

/***/ 6:
/*!*********************************!*\
  !*** multi ./pages/pesquisa.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\dev\projeto1DevPleno\pages\pesquisa.js */"./pages/pesquisa.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvcGVzcXVpc2EuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiJdLCJuYW1lcyI6WyJQZXNxdWlzYSIsImZvcm0iLCJzZXRGb3JtIiwidXNlU3RhdGUiLCJOb21lIiwiZW1haWwiLCJ3aGF0c2FwcCIsInN1Y2VzcyIsInNldFN1Y2Nlc3MiLCJyZXRvcm5vIiwic2V0UmV0b3JubyIsInNhdmUiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwianNvbiIsImVyciIsIm9uQ2hhbmdlIiwiZXZ0IiwidmFsdWUiLCJ0YXJnZXQiLCJrZXkiLCJuYW1lIiwib2xkIiwic2hvd0NvdXBvbiIsIkN1cG9tIiwiUHJvbW8iXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwr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QUNvQixLQUFyQyxDQUZvQixDQUhmLEVBU1BwQixPQUFPLENBQUNtQixVQUFSLElBQXNCO0FBQUssYUFBUyxFQUFDLHdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDcEI7QUFBTSxhQUFTLEVBQUMsV0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUE2Qm5CLE9BQU8sQ0FBQ3FCLEtBQXJDLENBRG9CLENBVGYsQ0FqQmIsQ0FERjtBQWtDRCxDQW5FRDs7QUFvRWU5Qix1RUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZFQSxrQyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xccGVzcXVpc2EuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNik7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuXHJcblxyXG5jb25zdCBQZXNxdWlzYSA9ICgpID0+IHtcclxuICAvL2Zvcm0gY29udHJvbGFkbyBtYWlzIHByw7N4aW1vIGRvIHZpcnR1YWwgRE9NXHJcbiAgLy9mb3JtIG7Do28gY29udHJvbGFkbyBtYWlzIHByw7N4aW1vIGRvIERPTVxyXG5cclxuICAvL0Zvcm0gQ29udHJvbGFkbyBhdHJhdsOpcyBkbyBzdGF0ZVxyXG4gIGNvbnN0IFtmb3JtLCBzZXRGb3JtXSA9IHVzZVN0YXRlKHtcclxuICAgIE5vbWU6ICcnLFxyXG4gICAgZW1haWw6ICcnLFxyXG4gICAgd2hhdHNhcHA6ICcnXHJcbiAgfSlcclxuICAvL3ZhbGlkYcOnw6NvXHJcbiAgY29uc3QgW3N1Y2Vzcywgc2V0U3VjY2Vzc10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbcmV0b3Jubywgc2V0UmV0b3Jub10gPSB1c2VTdGF0ZSh7fSlcclxuICBjb25zdCBzYXZlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9zYXZlJywge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGZvcm0pXHJcbiAgICAgIH0pXHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuICAgICAgc2V0U3VjY2Vzcyh0cnVlKVxyXG4gICAgICBzZXRSZXRvcm5vKGRhdGEpXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgIH1cclxuICB9XHJcbiAgY29uc3Qgb25DaGFuZ2UgPSBldnQgPT4ge1xyXG4gICAgY29uc3QgdmFsdWUgPSBldnQudGFyZ2V0LnZhbHVlXHJcbiAgICBjb25zdCBrZXkgPSBldnQudGFyZ2V0Lm5hbWVcclxuICAgIHNldEZvcm0ob2xkID0+ICh7XHJcbiAgICAgIC4uLm9sZCxcclxuICAgICAgW2tleV06IHZhbHVlXHJcbiAgICB9KSlcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdwdC02Jz5cclxuICAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXIgZm9udC1ib2xkIG15LTQgdGV4dC0yeGwnID5DcsOtdGljYXMgZSBTdWdlc3TDtWVzPC9oMT5cclxuICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlciBtYi02JyA+XHJcbiAgICAgICAgTyBlc3RhYmVsZWNpbWVudG8gWCBzZW1wcmUgYnVzY2EgYXRlbmRlciBtZWxob3Igc2V1cyBjbGllbmVzLjxiciAvPlxyXG4gICAgICAgIFBvciBpc3NvIGdvc3RhcmlhbW9zIGRlIG91dmlyIGEgc3VhIG9wbmnDo28uPGJyIC8+XHJcbiAgICAgIDwvcD5cclxuICAgICAgeyFzdWNlc3MgJiYgPGRpdiBjbGFzc05hbWU9J3ctMS81IG14LWF1dG8nPlxyXG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J2ZvbnQtYm9sZCc+SW5mb3JtZSBzZXUgbm9tZTo8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBjbGFzc05hbWU9J3AtNCBibG9jayBzaGFkb3cgYmctYmx1ZS0xMDAgbXktMiByb3VuZGVkJyBwbGFjZWhvbGRlcj0nTm9tZScgb25DaGFuZ2U9e29uQ2hhbmdlfSBuYW1lPSdOb21lJyB2YWx1ZT17Zm9ybS5Ob21lfSAvPlxyXG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J2ZvbnQtYm9sZCc+ZW1haWw6PC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgY2xhc3NOYW1lPSdwLTQgYmxvY2sgc2hhZG93IGJnLWJsdWUtMTAwIG15LTIgcm91bmRlZCcgcGxhY2Vob2xkZXI9J2UtbWFpbCcgb25DaGFuZ2U9e29uQ2hhbmdlfSBuYW1lPSdlbWFpbCcgdmFsdWU9e2Zvcm0uZW1haWx9IC8+XHJcbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0nZm9udC1ib2xkJz53aGF0c2FwcDo8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBjbGFzc05hbWU9J3AtNCBibG9jayBzaGFkb3cgYmctYmx1ZS0xMDAgbXktMiByb3VuZGVkJyBwbGFjZWhvbGRlcj0nd2hhdHNhcHAnIG9uQ2hhbmdlPXtvbkNoYW5nZX0gbmFtZT0nd2hhdHNhcHAnIHZhbHVlPXtmb3JtLndoYXRzYXBwfSAvPlxyXG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J2ZvbnQtYm9sZCc+U3VnZXN0w6NvOjwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIGNsYXNzTmFtZT0ncC00IGJsb2NrIHNoYWRvdyBiZy1ibHVlLTEwMCBteS0yIHJvdW5kZWQnIHBsYWNlaG9sZGVyPSdTdWdlc3TDo28nIC8+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2JnLWJsdWUtNDAwIHB4LTE2IHB5LTMgZm9udC1ib2xkIHJvdW5kZWQtbGcgc2hhZG93LWxnIGhvdmVyOnNoYWRvdycgb25DbGljaz17c2F2ZX0+U2FsdmFyPC9idXR0b24+XHJcbiAgICAgIDwvZGl2Pn1cclxuICAgICAge3N1Y2VzcyAmJiA8ZGl2IGNsYXNzTmFtZT0ndy0xLzUgbXgtYXV0byc+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPSdtYi02IHRleHQtY2VudGVyIGJnLWJsdWUtMTAwIGJvcmRlci10IGJvcmRlci1iIGJvcmRlci1ibHVlLTUwMCB0ZXh0LWJsdWUtNzAwIHB4LTQgcHktMyc+T2JyaWdhZG8gcG9yIGNvbnRyaWJ1aXIgY29tIHN1YSBpbmZvcm1hw6fDo28hPC9wPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHJldG9ybm8uc2hvd0NvdXBvbiAmJiA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1jZW50ZXIgYm9yZGVyIHAtNCc+XHJcbiAgICAgICAgICAgIFNldSBjdXBvbTogPGJyIC8+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZm9udC1ib2xkJz57cmV0b3Juby5DdXBvbX08L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICB9XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcmV0b3Juby5zaG93Q291cG9uICYmIDxkaXYgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlciBib3JkZXIgcC00Jz5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdmb250LWJvbGQnPntyZXRvcm5vLlByb21vfTwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIH1cclxuICAgICAgPC9kaXY+fVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFBlc3F1aXNhIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==