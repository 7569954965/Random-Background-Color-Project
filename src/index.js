const randomColorProject=()=>{

    const hex="0123456789ABCDEF";
    let color="#"
    for(let i=0;i<6;i++){
       color+=hex[Math.floor(Math.random()*16)];
       
    }
    return color;
 }
 
 let interval;
 function startChangingColor(){
    if(interval==null){
       interval= setInterval(changeingColor,1000);
 
    }
    function changeingColor(){
       document.body.style.backgroundColor=randomColorProject();
 
    }
 
 }
 function stopChangingColor(){
    clearInterval(interval);
    interval=null;
 
 }
 
 
 document.querySelector("#start").addEventListener("click",startChangingColor);
 document.querySelector("#stop").addEventListener("click",stopChangingColor);