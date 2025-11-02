//merge sort
// que given two sorted array  a & b and merge them
function mergeSort(arr1, arr2) {
  let n = arr1.length;
  let m = arr2.length;
  let ans = [];
  let i = 0;
  let j = 0;
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
let arr1 = [1, 3, 4, 7, 10];
let arr2 = [2, 9, 12, 14, 20];
console.log(mergeSort(arr1, arr2));

// arr=[3,7,1,5,8,2,4]; use merge sort using recursion
function mergeRecursive (arr, low, high){
  if(low==high){
    return [arr[low]];
  }
  let mid = Math.floor((low+high)/2);
  let leftSortedarr = mergeRecursive(arr, low, mid);
  let rightSortedarr = mergeRecursive(arr, mid+1, high);

  let mergedArr =  mergeSort(leftSortedarr, rightSortedarr);
  return mergedArr;
}
let arr = [3, 7, 1, 5, 8, 2, 4];
console.log(" merge sort :", mergeRecursive(arr,0,arr.length-1));


//insertion sort
// que given  a sorted array , whole array is sorted except the last element place the last element 
// place the last element at its correct possition such that whole arr is sorted
// eg-> arr=[1,2,7,9,6]
// op-> = [1,2,6,7,9]

function insertionSort (arrr){
  let n=arrr.length;
  for(let i=0;i<n;i++){
    if(arrr[i]>arrr[arrr.length-1]){
      [arrr[i],arrr[arrr.length-1]]=[arrr[arrr.length-1],arrr[i]]
    }
  }
  return arrr;
}
let arrr=[1,2,7,9,6];
console.log(insertionSort(arrr));
