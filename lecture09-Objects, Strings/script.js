const obj={
    property1:"propery one",
    property2:"property two",
    1:"one"
}
console.log(obj.property3);
console.log(obj[1]);
//another way of creating an object
const newObj = new Object();
newObj.a = "a";
newObj.b = "b";
newObj.c = "c";
newObj.d = "d";

console.log({newObj});
//key can have array value
obj.arrPropery=[1,2,3,4,5]
for(let i of obj.arrPropery)
    console.log(i);

//strings
//case using single codes
let str='a';
console.log(str);
//case using double codes
str="a";
console.log(str);
//case using array
str=['a','b'];
console.log(str);
// case using backticks
str=`a`;
console.log(str);
// some more features of back ticks we can insert anhy variable inside backticks
let personName="pratik";
str=`Hi i'm ${personName} and take "javascript "classes`;
console.log(str);
//some methos in string
str=" we'r going to see some methods of strings of w  " ;
//includes function -> returns if the given strig is present in str or not
console.log(str.includes('goingg'));
//replace function relpace only first occurence of w to x
console.log(str.replace("w",'x'));
//replace function relpace  all the  w to x
console.log(str.replaceAll("w",'x'));
console.log({str});
//trim delet the extra space from strting and ending if it have
console.log(str);
console.log(str.trim());
console.log({str});

// substring() -> gives substring, 
console.log(str.substring(3,9));// gives substring starting from index 3 and ending at 8(9-1)
console.log(str.substring(3));// gives substring starting from index 3 to till end of string
console.log(str.substring(-3));//minus value it change start from index 0
console.log(str.substring(-3,-10));// it gives empty string->index 0 to 0
console.log(str.substring("3"));// gives substring starting from index 3 to till end of string
console.log(str.substring(-3,100));// it gives  substring starting from index 0 to till end of string
// slice()-> almost same as substring  but it changes(-)values deifferently
console.log(str.slice(3));//return the string from 3 to n
console.log(str.slice(3,5));// gives element index 3 to 4
console.log(str.slice(-3));// gives last 3 elements
console.log(str.slice());// returns full string
console.log(str.slice(-100));// in case number is greater than length of string it delete all the elements
console.log(str.slice(-9,-3));// gives the last some element which is 6
console.log(str.slice(-3,0));// gives empty string

// split()-> spits the string based on given character
console.log(str.split(","));//
const line="hello welcome to mern stack course";
console.log(line.split(" "));
const line1="hello welcome to mern stack course  ";
console.log(line1.split(" "));// extraspace count the string length
//toUpperCase()
console.log(line.toUpperCase());
//wrapper objects
const string="vaibhav";
const number=67;
const bool=true;
const object={
    name:"vaibhav"
};
console.log(string.__proto__);
console.log(number.__proto__);
console.log(bool.__proto__);
console.log(Object.__proto__);

console.log(Number("123"));

// spread and rest operator


// rest operator-> combines all the arguments and transforms them into an array
function addStudent (students, ...studentsNames){
    console.log(studentsNames);// prints array
    for(let student of studentsNames)
        students.push(student);
        console.log({students});
        
    
}
const students=['abb','bcc','cdd'];
addStudent(students,"abhi","rishi","om");

//destructuring
const [hi, ...bye]=["hi","bye","byee","byeee"];
console.log({hi,bye});

//spread operator
const arr1=[1,2,3,4];
console.log({arr1});
console.log("spreaded array:",[0,...arr1,67,89,100]);

// hw -> how to work spread operator in object
