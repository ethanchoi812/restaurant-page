!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var r=()=>{let e=document.createElement("div");e.className="slider-div";return e.innerHTML='<span class="nav-btn" id="nav-btn-left">&lt;</span><span class="nav-btn" id="nav-btn-right">&gt;</span><div id="image-container"><img src="https://via.placeholder.com/1280x384/0000FF"><img src="https://via.placeholder.com/1280x384/FF0000"><img src="https://via.placeholder.com/1280x384/FFFF00"></div>',e};var i=()=>{const e=document.getElementById("image-container");let t=document.getElementById("nav-btn-left");document.getElementById("nav-btn-right");t.addEventListener("click",()=>{e.style.left="-100%"})};var o=function(){let e=document.createElement("div");return e.innerHTML='<h1>The City Restaurant</h1><div><ul><li id="menu">Menu</li><li id="contact">Contact</li></ul></div>',e.appendChild(r()),i(),e};document.body.appendChild(o());const c=document.createElement("div");let l=document.getElementById("menu"),u=document.getElementById("contact");function a(e){let t;return t="menu"===e?"This is my menu":"contact"===e?"Contact here":"",c.innerHTML=t,c}l.onclick=function(e){a("menu")},u.onclick=function(e){a("contact")},document.body.appendChild(c)}]);