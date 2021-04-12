//Classes act as a blueprint for creating objects that share methods and properties
//ES6 JS Classes

class User {
    constructor(name) {
        this.name = name;
        this.type = 'Trial User'
    };

    //Method 1
    greet() {
        console.log(`Welcome back, ${this.name}`);
    };

    //Method 2
    status() {
        console.log(`Current status: ${this.type}`);
    };
};


//Instance of the class/new object
let anonDude = new User('Anonymous dude');

//we can now use the new instance and the . operator to access our 2 methods
anonDude.greet();
anonDude.status();

let anonLady = new User('Anonymous Lady');
let jeff = new User("Jeff");

jeff.greet();
anonLady.greet();
anonLady.status();

let randomGuy = new User ("Jeff Bezos");
randomGuy.greet();