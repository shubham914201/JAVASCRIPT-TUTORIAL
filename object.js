const person1={
    fullName:"Spongebob",
    lastName:"Squarepants",
    age:30,
    isEmployed:true,
    sayHello:function(){console.log("Hi ,I am Spongebob!")},
    eat:function(){console.log("I am eating orange")},
}
const person2={
    fullName:"Patrick",
    lastName:"Star",
    age:42,
    isEmployed:false,
    sayHello:()=>console.log("Hi ,I am Spongebob!"),
    eat:()=>console.log("I am eating orange"),
}
person1.eat();
person2.eat();
