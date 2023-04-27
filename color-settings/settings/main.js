"use strict";
document.getElementById("close").addEventListener("click",()=>{
    location.href="../../index.html";
});

// 秒数の表示/非表示
document.getElementById("seconds-off").addEventListener("click",()=>{
    setTimeout(()=>{
        document.getElementById("seconds-off").classList.toggle("btncir-active");
        document.getElementById("seconds-on").classList.toggle("swi-btn-active");
    },100);
    if(document.getElementById("seconds-off").classList.contains("btncir-active")){// offの時onにする
        localStorage.setItem("seconds","to-on");
    }else{ //onの時offにする
        localStorage.setItem("seconds","to-off");
    }
});

addEventListener("load",()=>{
    // 秒数ボタンcss
    if(localStorage.getItem("seconds")=="to-off"){
        document.getElementById("seconds-off").classList.add("btncir-active");
        document.getElementById("seconds-on").classList.add("swi-btn-active");
    }else{
        console.log(localStorage.getItem("seconds"));
    }
});