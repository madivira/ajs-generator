class Team {
  constructor(array) {
    this.array = array;
  }

  * [Symbol.iterator]() { 
        for (let value = 0; value < this.array.length; value += 1) {
          yield this.array[value];
        }
    }
}

const persons = new Team([{
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 1,
  attack: 40,
  defence: 10,
}, {
  name: 'Зучник',
  type: 'Bowman',
  health: 50,
  level: 1,
  attack: 40,
  defence: 10,
}, {
  name: 'Жучник',
  type: 'Bowman',
  health: 50,
  level: 1,
  attack: 40,
  defence: 10,
}, {
  name: 'Тучник',
  type: 'Bowman',
  health: 50,
  level: 1,
  attack: 40,
  defence: 10,
}]);


const genetator = persons[Symbol.iterator]();

console.log(genetator.next().value);
console.log(genetator.next().value);
console.log(genetator.next().value);
console.log(genetator.next().value);
console.log(genetator.next().value);
