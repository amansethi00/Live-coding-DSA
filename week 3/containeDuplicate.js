
// O(n) solution using array
var containsDuplicate = function(nums) {
    
    let arr=[];
    for(num of nums){
        if(arr[num]!=undefined){
            return true;
        }
        arr[num]++;
    }
    return false;

};

// using set O(n)
var containsDuplicate = function(nums) {
    
    let newSet = new Set();
     for(num of nums){
         if(newSet.has(num)){
             return true;
         }
         newSet.add(num);
     }
     return false;
 };

// O(n*n) solution
var containsDuplicate = function(nums) {
    let newNum= [];
    let bool = false;
    for(num of nums){
        newNum.includes(num)?(bool=true):newNum.push(num);
    }
    return bool;
};