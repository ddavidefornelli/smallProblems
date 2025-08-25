/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function(mat) {
  let m = mat.length;       
  let n = mat[0].length;    
  let arr = [];
  let i = 0, j = 0;
  let dir = 1;

  while (arr.length < m * n) {
    arr.push(mat[i][j]);

    if (dir === 1) {
      if (j === n - 1) { 
        i++;
        dir = -1;
      } else if (i === 0) { 
        j++;
        dir = -1;
      } else { 
        i--;
        j++;
      }
    }
    else {
      if (i === m - 1) { 
        j++;
        dir = 1;
      } else if (j === 0) { 
        i++;
        dir = 1;
      } else { 
        i++;
        j--;
      }
    }
  }
  return arr;
};


console.log(findDiagonalOrder([[1,2,3],[4,5,6],[7,8,9]]))
console.log(findDiagonalOrder([[1,2],[3,4]]))
console.log(findDiagonalOrder([[1]]))
console.log(findDiagonalOrder([[2, 3]]))
console.log(findDiagonalOrder([[2], [3]]))
