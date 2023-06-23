/**
 * @param {number[][]} logs
 * @param {number} n
 * @return {number}
 *
 * - Create list of groups, this can be an array of arrays
 * - Create a map that points to object: { groupID, groupArray }
 * - Entry comes with 2 people meeting, use map to verify if they belong on the same group
 * - If they do, skip
 * - If they dont, merge the groups, make sure to merge smallest into largest, and update map with new group they belong to
 * - Once we have a group that is the size of N, were are done
 *
 */
var earliestAcq = function (logs, n) {
  logs = logs.sort((a, b) => a[0] - b[0]);

  const friendGroups = new Array(n).fill(null).map((_, i) => [i]);
  const groupMap = {};
  for (let i = 0; i < n; i++) {
    groupMap[i] = 0;
  }

  for (const [time, f1, f2] of logs) {
    // 2 people that belong in different groups
    if (groupMap[f1] !== groupMap[f2]) {
      // get Id of larger group and smaller group
      const [largeGroupId, smallGroupId] =
        friendGroups[groupMap[f1]].length > friendGroups[groupMap[f2]].length
          ? [groupMap[f1], groupMap[f2]]
          : [groupMap[f2], groupMap[f1]];

      // Merge small group into big one
      for (const f of friendGroups[smallGroupId]) {
        friendGroups[largeGroupId].push(f);
        groupMap[f] = largeGroupId;
      }

      if (friendGroups[largeGroupId].length === n) return time;
    }
  }

  return -1;
};
