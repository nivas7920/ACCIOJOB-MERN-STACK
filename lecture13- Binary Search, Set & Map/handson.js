function upperBound(arr, target) {
  let low = 0;
  let high = arr.length - 1;
  let index = arr.length;
  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);
    //in lower bound algorithm the mid value is greater than or equal to target
    if (arr[mid] > target) {
      index = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return index;
}
let arr = [1, 2, 3, 6, 7, 9, 11, 15];
let target = 15;
console.log("upper bound index is:", upperBound(arr, target));
//TC=O(logN)
//SC=O(1)

// set method in js

let fruits = new Set(); // set always maintain on insertion order
fruits.add("apple");
fruits.add("banana");
fruits.add("mango");
fruits.add("pineapple", "orange", "chiku", "apple"); // set.add adds one value at time
console.log(fruits);

console.log(fruits.has("apple")); // return true
console.log(fruits.has("orange")); // return false
console.log(fruits.delete("pineapple"), fruits);
console.log(fruits.size);
console.log(fruits.clear()); // deletes all the values of set

// remove duplicate
let num = [1, 2, 3, 1, 2, 4, 5, 2, 6, 4, 0, 5, 7, 8, 4, 2, 9, 4, 7, 9];
let num1 = new Set(num); // set
console.log(num1);
console.log([...num1]); // converted set into array
let num2 = new Set([...num]); // array
console.log([...num2]); // same it converted set into array
let num3 = [...num1]; //array
let num4 = Array.from(num1); //array
let num5 = [...num1]; //array
console.log({ num, num1, num2, num3, num4, num5 }); // difference type of converting set to array

// MAP
let info = new Map();
info.set("name", "sp");
info.set("clg", "adypu");
info.set("department", "engineering", "computer"); // it only contain key and value pair discards another value
const studentData = [...info];
console.log(studentData);
console.log(info.has("name")); // return the boolean value
console.log(info.get("name")); // return the value of that key
console.log(info.get("sp")); // not working
console.log(info.delete("department"), info); // return the boolean value
console.log(info.set("department", "computer engineering, enginnering")); //update the value

let numbers = [1, 2, 4, 3, 5, 7, 2, 3];
let digit = new Map();
//let digit = new Map([...numbers]);// not allwed becuse the map want the key and value pair
//console.log(digit);//error key value
for (let i of numbers) {
  digit.set(i, (digit.get(i) || 0) + 1);
}
console.log(digit);

// array usinglet student = new Map();
let student = new Map();
student.set("marks", [85, 90, 78, 92]); // the marks is key and another array is key
student.set("subjects", ["Math", "Science", "English"]); // subject is key and subject names are value

console.log(student.get("marks")); // log marks
console.log([...student]); // convert all info in array

//que find the frequency of each element in the arr
let arr5 = [2, 3, 4, 1, 0, 1, 2, 3, 4, 5, 10];
let freq = new Map();
for (let num of arr5) {
  freq.set(num, (freq.get(num) || 0) + 1);
}
console.log(freq);
console.log(Object.fromEntries(freq));

//que find intersection and union
let arr6 = [1, 2, 4, 5, 6],
  arr7 = [2, 5, 6, 3, 1, 3];
console.log("array 6:", arr6);
console.log("array 7:", arr7);

let union = [...new Set([...arr6, ...arr7])]; // removes duplicate
console.log("elements common in both array:", { union });
// [1, 2, 4, 5, 6, 3]
let intersection = [];

for (let i = 0; i < arr6.length; i++) {
  if (arr7.indexOf(arr6[i]) !== -1) {
    // check if arr6[i] exists in arr7
    if (intersection.indexOf(arr6[i]) === -1) {
      // avoid duplicates
      intersection.push(arr6[i]);
    }
  }
}

console.log("elements present in both array:", intersection);
