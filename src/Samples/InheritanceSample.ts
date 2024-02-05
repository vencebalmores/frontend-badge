class BMW {
    make:string;
    model:string;
    year:string;

    constructor(make:string, model:string, year:string) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    commonEngineFunc() {
        console.log('Common functionality');
    }

    start() {
        console.log('Start');
    }

    stop() {
        console.log('Stop');
    }
}

class ThreeSeries extends BMW {
    cruiseControlEnabled:boolean;

    constructor(make:string, model:string, year:string, cruiseControlEnabled:boolean) {
        super(make, model, year);
        this.cruiseControlEnabled = cruiseControlEnabled;
    }

    cruiseControl() {
        this.cruiseControlEnabled = true;
        console.log('Cruising is enabled');
    }

    start() { //override method
        console.log('Remote Start');
    }

    stop() { //override method
        console.log('Remote Stop');
    }
}

class FiveSeries extends BMW {
    parkingAssistEnabled:boolean;

    constructor(make:string, model:string, year:string, parkingAssistEnabled:boolean) {
        super(make, model, year);
        this.parkingAssistEnabled = parkingAssistEnabled;
    }

    parkingAssist() {
        this.parkingAssistEnabled = true;
        console.log('Parking Assisted');
    }
}

const threeSeries = new ThreeSeries('BMW', '328i', '2019', false);

console.log(threeSeries.cruiseControlEnabled);
console.log(threeSeries.make);
console.log(threeSeries.model);
console.log(threeSeries.year);

threeSeries.commonEngineFunc();
threeSeries.start();
threeSeries.stop();
threeSeries.cruiseControl();

const fiveSeries = new FiveSeries('BMW', '535', '2019', true);

console.log(fiveSeries.parkingAssistEnabled);
console.log(fiveSeries.make);
console.log(fiveSeries.model);
console.log(fiveSeries.year);

fiveSeries.commonEngineFunc();
fiveSeries.start();
fiveSeries.stop();
fiveSeries.parkingAssist();

export {};