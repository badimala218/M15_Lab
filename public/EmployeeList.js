"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _EmployeeFilter = _interopRequireDefault(require("./EmployeeFilter.jsx"));
var _EmployeeAdd = _interopRequireDefault(require("./EmployeeAdd.jsx"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function EmployeeTable(props) {
  var employeeRows = props.employees.map(function (employee) {
    return /*#__PURE__*/_react["default"].createElement(EmployeeRow, {
      key: employee._id,
      employee: employee,
      deleteEmployee: props.deleteEmployee
    });
  });
  return /*#__PURE__*/_react["default"].createElement("table", {
    className: "bordered-table"
  }, /*#__PURE__*/_react["default"].createElement("thead", null, /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("th", null, "Name"), /*#__PURE__*/_react["default"].createElement("th", null, "Ext"), /*#__PURE__*/_react["default"].createElement("th", null, "Email"), /*#__PURE__*/_react["default"].createElement("th", null, "Title"), /*#__PURE__*/_react["default"].createElement("th", null, "Date"), /*#__PURE__*/_react["default"].createElement("th", null, "Currently Employed?"), /*#__PURE__*/_react["default"].createElement("th", null))), /*#__PURE__*/_react["default"].createElement("tbody", null, employeeRows));
}
function EmployeeRow(props) {
  function onDeleteClick() {
    props.deleteEmployee(props.employee._id);
  }
  return /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", null, props.employee.name), /*#__PURE__*/_react["default"].createElement("td", null, props.employee.extension), /*#__PURE__*/_react["default"].createElement("td", null, props.employee.email), /*#__PURE__*/_react["default"].createElement("td", null, props.employee.title), /*#__PURE__*/_react["default"].createElement("td", null, props.employee.dateHired.toDateString()), /*#__PURE__*/_react["default"].createElement("td", null, props.employee.currentlyEmployed ? 'Yes' : 'No'), /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement("button", {
    onClick: onDeleteClick
  }, "DELETE")));
}
var EmployeeList = exports["default"] = /*#__PURE__*/function (_React$Component) {
  function EmployeeList() {
    var _this;
    _classCallCheck(this, EmployeeList);
    _this = _callSuper(this, EmployeeList);
    _this.state = {
      employees: []
    };
    _this.createEmployee = _this.createEmployee.bind(_this);
    _this.deleteEmployee = _this.deleteEmployee.bind(_this);
    return _this;
  }
  _inherits(EmployeeList, _React$Component);
  return _createClass(EmployeeList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadData();
    }
  }, {
    key: "loadData",
    value: function loadData() {
      var _this2 = this;
      fetch('/api/employees').then(function (response) {
        return response.json();
      }).then(function (data) {
        console.log('Total count of employees:', data.count);
        data.employees.forEach(function (employee) {
          employee.dateHired = new Date(employee.dateHired);
        });
        _this2.setState({
          employees: data.employees
        });
      })["catch"](function (err) {
        console.log(err);
      });
    }
  }, {
    key: "createEmployee",
    value: function createEmployee(employee) {
      var _this3 = this;
      fetch('/api/employees', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(employee)
      }).then(function (response) {
        return response.json();
      }).then(function (newEmployee) {
        newEmployee.employee.dateHired = new Date(newEmployee.employee.dateHired);
        var newEmployees = _this3.state.employees.concat(newEmployee.employee);
        _this3.setState({
          employees: newEmployees
        });
        console.log('Total count of employees:', newEmployees.length);
      })["catch"](function (err) {
        console.log(err);
      });
    }
  }, {
    key: "deleteEmployee",
    value: function deleteEmployee(id) {
      var _this4 = this;
      fetch("/api/employees/".concat(id), {
        method: 'DELETE'
      }).then(function (response) {
        if (!response.ok) {
          console.log('Failed to delete employee.');
        } else {
          _this4.loadData();
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("h1", null, "Employee Management App"), /*#__PURE__*/_react["default"].createElement(_EmployeeFilter["default"], null), /*#__PURE__*/_react["default"].createElement("hr", null), /*#__PURE__*/_react["default"].createElement(EmployeeTable, {
        employees: this.state.employees,
        deleteEmployee: this.deleteEmployee
      }), /*#__PURE__*/_react["default"].createElement("hr", null), /*#__PURE__*/_react["default"].createElement(_EmployeeAdd["default"], {
        createEmployee: this.createEmployee
      }));
    }
  }]);
}(_react["default"].Component);