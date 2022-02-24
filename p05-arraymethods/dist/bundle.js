(()=>{"use strict";class e{constructor(e,t){this._name=e,this._money=t,this._name=e,this._money=t}multiplyMoneyBy(e){this._money*=e}getMoneyWithFormat(){return"$"+this._money.toLocaleString()}get name(){return this._name}get money(){return this._money}}const t=new class{constructor(){this._users=[]}get users(){return this._users}addUser(){return t=this,n=void 0,r=function*(){const t=yield function(){return t=this,n=void 0,r=function*(){const t=yield fetch("https://randomuser.me/api"),n=(yield t.json()).results[0].name,o=Math.floor(1e6*Math.random());return new e(`${n.title}.${n.first} ${n.last}`,o)},new((o=void 0)||(o=Promise))((function(e,i){function s(e){try{u(r.next(e))}catch(e){i(e)}}function c(e){try{u(r.throw(e))}catch(e){i(e)}}function u(t){var n;t.done?e(t.value):(n=t.value,n instanceof o?n:new o((function(e){e(n)}))).then(s,c)}u((r=r.apply(t,n||[])).next())}));var t,n,o,r}();return this._users.push(t),t},new((o=void 0)||(o=Promise))((function(e,i){function s(e){try{u(r.next(e))}catch(e){i(e)}}function c(e){try{u(r.throw(e))}catch(e){i(e)}}function u(t){var n;t.done?e(t.value):(n=t.value,n instanceof o?n:new o((function(e){e(n)}))).then(s,c)}u((r=r.apply(t,n||[])).next())}));var t,n,o,r}multiplyMoneyBy(e){this.users.forEach((t=>t.multiplyMoneyBy(e)))}searchByMoney(e,t){const n=[];return this.users.forEach((o=>{o.money>=e&&o.money<=t&&n.push(o)})),n}sortUsersOrderedByMoney(){this.users.sort(((e,t)=>t.money-e.money))}getTotal(){return this.users.reduce(((e,t)=>e+t.money),0)}getTotalWithFormat(){return"$"+this.getTotal().toLocaleString()}},n=document.getElementById("main"),o=document.getElementById("add-user"),r=document.getElementById("double"),i=document.getElementById("show-millionaires"),s=document.getElementById("sort"),c=document.getElementById("calculate-wealth");function u(e){!function(){const e=document.querySelectorAll("#main div");null!=e&&[...e].forEach((e=>e.remove()))}(),e.forEach((e=>{const t=document.createElement("div");t.classList.add("person"),t.innerHTML=`<strong>${e.name}</strong>${e.getMoneyWithFormat()}`,n.appendChild(t)}))}o.addEventListener("click",(function(){return e=this,n=void 0,r=function*(){yield t.addUser(),u(t.users)},new((o=void 0)||(o=Promise))((function(t,i){function s(e){try{u(r.next(e))}catch(e){i(e)}}function c(e){try{u(r.throw(e))}catch(e){i(e)}}function u(e){var n;e.done?t(e.value):(n=e.value,n instanceof o?n:new o((function(e){e(n)}))).then(s,c)}u((r=r.apply(e,n||[])).next())}));var e,n,o,r})),r.addEventListener("click",(function(){t.multiplyMoneyBy(2),u(t.users)})),i.addEventListener("click",(function(){u(t.searchByMoney(1e6,999999999999))})),s.addEventListener("click",(function(){t.sortUsersOrderedByMoney(),u(t.users)})),c.addEventListener("click",(function(){var e;null===(e=document.querySelector("#main div:not(.person)"))||void 0===e||e.remove();const o=document.createElement("div");o.innerHTML=`<h3>Total Width<strong>${t.getTotalWithFormat()}</strong></h3>`,n.appendChild(o)}))})();