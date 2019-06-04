/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let subStr;
    function isPalindrome(str){
      // console.log(str)
        if (str[0] !== str[str.length - 1]){
            return false;
        }
        if (str.length < 3){
          return true;
        }
        return isPalindrome(str.slice(1,str.length - 1))
    }

    let i = 0, j = s.length - 1, flip = true;
    while(i <= j){
      console.log(i,j,s[i],s[j])
      if (s[i] === s[j]){
        console.log(i,j);
        subStr = s.slice(i,j+1)
        if (isPalindrome(subStr))return subStr;
      }
      flip? i++: j--;
      flip = !flip;
    }
    return "";
};

console.log(longestPalindrome("a"))
console.log(longestPalindrome("alaksdaabbaaflkajsdfl"))
