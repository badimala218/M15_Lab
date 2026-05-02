"use strict";

var _react = _interopRequireDefault(require("react"));
var _reactDom = _interopRequireDefault(require("react-dom"));
var _client = require("react-dom/client");
var _EmployeeList = _interopRequireDefault(require("./EmployeeList.jsx"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var root = (0, _client.createRoot)(document.getElementById('content'));
root.render(/*#__PURE__*/_react["default"].createElement(_react["default"].StrictMode, null, /*#__PURE__*/_react["default"].createElement(_EmployeeList["default"], null)));