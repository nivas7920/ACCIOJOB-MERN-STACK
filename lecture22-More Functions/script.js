//functions

//types of function
// 1) arrow function ->
//que write an arrow function to check if a number is divisible by 3 or not
//doing it using more than 1 statement
const arrow = (a) => {
  if (a % 3 == 0) return true;
  else return false;
};
console.log(arrow(9));
// another approach
const divisibleBy3 = (a) => !(a % 3);
//a%3==0;
console.log(divisibleBy3(10));

// arrow function do not have their own "this "keyword they uses parents "this"

const student = {
  fullName: "pratik mane",
  age: 22,
  result1: function (resultStatus) {
    console.log(this.fullName + " has " + resultStatus + " the exam");
    console.log(this); // shows the object properties
  },
  result2: (resultStatus) => {
    //
    console.log(this.fullName + " has " + resultStatus + " the exam ");
    console.log(this);
  },
};
student.result1("passed");
student.result2("failed");

// anonymous function ->baasically a function with no name

//hof
//

//types of hof
/*1) for each()
->applies the callback function on each element
- iterates over each element and doesnt break like other for loop
- doesnt change the original array
-return undefined
- can be used to iterate and do some operations on array
*/

let arr = [2, 1, 6, 3, 9];
console.log(
  arr.forEach((value, index, array) => {
    value *= 2;
    array[index] = value;
    // console.log(value, index,array);
  })
);
console.log({ arr });

let users = [
  { name: "ramesh", age: 20 },
  { name: "suresh", age: 10 },
  { name: "rani", age: 40 },
];
// print name and age of users array using foreach

 users.forEach((value) => {
  console.log(value.name + " " + value.age);
});

/*2. map()
    -transforms the array
    -returns an array
    - doesnt change the original array
    */
arr = [2, 2, 9, 0, 10];
let squaredArr = arr.map((value, index, array) => {
  return value * value;
});

console.log({ squaredArr });

users = [
  { name: "ramesh", age: 20 },
  { name: "suresh", age: 10 },
  { name: "rani", age: 40 },
];
// transform the name of each user to uppercase new array should be like this
let ans = users.map((value) => {
  return { name: value.name.toUpperCase(), age: value.age };
});
console.log(ans);

/*3. filter()
   - keeps the element that passes the condition 
   - return an array
   -doesnt change original array

   */
let nums = [2, 12, 9, 18, 27];
const oddNumber = nums.filter((value, index, array) => value % 2);
console.log({ oddNumber });

//que
let names = ["pranjal", "bhavesh", "uday", "siddharth", "neha"];
let charOfFive = names.filter((value) => value.length > 5);
console.log(charOfFive);
