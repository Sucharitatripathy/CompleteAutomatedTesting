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
var router_1 = require('@angular/router');
var employee_service_1 = require('../services/employee.service');
var EmployeeEditComponent = (function () {
    function EmployeeEditComponent(_employeeService, _route, _location) {
        this._employeeService = _employeeService;
        this._route = _route;
        this._location = _location;
    }
    EmployeeEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            _this._employeeService.getEmployee(+params['id'])
                .then(function (employee) { return _this.employee = employee; });
        });
    };
    EmployeeEditComponent.prototype.backToDirectory = function (event) {
        this._location.back();
    };
    EmployeeEditComponent = __decorate([
        core_1.Component({
            selector: 'employee-detail',
            templateUrl: 'app/employees/edit/employee-edit.component.html'
        }), 
        __metadata('design:paramtypes', [employee_service_1.EmployeeService, router_1.ActivatedRoute, common_1.Location])
    ], EmployeeEditComponent);
    return EmployeeEditComponent;
}());
exports.EmployeeEditComponent = EmployeeEditComponent;
//# sourceMappingURL=employee-edit.component.js.map