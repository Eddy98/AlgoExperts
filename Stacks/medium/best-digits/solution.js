function bestDigits(number, numDigits) {
  // (string, int)
  const stk = [];
  for (const digit of number) {
    if (stk.length === 0) {
      stk.push(digit);
    } else {
      let peek = stk[stk.length - 1];
      while (digit > peek && numDigits > 0) {
        stk.pop();
        numDigits--;
        peek = stk[stk.length - 1];
      }
      stk.push(digit);
    }
  }

  while (numDigits > 0) {
    stk.pop();
    numDigits--;
  }

  return stk.join("");
}

console.log(bestDigits("10002", 3));
