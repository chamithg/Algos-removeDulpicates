/**
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates(nums) {
  // [0,0,1,1,1,2,2,3,3,4]
  let i = 0;
  let temp;

  while (i < nums.length) {
    if (temp === null) {
      temp = nums[i];
      i++;
    } else {
      if (nums[i] === temp) {
        nums.splice(i, 1);
      } else {
        temp = nums[i];
        i++;
      }
    }
  }

  return i;
}

nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

console.log(removeDuplicates(nums));
