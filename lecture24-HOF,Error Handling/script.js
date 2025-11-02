let arr = [2, 5, 3, 10, 34];
//  let sum= arr.map((a,b)=>{
//     return a+b;
//  });
//  console.log(sum);

// reduce()->
let sum1 = arr.reduce((accumulator, value, index, array) => {
  accumulator += value;
  return accumulator;
}, 0);
console.log(sum1);

//find the count of even no
let count = arr.reduce((accumulator, value, index, array) => {
  accumulator += value % 2 == 0;
  return accumulator;
}, 0);
console.log(count);

//find the frequency of each element
let fruits = ["apple", "guava", "Kiwi", "guava", "kiwi", "Apple", "Guava"];
let frequency = fruits.reduce((accumulator, value, index, array) => {
  let ans = value.toLowerCase();
  accumulator[ans] = (accumulator[ans] || 0) + 1;
  return accumulator;
}, {});
console.log(frequency);

function freq(fruits) {
  let obj = {};
  for (let i in fruits) {
    obj[fruits[i].toLowerCase()] = (obj[fruits[i].toLowerCase()] || 0) + 1;
  }
  return obj;
}
console.log(freq(fruits));

//find()
//->return a value
//-> returns the first element that matches the condition

let findKiwi = fruits.find((val, index, arr) => val.toLowerCase() === "kiwi");
console.log(findKiwi);

/*que on hof-> print the most suitable hof for below problem and write why you chose that hof
 */

/* 1)given an array of object, containing details of users console the name of first user
 aged above 30
 */
const users = [
  { name: "Alice", age: 25, isActive: true },
  { name: "Bob", age: 30, isActive: false },
  { name: "Charlie", age: 22, isActive: true },
  { name: "Diana", age: 28, isActive: false },
  { name: "Ethan", age: 35, isActive: true },
];
let firstAbove30 = users.find((val) => val.age > 30);
console.log(firstAbove30.name);

//2) print the name & age of each user
users.forEach((value) => {
  console.log(value.name + " " + value.age);
});
//3) function to create an array of names from above users
//o/p-> ["Alice","Bob","Charlie","Diana","Ethan"]
let names = users.map((val) => val.name);
console.log(names);

//4) function to display all the active users from above users array

let active = users.filter((val) => val.isActive);
console.log(active);

// 5) function to find the sum of age for all users below 30
let sumOf30 = users.reduce((accumulator, value) => {
  if (value.age < 30) {
    accumulator += value.age;
  }
  return accumulator;
}, 0);
console.log(sumOf30);
// 6) function to get the value of all active users

let activeName = users.filter((val) => val.isActive).map((val) => val.name);
console.log(activeName);

// passing a function  as an argument and returning a function
function calculator(a, b, operation) {
  return operation(a, b);
}
function multiply(a, b) {
  return a * b;
}
function add(a, b) {
  return a + b;
}
function substract(a, b) {
  return a - b;
}

let sum34 = calculator(3, 4, add);
console.log({ sum34 });


/* =================== Error Handling =================== */

try {
  // console.log(studentName);
  let studentName = "Pratik";
  console.log(studentName);
  if (studentName === "Pratik") throw new Error("Pratik found!!");
} catch (error) {
  console.log(error.message);
  console.log(error.name);
  console.log(error.stack);
} finally {
  console.log("In finally block");
}

console.log("after try catch block");


/* 
once --> restricts a function to be called more than once
memoization --> if a function is called with same args as before, it will not calculate the result again, 
                it will find the result from a cache where result of 
                previous function call with same args is stored
*/

