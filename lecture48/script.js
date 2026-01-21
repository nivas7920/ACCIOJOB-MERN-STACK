const id = setInterval(() => {
   const date = Date.now();
   let diff = Date.now()- date;
   while(diff < 100){
    // console.log(diff);
    diff= Date.now() - date;
   }
   console.log("task completed");
},1000)
setTimeout(() => {
    clearInterval(id)
},2000)

function setIntervalUsingSetTimeout() {
    const date = Date.now();
    let  diff = Date.now() - date;
    console.log("start");
    
   while(diff < 5000){
    // console.log(diff);
    diff  = Date.now() - date;
   }
   console.log("end ");
   setTimeout(setIntervalUsingSetTimeout, 1000);
}




function SaveFormData(callback){
    // // code to save all personal details
    // setTimeout(()=>{
    
    //     // code to save all educational details
    //      setTimeout(()=>{
    
    //     // code to save all work experience deatils
    //     // submit the form 
    // }, 1000);

    // }, 1000);
  


    SavePersonalDetails();
}

 function callback(){

 }

 SaveFormData(callback);




 function SavePersonalDetails(){

    // code to save all personal details
    setTimeout(SaveEducationalDetails, 1000);
 }

 function SaveEducationalDetails(){

    // code to save all Educational  details
    setTimeout(SaveWorkExperience, 1000);
 }

 function SaveWorkExperience(){

    // code to save all Work Experience Details 
 }

 //

  function callbackAsAnFunction(error, data){
   if(error)
      {
    console.log(error);
      } 
   else{
      console.log(data);
   }
  }
 function fetchUser(){
   return { id : 1, name:"Nivas"};
 }


 function displayUser(errorFunction){

   setTimeout(()=>{
      const userDeatils = fetchUser();

      if(userDeatils){
         errorFunction(null, userDeatils);
      }
      else{
         errorFunction("User not found", null);
      }
   }, 1000);
 }
 
 displayUser(callbackAsAnFunction);
