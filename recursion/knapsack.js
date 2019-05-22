items = [{ w: 1, v: 6 }, { w: 2, v: 10 }, { w: 3, v: 12 }, { w: 2, v: 16 }];

let maxWeightArray = [];
function knapsack(items, maxWeight, currentValueSum = 0, currentWeight = 0) {
  // base case
  if (currentWeight === maxWeight) {
    maxWeightArray.push(currentValueSum);
    return;
  }
  if (currentWeight > maxWeight) return;
  // recursive case
  for (let i = 0; i < items.length; i++) {
    let currentValueSum2 = currentValueSum + items[i]["v"];
    let currentWeight2 = currentWeight + items[i]["w"];
    let itemsTemp = [...items];
    itemsTemp.splice(i, 1);
    knapsack(itemsTemp, maxWeight, currentValueSum2, currentWeight2);
  }
  return maxWeightArray.reduce((acc, item) => Math.max(acc, item));
}

console.log(knapsack(items, 5)); // 22
