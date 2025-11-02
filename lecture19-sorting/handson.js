function bubblesort(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
console.log(bubblesort([4, 5, 1, 3, 2]));

// stable sorting
function bubbleSort(arr) {
  let n = arr.length;

  // Outer loop → number of passes
  for (let i = 0; i < n - 1; i++) {
    let swapped = false; // optimization: check if any swap happens

    // Inner loop → compare adjacent elements
    for (let j = 0; j < n - i - 1; j++) {
      // If current element > next element → swap
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }

    // If no swap happened in this pass → array already sorted
    if (!swapped) break;
  }

  return arr;
}

// Example
console.log("Sorted Array:", bubbleSort([5, 1, 4, 2, 8]));

//selection sort
function selectionSort(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let min = i; // assume current element is the smallest

    // Inner loop → find the actual minimum in remaining array
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[min]) {
        min = j; // update index of smallest element
      }
    }

    // Swap the found minimum with the first element of unsorted part
    [arr[i], arr[min]] = [arr[min], arr[i]];
  }

  return arr;
}

// Example
console.log("Sorted Array:", selectionSort([64, 25, 12, 22, 11]));

/*Why Selection Sort is NOT stable
A stable sorting algorithm keeps the relative order of equal elements 
the same as in the input.
In Selection Sort, when we swap the minimum element with the
 first unsorted element, it can jump ahead of other equal elements 
 and disturb their original order.
*/

/*Average-Case Time Complexity

Definition: It measures the expected running time of an 
algorithm over all possible inputs of a given size.

Purpose: It tells us how the algorithm performs on typical inputs,
not just the best or worst scenarios.
How it’s calculated:

Consider all possible inputs of size n.

Determine the time the algorithm takes for each input.

Take the weighted average, usually assuming each input is equally likely.
*/

// negative array bubble sort
// Original array with positive and negative numbers
 arr = [3, -1, 7, -5, 2, 0, -8];

// Step 1: Create a new array (copy of original)
let newArr = [...arr];

// Step 2: Sort Implementation
function bubbleSort(array) {
    let n = array.length;
    for (let i = 0; i < n - 1; i++) {
        // Last i elements are already in place
        for (let j = 0; j < n - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                // Swap if current element is greater than next
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}

// Step 3: Sort the new array
let sortedArr = bubbleSort(newArr);

// Step 4: Output
console.log("Original Array: ", arr);
console.log("Sorted Array:   ", sortedArr);
