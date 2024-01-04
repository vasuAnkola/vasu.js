let nums = [1, 1, 2, 2, 3, 4, 4, 5, 5];

function removeDuplicates(nums) {
    if (!nums.length) {
        return 0;
    }

    let k = 1; 

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[k] = nums[i];
            k++;
        }
    }

    return k;
}

let resultLength = removeDuplicates(nums);
console.log(nums.slice(0, resultLength)); 