/* Typing Loop */
const text="Frendy Brilyan Pratama";
let i=0,del=false;
function loop(){
 let el=document.getElementById("typing");
 if(!del){
  el.innerHTML=text.substring(0,i++);
  if(i>text.length){del=true;setTimeout(loop,900);return;}
 }else{
  el.innerHTML=text.substring(0,i--);
  if(i<0){del=false;i=0;}
 }
 setTimeout(loop,del?40:70);
}
loop();

/* Cursor */
const cursor=document.querySelector(".cursor");
document.addEventListener("mousemove",e=>{
 cursor.style.top=e.clientY+"px";
 cursor.style.left=e.clientX+"px";
});

/* Reveal */
function reveal(){
 document.querySelectorAll(".reveal").forEach(el=>{
  if(el.getBoundingClientRect().top<window.innerHeight-100){
   el.classList.add("active");
  }
 });
}
window.addEventListener("scroll",reveal);
reveal();

/* Navbar Active */
const links=document.querySelectorAll(".nav-link");
window.addEventListener("scroll",()=>{
 let fromTop=window.scrollY+120;
 links.forEach(link=>{
  let sec=document.querySelector(link.getAttribute("href"));
  if(sec.offsetTop<=fromTop && sec.offsetTop+sec.offsetHeight>fromTop){
   links.forEach(l=>l.classList.remove("active"));
   link.classList.add("active");
  }
 });
});

/* Particles */
const canvas=document.getElementById("particles");
const ctx=canvas.getContext("2d");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let p=[];
for(let i=0;i<70;i++){
 p.push({x:Math.random()*canvas.width,y:Math.random()*canvas.height,r:1+Math.random()*2,d:Math.random()});
}

function draw(){
 ctx.clearRect(0,0,canvas.width,canvas.height);
 ctx.fillStyle="#b266ff";
 p.forEach(pt=>{
  ctx.beginPath();
  ctx.arc(pt.x,pt.y,pt.r,0,Math.PI*2);
  ctx.fill();
 });
 update();
 requestAnimationFrame(draw);
}

function update(){
 p.forEach(pt=>{
  pt.y+=pt.d;
  if(pt.y>canvas.height){pt.y=0;pt.x=Math.random()*canvas.width;}
 });
}
draw();
