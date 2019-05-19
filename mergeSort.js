const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }
  // Split Array in into right and left
  let left, right, mid;

  mid = Math.ceil(array.length / 2);
  left = array.slice(0, mid);
  right = array.slice(mid);
  if (!right.length) right = array[array.length - 1];
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let mergedArray = [];
  while (right.length && left.length) {
    left[0] > right[0]
      ? mergedArray.push(right.shift())
      : mergedArray.push(left.shift());
  }
  if (!left.length) mergedArray = mergedArray.concat(right);
  if (!right.length) mergedArray = mergedArray.concat(left);
  return mergedArray;
}

const answer = mergeSort(numbers);
console.log(answer);
