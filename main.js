'use strict';
// 時計
function clock(){
    var time= new Date();
    var hour=time.getHours();
    var minute=time.getMinutes();
    var second=time.getSeconds();

    if(hour<10){
        hour="0"+hour
    }else{
        hour=hour
    }

    if(minute<10){
        minute="0"+minute
    }else{
        minute=minute
    }

    if(second<10){
        second="0"+second
    }else{
        second=second
    }
    document.getElementById("hour").innerHTML=hour;
    document.getElementById("minute").innerHTML=minute;
    document.getElementById("second").innerHTML=second;
}

function Reload(){
    window.location.reload();
}


setTimeout(() => {
    clock();
    setInterval("clock()",100);
    // setInterval("Reload()",60000);
}, 1000 - new Date().getUTCMilliseconds());

window.onload=clock;

// ボタン操作
document.getElementById("body").addEventListener("click",()=>{
    document.getElementById("buttuns").classList.toggle("off");
    if(showbuttun==0){
        localStorage.setItem("showbuttun",1);
    }else{
        localStorage.setItem("showbuttun",0);
    }
});
document.getElementById("color").addEventListener("click",()=>{
    localStorage.setItem("showbuttun",1);
    location.href="color-settings/color/index.html";
});
document.getElementById("setting").addEventListener("click",()=>{
    localStorage.setItem("showbuttun",1);
    location.href="color-settings/settings/index.html";
});


var showbuttun=localStorage.getItem("showbuttun");
addEventListener("load",()=>{
  // ボタン表示/非表示
    if(showbuttun==0){
        document.getElementById("buttuns").classList.add("off");
    }else{
        console.log(showbuttun);
    }
    // 秒数表示/非表示
    if(localStorage.getItem("seconds")=="to-off"){
        document.getElementById("second").classList.add("none");
        document.getElementById("time").style.transform="translateX(0)";
    }else{
        console.log(localStorage.getItem("seconds"));
    }
    document.getElementById("body").style.backgroundColor=localStorage.getItem("bg-color");
    document.getElementById("body").style.color=localStorage.getItem("clock-color");
    document.getElementById("body").style.fontFamily=localStorage.getItem("font");
});



