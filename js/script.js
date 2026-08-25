const $=s=>document.querySelector(s), $$=s=>document.querySelectorAll(s);

const themeBtn=$("#themeBtn"), body=document.body;
themeBtn.addEventListener("click",()=>{body.classList.toggle("light");localStorage.setItem("theme",body.classList.contains("light")?"light":"dark");themeBtn.innerHTML=body.classList.contains("light")?'<i class="fa-solid fa-moon"></i>':'<i class="fa-solid fa-sun"></i>'});
if(localStorage.getItem("theme")==="light"){body.classList.add("light");themeBtn.innerHTML='<i class="fa-solid fa-moon"></i>'}

$("#menuBtn").addEventListener("click",()=>$("#navMenu").classList.toggle("open"));
$$('#navMenu a').forEach(a=>a.addEventListener("click",()=>$("#navMenu").classList.remove("open")));

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.12});
$$(".reveal").forEach(el=>observer.observe(el));

let counted=false;
const statObs=new IntersectionObserver(entries=>{if(entries[0].isIntersecting&&!counted){counted=true;$$("[data-count]").forEach(el=>{let end=+el.dataset.count,n=0,step=Math.max(1,Math.ceil(end/25));const t=setInterval(()=>{n+=step;if(n>=end){n=end;clearInterval(t)}el.textContent=n+"+"},45)})}},{threshold:.5});
statObs.observe($(".stats"));

$$(".filter").forEach(btn=>btn.addEventListener("click",()=>{ $$(".filter").forEach(b=>b.classList.remove("active"));btn.classList.add("active");const f=btn.dataset.filter;$$(".project-card").forEach(card=>{card.style.display=(f==="all"||card.dataset.tags.split(" ").includes(f))?"block":"none"})}));

const projects=[
["01 / PYTHON • EDA","Diwali Sales Analysis","Analyzed customer purchasing behavior, sales trends, product categories and demographic patterns.","Diwali Sales dataset","Python, Pandas, NumPy, Matplotlib, Seaborn","EDA → cleaning → visualization → insights"],
["02 / PYTHON • CLEANING","Crime Data Analysis","Explored a messy crime dataset with cleaning and exploratory techniques.","Messy Crime dataset","Python, Pandas, NumPy, Matplotlib","Missing values → duplicates → filtering → grouping"],
["03 / POWER BI • DASHBOARD","Sales Dashboard","Designed an interactive dashboard for sales performance and business trends.","Sales dataset","Power BI, Excel, Visualization","Data preparation → KPIs → dashboard → insights"],
["04 / MACHINE LEARNING","ML Prediction","Built a machine-learning workflow covering preprocessing, feature engineering, training and evaluation.","Prediction dataset","Python, Pandas, Scikit-learn","Preprocess → engineer features → train → evaluate"],
["05 / ML • CLUSTERING","Customer Segmentation","Segmented customers using behavioral and purchasing patterns.","Customer dataset","Python, Scikit-learn, K-Means","Prepare → scale → cluster → interpret"],
["06 / SQL • ANALYTICS","SQL Data Analysis","Performed business-oriented relational analysis using SQL.","SQL business dataset","SQL, MySQL","Filter → aggregate → subquery → analyze"]
];
$$(".details-btn").forEach(btn=>btn.addEventListener("click",()=>{const p=projects[+btn.dataset.project];$("#modalTag").textContent=p[0];$("#modalTitle").textContent=p[1];$("#modalDescription").textContent=p[2];$("#modalDataset").textContent=p[3];$("#modalTools").textContent=p[4];$("#modalMethod").textContent=p[5];$("#modalInsight").textContent="Add your final project-specific findings and measurable results here.";$("#projectModal").classList.add("open");$("#projectModal").setAttribute("aria-hidden","false")}));
function closeModal(){$("#projectModal").classList.remove("open");$("#projectModal").setAttribute("aria-hidden","true")}
$("#modalClose").addEventListener("click",closeModal);$("#projectModal").addEventListener("click",e=>{if(e.target.id==="projectModal")closeModal()});document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal()});

$("#contactForm").addEventListener("submit",e=>{e.preventDefault();$("#formMsg").textContent="Thanks! This demo form is validated. Connect it to Formspree, EmailJS or your backend to send messages.";e.target.reset()});
$("#topBtn").addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));
$("#year").textContent=new Date().getFullYear();

const sections=$$("section[id]"), navLinks=$$("#navMenu a");
window.addEventListener("scroll",()=>{let y=scrollY+180;sections.forEach(sec=>{if(y>=sec.offsetTop&&y<sec.offsetTop+sec.offsetHeight){navLinks.forEach(a=>a.classList.toggle("active",a.getAttribute("href")==="#"+sec.id))}})});
