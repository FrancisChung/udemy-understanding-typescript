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
}
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
}
const ITDept = new ITDepartment("IT1", ["Frank", "Max"]);
let dept = new Department("D1", "Toy");
console.log(dept);
ITDept.describe();
ITDept.addEmployee("Max");
ITDept.addEmployee("Nico");
ITDept.addEmployee("Manu");
ITDept.printEmployeeInfo();
// const toyCopy = {name: "Dummy", describe: dept.describe};
// toyCopy.describe();
//# sourceMappingURL=app.js.map
//# sourceMappingURL=app.js.map