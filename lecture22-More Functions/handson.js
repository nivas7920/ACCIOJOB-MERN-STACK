//arrow function
const isEven = (n) => {
  if (n % 2 === 0) return true;
  else return false;
};
console.log(isEven(8));

const isEvenShort = (n) => n % 2 === 0;
console.log(isEvenShort(7));

//for each

let num = [5, 10, 15, 20];
let add = 0;
num.forEach((num) => {
  add += num;
});
console.log("addition:", add);


let numbers = [5, 10, 15, 20];

/* 1) Multiply each number by 2 and update the original array */
numbers.forEach((value, index, arr) => {
  arr[index] = value * 2;
});
console.log("After multiply:", numbers);

/* 2) Print index + value */
numbers.forEach((value, index) => {
  console.log("Index:", index, "Value:", value);
});

/* 3) Calculate total sum */
let sum = 0;
numbers.forEach((num) => {
  sum += num;
});
console.log("Total Sum:", sum);


//map
let people = [
  { name: "Amit", age: 25 },
  { name: "Sneha", age: 30 },
  { name: "Raj", age: 40 },
];

let ages = people.map((p) => p.age);
console.log(ages); // [25, 30, 40]
let arr = [1, 2, 3, 4, 5];

/* 1) Square each number */
let squared = arr.map((n) => n * n);
console.log("Squared:", squared);

/* 2) Convert numbers to strings */
let asString = arr.map((n) => "Number: " + n);
console.log("Strings:", asString);

/* 3) Add 10 to each number */
let plusTen = arr.map((n) => n + 10);
console.log("Plus 10:", plusTen);

//filter
let students = [
  { name: "Ravi", age: 16 },
  { name: "Anita", age: 22 },
  { name: "Kiran", age: 19 },
];

let adults = students.filter((s) => s.age >= 18);
console.log(adults);
// [{name:"Anita",age:22}, {name:"Kiran",age:19}]
let nums = [5, 12, 19, 20, 25, 30];

/* 1) Filter even numbers */
let evens = nums.filter((n) => n % 2 === 0);
console.log("Evens:", evens);

/* 2) Filter numbers greater than 15 */
let greater = nums.filter((n) => n > 15);
console.log("Greater than 15:", greater);

/* 3) Filter numbers divisible by 5 */
let divisibleBy5 = nums.filter((n) => n % 5 === 0);
console.log("Divisible by 5:", divisibleBy5);

//reduce
let nums2 = [1, 2, 3, 4, 5];

/* 1) Find sum */
let total = nums2.reduce((acc, curr) => acc + curr, 0);
console.log("Sum:", total);

/* 2) Find product */
let product = nums2.reduce((acc, curr) => acc * curr, 1);
console.log("Product:", product);

/* 3) Find maximum */
let max = nums2.reduce((acc, curr) => (curr > acc ? curr : acc));
console.log("Max:", max);

//Error Handling with try, catch, finally
function divide(a, b) {
  try {
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }
    return a / b;
  } catch (err) {
    console.error("Error occurred:", err.message);
    return null;
  } finally {
    console.log("Division attempt finished.");
  }
}

console.log(divide(10, 2)); // 5
console.log(divide(10, 0)); // Error handled, returns null

//Combining HOF + Error Handling
function safeMap(arr, callback) {
  try {
    return arr.map(callback);
  } catch (err) {
    console.error("Mapping failed:", err.message);
    return [];
  } finally {
    console.log("safeMap operation complete.");
  }
}

const arr1 = [1, 2, 3];
const result = safeMap(arr1, (n) => {
  if (n === 4) throw new Error("Bad number!");
  return n * 2;
});

console.log("result",result); // []
