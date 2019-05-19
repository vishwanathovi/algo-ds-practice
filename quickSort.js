function quickSort(array) {
  if (array.length < 1) return array;
  let pivotIndex = array.length - 1;
  let pivot = array[pivotIndex];
  let temp;

  for (let i = 0; i < pivotIndex; i++) {
    if (array[i] > pivot && pivotIndex > 0) {
      temp = array[pivotIndex - 1];
      if (i === pivotIndex - 1) {
        array[pivotIndex - 1] = pivot;
        array[pivotIndex] = temp;
      } else {
        array[pivotIndex - 1] = pivot; // pivot value moved to left
        array[pivotIndex] = array[i]; // value at i moved to pivot location
        array[i] = temp; // left to pivot is moved to i
        i--;
      }
      pivotIndex--;
    }
  }
  let left = array.slice(0, pivotIndex);
  let right = array.slice(pivotIndex + 1);

  return [...quickSort(left), pivot, ...quickSort(right)];
}

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
const answer = quickSort(numbers);
console.log(answer);
