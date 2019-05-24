items = [{ w: 4, v: 6 }, { w: 2, v: 30 }, { w: 3, v: 12 }, { w: 1, v: 16 }];

let maxWeightArray = [];
function knapsack(items, maxWeight, currentValueSum = 0, currentWeight = 0) {
  // base case
  if (currentWeight > maxWeight) return;
  // recursive case
  for (let i = 0; i < items.length; i++) {
    let currentValueSum2 = currentValueSum + items[i]["v"];
    let currentWeight2 = currentWeight + items[i]["w"];
    let itemsTemp = [...items];
    itemsTemp.splice(i, 1);
    if (currentWeight2 < maxWeight) {
      maxWeightArray.push(currentValueSum2);
      knapsack(itemsTemp, maxWeight, currentValueSum2, currentWeight2);
    }
  }
  console.log(maxWeightArray);
  return maxWeightArray.reduce((acc, item) => Math.max(acc, item));
}

console.log(knapsack(items, 5));

// Time complexity of the function - O(n^2)
// Space complexity of the function - O(n^2)
//       space complexity can be reduced to O(1) by only retaining the current max instead of all other values
