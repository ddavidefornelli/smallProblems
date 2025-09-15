/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let pars = "()[]{}"
  let i = 0
  let expectedClose = [] 
  for(letter of s) {
    if(pars.indexOf(letter) % 2 === 0) {
      expectedClose.push(pars[pars.indexOf(letter) + 1])
      i++
    } else if (pars.indexOf(letter) % 2 === 1 && letter === expectedClose.at(-1)) {
      expectedClose.pop()
      i--
    } else { return false }
  }
  return i === 0 ? true : false
};

console.log(isValid("()"))
console.log(isValid("[(])"))
console.log(isValid("([])"))
console.log(isValid("["))



