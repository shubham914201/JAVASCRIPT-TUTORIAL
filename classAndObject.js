// const student={
//     fullName:"Shubham Kumar",
//     marks:94.4,
//     printMarks:function(){
//         console.log("marks=",this.marks);
//     }
// }
// const employee ={
//     calcTax(){
//         console.log("tax rate is 10%")
//     },
// };
// const karanArjun1={
//     salary:50000,
//     calcTax(){
//         console.log("tax rate is 20%")
//     },
// };
// const karanArjun2={
//     salary:50000,
// };
// const karanArjun3={
//     salary:50000,
// };
// const karanArjun4={
//     salary:50000,
// };
// const karanArjun5={
//     salary:50000,
// };
// karanArjun1.__proto__=employee;
// karanArjun2.__proto__=employee;
// karanArjun3.__proto__=employee;
// karanArjun4.__proto__=employee;
// karanArjun5.__proto__=employee;
// ---------------------class-------------------------------


// class ToyotaCar{
//      start(){
//         console.log("start");
//      }    
//      stop(){
//         console.log("stop")
//      }
//      setBrand(brand){
//         this.brand=brand;
//      }
// }
// let fortuner=new ToyotaCar();
// fortuner.setBrand("fortuner");

// let lexus=new ToyotaCar();
// lexus.setBrand("lexus");

// ----------------------------------------Inheritance----------------------------------------
// class parent{
//     hello(){
//         console.log("hello");
//     }
// }
// class child extends parent{}
// let obj1=new child();

// class person{
//     constructor(){
//         this.species="homo sapiens"
//     }
//     eat(){
//         console.log("eat");
//     }
//     sleep(){
//         console.log("sleep");
//     }
//     work(){
//         console.log("do nothing");
//     }
// }

// class Engineer extends person{
//     work(){
//         console.log("solve problem,build something");
//     }
// }

// class Doctor extends person{
//     work(){
//         console.log("treat patients")
//     }
// }


// -----------------------------------example------------------------------------------


// class ToyotaCar{
//     constructor(brand,mileage){
//         console.log("creating new objects");
//         this.brand=brand;
//         this.mileage=mileage;
//     }
//     start(){
//         console.log("start");
//     }
//     stop(){
//         console.log("stop");
//     }
// }
// let fortuner =new ToyotaCar("fortuner",20);
// console.log(fortuner);
// let lexus=new ToyotaCar("lexus",10);
// console.log(lexus);

// ---------------------------------------super keyword------------------------------------------

// class person{
//     constructor(name){
//         this.species="homo sapiens"
//         this.name=name;
//     }
//     eat(){
//         console.log("eat");
//     }
// }

// class Engineer extends person{
//     constructor(name){
//         super(name);
//     }
//     work(){
//         super.eat();
//         console.log("solve problem,build something");
//     }
// }

// let engObj = new Engineer("Shubham");

// ---------------------------------------------------PracQueOne&Two-----------------------------------------


// let data="secret message";
// class user{
//     constructor(name,email){
//         this.name=name;
//         this.email=email;
//     }
// viewData(){
//     console.log("data=",data);
// }
// }
// class admin extends user{
//      constructor(name,email){
//         super(name,email);
//      }
//     editData(){
//           data="some new data";
//     }
// }
// let student1=new user("gullu","abc@email.com");
// let student2=new user("abcd","aaaa@email.com");
// let teacher=new user("dean","dean@email.com");
// let admin1 =new admin("admin","admin@email.com");

// ----------------------------------------------ErrorHandling-------------------------------------------
let a=5;
let b=10;
console.log("a",a);
console.log("b",b);
console.log("a+b",a+b);
console.log("a+b",a+b);
console.log("a+b",a+b);
console.log("a+b",a+b);
console.log("a+b",a+b);
try{
    console.log("a+b",a+c);
}
catch(err){
    console.log(err);
}
console.log("a+b",a+b);
console.log("a+b",a+b);
console.log("a+b",a+b);
console.log("a+b",a+b);



