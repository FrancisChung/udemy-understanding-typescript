"use strict";
class Department {
    constructor(n) {
        this.name = n;
    }
    describe() {
        console.log(`Department: ${this.name}`);
    }
}
let dept = new Department("Toy");
console.log(dept);
dept.describe();
const toyCopy = { name: "Dummy", describe: dept.describe };
toyCopy.describe();
//# sourceMappingURL=app.js.map
//# sourceMappingURL=app.js.map