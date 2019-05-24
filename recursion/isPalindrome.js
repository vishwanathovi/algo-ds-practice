// function isPalindrome(string) {
//   // base case
//   if (string.length < 2) {
//     return true;
//   }
//   // recurring case
//   if (string[0] === string[string.length - 1]) {
//     string = string.slice(1, string.length - 1);
//     return isPalindrome(string);
//   } else {
//     return false;
//   }
// }

function isPalindrome(string) {
  // base case
  if (string.length <= 1) return true;
  // recursive case
  if (string[0] === string[string.length - 1])
    return isPalindrome(string.slice(1, string.length - 1));
  return false;
}

function isPalindrome(string) {
  if (string.length <= 1) return true;
  return (
    string[0] === string[string.length - 1] &&
    isPalindrome(string.slice(1, string.length - 1))
  );
}

console.log(isPalindrome("malayalam"));
console.log(isPalindrome("malayblam"));
console.log(isPalindrome("wow"));
console.log(isPalindrome("wow!!!"));
