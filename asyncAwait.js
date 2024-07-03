// ----------------------------------async-await----------------------------

// async function hello(){
//     console.log("hello");
// }


/*function api(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("wether data");
            resolve(200);
        },2000);
    })
}

async function getWeather(){
    await api();
    await api();
}*/

/*function getData(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
             console.log("data",dataId);
             resolve("success");
             //reject("error");
        },2000);
    });
}
async function getAllData(){
console.log("getting data1.....");
await getData(1);
console.log("getting data2.....");
await getData(2);
console.log("getting data3.....");
await getData(3);
}*/

// IIFE
/*(async function(){
    console.log("getting data1.....");
    await getData(1);
    console.log("getting data2.....");
    await getData(2);
    console.log("getting data3.....");
    await getData(3);
    })();*/