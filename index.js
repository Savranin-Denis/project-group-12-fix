(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();(()=>{const n={openModalBtn:document.querySelector("[data-heder-open]"),closeModalBtn:document.querySelector("[data-heder-close]"),modal:document.querySelector("[data-heder]")};n.openModalBtn.addEventListener("click",o),n.closeModalBtn.addEventListener("click",o);function o(){n.modal.classList.toggle("is-open")}})();(()=>{const n=document.querySelector(".hedder-burger.svg"),o=document.querySelector(".menu-close-btn"),r=document.getElementById("backdrop"),s=r.querySelectorAll("a"),e=document.getElementById("orderButton");n.addEventListener("click",()=>{r.classList.add("is-open")}),o.addEventListener("click",()=>{r.classList.remove("is-open")}),s.forEach(t=>{t.addEventListener("click",c=>{c.preventDefault(),r.classList.remove("is-open");const d=t.getAttribute("href").substring(1);document.getElementById(d).scrollIntoView({behavior:"smooth"})})}),e.addEventListener("click",()=>{r.classList.remove("is-open"),document.getElementById("your-order").scrollIntoView({behavior:"smooth"})})})();document.addEventListener("DOMContentLoaded",function(){function n(o){const r=document.getElementById(o);r&&window.scrollTo({top:r.offsetTop,behavior:"smooth"})}document.querySelector(".shop-btn").addEventListener("click",function(){n("your-order")})});
//# sourceMappingURL=index.js.map