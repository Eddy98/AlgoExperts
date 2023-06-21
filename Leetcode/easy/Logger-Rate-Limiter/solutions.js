var Logger = function () {
  this.entryQueue = [];
  this.entryMap = {};

  function clearCache(timestamp, entryQueue, entryMap) {
    while (
      entryQueue.length > 0 &&
      timestamp - entryMap[entryQueue[0].message] >= 10
    ) {
      const { message } = entryQueue.shift();
      delete entryMap[message];
    }
  }
};

/**
 * @param {number} timestamp
 * @param {string} message
 * @return {boolean}
 *
 * Entry in Queue shape
 * {
 *   time: int,
 *   message: string
 * }
 */

Logger.prototype.shouldPrintMessage = function (timestamp, message) {
  this.clearCache(timestamp, this.entryQueue, this.entryMap);

  if (message in this.entryMap) {
    return false;
  }

  this.entryMap[message] = timestamp;
  this.entryQueue.push({
    message,
    time: timestamp,
  });
  return true;
};
