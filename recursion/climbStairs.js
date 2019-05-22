let newSet = new Map();
var climbStairs = function(n) {
  // base case
  console.log("Number: ", n);
  if (n == 0) {
    newSet[0] = 1;
    newSet[-1] = 0;
    return 1;
  }
  if (n == -1) {
    return 0;
  }

  if (!newSet.has(n - 1)) {
    newSet[n - 1] = climbStairs(n - 1);
  }
  return newSet[n - 1] + newSet[n - 2];
};

// console.log(climbStairs(6));
//
// let newSet = {};
// var climbStairs = function(n) {
//   // base case
//   if (n <= 0) {
//     // return 1;
//     newSet[0] = 1;
//     newSet[-1] = 0;
//     return newSet[n];
//   }
//   // if (n == -1) {
//   //   return 0;
//   // }
//   else {
//     console.log(n, newSet);
//     let x = newSet[n - 1] || climbStairs(n - 1);
//     let y = newSet[n - 2] || climbStairs(n - 2);
//
//     if (!newSet[n]) {
//       newSet[n] = newSet[n - 1] + newSet[n - 2];
//     }
//     // let x = newSet[n-1] || climbStairs(n-1);
//     // let y = newSet[n-2] || climbStairs(n-2);
//
//     return newSet[n];
//   }
// };

console.log(climbStairs(4));
