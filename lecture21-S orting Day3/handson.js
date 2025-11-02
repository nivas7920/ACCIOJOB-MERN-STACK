![] + []; // -> 'false'
[] == ![]; // -> true
![]; // -> false

[100, 1, 3].sort(); // -> [ 1, 100, 3 ]

//Default behavior Array.prototype.sort()
//Imagine that you need to sort an array of numbers.

[10, 1, 3].sort(); // -> [ 1, 10, 3 ]
/* Explanation:
The default sort order is built upon converting the elements 
into strings, then comparing their sequences of UTF-16 code units values.
Hint
Pass compareFn if you try to sort anything but string.
*/

[10, 1, 3].sort((a, b) => a - b); // -> [ 1, 3, 10 ]

+![] + // -> 0
  !![]; // -> 1
!![]; // -> true
![] + // -> false
  //[][[]]        // -> undefined
  !![] / +![] + // -> Infinity
  //[] + {}       // -> "[object Object]"
  {}; // -> NaN

//[] is truthy, but not true
// An array is a truthy value, however, it's not equal to true.

!![] / // -> true
  [] ==
  true; // -> false

// quick sort
let array = [2, 1, 7, 5, 4];
console.log("original array:",array);

function arraySort(arr, low, high) {
    let pivot = array[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
          i++;
          let temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
      }
      
      let temp = array[i + 1];
      array[i + 1] = array[high];
      array[high] = temp;
      
      return i + 1;
}

function quickSort(arr, low = 0, high = array.length - 1) {
    if (low < high) {
      let pivotIndex = arraySort(array, low, high);
      quickSort(array, low, pivotIndex - 1);
      quickSort(array, pivotIndex + 1, high);
    }
    return array;
  }
  
  console.log("quick sort algo:",quickSort(array));
 
//inbuilt sort
/* sort() method in JS */

let arr = [3, 1, 6, 2, 8, 7, 4];
 arr.sort(); //sorts in ascending order
 console.log("ascending order",arr);
 
arr.sort().reverse(); // sorts in descending order
console.log("descending order",arr);


//also sorts in ascending order
arr.sort((a, b) => a - b);
 console.log("another approach of ascending order:",{ arr });

//also sorts in descending order
arr.sort((a, b) => b - a);
console.log("another approach of descending order:",{ arr });

arr = ["apple", "watermelon", "kiwi"];
arr.sort();
console.log(arr);
/* H.w: sort the above array according to first value and then according to second value 
output should be: 
[
  [1, 2],
  [1, 3],
  [2, 1],
  [2, 4],
]
*/
let arr1 = [
  [1, 3],
  [2, 1],
  [1, 2],
  [2, 4],
];

arr1.sort((a, b) => {
  if (a[0] === b[0]) {
    return a[1] - b[1]; // if first values equal, compare second
  }
  return a[0] - b[0]; // otherwise compare first
});

console.log("sorted nested array:",arr1);



//locale compare
// Example 1: Basic alphabetical sorting
let fruits = ["Banana", "apple", "Orange", "grape"];

// Default sort → Unicode order (capital letters come first)
console.log(fruits.sort());
// Output: [ 'Banana', 'Orange', 'apple', 'grape' ]

// Using localeCompare → case-insensitive alphabetical order
console.log(fruits.sort((a, b) => a.localeCompare(b)));
// Output: [ 'apple', 'Banana', 'grape', 'Orange' ]

// Example 2: Words with accents
let words = ["résumé", "resume", "café", "cafe"];

// Default sort → just by Unicode values
console.log(words.sort());
// Output: [ 'cafe', 'café', 'resume', 'résumé' ]

// Using localeCompare → groups accented letters naturally
console.log(words.sort((a, b) => a.localeCompare(b)));
// Output: [ 'cafe', 'café', 'resume', 'résumé' ]

// Example 3: Simple numbers as strings
let numbers = ["10", "2", "1", "20"];

// Default sort → compares as strings, so "10" < "2"
console.log(numbers.sort());
// Output: [ '1', '10', '2', '20' ]

// localeCompare still compares as strings but alphabetically correct
console.log(numbers.sort((a, b) => a.localeCompare(b)));
// Output: [ '1', '10', '2', '20' ]


//sorting with department

let employees = [
  { name: "Amit", department: "HR", salary: 30000 },
  { name: "Vikas", department: "IT", salary: 50000 },
  { name: "Meena", department: "IT", salary: 45000 },
  { name: "Priya", department: "HR", salary: 35000 },
];

employees.sort((a, b) => {
  // First compare department names alphabetically
  let deptCompare = a.department.localeCompare(b.department);
  if (deptCompare === 0) {
    // If same department → sort by salary (descending)
    return b.salary - a.salary;
  }
  return deptCompare;
});

console.log(employees);
