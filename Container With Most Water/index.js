var maxArea = function (height) {
    let i = 1
    let j = height.length
    let max = 0
    let res = 0
    
    while (i < j) {
            
            if (height[i-1] < height[j-1]) {
                res = height[i-1] * ( j - i) 
               
            } else {
                res = height[j-1] * (j - i)
            }
            if (max < res) max = res; 
            i++ 
        
    }
   
    return max
    
};
maxArea([2, 3, 4, 5, 18, 17, 6]);
