/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    let score = new Array(n+1).fill(0)
    score[0] = null
    for(let i = 0; i < trust.length; i++) {
        score[trust[i][1]] += 1
        score[trust[i][0]] -= 1
    }
    console.log(score)
    if((n - 1) in score){
        return score.indexOf(n-1)
    } 
   return -1
}

console.log(findJudge(2, [[1,2]]))
console.log(findJudge(2, [[1,2], [2, 1]]))
console.log(findJudge(1, []))
console.log(findJudge(3, [[1,3],[2,3]]))
console.log(findJudge(3, [[1,3],[2,3],[3,1]]))



