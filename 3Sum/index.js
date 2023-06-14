var threeSum = function (nums) {
  nums.sort((a, b) => a - b); 
  let p = 0;
  let p1 = 1;
  let p2 = nums.length - 1;
    let result = []; 
    let arrSet = new Set()
  while (p < p2 - 1) {
    
    while (p1 < p2) {
      let currentSum = nums[p] + nums[p1] + nums[p2];
      if (currentSum === 0) {
        let subArr = [nums[p], nums[p1], nums[p2]];
        let subArrToString = JSON.stringify(subArr);
        if (!arrSet.has(subArrToString)) {
          arrSet.add(subArrToString);
          result.push(subArr);
        }
        p1++;
        p2--;
      } else if (currentSum < 0) {
        p1++;
      } else {
        p2--;
      }
    }
    p++;
    p1 = p + 1;
    p2 = nums.length - 1;
  }
  return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
