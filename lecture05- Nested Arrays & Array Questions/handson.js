/* ===================== ROTATIONS in Array  ========================*/
/* Q: Rotate array right (clockwise) by 1 element */ 
/* Q: Rotate array left (anti - clockwise) by 1 element */ 

const arr3=[10,20,30,40,50,];
arr3.pop();
console.log(arr3);
arr3.unshift(50);
console.log(arr3);

const arr4=[10,20,30,40,50,];
arr4.shift();
console.log(arr4);
arr4.push(10);
console.log(arr4);


/* Q: Write a function to Rotate array right (clockwise) by k element */ 

function rotateRight() {
  let arr = [1, 2, 3, 4, 5]; 
  console.log("Intial array:",arr);
  let n = arr.length;
  let k = 3;  
  for (let i = 0; i < k; i++) {
    let last = arr[n - 1];    
     // take last element
    for (let j = n - 1; j > 0; j--) {
      arr[j] = arr[j - 1];    
       // shift right
    }
    arr[0] = last;             
    // put last in front
  }
  console.log("After Right Rotation of k size:", arr);
}
rotateRight();

// TIME COMPLEXITY = O(n*k)
// SPACE COMPLEXITY= O(1)

/* Q: Write a function to Rotate array left (anti - clockwise) by k element */ 
function rotateLeft() {
  let arr1 = [1, 2, 3, 4, 5];
  console.log("Intial array:",arr1);
    
  let n = arr1.length;
  let k = 2;  

  for (let i = 0; i < k; i++) {
    let first = arr1[0];        
    for (let j = 0; j < n - 1; j++) {
      arr1[j] = arr1[j + 1];     
    }
    arr1[n - 1] = first;        
  }

  console.log("After Left Rotation of k size:", arr1);
}

rotateLeft();
// TIME COMPLEXITY = O(n*k)
// SPACE COMPLEXITY= O(1)
