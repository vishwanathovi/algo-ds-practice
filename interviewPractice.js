let getDuration = [
  { next: 1 },
  { next: 2 },
  { next: 3 },
  { next: 6 },
  { next: 5 }
];

function durationCreator(durationArray) {
  let year = 1,
    month = 0,
    month1;
  let finalArray = [];

  function addToArray(year, month1, month2) {
    let suffix = year < 4 ? ["st", "nd", "rd"][year - 1] : "th";

    if (!month2) {
      finalArray.push(`${year}${suffix} year ${month1 % 12 || 12} month`);
    } else {
      finalArray.push(
        `${year}${suffix} year ${month1 % 12}-${month2 % 12 || 12} months`
      );
    }
  }

  for (let i = 0; i < durationArray.length; i++) {
    if (durationArray[i].next === 1) {
      month = month + 1;
      year = Math.floor(month / 12) + 1;
      addToArray(year, month);
    } else {
      month1 = month + 1;
      year = Math.floor(month / 12) + 1;
      month = month + durationArray[i].next;
      addToArray(year, month1, month);
    }
  }

  return finalArray;
}

console.log(durationCreator(getDuration));
