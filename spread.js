// spread operator

const max = Math.max(6, 20, 40, 50, 2, 10, 100)
const numbers = [3, 5, 2, 40, 50, 70, 10];
const arrayMax = Math.max(...numbers);
// console.log(...numbers);
console.log(arrayMax);


// use spread operator to copy 
const nums = [4, 5, 80, 10];
const nums2 = nums;
nums2.push(12);
console.log(nums);