
class Vehical {

      start(){
        console.log("vehical is starting ");
      }
     
}

class car extends Vehical{

  start(){
        console.log("Car is starting ");
      }
}

class Electrical extends car {

  start(){
        console.log("Electrical  is starting ");
      }
}

console.log(new Vehical().start());
console.log(new Vehical().start("Lambda"));

// Employee Example 

class Employee {


    constructor(yearsOfExp) {
        this.yearsOfExp = yearsOfExp;
    }

    salary() {
        return 500000 * this.yearsOfExp;
    }
}

class saleEmployee extends Employee {

    constructor(yearsOfExp) {
        super(yearsOfExp);
    }

    salary(){

        return 300000*this.yearsOfExp;
    }
}

class LeadEmployee extends Employee {


     constructor(yearsOfExp) {
        super(yearsOfExp);
    }
    salary(){

        return 100000*this.yearsOfExp;
    }
}


console.log(new Employee(2).salary());
console.log(new saleEmployee(4).salary());
console.log(new LeadEmployee(5).salary());


// Interst calculator classs child class simple interest and compound interest

class InterstCal {
  constructor (principal, rate, time , n){
    this.principal = principal;
    this.rate = rate;
    this.time = time;
    this.n = n;
  }

  interst (){
    return (this.principal + this.rate * this.time); 
  }
}

class  SimpleInterest extends InterstCal {
  
      constructor(principal, rate, time, n){
        super(principal, rate, time, n);
      }

      interst(){
        return (this.principal*this.rate*this.time)/100;
      }
}

class  CompoundInterest extends InterstCal {
    constructor(principal, rate, time, n){
        super(principal, rate, time, n);
      }
      interst(){
       const amount = this.principal * Math.pow(1 + (this.rate / (100 * this.n)),this.n * this.time);
      return amount - this.principal;
}
}
console.log(new InterstCal(1000, 4, 6).interst());
console.log(new SimpleInterest(10000, 5, 2).interst());
console.log(new CompoundInterest(10000, 3, 5,6).interst());



class Student {
    constructor(marks){
        this._marks = marks;
    }

    #calculateMarks(){
        const totalsub = Object.keys(this._marks).length;

        let totalmarks = 0;

        for(let marks in this._marks){
            totalmarks += this._marks[marks];

        }

        return totalmarks / totalsub;
    }
    get marks (){
        return this.#calculateMarks();
    }
}

const marks ={
        math :90,
    science : 80,
    English : 100,
}

const rahul = new Student (marks);
console.log(rahul.marks);




class personDetails {
    constructor({ name, age, dob }) {
        this.name = name;
        this.age = age;
        this.dob = dob;
    }

    print() {
        console.log(this.name, this.age, this.dob);
    }
}

class EducationDetails {
    constructor({ college, grandYear, cgpa }) {
        this.college = college;
        this.grandYear = grandYear;
        this.cgpa = cgpa;
    }

    print() {
        console.log(this.college, this.grandYear, this.cgpa);
    }
}


const personDetailsData = {
    name: "Nivas",
    age: 22,
    dob: 16
};

const educationDetailsData = {
    college: "IIT",
    grandYear: 2025,
    cgpa: 8
};


class person {
    constructor({ AadharNumber, personDetails, EducationDetails }) {
        this.AadharNumber = AadharNumber;
        this.personDetails = new personDetails(personDetails);
        this.EducationDetails = new EducationDetails(EducationDetails);
    }

    print() {
        console.log("Person Aadhar:", this.AadharNumber);
        this.personDetails.print();
        this.EducationDetails.print();
    }
}

const p = new person({
    AadharNumber: 100000,
    personDetails: personDetailsData,
    EducationDetails: educationDetailsData
});

p.print();
