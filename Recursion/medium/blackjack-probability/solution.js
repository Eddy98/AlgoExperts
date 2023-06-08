function blackjackProbability(
  target,
  startingHand,
  multiplier = 10,
  cache = {}
) {
  if (startingHand >= target - 4 && startingHand <= target) return 0.0; // Stand
  if (startingHand > target) return 0.1 * multiplier; // Bust

  if (cache[startingHand * multiplier]) {
    return cache[startingHand * multiplier];
  }

  let probabilitySum = 0;

  for (let i = 1; i <= 10; i++) {
    probabilitySum += blackjackProbability(
      target,
      startingHand + i,
      multiplier / 10,
      cache
    );
  }

  cache[startingHand * multiplier] = probabilitySum;
  return probabilitySum;
}
