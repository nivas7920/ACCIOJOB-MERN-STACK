// function prefixSum(arr){

//     let res = [];

//     let currentSum = 0;

//     for(let num of arr){

//         currentSum += num;

//         res.push(currentSum);

//     }

//     return res;

// }
// function printRatios(arr) {
//   // write code here
//   let positiveCount = 0;
//   let negativeCount= 0;
//   let zeroCount= 0;
//   for(let i=0;i<arr.length;i++){
//     if(arr[i]>0){
//       positiveCount++;
    
//     }
//     else if(arr[i]<0){
//       negativeCount++;
     
//     }
//     else if(arr[i]===0){
//       zeroCount++;
     
//     }
   
    
  
//   }
 
//   const total=arr.length;
//   positiveCount=positiveCount/total;
//   negativeCount=negativeCount/total;
//     zeroCount=zeroCount/total;
//   console.log(positiveCount.toFixed(6));
//   console.log(negativeCount.toFixed(6));
//   console.log(zeroCount.toFixed(6));
// }
// TC= O(n)
// SC=O(n)
// const num = 23.5;

// console.log(num.toFixed(3) + 12);


// function Pairs(arr, k) {
 
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (Math.abs(arr[i] - arr[j]) === k) {
//         count++;
//       }
//     }
//   }
//   return count;
  
// }
// function ArrayProblem6(n, arr) {
//   let lastEvenIndex = -1;
//   let minDistance = Infinity;
//   for(let i=1;i<arr.length;i++){
//     if(arr[i]>0 && arr[i]%2==0){
//       if(lastEvenIndex !== -1){
//         let distance = i - lastEvenIndex;
//           if (distance < minDistance){
//           minDistance = distance;
//          }
//       }
//       lastEvenIndex = i;
      
//     }
      
//   }
//   return( minDistance === Infinity) ? -1 : minDistance;

// }
// TC=O(N)
// SC=O(1)
// function ArrayProblem6(n, arr) {

//   // Write code here

//   let prevEvenIndex = -1;

//   let minDist = n;

//   for(let i = 0; i < n; i++){

//     //positive and even number

//     if(arr[i] > 0 && arr[i] % 2 == 0){

//       //if there exist a previous even element

//       if(prevEvenIndex != -1){

//         minDist = Math.min(minDist, i - prevEvenIndex);

//       }

//       prevEvenIndex = i;

//     }

//   }

//   //if there are less than 2 even numbers, 

//   //minDist will never change and still be same as N

//   return minDist == n ? -1 : minDist;

// }
let arr = [1, 2, 1, 4, 2, 2, 4];
let visited = []; 

for (let i = 0; i < arr.length; i++) {
  if (visited[i]) { 
    continue;
  }

  let count = 1;
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] === arr[j]) {
      count++;
      visited[j] = true; 
    }
  }
  console.log(arr[i] + " -> " + count);
}