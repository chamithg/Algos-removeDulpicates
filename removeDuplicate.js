/**
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates(nums) {
  // [0,0,1,1,1,2,2,3,3,4]
  let i = 0;
  let temp;

  while (i < nums.length && isNaN(nums[i]) == false) {
    if (temp === null) {
      temp = nums[i];
      i++;
    } else {
      if (nums[i] === temp) {
        nums.splice(i, 1);
        nums.push("_");
      } else {
        temp = nums[i];
        i++;
      }
    }
  }

  return nums;
}

nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

console.log(removeDuplicates(nums));
