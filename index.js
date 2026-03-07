import{a as p,A as T,R as O,S as $,N as P,P as S,b as I}from"./assets/vendor-CVBrCGGB.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const m of n.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&o(m)}).observe(document,{childList:!0,subtree:!0});function t(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerPolicy&&(n.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?n.credentials="include":a.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(a){if(a.ep)return;a.ep=!0;const n=t(a);fetch(a.href,n)}})();p.defaults.baseURL="https://paw-hut.b.goit.study/api";async function x(){try{return(await p.get("/categories")).data}catch(e){throw e}}async function B(e,s,t){let o=e?{page:s,limit:t,categoryId:e}:{page:s,limit:t};try{return(await p.get("/animals",{params:o})).data}catch(a){throw a}}const r={backdrop:document.querySelector("#animal-modal-backdrop"),modalContent:document.querySelector("#modal-content"),closeBtn:document.querySelector("#modal-close")};function H(e){var t;const s=((t=e.categories)==null?void 0:t.map(o=>o.name).join(", "))||"Тваринка";return`
    <img src="${e.image}" alt="${e.name}" class="animal-img" />
    <div class="animal-info-wrapper"> 
        <p class="animal-species">${s}</p>
        <h2 class="animal-name">${e.name}</h2>
        
        <p class="animal-meta">
            <span class="meta-key">${e.age}</span> 
            <span class="meta-key">${e.gender}</span>
        </p>

        <ul class="animal-traits-list-2">
            <li class="trait-item">
                <h3 class="trait-title">Опис:</h3>
                <p class="trait-text">${e.shortDescription||"Опис скоро з’явиться"}</p>
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
  `}function D(e){!r.backdrop||!r.modalContent||(r.modalContent.innerHTML=H(e),r.backdrop.classList.remove("is-hidden"),document.body.classList.add("modal-open"),window.addEventListener("keydown",E))}function y(){r.backdrop.classList.add("is-hidden"),document.body.classList.remove("modal-open"),window.removeEventListener("keydown",E)}function E(e){e.code==="Escape"&&y()}var L;(L=r.closeBtn)==null||L.addEventListener("click",y);var k;(k=r.backdrop)==null||k.addEventListener("click",e=>{e.target===r.backdrop&&y()});function N(e){return f.find(s=>s._id===e)}let f=[],d="all",u=1,g;function R(){return window.innerWidth>=1440?9:8}const h=document.querySelector(".our-pets-categories");h.addEventListener("click",U);async function j(){try{const e=await x();F(e)}catch(e){console.log("Categories load error:",e)}}function F(e){let s=e.map(t=>`<li class="our-pets-category-item">
      <button class="category-btn" data-id="${t._id}" type="button">${t.name}</button>
      </li>`).join("");h.innerHTML=`<li class="our-pets-category-item">
        <button class="category-btn active" data-id="all" type="button">
          Всі
        </button>
      </li>`+s}function U(e){if(e.target.dataset.id!==d&&e.target.closest("button")){let s=h.querySelector(".active");s&&s.classList.remove("active"),d=e.target.dataset.id,e.target.classList.add("active"),w()}}const b=document.querySelector(".our-pets-list");async function w(e=!1){q(),C(),e||(b.innerHTML="",u=1);const s=d==="all"?"":d,t=R();try{const o=await B(s,u,t);g=Math.ceil(o.totalItems/t),V(o.animals),M(),e?f.push(...o.animals):f=o.animals}catch{console.log("error")}finally{W()}}b.addEventListener("click",e=>{const s=e.target.closest(".pets-btn");if(!s)return;const t=s.dataset.id,o=N(t);o&&D(o)});function V(e){let s=e.map(t=>{let o=t.categories.map(a=>`<li class="pets-category"><p>${a.name}</p></li>`).join("");return`      <li class="our-pets-item">
        <img
          class="pets-img"
          src="${t.image}"
          alt="${t.species}"
        />
        <p class="pets-species">${t.species}</p>
        <h3 class="pets-name">${t.name}</h3>
        <ul class="pets-categories">
          ${o}
        </ul>
        <ul class="pets-personal">
                  <li class="pets-personal-item">${t.age}</li>
          <li class="pets-personal-item">${t.gender}</li>
        </ul>
        <p class="pets-short-description">
          ${t.shortDescription}
        </p>
        <button class="pets-btn" type="button" data-id="${t._id}">Дізнатись більше</button>
      </li>`}).join("");b.insertAdjacentHTML("beforeend",s)}const v=document.querySelector("#pets-pagination");v.addEventListener("click",G);function M(){return g&&u<g?(K(),!0):(q(),!1)}async function G(){M()&&(u+=1,w(!0))}function q(){v.classList.add("IsHidden")}function K(){v.classList.remove("IsHidden")}const _=document.querySelector(".loader");function W(){_.classList.add("IsHidden")}function C(){_.classList.remove("IsHidden")}async function z(){C(),await j(),await w()}z();document.addEventListener("DOMContentLoaded",function(){new T(".faq-accordion",{duration:400,showMultiple:!1,collapse:!0})});const J="https://paw-hut.b.goit.study/api/feedbacks";async function Q(e=1){const s={limit:6,page:e};try{return(await p.get(J,{params:s})).data}catch(t){console.log("Feedback error:",t)}}const X=document.querySelector(".textFedbacks");async function Y(e=1){try{const t=(await Q(e)).feedbacks.map(({author:o,rate:a,description:n})=>`
        <li class="swiper-slide">
          <div class="feedbacks-content">

            <div class="raty-stars" data-score="${a}"></div>

            <p class="feedback-description">
              ${n}
            </p>

            <p class="feedback-author">
              ${o}
            </p>

          </div>
        </li>
      `).join("");X.innerHTML=t,document.querySelectorAll(".raty-stars").forEach(o=>{const a=o.dataset.score;new O(o,{starType:"i",score:a,readOnly:!0,halfShow:!0}).init()}),new $(".stories-swiper",{modules:[P,S],slidesPerView:1,spaceBetween:32,navigation:{nextEl:".stories-next",prevEl:".stories-prev"},pagination:{el:".stories-pagination",clickable:!0},breakpoints:{768:{slidesPerView:2}}})}catch(s){console.log(s)}}const i=document.querySelector(".about-swiper"),c=i==null?void 0:i.closest(".about__slider");i&&c&&new $(i,{modules:[P,S,I],slidesPerView:1,speed:500,loop:!1,allowTouchMove:!0,watchOverflow:!0,a11y:{enabled:!0},navigation:{prevEl:c.querySelector(".about__nav--prev"),nextEl:c.querySelector(".about__nav--next")},pagination:{el:c.querySelector(".about__pagination"),clickable:!0,dynamicBullets:!1}});const l=document.querySelector(".footer__cat-decor");function A(){if(!l)return;const e=Math.floor(Math.random()*8e3)+40,s=Math.floor(Math.random()*81)+5;setTimeout(()=>{l.style.left=`${s}%`,l.classList.add("is-visible"),setTimeout(()=>{l.classList.remove("is-visible"),A()},4e3)},e)}A();Y();
//# sourceMappingURL=index.js.map
