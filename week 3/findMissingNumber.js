var missingNumber = function(nums) {
    
    let n=nums.length;
    let sum = (n*(n+1)/2);
    let missingSum = 0;
    for(let num of nums){
        missingSum+=num;
    }
    return (sum-missingSum);
};