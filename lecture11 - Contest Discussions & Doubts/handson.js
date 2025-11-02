 // PRIME NUMBER CHECK using switch
// A prime number is a number greater than 1
// which has no divisors other than 1 and itself
let num = 29; 
let isPrime = true;
if (num < 2) {
  isPrime = false;
} else {
  for (let i = 2; i <= Math.floor(num / 2); i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
}
switch (isPrime) {
  case true:
    console.log(num + " is a Prime number");
    break;
  case false:
    console.log(num + " is NOT a Prime number");
    break;
}

// ARMSTRONG NUMBER CHECK using switch
// An Armstrong number is a number equal to
// sum of its own digits each raised to the power of digits count

 num = 153;  

let temp = num;
let digits = 0;
let copy = temp;
while (copy > 0) {
  digits++;
  copy = Math.floor(copy / 10);
}

let sum = 0;
copy = temp;
while (copy > 0) {
  let digit = copy % 10;
  let power = 1;
  for (let i = 0; i < digits; i++) {
    power = power * digit;
  }

  sum += power;
  copy = Math.floor(copy / 10);
}

let isArmstrong = (sum === num);
switch (isArmstrong) {
  case true:
    console.log(num + " is an Armstrong number");
    break;
  case false:
    console.log(num + " is NOT an Armstrong number");
    break;
}

// STUDENT GRADING SYSTEM using switch
// Marks are hardcoded. Switch gives grade.

let marks = 78; 
let gradeCode = 0;

if (marks >= 90) {
  gradeCode = 1; 
} else if (marks >= 75) {
  gradeCode = 2; 
} else if (marks >= 50) {
  gradeCode = 3; 
} else {
  gradeCode = 4; 
}

switch (gradeCode) {
  case 1:
    console.log("Grade A (Excellent!)");
    break;
  case 2:
    console.log("Grade B (Good Job!)");
    break;
  case 3:
    console.log("Grade C (Keep Improving!)");
    break;
  case 4:
    console.log("Fail (Better Luck Next Time!)");
    break;
}
