// binary searching questions
//que-> find the square root of a number in O(log N)TC
let N = 36;

function squreRoot(N) {
  let low = 0;
  let high = N;
  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);
    if (mid * mid == N) {
      return mid;
    } else if (mid * mid > N) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
}
let sqrt = squreRoot(N);
console.log("square root of  " + sqrt);

// find the target element in a sorted array and print its index

function findTarget(arr, target) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);
    if (arr[mid] == target) {
      return mid;
    } else if (arr[mid] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
}
let arr = [1, 2, 3, 6, 7, 9, 11, 15];
let target = 11;
//console.log("the target is:", findTarget(arr, target));

// find first occurrence of target element 
// arr2=[1,2,6,6,11,11,11,15];
// target =6;
function findTargetelement(arr2, target1) {
  let low = 0;
  let high = arr2.length - 1;
  let index=-1;
  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);
    if (arr2[mid] == target1) {
        index = mid;
        high= mid-1;
      //return mid;
    } else if (arr2[mid] > target1) {
      high = mid - 1;
    } else {//arr2[mid]<target1
      low = mid + 1;
    }
  }
  return index;
}
let arr2=[1,2,6,6,6,11,11,11,15];
let  target1 = 6;
console.log("target element index is:",findTargetelement(arr2,target1));


// lower bound
function lowerBound (arr, target){
    let low = 0;
  let high = arr.length - 1;
  let index=-1;
  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);
   //
     if (arr[mid] >= target) {
      index=mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return index;
}

console.log("lower bound index is:",lowerBound(arr,target));


// hw ->upper bound


//set in js
let set = new Set ([1,1,2,4,1,2]);
console.log({set});//delet the 

//methods in set to add element
set.add(40);
console.log(set);
// method to check if a number is in set or not
console.log(set.has(40));// return true
console.log(set.has(50));// return false
console.log(set.size);// return size of set
console.log(set.delete(40),set);// return the boolean value and delet the element

// que->remove duplicates from the array

let arr3=[2,3,4,1,0,1,2,3,4,5,10];
//op->2,3,4,1,0,5,10
let set1 = new Set(arr3);
console.log(set1);
console.log([...set1]);
let set2= new Set ([...arr3]);
console.log([...set2]);
let arr4=[...set1];
let arr11=Array.from(set1);
let arr111= [...set2];
console.log({arr3,arr11,arr4,arr111});

/* map in js*/
let map = new Map();

map.set("name1","sultan");
map.set("name2","sunny");

const mapArr = [...map];
console.log({mapArr});

// checking if a key is present or not
console.log("checking if 'name1' is present or not",map.has("name1"));

//getting the value of a specific key 
map.get("name2");
console.log(map);
//delet
map.delete("name1");
console.log(map);

for(let  i of map){
console.log("key :"+i[0],",value:"+i[1]);

}


// update value
map.set("name2","sargar");
console.log(map);

const mapArr1 =[...map];
console.log({mapArr1});

//que find the frequency of each element in the arr
let arr5=[2,3,4,1,0,1,2,3,,4,5,10];

//que find intersection and union
let arr6=[1,2,4,5,6], arr7=[2,5,6,3,1,3]


