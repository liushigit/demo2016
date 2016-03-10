"use strict"

// eat()

function eat() {
  console.log("eating...")

}

var drink = function () {
  console.log("drinking...")
}



// Four invocation patterns
// The value of `this` depends on
// which invocation pattern is used
// 1. Function: `this` is not very useful here
// Unusable in strict mode!!!
function play() {
  this.player = "liushi"
}

// play()
// console.log(global.player)
// ------
// 2. the Method invocation pattern
var o = {weight: 200 }
o.grow = function () {
  this.weight += 10
}

o.grow()
console.log(o.weight)

// 3. the Constructor invocation pattern
// 3.1
var Tiger = function (age, weight) {
  this.age = age
  this.weight = weight
}
let lili = new Tiger(10, 190)
let toto = new Tiger(10, 200)
Tiger.prototype.address = "the zoo"

console.log(toto.address) // `address` is found in the prototype chain
console.log(lili.address)



// 3.2 Factories
var SmartPhone = function () {

}

var TraditionalPhone = function () {

}

function PhoneFactory(memory, PhoneType) {
  var phone = new PhoneType()
  phone.memory = memory
  return phone
}

var sp = PhoneFactory(128, SmartPhone)
var p = PhoneFactory(128, TraditionalPhone)

// 3.3 Object.create()

var prt = {age: 0, weight: 0}
var o1 = Object.create(prt)
console.log(o1.age)

// 4. the `apply` invocation pattern
var thing1 = {value: 0, increase: function(amount) {
  this.value += amount
}}

var thing2 = {value: 10}
thing1.increase.apply(thing2, [20])
thing1.increase.call(thing2, 20)
console.log("thing2's value is " + thing2.value)

// 5 Closure
let interestCalc = function() {
  let interestRate = 0.1
  return function (money) {
    return interestRate * money
  }
}()

console.log(interestCalc(80))
