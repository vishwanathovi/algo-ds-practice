// Without recursion - factorial
function factorial(n) {
  let factorial = 1;
  while (n !== 1) {
    factorial *= n;
    n--;
  }
  return factorial;
}

// With recursion - factorial
function factorialRecursive(n) {
  if (n == 1) return 1;
  return factorialRecursive(n - 1) * n;
}
// factorialRecursive(5) -> 5 * fr(4) -> 4 * fr(3) -> 3 * fr(2) -> 2 * fr(1)

// console.log(factorial(5));
// console.log(factorialRecursive(5));

// Fibonacci - normal

function fibonacci(n) {
  if (n < 2) {
    return n;
  }
  let a = 0,
    b = 1,
    temp;
  for (let i = 2; i < n; i++) {
    temp = b;
    b = a + b;
    a = temp;
  }
  return b;
}

// Fibonacci - recursion

function fibonacciRecursion(n, a = 0, b = 1) {
  if (n < 2) return n;
  return fibonacciRecursion();
}

// console.log(fibonacci(6));

let VALID_WORDS = new Map();
VALID_WORDS.set("good", "present");

function maxMatch(sentence) {
  let finalArray = [];
  let recurseFind = function recurseFind(index) {
    if (index >= sentence.length) return;
    let i = 1;
    while (index + i <= sentence.length) {
      let wordToCheck = sentence.slice(index, index + i);
      if (VALID_WORDS.has(wordToCheck)) {
        finalArray.push(wordToCheck);
        return recurseFind(index + i);
      }
      i++;
    }
    finalArray.push(sentence[index]);
    return recurseFind(index + 1);
  };
  recurseFind(0);
  return finalArray;
}

console.log(maxMatch("goodLuck"));
