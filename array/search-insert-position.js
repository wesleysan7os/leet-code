/*
  Given a sorted array of distinct integers and a target value, return the index if the target is found. 
  If not, return the index where it would be if it were inserted in order.

  You must write an algorithm with O(log n) runtime complexity.
*/

const searchInsert = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;

  while(l <= r) {
    let m = Math.floor((l + r) / 2);

    if (nums[m] === target) {
      return m;
    } else if (nums[m] < target) {
      l = m + 1;
    } else {
      r = m - 1;
    }
  }
  return l;
};

