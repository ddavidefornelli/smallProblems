/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var flowerGame = function(n, m) {
  let count = 0 
  let h = n > m ? m : n 
  let j = n > m ? n : m
  let x = 0
    while(x < h) {
      if(j%2 === 0){
        count = count + j/2
      } else {
        if(x%2 === 0) count = count + (j - 1)/2
        if(x%2 === 1) count = count + (j + 1)/2
      }
      x++
    }
  return count 
};

//
//2021995460
//556154696
//5000000000
//

console.log(flowerGame(3,2))
console.log(flowerGame(58280,69389))
console.log(flowerGame(23054,48248))
console.log(flowerGame(100000,100000))


