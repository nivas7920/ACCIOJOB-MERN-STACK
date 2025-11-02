// let arr=[1,2,4,4,6,6,6,8] 1) find last index of 6; 2) and find first index of 6
arr = [1, 2, 4, 4, 6, 6, 6, 8];
let firstIndexOf6 = -1;
let lastIndexOf6 = -1;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 6) {
    if (firstIndexOf6 == -1) {
      firstIndexOf6 = i;
    }
    lastIndexOf6 = i;
  }
}
if (firstIndexOf6 !== -1)
  // console.log({firstIndexOf6,lastIndexOf6});
  //else
  // console.log("6 doesnt exist");
  //TC=O(N)
  //BINARY SEARCH->TC==O(logN)-> always search in search space

  // find square root of a number using binary search
  //find the index of target in A
  //let arr2=[1,4,6,7,10,15,21,30]; target =10;
  arr = [1, 4, 6, 7, 10, 15, 21, 30];
let target = 10;

function binarySearch(arr, target) {
  let low = 0,
    high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) low = mid + 1;
    else high = mid - 1;
  }
  return -1;
}

//console.log("The target is an index of :",binarySearch(arr, target));

/* write a function to print all the palindromic substrings of a string */
function ispalindrome(str1) {
  let reversed = "";
  str1.trim();
  for (let i = str1.length - 1; i >= 0; i--) {
    reversed += str1[i];
  }
  if (str1 === reversed) {
    return true;
  } else {
    return false;
  }
}
const str1 = "race a car";
//console.log("is palindrome:",ispalindrome(str1));
// time complexity= O(n)

// time and space complexity
// a=5
// b=6
// c=8;// (;)->this is full stop of the statement

let a = 5;
if (true) {
  console.log("hi");
  a += 5;
}
//example
let q = 10;
sum = 0;
for (let i = 0; i <= q; i++) {
  console.log(i);
  console.log((sum += i));
  console.log(i + i);
  console.log("hi");
} // always tc is O(n)i.e O(4n)
let n = 5;
let m = 5;
for (let i = 1; i <= n; i++) {
  let str = "";
  for (let j = 1; j <= m; j++) {
    str += "* ";
  }
  console.log(str);
}
// the time complexity of given code is =O(m*n)
/* Some types of time complexity
1) O(1)->constant time complexity
2) O(N)-> linear time complexity
3) O(N*N)->quadratic time complexity
4) O(log N)-> logarithmic time complexity
5) O(N log N)-> no such name for this type time complexity
6) O(underroot N)-> no such name for this type time complexity
*/
//example
// while ( n > 0){
//   n != 2;
// }-> TC =O(log N)i.e base 2  and n= no of integers
// if divide and multiply operations the TC is O(log N)
let N = 10;
// for (let i = 0; i < N; i++) {
//   while (n > 0) {
//     N /= 2;
//   }
// } //TC-> O(logN)
// for (let i = 0; i < N; i++) {
//   if (i == N / 2) {
//     let m = N;
//     while (m > 0) {
//       m /= 2;
//     }
//   }
// }

// the TC is given code is O(n)
// and SC is give code is constant i.e O(1)

/* Space Complexity/ Auxilary space-> total space require to store variable , including 
input storage refernce */
// example
function addition(a, b, c) {
  let sum3 = a + b + c;
  return sum3;
}
console.log(addition(1, 2, 3));
//Sc= O(1)
// Tc=O(1)
for (let i = 0; i < N; i++) {
  let x = i;
  console.log(x);
}

// the code runs N times but after every iteration the x will destroy and new will
// be initialized thats why the SC = O(1)i.e constant

N = 10;
let arr1 = [];
while (N > 0) {
  arr1.push(N);
  N / 2; // keep N an integer
}
console.log(arr1);
// the SC=O(log N)
// TC =O(log N)



/* The topics of short circuit
1) array= undefined
 arr.length===5 both are check the condition
2)check the condition accordingly AND or OR LOGICALLY
 
IN JS 6 values are considered false
1. 0
2. false
3. null
4. undefined
5. NaN
6. empty string /("")


for logical AND (&&)-> in short circuiting first falsy value OR last thruthy value 
will be the print
for logical OR (||)-> first thruthy OR last falsy value


for all the inbuilt methods the time complexity will be O(N); 
*/ 