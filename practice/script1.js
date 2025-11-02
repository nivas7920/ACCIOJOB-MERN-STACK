//assignment que-> camelCase
let input="how_are_you";
let ccase="";
    for(let i = 0; i < input.length; i++){
      if(input[i] === '_'){
        ccase += input[i+1].toUpperCase();
        i++;
      } else ccase += input[i];
    }
    console.log(ccase);
//Alphabet Coverage Check
 input = "We promptly judged antique ivory buckles for the NEXT ";
let isPangram = false;
// Array to track presence of each letter (26 letters)
let found = [];
for (let i = 0; i < 26; i++) {
  found[i] = 0;
}
// Loop through each character
for (let i = 0; i < input.length; i++) {
  let ch = input[i];
  // Convert uppercase to lowercase manually
  if (ch >= 'A' && ch <= 'Z') {
    ch = String.fromCharCode(ch.charCodeAt(0) + 32);
  }
  // If it's a lowercase letter, mark it as found
  if (ch >= 'a' && ch <= 'z') {
    let index = ch.charCodeAt(0) - 'a'.charCodeAt(0);
    found[index] = 1;
  }
}
// Check if all letters are found
let count = 0;
for (let i = 0; i < 26; i++) {
  if (found[i] === 1) {
    count++;
  }
}
if (count === 26) {
  isPangram = true;
}
console.log(isPangram ? "pangram" : "not pangram");