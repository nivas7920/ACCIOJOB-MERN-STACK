
    let name="piyush";
    let age=17;
    let address="pune";
    let std=12;
    let parentname="riya";

    //objects
    const studentObj ={
        name:"piyush",
        age:17,
        address:"pune",
        std:12
    };
    const parentObj={
        name:"riya",
        age:35,
        address:"pune"
    };
   // console.log("student name:",studentObj.name);
    //console.log("student name:",studentObj["name"]);
    parentObj.gender="female";
   // console.log(parentObj);
    
/*create person object with name, age city properties.
update the city add hobby and print age of the person.
*/
    const personObj={
        name:"Raj",
        age:18,
        address:"pune"
    }
    personObj.hobby="reading";
    personObj.address="nagpur";
    console.log("hobby of",personObj.name,"is",personObj["hobby"]);
    

    // nested object
    const employeeObj={
        name:"Raju",
        company:"Acciojob",
        salary:"10LPA",
        address:{
            addressLine1:"Bhumkar Chowk",
            addressLine2:"wakad",
            houseNumber:31,
            city:"Pune"
        }
    }
    console.log("city of ",employeeObj.name,"is",employeeObj.address.city);


    // ayyay of objects
    const studentObjArr=[
        studentObj,{
            name:"pulkiit",
            age:17,
            address:"nashik",
            std:10
        }
    ];
    console.log(studentObjArr);
    const studentObj2={
        name:"pulkit",
        age:27,
        address:"nashik",
        std:10
    };
    const studentObjArr2=[studentObj,studentObj2];
    for(let i in studentObj){
        console.log(i,":",studentObj[i]);
        
    }
    console.log("keys",Object.keys(studentObj));
    for(let i of Object.keys(studentObj)){
        console.log(i,":",studentObj[i]);
        
    }
    console.log("values",Object.values(studentObj));

    // que- create a classroom array of 4 students each students will have name, age, 
    //  gender, grade and address->addressline1, addressline2,city, houseno.
    
    //print the name age and house no of all students residing in pune city

    const classroomObjArr=[
       {
        name:"pratik",
        age:24,
        gender:"male",
        grade:"A",
        address:{
            addressLine1:"mhalunge",
            addressLine2:"radha chowk",
            city:"chinchwad",
            houseNumber:"202"
        }
       },
        {
        name:"nilesh",
        age:21,
        gender:"male",
        grade:"A+",
        address:{
            addressLine1:"baner",
            addressLine2:"radha chowk",
            city:"pimpri",
            houseNumber:"31"
        }
       }, 
       {
        name:"sakshi",
        age:21,
        gender:"female",
        grade:"A",
        address:{
            addressLine1:"wagholi",
            addressLine2:"kesnand phata",
            city:"pune",
            houseNumber:"302"
        }
       },
        {
        name:"om",
        age:24,
        gender:"male",
        grade:"A",
        address:{
            addressLine1:"sadashiv peth",
            addressLine2:"tilak road",
            city:"pune",
            houseNumber:"202"
        }
       },
    ];
    console.log(classroomObjArr);
    for(let i in classroomObjArr){
            if(classroomObjArr[i].address.city=="pune"){
                console.log(classroomObjArr[i].name,classroomObjArr[i].age,classroomObjArr[i].address.houseNumber);
            }
    }
//functions inside objects

const carObj={
    car:"Mercedes GLS",
    color:"white",
    mileage:10,
    currentspeed:20,
    running:function running(){
        
        console.log("the car is running! current speedis:",this.currentspeed);
        
    }

}
carObj.running();
// 
const portfolioObj={
    name:"piyush",
    skills:["c++","javascript","MERN"],
    addskill:function addskill(){
        let allskills="";
        for(let skills of this.skills)
        allskills+=skills 
        
    }
}
portfolioObj.addskill();











    //this keyword
    
    
     

    