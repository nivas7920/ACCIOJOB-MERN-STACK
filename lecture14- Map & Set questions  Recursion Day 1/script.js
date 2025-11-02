let arr4 = [1, 2, 4, 5, 6],
  arr5 = [2, 5, 6, 3, 1, 3];
console.log("array 6:", arr4);
console.log("array 7:", arr5);
let intersection = [];
let arr4Set = new Set(arr4);
for (let i = 0; i < arr5.length; i++) {
  if (arr4Set.has(arr5[i])) intersection.push(arr5[i]);
}
intersection = [...new Set(intersection)];
console.log({ intersection });
/*Another approach->
let intersectionSet = new Set (intersection);
intersection=[...intersectionSet];
*/

//que find the frequency of each element in the arr
let arr = [2, 3, 4, 1, 0, 1, 2, 3, 4, 5, 10];
let map = new Map();
for (let i = 0; i < arr.length; i++) {
  if (map.has(arr[i])) {
    map.set(arr[i], map.get(arr[i]) + 1);
  } else {
    map.set(arr[i], 1);
  }
}
for (let key of map.keys()) console.log(key, map.get(key));

for (let [key, value] of map) console.log({ key, value });
// rest operator and destructuring
const [a, ...b] = [1, 2, 3, 4];
console.log({ a, b });

// remove duplicates from an array print the array
arr = [1, 2, 3, 2, 3, 5, 1, 3, 2];
let array = new Set(arr);
console.log([array]);
console.log([...new Set(arr)]);

// find the frequency of all words in a paragraph (all spaces, A-Z & a-z letters will be there)
const paragraph =
  "Hello how are you How was your day Did you eat hoW did you find that";

//1st-> split the paragraph
//2nd-> checks the lowercase or uppercase
//3rd-> apply map method and find the frequency of words
let lowerString = paragraph.toLowerCase();
console.log(lowerString);

let words = lowerString.split(" ");
console.log(words);
let freq = new Map();
for (let i = 0; i < words.length; i++) {
  if (freq.has(words[i])) {
    freq.set(words[i], freq.get(words[i]) + 1);
  } else {
    freq.set(words[i], 1);
  }
}
for (let key of freq.keys()) console.log(key, freq.get(key));

for (let [key, value] of freq) console.log({ key, value });

let wordFreq = {};
for (let [key, value] of freq) wordFreq[key] = value;
console.log(wordFreq);

for (let i = 0; i < words.length; i++)
  freq.set(words[i], (freq.get(words[i]) || 0) + 1);

// anagram -> when two words have same exact letters but order may change
// listen
// silent
// dam
// mad
// asdsadd
// ssaaddd
// all are anagrams

let s = "silent",
  t = "listen";
//create a map of silent then traverse in listen and start decremenating freq of
// each element if it exists in map
function isAnagram(s, t) {
  if (s.length != t.length) return false;
  let freqObj = {};
  for (let i = 0; i < s.length; i++) {
    freqObj[s[i]] = (freqObj[s[i]] || 0) + 1;
  }
  for (let i = 0; i < t.length; i++) {
    if (!freqObj[t[i]]) {
      return false;
    } else {
      freqObj[t[i]] = freqObj[t[i]] - 1;
    }
  }
  for (let value of Object.values(freqObj)) if (value != 0) return false;
  return true;
}
console.log(isAnagram(s, t));
//TC=O(N+M)
// SC=O()

//Recursion
// bahane dhundne h ki recursive  ko  kaise reuse kr sake

//A. -> Base condition must always get hit
//B. ->combining return value of recursive and current function
function factorial(N) {
  if (N == 0) return 1; // must have base condition
  let fact = N * factorial(N - 1);
  return fact;
}
console.log(factorial(10));
console.log(factorial(5));
console.log(factorial(7));
// TC= O(n)
// SC=O(1)->however it uses call stack  space , but this is not cinsider in space complexity
function print1toN(N) {
  if (N == 0) return -1;
  console.log(N); // to print reverse counting
  print1toN(N - 1);
  console.log(N);
}
print1toN(10);
