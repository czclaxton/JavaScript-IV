// CODE here for your Lambda Classes
//
class Person {
    constructor(basicInfo) {
        this.name = basicInfo.name;
        this.age = basicInfo.age;
        this.location = basicInfo.location;
    }

    speak() {
        return `Hello my name is ${this.name}, and I am from ${this.location}!`;
    }
}

const fred = new Person({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    // favLanguage: 'JavaScript',
    // specialty: 'Front-end',
    // catchPhrase: `Don't forget the homies`
  });

console.log(fred.speak())