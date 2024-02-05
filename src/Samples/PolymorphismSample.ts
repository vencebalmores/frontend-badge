class Employee {
    public firstName:string;
    public lastName:string;
    public designation:string;

    constructor(firstName:string, lastName:string, designation:string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.designation = designation;
    }

    public print():void {
        console.log('Employee details');
    }
}

class Manager extends Employee {
    constructor(firstName:string, lastName:string, designation:string) {
        super(firstName, lastName, designation);
        this.firstName = firstName;
        this.lastName = lastName;
        this.designation = designation;
    }
    public print():void {
        super.print();
        console.log(`${this.firstName} ${this.lastName} ${this.designation}`);
    }
}

class Lead extends Employee {
    constructor(firstName:string, lastName:string, designation:string) {
        super(firstName, lastName, designation);
        this.firstName = firstName;
        this.lastName = lastName;
        this.designation = designation;
    }
    public print():void {
        super.print();
        console.log(`${this.firstName} ${this.lastName} ${this.designation}`);
    }
}

class Developer extends Employee {
    constructor(firstName:string, lastName:string, designation:string) {
        super(firstName, lastName, designation);
        this.firstName = firstName;
        this.lastName = lastName;
        this.designation = designation;
    }
    public print():void {
        super.print();
        console.log(`${this.firstName} ${this.lastName} ${this.designation}`);
    }
}

let employees:Employee[] = [new Manager('Shan', 'My', 'Manager'), new Lead('Shan', 'Vence', 'Lead'), new Developer('Shanmy', 'Vence', 'Developer')];
for (let employee of employees) {
    employee.print();
}


export {};