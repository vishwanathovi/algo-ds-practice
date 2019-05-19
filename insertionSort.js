// Insertion sort
function insertionSort(array) {
  let key, j;
  for (let i = 1; i < array.length; i++) {
    let key = array[i];
    let j = i - 1;

    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = key;
  }
  return array;
}

console.log(insertionSort([4, 2, 5, 2, 6, 3, 5, 7]));
