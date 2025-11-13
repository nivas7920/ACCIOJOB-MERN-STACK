const form=document.querySelector(".contact-us");

const user=[]
form.addEventListener("submit",(e)=>{
  e.preventDefault()
  const fullName=document.querySelector("#name")
  const number=document.querySelector("#mobile")
   const gender = document.querySelector('input[name="gender"]:checked')
   const consent = document.getElementById("consent").checked ? "yes":"No";
    const city = document.getElementById("city").value;
  const obj={}
   
    obj.name=fullName.value;
   obj.contact=number.value;
    obj.gender=gender.value;
   obj.consentTerm=consent;
   obj.cityName=city;



  form.reset();
  
  user.push(obj)
  console.log(user)
})