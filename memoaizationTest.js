function isPrime(x) {
  if (x < 2) return false;
  if (x === 2) return true;
  if (x % 2 === 0) return false;
  for (let i = 3; i * i <= x; i += 2) {
    if (x % i === 0) return false;
  }
  return true;
}

function createFindNthPrime() {
  let memory = new Map()

  function findNthPrime(n) {
    if(memory.get(n)) {
      console.log(memory)
      return memory.get(n)
    } else { 
      let count = 0;
      let num = 1;

      while (count < n) {
        num++;
        if (isPrime(num)) {
          count++;
        }
      }

      memory.set(n, num)
      return num;
    }
  }
  return findNthPrime
}

const findNthPrimeMemo = createFindNthPrime()

console.log(findNthPrimeMemo(800000))
console.log(findNthPrimeMemo(800000))



function modifyNumber(func) {
  function modify(number) {
    return func(number) 
  }
  return modify
}

const addTwo = modifyNumber(number => number + 2)
const subTwo = modifyNumber(number => number - 2)
console.log(addTwo(5))
console.log(addTwo(1))
console.log(addTwo(90))

console.log(subTwo(5))
console.log(subTwo(1))
console.log(subTwo(90))

