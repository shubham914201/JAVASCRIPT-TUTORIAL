// ---------------------------------------promises----------------------------------------------

// let promise = new Promise((resolve,reject)=>{
//     console.log("I am a promise");
//     resolve("success");
// });

// let promise = new Promise((resolve,reject)=>{
//     console.log("I am a promise");
//     reject("some error occurred");
// });

/*function getData(dataId,getNextData){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{*/
            // console.log("data",dataId);
            // resolve("success");
            /*reject("error");
            if(getNextData){
                getNextData();
            }
        },5000);
    });
}*/

/*promises: .then()&.catch()
promise.then((res)=>{})
promise.catch()=>{})*/

/*const getPromise=()=>{
    return new Promise((resolve,reject)=>{
        console.log("i am a promise");
        // resolve("success");
        reject("error");
    });
};
let promise=getPromise();
promise.then((res)=>{
    console.log("promise fulfilled",res);
});

promise.catch((err)=>{
    console.log("rejected",err);
});*/

/*function asyncFunc1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data1");
            resolve("success");
        },4000);
    });
}
function asyncFunc2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data2");
            resolve("success");
        },4000);
    });
}*/

// console.log("fetching data1.....");
// asyncFunc1().then((res)=>{
// console.log("fetching data2.....");
// asyncFunc2().then((res)=>{});
// });
/*console.log("fetching data2.....");
let p2=asyncFunc2();
p2.then((res)=>{
    console.log(res);
});*/
// ----------------------------------------------------------Example----------------------------------------------
//promises
//Ex-1

function getData(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
             console.log("data",dataId);
             resolve("success");
             //reject("error");
        },3000);
    });
}

//promises
console.log("getting data1.....");
getData(1).then((res)=>{
console.log("getting data2.....");
return getData(2);
})
.then((res)=>{
console.log("getting data3.....");
    return getData(3);
})
.then((res)=>{
    console.log(res);
})
