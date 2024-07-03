/*function myFunction(msg){
    console.log(msg);
}
  myFunction("This is about js");*/


 /* function sum(x ,y){
    console.log(x+y);
  }
    sum(1,2);*/

    // function sum(x ,y){  //block scope --> x, y
    //     s=x+y;
    //     return s;
    //   }
      const arrowSum=(a,b)=>{
        console.log(a+b);
      }
// let val=sum(8,2);
// console.log(val);
    //  let arrowMul=(a,b)=>{
    //        return a*b;
    //  }
    //     arrowMul=5;



    // const printHello = ()=>{
    //     console.log("hello");
    // }

    // function  vowel(word){

    // }
  /*Que 1    */

// function countVowel(str){
//     let count=0;
//     for(const char of str){
//         if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u"){
//             count++;
//         }
//     }
//     console.log(count);
// }
// let countVowel=(str)=>{
//     let count=0;
//     for(const char of str){
//         if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u"){
//             count++;
//         }
//     }
//     console.log(count);
// }

/*-----------------------   forEach function    ------------------------*/


// let arr=[1,2,3,4,5];

// arr.forEach(function printVal(val){
//   console.log(val);
// });

// let arr=["delhi","pune","mumbai"];

// arr.forEach((val,idx,arr)=>{
//   console.log(val.toUpperCase(),idx,arr);
// });

// let arr=[1,2,3,4,5];
// arr.forEach((val)=>{
//   console.log(val*val);
// });


// let calculateSqr=(val)=>{ console.log(val*val);}
// arr.forEach(calculateSqr);
// let nums=[67,52,39]

// let newArr=nums.map((val)=>{
  // console.log(val);
//   return val*8;
// })

// console.log(newArr);
// console.log(nums);
// let arr=[1,2,3,4,5,6,7]
// let evenArr=arr.filter((val)=>{
//      return val>3;
// });
// console.log(evenArr);
// let arr=[1,2,3,4,5,6,7];
// let evenArr=arr.filter((val)=>{
//      return val>3;
// });
// console.log(evenArr);

// let arr1=[5,6,2,1,3];
// const output=arr1.reduce((prev,curr)=>{
//       return prev+curr;
// });
// console.log(output);

// let arr1=[50,60,20,6,101,30];
// const output=arr1.reduce((prev,curr)=>{
//       return prev<curr? prev:curr;
// });
// console.log(output);
// let marks=[70,80,75,88,99];
// let res=marks.filter((val)=>{
//     return val>90;
// });
// console.log(res);
let n=prompt("Enter a number");
let arr1=[];
for(let i=1;i<=n;i++){
    arr1[i-1]=i;
}
    console.log(arr1);

let sum=arr1.reduce((prev , curr)=>{
    return prev+curr
});
    console.log("sum",sum);

let factorial=arr1.reduce((prev,curr)=>{
    return  prev*curr;
});

console.log("factorial", factorial);








