class Department {
    name: string;

    constructor(n: string) {
        this.name = n;
    }

    describe(this: Department) {
        console.log(`Department: ${this.name}`);
    }
}
let dept = new Department("Toy");
console.log(dept);

dept.describe();

const toyCopy = {name: "Dummy", describe: dept.describe};
toyCopy.describe();


//# sourceMappingURL=app.js.map