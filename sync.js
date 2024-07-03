// ---------------------Synchronous programming---------------------------------

/*console.log("one");
console.log("two");
console.log("three");
console.log("four");*/

// -----------------------Asynchronous programming------------------------------------

/*function hello(){
    console.log("hello");
}*/
/*console.log("one");
console.log("two");
setTimeout(()=>{
    console.log("hello")},4000);
console.log("three");
console.log("four");*/

// -------------------------callBacks--------------------------------------------------

/*-------  Synch callBacks  -----------

function sum(a,b){
     console.log(a+b);
 }
   function calculate(a,b,sumCallBack){
    sumCallBack(a,b);
}*/
// calculate(1,2,sum);
/*calculate(1,2,(a,b)=>{
    console.log(a+b);
})*/

/*--------  Asynch callBacks  ---------

const hello=()=>{
       console.log("hello");
}
setTimeout(hello,3000);*/

// ----------------------------------------callBack Hell--------------------------------------

/*function getData(dataId,getNextData){
    setTimeout(()=>{
        console.log("data",dataId);
        if(getNextData){
            getNextData();
        }
    },2000)
}*/

//callBackHell
/*getData(1,()=>{
    console.log("getting data2.....");
    getData(2,()=>{
        console.log("getting data3.....");
        getData(3,()=>{
            console.log("getting data4.....");
            getData(4);
        });
    });
});*/

// ------------------------------------------promises----------------------------------------------



