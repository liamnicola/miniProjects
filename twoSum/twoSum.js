var twoSum = function(nums, target) {
    let answer = [];
    for(let i = 0; i < nums.length; i++){
        for( let j = i + 1; j < nums.length; j++){
            if(nums[i] + nums[j] === target){
                answer.push(i, j);
                return answer;
            }
        }
    }
};

twoSum([1,4,6,4], 8)