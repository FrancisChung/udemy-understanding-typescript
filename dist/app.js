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
//# sourceMappingURL=app.js.map