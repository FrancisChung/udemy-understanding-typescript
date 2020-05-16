"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employess = [];
    }
    describe() {
        console.log(`Department: ${this.id} ${this.name}`);
    }
    addEmployee(employee) {
        this.employess.push(employee);
    }
    printEmployeeInfo() {
        console.log(`Length: ${this.employess.length}`);
        console.log(this.employess);
    }
    static CreateEmployee(name) {
        return { name: name };
    }
}
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
        this.lastAdmin = "N/A";
    }
    get RecentAdmin() {
        if (this.lastAdmin) {
            return this.lastAdmin;
        }
        return "No Admin";
    }
    addAdmin(name) {
        this.admins.push(name);
        this.lastAdmin = name;
    }
}
const ITDept = new ITDepartment("IT1", ["Frank", "Max"]);
let dept = new Department("D1", "Toy");
console.log(dept);
ITDept.describe();
ITDept.addEmployee("Max");
ITDept.addEmployee("Nico");
ITDept.addEmployee("Manu");
ITDept.addEmployee("Stef");
ITDept.printEmployeeInfo();
const employee1 = Department.CreateEmployee("Sam");
console.log(employee1);
// const toyCopy = {name: "Dummy", describe: dept.describe};
// toyCopy.describe();
//# sourceMappingURL=app.js.map
//# sourceMappingURL=app.js.map