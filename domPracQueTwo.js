let divs=document.querySelectorAll("div");
console.log(divs[0]);
let idx=1;
for(div of divs){
     div.innerText=`new unique value ${idx}`
     idx++;
}   

