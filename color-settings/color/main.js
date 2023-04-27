"use strict";
// COLON created by Toshihide Miyake
// This App is released under the GNU General Public License.
// http://www.gnu.org/licenses/
// This App uses material-design-inspired-color-picker made by Benajmin Franz
// https://github.com/BennyAlex/material-design-inspired-color-picker

// slide-in
document.getElementById("back-color-palette").addEventListener("click",()=>{
    document.getElementById("bcp-table").classList.add("slide-in");
});
document.getElementById("clock-color-palette").addEventListener("click",()=>{
    document.getElementById("ccp-table").classList.add("slide-in");
});
// slide-out
Array.from(document.getElementsByClassName("slide-out")).forEach(e=>e.addEventListener("click",()=>{
    Array.from(document.getElementsByClassName("table")).forEach(e=>e.classList.remove("slide-in"));
}));
// color picker
var picker = document.getElementById('bg-picker') 
var clockpicker=document.getElementById('clock-picker') 
// background-color
function colorChanged (event) {
    var color = event.detail[0] 
    picker.value = color ;
    document.getElementById("preview").style.backgroundColor=color;
    document.getElementById("back-color-palette").style.backgroundColor=color;
    localStorage.setItem("bg-color",color);
}
// clock-color
function clockcolorChanged (event) {
    var clockcolor = event.detail[0] 
    clockpicker.value = clockcolor ;
    document.getElementById("preview").style.color=clockcolor;
    document.getElementById("clock-color-palette").style.backgroundColor=clockcolor;
    localStorage.setItem("clock-color",clockcolor);
}
picker.addEventListener('change', colorChanged) 
clockpicker.addEventListener('change', clockcolorChanged) 

document.getElementById("close").addEventListener("click",()=>{
    location.href="../../index.html";
});

// load時に設定を反映
addEventListener("load",()=>{
    document.getElementById("preview").style.backgroundColor=localStorage.getItem("bg-color");
    document.getElementById("preview").style.color=localStorage.getItem("clock-color");
    document.getElementById("back-color-palette").style.backgroundColor=localStorage.getItem("bg-color");
    document.getElementById("clock-color-palette").style.backgroundColor=localStorage.getItem("clock-color");
    document.getElementById("clock").style.fontFamily=localStorage.getItem("font");
})
// デフォルトに戻す
document.getElementById("default-color-palette").addEventListener("click",()=>{
    Array.from(document.getElementsByClassName("background")).forEach(e=>e.style.backgroundColor="#434848");
    document.getElementById("preview").style.color="#fff";
    document.getElementById("clock-color-palette").style.backgroundColor="#fff";
    document.getElementById("clock").style.fontFamily="Lato";
    localStorage.setItem("bg-color","#434848");
    localStorage.setItem("clock-color","#fff");
    localStorage.setItem("font","Lato")
});

Array.from(document.getElementsByClassName("fonts")).forEach(e=>e.innerHTML="12:34");

// font
Array.from(document.getElementsByClassName("fonts")).forEach(e=>e.style.fontFamily=e.id);
Array.from(document.getElementsByClassName("fonts")).forEach(e=>e.addEventListener("click",()=>{
    document.getElementById("clock").style.fontFamily=e.id;
    localStorage.setItem("font",e.id);
}));