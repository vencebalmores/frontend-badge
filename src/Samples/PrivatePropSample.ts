class Student {
    private _name:string;
    static age:number=26;

    constructor(_name:string, age:number) {
        this._name = _name;
        Student.age = age;
    }


    display() {
        console.log(this._name);
    }

    get name():string {
        return this._name;
    }

    set name(name:string) {
        this._name = name;
    }
}

const student = new Student('Shanmy', 27);
student.name = "Shanmy";
console.log(student.name);
console.log(Student.age);

export {}