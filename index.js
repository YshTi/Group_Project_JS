import{a as p,i as x,A as B,R as H,S as E,N as $,P,b as R}from"./assets/vendor-DhIQcyX0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const f of r.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&o(f)}).observe(document,{childList:!0,subtree:!0});function a(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(s){if(s.ep)return;s.ep=!0;const r=a(s);fetch(s.href,r)}})();p.defaults.baseURL="https://paw-hut.b.goit.study/api";async function D(){return(await p.get("/categories")).data}async function N(e,t,a){let o=e?{page:t,limit:a,categoryId:e}:{page:t,limit:a};return(await p.get("/animals",{params:o})).data}function A(e){let t="Виникла невідома помилка";switch(e){case 400:t="Неправильний запит";break;case 403:t="Немає авторизован";break;case 404:t="Не існує ресурсу";break;case 500:t="Проблеми з сервером";break;case 502:t="Поганий шлюз";break;case 503:t="Сервіс на разі недоступний";break;case 504:t="Час очікування вичерпано";break}x.error({title:"Помилка",message:t,position:"topRight",theme:"dark",backgroundColor:"#ef4040"})}const n={backdrop:document.querySelector("#animal-modal-backdrop"),modalContent:document.querySelector("#modal-content"),closeBtn:document.querySelector("#modal-close")};function j(e){var a;const t=((a=e.categories)==null?void 0:a.map(o=>o.name).join(", "))||"Тваринка";return`
    <img src="${e.image}" alt="${e.name}" class="animal-img" />
    <div class="animal-info-wrapper"> 
        <p class="animal-species">${t}</p>
        <h2 class="animal-name">${e.name}</h2>
        
        <p class="animal-meta">
            <span class="meta-key">${e.age}</span> 
            <span class="meta-key">${e.gender}</span>
        </p>

        <ul class="animal-traits-list-2">
            <li class="trait-item">
                <h3 class="trait-title">Опис:</h3>
                <p class="trait-text">${e.description||"Опис скоро з’явиться"}</p>
            </li>
            <li class="trait-item">
                <h3 class="trait-title">Здоров’я:</h3>
                <p class="trait-text">${e.health||"Тваринка здорова та обстежена"}</p>
            </li>
            <li class="trait-item">
                <h3 class="trait-title">Поведінка:</h3>
                <p class="trait-text">${e.behavior||"Спокійна та дружелюбна"}</p>
            </li>
        </ul>
        
        <button type="button" class="btn-adopt" id="btn-open-form">Взяти додому</button>
    </div>
  `}function F(e){!n.backdrop||!n.modalContent||(n.modalContent.innerHTML=j(e),n.backdrop.classList.remove("is-hidden"),document.body.classList.add("modal-open"),window.addEventListener("keydown",M))}function y(){n.backdrop.classList.add("is-hidden"),document.body.classList.remove("modal-open"),window.removeEventListener("keydown",M)}function M(e){e.code==="Escape"&&y()}var S;(S=n.closeBtn)==null||S.addEventListener("click",y);var q;(q=n.backdrop)==null||q.addEventListener("click",e=>{e.target===n.backdrop&&y()});function V(e){return g.find(t=>t._id===e)}let g=[],d="all",u=1,b,w=U();function U(){return window.innerWidth>=1440?9:8}const h=document.querySelector(".our-pets-categories");h.addEventListener("click",K);async function G(){try{const e=await D();z(e)}catch(e){A(e.status)}}function z(e){let t=e.map(a=>`<li class="our-pets-category-item">
      <button class="category-btn" data-id="${a._id}" aria-label="${a.name}" type="button">${a.name}</button>
      </li>`).join("");h.innerHTML=`<li class="our-pets-category-item">
        <button class="category-btn active" data-id="all" aria-label="Всі" type="button">
          Всі
        </button>
      </li>`+t}function K(e){if(e.target.dataset.id!==d&&e.target.closest("button")){let t=h.querySelector(".active");t&&t.classList.remove("active"),d=e.target.dataset.id,e.target.classList.add("active"),L()}}const v=document.querySelector(".our-pets-list");async function L(e=!1){_(),I(),e||(v.innerHTML="",u=1);const t=d==="all"?"":d;try{const a=await N(t,u,w);b=Math.ceil(a.totalItems/w),W(a.animals),C(),e?g.push(...a.animals):g=a.animals}catch(a){A(a.status)}finally{X()}}v.addEventListener("click",e=>{const t=e.target.closest(".pets-btn");if(!t)return;const a=t.dataset.id,o=V(a);o&&F(o)});function W(e){let t=e.map(a=>{let o=a.categories.map(s=>`<li class="pets-category"><p>${s.name}</p></li>`).join("");return`      <li class="our-pets-item">
        <img
          class="pets-img"
          src="${a.image}"
          alt="${a.species}"
        />
        <p class="pets-species">${a.species}</p>
        <h3 class="pets-name">${a.name}</h3>
        <ul class="pets-categories">
          ${o}
        </ul>
        <ul class="pets-personal">
                  <li class="pets-personal-item">${a.age}</li>
          <li class="pets-personal-item">${a.gender}</li>
        </ul>
        <p class="pets-short-description">
          ${a.shortDescription}
        </p>
        <button class="pets-btn" type="button" data-id="${a._id}" aria-label="Дізнатись більше про ${a.name}">Дізнатись більше</button>
      </li>`}).join("");v.insertAdjacentHTML("beforeend",t)}const k=document.querySelector("#pets-pagination");k.addEventListener("click",J);function C(){return b&&u<b?(Q(),!0):(_(),!1)}async function J(){C()&&(u+=1,L(!0))}function _(){k.classList.add("IsHidden")}function Q(){k.classList.remove("IsHidden")}const T=document.querySelector(".loader");function X(){T.classList.add("IsHidden")}function I(){T.classList.remove("IsHidden")}async function Y(){I(),await G(),await L()}Y();document.addEventListener("DOMContentLoaded",function(){new B(".faq-accordion",{duration:400,showMultiple:!1,collapse:!0});function e(){document.querySelectorAll(".faq-accordion .ac").forEach(t=>{const a=t.querySelector(".faq-icon use");t.classList.contains("is-active")?a.setAttribute("href","/img/sprite.svg#icon-close"):a.setAttribute("href","/img/sprite.svg#icon-add")})}document.querySelectorAll(".faq-accordion .ac").forEach(t=>{t.addEventListener("click",()=>{setTimeout(e,50)})}),e()});const Z="https://paw-hut.b.goit.study/api/feedbacks";async function ee(e=1){const t={limit:6,page:e};try{return(await p.get(Z,{params:t})).data}catch(a){console.log("Feedback error:",a)}}const te=document.querySelector(".textFedbacks");async function ae(e=1){try{const a=(await ee(e)).feedbacks.map(({author:o,rate:s,description:r})=>`
        <li class="swiper-slide">
          <div class="feedbacks-content">

            <div class="raty-stars" data-score="${s}"></div>

            <p class="feedback-description">
              ${r}
            </p>

            <p class="feedback-author">
              ${o}
            </p>

          </div>
        </li>
      `).join("");te.innerHTML=a,document.querySelectorAll(".raty-stars").forEach(o=>{const s=o.dataset.score;new H(o,{starType:"i",score:s,readOnly:!0,halfShow:!0}).init()}),new E(".stories-swiper",{modules:[$,P],slidesPerView:1,spaceBetween:32,navigation:{nextEl:".stories-next",prevEl:".stories-prev"},pagination:{el:".stories-pagination",clickable:!0},breakpoints:{768:{slidesPerView:2}}})}catch(t){console.log(t)}}const i=document.querySelector(".about-swiper"),c=i==null?void 0:i.closest(".about__slider");i&&c&&new E(i,{modules:[$,P,R],slidesPerView:1,speed:500,loop:!1,allowTouchMove:!0,watchOverflow:!0,a11y:{enabled:!0},navigation:{prevEl:c.querySelector(".about__nav--prev"),nextEl:c.querySelector(".about__nav--next")},pagination:{el:c.querySelector(".about__pagination"),clickable:!0,dynamicBullets:!1}});const l=document.querySelector(".footer__cat-decor");function O(){if(!l)return;const e=Math.floor(Math.random()*8e3)+40,t=Math.floor(Math.random()*81)+5;setTimeout(()=>{l.style.left=`${t}%`,l.classList.add("is-visible"),setTimeout(()=>{l.classList.remove("is-visible"),O()},4e3)},e)}O();const se=document.querySelector(".nav-burgermenu"),oe=document.querySelector(".mobile-close-icon"),m=document.querySelector(".mobile-modal");se.addEventListener("click",()=>{m.classList.add("is-active")});oe.addEventListener("click",()=>{m.classList.remove("is-active")});document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",function(t){t.preventDefault(),m.classList.contains("is-active")&&m.classList.remove("is-active"),document.querySelector(this.getAttribute("href")).scrollIntoView({behavior:"smooth",block:"start"})})});ae();
//# sourceMappingURL=index.js.map
