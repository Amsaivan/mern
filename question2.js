// Question 2: DSA Given an array of integers nums and an integer target, return the indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.

// For example, given:

// const nums = [2, 7, 11, 15];

// const target = 9;

// The function should return [0, 1] because nums[0] + nums[1] = 2 + 7 = 9.

// Requirements:

// Implement the solution in JavaScript.
// The solution should have a time complexity better than O(n^2).
// Include proper error handling for edge cases.

function twoSum(nums, target) {
    // Create an empty hash map to store the numbers and their indices
    const numMap = new Map();
    
    // Loop through the array of numbers
    for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];
      
      // Check if the complement (target - current number) exists in the map
      if (numMap.has(complement)) {
        // If found, return the indices of the current number and the complement
        return [numMap.get(complement), i];
      }
      
      // Otherwise, add the current number and its index to the map
      numMap.set(nums[i], i);
    }
    
    // If no solution is found, throw an error (this won't happen given the problem guarantees one solution)
    throw new Error("No two sum solution found");
  }
  
  // Example 
  const nums = [2, 7, 11, 15];
  const target = 9;
  
  try {
    const result = twoSum(nums, target);
    console.log(result); 
    // Return Output: [0, 1]
  } catch (error) {
    console.error(error.message);
  }

 // The solution works with negative numbers also.

//   const nums = [-3, 4, 3, 90];
// const target = 0;

// const result = twoSum(nums, target);
// console.log(result); 
// Return Output: [0, 2]

  
