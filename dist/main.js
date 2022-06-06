(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>d});var o=t(81),r=t.n(o),i=t(645),a=t.n(i)()(r());a.push([e.id,'*, *::before, *::after {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    min-height: 100vh;\n    width: 100vw;\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n    grid-template-rows: auto 4fr;\n    font-family: sans-serif;\n}\n\n\n/* Header */\nheader {\n    background-color: #1d4ed8;\n    color: #eff6ff;\n    grid-column: 1 / 3;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n}\n\nheader h1 {\n    padding: 24px 0px;\n}\n\nheader img {\n    width: 2rem;\n    height: auto;\n    position: absolute;\n    top: 30%;\n    left: 24px;\n    cursor: pointer;\n}\n\nheader img:hover {\n    border: none;\n}\n\n/* Nav Bar */\n#nav {\n    color: black;\n    background-color: #bfdbfe;\n    display: flex;\n    flex-direction: column;\n    gap: 24px;\n}\n\n#nav h2 {\n    padding-top: 24px;\n    padding-left: 24px;\n}\n\n#nav ul {\n    padding-left: 36px;\n    list-style-type: none;\n    line-height: 1.5rem;\n}\n\n\n#nav ul li:hover {\n    cursor: pointer;\n    text-decoration: underline;\n}\n\n/* Main container  */\nmain {\n    color: black;\n    background-color: #eff6ff;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: auto;\n}\n    \n#main-container {\n    display: flex;\n    flex-direction: column;\n    width: 80%;\n    align-items: center;\n    justify-content: center;\n    padding-top: 24px;\n    gap: 16px;\n}\n\n#task-list {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 4px;\n}\n\n.task-item {\n    width: 100%;\n    border: 2px solid #bfdbfe;\n    border-radius: 5px;\n    padding: 8px;\n    display: flex;\n    align-items: center;\n    position: relative;\n    gap: 16px;\n}\n\n.checkbox {\n    width: 1.5rem;\n    height: 1.5rem;\n    border-radius: 50%;\n    border: 2px solid lightgreen;\n    background-color: transparent;\n}\n\n.completed {\n    background-color: lightgreen;\n}\n\n.strikethrough {\n    text-decoration: line-through;\n}\n\nbutton:hover,\n.checkbox:hover {\n    cursor: pointer;\n}\n\n\n.task-item p {\n    font-size: 1rem;\n    color: grey;\n}\n\n/* Task Form */\n#form-container {\n    display: none;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    background-color: #bfdbfe;\n    border-radius: 5px;\n}\n\n#form-container form {\n    padding-top: 24px;\n    padding-bottom: 12px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 8px;\n    width: 95%;\n}\n\n#form-container input[type="text"],\n#form-container input[type="date"] {\n    width: 100%;\n    height: 1.5rem;\n    font-family: inherit;\n    border: none;\n    border-radius: 5px;\n    background-color: #eff6ff;\n    padding: 0px 8px;\n}\n\n#form-buttons {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 16px;\n}\n\n#category {\n    display: flex;\n    width: 100%;\n    gap: 16px;\n}\n\n.category-section {\n    display: flex;\n    width: fit-content;\n    align-items: center;\n    gap: 4px;\n}\n',""]);const d=a},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var d=0;d<this.length;d++){var c=this[d][0];null!=c&&(a[c]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);o&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var i={},a=[],d=0;d<e.length;d++){var c=e[d],s=o.base?c[0]+o.base:c[0],l=i[s]||0,u="".concat(s," ").concat(l);i[s]=l+1;var p=t(u),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var f=r(m,o);o.byIndex=d,n.splice(d,0,{identifier:u,updater:f,references:1})}a.push(u)}return a}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var i=o(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var d=t(i[a]);n[d].references--}for(var c=o(e,r),s=0;s<i.length;s++){var l=t(i[s]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}i=c}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={id:o,exports:{}};return e[o](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),o=t(795),r=t.n(o),i=t(569),a=t.n(i),d=t(565),c=t.n(d),s=t(216),l=t.n(s),u=t(589),p=t.n(u),m=t(426),f={};f.styleTagTransform=p(),f.setAttributes=c(),f.insert=a().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=l(),n()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;let h=[];class g{constructor(e,n,t,o,r){this.title=e,this.details=n,this.date=t,this.category=o,this.completed=r}}(()=>{const e=document.getElementById("menu-btn"),n=document.getElementById("nav");let t=!0;e.addEventListener("click",(function(){1==t?(n.style.display="none",document.querySelector("main").style.width="100vw",t=!1):(n.style.display="block",document.querySelector("main").style.width="auto",t=!0)}));const o=document.getElementById("add-task");let r=!1;o.addEventListener("click",(function(){0==r&&(document.getElementById("form-container").style.display="flex",r=!0)})),document.getElementById("hide-form").addEventListener("click",(function(){1==r&&(document.getElementById("form-container").style.display="none",r=!1)}))})();const y=document.querySelectorAll(".folder"),v=document.getElementById("current-directory");let x="businessFolder";function b(e){v.textContent="businessFolder"==e?"Business":"schoolFolder"==e?"School":"Personal"}window.onload=b(x),y.forEach((e=>{e.addEventListener("click",(()=>{x=e.id,b(x)}))}));const k=document.getElementById("form");function E(){const e=document.getElementById("task-list"),n=document.querySelectorAll(".task-item");for(let e=0;e<n.length;e++)n[e].remove();let t=0;h.forEach((n=>{const o=document.createElement("div");o.classList.add("task-item"),e.appendChild(o);const r=document.createElement("div");r.classList.add("checkbox"),r.setAttribute("id","checkbox"),o.appendChild(r);const i=document.createElement("h4");i.classList.add("displayTitle"),i.textContent=n.title,o.appendChild(i);const a=document.createElement("p");a.classList.add("displayDetails"),a.textContent=n.details,o.appendChild(a);const d=document.createElement("p");d.classList.add("displayDate"),d.textContent=n.date,o.appendChild(d);const c=document.createElement("button");c.setAttribute("id","edit"),c.textContent="Edit",c.dataset.linkedArray=t,o.appendChild(c),c.addEventListener("click",(()=>{console.log("edit"),n.title="Edited",E()}));const s=document.createElement("button");s.setAttribute("id","delete"),s.textContent="Delete",s.dataset.linkedArray=t,t++,o.appendChild(s);let l=s.dataset.linkedArray;s.addEventListener("click",(()=>{o.remove(),h.splice(l,1)})),r.addEventListener("click",(()=>{r.classList.contains("completed")?(n.completed=!1,r.classList.remove("completed"),i.classList.remove("strikethrough"),a.classList.remove("strikethrough")):(r.classList.add("completed"),n.completed=!0,i.classList.add("strikethrough"),a.classList.add("strikethrough"))}))}))}document.getElementById("submit-task").addEventListener("click",(e=>{e.preventDefault();const n=document.getElementById("task-title").value,t=document.getElementById("task-details").value,o=document.getElementById("task-date").value,r=document.getElementById("business").value,i=document.getElementById("school").value,a=document.getElementById("personal").value;console.log(r),console.log(i),console.log(a);let d=new g(n,t,o);h.push(d),E(),k.reset()}))})()})();