function collidingAsteroids(asteroids) {
  const stack = [];

  for (let i = 0; i < asteroids.length; i++) {
    const currentAsteroid = asteroids[i];

    if (currentAsteroid > 0) {
      stack.push(currentAsteroid);
      continue;
    }

    while (true) {
      const peek = stack.length - 1;
      if (stack.length === 0 || stack[peek] < 0) {
        stack.push(currentAsteroid);
        break;
      }

      const asteroidSize = Math.abs(currentAsteroid);

      if (stack[peek] < asteroidSize) {
        stack.pop();
        continue;
      }

      if (stack[peek] === asteroidSize) {
        stack.pop();
        break;
      }

      // Cannot forget this break here, as if the stack contains a peek that is greater in size, we are not supposed to push and we should break since the current asteroid is going to be destroyed
      break;
    }
  }

  return stack;
}
