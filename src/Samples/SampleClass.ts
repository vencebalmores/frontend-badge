class Passenger {
    firstName:string;
    lastName:string;
    frequentFlyerNo:number;

    constructor(firstName:string, lastName:string, frequentFlyerNo:number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.frequentFlyerNo = frequentFlyerNo;
    }

    display() {
        console.log(this.firstName + " " + this.lastName + ", " + this.frequentFlyerNo);
    }

}

const getConsoleLogs = () => {
    const passenger = new Passenger('Shanmy', 'Balmores', 12345);
    passenger.display();
}

const passenger = new Passenger('Shanmy1', 'Balmores1', 12345);

for (let item in passenger) {
    // @ts-ignore
    if (passenger[item] instanceof Function) {
        continue;
    } else {
        console.log(item);
        // @ts-ignore
        console.log(passenger[item]);
    }
}

getConsoleLogs();

export {};