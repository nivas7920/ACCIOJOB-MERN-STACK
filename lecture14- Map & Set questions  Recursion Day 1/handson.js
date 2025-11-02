/******************************
 📌 JavaScript Handson File (New Examples)
******************************/

// -------------------------
// 1. Intersection of Two Arrays
// -------------------------
let arr1 = [10, 20, 30, 40, 50],
  arr2 = [15, 20, 25, 30, 35, 50];

let set1 = new Set(arr1);
let common = [];
for (let num of arr2) {
  if (set1.has(num)) common.push(num);
}
console.log("Intersection Example:", [...new Set(common)]); // [20,30,50]

// -------------------------
// 2. Frequency of Elements in an Array
// -------------------------
let numbers = [7, 8, 7, 9, 8, 7, 10, 9, 9];
let freqMap = new Map();

for (let num of numbers) {
  freqMap.set(num, (freqMap.get(num) || 0) + 1);
}
console.log("Number Frequency:");
for (let [num, count] of freqMap) {
  console.log(num, "->", count);
}

// -------------------------
// 3. Rest Operator & Destructuring
// -------------------------
const [x, y, ...restNums] = [100, 200, 300, 400, 500];
console.log("x:", x, "y:", y, "rest:", restNums); // x=100, y=200, rest=[300,400,500]

// -------------------------
// 4. Remove Duplicates from an Array
// -------------------------
let fruits = ["apple", "mango", "apple", "banana", "mango", "grape"];
let uniqueFruits = [...new Set(fruits)];
console.log("Unique Fruits:", uniqueFruits);

// -------------------------
// 5. Word Frequency in Paragraph
// -------------------------
const text =
  "JavaScript is great and JavaScript is powerful but practice makes it perfect";

let wordsArr = text.toLowerCase().split(" ");
let wordCount = new Map();

for (let word of wordsArr) {
  wordCount.set(word, (wordCount.get(word) || 0) + 1);
}

console.log("Word Frequency Example:");
for (let [word, count] of wordCount) {
  console.log(word, ":", count);
}

// -------------------------
// 6. Anagram Check
// -------------------------
// Example words: "earth" and "heart"
function checkAnagram(s1, s2) {
  if (s1.length !== s2.length) return false;

  let count = {};
  for (let ch of s1) count[ch] = (count[ch] || 0) + 1;

  for (let ch of s2) {
    if (!count[ch]) return false;
    count[ch]--;
  }

  return Object.values(count).every((val) => val === 0);
}
console.log("earth & heart anagrams:", checkAnagram("earth", "heart"));
console.log("rat & car anagrams:", checkAnagram("rat", "car"));

// -------------------------
// 7. Recursion Examples
// -------------------------

// Sum of first N numbers
function sumN(n) {
  if (n === 0) return 0; // base case
  return n + sumN(n - 1);
}
console.log("Sum of 1 to 10:", sumN(10));

// Fibonacci sequence (nth number)
function fibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log("Fibonacci(6):", fibonacci(6)); // 8

/******************************
 NOTES:
 - Used completely new examples.
 - Intersection → [20,30,50]
 - Frequency → applied on numbers and words
 - Destructuring → extracts 2 values + rest
 - Remove duplicates → fruit names
 - Anagram → earth & heart
 - Recursion → sum of N and Fibonacci
******************************/
