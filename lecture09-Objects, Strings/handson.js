// how many ways we can write the property name
 const person={
    name:"Raj",
    age: "21",
    2: 22
 };
// console.log(person);
 //console.log([2]);
// console.log(person[2]);
 // another way which is new key word
const man = new Object();
man.name ="rahul";
man.height ="5'10";
man.address = 'Pune' ;
man.info = function()      {
    return "Hi, I'm "+this.name + "and  my height is "+ this.height;
    
};
//man.info();
console.log(man.info(),man);
console.log({man});
 // how we can access the array values of object
 man.arr1=["ABC","XYZ",'PQR',`IJK`];
 for(let i of man.arr1){
    if(i ==='XYZ'){
    console.log(i[1]);
 }
 }

 // strings -> collections of characters
 // different types of writing the string
 //using single code
 let str='hi i am "rahul"';// here we can use double code for highlight the word
 console.log(str);
 //another method i.e double code
 str= "hi i'm jay";
 console.log(str);
 //and the we can use backtick in writing string
let name="vaibhav";
 str= `hi my name is ${name}`;// we use template literals
 console.log(str);  
 
 // methods on string
 str=`Every pro was once a beginner — keep learning JavaScript`;
 // include function-> returns boolean value
  console.log(str.includes("going"));  
  //typeOf
  console.log("type of this data is:", typeof str);
 
 // replace
  console.log(str.replace("beginner","learner"));  
  // replaceall
   console.log(str.replaceAll(`a`,"b"));  
    console.log({str}); //-> it give the object type i.e {}
    // trim
let str1  = `Every pro was once a beginner — keep pro learning JavaScript  `;
console.log(str1);
console.log(str1.trim());
console.log({str1});

//substring
console.log(str1.substring(12,-17));
console.log(str1.substring("abc",12));// it checks string =0 
console.log(str1.substring("02",'5'));
console.log(str1.substring(45,0));

// split method-> it returns the array of words, characters etc
console.log(str1.split(""));// after every character it add comma
console.log(str1.split(" "));// after every word and space it add comma 
let words = str1.split(" ");
console.log(words);
console.log("===",str1.split("pro"));// after a it saprate the word
console.log(str1.split("",3));// it gives only upto index=2 i.e e v e
console.log(str1.split(" ",9));
// splice-> it can not use in string
/* similarly we can not use like push ,pop , shift, unshift, join methods directly in strngs
beacause in javascript strings are immutable, while we can use it using split or join method 
it means it firstly converted into array then we can perform these operations.*/

console.log(str1);
console.log(str1.toLocaleLowerCase());
console.log(str1.toLowerCase());
console.log(str1.toUpperCase());
console.log(str1.charCodeAt(29));// return the ascii value
console.log(str1.charAt(4));// return the character present at index
console.log(str1.length);// return the length of string
console.log(str1.endsWith(""));// checks the data type with end

//Rest operator -> ... -> combines all the arguments and transforms them into an array
function socialMedia (app, ...typesOfApp){
   console.log(typesOfApp);
   for(let app of typesOfApp)
      apps.push(app);
      console.log({apps});
   
}
   const apps=["insta",'whatsapp',`telegram`];
   socialMedia(apps,"youtube","linkedin",`snapchat`);
   // destructuring
    const [bike, ...superBike]=["hero",'honda',`royal enfield`,"suzuki","bmw"];
    console.log({bike,superBike});//
   //spread operator
   const arrr1=["hi","hello","by","bye"];
   console.log({arrr1});
   console.log("spreaded array: ",[0,...arrr1,902,"sp","adypu"]);
   
   /* HW: use spread operators with OBJECTS */
  /*The spread operator (...) in objects is mainly used for copying, merging,
   and overriding properties in a clean way.
      In short:
      The spread operator in objects is used for:
      1]Copying objects
      2]Merging multiple objects
      3]Adding or updating properties */
   //1] clone operator
   const student = { name: "Sakshi", branch: "CSE" };
   const copyStudent = { ...student };// creats shallow(copy) copy of original.
   console.log("Original:", student);
   console.log("Clone:", copyStudent);
/*Spread operator (...) = cloning / merging tool
   But it only makes a shallow copy.
   Example: If object has nested objects, only references are copied.*/
//2] merge operator
   const obj1 = { 
      name: "Rahul",
      age: 22
    };
   const obj2 = { 
      city: "Pune",
      height: "5'10" 
   };
   const merged = { ...obj1, ...obj2 };
   console.log("Merged Object:", merged);// merge two objects using ...(spread operator)
//3] override operator
   const user = { 
      name: "Rahul", 
      city: "Pune" 
   };
   console.log("before updated",user);
   const updatedUser = { ...user, city: "Mumbai" };
   console.log("Updated User:", updatedUser);// update city using spread
//4]rest + spread together
   const person1 = { 
      name1: "Rahul", 
      age: 22, city: "Pune", 
      country: "India" 
   };
   const { name1, ...rest } = person1;
   console.log("Name:", name1);// we get which we want only value
   console.log("Rest of object:", rest);// and rest of values in object
