// anagram
let s1 = ["cat, tea, pet, tac, act, eat"];
let s2 = ["cat, tca, eee, tea"];
function isAnagram(s1, s2) {
  if (s1.length != s2.length) return false;

  let freqObj = {};

  for (let i = 0; i < s1.length; i++) {
    freqObj[s1[i]] = (freqObj[s1[i]] || 0) + 1;
  }

  for (let i = 0; i < s2.length; i++) {
    if (!freqObj[s2[i]]) return false;
    freqObj[s2[i]] = freqObj[s2[i]] - 1;
  }

  for (let value of Object.values(freqObj)) if (value) return false;

  return true;
}

console.log(isAnagram(s1, s2));

function anagramString(s1, s2){
    for(let i=0;i<s1.length;i++){
        let anagrams="";
        for(let j=0;j<s2.length;j++){
            if(isAnagram(s1[i],s2[j])){
                anagrams+=s2[j]+" ";
            } 
            } 
            if (!anagrams.length) console.log(-1);
             else console.log(anagrams);
        }
    }
         

anagramString(s1, s2);



//for (let word2 of s2) {
    // let found = 0;
    //     for(let word1 of s1){
    //         if(isAnagram(word1,word2)){
    //         found++
    //         }
    //     }
    //     if(found>0){
    //         console.log(word2);

    //     }else{
    //         console.log("-1");
            
    //     }
    
    // }  