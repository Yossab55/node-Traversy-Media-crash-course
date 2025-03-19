class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greeting() {
    console.log(`Hello, My Name Is ${this.name} & I'm ${this.age}`)
  }
};

module.exports = Person;