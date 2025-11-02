 let arr=[-1,5,-3,2,-1,3];
function maxSumOfSubArray(){
    let maxSum=arr[0];
    let startIndex=0;
    let endIndex=0;
    for(let i=0;i<arr.length;i++){
        let subSum=0;
        for(let j=i;j<arr.length;j++){
            subSum+=arr[j];
            if(maxSum<subSum){
                maxSum=subSum;
                startIndex=i;
                endIndex=j;
            }            
        }
    }
    console.log("maximum subarray sum from ", startIndex,"to",endIndex,"is",maxSum);
    
    //return maxSum
}
maxSumOfSubArray(arr);
// tc=O(n*n)
// sc=O(n)

// count the number of subarrays whos sum is K
const arr2=[1,2,-3,0,1,-1,1];
function countSubArray() {
    let count=0;
    let k=0;
    for(let i=0;i<arr2.length;i++){
        let sum=0;
        for(j=i;j<arr2.length;j++){
            sum+=arr2[j];
            if(sum==k){
                count++;
            }
        }
    }

    console.log("count of subarrays:",count);
    
}

countSubArray();
// tc=O(n*n)
// sc=O(n)

let arr5=[1,2,-3,0,1,-1,1];
function longestSubArraySum(arr,k) {
    let length=0;
    for(let i=0;i<arr5.length;i++){
        let sum=0;
        for(let j=i;j<arr5.length;j++) {
            sum+=arr5[j];
            if(sum===k)
                length=Math.max(length,j-i+1);
        }
    }

   return length; 
}
console.log("longest subarray sum length is:",longestSubArraySum(arr5,0));

let arr6=[1,2,-3,0,1,-1,1];
function subArraySize(arr,k){
    let result=[];
    let n=arr6.length;
    for(let i=0;i<=n-k;i++){
       let subArray1=[];
        for(let j=i;j<i+k;j++){
            subArray1.push(arr6[j]);
        }
        result.push(subArray1);
    }
    console.log(result);
}
subArraySize(arr6,3);   