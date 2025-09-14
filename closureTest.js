function outer() {
  let counter = 5
  function decrementCounter() {
    console.log(counter)
    if(counter === 0) return
    return counter--
  }
  return decrementCounter
}

//let newFunc = outer()
//let newNewFunc = outer()
//for(let i = 0; i < 10; i++ ) {
//  newFunc()
//  newNewFunc() 
//}

function fibonacci (n) {
  return Array.from({length: n}).reduce((acc, _, i) => 
    i < 2 ? [...acc, i] : [...acc, acc[i - 1] + acc[i - 2]], 
    [])
} 

console.log(fibonacci(5))
