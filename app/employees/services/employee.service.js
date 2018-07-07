"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var employee_data_1 = require('../data/employee-data');
var EmployeeService = (function () {
    function EmployeeService() {
        this.NEW_ID = 16;
        this.data = employee_data_1.EMPLOYEES;
    }
    EmployeeService.prototype.getEmployees = function () {
        return Promise.resolve(this.data);
    };
    EmployeeService.prototype.getEmployee = function (id) {
        return Promise.resolve(this.data).then(function (employees) { return employees.filter(function (employee) { return employee.id === id; })[0]; });
    };
    EmployeeService.prototype.addEmployee = function (employee) {
        var today = new Date();
        var month = today.getMonth() + 1;
        var date = today.getDate();
        var year = today.getFullYear();
        if (!employee.id) {
            employee.id = this.NEW_ID++;
        }
        if (!employee.createDate) {
            employee.createDate = month + '/' + date + '/' + year;
        }
        return Promise.resolve(this.data)
            .then(function (employees) { return employees.push(employee); });
    };
    EmployeeService.prototype.removeEmployee = function (employee) {
        var index = this.data.indexOf(employee);
        return Promise.resolve(this.data)
            .then(function (employees) { return employees.splice(index, 1); });
    };
    EmployeeService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], EmployeeService);
    return EmployeeService;
}());
exports.EmployeeService = EmployeeService;
//# sourceMappingURL=employee.service.js.map