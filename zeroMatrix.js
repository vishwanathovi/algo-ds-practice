let matrix = [[1, 2, 0, 4], [5, 6, 7, 8], [9, 0, 11, 12], [13, 14, 15, 16]];

function zeroMatrix(matrix) {
  let len = matrix.length;
  let zeroRows = [];
  let zeroCols = [];

  for (let row = 0; row < len; row++) {
    for (let col = 0; col < len; col++) {
      if (matrix[row][col] == 0) {
        zeroRows.push(row);
        zeroCols.push(col);
      }
    }
  } // O(nm)

  for (let k = 0; k < zeroRows.length; k++) {
    let row = zeroRows[k];
    for (let col = 0; col < len; col++) {
      matrix[row][col] = 0;
    }
  } // O(n)

  for (let l = 0; l < zeroCols.length; l++) {
    let col = zeroCols[l];
    for (let row = 0; row < len; row++) {
      matrix[row][col] = 0;
    }
  }
} // O(m)

console.table(matrix);
zeroMatrix(matrix);
console.table(matrix);

function applySpec(inputObject) {
  return function specGenerator(...args) {
    let specObject = {};
    for (key in inputObject) {
      specObject[key] =
        typeof inputObject[key] === "function"
          ? inputObject[key](...args)
          : applySpec(inputObject[key])(...args);
    }
    return specObject;
  };
}
