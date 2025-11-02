// Function to merge two sorted arrays
function mergeSortedArrays(arr1, arr2) {
  let n = arr1.length;
  let m = arr2.length;
  let result = [];
  let i = 0,
    j = 0;

  // Compare elements from both arrays and merge them in sorted order
  while (i < n && j < m) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  // Add remaining elements from arr1 (if any)
  while (i < n) {
    result.push(arr1[i]);
    i++;
  }

  // Add remaining elements from arr2 (if any)
  while (j < m) {
    result.push(arr2[j]);
    j++;
  }

  return result;
}

// Recursive merge sort function
function mergeSortRecursive(arr, low, high) {
  // Base case: if the subarray has only one element, return it as a sorted array
  if (low === high) {
    return [arr[low]];
  }

  // Divide the array into two halves
  let mid = Math.floor((low + high) / 2);

  // Recursively sort the left half
  let leftSorted = mergeSortRecursive(arr, low, mid);

  // Recursively sort the right half
  let rightSorted = mergeSortRecursive(arr, mid + 1, high);

  // Merge the two sorted halves
  let merged = mergeSortedArrays(leftSorted, rightSorted);
  return merged;
}
let arr = [9, 4, 7, 1, 6, 3, 8];
console.log("Original array:", arr);
let ans = mergeSortRecursive(arr, 0, arr.length - 1);
console.log("merge Sorted array:", ans);

//insertion sort
function insertionSort(arr) {
  let n = arr.length;

  // Start from the second element, as the first element is considered sorted
  for (let i = 1; i < n; i++) {
    let key = arr[i]; // Element to be inserted in the sorted part
    let j = i - 1;
    // Move elements of arr[0..i-1] that are greater than key one position ahead
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    // Insert the key at its correct position
    arr[j + 1] = key;
  }

  return arr;
}

let arr1 = [7, 2, 5, 3, 8, 1, 4];
console.log("Original array:", arr1);
let sortedArr = insertionSort(arr1);
console.log("insertion Sorted array:", sortedArr);


//// Quick Sort function
function quickSort(arr3) {
  // Base case: array with 0 or 1 element is already sorted
  if (arr3.length <= 1) {
    return arr3;
  }

  // Choose the first element as pivot
  let pivot = arr3[0];
  let left = [];
  let right = [];

  // Partition the array into left (smaller) and right (larger)
  for (let i = 1; i < arr3.length; i++) {
    if (arr3[i] < pivot) {
      left.push(arr3[i]);
    } else {
      right.push(arr3[i]);
    }
  }

  // Recursively sort left and right, then combine with pivot
  return [...quickSort(left), pivot, ...quickSort(right)];
}

// Example array
let arr3 = [5, 2, 9, 1, 6];
console.log("Original array:", arr3);

// Call quick sort
let result = quickSort(arr3);
console.log("quick Sorted array:", result);
