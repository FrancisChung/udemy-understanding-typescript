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

class ITDepartment extends Department {
    constructor(id: string, public admins: string[]) {
        super(id, 'IT');
    }
}

const ITDept = new ITDepartment("IT1", ["Frank","Max"]);
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