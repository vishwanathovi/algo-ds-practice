// Given a string, we have to find out all subsequences of it.
// A String is a subsequence of a given String, that is generated by deleting
// some character of a given string without changing its order.
// Link: https://www.geeksforgeeks.org/print-subsequences-string/

let currentSubstrings = new Set([]);

function printSubstrings(string) {
  // base case
  if (string.length < 2) {
    console.log(string);
    return;
  }
  // recuring case
  console.log(string);

  let subArr, subStr;

  for (let i = 0; i < string.length; i++) {
    subArr = string.split("");
    subArr.splice(i, 1);
    subStr = subArr.join("");
    if (!currentSubstrings.has(subStr)) {
      currentSubstrings.add(subStr);
      printSubstrings(subStr);
    }
  }
}

printSubstrings("abcd");
