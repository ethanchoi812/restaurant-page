!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var r=()=>{let e=document.createElement("div");e.className="slider-div";return e.innerHTML='<span class="nav-btn" id="nav-btn-left">&lt;</span><span class="nav-btn" id="nav-btn-right">&gt;</span><div id="image-container"><img id="slide-1" src="https://via.placeholder.com/1280x384/0000FF"><img id="slide-2" src="https://via.placeholder.com/1280x384/FF0000"><img id="slide-3" src="https://via.placeholder.com/1280x384/FFFF00"><img id="slide-4" src="https://via.placeholder.com/1280x384/00FF00"></div>',e};var i=()=>{let e=document.createElement("div");return e.innerHTML='<h1>The City Restaurant</h1><div><ul id="nav"><li id="menu">Menu</li><li id="contact">Contact</li></ul></div>',e.appendChild(r()),e};var o=()=>{let e=document.querySelector(".slider-div"),t=document.getElementById("image-container"),n=document.getElementById("nav-btn-left"),r=document.getElementById("nav-btn-right"),i=0;n.addEventListener("click",()=>{let n=e.offsetWidth;return i<4&&i>0&&(i-=1,t.style.transform=`translate(-${i*n}px)`),i}),r.addEventListener("click",()=>{let n=e.offsetWidth;return i<3&&(i+=1,t.style.transform=`translate(-${i*n}px)`),i})};document.body.appendChild(i());const c=document.createElement("div");let l=document.getElementById("menu"),d=document.getElementById("contact");function a(e){let t;return t="menu"===e?"This is my menu":"contact"===e?"Contact here":"",c.innerHTML=t,c}l.onclick=function(e){a("menu")},d.onclick=function(e){a("contact")},document.body.appendChild(c),o()}]);