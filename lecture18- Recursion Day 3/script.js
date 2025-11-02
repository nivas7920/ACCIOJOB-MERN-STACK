// recursion questions->
 // given a parenthesis sequence determne if its valid or not
 // str= "()()(())"->valid
 // = "())()"->invalid
 // ="())(())("->invalid
// not usable for some test cases
 function  parenthesis(str){
    let count1=0;
    let count2=0;
    for(let i=0;i<str.length;i++){
        if(str[i]=="("){
            count1++
        }
        else {
            count2++
        }
    }
    if(count1==count2){
        console.log("valid");
        
    }
    else{
        console.log("invalid");
        
    }

 }
 let str=")))(((";
 parenthesis(str);
 // another approach
 function isValidParenthesis(str){
    
    let open = 0;
    let n= str.length;
    if(n%2) return false;
     for(let i=0;i<n;i++){
        if(str[i]==="(")open++
        else{
            if(open>0)open--;
            else return false;
        }
     }
     if(open!=0)return false;

    return true;
 }
 console.log("(((())))",isValidParenthesis("(((())))"));
 console.log("((())))",isValidParenthesis("((())))"));
 //Time Complexity: O(n)
//Space Complexity: O(1)



// generate all valid parenthesis of length N
let allValidParenthesis=[];
function allValid(n,str="", ind=0,open=0,close=0){
    if(open<close)return;
    if(ind==n){
        if(open==close){
        allValidParenthesis.push(str);
        }
        return;
    }
    allValid(n,str+"(",ind+1,open+1,close);
    allValid(n,str+")",ind+1,open,close+1);

}
allValid(4);
allValid(6);
console.log({allValidParenthesis});
//tc==O(2^n)
// sc== O(n)


//string permutation
//swapping two indices in string 
function swapStr(str, i, j){
    let arr=str.split("");
    [arr[i],arr[j]]=[arr[j],arr[i]];
    str= arr.join("");
    return str;
}
 



let strPermutation = [];

function permutstions(str,ind=0){
if(ind==str.length-1){
    strPermutation.push(str);
    return;
}
for(let i=ind;i<str.length;i++){
    let swappedStr = swapStr(str,ind,i);
    permutstions(swappedStr, ind+1);
}
}
permutstions("ban");
console.log({strPermutation});
//TC==~ O(n.n!)
