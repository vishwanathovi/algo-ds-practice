function allPermutations(remainingString, permanentString = "") {
  // base case
  if (remainingString.length === 0) {
    console.log(permanentString);
    return;
  }
  // recurring case

  for (let i = 0; i < remainingString.length; i++) {
    let permanentString2 = permanentString + remainingString[i];
    let remainingString2 = remainingString;
    let remainingArray2 = remainingString2.split("");
    remainingArray2.splice(i, 1);
    remainingString2 = remainingArray2.join("");
    allPermutations(remainingString2, permanentString2); //
  }
}

allPermutations("ABC");
