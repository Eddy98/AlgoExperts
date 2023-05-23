// Sliding Window Algorithm

function longestSubstringWithoutDuplication(string) {
  let fast = 0, // right/faster pointer
    slow = 0; // left, slower pointer
  const set = new Set(); // keep track of chars that we have seen
  let longestSubstring = '';

  while (fast < string.length) {
    const char = string[fast];
    if (!set.has(char)) {
      set.add(char);
    } else {
      // Record and Save
      const currentSubString = string.substring(slow, fast);
      longestSubstring =
        currentSubString.length > longestSubstring.length
          ? currentSubString
          : longestSubstring;

      // Move slow forward, closing window and clearing up set
      while (string[slow] !== char) {
        set.delete(string[slow]);
        slow++;
      }
      slow++;
    }
    fast++;
  }

  // Record and Save on last time
  const currentSubString = string.substring(slow, fast);
  longestSubstring =
    currentSubString.length > longestSubstring.length
      ? currentSubString
      : longestSubstring;

  return longestSubstring;
}
