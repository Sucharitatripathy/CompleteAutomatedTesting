"use strict";
var testing_1 = require('@angular/core/testing');
var common_1 = require('@angular/common');
var router_1 = require('@angular/router');
var forms_1 = require('@angular/forms');
var testing_2 = require('@angular/router/testing');
var employee_service_1 = require('../../../app/employees/services/employee.service');
var employee_edit_component_1 = require('../../../app/employees/edit/employee-edit.component');
var employee_1 = require('../../../app/employees/models/employee');
describe('Employee Edit Component Tests', function () {
    var comp;
    var fixture;
    var employeeServiceMock;
    var routerMock;
    var employeeMock;
    var locationMock;
    var locationSpy;
    beforeEach(testing_1.async(function () {
        employeeMock = new employee_1.Employee();
        employeeMock.firstName = 'John';
        employeeMock.lastName = 'Doe';
        employeeMock.phone = '111-222-3344';
        employeeMock.email = 'jdoe@test.com';
        routerMock = {
            navigate: jasmine.createSpy('navigate')
        };
        locationMock = {
            back: jasmine.createSpy('back')
        };
        employeeServiceMock = {
            getEmployee: jasmine.createSpy('getEmployee')
                .and.returnValue(Promise.resolve(employeeMock))
        };
        testing_1.TestBed
            .configureTestingModule({
            imports: [
                testing_2.RouterTestingModule.withRoutes([]),
                forms_1.FormsModule
            ],
            declarations: [employee_edit_component_1.EmployeeEditComponent],
            providers: [
                { provide: employee_service_1.EmployeeService, useValue: employeeServiceMock },
                { provide: common_1.Location, useValue: locationMock },
                { provide: router_1.Router, useValue: routerMock },
                {
                    provide: router_1.ActivatedRoute,
                    useValue: {
                        params: {
                            subscribe: function (fn) { return fn({
                                id: 1
                            }); }
                        }
                    }
                }
            ]
        })
            .compileComponents()
            .then(function () {
            fixture = testing_1.TestBed.createComponent(employee_edit_component_1.EmployeeEditComponent);
            comp = fixture.componentInstance;
            locationSpy = testing_1.TestBed.get(common_1.Location);
        });
    }));
    it('should fetch an employee object on init', testing_1.async(function () {
        comp.ngOnInit();
        fixture.whenStable()
            .then(function () {
            expect(comp.employee).toBeDefined();
            expect(comp.employee.firstName).toBe('John');
            expect(comp.employee.lastName).toBe('Doe');
        });
    }));
    it('should navigate to the employee list page', function () {
        comp.backToDirectory({});
        fixture.whenStable()
            .then(function () { return expect(locationSpy.back).toHaveBeenCalled(); });
    });
});
//# sourceMappingURL=employee-edit.spec.js.map