// let arr=[1,4,3,7,9];
// console.log(arr.pop());//delete element from end.
// console.log(arr);
// console.log(arr.splice(arr.length-1,1));
// console.log(arr);
// console.log(arr.shift());//delete element from start.
// console.log(arr);
// arr.length=arr.length-1;// delete element from end.
// console.log(arr);

// const arr2=[1,2,3,4,5];
// for(let i=0;i<arr2.length-1;i++){
//     arr2[i]=arr2[i+1]
// }
// arr2.length=arr2.length-1;
// console.log(arr2);


const arr3=[10,20,30,40,50,];
arr3.pop();
console.log(arr3);
arr3.unshift(50);
console.log(arr3);

const arr4=[10,20,30,40,50,];
arr4.shift();
console.log(arr4);
arr4.push(10);
console.log(arr4);


/* Function to print the sum of all subarrays */
const arr = [1, 2, 3, 4];

function subarraySum (arr) {
  let sum = 0;
  let n = arr.length;

  //loop for subarrays starting from different index
  for(let i = 0; i < n; i++) {

    // for each j, it will represent a subarray starting from i and ending at j
    let subSum = 0;
    for(let j = i; j< n; j++){
      subSum += arr[j];
      sum += subSum;
    }
  }

  return sum;
}

console.log("Sum of all subarrays of ", arr, "is", subarraySum(arr));

/* ================== DELETIONS IN ARRAY */
/* Ques: delete the last element of the array */

//Using slice() -> doesn't change the array, until assigned to array itself
let arr1 = [1,2,3,4,5,6];
arr1 = arr1.slice(0, arr1.length - 1);
console.log({ arr1 });

//Using splice() -> changes the original array
//syntax -> splice(start, count);
arr1.splice(arr1.length - 1, 1);
console.log(arr1);

//using pop()

//By changing the length of the array
arr1.length = arr1.length - 1;
console.log("Array after decreasing the value of length property", arr1);

/* Question: Delete element from begining */
const arr2 = [10, 20, 30, 40];
console.log("Array before deletion of first element", arr2);
let z = arr2.shift();
console.log("Array after deletion of first element", arr2);
console.log({z});

//Using loops
/* just shift all the elements left by one index, and decrease the length property value by 1 */
const arr5 = [1,2,3,4,5];
console.log("Array before deletion of first element", arr5);
for(let i = 0; i < arr5.length - 1; i++){
  arr5[i] = arr5[i+1];
}
arr5.length = arr5.length - 1;

console.log("Array after deletion of first element", arr5);


