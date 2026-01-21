 
// function car ( name, model)
// {
//       this.name = name;
//       this.model = model;
//       this.speed = 0;

// };

// car.prototype.isRunning = function(){
//   this.speed >0 ? console.log("Running") : console.log("Not running");

// };
// car.prototype.changeSpeed = function (newSpeed){
//   this.speed= newSpeed;
// }

// const creata = new car("creta","cr-2025");
// creata.isRunning();
// creata.changeSpeed(30);
// creata.isRunning();

// car.prototype.printCarDetails = function (){
//   console.log(this.name, this.model, this.speed);
// }

// creata.printCarDetails();

// Classes in JavaScript are blueprints for creating objects.
// They support constructor, instance methods 
// this = instance of creata
// JavaScript classes are templates used to create objects.

// Classes are used to group a constructor and multiple methods together.
// All class methods are stored in the prototype behind the scenes.

// Classes are not hoisted, so you cannot create an object 
// before the class declaration.


// class Car {
//   constructor(name, model){
//     this.name = name;
//     this.model=model;
//     this.speed=0;
//   }

//   changeSpeed(newSpeed)
//   {
//     this.speed = newSpeed;
//   }
//    isRunning(){
//     this.speed >0 ? console.log("Running") : console.log("Not running");
//    }

// }

// const creata = new Car ("creata", "CR-2025");
// creata.changeSpeed(40);
// creata.isRunning();
// console.log({creata});





// class Attendance {
//   constructor(name, div) {
//     this.name = name;
//     this.div = div;
//     this.presentDays = 0;
//     this.absentDays = 0;
//   }

//     Present() {
//     this.presentDays++;
//   }

//   Absent() {
//     this.absentDays++;
//   }

// calculatePercentage() {
//   const total = this.presentDays + this.absentDays;
//   console.log((this.presentDays/total)*100);
  
// }

// }


// const student = new Attendance("Nivas", "A");


// student.Present();
// student.Present();
// console.log(student);
// student.Absent();
// console.log(student.presentDays);
// student.Absent();
// student.calculatePercentage();


// getters and setters 
//A getter is used to read only the property not changed.
// A setter is a method used to  update and changing a property.  // 

// also we use get method  the [ underscore ] _dob, _marks   beacuse the stop the infinite loop
//When you write a getter or setter for a property in JavaScript, if you directly use the same property name inside the getter/setter, it will cause infinite recursion → infinite loop.

// // constructor({id, name, dob, grade}){
    
//     this.id = id;
//     this.name=name;
//     this._dob = dob;
//     this.grade = grade;
//     this._marks = 0;
     // this are data property 


     
  // set marks(newMarks){
  //   this._marks =newMarks;
  // }
     // this are accessers property

class Student {
  constructor({id, name, dob, grade}){
    
    this.id = id;
    this.name=name;
    this._dob = dob;
    this.grade = grade;
    this._marks = 0;
  }

  get dob(){
    return this._dob;
  }

  set marks(newMarks){
    this._marks =newMarks;
  }

  get marks(){
    return this._marks;
  }
}


const mukesh = new Student({
  id:"1234",
  name:"mukesh",
  dob:"16-09-2002",
  grade:10,
});

console.log(mukesh.dob);


mukesh.marks= 40;

console.log(mukesh.marks);
console.log(mukesh.grade);

// static method

// A static method is a method that belongs to the class itself, not to  related to the objects c.
// You call it using the class name, not an instance.
//  they save memory and are ideal for utility functions, validations, comparisons,

class User {
  constructor(username, role){
    this.username= username;
    this.role= role;

  }

  static guest(){
    return new User ("guest","guest" );
  }

}

const guestUser = User.guest();
console.log(guestUser);

// Private property

// Private properties are variables inside a class that cannot be accessed outside the class.
// They are used to protect sensitive/internal data.

// Methods can also make  be private 

class Bank {

   #pin =123456;
  constructor(firstpin){
   
  this.#pin = firstpin;
  this.balance =0;
  }
  deposite(money){
    this.balance  += money;
  }
  withdraw(userPin ,money){
           
    return userPin === this.#pin && this.balance >= money ? (this.balance -=money):null;
  }

  checkBalance(userPin){
    return userPin === this.#pin ? this.balance :null;
  }
}


const sbi =new Bank(4321);
sbi.deposite(150);
console.log(sbi.checkBalance(4321));
sbi.withdraw(431, 10);
// console.log(sbi.#pin) ; throws error 

console.log(sbi["#pin"]); // unable to acces the value 
console.log(sbi.pin); // 
console.log(sbi.checkBalance(4321));

// Destructuring 

