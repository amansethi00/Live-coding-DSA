var findLengthOfLCIS = function(nums) {
    if(nums.length == 0){
        return 0;
    }
  let count = 1;
    let max_count=1;
    for(let i=1;i<nums.length;i++){
        if(nums[i]>nums[i-1]){
            count++;
            if(count>max_count){
                max_count = count;
            }
            
        }
        else{
            count=1;
        }
    }
    return max_count;
};