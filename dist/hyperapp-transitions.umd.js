!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).transitions=t()}}(function(){return function t(e,n,r){function o(s,a){if(!n[s]){if(!e[s]){var u="function"==typeof require&&require;if(!a&&u)return u(s,!0);if(i)return i(s,!0);var f=new Error("Cannot find module '"+s+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[s]={exports:{}};e[s][0].call(l.exports,function(t){var n=e[s][1][t];return o(n||t)},l,l.exports,t,e,n,r)}return n[s].exports}for(var i="function"==typeof require&&require,s=0;s<r.length;s++)o(r[s]);return o}({1:[function(t,e,n){function r(t){t.parentNode&&t.parentNode.removeChild(t)}function o(t,e){e.style.transition=`all ${t.easing} ${t.time}ms`}function i(t){return e=>{var n="function"==typeof t?t():t;return Object.assign({},f,n)}}function s(t,e){return function(n){const r=i(n),o=(...t)=>e(r(),...t);return function(e){if(!e||!e.props)return;const n=e.props[t]||(t=>{});return e.props[t]=((...t)=>{n(...t),o(...t)}),e}}}function a(t){const e=+t.getAttribute("data-t-x"),n=+t.getAttribute("data-t-y"),{left:r,top:o}=t.getBoundingClientRect();return t.setAttribute("data-t-x",r),t.setAttribute("data-t-y",o),e?[e-r,n-o]:[null,null]}function u(...t){const e=[...t],n=e.length;var r=e[0];if(1===n)return r;var o;return o=n>2?u(...e.slice(1)):e[1],t=>r(o(t))}const f={name:"",time:0,delay:0,ready:0,easing:"",last:!0},l=s("onremove",(t,e)=>{const n=`${t.name}-leave`;e.style.transition="",e.style.transform="",e.classList.add(n);const i=getComputedStyle(e).getPropertyValue("transform"),[s,u,f,l,c,d]="none"===i?[1,0,0,1,0,0]:i.match(/^matrix\(([^\)]*)\)$/)[1].split(", ").map(t=>+t);e.classList.remove(n);const[m,p]=a(e);e.style.transform=`translate(${m}px, ${p}px)`,setTimeout(i=>{e.classList.add(n),e.style.transform=`matrix(${s}, ${u}, ${f}, ${l}, ${c+m}, ${d+p})`,o(t,e),t.last&&setTimeout(t=>r(e),t.time)},t.delay)}),c=s("oncreate",(t,e)=>setTimeout(t=>a(e),t.ready)),d=s("oncreate",(t,e)=>{const n=`${t.name}-enter`;e.classList.add(n),setTimeout(r=>{o(t,e),e.classList.remove(n)},t.delay)}),m=s("oncreate",(t,e)=>o(t,e)),p=s("onupdate",(t,e)=>{const[n,r]=a(e);e.style.transition="",e.style.transform=`translate(${n}px, ${r}px)`,setTimeout(n=>{o(t,e),e.style.transform="translate(0,0)",setTimeout(t=>{e.style.transform="",e.style.transition=""},t.time)})}),y=s("oncreate",(t,e)=>setTimeout(t=>a(e),t.ready));e.exports={change:m,enter:d,leave:t=>u(c(t),l(t)),move:t=>u(y(t),p(t)),group:function(t){return e=>(e.children.forEach(t),e)},combine:u}},{}]},{},[1])(1)});
