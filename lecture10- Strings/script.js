/*que-> given a variables name separated by space 
 write two functions 1] convert this variablename to camelcase
 2]convert this too snakecase
*/
 
const str = "student first name";
function toCamelCase(text) {

  let words = text.split(" ");
  let result = words[0];
  for (let i = 1; i < words.length; i++) {
    let word = words[i];
    result += word[0].toUpperCase() + word.slice(1);
  }
  return result;
}
console.log("string in camelcase is: ",toCamelCase(str));  

function toSnakeCase (){
    console.log("the string in snakecase is: ",str.trim().replaceAll("_",""));
}
toSnakeCase(str);


//reverse a string 
function reverseString(str1) {
  let reversed = "";
  str1.trim();
  for (let i = str1.length - 1; i >= 0; i--) {
    reversed += str1[i];   //str1[str1.length-i-1]; we get also ans but loop will go from 0 to length-1
  }
  return reversed;
}
const str1 = "Every pro was once a beginner — keep pro learning JavaScript";
console.log(str1);

console.log(reverseString(str1));  
// time complexity= O(n)
//space complexity= O(1)

//check if a string is palindrome 
function ispalindrome(str1){
      let reversed = "";
      str1.trim();
  for (let i = str1.length - 1; i >= 0; i--) {
    reversed += str1[i];   
  }
  if(str1===reverseString(str1)){
    return true;
  }
  else {
    return false;
  }
}
console.log("is palindrome:",ispalindrome(str1));
// time complexity= O(n)
//space complexity= O(1)
//find the no of words in a string
function noOfWords(str1){
    return str1.trim().split(" ").length;
   
     
}
 //console.log("no of words in string is",word.length);
console.log(noOfWords(str1));

//find the longest word in string
 function longestWord(str1) {
  let words = str1.trim().split(" ");   
  let longest = "";             

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longest.length) {
      longest = words[i];    
    }
  }

  return longest;
}

console.log(longestWord(str1));  
// time complexity= O(n)
//space complexity= O(1)

//function to find first non-repeating character->indexOf and lastIndexOf methods
const str2=" aabbcdde "
  function nonRepeatingChar(str1) {
    str1.trim();
  for (let i = 0; i < str1.length; i++) {
    let char = str1[i];
    
    if(str1.indexOf(char)===str1.lastIndexOf(char))
        return char;
  }
  return null;   
}
console.log("non repeating char:",nonRepeatingChar(str2));
// time complexity= O(n)
//space complexity= O(1)

/* home work que-> string ="Hi im Vaibhav"
op=iH iM vaibhaV*/