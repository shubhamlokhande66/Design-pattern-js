function Person(gender, job) {
  this.gender = gender;
  this.occupation = job;
}

Person.prototype.sayHi = function() {
  console.log('Hi, my name is ' + this.name + ', I am a ' + this.gender)
}

function FemaleSecretary(name) {
  Person.call(this, 'girl', 'secretary')
  this.name = name;
}
FemaleSecretary.prototype = Object.create(Person.prototype)

var tanuja = new FemaleSecretary('Tanuja');
console.log(tanuja)
tanuja.sayHi()