//sorting

function sorting(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    let min = i;
    for (let j = i + 1; j < n - 1; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    let temp = arr[min];
    arr[min] = arr[i];
    arr[i] = temp;
  }
  return arr;
}

console.log("selection sort",sorting((arr = [4, 1, 3, 7, 5])));

// bubble sort
function bubbleSort(arr) {
  let n = arr.length;
  for (let i= 0;i < n; i++) {
    for (let j = 0; j + 1 < n - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
console.log("bubble sort", bubbleSort((arr = [4, 5, 1, 3, 2])));
// tc=O(N^2)
//SC= O(1)
