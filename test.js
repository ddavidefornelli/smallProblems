const { resolve4 } = require("dns")
const { on } = require("events")

function reverseArray(arr) {
  return [...arr].reverse()
}

function reverseInPlace(arr) {
  return arr.reverse()
}

console.log(reverseArray([1, 2, 3]))
console.log(reverseInPlace([1, 2, 3]))

function greaterThen(n){
  return m => m > n
}

const greaterThen10 = greaterThen(10)
console.log(greaterThen10(9))


function reduce(array, combine, start) {
  let current = start
  for(let element of array){
    current = combine(current, element)
  }
  return current
}

console.log([1, 2, 3, 4].reduce((a, b) => a * b, 2))


function average(arr) {
  return arr.reduce((a, b)=> a+b) / arr.length
}

function max(arr) {
  let m = -Infinity 
  for(let element of arr) {
    if (element > m) m = element
  }
  return m
}

console.log(average([1, 2, 3, 4]))
console.log(max([1, 2, 3, 4]))

/**
 *@param {Array<Array<any>>}
 *@returns {Array<any>}
 **/

const flatten = (arr) => {
  let result = []
  for(let a of arr) {
    result.push(...a) 
  }
  return result
}

console.log(flatten([[1,2,3],[3,4,5]]))

let finder = {
    find(array) {
        return array.some(v => v === this.value)
    },
    value: 5,
}

console.log(finder.find([5,4]))
console.log(finder.find([8,4]))

let person1 = {
    greet(message) { 
        return `${this.name} says '${message}'`
    }
}

let ferdinando = Object.create(person1)
ferdinando.name = "ferdinando"

console.log(ferdinando.greet('ciao amici'))

class person { 
    constructor(name, surname) {
        this.name = name
        this.surname = surname
    }
    greet(message) { 
        console.log( `${this.name} ${this.surname} says '${message}'`)
    }
}

let davide = new person("davide", "fornelli")
davide.greet('ciao')


let testarr = [1,2,3]
let modtest = testarr.map(item => item += 2)

console.log(modtest)

