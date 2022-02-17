(()=>{"use strict";class e{createSeat(e){const t=document.createElement("div");return t.classList.add("seat"),""!==e&&t.classList.add(e),t.addEventListener("click",this.toggleSelect),t}createRow(e){const t=document.createElement("div");t.classList.add("row");for(let c of e)t.appendChild(this.createSeat(c));return t}createEmptyRow(e){const t=document.createElement("div");t.classList.add("row");for(let c=1;c<=e;c++)t.appendChild(this.createSeat(""));return t}toggleSelect(e){const t=e.target.classList;t.contains("occupied")||(t.contains("selected")?t.remove("selected"):t.add("selected"))}}new class{constructor(){this.container=document.querySelector(".container"),this.movie=document.getElementById("movie"),this.count=document.getElementById("count"),this.total=document.getElementById("total"),this.loadSeats(),this.container.addEventListener("click",this.countSelected.bind(this)),this.movie.addEventListener("change",this.countSelected.bind(this))}countSelected(){const e=document.querySelectorAll(".container .selected").length,t=parseInt(this.movie.value)*e;this.count.innerText=e.toString(),this.total.innerText=t.toString(),this.saveSeats()}saveSeats(){const e=[...document.querySelectorAll(".container .seat")].map((e=>"selected"===e.classList[1]?1:"occupied"===e.classList[1]?2:0));localStorage.setItem("seatStatus",JSON.stringify(e))}loadSeats(){const t=localStorage.getItem("seatStatus");if(null!=t){const c=new e,n=["","selected","occupied"];let s=[];for(let e of JSON.parse(t))s.push(n[parseInt(e)]),s.length%8==0&&(this.container.append(c.createRow(s)),s=[]);this.countSelected()}else this.initSeats()}initSeats(){const t=new e;this.container.append(t.createEmptyRow(8)),this.container.append(t.createEmptyRow(8)),this.container.append(t.createRow(["","","occupied","occupied","","","",""])),this.container.append(t.createRow(["","","","","occupied","","occupied",""])),this.container.append(t.createEmptyRow(8))}}})();