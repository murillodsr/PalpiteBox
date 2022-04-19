webpackHotUpdate("static\\development\\pages\\pesquisa.js",{

/***/ "./pages/pesquisa.js":
/*!***************************!*\
  !*** ./pages/pesquisa.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_PageTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/PageTitle */ "./components/PageTitle.js");




var _this = undefined,
    _jsxFileName = "E:\\dev\\projeto1DevPleno\\pages\\pesquisa.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var Pesquisa = function Pesquisa() {
  _s();

  //form controlado mais próximo do virtual DOM
  //form não controlado mais próximo do DOM
  //Form Controlado através do state
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    Nome: '',
    Email: '',
    Whatsapp: '',
    Nota: 0
  }),
      form = _useState[0],
      setForm = _useState[1];

  var notas = [0, 1, 2, 3, 4, 5]; //validação

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      sucess = _useState2[0],
      setSuccess = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({}),
      retorno = _useState3[0],
      setRetorno = _useState3[1];

  var save = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var response, data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return fetch('/api/save', {
                method: 'POST',
                body: JSON.stringify(form)
              });

            case 3:
              response = _context.sent;
              _context.next = 6;
              return response.json();

            case 6:
              data = _context.sent;
              setSuccess(true);
              setRetorno(data);
              _context.next = 13;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](0);

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 11]]);
    }));

    return function save() {
      return _ref.apply(this, arguments);
    };
  }(); //processo onde informação digitada e passada para a planilha.


  var onChange = function onChange(evt) {
    var value = evt.target.value;
    var key = evt.target.name;
    setForm(function (old) {
      return _objectSpread(_objectSpread({}, old), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, key, value));
    });
  };

  return __jsx("div", {
    className: "pt-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 5
    }
  }, __jsx(_components_PageTitle__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Pesquisa",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }), __jsx("h1", {
    className: "text-center font-bold my-4 text-2xl",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, "Cr\xEDticas e Sugest\xF5es"), __jsx("p", {
    className: "text-center mb-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }, "O estabelecimento X sempre busca atender melhor seus clienes.", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 70
    }
  }), "Por isso gostariamos de ouvir a sua opni\xE3o.", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 52
    }
  })), !sucess && __jsx("div", {
    className: "w-1/5 mx-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 19
    }
  }, __jsx("label", {
    className: "font-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, "Informe seu nome:"), __jsx("input", {
    type: "text",
    className: "p-4 block shadow bg-blue-100 my-2 rounded",
    placeholder: "Nome",
    onChange: onChange,
    name: "Nome",
    value: form.Nome,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }), __jsx("label", {
    className: "font-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, "email:"), __jsx("input", {
    type: "text",
    className: "p-4 block shadow bg-blue-100 my-2 rounded",
    placeholder: "e-mail",
    onChange: onChange,
    name: "Email",
    value: form.Email,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }), __jsx("label", {
    className: "font-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }, "whatsapp:"), __jsx("input", {
    type: "text",
    className: "p-4 block shadow bg-blue-100 my-2 rounded",
    placeholder: "whatsapp",
    onChange: onChange,
    name: "Whatsapp",
    value: form.Whatsapp,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }), __jsx("label", {
    className: "font-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }, "Sua nota:"), __jsx("div", {
    className: "flex py-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }, notas.map(function (nota) {
    return __jsx("label", {
      className: "block w-1/6 text-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 21
      }
    }, nota, __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 21
      }
    }), __jsx("input", {
      type: "radio",
      name: "Nota",
      value: nota,
      onChange: onChange,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 15
      }
    }));
  })), __jsx("label", {
    className: "font-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }, "Sugest\xE3o:"), __jsx("input", {
    type: "text",
    className: "p-4 block shadow bg-blue-100 my-2 rounded",
    placeholder: "Sugest\xE3o",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }), __jsx("button", {
    className: "bg-blue-400 px-16 py-3 font-bold rounded-lg shadow-lg hover:shadow",
    onClick: save,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  }, "Salvar")), sucess && __jsx("div", {
    className: "w-1/5 mx-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 18
    }
  }, __jsx("p", {
    className: "mb-6 text-center bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }
  }, "Obrigado por contribuir com sua informa\xE7\xE3o!"), retorno.showCoupon && __jsx("div", {
    className: "text-center border p-4 mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 33
    }
  }, "Seu cupom: ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 24
    }
  }), __jsx("span", {
    className: "font-bold text-2xl",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }
  }, retorno.Cupom)), retorno.showCoupon && __jsx("div", {
    className: "text-center border p-4 mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 33
    }
  }, __jsx("span", {
    className: "font-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }
  }, retorno.Promo), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 13
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 19
    }
  }), __jsx("span", {
    className: "italic",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }
  }, "Tire um print ou foto desta tela e mostre no estabelecimento!"))));
};

_s(Pesquisa, "5jU6gzJPb9GHcEE8LBow+hCjoq8=");

_c = Pesquisa;
/* harmony default export */ __webpack_exports__["default"] = (Pesquisa);

var _c;

$RefreshReg$(_c, "Pesquisa");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wZXNxdWlzYS5qcyJdLCJuYW1lcyI6WyJQZXNxdWlzYSIsInVzZVN0YXRlIiwiTm9tZSIsIkVtYWlsIiwiV2hhdHNhcHAiLCJOb3RhIiwiZm9ybSIsInNldEZvcm0iLCJub3RhcyIsInN1Y2VzcyIsInNldFN1Y2Nlc3MiLCJyZXRvcm5vIiwic2V0UmV0b3JubyIsInNhdmUiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsIm9uQ2hhbmdlIiwiZXZ0IiwidmFsdWUiLCJ0YXJnZXQiLCJrZXkiLCJuYW1lIiwib2xkIiwibWFwIiwibm90YSIsInNob3dDb3Vwb24iLCJDdXBvbSIsIlByb21vIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBR0EsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUNyQjtBQUNBO0FBRUE7QUFKcUIsa0JBS0dDLHNEQUFRLENBQUM7QUFDL0JDLFFBQUksRUFBRSxFQUR5QjtBQUUvQkMsU0FBSyxFQUFFLEVBRndCO0FBRy9CQyxZQUFRLEVBQUUsRUFIcUI7QUFJL0JDLFFBQUksRUFBRTtBQUp5QixHQUFELENBTFg7QUFBQSxNQUtkQyxJQUxjO0FBQUEsTUFLUkMsT0FMUTs7QUFXckIsTUFBTUMsS0FBSyxHQUFHLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsQ0FBZCxDQVhxQixDQWFyQjs7QUFicUIsbUJBY1FQLHNEQUFRLENBQUMsS0FBRCxDQWRoQjtBQUFBLE1BY2RRLE1BZGM7QUFBQSxNQWNOQyxVQWRNOztBQUFBLG1CQWVTVCxzREFBUSxDQUFDLEVBQUQsQ0FmakI7QUFBQSxNQWVkVSxPQWZjO0FBQUEsTUFlTEMsVUFmSzs7QUFnQnJCLE1BQU1DLElBQUk7QUFBQSxnTUFB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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseURBRFMsRUFHUEUsT0FBTyxDQUFDb0IsVUFBUixJQUFzQjtBQUFLLGFBQVMsRUFBQyw2QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUNUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEUyxFQUVwQjtBQUFNLGFBQVMsRUFBQyxvQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFzQ3BCLE9BQU8sQ0FBQ3FCLEtBQTlDLENBRm9CLENBSGYsRUFTUHJCLE9BQU8sQ0FBQ29CLFVBQVIsSUFBc0I7QUFBSyxhQUFTLEVBQUMsNkJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNwQjtBQUFNLGFBQVMsRUFBQyxXQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTZCcEIsT0FBTyxDQUFDc0IsS0FBckMsQ0FEb0IsRUFFcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZvQixFQUVkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGYyxFQUdwQjtBQUFNLGFBQVMsRUFBQyxRQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFFQUhvQixDQVRmLENBN0JiLENBREY7QUFnREQsQ0F2RkQ7O0dBQU1qQyxROztLQUFBQSxRO0FBd0ZTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xccGVzcXVpc2EuanMuZDE2ZTJhYTAxYWIxNWQ5ZjU3NDIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUGFnZVRpdGxlIGZyb20gJy4uL2NvbXBvbmVudHMvUGFnZVRpdGxlJ1xyXG5cclxuXHJcbmNvbnN0IFBlc3F1aXNhID0gKCkgPT4ge1xyXG4gIC8vZm9ybSBjb250cm9sYWRvIG1haXMgcHLDs3hpbW8gZG8gdmlydHVhbCBET01cclxuICAvL2Zvcm0gbsOjbyBjb250cm9sYWRvIG1haXMgcHLDs3hpbW8gZG8gRE9NXHJcblxyXG4gIC8vRm9ybSBDb250cm9sYWRvIGF0cmF2w6lzIGRvIHN0YXRlXHJcbiAgY29uc3QgW2Zvcm0sIHNldEZvcm1dID0gdXNlU3RhdGUoe1xyXG4gICAgTm9tZTogJycsXHJcbiAgICBFbWFpbDogJycsXHJcbiAgICBXaGF0c2FwcDogJycsXHJcbiAgICBOb3RhOiAwXHJcbiAgfSlcclxuICBjb25zdCBub3RhcyA9IFswLCAxLCAyLCAzLCA0LCA1XVxyXG5cclxuICAvL3ZhbGlkYcOnw6NvXHJcbiAgY29uc3QgW3N1Y2Vzcywgc2V0U3VjY2Vzc10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbcmV0b3Jubywgc2V0UmV0b3Jub10gPSB1c2VTdGF0ZSh7fSlcclxuICBjb25zdCBzYXZlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9zYXZlJywge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGZvcm0pXHJcbiAgICAgIH0pXHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuICAgICAgc2V0U3VjY2Vzcyh0cnVlKVxyXG4gICAgICBzZXRSZXRvcm5vKGRhdGEpXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICAvL3Byb2Nlc3NvIG9uZGUgaW5mb3JtYcOnw6NvIGRpZ2l0YWRhIGUgcGFzc2FkYSBwYXJhIGEgcGxhbmlsaGEuXHJcbiAgY29uc3Qgb25DaGFuZ2UgPSBldnQgPT4ge1xyXG4gICAgY29uc3QgdmFsdWUgPSBldnQudGFyZ2V0LnZhbHVlXHJcbiAgICBjb25zdCBrZXkgPSBldnQudGFyZ2V0Lm5hbWVcclxuICAgIHNldEZvcm0ob2xkID0+ICh7XHJcbiAgICAgIC4uLm9sZCxcclxuICAgICAgW2tleV06IHZhbHVlXHJcbiAgICB9KSlcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdwdC02Jz5cclxuICAgICAgPFBhZ2VUaXRsZSB0aXRsZT0nUGVzcXVpc2EnIC8+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQtY2VudGVyIGZvbnQtYm9sZCBteS00IHRleHQtMnhsJyA+Q3LDrXRpY2FzIGUgU3VnZXN0w7VlczwvaDE+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXIgbWItNicgPlxyXG4gICAgICAgIE8gZXN0YWJlbGVjaW1lbnRvIFggc2VtcHJlIGJ1c2NhIGF0ZW5kZXIgbWVsaG9yIHNldXMgY2xpZW5lcy48YnIgLz5cclxuICAgICAgICBQb3IgaXNzbyBnb3N0YXJpYW1vcyBkZSBvdXZpciBhIHN1YSBvcG5pw6NvLjxiciAvPlxyXG4gICAgICA8L3A+XHJcbiAgICAgIHshc3VjZXNzICYmIDxkaXYgY2xhc3NOYW1lPSd3LTEvNSBteC1hdXRvJz5cclxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdmb250LWJvbGQnPkluZm9ybWUgc2V1IG5vbWU6PC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgY2xhc3NOYW1lPSdwLTQgYmxvY2sgc2hhZG93IGJnLWJsdWUtMTAwIG15LTIgcm91bmRlZCcgcGxhY2Vob2xkZXI9J05vbWUnIG9uQ2hhbmdlPXtvbkNoYW5nZX0gbmFtZT0nTm9tZScgdmFsdWU9e2Zvcm0uTm9tZX0gLz5cclxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdmb250LWJvbGQnPmVtYWlsOjwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIGNsYXNzTmFtZT0ncC00IGJsb2NrIHNoYWRvdyBiZy1ibHVlLTEwMCBteS0yIHJvdW5kZWQnIHBsYWNlaG9sZGVyPSdlLW1haWwnIG9uQ2hhbmdlPXtvbkNoYW5nZX0gbmFtZT0nRW1haWwnIHZhbHVlPXtmb3JtLkVtYWlsfSAvPlxyXG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J2ZvbnQtYm9sZCc+d2hhdHNhcHA6PC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgY2xhc3NOYW1lPSdwLTQgYmxvY2sgc2hhZG93IGJnLWJsdWUtMTAwIG15LTIgcm91bmRlZCcgcGxhY2Vob2xkZXI9J3doYXRzYXBwJyBvbkNoYW5nZT17b25DaGFuZ2V9IG5hbWU9J1doYXRzYXBwJyB2YWx1ZT17Zm9ybS5XaGF0c2FwcH0gLz5cclxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdmb250LWJvbGQnPlN1YSBub3RhOjwvbGFiZWw+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggcHktNic+XHJcbiAgICAgICAgICB7bm90YXMubWFwKG5vdGEgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKDxsYWJlbCBjbGFzc05hbWU9J2Jsb2NrIHctMS82IHRleHQtY2VudGVyJz5cclxuICAgICAgICAgICAgICB7bm90YX08YnIgLz5cclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0ncmFkaW8nIG5hbWU9J05vdGEnIHZhbHVlPXtub3RhfSBvbkNoYW5nZT17b25DaGFuZ2V9IC8+XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0nZm9udC1ib2xkJz5TdWdlc3TDo286PC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgY2xhc3NOYW1lPSdwLTQgYmxvY2sgc2hhZG93IGJnLWJsdWUtMTAwIG15LTIgcm91bmRlZCcgcGxhY2Vob2xkZXI9J1N1Z2VzdMOjbycgLz5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYmctYmx1ZS00MDAgcHgtMTYgcHktMyBmb250LWJvbGQgcm91bmRlZC1sZyBzaGFkb3ctbGcgaG92ZXI6c2hhZG93JyBvbkNsaWNrPXtzYXZlfT5TYWx2YXI8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+fVxyXG4gICAgICB7c3VjZXNzICYmIDxkaXYgY2xhc3NOYW1lPSd3LTEvNSBteC1hdXRvJz5cclxuICAgICAgICA8cCBjbGFzc05hbWU9J21iLTYgdGV4dC1jZW50ZXIgYmctYmx1ZS0xMDAgYm9yZGVyLXQgYm9yZGVyLWIgYm9yZGVyLWJsdWUtNTAwIHRleHQtYmx1ZS03MDAgcHgtNCBweS0zJz5PYnJpZ2FkbyBwb3IgY29udHJpYnVpciBjb20gc3VhIGluZm9ybWHDp8OjbyE8L3A+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcmV0b3Juby5zaG93Q291cG9uICYmIDxkaXYgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlciBib3JkZXIgcC00IG1iLTQnPlxyXG4gICAgICAgICAgICBTZXUgY3Vwb206IDxiciAvPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2ZvbnQtYm9sZCB0ZXh0LTJ4bCc+e3JldG9ybm8uQ3Vwb219PC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHJldG9ybm8uc2hvd0NvdXBvbiAmJiA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1jZW50ZXIgYm9yZGVyIHAtNCBtYi00Jz5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdmb250LWJvbGQnPntyZXRvcm5vLlByb21vfTwvc3Bhbj5cclxuICAgICAgICAgICAgPGJyIC8+PGJyIC8+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0naXRhbGljJz5UaXJlIHVtIHByaW50IG91IGZvdG8gZGVzdGEgdGVsYSBlIG1vc3RyZSBubyBlc3RhYmVsZWNpbWVudG8hPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgfVxyXG4gICAgICA8L2Rpdj59XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgUGVzcXVpc2EiXSwic291cmNlUm9vdCI6IiJ9