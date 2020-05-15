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
let dept = new Department("D1", "Toy");
console.log(dept);
dept.describe();
dept.addEmployee("Max");
dept.addEmployee("Nico");
dept.addEmployee("Manu");
dept.printEmployeeInfo();
// const toyCopy = {name: "Dummy", describe: dept.describe};
// toyCopy.describe();
//# sourceMappingURL=app.js.map
//# sourceMappingURL=app.js.map