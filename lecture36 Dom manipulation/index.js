
console.log(window.document.body);
console.log(document.body);
console.log(document.body.firstChild);
console.log(document.body.firstElementChild);

console.log(document.querySelector("div"));
//    console.log(document.querySelectorAll("div"));
console.log(document.querySelector(".firstdiv"));
console.log(document.querySelector(".first-divchild"));
console.log(document.querySelector("#seconddiv"));
console.log(document.getElementById("seconddiv"));
console.log(document.getElementsByClassName("firstdiv"));
console.log(document.getElementsByTagName("p"));

const para = document.querySelector("p")
console.log(para);
para.style.color="pink";
para.style.backgroundColor="yellow";

const imageElement = document.querySelector("img");

imageElement.setAttribute("src", "image2.png");


imageElement.setAttribute("data-img","2")
const divElement  = document.querySelector("div");

divElement.setAttribute("first-div", 8)
divElement.setAttribute("first-div", null)

console.log(para.innerHTML);
para.innerHTML= "<strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur provident repellendus aut accusantium ut alias quo quisquam nostrum veritatis assumenda, atque ducimus, voluptates tempora fuga ipsa dolore, sequi possimus earum. </strong> ";



// console.log(para.textContent);

const secondPara = document.querySelector(".second-para")
console.log(secondPara.textContent);
secondPara.textContent="This is a new content";


const sectionEle = document.querySelector("section")
console.log(sectionEle);
 
let classes = sectionEle.className.split(" ");
classes.splice(2,1);
sectionEle.className = classes.join(" "); 

const sectionElementCopy = document.querySelector("section")

console.log(sectionElementCopy.classList);

console.log(sectionElementCopy.remove("class4"));
console.log(sectionElementCopy.toggleAttribute);



