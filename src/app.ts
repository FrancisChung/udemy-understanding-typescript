abstract class Department {
    private employess: string[] = [];

    constructor(protected readonly id:string, public name: string) {
    }

    abstract describe(this: Department): void;

    addEmployee(employee: string) {
        this.employess.push(employee);
    }

    printEmployeeInfo() {
        console.log(`Length: ${this.employess.length}`);
        console.log(this.employess);
    }

    static CreateEmployee(name: string) {
        return {name: name}
    }
}

class ITDepartment extends Department {
    private lastAdmin : string;

    get RecentAdmin() {
        if (this.lastAdmin) {
            return this.lastAdmin
        }

        return "No Admin"; 
    }

    constructor(id: string, public admins: string[]) {
        super(id, 'IT');
        this.lastAdmin = "N/A";
    }

    addAdmin(name:string) {
        this.admins.push(name);
        this.lastAdmin = name;
    }

    describe () {
        console.log(`IT Department: ${this.id}`);
    }


}

const ITDept = new ITDepartment("IT1", ["Frank","Max"]);

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