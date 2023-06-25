/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let numStr = x.toString();
  const isNegative = numStr[0] === '-';

  let sum = 0;
  let multiplier = 1;
  for (const num of numStr) {
    if (num === '-') continue;
    sum += num * multiplier;
    multiplier *= 10;
  }

  if (!checkIfInRange(sum.toString(), isNegative)) return 0;

  return isNegative ? sum * -1 : sum;
};

// [-2147483648 to 2147483647]
//   2143847412
function checkIfInRange(numStr, isNegative) {
  console.log(isNegative);
  if (numStr.length < 10) return true;
  if (numStr.length > 10) return false;
  const range = isNegative ? '2147483648' : '2147483647';

  for (let i = 0; i < numStr.length; i++) {
    if (numStr[i] < range[i]) return true;
    if (numStr[i] > range[i]) return false;
  }

  return true;
}

console.log(reverse(-2147483412));
