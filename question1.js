//Question 1: DSA Given an array of integers, return the length of the longest increasing subsequence. 
//A subsequence is a sequence that can be derived from the array by deleting some or no elements without
// changing the order of the remaining elements. For example, given the array [10, 9, 2, 5, 3, 7, 101, 18],
// the longest increasing subsequence is [2, 3, 7, 101], and its length is 4.

function lengthOflonincresubsequence(nums) {
    if (nums.length === 0) return 0;

    // Array Initialization
    const dp = Array(nums.length).fill(1);

    
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }

    
    return Math.max(...dp);
}

// Example:
const nums = [10, 9, 2, 5, 3, 7, 101, 18];
console.log("Length of Longest Increasing Subsequence:", lengthOflonincresubsequence(nums));
// return: Length of Longest Increasing Subsequence: 4
//Explanation
// For the input array [10, 9, 2, 5, 3, 7, 101, 18]:
// Initially, array dp = [1, 1, 1, 1, 1, 1, 1, 1]
// After processing, array dp will become [1, 1, 1, 2, 2, 3, 4, 4].
// The maximum value in dp is 4, meaning the longest increasing subsequence is of length 4.
