var merge = function (nums1, m, nums2, n) {
    let k =0
    
    for (i = 0; i < m+n; i++) {
       
        if (nums1[i] == 0) {
            
            nums1[i] = nums2[k]
            k++       
        }
    }
    return nums1.sort()
};
console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));