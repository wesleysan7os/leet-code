const removeElement = function (nums, val) {
  while (nums.includes(val)) {
    nums.splice(nums.indexOf(val), 1);
  }

  return nums.lenght;
};
