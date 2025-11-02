/* Given a parenthesis string consisting of only '(' & ')'
check if it's a valid parenthesis or not
*/
function isValidParenthesis(str){
    let n=str.length;
     if (n % 2) return false;
     let open=0;
     let square =0;
     let curly=0;
     for(let i=0;i<n;i++){
        if(str[i]=="(")open++;
        else{
            if(open>0)open--;
            else return false;
        }
        if(str[i]=="[")square++;
        else{
            if(square>0)square--;
            else return false;
        }
        if(str[i]=="{")curly++;
        else{
            if(curly>0)curly--;
            else return false;
        }
     }
     if(open!=0 || square!=0 || curly!=0) return false;
     return true;
}
console.log("(({{[]}}))", isValidParenthesis("(({{[]}}))"));
console.log("((())))", isValidParenthesis("((()))"));
console.log("()()()[][{}}", isValidParenthesis("()()()[][{}}"));
console.log("()()()(())", isValidParenthesis("()()()(())"));
console.log("()()()[][{}}", isValidParenthesis("()()()[][{}}")); 
console.log("(({{[]}}))", isValidParenthesis("(({{[]}}))")); 


/* Generate all valid parenthesis of length N */
 /* this means the string contains invalid combination
  as there's no opening bracket for last closing bracket */
let allValidParenthesis = [];
function generateParenthesis(n, str = "", ind = 0, open = 0) {
 
  if (open < 0) {
    return;
  }

  if (ind == n) {
    if (open == 0) {
      allValidParenthesis.push(str);
    }
    return;
  }

  generateParenthesis(n, str + "[", ind + 1, open + 1);
  generateParenthesis(n, str + "]", ind + 1, open - 1);
}

generateParenthesis(6);
console.log({ allValidParenthesis });

/* Function to print all the permutations of a string */
function swapStr(str,i,j){
    let arr=str.split("");
    [arr[i],arr[j]]=[arr[j],arr[i]];
    return arr.join("");
}
let strPermutation=[];
function permutations(str, ind=0){
    if(ind== str.length-1){
        strPermutation.push(str);
        return;
    }  for (let i = ind; i < str.length; i++) {
    //creating a new swapperStr, inorder to keep str unchanged after swapping
    let swappedStr = swapStr(str, ind, i); 
    permutations(swappedStr, ind + 1);
}

}
permutations("123");
console.log({ strPermutation });

 