const initialEmployees = [{
  id: 1,
  name: 'Kokoro Kringle',
  ext: '4442',
  email: 'koko@employees.co',
  title: 'CEO',
  dateHired: new Date('2018-08-15'),
  isEmployed: true
}, {
  id: 2,
  name: 'Tomo Row',
  ext: '4441',
  email: 'tomo@employees.co',
  title: 'Acquisitions Manager',
  dateHired: new Date('2026-08-15'),
  isEmployed: true
}];
class EmployeeFilter extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", null, "This is a placeholder for employee filter.");
  }
}
class EmployeeAdd extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const form = document.forms.employeeAdd;
    const employee = {
      name: form.name.value,
      ext: form.ext.value,
      email: form.email.value,
      title: form.title.value,
      dateHired: new Date(),
      isEmployed: true
    };
    this.props.createEmployee(employee);
    form.name.value = '';
    form.ext.value = '';
    form.email.value = '';
    form.title.value = '';
  }
  render() {
    return /*#__PURE__*/React.createElement("form", {
      name: "employeeAdd",
      onSubmit: this.handleSubmit
    }, "Name: ", /*#__PURE__*/React.createElement("input", {
      type: "text",
      name: "name"
    }), /*#__PURE__*/React.createElement("br", null), "Extension: ", /*#__PURE__*/React.createElement("input", {
      type: "text",
      name: "ext"
    }), /*#__PURE__*/React.createElement("br", null), "Email: ", /*#__PURE__*/React.createElement("input", {
      type: "text",
      name: "email"
    }), /*#__PURE__*/React.createElement("br", null), "Title ", /*#__PURE__*/React.createElement("input", {
      type: "text",
      name: "title"
    }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("button", null, "Add"));
  }
}
function EmployeeTable(props) {
  const employeeRows = props.employees.map(employee => /*#__PURE__*/React.createElement(EmployeeRow, {
    key: employee.id,
    employee: employee
  }));
  return /*#__PURE__*/React.createElement("table", {
    className: "bordered-table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "ID"), /*#__PURE__*/React.createElement("th", null, "Name"), /*#__PURE__*/React.createElement("th", null, "Ext"), /*#__PURE__*/React.createElement("th", null, "Email"), /*#__PURE__*/React.createElement("th", null, "Title"), /*#__PURE__*/React.createElement("th", null, "Date"), /*#__PURE__*/React.createElement("th", null, "Employed"))), /*#__PURE__*/React.createElement("tbody", null, employeeRows));
}
function EmployeeRow(props) {
  const employee = props.employee;
  return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, employee.id), /*#__PURE__*/React.createElement("td", null, employee.name), /*#__PURE__*/React.createElement("td", null, employee.ext), /*#__PURE__*/React.createElement("td", null, employee.email), /*#__PURE__*/React.createElement("td", null, employee.title), /*#__PURE__*/React.createElement("td", null, employee.dateHired.toDateString()), /*#__PURE__*/React.createElement("td", null, employee.isEmployed ? 'Yes' : 'No'));
}
class EmployeeList extends React.Component {
  constructor() {
    super();
    this.state = {
      employees: []
    };
    this.createEmployee = this.createEmployee.bind(this);
  }
  componentDidMount() {
    this.loadData();
  }
  loadData() {
    setTimeout(() => {
      this.setState({
        employees: initialEmployees
      });
    }, 500);
  }
  createEmployee(employee) {
    employee.id = this.state.employees.length + 1;
    const newEmployeeList = this.state.employees.slice();
    newEmployeeList.push(employee);
    this.setState({
      employees: newEmployeeList
    });
  }
  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Employee Management App"), /*#__PURE__*/React.createElement(EmployeeFilter, null), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(EmployeeTable, {
      employees: this.state.employees
    }), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(EmployeeAdd, {
      createEmployee: this.createEmployee.bind(this)
    }));
  }
}
const contentNode = document.getElementById('content');
ReactDOM.render(/*#__PURE__*/React.createElement(EmployeeList, null), contentNode);