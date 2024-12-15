export function sum(nums) {
  return nums.reduce((acc, cur) => acc + cur, 0);
}

/**
 * Return the average of all element in array
 * @param {number[]} nums - array of number
 * @returns {number} - the average value
 */
export function average(nums) {
  return sum(nums) / nums.length;
}

export function median(nums) {
  const sorted = [...nums].sort((a, b) => a - b);
  const midIndex = Math.floor(sorted.length / 2);

  return isEven(sorted.length)
    ? (sorted[midIndex - 1] + sorted[midIndex]) / 2
    : sorted[midIndex];
}

export function isEven(n) {
  return n % 2 === 0;
}
