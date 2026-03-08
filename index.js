import{a as d,i as j,S as E,A as H,R as V,b as A,N as I,P as C,c as G}from"./assets/vendor-zibWxtCk.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(s){if(s.ep)return;s.ep=!0;const r=a(s);fetch(s.href,r)}})();d.defaults.baseURL="https://paw-hut.b.goit.study/api";async function U(){return(await d.get("/categories")).data}async function z(e,t,a){let o=e?{page:t,limit:a,categoryId:e}:{page:t,limit:a};return(await d.get("/animals",{params:o})).data}function _(e){let t="Виникла невідома помилка";switch(e){case 400:t="Неправильний запит";break;case 403:t="Немає авторизован";break;case 404:t="Не існує ресурсу";break;case 500:t="Проблеми з сервером";break;case 502:t="Поганий шлюз";break;case 503:t="Сервіс на разі недоступний";break;case 504:t="Час очікування вичерпано";break}j.error({title:"Помилка",message:t,position:"topRight",theme:"dark",backgroundColor:"#ef4040"})}async function J(e){return(await d.post("https://paw-hut.b.goit.study/api/orders",e)).data}const S=document.querySelector(".modalCloseButton");function K(e){const t=document.getElementById("form-backdrop");if(!t)return;const a=t.querySelector("form");a&&(a.dataset.animalId=e,t.classList.remove("is-hidden"),document.body.classList.add("body-no-scroll"),a.addEventListener("submit",async o=>{var r,i;if(o.preventDefault(),!a.name.value.trim()||!a.tel.value.trim()){a.reportValidity();return}const s={name:a.name.value.trim(),phone:a.tel.value.trim(),animalId:a.dataset.animalId,comment:a.comment.value.trim()||"Немає коментаря"};try{W(),await J(s),E.fire({icon:"success",title:"Успіх!",text:"Ваша заявка відправлена."}),y()}catch(N){E.fire({icon:"error",title:"Помилка",text:((i=(r=N.response)==null?void 0:r.data)==null?void 0:i.message)||"Помилка при відправленні заявки"})}finally{Q()}},{once:!0}))}function y(){const e=document.getElementById("form-backdrop");if(!e)return;const t=e.querySelector("form");t&&t.reset(),e.classList.add("is-hidden"),document.body.classList.remove("body-no-scroll")}S&&S.addEventListener("click",y);document.addEventListener("click",e=>{const t=document.getElementById("form-backdrop");t&&e.target===t&&y()});document.addEventListener("keydown",e=>{const t=document.getElementById("form-backdrop");t&&e.key==="Escape"&&!t.classList.contains("is-hidden")&&y()});const B=document.querySelector("#form-backdrop .loader");function W(){B.classList.remove("is-hidden")}function Q(){B.classList.add("is-hidden")}const n={backdrop:document.querySelector("#animal-modal-backdrop"),modalContent:document.querySelector("#modal-content"),closeBtn:document.querySelector("#modal-close")};function X(e){return`
    <img src="${e.image}" alt="${e.name}" class="animal-img" />
    <div class="animal-info-wrapper"> 
        <p class="animal-species">${e.species}</p>
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
        
        <button type="button" class="btn-adopt" data-animal-id="${e._id||""}"" >Взяти додому</button>
    </div>
  `}function Y(e){if(!n.backdrop||!n.modalContent)return;n.modalContent.innerHTML=X(e),n.backdrop.classList.remove("is-hidden"),document.body.classList.add("modal-open");const t=n.modalContent.querySelector(".btn-adopt");t&&t.addEventListener("click",()=>{const a=t.dataset.animalId;K(a),b()}),window.addEventListener("keydown",O)}function b(){n.backdrop.classList.add("is-hidden"),document.body.classList.remove("modal-open"),window.removeEventListener("keydown",O)}function O(e){e.code==="Escape"&&b()}var P;(P=n.closeBtn)==null||P.addEventListener("click",b);var M;(M=n.backdrop)==null||M.addEventListener("click",e=>{e.target===n.backdrop&&b()});function Z(e){return g.find(t=>t._id===e)}let g=[],p="all",f=1,h,q=ee();function ee(){return window.innerWidth>=1440?9:8}const v=document.querySelector(".our-pets-categories");v.addEventListener("click",se);async function te(){try{const e=await U();ae(e)}catch(e){_(e.status)}}function ae(e){let t=e.map(a=>`<li class="our-pets-category-item">
      <button class="category-btn" data-id="${a._id}" aria-label="${a.name}" type="button">${a.name}</button>
      </li>`).join("");v.innerHTML=`<li class="our-pets-category-item">
        <button class="category-btn active" data-id="all" aria-label="Всі" type="button">
          Всі
        </button>
      </li>`+t}function se(e){if(e.target.dataset.id!==p&&e.target.closest("button")){let t=v.querySelector(".active");t&&t.classList.remove("active"),p=e.target.dataset.id,e.target.classList.add("active"),k()}}const L=document.querySelector(".our-pets-list");async function k(e=!1){x(),F(),e||(L.innerHTML="",f=1);const t=p==="all"?"":p;try{const a=await z(t,f,q);h=Math.ceil(a.totalItems/q),oe(a.animals),T(),e?g.push(...a.animals):g=a.animals}catch(a){_(a.status)}finally{ie()}}L.addEventListener("click",e=>{const t=e.target.closest(".pets-btn");if(!t)return;const a=t.dataset.id,o=Z(a);o&&Y(o)});function oe(e){let t=e.map(a=>{let o=a.categories.map(s=>`<li class="pets-category"><p>${s.name}</p></li>`).join("");return`      <li class="our-pets-item">
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
      </li>`}).join("");L.insertAdjacentHTML("beforeend",t)}const w=document.querySelector("#pets-pagination");w.addEventListener("click",re);function T(){return h&&f<h?(ne(),!0):(x(),!1)}async function re(){T()&&(f+=1,k(!0))}function x(){w.classList.add("is-hidden")}function ne(){w.classList.remove("is-hidden")}const D=document.querySelector(".loader");function ie(){D.classList.add("is-hidden")}function F(){D.classList.remove("is-hidden")}async function ce(){F(),await te(),await k()}ce();const $="/Group_Project_JS/assets/sprite-DBtBz0EI.svg";document.addEventListener("DOMContentLoaded",function(){new H(".faq-accordion",{duration:400,showMultiple:!1,collapse:!0});function e(){document.querySelectorAll(".faq-accordion .ac").forEach(t=>{const a=t.querySelector(".faq-icon use");t.classList.contains("is-active")?a.setAttribute("href",`${$}#icon-close`):a.setAttribute("href",`${$}#icon-add`)})}document.querySelectorAll(".faq-accordion .ac").forEach(t=>{t.addEventListener("click",()=>{setTimeout(e,50)})}),e()});const le="https://paw-hut.b.goit.study/api/feedbacks";async function de(e=1){const t={limit:6,page:e};try{return(await d.get(le,{params:t})).data}catch(a){console.log("Feedback error:",a)}}const ue=document.querySelector(".textFedbacks");async function me(e=1){try{const a=(await de(e)).feedbacks.map(({author:o,rate:s,description:r})=>`
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
      `).join("");ue.innerHTML=a,document.querySelectorAll(".raty-stars").forEach(o=>{const s=o.dataset.score;new V(o,{starType:"i",score:s,readOnly:!0,halfShow:!0}).init()}),new A(".stories-swiper",{modules:[I,C],slidesPerView:1,spaceBetween:32,navigation:{nextEl:".stories-next",prevEl:".stories-prev"},pagination:{el:".stories-pagination",clickable:!0},breakpoints:{768:{slidesPerView:2}}})}catch(t){console.log(t)}}const l=document.querySelector(".about-swiper"),u=l==null?void 0:l.closest(".about__slider");l&&u&&new A(l,{modules:[I,C,G],slidesPerView:1,speed:500,loop:!1,allowTouchMove:!0,watchOverflow:!0,a11y:{enabled:!0},navigation:{prevEl:u.querySelector(".about__nav--prev"),nextEl:u.querySelector(".about__nav--next")},pagination:{el:u.querySelector(".about__pagination"),clickable:!0,dynamicBullets:!1}});const m=document.querySelector(".footer__cat-decor");function R(){if(!m)return;const e=Math.floor(Math.random()*8e3)+40,t=Math.floor(Math.random()*81)+5;setTimeout(()=>{m.style.left=`${t}%`,m.classList.add("is-visible"),setTimeout(()=>{m.classList.remove("is-visible"),R()},4e3)},e)}R();const pe=document.querySelector(".nav-burgermenu"),fe=document.querySelector(".mobile-close-icon"),c=document.querySelector(".mobile-modal");pe.addEventListener("click",()=>{c.classList.add("is-active")});fe.addEventListener("click",()=>{c.classList.remove("is-active")});document.addEventListener("keydown",e=>{e.key==="Escape"&&c.classList.contains("is-active")&&c.classList.remove("is-active")});document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",function(t){t.preventDefault(),c.classList.contains("is-active")&&c.classList.remove("is-active"),document.querySelector(this.getAttribute("href")).scrollIntoView({behavior:"smooth",block:"start"})})});me();
//# sourceMappingURL=index.js.map
