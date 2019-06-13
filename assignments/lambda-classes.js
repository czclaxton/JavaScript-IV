// CODE here for your Lambda Classes
//

// MASTER OBJECT 'Person'

class Person {
    constructor(perInfo) {
        this.name = perInfo.name;
        this.age = perInfo.age;
        this.location = perInfo.location;
    }

    speak() {
        return `Hello my name is ${this.name}, and I am from ${this.location}!`;
    }
}

class Instructor {
    constuctor()
}


// VARIABLES START HERE

const fred = new Person({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    // favLanguage: 'JavaScript',
    // specialty: 'Front-end',
    // catchPhrase: `Don't forget the homies`
  });

