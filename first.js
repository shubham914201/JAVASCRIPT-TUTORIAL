/** LECTURE-1    VARIABLES AND DATA TYPES      **/
/*---------------------------------*/
// let student={
// fullName:"Rahul Kumar",
// age:28,
// cgpa:8.8,
// isPass:true,
// };
// student["fullName"]="MOki sharma";
// console.log(student["fullName"]);
/*let product={
    prodType:"ball pen",
    prodBrand:"parker jotter standard",
    price:270,
    off_On_Prod:15,
    color:"black",
    qty_No:1,
    rating:7002,
    no_Of_Star_On_Rating:4,
    isDeal:true,
};
console.log(product["prodType"]);
console.log(product["rating"]);
console.log(product);*/

// let profile={
//     username:"@shradhakhapra",
//     profession_Type:"Entrepreneur",
//     company_Name:"Apna College",
//     experience:"Ex-Microsoft,DRDO",
//     no_Of_Post:195,
//     Follower:569000,
//     Following:4,
//     isFollow:false,
// }
// console.log(profile["username"]);
// console.log(profile["experience"]);
// console.log(profile["no_Of_Post"]);
// console.log(typeof profile["no_Of_Post"]);

/****  ----  ****/
/****LECTURE-2        OPERATORS AND CONDITIONAL STATEMENTS          ****/
/*let a=4;
let b=10;
console.log("a= ",a,"&b=",b);
console.log("a+b=",a+b);
console.log("a-b=",a-b);
console.log("a*b=",a*b);
console.log("a/b=",a/b);
console.log("a%b=",a%b);
console.log("a**b=",a**b);*/

//unary Operator
// let a=6;
// let b=5;
// console.log("a=",a,"&b=",b);
// a **= 4;//a=a**4 -->a=5^4=625
// a=a-1;
// console.log("a--=",a--);
// console.log("a= ",a)
// console.log("a=",a);


/****      ****/
//COMPARISON OPERATOR

//  console.log("6>=5",a>=b)//true

//comparison operator
// let a=6;
// let b=5;
//  let cond1= a<b;
//  let  cond2= a===6;
// console.log("!(a==6)=",!(a==6));//true

/*********              *****************/
    /*CONDITIONAL STATEMENTS*/
    // let age=13;
    // if(age>=18){
    //     console.log("you can vote");
    // }
    // if(age<18){
    //     console.log("you can't vote");
    // }

    /*let mode="blue";
    let color;
    
    if(mode==="dark"){
        color="black";
    }else{
        color="white";
    }*/
    // if(mode==="light"){
    //     color="white";
    // }
    // console.log(color);
    /*let age=14;

    if(age>=18){
        console.log("vote");
            
        }else{
            console.log("not vote");
        }*/

    //odd or even
    // let num=10;
    // if(num%2===0){
    //     console.log(num,"even");
    // }else{
    //     console.log(num,"odd");
    // }
    /*let mode="dark"
    let color;
    if(mode==="dark"){
        color="black";
    }else if(mode==="blue"){
        color="blue";
    }else if(mode==="pink"){
        color="pink";
    }
    else{
        color="white";
    }

    console.log(color);

    if(mode==="dark") console.log(mode )

    */
   /*****Ternary Operator *****/
//    let age=25;
//    let result=age>=18? console.log("adult"):console.log("not adult") //simpler and compact if-else
//    console.log(result);   
/*********          ********************/
     /*There are two imp concept in js that output message to us
     (1)alert
     (2)prompt*/
     /*alert("Apna College")*/
    /* let num=prompt("Enter a number")
    
    Q1.
    if(num%3===0){
        console.log(num," is a multiple of 3")
     }else{
        console.log(num," is not a multiple of 3")
     }*/
    //  console.log(result);
    
    
    //Q2.
    let score;
    let grade;
    score=prompt("Enter a score");
    if(score>=80 && score<=100){
        grade="A"
       // console.log("The grade is",grade);
    }else if(score>=70 && score<=79){
        grade="B"
       // console.log("The grade is",grade);
    }else if(score>=60 && score<=69){
        grade="C"
       // console.log("The grade is",grade);
    }
    else if(score>=50 && score<=59){
        grade="D"
       // console.log("The grade is",grade);
    }else{
        grade="F"
       // console.log("The grade is",grade);
    }

    console.log("The grade is",grade);
    
