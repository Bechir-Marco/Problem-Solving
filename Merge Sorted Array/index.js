var merge = function (nums1, m, nums2, n) {
  let i = 0
  let j = 0
  while (i < m) {
    j=0
    while (j<n) {
      if (nums1[i] > nums2[j]) {
        let temp = nums1[i]
        nums1[i] = nums2[j]
        nums2[j] = temp
        j++
      }else j++
    }
    i++
  }
  let cpt =0
  while (cpt <  n) {
    nums1[m + cpt] = nums2 [cpt]
    cpt++
  }
  nums1.sort((a, b) => a - b)
  return nums1
};
merge([1, 2, 3, 0, 0, 0], 3, [2,5,6], 3);
