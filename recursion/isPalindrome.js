function isPalindrome(string) {
  // base case
  if (string.length < 2) {
    return true;
  }
  // recurring case
  if (string[0] === string[string.length - 1]) {
    string = string.slice(1, string.length - 1);
    return isPalindrome(string);
  } else {
    return false;
  }
}

console.log(isPalindrome("malayalam"));
console.log(isPalindrome("malayblam"));
console.log(isPalindrome("wow"));
console.log(isPalindrome("wow!!!"));
