//we name the class
class User {
    //we call the constructor function and create parameters
    //these are the values we want passed in and stored in the object
    constructor(first, last, e) {
        //on the right side, we have the values getting passed in as arguments when object is created
        this.f = first;
        this.l = last;
        this.email = e;
        //left side, we have the actual keys that store the incoming arguments as values for "this" specific object
    }
}

let userOne = new User("Paul", "O'Connor", "poconnor@elevenfifty.org");
console.log(userOne.first); //undefined
console.log(userOne.f); //Paul
console.log(userOne.l); //O'Connor
console.log(userOne); //whole User object



//Practice
class Player {
    constructor(name, number, avgPts) {
        this.n = name;
        this.num = number;
        this.pts = avgPts;
    }

    status() {
        console.log(`${this.n} currently has ${this.pts} points!`);
    }
}

let JSnipes93 = new Player("Jacob", "27", 750);
JSnipes93.status();


class Car {
    constructor(make, model, year) {
        this.mk = make;
        this.md = model;
        this.yr = year;
    }

    info() {
        console.log(`This is a ${this.yr} ${this.mk} ${this.md}.`);
    }
}

let myCar = new Car("Kia", "Soul", 2013);
myCar.info();