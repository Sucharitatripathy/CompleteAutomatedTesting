"use strict";
var testing_1 = require('@angular/core/testing');
var router_1 = require('@angular/router');
var platform_browser_1 = require('@angular/platform-browser');
var employee_service_1 = require('../../app/employees/services/employee.service');
var employees_component_1 = require('../../app/employees/employees.component');
describe('Employee Component Tests', function () {
    var comp;
    var fixture;
    var routerMock;
    var employeeServiceMock;
    var serviceSpy;
    var routerSpy;
    var de;
    var el;
    beforeEach(testing_1.async(function () {
        routerMock = {
            navigate: jasmine.createSpy('navigate')
        };
        employeeServiceMock = {
            getEmployees: jasmine.createSpy('getEmployees')
                .and.returnValue(Promise.resolve([{}, {}, {}])),
            removeEmployee: jasmine.createSpy('removeEmployee')
        };
        testing_1.TestBed
            .configureTestingModule({
            declarations: [employees_component_1.EmployeesComponent],
            providers: [
                { provide: employee_service_1.EmployeeService, useValue: employeeServiceMock },
                { provide: router_1.Router, useValue: routerMock }
            ]
        })
            .compileComponents()
            .then(function () {
            fixture = testing_1.TestBed.createComponent(employees_component_1.EmployeesComponent);
            comp = fixture.componentInstance;
            de = fixture.debugElement.query(platform_browser_1.By.css('table tbody'));
            el = de.nativeElement;
            serviceSpy = testing_1.TestBed.get(employee_service_1.EmployeeService);
            routerSpy = testing_1.TestBed.get(router_1.Router);
        });
    }));
    it('should fetch the employee list on init', testing_1.async(function () {
        comp.ngOnInit();
        expect(serviceSpy.getEmployees).toHaveBeenCalled();
        fixture.detectChanges();
        fixture.whenStable()
            .then(function () {
            fixture.detectChanges();
            expect(comp.employees.length).toBe(3);
            expect(el.getElementsByTagName('tr').length).toBe(3);
        });
    }));
    it('should remove employees selected to be deleted', function () {
        comp.deleteEmployee(null);
        expect(employeeServiceMock.removeEmployee).toHaveBeenCalledTimes(1);
    });
    it('should navigate to the edit page', function () {
        comp.goToEdit(55);
        fixture.whenStable()
            .then(function () { return expect(routerSpy.navigate).toHaveBeenCalledWith(['/edit/55']); });
    });
    it('should navigate to the add a new employee page', function () {
        comp.goToAdd();
        fixture.whenStable()
            .then(function () { return expect(routerSpy.navigate).toHaveBeenCalledWith(['/add']); });
    });
});
//# sourceMappingURL=employees.spec.js.map