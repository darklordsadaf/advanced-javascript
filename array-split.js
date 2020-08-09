/** Slice */
const nums = [1, 2, 3, 4, 5, 6, 7, 8];
const part = nums.slice(2, 6);
console.log(part);
console.log(nums);


/** Splice */
const nums = [1, 2, 3, 4, 5, 6, 7, 8];
const removed = nums.splice(2, 3);
console.log(removed);
console.log(nums);


/** Splice with inject value*/
const nums = [1, 2, 3, 4, 5, 6, 7, 8];
const removed = nums.splice(2, 3, 55, 66, 77);
console.log(removed);
console.log(nums);


/** Join */
const nums = [1, 2, 3, 4, 5, 6, 7, 8];
const removed = nums.splice(2, 3, 77);
const together = nums.join(" ");
console.log(together);