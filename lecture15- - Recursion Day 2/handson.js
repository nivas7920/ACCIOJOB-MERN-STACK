function gcd(a, b) {
  while (a!=0) {
    let temp=a;
    a=b%a;
    b=temp;
  }
  console.log(b);
  
}
gcd(-15, -25);
// recursive gcd
function rGCD(a,b){
if(a==0)return b;

return (rGCD(b%a, a));
}
console.log(rGCD(15,-25));// works on negative numbers also


// gcd of array 
let arr = [];
let gcdArr = 0;
for(let i=0;i<arr.length;i++){
    gcdArr = rGCD(gcdArr, arr[i]);
}
console.log("GCD of given array is:",gcdArr);


// binary exponential------a^b
// write the function to find A raised to power B
//ex= 2^10= 1024

function exponentialPower(a,n){
    let result=1;
    for(let i=0;i<n;i++){
        result*=a;
    }
   return result;

   
}
console.log(exponentialPower(5,10));
// another approach for binary exponential

function power(a, n){
 while (n--) {
        result*=a
    }
    return result;
}
console.log(power(2,10));

// fibonacci
function fibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log("Fibonacci(6):", fibonacci(5)); 
