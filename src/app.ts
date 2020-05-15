class Department {
    private employess: string[] = [];

    constructor(private readonly id:string, public name: string) {
    }

    describe(this: Department) {
        console.log(`Department: ${this.id} ${this.name}`);
    }

    addEmployee(employee: string) {
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