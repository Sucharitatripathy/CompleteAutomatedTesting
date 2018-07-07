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
var common_1 = require('@angular/common');
var employee_1 = require('../models/employee');
var employee_service_1 = require('../services/employee.service');
var EmployeeAddComponent = (function () {
    function EmployeeAddComponent(_employeeService, _location) {
        this._employeeService = _employeeService;
        this._location = _location;
        this.title = 'Add New Employee';
    }
    EmployeeAddComponent.prototype.ngOnInit = function () {
        this.newEmployee = new employee_1.Employee();
    };
    EmployeeAddComponent.prototype.saveEmployee = function (event) {
        var _this = this;
        this._employeeService.addEmployee(this.newEmployee)
            .then(function () {
            _this._location.back();
        });
    };
    EmployeeAddComponent.prototype.cancelAdd = function (event) {
        this._location.back();
    };
    EmployeeAddComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/employees/add/employee-add.component.html'
        }), 
        __metadata('design:paramtypes', [employee_service_1.EmployeeService, common_1.Location])
    ], EmployeeAddComponent);
    return EmployeeAddComponent;
}());
exports.EmployeeAddComponent = EmployeeAddComponent;
//# sourceMappingURL=employee-add.component.js.map