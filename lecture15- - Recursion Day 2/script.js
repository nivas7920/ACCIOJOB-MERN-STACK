// write a recuursive function to find the sum of first N natural numbers
function NumberSum(N) {
  if (N <= 0) return 0;
  return N + NumberSum(N - 1);
}
console.log(NumberSum(5));
console.log(NumberSum(-5));
console.log(NumberSum(0));
console.log(NumberSum(10));
//TC=O(N)
//SC=O(1)
// GCD -> sabse bada number jo both two numbers ko divide kare
/* GCD(8, 32)->4
   GCD(5, 15)->5
   GCD(1, 17)->1
   GGCD(0, 20)->20
 */
//iterative function
function gcd(a, b) {
  while (a!=0) {
    let temp=a;
    a=b%a;
    b=temp;
  }
  console.log(b);
  
}
gcd(15, 25);
gcd(0,20);
gcd(1,17);
//TC=O(log a,b)
//SC=  O(1)
// recursive gcd
function rGCD(a,b){
if(a==0)return b;

return (rGCD(b%a, a));
}
console.log(rGCD(25,15));
// GCD of more than 2 numbers
// gcd (a,b,c)=gcd(gcd(a,b),c)=gcd(a,gcd(b,c))=(b,gcd(a,c))





// gcd of array 
let arr = [27,12,18,24,30];
let gcdArr = 0;
for(let i=0;i<arr.length;i++){
    gcdArr = rGCD(gcdArr, arr[i]);
}
console.log("GCD of given array is:",gcdArr);
// fibonacci
function fibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log("Fibonacci(6):", fibonacci(5)); 
//TC=O(2^n)
//SC=O(1)
// time and space calculations 10^7 or 8 se jada nhi chal sakti
// negative gcd H.W
// fibonacci



// binary exponential------a^b
// write the function to find A raised to power B
//ex= 2^10= 1024

function exponentialPower(a,n){
    let result=1;
    // for(let i=0;i<n;i++){
    //     result*=a;
    // }
   // return result;

    while (n--) {
        result*=a
    }
    return result;
}
console.log(exponentialPower(2,10));


 function binaryExponential(a,n){
    if(n==0)return 1;
    if(n==1)return a;
    
    let temp = binaryExponential(a, Math.floor(n/2));
    return temp*temp*a**(n%2);
 }
 console.log(binaryExponential(5,15));
 