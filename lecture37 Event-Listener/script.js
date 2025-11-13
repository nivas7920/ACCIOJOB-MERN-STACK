
// Crating the elements using js 

const h3Element = document.createElement("h3");

h3Element.textContent ="Hii , I am H3 element "

const div1 = document.querySelector("div")
div1.appendChild(h3Element)


// Events in DOM

const para1 = document.querySelector("p") ;
para1.addEventListener("click",(event)=>{
    paraclicked(event);
});

function paraclicked(event){

    h3Element.remove();
    console.log("you've clicked a para ", event.type);
}

// 1. mouseover
// 2. mouseup
// 3. mousedown
// 4. keyup

para1.addEventListener("mouseover",()=>{
    console.log("you've have hover the mouse ");
    para1.style.backgroundColor="red";
});

para1.addEventListener("mouseup",()=>{
    console.log("you've have hover the mouse on up side  ");
    para1.style.fontSize="20px";
});

para1.addEventListener("mousedown",()=>{
    console.log("you've have hover the mouse on down  side  ");

    para1.style.color="orange";
});


document.addEventListener("keydown",(event)=>{
    console.log("you've have press to key  ", event.key);

    para1.style.color="green ";
});


