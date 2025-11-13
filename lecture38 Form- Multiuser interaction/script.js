const  selectouter = document.querySelector(".outer-div")
const  selectinner = document.querySelector(".inner-div")
const  headtag = document.querySelector("h1")


selectouter.addEventListener("click",()=>{
    console.log(" click outer div");
    selectouter.style.backgroundColor="red";
}, true);

selectinner.addEventListener("click",()=>{
    console.log(" click inner  div");
    selectinner.style.backgroundColor="green";
},false);

headtag.addEventListener("click",()=>{
    console.log(" click h1 tag ");
    headtag.style.backgroundColor="yellow";
},true);


/*

Term	Meaning
Event Propagation	The full journey of the event (capturing → target → bubbling)
Target Phase	Event reaches the exact element you clicked
Bubbling Phase	Event moves upward from child → parent
*/