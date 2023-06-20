function sweetAndSavory(dishes, target) {
  const bestDish = {
    score: null,
    dishes: [0, 0],
  };

  dishes.sort((a, b) => a - b);

  let left = 0,
    right = dishes.length - 1;

  while (left < right && dishes[left] < 0 && dishes[right] > 0) {
    const currentScore = dishes[left] + dishes[right];
    if (currentScore === target) return [dishes[left], dishes[right]];
    if (currentScore < target) {
      // we have a better dish
      if (
        bestDish.score === null ||
        target - bestDish.score > target - currentScore
      ) {
        bestDish.score = currentScore;
        bestDish.dishes = [dishes[left], dishes[right]];
      }
      left++;
    } else {
      right--;
    }
  }

  if (bestDish.score === null) return [0, 0];

  // Remember to return 0,0 if not found
  return bestDish.dishes;
}
