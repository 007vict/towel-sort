
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let towSort = [];
  if (matrix && matrix.length !== 0) {
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
          let num = i % 2 === 0 ? j : matrix[i].length - j - 1;
          towSort.push(matrix[i][num]);
      }
    }
    return towSort;
  } else {
    return towSort
  }
}
