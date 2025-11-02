//armstrong series
let a=1;
 let b=200;
// let num=153;
// let count=0;

// while(num>0){
//     count++;
//     num=Math.floor(num/10);
    
// }
// console.log(count);
// let num1=153;
//  let sum=0;
//  let original=num1;
// while (num1>0) {
//     let digit=num1%10;
//     sum+=digit**count;
//     num1=Math.floor(num1/10);

// }
 
// console.log(sum==original);
// function isArmstrong(num){
//     let count=0;
//  let original=num;
// let   num1=num;
// while(num>0){
//     count++;
//     num=Math.floor(num/10);
   
// }
// // num=153;
//  let sum=0;

// while (num1>0) {
//     let digit=num1%10;
//     sum+=digit**count;
//     num1=Math.floor(num1/10);

// }

// return sum==original;
// }
// let ans="";
// for(let i=a;i<=b;i++){
//     if(isArmstrong(i))
//         ans+=i+" ";

// }
// console.log(ans);
// prime no range
function isPrime(num){
    if(num==1){
        return false;
    }
for(let i=2;i<=Math.sqrt(num);i++){
    if(num%i==0){
        return false;
    }
    
}
return true;
}
for(let i=a;i<=b;i++){
    if(isPrime(i))
    console.log(i);
    
}
// nested for loop
for(let i=1;i<=4;i++){
    let str="";
    for(let j=1;j<=i;j++){
        str+="* ";
    }
    console.log(str);
    
}
//second last zero checker
let n=120;
count=2;
let d;
if(n<10){
    console.log("not possible");
    
    
}else{
while (n>0&&count>0) {
    
     d=n%10;
    n=Math.floor(n/10);
    count--;
  

}

  console.log(d);}
  function add(a=0,b,c){

  }
  console.log(
  (true==true));
  console.log(
  ([1]==[1]));
  let k=num;
  
  