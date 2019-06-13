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

class Instructor extends Person {
    constructor(insInfo) {
        super(insInfo);
        this.specialty = insInfo.specialty;
        this.favLanguage = insInfo.favLanguage;
        this.catchPhrase = insInfo.catchPhrase;
    };

    demo(subject) {
        return `Today we are learning about ${subject}!`;    
    };

    grade(student, subject) {
        return `${student} receives a perfect score on ${subject}!`;
    };
};

class Student extends Person {
    constructor(stuInfo) {
        super(stuInfo);
        this.previousBackground = stuInfo.previousBackground;
        this.className = stuInfo.className;
        this.favSubjects = stuInfo.favSubjects;
    };

    listsSubjects() {
    
    };

    PRAssignment(subject) {
        return `${student.name} has submitted a PR for ${subject}.`;
    }
}

class ProjectManager extends Instructor {
    
}


// VARIABLES START HERE

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`,
  });

  console.log(fred.demo('math'));

