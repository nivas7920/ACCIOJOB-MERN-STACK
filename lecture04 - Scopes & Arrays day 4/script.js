// // x=10;
// // console.log(x);

// // function sayHi(){
// //     for(let i=1;i<=x;i++)console.log("hi",i);
    
// // }
// // sayHi();
let arr=[[1,2,3],[4,5,6],[7,8,9]];
for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr[i].length;j++){
        console.log(arr[i][j]);
        
    }
}

// const arr6 = [
//   [1, 2, 3, 4, 5, 6],
//   [2, 6, 12, 43, 3, 5],
//   [8, 10, 34, 23, 12, 8],
// ];
// function reverseCol(arr6){
//   let n = arr6.length;
//   let m = arr6[0].length;
//   for(let j=0;j<m;j++){
//     if( j %2 !==0 ){
//       for(let i=0;i<n-1;i++){
//         let temp = arr6[i][j];
//         arr6[i][j] = arr6[n-i-1][j];
//         arr6[n-i-1][j] = temp;
//       }
     
//     }
//      console.log(arr6);
    
//   }
  
// }
// reverseCol(arr6);



// const teams = ["csk", "mi", "rcb", "kkr", "gt"];
// if(teams.includes("kkr")){

//     let i=teams.indexOf("kkr");

//     teams[i]="lsg";

// }

// console.log(teams)

// const otherTeams=["rr","dd","srh"]

// console.log(teams.concat(otherTeams));
// let n=5;
// let fact=1;
// for(let i=1;i<=n;i++){

//     fact=fact*i;

// }

// console.log(fact);
// let arr=[4,10,6,8];

// function calculate_nCr(n, r,arr) {
//   function factorial(num) {
//   let fact = 1;
//   for (let i = 1; i <= num; i++) {
//     fact *= i;
//   }
//   return fact;
// }
// const factN=factorial(n);
// const factR=factorial(r);
// const factNR=factorial(n-r);
// const ans=factN/(factR*factNR)
// return ans;
// }
// console.log(ans);
// const arr = [4, 10, 6, 8];
// const r = 4;

// function combination(n, r) {
//   function factorial(num) {
//     let fact = 1;
//     for (let i = 1; i <= num; i++) {
//       fact = fact*i;
//     }
//     return fact;
//   }
//   const factN = factorial(n);
//   const factR = factorial(r);
//   const factNR = factorial(n - r);
//   return factN / (factR * factNR);
// }
// let arr2 = [];
// for (let i = 0; i < arr.length; i++) {
//   let result = combination(arr[i], r);
//   arr2.push(result);
// }

// console.log(arr2);
function findAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]; 
  }
  let avg = sum / arr.length;
  return avg;
}

const arr1 = [8, 4, 3, 5];
console.log(findAverage(arr1));
// function ArrayProblem1(n, arr) {
 
//   let max = arr[0];
//   let index = 0;
//   for(let i=1;i<=arr.length;i++){
//     if (arr[i]>max){
//       max = arr[i];
//       index = i;
//      }
      
//   }
//   return index;
// }
function indexOfElement(N, X, arr1) {
  
   let index=[];
  for(let i=0;i<arr.length;i++){
    if(arr[i]===X){
      index.push(i+1);
    }
}
if (index.length===0){
  console.log(-1);
}
else{
  console.log(index.join(' '));
}

}