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
        return `${student.name} receives a perfect score on ${subject}!`;
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
        this.favSubjects.map(item => console.log(item));
    };

    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}.`;
    }

    sprintChallenge(subject) {
        return `${this.name} has begun the sprint challenge on ${subject}!`;
    }
}

class ProjectManager extends Instructor {
    constructor(projInfo) {
        super(projInfo);
        this.gradClassName = projInfo.gradClassName;
        this.favInstructor = projInfo.favInstructor;
    };

    standUp(slackChannel) {
        return `${this.name} announces to ${slackChannel}, @channel standy times!`
    };

    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}.`
    };
}


// VARIABLES START HERE

// // Students

const willy = new Student({
    name: 'Willy',
    location: 'Utah',
    age: 20,
    previousBackground: 'I was attempting to be a self-taught programmer',
    className: 'Web21',
    favSubjects: ['Html', 'CSS', 'JavaScript']
})

const billy = new Student({
    name: 'Billy',
    location: 'Utah',
    age: 30,
    previousBackground: 'I was attempting to be a self-taught plumber',
    className: 'Web21',
    favSubjects: ['Math', 'CSS', 'JavaScript']
})

const tilly = new Student({
    name: 'Tilly',
    location: 'Utah',
    age: 10,
    previousBackground: 'I was attempting to be a self-taught juggler',
    className: 'Web21',
    favSubjects: ['P.E.', 'CSS', 'JavaScript']
})

// // Instructors

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`,
  });

  const ahmed = new Instructor({
    name: 'ahmed',
    location: 'Bed',
    age: 27,
    favLanguage: 'Java',
    specialty: 'Front-end',
    catchPhrase: `Don't forget`,
  });

  const fredward = new Instructor({
    name: 'Fredward',
    location: 'Rock',
    age: 77,
    favLanguage: 'Java',
    specialty: 'Back-end',
    catchPhrase: `Don't, homies`,
  });
// // Project Managers

const kelly = new ProjectManager({
    name: 'Kelly',
    location: 'Iowa',
    age: 27,
    gradClassName: 'Web1',
    favInstructor: 'Fred'
  });

  const nelly = new ProjectManager({
    name: 'Nelly',
    location: 'Colorado',
    age: 57,
    gradClassName: 'Web2',
    favInstructor: 'Fred'
  });

  const belly = new ProjectManager({
    name: 'Belly',
    location: 'Iowa',
    age: 47,
    gradClassName: 'Web3',
    favInstructor: 'Fred'
  });

// // // TESTING

console.log(kelly.speak());
console.log(fred.demo('math'));
console.log(ahmed.grade(willy, 'Javascript'));
console.log(willy.listsSubjects());
console.log(billy.PRAssignment('HTML'));
console.log(tilly.sprintChallenge('Java'));
console.log(belly.standUp('Channel 21'));
console.log(nelly.debugsCode(billy, 'CSS'));
