"use strict";var about=document.querySelector("#about"),progress=document.querySelector("#progress"),aboutContent=document.querySelector("#about__content"),progressContent=document.querySelector("#progress__content");about.addEventListener("click",(function(){new WinBox({title:"About Me",width:"300px",height:"450px",mount:aboutContent,onfocus:function(){this.setBackground("var(--pink)")},onblur:function(){this.setBackground("var(--light-gray)")}})})),progress.addEventListener("click",(function(){new WinBox({title:"My Progress",width:"300px",height:"550px",mount:progressContent,onfocus:function(){this.setBackground("var(--pink)")},onblur:function(){this.setBackground("var(--light-gray)")}})}));var audio=document.createElement("audio"),volume=document.getElementById("volume");function theme(){audio.setAttribute("autoplay","true"),audio.innerHTML='<source src="./app/audio/theme.webm" type="audio/mpeg">',document.body.appendChild(audio),audio.muted,volume.src.match("unmute")?(volume.src="./images/icons/mute.png",audio.muted=!0):(volume.src="./images/icons/unmute.png",audio.muted=!1)}var typed=new typed("#animate",{strings:["Content Creator","Web Developer"],typeSpeed:50,backSpeed:50,loop:!0});$(document).ready((function(){var e=$(".wrapper"),t=$(".animated"),o=$(".wrapper").height(),n=t.offset().top-e.offset().top-o,u=t.attr("data-animation"),r="visible";e.scroll((function(){$(this).scrollTop()>n?t.addClass(r).addClass(u):t.removeClass(r).removeClass(u)}))}));
//# sourceMappingURL=script.js.map