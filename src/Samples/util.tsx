export const getNumberVar = ():number => {
    let ninetyNine:number = 99;

    return ninetyNine + 1;
}

export const getStringVar = ():string => {
    let stringOne:string = "\"you are beautiful";
    let anotherString:string = "no matter what they say\"";

    return `${stringOne} ${anotherString}`;
}

export const getBoolVar = ():boolean => {
    return 100 > 99;
}

export const getAnyVar = ():any => {
    return {
        productNumber: 1,
        productName: 'Baby Shark',
        productActive: true
    };
};

export const getArrVal = ():Array<any> => {
    return ["AngularJS", "ReactJS", "NodeJs", 1];
};

export const getEnumVal = ():any => {
    enum Gender {
        Male,
        Female // you can specify index by using Female=1 where 1 is the index you want
    }

    return Gender;
}

export const getStringVal = ():string => {
    const name:string = 'Shanmy';
    const stmt:string = `My name is ${name}`;

    return `statement: ${stmt}, length: ${stmt.length}, charAt: ${stmt.charAt(0)}, indexOf: ${stmt.indexOf('n')}, lastIndexOf: ${stmt.lastIndexOf('n')}`;
}

export const getUnionVal = (val: string | number):any => {
    return val;
}

export const getOperVal = (value1:number, value2:number):string => {
    const added = value1 + value2;
    const subtracted = value1 - value2;
    const multiplied = value1 * value2;
    const divided = value1 / value2;

    return `Sum: ${added}, Difference: ${subtracted}, Product: ${multiplied}, Quotient: ${divided}`;
}

export const getIfElseVal = (value:number):number => {
    let numberValue:number;

    if (value > 100) {
        numberValue = 100;
    } else if (value < 100 && value > 0) {
        numberValue = 50;
    } else {
        numberValue = 0;
    }

    return numberValue;
}

export const getSwitchVal = (value:string):string => {
    let category:string;

    switch (value) {
        case 'A':
            category = 'Excellent';
            break;
        case 'B':
            category = 'Very good';
            break;
        case 'C':
            category = 'Good';
            break;
        default:
            category = 'Try again';
    }

    return category;
}

export const getWhileLoopVal = ():number => {
    let celcius:number = 96;

    while (celcius < 100) {
        celcius++;
    }

    return celcius;
}

export const validateEm = (email:string):boolean => {
    const atPosition:number = email.indexOf('@');
    const dotPosition:number = email.indexOf('.');

    return (atPosition > 0 && dotPosition > 0);
}

export const getForLoopVal = ():string => {
    let str:any = '';
    const objects:object = {name: 'shanmy', age: 26};

    // @ts-ignore
    for (let obj in objects) {
        str += obj;
    }

    return str;
}

export const destructureArr = ():string => {
    const arr:string[] = ["AngularJS", "ReactJS", "NodeJS"];
    const [a, b, c] = arr;

    return `${a}, ${b}, ${c}`;
}

export const destructureObj = ():string => {
    const objects = {name: 'shanmy', age: 26, favorite: 'sleep'};
    const {name, age, favorite} = objects;

    return `My name is ${name}, I am ${age} yrs old, my favorite is ${favorite}`;
}

export const getArrayFunctionsVal = ():string => {
    const tempArr:number[] = [20, 30, 40];

    return `toString: ${tempArr.toString()}, join: ${tempArr.join(' ')}, slice: ${tempArr.slice(2)}, splice: ${tempArr.splice(0,2, 33)}, pop: ${tempArr.pop()}`
}

export const getOptionalParamVal = (name:string, age:number, favorite?:string):string => {
    return `My name is ${name}, ${age} yrs old and my favorite is ${favorite ? favorite : 'nothing'}.`;
}

export const getDefaultParamVal = (name:string, age:number, favorite:string="anything"):string => {
    return `My name is ${name}, ${age} yrs old and my favorite is ${favorite}.`;
}

export const getRestParamsVal = (...params:any):string => {
    return `My name is ${params[0]}, ${params[1]} yrs old and my favorite is ${params[2]}.`;
}

interface Product {
    id:number;
    name:string;
    description:string;
    price?:number;
}

export const getInterfaceVal = ():string => {
    const product1:Product = {
        id: 123,
        name: 'myphone',
        description: 'quite awesome'
    }

    return `Product: ${product1.name}, Description: ${product1.description}, Price: ${product1.price ? product1.price : 'free'}`;
}

interface StudentName {
    [index:number]:string;
}

export const getInterfaceArrVal = () => {
    const studentNames:StudentName = ['shanmy', 'vence'];
}

interface StudentScore {
    [index:string]:number;
}

export const getInterfaceArrStrVal = () => {
    const studentScores:StudentScore = {};

    studentScores["John"] = 100;
    studentScores["Doe"] = 90;
}

interface Interior {
    numberOfSeats:number;
    typeOfSeat:string
}

interface Exterior {
    color:string,
    numberOfDoors:number
}

interface Car extends Interior, Exterior {
    make:string,
    model:string,
    year:number
}

const car:Car = {
    make: 'Toyota',
    model: 'FJ Cruiser',
    year: 2023,
    color: 'Gray',
    numberOfDoors: 4,
    numberOfSeats: 5,
    typeOfSeat: 'Leather'
}

export const getNumericCastingVal = (value:string):number => {
    return parseInt(value);
}

