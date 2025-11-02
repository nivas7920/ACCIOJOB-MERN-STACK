/* home work que-> string ="Hi im Vaibhav"
op=iH iM vaibhaV*/
function transformString(str1) {
  let words = str1.trim().split(" ");
  let result = [];

  for (let word of words) {
    if (word.length === 1) {
      if (word === word.toUpperCase()) {
        result.push(word.toLowerCase());
      } else {
        result.push(word.toUpperCase());
      }
    } else {
      let first = word[0];
      if (first === first.toUpperCase()) {
        first = first.toLowerCase();
      } else {
        first = first.toUpperCase();
      }
      let last = word[word.length - 1];
      if (last === last.toUpperCase()) {
        last = last.toLowerCase();
      } else {
        last = last.toUpperCase();
      }
      let middle = word.slice(1, word.length - 1);
      result.push(first + middle + last);
    }
  }
  return result.join(" ");
}

let str1 = "Hi im Vaibhav";
console.log(transformString(str1)); // iH iM vaibhaV

// 1) Count vowels in a string
const str ="every PRO was once a BEGINNER";
function countVowels(str) {
  let vowels = "aeiouAEIOU";
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i]) !== -1) {
      count++;
    }
  }
  return count;
}
console.log("Vowels count:", countVowels(str));
// 2) Count consonants in a string
function countConsonants(str) {
  let vowels = "aeiouAEIOU";
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    if (char >= "a" && char <= "z" && vowels.indexOf(char) === -1) {
      count++;
    }
  }
  return count;
}
console.log("Consonants count:", countConsonants(str));
// 3) Frequency of each character
function charFrequency(str) {
  let freq ={};
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char !== " ") { 
      if (freq[char]) {
        freq[char]++;
      } else {
        freq[char] = 1;
      }
    }
  }
  return freq;
}
console.log("Character Frequency:", charFrequency(str));
// 4) Convert string to Title Case
function toTitleCase(str) {
  let words = str.trim().split(" ");
  let result = "";
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    // Capitalize first letter, keep rest lowercase
    result += word[0].toUpperCase() + word.slice(1).toLowerCase() + " ";
  }
  return result.trim();
}
console.log("Title Case:", toTitleCase(str));
/* 
Question:
Write a function to remove duplicate characters from a string.
Keep the first occurrence and remove the rest.
*/

function removeDuplicates(str) {
  let result = ""; // final string without duplicates

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    // check if character is already in result
    if (result.indexOf(char) === -1) {
      result += char; // add only first occurrence
    }
  }

  return result;
}
console.log(removeDuplicates(str));  