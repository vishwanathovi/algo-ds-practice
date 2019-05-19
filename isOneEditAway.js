let a = "pale";
let b = "pales";
let c = "bale";

function isOneEditAway(str1, str2) {
  // Case for insertion and deletion
  let longerStr;
  let shorterStr;
  if (str1.length !== str2.length) {
    longerStr = str1.length > str2.length ? str1 : str2;
    shorterStr = str1.length > str2.length ? str2 : str1;

    let difference = 0;
    for (let i = 0, j = 0; i < longerStr.length; i++, j++) {
      if (longerStr[i] !== shorterStr[j] && difference < 2) {
        difference++;
        j--;
      }
      if (difference > 1) {
        return false;
      }
    }
    return true;
  }

  // Case for replace
  let difference = 0;
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      difference++;
    }
    if (difference > 1) {
      return false;
    }
  }
  return true;
}

console.log(isOneEditAway(a, b));
console.log(isOneEditAway(a, c));
