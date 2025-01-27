/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/


// === GameObject ===


class GameObject {
    constructor(attributes) {
    this.createdAt = attributes.createdAt;
    this.dimensions = attributes.dimensions;
    this.name = attributes.name;
    };

    destroy() {
        return `${this.name} was removed from the game.`
    };
};

// === CharacterStats ===


class CharacterStats extends GameObject {
    constructor(charAttributes) {
    super(charAttributes);
    this.healthPoints = charAttributes.healthPoints
    }

    takeDamage() {
        return `${this.name} took damage`;
    }
}



// === Humanoid (Having an appearance or character resembling that of a human.) ===

class Humanoid extends CharacterStats {
  constructor(humAttributes) {
    super(humAttributes);
  this.team = humAttributes.team;
  this.weapons = humAttributes.weapons;
  this.language = humAttributes.language;
  }

  greet() {
    return `${this.name} offers a greeting in ${this.language}`
  };
  
}





// function Villain(attributes) {
//   Humanoid.call(this, attributes)
// }

// Villain.prototype.takeDamage = function() {
//   return `${this.name} took damage`;
// }

// function Hero(attributes) {
//   Humanoid.call(this, attributes)
// }

/**/
  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

//   const hero = new Humanoid({
//     createdAt: new Date(),
//     dimensions: {
//       length: 2,
//       width: 4,
//       height: 7,
//     },
//     healthPoints: 50,
//     name: 'Superman',
//     team: 'Good',
//     weapons: [
//       'Fists',
//       'Lazer Eyes',
//     ],
//     language: 'English',
//   });

//   const villain = new Humanoid({
//     createdAt: new Date(),
//     dimensions: {
//       length: 2,
//       width: 3,
//       height: 5,
//     },
//     healthPoints: 50,
//     name: 'Lex',
//     team: 'Bad',
//     weapons: [
//       'Brains',
//       'Tech',
//     ],
//     language: 'English',
//   });

  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
