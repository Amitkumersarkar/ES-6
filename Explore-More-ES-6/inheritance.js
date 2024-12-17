// inheritance in js

class Vehicle {
    constructor(name, brand) {
        this.name = name;
        this.brand = brand;
    }

    move() {
        console.log('the car can race with others car');
    }
}
class Bus extends Vehicle {
    constructor(name, price, seat, farePrice) {
        super(name, price);
        this.name;
        this.seat = seat;
        this.farePrice = farePrice;
    }
}

class Truck extends Vehicle {
    constructor(name, price, load) {
        super(name, price);
        this.load = load;
    }
}