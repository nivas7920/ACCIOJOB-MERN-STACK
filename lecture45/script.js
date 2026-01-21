document.querySelector("#ctn2").style.display = "none";
document.querySelector("#ctn3").style.display = "none";



const btn = document.querySelector("#btn1");

btn.addEventListener("click", () => {
     
    const form = document.querySelector("#ctn1");
    form.style.display = "none";
    document.querySelector("#ctn2").style.display = "block";
})

const btn1 = document.querySelector("#btn2");

btn1.addEventListener("click", () => {

    const form = document.querySelector("#ctn2");
    form.style.display = "none";
    document.querySelector("#ctn3").style.display = "block";
})

const btn2 = document.querySelector("#btn2");
btn1.addEventListener("click", () => {

    const form = document.querySelector("#ctn2");
    form.style.display = "none";
    document.querySelector("#ctn3").style.display = "block";
})

const btnback = document.querySelector("#btnBack");
btnback.addEventListener("click", () => {

    const form = document.querySelector("#ctn3");
    form.style.display = "none";
    document.querySelector("#ctn2").style.display = "block";
})

