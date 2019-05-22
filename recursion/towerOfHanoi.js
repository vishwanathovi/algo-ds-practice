function solveHanoi(numDisks, fromPeg, toPeg, extraPeg) {
  if (numDisks === 1) {
    console.log(`Move disk ${numDisks} from ${fromPeg} to ${toPeg}`);
    return;
  }
  // recurring case
  solveHanoi(numDisks - 1, fromPeg, extraPeg, toPeg);
  console.log(`Move disk ${numDisks} from ${fromPeg} to ${toPeg}`);
  solveHanoi(numDisks - 1, extraPeg, toPeg, fromPeg);
}

solveHanoi(3, "A", "B", "C");
