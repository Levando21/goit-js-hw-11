import"./assets/vendor-86291ea8.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function l(){return fetch("https://pixabay.com/api/?key=33885109-a6cb8296a367a3cf09d2759c8&q=big-nature-japan&image_type=photo&pretty=true").then(r=>r.json())}document.getElementById("search");document.getElementById("myButton");const s=document.querySelector(".search-bar");l().then(r=>console.log(r));s.style.display="flex";s.style.justifyContent="center";s.style.gap="20px";
//# sourceMappingURL=commonHelpers.js.map
