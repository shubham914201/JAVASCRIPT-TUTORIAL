/****  Loop   ****/
/*for(let i=1;i<=10000;i++){
    console.log("Apna College");
}*/

/*To calculate sum of first n natural nos

let sum=0;

for(let i=1;i<=100;i++){
    sum+=i;
}
console.log(sum);*/

/*Print 1 to 5*/
// for(var i=1;i<=5;i++){
//     console.log("i",i);
// }
// console.log(i);
// let i=1;
// while(i<=5){
//     console.log("i=",i);
// i++;    
// }

/*

let i=1;
do{
    console.log("i",i);
    i++;
}while(i<=5);
*/
// for-of loop  -->  use for array and strings
/*let str="javascript"
let size=0;
for(let i of str){
    console.log("i=",i);
    size++;
}
console.log(size);*/
//for-in loop  -->use for objects and arrays
/*let student={
    name:"Rahul Kumar",
    age: 20,
    cgpa:7.5,
    isPass: true,
};
for(let key in student){
    console.log("key=",key);
}*/
// to print odd nos from 0 to 100
/*for(let num=0;num<100;num++){
    if(num%2===0){
        console.log("num=",num);
    }
}*/

// to print the odd nos from 0 to 100
/*for(let num=0;num<100;num++){
    if(num%2!=0){
        console.log("num=",num);
    }
}*/

// let gameNum=30;
// let userNum=prompt("Guess the game number ")
//     while(userNum!=gameNum){
//     userNum=prompt("you have entered wrong number. guess again");
//     }
//     console.log("congratulation !  you have entered right number");
/*************         *****************/
   /*    Strings    */
   /*let str1="bhola kr"
   let str2="bhola kumar"
   console.log(str2[2]);*/


//    let obj ={
//          item:"pen",
//          price:10,
//    };
//    console.log(`The cost of ${obj.item} is ${obj.price} rupees`);
//    console.log("The cost of ",obj.item ,"is",obj.price,"rupees");
   /*let specialString=`This is a special literal ${1+2+3}`;
   console.log(specialString);*/

/***************Escape characters ***************/

// let str="Apna\tCollege"
// console.log(str.length);


// let str="  Apna College Js  ";
// str=str.toLowerCase();
// console.log(str.trim());
// let str="Hello ";
// console.log(str.slice());
// let str1="Apna";
// let str2="College";
// let res="hello Everyone"+789
// console.log(res);
// let str="hellololo"
// console.log(str.replaceAll("lo","p"));
// let str="How are you ?"
// str=str.replace("H","N");
// console.log(str);
// let key="@";
// let str1=prompt("Enter the userName");
// let userName="@"+str1+str1.length;
// let str2=str1.length;
// let res1=key.concat(str1);
// let res2=res1.concat(str2);
// console.log(res2);
// console.log(userName);
/*Que 1    */

function countVowel(str){
    let count=0;
    for(const char of str){
        if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u"){
            count++;
        }
    }
    console.log(count);
}