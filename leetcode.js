const getSum = (num) => {
  let sum = 0;
  while (num) {
    const r = num % 10;
    num -= r;
    sum += r;
    num /= 10;
  }
  return sum;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
const minSwaps = function (nums) {
  const n = nums.length;
  const sorts = [...nums].sort((a, b) => {
    const aSum = getSum(a);
    const bSum = getSum(b);
    if (aSum === bSum) {
      return a - b;
    }
    return aSum - bSum;
  });

  const indexMap = new Map();
  for (let i = 0; i < n; i++) {
    indexMap.set(sorts[i], i);
  }

  let ans = 0;

  for (let i = 0; i < n; i++) {
    while (sorts[i] !== nums[i]) {
      const sortsIndex = indexMap.get(nums[i]);
      [nums[i], nums[sortsIndex]] = [nums[sortsIndex], nums[i]];
      ans++;
    }
  }

  return ans;
};

const res = minSwaps([978678783, 989995084, 465932830, 37255967]);
console.log('res:', res);
