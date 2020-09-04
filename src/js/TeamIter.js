class Team {
  constructor(array) {
    this.array = array;
  }

  [Symbol.iterator]() {
    return this.next();
  }

  next() {
    let index = 0;
    if (index < this.array.length) {
      index += 1;
      return { value: this.array[index], done: false };
    }
    return { done: true };
  }
}

const person = new Team([{
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

for (const per of person.array) {
  console.log(per);
}
