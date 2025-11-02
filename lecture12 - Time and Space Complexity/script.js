/* write a function to print all the palindromic substrings of a string */
// Time Complexity->
/* js is interpreted+ compiled lang (jit)->just in compilation 



*/
// creat an array 1 to 100 and search the no 57 print the index of it
let arr=[];
for(let i=0;i<100;i++){
    arr.push(i+1);
}
for(let i=0;i<100;i++){
    if(arr[i]==57){
        console.log(i);
    }
}

//TC=O(N)
// let arr=[1,2,4,4,6,6,6,8] 1) find last index of 6; 2) and find first index of 6
arr=[1,2,4,4,6,6,6,8];
let firstIndexOf6=-1;
let lastIndexOf6=-1;
for(let i=0;i<arr.length;i++){
    if(arr[i]===6){
        if(firstIndexOf6==-1){
            firstIndexOf6=i;
        }
        lastIndexOf6=i;
    }
}
if(firstIndexOf6!==-1)
console.log({firstIndexOf6,lastIndexOf6});
else
    console.log("6 doesnt exist");
//TC=O(N)
//BINARY SEARCH->TC==O(logN)-> always search in search space

// find square root of a number using binary search
//find the index of target in A
//let arr2=[1,4,6,7,10,15,21,30]; target =10;
 arr = [1, 4, 6, 7, 10, 15, 21, 30];
let target = 10;

function binarySearch(arr, target) {
  let low = 0, high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) low = mid + 1;
    else high = mid - 1;
  }
  return -1;
}

console.log("The target is an index of :",binarySearch(arr, target)); 