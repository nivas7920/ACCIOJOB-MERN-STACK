/*que 1> merge sort
Merge Sorted Arrays
Write a JavaScript function that merges two sorted arrays into a single sorted array. 
The function should take two arguments: the two arrays to be merged.
Input Format
The first line is one array, arr1. The second line is the second array, arr2.
Output Format
For each test case, return the merged array.
Examples
Example 1
Input
[1, 3, 4, 5]
[2, 4, 6, 8]
Output
[1, 2, 3, 4, 4, 5, 6, 8]
*/
function mergeSortedArrays(arr1, arr2) {
  // Do not console.log here
  // only return the merged array
  let n = arr1.length;
  let m = arr2.length;
  let i = 0;
  let j = 0;
  let ans = [];
  while (i < n && j < m) {
    if (arr1[i] < arr2[j]) {
      ans.push(arr1[i]);
      i++;
    } else {
      ans.push(arr2[j]);
      j++;
    }
  }
  while (i < n) {
    ans.push(arr1[i]);
    i++;
  }
  while (j < m) {
    ans.push(arr2[j]);
    j++;
  }
  return ans;
}

let arr1 = [1, 3, 4, 5];
let arr2 = [2, 4, 6, 8];
console.log("merged array:", mergeSortedArrays(arr1, arr1));

/*que 2> Iterative Insertion Sort
In Insertion Sort Part 1, you inserted one element into an array at its correct 
sorted position. Using the same approach repeatedly, can you sort an entire array?
Guideline: You already can place an element into a sorted array. How can you use 
that code to build up a sorted array, one element at a time? Note that in the first
step, when you consider an array with just the first element, it is already sorted
since there is nothing to compare it to.
In this challenge, print the array after each iteration of the insertion sort,
i.e., whenever the next element has been inserted at its correct position.
Since the array composed of just the first element is already sorted, begin printing
 after placing the second element.
Input Format
The first line contains an integer n,the size of the arr.
The next line contains n spaced integers arr[i].
Output Format
Print the entire array on a new line at every iteration.
Example
Input
6
1 4 3 5 6 2
Output
1 4 3 5 6 2
1 3 4 5 6 2
1 3 4 5 6 2
1 3 4 5 6 2
1 2 3 4 5 6 
*/
function insertionSort(arr, n) {
  // Write your code here
  for (let i = 1; i < n; i++) {
    let j = i;
    while (j > 0 && arr[j - 1] > arr[j]) {
      [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
      j--;
    }
    console.log(arr.join(" "));
  }
}
let arr = [1, 4, 3, 5, 6, 2];
let n = 6;
insertionSort(arr, n);

/* que 3>
You are given an array of objects. Each object has the following properties:
department (string)
name (string)
age (number)
Your task is to sort this array:
First by department in alphabetical order
If department is the same, then by age in ascending order
Sample Input:
const employees = [
  { department: "HR", name: "Anjali", age: 32 },
  { department: "Tech", name: "Aman", age: 28 },
  { department: "HR", name: "Rahul", age: 25 },
  { department: "Tech", name: "Sneha", age: 24 },
  { department: "Finance", name: "Kunal", age: 30 },
  { department: "Tech", name: "Divya", age: 28 },
];
Expected Output (After Sorting):
[
  { department: "Finance", name: "Kunal", age: 30 },
  { department: "HR", name: "Rahul", age: 25 },
  { department: "HR", name: "Anjali", age: 32 },
  { department: "Tech", name: "Sneha", age: 24 },
  { department: "Tech", name: "Aman", age: 28 },
  { department: "Tech", name: "Divya", age: 28 }
]
*/
function sortEmployee(employees) {
  employees.sort((a, b) => {
    // for checking department sort in alphabetical order
    let deptCompare = a.department.localeCompare(b.department);
    if (deptCompare === 0) {
      // in case if department is same then sort age wise in ascending order
      return a.age - b.age;
    }
    return deptCompare;
  });
  return employees;
}
const employees = [
  { department: "HR", name: "Anjali", age: 32 },
  { department: "Tech", name: "Aman", age: 28 },
  { department: "HR", name: "Rahul", age: 25 },
  { department: "Tech", name: "Sneha", age: 24 },
  { department: "Finance", name: "Kunal", age: 30 },
  { department: "Tech", name: "Divya", age: 28 },
];
console.log(sortEmployee(employees));

/* que 4>
A e-commerce company, "ShopEasy", wants to optimize its search functionality to 
provide better user experience. The company has a large catalog of products with
various attributes like product name, price, brand, and rating. When a user searches
for a product, the system returns a list of relevant products. However, the company 
wants to sort these products based on their prices in ascending order so that users 
can easily compare prices from different brands.
Suppose you are given an array of objects representing the products, where each object 
contains the product's name, price, brand, and rating. Write a pseudo-code to sort this
array in ascending order based on the price attribute.
Assume that the input array is stored in a variable named products and it contains at 
least 10 elements.
For example:
let products = [
  {name: "Product A", price: 1000, brand: "Brand X", rating: 4.5},
  {name: "Product B", price: 500, brand: "Brand Y", rating: 4.2},
  {name: "Product C", price: 800, brand: "Brand Z", rating: 4.8},
  
];
  */
function sortProduct(products) {
  // sorting price ascending order
  products.sort((a, b) => a.price - b.price);
  return products;
}
// printing sorting price wise
let products = [
  { name: "Product A", price: 1000, brand: "Brand X", rating: 4.5 },
  { name: "Product B", price: 500, brand: "Brand Y", rating: 4.2 },
  { name: "Product C", price: 800, brand: "Brand Z", rating: 4.8 },
];
console.log(sortProduct(products));
