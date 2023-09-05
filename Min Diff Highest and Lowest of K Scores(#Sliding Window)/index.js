var minimumDifference = function (nums, k) {
    if (nums.length <= k) {
        return 0;
    }

    nums.sort((a, b) => a - b);
    let lowest = Infinity;
    let diff = 0;

    for (let i = 0; i <= nums.length - k; i++) {
        diff = nums[i + k - 1] - nums[i];
        lowest = Math.min(lowest, diff);
    }

    return lowest;
};


