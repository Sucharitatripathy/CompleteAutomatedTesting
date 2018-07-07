"use strict";
var testing_1 = require('@angular/core/testing');
var forms_1 = require('@angular/forms');
var common_1 = require('@angular/common');
var testing_2 = require('@angular/router/testing');
var router_1 = require('@angular/router');
var employee_service_1 = require('../../../app/employees/services/employee.service');
var employee_add_component_1 = require('../../../app/employees/add/employee-add.component');
describe('Employee Add Component Tests', function () {
    var comp;
    var fixture;
    var employeeServiceMock;
    var routerMock;
    var locationMock;
    var locationSpy;
    beforeEach(testing_1.async(function () {
        routerMock = {
            navigate: jasmine.createSpy('navigate')
        };
        locationMock = {
            back: jasmine.createSpy('back')
        };
        employeeServiceMock = {
            addEmployee: jasmine.createSpy('addEmployee')
                .and.returnValue(Promise.resolve())
        };
        testing_1.TestBed
            .configureTestingModule({
            imports: [
                testing_2.RouterTestingModule.withRoutes([]),
                forms_1.FormsModule
            ],
            declarations: [employee_add_component_1.EmployeeAddComponent],
            providers: [
                { provide: employee_service_1.EmployeeService, useValue: employeeServiceMock },
                { provide: common_1.Location, useValue: locationMock },
                { provide: router_1.Router, useValue: routerMock }
            ]
        })
            .compileComponents()
            .then(function () {
            fixture = testing_1.TestBed.createComponent(employee_add_component_1.EmployeeAddComponent);
            comp = fixture.componentInstance;
            locationSpy = testing_1.TestBed.get(common_1.Location);
        });
    }));
    it('should create a new employee', function () {
        var employeeCount;
        var newEmployee;
        comp.ngOnInit();
        comp.saveEmployee(null);
        expect(employeeServiceMock.addEmployee).toHaveBeenCalledTimes(1);
        fixture.detectChanges();
        fixture.whenStable()
            .then(function () { return expect(locationSpy.back).toHaveBeenCalled(); });
    });
    it('should navigate to the employee list page on cancel', function () {
        comp.cancelAdd(null);
        fixture.whenStable()
            .then(function () { return expect(locationSpy.back).toHaveBeenCalled(); });
    });
});
//# sourceMappingURL=employee-add.spec.js.map