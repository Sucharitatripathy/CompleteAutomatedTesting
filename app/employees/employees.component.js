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
var employee_service_1 = require('./services/employee.service');
var router_1 = require('@angular/router');
var EmployeesComponent = (function () {
    function EmployeesComponent(_employeeService, _router) {
        this._employeeService = _employeeService;
        this._router = _router;
        this.title = 'Employee Directory';
    }
    EmployeesComponent.prototype.getEmployees = function () {
        var _this = this;
        this._employeeService.getEmployees()
            .then(function (employees) { return _this.employees = employees; });
    };
    EmployeesComponent.prototype.ngOnInit = function () {
        this.getEmployees();
    };
    EmployeesComponent.prototype.deleteEmployee = function (employee) {
        this._employeeService.removeEmployee(employee);
    };
    EmployeesComponent.prototype.goToEdit = function (id) {
        this._router.navigate(['/edit/' + id]);
    };
    EmployeesComponent.prototype.goToAdd = function () {
        this._router.navigate(['/add']);
    };
    EmployeesComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/employees/employees.component.html'
        }), 
        __metadata('design:paramtypes', [employee_service_1.EmployeeService, router_1.Router])
    ], EmployeesComponent);
    return EmployeesComponent;
}());
exports.EmployeesComponent = EmployeesComponent;
//# sourceMappingURL=employees.component.js.map