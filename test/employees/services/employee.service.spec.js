"use strict";
var employee_1 = require('../../../app/employees/models/employee');
var employee_service_1 = require('../../../app/employees/services/employee.service');
var mock_data_1 = require('../../../app/employees/data/mock-data');
describe('Employee Service Tests', function () {
    var employeeService = new employee_service_1.EmployeeService();
    employeeService.data = mock_data_1.MOCK_DATA;
    it('returns a list of employees', function () {
        employeeService.getEmployees()
            .then(function (employees) {
            expect(employees.length).toBeDefined();
            expect(employees.length).toBe(3);
        });
    });
    it('returns a single employee by id', function () {
        var testEmployee = function (employee) {
            expect(employee).toBeDefined();
            expect(employee.firstName).toBe('Test2');
            expect(employee.lastName).toBe('Employee2');
        };
        employeeService.getEmployee(2)
            .then(testEmployee);
    });
    it('add a new employee', function () {
        var newEmployee = new employee_1.Employee();
        var testNewEmployee = function (employee) {
            expect(employee).toBeDefined();
            expect(employee.firstName).toBe('John');
            expect(employee.lastName).toBe('Doe');
        };
        newEmployee.id = 222;
        newEmployee.firstName = 'John';
        newEmployee.lastName = 'Doe';
        employeeService.addEmployee(newEmployee)
            .then(function () { return employeeService.getEmployee(222).then(testNewEmployee); });
    });
    it('removes an employee', function () {
        var employeeCount = 0;
        var postRemoveCallback = function () {
            return employeeService.getEmployees()
                .then(function (postEmployees) { return expect(postEmployees.length).toBe(employeeCount - 1); });
        };
        var getEmployeeCallback = function (employee) {
            return employeeService.removeEmployee(employee)
                .then(postRemoveCallback);
        };
        var preRemoveCallback = function (preEmployees) {
            employeeCount = preEmployees.length;
            employeeService.getEmployee(1)
                .then(getEmployeeCallback);
        };
        employeeService.getEmployees()
            .then(preRemoveCallback);
    });
});
//# sourceMappingURL=employee.service.spec.js.map