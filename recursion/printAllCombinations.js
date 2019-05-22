// let combinations = [];
// let combinationMapper = {};
// function printAllCombinations(string, length) {
//   if (string.length == length) {
//     if (!combinationMapper[string]) combinations.push(string);
//     combinationMapper[string] = 1;
//     return;
//   }
//
//   let subArr, subStr;
//   for (let i = 0; i < string.length; i++) {
//     subArr = string.split("");
//     subArr.splice(i, 1);
//     subStr = subArr.join("");
//     printAllCombinations(subStr, length);
//   }
// }

function printAllCombinations(string, length) {
  let combinations = [];
  let combinationMapper = {};

  function recurseJoin(currentString, remainingString, length) {
    if (currentString.length === length) {
      if (!combinationMapper[currentString]) combinations.push(currentString);
      combinationMapper[currentString] = 1;
      return;
    } else {
      for (let i = 0; i < remainingString.length; i++) {
        let currentString2 = currentString + remainingString[i];
        let remainingString2 = remainingString.slice(i + 1);
        recurseJoin(currentString2, remainingString2, length);
      }
    }
  }

  for (let i = 0; i < string.length; i++) {
    let currentString = string[i];
    let stringTemp = string.slice(i + 1);
    recurseJoin(currentString, stringTemp, length);
  }
  return combinations;
}

console.log(printAllCombinations("abcd", 2));
