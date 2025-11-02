// sorting day ->3
function insertionSort(arr){
    let n=arr.length;
    let ind=0;
    for(let i=1;i<n;i++){
        let firstElementOfUnsorted = arr[i];
        let indexToInsertAt= 0;
        for(let j=ind;j>=0;j--){
            if(arr[j]>firstElementOfUnsorted){
                arr[j+1]=arr[j];
            }else{
                indexToInsertAt = j+1;
                break;
            }
        }
        arr[indexToInsertAt]=firstElementOfUnsorted;
        ind++
    }
return arr;
}
let arr = [3,1,6,2,8,7,4];
console.log("sorted array using insertion sort:"+ insertionSort(arr).join(" "));


/*quick sort
que-> given an array place its last element at a position such that all smaller 
elements are in left and all greater elements are in right
input= [2,1,7,5,4]
op= [1,2,4,7,5] (if there are multiple answers , print any of them)
note- try to implement this in  o(n)tc
*/
function quickSortQue(arr){
    let n= arr.length;
    let lastIndex = arr[n-1];
    let ind=0;
    for(let i=0;i<n;i++){
        if(arr[i]<=lastIndex){
            [arr[i],arr[ind]]=[arr[ind],arr[i]];
            ind++;
        }
    }
    return arr;
}
arr= [2,7,1,5,4];
console.log(quickSortQue(arr));


//que => ip = [3,1,6,2,8,7,4]

// function quickSort(arr1, low, high){
    


// }
//  let arr1=[3,1,6,2,8,7,4];
//  console.log(quickSort(arr1));
 
 //sort()