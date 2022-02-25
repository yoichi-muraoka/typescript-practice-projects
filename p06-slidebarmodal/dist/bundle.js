(()=>{"use strict";const e=document.getElementById("toggle"),t=document.getElementById("modal"),s=document.getElementById("open"),n=document.getElementById("close");function i(){t.classList.remove("show-modal")}e.addEventListener("click",(function(){document.body.classList.toggle("show-nav")})),s.addEventListener("click",(function(){t.classList.add("show-modal")})),n.addEventListener("click",i),t.addEventListener("click",(e=>{e.target===t&&i()}));const a=new class{isBlank(e){return""===e.value.trim()?(this.showError(e,`${this.getFieldName(e)} is required`),!0):(this.showSuccess(e),!1)}checkLength(e,t,s){return e.value.length<t?(this.showError(e,`${this.getFieldName(e)} must be at least ${t} characters`),!1):e.value.length>s?(this.showError(e,`${this.getFieldName(e)} must be less than ${s} characters`),!1):(this.showSuccess(e),!0)}checkEmail(e){return/^[^@]+@[^@]+\.[^@]+$/.test(e.value.trim())?(this.showSuccess(e),!0):(this.showError(e,"Email is not valid"),!1)}matchWith(e,t){return e.value!==t.value?(this.showError(t,`Dose not match with ${this.getFieldName(e)}`),!1):(this.showSuccess(t),!0)}validate(e){const t=e.input;let s=!0;return e.isRequired&&(s=!this.isBlank(t)),s&&e.minLength&&e.maxLength&&(s=this.checkLength(t,e.minLength,e.maxLength)),s&&e.isEmail&&(s=this.checkEmail(t)),s&&e.matchWith&&(s=this.matchWith(t,e.matchWith)),s}validateMany(e){let t=!0;for(let s of e)t=this.validate(s)&&t;return t}showError(e,t){e.parentElement.className="form-control error",e.parentElement.querySelector("small").innerText=t}showSuccess(e){e.parentElement.className="form-control success"}getFieldName(e){return e.id.charAt(0).toUpperCase()+e.id.slice(1)}},r=document.querySelector(".modal-form"),c=document.getElementById("name"),l=document.getElementById("email"),h=document.getElementById("password"),o=document.getElementById("password2");r.addEventListener("submit",(e=>{e.preventDefault(),a.validateMany([{input:c,isRequired:!0,minLength:4,maxLength:10},{input:l,isRequired:!0,isEmail:!0},{input:h,isRequired:!0,minLength:6,maxLength:20,matchWith:o}])&&alert("Thank you!")}))})();