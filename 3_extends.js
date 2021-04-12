//MDN Link - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain

//ES6 JS CLasses
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

//EXTENDS
//Let's say we have different types of users - trial, bronze, admin
//We want each of these to have different functions vaialble, but w/ some properties that are all similar
//We can do this by making a new class that inherits certian properties.
//This gives us a parent class and a child class (or 'subclass') that EXTENDS the parent class

class TrialUser extends User {
//TrialUser becomes a child class of User, inheriting its functions/properties...
    //but also adding trialEnding method that "User" won't have
    trialEnding() {
        console.log(`Your trial will be ending soon, ${this.name}. Would you like to join our program?`);
    };
};

//Instance of User Class
let anonDude = new User("Anonymous");
anonDude.greet();
anonDude.status();
//anonDude.trialEnding(); //undefined. Error Out because this is not a function!

//Instance of TrialUser Class
let trialUser = new TrialUser("Paul");
trialUser.greet();
trialUser.trialEnding();
trialUser.status();


//Practice
class BannedUser extends User {
    banned() {
        console.log("Your account has been banned due to extreme lameness.")
    };
};

let badUser = new BannedUser("Dark Stevie");
badUser.greet();
badUser.banned();