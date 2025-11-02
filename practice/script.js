/*que-> Search a 2D Matrix – Given an m × n integer matrix where each row 
is sorted in non-decreasing order and the first integer of each row is 
greater than the last integer of the previous row, determine whether a target
 integer exists in the matrix.*/
function searchMatrix(matrix, target) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === target) {
                return true; 
            }
        }
    }
    return false;
}
let matrix = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60]
];
let target = 3;
if (searchMatrix(matrix, target)) {
    console.log("Target found");
} else {
    console.log("Target not found");
}
/* que 2-> Problem: Partition an Array into Two Subarrays with Equal Sum

Write a program to partition an array into two subarrays with the same sum.
Take input of the size of the array and the array elements, then find if it is possible to split the array into two subarrays (without reordering the elements), such that the sum of the two subarrays is the same.

If it is possible, print the two subarrays in two separate lines.
If it is not possible, print "Not Possible". */
function splitArray(N, arr) {
  let totalSum = 0;
  for (let i = 0; i < arr.length; i++) {
    totalSum += arr[i];
  }
  if (totalSum % 2 !== 0) {
    console.log("Not Possible");
    return;
  }
  let targetSum = totalSum / 2;
  let runningSum = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    runningSum += arr[i];
    if (runningSum === targetSum) {
      let left = "";
      for (let j = 0; j <= i; j++) {
        left += arr[j] + (j < i ? " " : "");
      }
      console.log(left);
      let right = "";
      for (let j = i + 1; j < arr.length; j++) {
        right += arr[j] + (j < arr.length - 1 ? " " : "");
      }
      console.log(right);

      return;
    }
  }
  console.log("Not Possible");
}
let N = 5;
let arr = [6, -4, 3, 2, -3];
splitArray(N, arr);
