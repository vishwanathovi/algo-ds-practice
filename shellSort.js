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

// Shell sort
function shellSort(array, gap) {
  for (let i = 0; i < gap; i++) {
    for (let j = i; j < array.length; j += gap) {
      let key = array[j];
      let k = j - gap;
      while (k >= 0 && array[k] > key) {
        array[k + gap] = array[k];
        k -= gap;
      }
      array[k + gap] = key;
    }
  }
  return insertionSort(array);
}

console.log(shellSort([9, 8, 7, 6, 5, 4, 3, 2, 1], 3));
