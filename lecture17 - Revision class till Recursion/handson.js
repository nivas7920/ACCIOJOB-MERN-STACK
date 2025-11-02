//pattern 1->
function pattern1(N) {
  for (let i = 0; i < N; i++) {
    let str = "";
    let startChar = String.fromCharCode(65 + i); 
    for (let j = 0; j <= i; j++) {
      str += String.fromCharCode(startChar.charCodeAt(0) + j);
    }
    console.log(str);
  }
}
pattern1(5);


// pattern 2
function pattern2(N) {
  for (let i = 0; i < N; i++) {
    let str = " ".repeat(N - i - 1);
    str += "*";
    if (i > 0) str += " ".repeat(2 * i - 1) + "*";
    console.log(str);
  }
  for (let i = N - 2; i >= 0; i--) {
    let str = " ".repeat(N - i - 1);
    str += "*";
    if (i > 0) str += " ".repeat(2 * i - 1) + "*";
    console.log(str);
  }
}
pattern2(4);

// substring
function substring(s) {
  let set = new Set();
  let left = 0;
  let count = 0;
  let start = 0;

  for (let i = 0; i < s.length; i++) {
    while (set.has(s[i])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[i]);

    if (i - left + 1 > count) {
      count = i - left + 1;
      start = left;
    }
  }

  return s.substring(start, start + count);
}

console.log(substring("abbcda")); 

